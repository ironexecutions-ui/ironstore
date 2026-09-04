import React, {
    useEffect,
    useState
} from "react";

import {
    API_URL
} from "../../../../config";
const IRONSTORE_APP_KEY_GERAL =
    import.meta.env
        .VITE_IRONSTORE_APP_KEY_GERAL;
/* =========================================================
   DOMÍNIO
========================================================= */
import classicoCompras
    from "../../../../modelos/classico/compras/classico_seguimento";

import {
    carregarCacheCompras,
    sincronizarCacheCompras
} from "./cache";
/* =========================================================
MODELOS
========================================================= */

const modelosCompras = {

    classico:
        classicoCompras,

};
function pegarDominioAtual() {

    return window.location.origin
        .trim()
        .toLowerCase()
        .replace(/\/+$/, "");
}


/* =========================================================
   PREÇO
========================================================= */

function formatarPreco(valor) {

    return Number(
        valor || 0
    ).toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );
}


/* =========================================================
   DATA
========================================================= */

function formatarData(valor) {

    if (!valor) {
        return "-";
    }

    const texto =
        String(valor);

    const data =
        texto.substring(
            0,
            10
        );

    const partes =
        data.split("-");

    if (
        partes.length !== 3
    ) {
        return texto;
    }

    return (
        `${partes[2]}/${partes[1]}/${partes[0]}`
    );
}


/* =========================================================
   HORA
========================================================= */
function formatarHora(valor) {

    if (
        valor === null ||
        valor === undefined ||
        valor === ""
    ) {
        return "-";
    }

    // =============================================
    // MYSQL TIME RECEBIDO COMO SEGUNDOS
    // Exemplo: 79673 -> 22:07:53
    // =============================================

    if (
        typeof valor === "number" ||
        /^\d+$/.test(String(valor).trim())
    ) {

        const totalSegundos =
            Number(valor);

        const horas =
            Math.floor(
                totalSegundos / 3600
            );

        const minutos =
            Math.floor(
                (
                    totalSegundos % 3600
                ) / 60
            );

        const segundos =
            totalSegundos % 60;

        return `${String(horas).padStart(
            2,
            "0"
        )}:${String(minutos).padStart(
            2,
            "0"
        )}:${String(segundos).padStart(
            2,
            "0"
        )}`;
    }

    // =============================================
    // FORMATO NORMAL
    // Exemplo: "22:07:53"
    // =============================================

    const texto =
        String(valor).trim();

    if (
        /^\d{1,2}:\d{2}:\d{2}$/.test(
            texto
        )
    ) {
        return texto;
    }

    if (
        /^\d{1,2}:\d{2}$/.test(
            texto
        )
    ) {
        return texto;
    }

    return texto;
}

/* =========================================================
   PAGAMENTO
========================================================= */

function nomePagamento(valor) {

    const pagamentos = {

        pix:
            "Pix",

        credito:
            "Crédito",

        debito:
            "Débito",

        dinheiro:
            "Dinheiro"

    };

    return (
        pagamentos[
        String(
            valor || ""
        ).toLowerCase()
        ] ||
        valor ||
        "-"
    );
}


/* =========================================================
   IMAGEM
========================================================= */

function primeiraImagem(valor) {

    if (!valor) {
        return "";
    }

    return String(valor)
        .split("|")
        .map(
            item =>
                item.trim()
        )
        .filter(Boolean)[0] || "";
}


/* =========================================================
   COMPONENTE
========================================================= */

export default function Compras() {

    const [
        compras,
        setCompras
    ] = useState([]);

    const [
        carregando,
        setCarregando
    ] = useState(true);

    const [
        erro,
        setErro
    ] = useState("");

    const [
        protocoloAberto,
        setProtocoloAberto
    ] = useState(null);

    const [
        modelo,
        setModelo
    ] = useState(
        "classico"
    );

    const [
        rastreioCopiado,
        setRastreioCopiado
    ] = useState(null);
    /* =====================================================
       CARREGAR COMPRAS
    ===================================================== */

    /* =====================================================
    CARREGAR COMPRAS
    SITE <- CACHE
    SERVIDOR -> CACHE
 ===================================================== */

    useEffect(() => {

        let ativo = true;


        /* =================================================
           MOSTRAR DADOS DO CACHE
        ================================================= */

        function aplicarDadosCache(
            dados
        ) {

            if (!ativo) {
                return;
            }

            setCompras(
                Array.isArray(
                    dados?.compras
                )
                    ? dados.compras
                    : []
            );


            if (
                dados?.modelo
            ) {

                setModelo(
                    String(
                        dados.modelo
                    )
                        .trim()
                        .toLowerCase()
                );
            }
        }


        /* =================================================
           CARREGAR
        ================================================= */

        async function carregar() {

            const token =
                localStorage.getItem(
                    "ironstore_cliente_token"
                );


            /* =============================================
               1. LER CACHE
    
               O SITE SEMPRE RECEBE PRIMEIRO DO CACHE
            ============================================== */

            const cacheInicial =
                carregarCacheCompras();


            if (cacheInicial) {

                aplicarDadosCache(
                    cacheInicial
                );

                setCarregando(
                    false
                );
            }


            /* =============================================
               AUTENTICAÇÃO
            ============================================== */

            if (!token) {

                if (ativo) {

                    setErro(
                        "Cliente não autenticado."
                    );

                    setCarregando(
                        false
                    );
                }

                return;
            }


            try {

                setErro("");


                /* =============================================
                   2. BUSCAR SERVIDOR
    
                   NÃO MANDA PARA O JSX.
                   SERVIDOR SERVE PARA ATUALIZAR O CACHE.
                ============================================== */

                const resposta =
                    await fetch(
                        `${API_URL}/seguimento/me/compras`,
                        {
                            method:
                                "GET",

                            headers: {

                                "Authorization":
                                    `Bearer ${token}`,

                                "X-IronStore-Key":
                                    IRONSTORE_APP_KEY_GERAL,

                                "X-IronStore-Domain":
                                    pegarDominioAtual()
                            }
                        }
                    );


                const resultadoServidor =
                    await resposta.json();


                if (!resposta.ok) {

                    throw new Error(
                        resultadoServidor?.detail ||
                        "Não foi possível carregar suas compras."
                    );
                }


                if (!ativo) {
                    return;
                }


                /* =============================================
                   3. SERVIDOR -> CACHE
    
                   sincronizarCacheCompras compara:
    
                   CACHE ATUAL
                        VS
                   RESPOSTA COMPLETA DO SERVIDOR
    
                   Se mudou, substitui TODO o cache.
                ============================================== */

                const sincronizacao =
                    sincronizarCacheCompras(
                        resultadoServidor
                    );


                /* =============================================
                   4. SE O CACHE MUDOU
    
                   LÊ NOVAMENTE DO CACHE.
    
                   O JSX CONTINUA NÃO RECEBENDO DIRETAMENTE
                   resultadoServidor.
                ============================================== */

                if (
                    sincronizacao.mudou
                ) {

                    const cacheAtualizado =
                        carregarCacheCompras();


                    aplicarDadosCache(
                        cacheAtualizado
                    );
                }


                /* =============================================
                   5. PRIMEIRO ACESSO
    
                   Caso não existisse cache antes,
                   sincronizarCacheCompras acabou de criar.
                ============================================== */

                if (
                    !cacheInicial
                ) {

                    const cacheCriado =
                        carregarCacheCompras();


                    aplicarDadosCache(
                        cacheCriado
                    );
                }


            } catch (
            erroCarregar
            ) {

                if (!ativo) {
                    return;
                }


                console.error(
                    "[IRONSTORE COMPRAS]",
                    erroCarregar
                );


                /* =============================================
                   SE TEM CACHE, CONTINUA FUNCIONANDO.
    
                   Só mostra erro se não existe cache.
                ============================================== */

                const cacheDisponivel =
                    carregarCacheCompras();


                if (!cacheDisponivel) {

                    setErro(
                        erroCarregar?.message ||
                        "Não foi possível carregar suas compras."
                    );
                }


            } finally {

                if (ativo) {

                    setCarregando(
                        false
                    );
                }
            }
        }


        carregar();


        return () => {

            ativo = false;
        };


    }, []);
    /* =====================================================
       ABRIR / FECHAR DETALHES
    ===================================================== */

    function alternarDetalhes(
        protocolo
    ) {

        setProtocoloAberto(
            anterior =>
                String(anterior) ===
                    String(protocolo)
                    ? null
                    : protocolo
        );
    }


    /* =====================================================
       LOADING
    ===================================================== */

    if (carregando) {

        return (

            <>
                <style>
                    {classicoCompras}
                </style>

                <section className="ironstore-perfil-compras-area">

                    <div className="ironstore-compras-loading-premium">

                        <div className="ironstore-compras-loading-cabecalho">

                            <div className="ironstore-compras-loading-linha ironstore-compras-loading-label" />

                            <div className="ironstore-compras-loading-linha ironstore-compras-loading-titulo" />

                            <div className="ironstore-compras-loading-linha ironstore-compras-loading-texto" />

                        </div>

                        <div className="ironstore-compras-loading-card">

                            <div className="ironstore-compras-loading-card-topo" />

                            {[1, 2, 3, 4].map(
                                item => (

                                    <div
                                        key={item}
                                        className="ironstore-compras-loading-item"
                                    >

                                        <div className="ironstore-compras-loading-linha" />

                                        <div className="ironstore-compras-loading-linha" />

                                        <div className="ironstore-compras-loading-linha" />

                                        <div className="ironstore-compras-loading-linha" />

                                        <div className="ironstore-compras-loading-linha ironstore-compras-loading-status" />

                                        <div className="ironstore-compras-loading-linha ironstore-compras-loading-botao" />

                                    </div>

                                )
                            )}

                        </div>

                    </div>

                </section>
            </>

        );
    }

    /* =========================================================
       MODELO VISUAL
    ========================================================= */

    const estilo =
        modelosCompras[
        String(
            modelo ||
            "classico"
        )
            .trim()
            .toLowerCase()
        ] ||
        modelosCompras.classico;



    async function solicitarCancelamento(
        protocolo
    ) {

        const token =
            localStorage.getItem(
                "ironstore_cliente_token"
            );

        if (!token) {
            return;
        }

        try {

            const resposta =
                await fetch(
                    `${API_URL}/seguimento/me/compras/${protocolo}/solicitar-cancelamento`,
                    {
                        method: "GET",

                        headers: {

                            "Authorization":
                                `Bearer ${token}`,

                            "X-IronStore-Key":
                                IRONSTORE_APP_KEY_GERAL,

                            "X-IronStore-Domain":
                                pegarDominioAtual()
                        }
                    }
                );

            const resultado =
                await resposta.json();

            if (!resposta.ok) {

                throw new Error(
                    resultado?.detail ||
                    "Não foi possível iniciar a solicitação."
                );
            }

            if (
                resultado?.whatsapp_url
            ) {

                window.open(
                    resultado.whatsapp_url,
                    "_blank",
                    "noopener,noreferrer"
                );
            }

        } catch (erro) {

            console.error(
                "[SOLICITAR CANCELAMENTO]",
                erro
            );

            alert(
                erro?.message ||
                "Não foi possível iniciar a solicitação."
            );
        }
    }
    /* =====================================================
       RETORNO
    ===================================================== */
    function podeSolicitarCancelamento(compra) {

        if (
            compra?.situacao !== "Entregue"
        ) {
            return false;
        }

        const dataEntregue =
            compra?.seguimento?.data_entregue;

        if (!dataEntregue) {
            return false;
        }

        const texto =
            String(dataEntregue)
                .substring(0, 10);

        const partes =
            texto.split("-");

        if (partes.length !== 3) {
            return false;
        }

        const ano =
            Number(partes[0]);

        const mes =
            Number(partes[1]);

        const dia =
            Number(partes[2]);

        const entrega =
            new Date(
                ano,
                mes - 1,
                dia
            );

        entrega.setHours(
            0,
            0,
            0,
            0
        );

        const hoje =
            new Date();

        hoje.setHours(
            0,
            0,
            0,
            0
        );

        const diferenca =
            hoje.getTime() -
            entrega.getTime();

        const dias =
            Math.floor(
                diferenca /
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            );

        return (
            dias >= 0 &&
            dias <= 7
        );
    }




    async function abrirRastreamento(evento, codigo) {
        evento.preventDefault();
        evento.stopPropagation();

        if (!codigo) {
            return;
        }

        const codigoLimpo = String(codigo).trim();

        const link =
            `https://rastreamento.correios.com.br/app/index.php?objeto=${encodeURIComponent(
                codigoLimpo
            )}`;

        // ==========================================
        // MOSTRA A MODAL IMEDIATAMENTE
        // ==========================================

        setRastreioCopiado(codigoLimpo);

        // ==========================================
        // COPIA O CÓDIGO
        // ==========================================

        try {
            if (
                navigator.clipboard &&
                window.isSecureContext
            ) {
                navigator.clipboard
                    .writeText(codigoLimpo)
                    .catch((erro) => {
                        console.error(
                            "[RASTREIO] Erro ao copiar:",
                            erro
                        );
                    });
            } else {
                const textarea =
                    document.createElement("textarea");

                textarea.value = codigoLimpo;

                textarea.style.position = "fixed";
                textarea.style.left = "-999999px";
                textarea.style.top = "-999999px";

                document.body.appendChild(textarea);

                textarea.focus();
                textarea.select();

                document.execCommand("copy");

                textarea.remove();
            }
        } catch (erro) {
            console.error(
                "[RASTREIO] Erro ao copiar código:",
                erro
            );
        }

        // ==========================================
        // AGUARDA 1 SEGUNDO E REDIRECIONA
        // ==========================================

        setTimeout(() => {
            window.location.assign(link);
        }, 2000);
    }
    return (
        <>
            {rastreioCopiado && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 2147483647,

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        padding: "20px",

                        background: "rgba(15, 23, 42, 0.38)",
                        backdropFilter: "blur(5px)",
                        WebkitBackdropFilter: "blur(5px)"
                    }}
                >
                    <div
                        style={{
                            width: "min(420px, calc(100vw - 32px))",

                            display: "flex",
                            alignItems: "center",
                            gap: "16px",

                            padding: "20px",

                            borderRadius: "20px",
                            border: "1px solid rgba(15, 23, 42, 0.08)",

                            background: "#ffffff",

                            boxShadow:
                                "0 30px 80px rgba(15, 23, 42, 0.28)",

                            fontFamily: "inherit"
                        }}
                    >
                        <div
                            style={{
                                width: "48px",
                                height: "48px",

                                flexShrink: 0,

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                                borderRadius: "15px",

                                background: "#eef4ff",
                                color: "#142a4a"
                            }}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    d="M20 6L9 17l-5-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div
                            style={{
                                minWidth: 0,

                                display: "flex",
                                flexDirection: "column",
                                gap: "3px"
                            }}
                        >
                            <strong
                                style={{
                                    color: "#101828",
                                    fontSize: "16px",
                                    fontWeight: "750",
                                    lineHeight: "1.3"
                                }}
                            >
                                Código copiado
                            </strong>

                            <span
                                style={{
                                    color: "#344054",
                                    fontSize: "14px",
                                    fontWeight: "650",
                                    lineHeight: "1.4",

                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                }}
                            >
                                {rastreioCopiado}
                            </span>

                            <small
                                style={{
                                    marginTop: "2px",

                                    color: "#667085",
                                    fontSize: "12px",
                                    fontWeight: "500"
                                }}
                            >
                                Abrindo rastreamento...
                            </small>
                        </div>
                    </div>
                </div>
            )}
            <style>
                {estilo}
            </style>

            <section className="ironstore-perfil-compras-area">

                {/* =============================================
                CABEÇALHO
            ============================================== */}

                <header className="ironstore-perfil-compras-header">

                    <div>

                        <span className="ironstore-perfil-compras-label">
                            Histórico
                        </span>

                        <h2>
                            Minhas compras
                        </h2>

                        <p>
                            Acompanhe seus pedidos e consulte
                            os detalhes das suas compras.
                        </p>

                    </div>

                    {compras.length > 0 && (

                        <div className="ironstore-perfil-compras-total">

                            {compras.length}

                            <span>
                                {compras.length === 1
                                    ? "compra"
                                    : "compras"}
                            </span>

                        </div>

                    )}

                </header>


                {/* =============================================
                ERRO
            ============================================== */}

                {erro && (

                    <div className="ironstore-perfil-compras-erro">
                        {erro}
                    </div>

                )}


                {/* =============================================
                SEM COMPRAS
            ============================================== */}

                {!erro &&
                    compras.length === 0 && (

                        <div className="ironstore-perfil-compras-vazio">

                            <strong>
                                Você ainda não possui compras.
                            </strong>

                            <span>
                                Quando uma compra for realizada,
                                ela aparecerá aqui.
                            </span>

                        </div>

                    )}


                {/* =============================================
                TABELA
            ============================================== */}

                {compras.length > 0 && (

                    <div className="ironstore-perfil-compras-tabela-area">

                        <table className="ironstore-perfil-compras-tabela">

                            <thead>

                                <tr>

                                    <th>
                                        Protocolo
                                    </th>

                                    <th>
                                        Total pago
                                    </th>

                                    <th>
                                        Frete
                                    </th>

                                    <th>
                                        Pagamento
                                    </th>

                                    <th>
                                        Situação
                                    </th>

                                    <th>
                                        Ações
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {compras.map(
                                    compra => {

                                        const aberto =
                                            String(
                                                protocoloAberto
                                            ) ===
                                            String(
                                                compra.protocolo
                                            );

                                        const classeSituacao =
                                            String(
                                                compra.situacao ||
                                                ""
                                            )
                                                .toLowerCase()
                                                .normalize("NFD")
                                                .replace(
                                                    /[\u0300-\u036f]/g,
                                                    ""
                                                )
                                                .replace(
                                                    /[^a-z0-9]+/g,
                                                    "-"
                                                )
                                                .replace(
                                                    /^-+|-+$/g,
                                                    ""
                                                );

                                        return (

                                            <React.Fragment
                                                key={
                                                    compra.protocolo
                                                }
                                            >

                                                {/* =============================
                                                COMPRA
                                            ============================== */}

                                                <tr>

                                                    {/* PROTOCOLO */}

                                                    <td>

                                                        <strong className="ironstore-compras-protocolo">

                                                            #
                                                            {
                                                                compra.protocolo
                                                            }

                                                        </strong>

                                                    </td>


                                                    {/* TOTAL */}

                                                    <td>

                                                        <strong>

                                                            {
                                                                formatarPreco(
                                                                    compra.valor_pago
                                                                )
                                                            }

                                                        </strong>

                                                    </td>


                                                    {/* FRETE */}

                                                    <td>

                                                        {
                                                            formatarPreco(
                                                                compra.valor_frete
                                                            )
                                                        }

                                                    </td>


                                                    {/* PAGAMENTO */}

                                                    <td>

                                                        {
                                                            nomePagamento(
                                                                compra.pagamento
                                                            )
                                                        }

                                                    </td>


                                                    {/* SITUAÇÃO */}

                                                    <td>

                                                        <span
                                                            className={
                                                                `ironstore-compras-status ironstore-compras-status-${classeSituacao}`
                                                            }
                                                        >

                                                            {
                                                                compra.situacao
                                                            }

                                                        </span>

                                                    </td>


                                                    {/* AÇÕES */}

                                                    <td>

                                                        <div className="ironstore-compras-acoes">

                                                            <button
                                                                type="button"
                                                                className="ironstore-compras-botao-detalhes"
                                                                onClick={
                                                                    () =>
                                                                        alternarDetalhes(
                                                                            compra.protocolo
                                                                        )
                                                                }
                                                            >

                                                                {
                                                                    aberto
                                                                        ? "Fechar detalhes"
                                                                        : "Ver detalhes"
                                                                }

                                                            </button>

                                                        </div>

                                                    </td>

                                                </tr>


                                                {/* =================================
                                                DETALHES
                                            ================================== */}

                                                {aberto && (

                                                    <tr className="ironstore-compras-detalhes-linha">

                                                        <td colSpan="6">

                                                            <div className="ironstore-compras-detalhes">


                                                                {/* =========================
                                                                RESUMO
                                                            ========================== */}

                                                                <div className="ironstore-compras-detalhes-topo">


                                                                    {/* PROTOCOLO */}

                                                                    <div>

                                                                        <span>
                                                                            Protocolo
                                                                        </span>

                                                                        <strong>

                                                                            #
                                                                            {
                                                                                compra.protocolo
                                                                            }

                                                                        </strong>

                                                                    </div>


                                                                    {/* SITUAÇÃO */}

                                                                    <div>

                                                                        <span>
                                                                            Situação
                                                                        </span>

                                                                        <strong>
                                                                            {
                                                                                compra.situacao ||
                                                                                "-"
                                                                            }
                                                                        </strong>

                                                                    </div>


                                                                    {/* PAGAMENTO */}

                                                                    <div>

                                                                        <span>
                                                                            Pagamento
                                                                        </span>

                                                                        <strong>

                                                                            {
                                                                                nomePagamento(
                                                                                    compra.pagamento
                                                                                )
                                                                            }

                                                                        </strong>

                                                                    </div>


                                                                    {/* TOTAL */}

                                                                    <div>

                                                                        <span>
                                                                            Total pago
                                                                        </span>

                                                                        <strong>

                                                                            {
                                                                                formatarPreco(
                                                                                    compra.valor_pago
                                                                                )
                                                                            }

                                                                        </strong>

                                                                    </div>


                                                                    {/* FRETE */}

                                                                    <div>

                                                                        <span>
                                                                            Frete
                                                                        </span>

                                                                        <strong>

                                                                            {
                                                                                formatarPreco(
                                                                                    compra.valor_frete
                                                                                )
                                                                            }

                                                                        </strong>

                                                                    </div>


                                                                    {/* DATA DO PAGAMENTO */}

                                                                    <div>

                                                                        <span>
                                                                            Pago em
                                                                        </span>

                                                                        <strong>

                                                                            {
                                                                                compra.data
                                                                                    ? `${formatarData(
                                                                                        compra.data
                                                                                    )} às ${formatarHora(
                                                                                        compra.hora
                                                                                    )}`
                                                                                    : "-"
                                                                            }

                                                                        </strong>

                                                                    </div>
                                                                    {/* =========================================
    INFORMAÇÕES DE ENVIO
========================================= */}

                                                                    {compra.situacao === "Enviado · Por receber" && (

                                                                        <>
                                                                            {/* CÓDIGO DE RASTREIO */}

                                                                            <div>

                                                                                <span>
                                                                                    Link de rastreio
                                                                                </span>

                                                                                <strong className="ironstore-compras-rastreio">

                                                                                    {
                                                                                        compra.seguimento?.codigo_rastreio ? (

                                                                                            <button
                                                                                                type="button"
                                                                                                onClick={(evento) =>
                                                                                                    abrirRastreamento(
                                                                                                        evento,
                                                                                                        compra.seguimento.codigo_rastreio
                                                                                                    )
                                                                                                }
                                                                                                className="ironstore-compras-rastreio ironstore-compras-rastreio-botao"
                                                                                            >
                                                                                                {compra.seguimento.codigo_rastreio}
                                                                                            </button>

                                                                                        ) : (
                                                                                            "Não informado"
                                                                                        )
                                                                                    }

                                                                                </strong>

                                                                            </div>


                                                                            {/* MENSAGEM */}

                                                                            <div>

                                                                                <span>
                                                                                    Mensagem
                                                                                </span>

                                                                                <strong>

                                                                                    {
                                                                                        compra.seguimento
                                                                                            ?.mensagem ||
                                                                                        "Nenhuma mensagem"
                                                                                    }

                                                                                </strong>

                                                                            </div>
                                                                        </>

                                                                    )}
                                                                </div>


                                                                {/* =========================
                                                                PRODUTOS
                                                            ========================== */}

                                                                <div className="ironstore-compras-produtos">

                                                                    <div className="ironstore-compras-produtos-titulo">

                                                                        <div>

                                                                            <span>
                                                                                Produtos
                                                                            </span>

                                                                            <strong>

                                                                                {
                                                                                    compra.quantidade_produtos
                                                                                }

                                                                                {" "}

                                                                                {
                                                                                    Number(
                                                                                        compra.quantidade_produtos
                                                                                    ) === 1
                                                                                        ? "unidade"
                                                                                        : "unidades"
                                                                                }

                                                                            </strong>

                                                                        </div>

                                                                        <small>

                                                                            {
                                                                                compra.quantidade_itens
                                                                            }

                                                                            {" "}

                                                                            {
                                                                                Number(
                                                                                    compra.quantidade_itens
                                                                                ) === 1
                                                                                    ? "produto diferente"
                                                                                    : "produtos diferentes"
                                                                            }

                                                                        </small>

                                                                    </div>


                                                                    {/* =========================
                                                                    LISTA
                                                                ========================== */}

                                                                    <div className="ironstore-compras-produtos-lista">

                                                                        {
                                                                            (
                                                                                compra.produtos ||
                                                                                []
                                                                            ).map(
                                                                                produto => {

                                                                                    const imagem =
                                                                                        primeiraImagem(
                                                                                            produto.imagem_url
                                                                                        );

                                                                                    return (

                                                                                        <article
                                                                                            className="ironstore-compras-produto"
                                                                                            key={
                                                                                                produto.id
                                                                                            }
                                                                                        >

                                                                                            {/* IMAGEM */}

                                                                                            <div className="ironstore-compras-produto-imagem">

                                                                                                {imagem ? (

                                                                                                    <img
                                                                                                        src={
                                                                                                            imagem
                                                                                                        }
                                                                                                        alt={
                                                                                                            produto.nome ||
                                                                                                            "Produto"
                                                                                                        }
                                                                                                    />

                                                                                                ) : (

                                                                                                    <span>
                                                                                                        Sem imagem
                                                                                                    </span>

                                                                                                )}

                                                                                            </div>


                                                                                            {/* INFORMAÇÕES */}

                                                                                            <div className="ironstore-compras-produto-info">

                                                                                                <strong>

                                                                                                    {
                                                                                                        produto.nome ||
                                                                                                        `Produto ${produto.id}`
                                                                                                    }

                                                                                                </strong>

                                                                                                <span>

                                                                                                    Quantidade:{" "}

                                                                                                    <b>
                                                                                                        {produto.quantidade}
                                                                                                    </b>

                                                                                                </span>

                                                                                                {produto.seguimento?.preco_pago != null && (

                                                                                                    <span>

                                                                                                        Valor unitário pago:{" "}

                                                                                                        <b>
                                                                                                            {
                                                                                                                formatarPreco(
                                                                                                                    produto.seguimento
                                                                                                                        .preco_pago
                                                                                                                )
                                                                                                            }
                                                                                                        </b>

                                                                                                    </span>

                                                                                                )}


                                                                                                {/* PAGO */}

                                                                                                {produto.seguimento?.pago &&
                                                                                                    !produto.seguimento?.embalado && (

                                                                                                        <span className="ironstore-compras-produto-status">

                                                                                                            Pago · Por embalar

                                                                                                        </span>

                                                                                                    )}


                                                                                                {/* EMBALADO */}

                                                                                                {produto.seguimento?.embalado &&
                                                                                                    !produto.seguimento?.enviado && (

                                                                                                        <span className="ironstore-compras-produto-status">

                                                                                                            Embalado · Por enviar

                                                                                                        </span>

                                                                                                    )}


                                                                                                {/* ENVIADO */}

                                                                                                {produto.seguimento?.enviado &&
                                                                                                    !produto.seguimento?.entregue && (

                                                                                                        <span className="ironstore-compras-produto-status">

                                                                                                            Enviado · Por receber

                                                                                                        </span>

                                                                                                    )}


                                                                                                {/* ENTREGUE */}

                                                                                                {produto.seguimento?.entregue && (

                                                                                                    <span className="ironstore-compras-produto-status">

                                                                                                        Entregue

                                                                                                    </span>

                                                                                                )}


                                                                                                {/* CÓDIGO DE RASTREIO */}

                                                                                                {produto.seguimento
                                                                                                    ?.codigo_rastreio && (

                                                                                                        <span className="ironstore-compras-rastreio">

                                                                                                            Link de rastreio:{" "}

                                                                                                            <b>
                                                                                                                {
                                                                                                                    produto.seguimento
                                                                                                                        .codigo_rastreio
                                                                                                                }
                                                                                                            </b>

                                                                                                        </span>

                                                                                                    )}

                                                                                            </div>

                                                                                        </article>

                                                                                    );

                                                                                }
                                                                            )
                                                                        }

                                                                    </div>

                                                                </div>
                                                                {podeSolicitarCancelamento(compra) && (
                                                                    <div className="ironstore-compras-pos-entrega">

                                                                        <span>
                                                                            Precisa de ajuda com esta compra?
                                                                        </span>

                                                                        <small>
                                                                            Você tem até 7 dias após o recebimento
                                                                            para solicitar cancelamento ou devolução.
                                                                        </small>

                                                                        <button
                                                                            type="button"
                                                                            onClick={
                                                                                () =>
                                                                                    solicitarCancelamento(
                                                                                        compra.protocolo
                                                                                    )
                                                                            }
                                                                        >
                                                                            Solicitar cancelamento
                                                                        </button>

                                                                    </div>

                                                                )}
                                                            </div>

                                                        </td>

                                                    </tr>

                                                )}

                                            </React.Fragment>

                                        );

                                    }
                                )}

                            </tbody>

                        </table>

                    </div>

                )}

            </section>

        </>
    );
}