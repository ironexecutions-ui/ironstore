import React, {
    useEffect,
    useRef,
    useState
} from "react";
import { useNavigate } from "react-router-dom";

import { API_URL } from "../../../config";
import {
    lerCacheCategorias
} from "../../home/body/componentes/categorias/cache";
/* =========================================================
   MODELOS VISUAIS DO HEADER

   PADRÃO DOS ARQUIVOS:
   {nome_do_modelo}_Header.js
========================================================= */

import classicoHeader from "../../../modelos/classico/header/padrao_header";
// import modernoHeader from "./modelos/moderno_Header";
// import premiumHeader from "./modelos/premium_Header";


/* =========================================================
   CHAVE DA CONSULTA DO HEADER
========================================================= */

const IRONSTORE_APP_KEY_HEADER =
    import.meta.env.VITE_IRONSTORE_APP_KEY_HEADER;


/* =========================================================
   MODELOS DISPONÍVEIS
========================================================= */

const modelosHeader = {
    classico: classicoHeader,

    // moderno: modernoHeader,
    // premium: premiumHeader,
};


/* =========================================================
   PEGAR DOMÍNIO ATUAL
========================================================= */

const pegarDominioAtual = () => {
    return window.location.origin
        .trim()
        .replace(/\/+$/, "")
        .toLowerCase();
};


/* =========================================================
   GERAR CHAVE DE CACHE PELO DOMÍNIO
========================================================= */

const gerarChaveCacheHeader = () => {
    const dominioAtual = pegarDominioAtual();

    return `ironstore_header_${dominioAtual}`;
};


/* =========================================================
   NORMALIZAR DADOS DO HEADER
========================================================= */

const normalizarDadosHeader = (dados) => {
    return {
        loja: dados?.loja || "",
        imagem: dados?.imagem || "",
        modelo: dados?.modelo || "classico",
    };
};


/* =========================================================
   PEGAR CACHE DO HEADER

   POR ENQUANTO ESTE CACHE CONTÉM SOMENTE:

   loja
   imagem
   modelo

   Ao adicionar novas funções deste Header que consultem
   o backend, avisar o ChatGPT para verificar quais dados
   também podem ser integrados ao cache.
========================================================= */

const pegarCacheHeader = () => {
    const chaveCache = gerarChaveCacheHeader();

    try {
        const cacheSalvo = localStorage.getItem(chaveCache);

        if (!cacheSalvo) {
            return null;
        }

        const dados = JSON.parse(cacheSalvo);

        return normalizarDadosHeader(dados);
    } catch (error) {
        console.error(
            "Erro ao carregar cache do Header:",
            error
        );

        localStorage.removeItem(chaveCache);

        return null;
    }
};


/* =========================================================
   HEADER
========================================================= */

export default function Header() {

    const navigate = useNavigate();

    const [
        menuAberto,
        setMenuAberto
    ] = useState(false);
    const [
        headerForaDaTela,
        setHeaderForaDaTela
    ] = useState(false);
    const [
        busca,
        setBusca
    ] = useState("");

    const [
        buscaAberta,
        setBuscaAberta
    ] = useState(false);

    const [
        indiceBuscaAtivo,
        setIndiceBuscaAtivo
    ] = useState(-1);

    const buscaRef =
        useRef(null);
    const menuRef =
        useRef(null);
    const menuFlutuanteRef =
        useRef(null);
    /* =====================================================
       ESTADO

       A PRIMEIRA TENTATIVA SEMPRE É O CACHE.
    ===================================================== */
    /* =========================================================
       DETECTAR QUANDO O HEADER SAIU DA TELA
    ========================================================= */

    useEffect(() => {

        function verificarScroll() {

            const header =
                document.querySelector(
                    ".ironstore-header-principal-vitrine"
                );

            if (!header) {
                return;
            }


            const posicao =
                header.getBoundingClientRect();


            /*
             * Só mostra o botão flutuante quando
             * o header inteiro já saiu da tela.
             */
            setHeaderForaDaTela(
                posicao.bottom <= 0
            );

        }


        verificarScroll();


        window.addEventListener(
            "scroll",
            verificarScroll,
            {
                passive: true
            }
        );


        window.addEventListener(
            "resize",
            verificarScroll
        );


        return () => {

            window.removeEventListener(
                "scroll",
                verificarScroll
            );

            window.removeEventListener(
                "resize",
                verificarScroll
            );

        };

    }, []);
    const [dadosHeader, setDadosHeader] = useState(() => {
        return pegarCacheHeader();
    });

    /* =====================================================
       CLIENTE LOGADO
    ===================================================== */

    const [clienteLogado, setClienteLogado] = useState(() => {

        try {

            const token =
                localStorage.getItem(
                    "ironstore_cliente_token"
                );

            const clienteSalvo =
                localStorage.getItem(
                    "ironstore_cliente"
                );

            if (!token || !clienteSalvo) {
                return null;
            }

            return JSON.parse(
                clienteSalvo
            );

        } catch (erro) {

            console.error(
                "Erro ao carregar cliente:",
                erro
            );

            return null;
        }
    });
    useEffect(() => {

        function atualizarClienteHeader() {

            try {

                const token =
                    localStorage.getItem(
                        "ironstore_cliente_token"
                    );

                const clienteSalvo =
                    localStorage.getItem(
                        "ironstore_cliente"
                    );

                if (
                    !token ||
                    !clienteSalvo
                ) {

                    setClienteLogado(null);
                    return;
                }

                setClienteLogado(
                    JSON.parse(
                        clienteSalvo
                    )
                );

            } catch {

                setClienteLogado(null);
            }
        }

        atualizarClienteHeader();

        window.addEventListener(
            "storage",
            atualizarClienteHeader
        );

        window.addEventListener(
            "ironstore-cliente-atualizado",
            atualizarClienteHeader
        );

        return () => {

            window.removeEventListener(
                "storage",
                atualizarClienteHeader
            );

            window.removeEventListener(
                "ironstore-cliente-atualizado",
                atualizarClienteHeader
            );
        };

    }, []);
    /* =====================================================
       CARREGAR DADOS DO HEADER
    ===================================================== */

    useEffect(() => {
        let componenteAtivo = true;


        const carregarHeader = async () => {
            /* =================================================
               1. PRIORIDADE: IDENTIFICAR DOMÍNIO
            ================================================= */

            const dominioAtual = pegarDominioAtual();

            const chaveCache = gerarChaveCacheHeader();


            /* =================================================
               2. CARREGAR CACHE PRIMEIRO
            ================================================= */

            let dadosCache = null;

            try {
                const cacheSalvo =
                    localStorage.getItem(chaveCache);

                if (cacheSalvo) {
                    dadosCache = normalizarDadosHeader(
                        JSON.parse(cacheSalvo)
                    );

                    if (componenteAtivo) {
                        setDadosHeader(dadosCache);
                    }
                }
            } catch (error) {
                console.error(
                    "Cache do Header inválido:",
                    error
                );

                localStorage.removeItem(chaveCache);
            }


            /* =================================================
               3. VERIFICAR SE A CHAVE EXISTE
            ================================================= */

            if (!IRONSTORE_APP_KEY_HEADER) {
                console.error(
                    "VITE_IRONSTORE_APP_KEY_HEADER não configurada."
                );

                return;
            }


            /* =================================================
               4. CONSULTAR BACKEND

               Mesmo existindo cache, consultamos o backend
               para verificar se loja, imagem ou modelo mudou.
            ================================================= */

            try {
                const resposta = await fetch(
                    `${API_URL}/ironstore/header?dominio=${encodeURIComponent(
                        dominioAtual
                    )}`,
                    {
                        method: "GET",

                        headers: {
                            "X-IronStore-Key":
                                IRONSTORE_APP_KEY_HEADER,
                        },
                    }
                );


                /* =================================================
                   TENTAR LER RESPOSTA
                ================================================= */

                let dados = null;

                try {
                    dados = await resposta.json();
                } catch {
                    dados = null;
                }


                /* =================================================
                   ERRO DA API
                ================================================= */

                if (!resposta.ok) {
                    console.error(
                        "Erro ao carregar Header:",
                        dados?.detail ||
                        `Erro HTTP ${resposta.status}`
                    );

                    return;
                }


                /* =================================================
                   5. DADOS RECEBIDOS DO BANCO
                ================================================= */

                const dadosBanco = normalizarDadosHeader({
                    loja: dados?.comercio?.loja,
                    imagem: dados?.comercio?.imagem,
                    modelo: dados?.modelo,
                });


                /* =================================================
                   6. COMPARAR BANCO COM CACHE
                ================================================= */

                const cacheDiferente =
                    !dadosCache ||
                    dadosCache.loja !== dadosBanco.loja ||
                    dadosCache.imagem !== dadosBanco.imagem ||
                    dadosCache.modelo !== dadosBanco.modelo;


                /* =================================================
                   7. ATUALIZAR CACHE SE HOUVER ALTERAÇÃO
                ================================================= */

                if (cacheDiferente) {
                    try {
                        localStorage.setItem(
                            chaveCache,
                            JSON.stringify(dadosBanco)
                        );
                    } catch (error) {
                        console.error(
                            "Erro ao atualizar cache do Header:",
                            error
                        );
                    }
                }


                /* =================================================
                   8. ATUALIZAR HEADER
                ================================================= */

                if (componenteAtivo) {
                    setDadosHeader(dadosBanco);
                }
            } catch (error) {
                console.error(
                    "Erro ao consultar dados do Header:",
                    error
                );
            }
        };


        carregarHeader();


        /* =====================================================
           LIMPEZA
        ===================================================== */

        return () => {
            componenteAtivo = false;
        };
    }, []);


    /* =====================================================
       MODELO VISUAL

       Se o modelo recebido não existir no frontend,
       usamos "classico" como fallback.
    ===================================================== */

    const nomeModelo =
        dadosHeader?.modelo || "classico";

    const estiloHeader =
        modelosHeader[nomeModelo] ||
        modelosHeader.classico;


    /* =====================================================
       NAVEGAÇÃO
    ===================================================== */
    const abrirInicio = () => {
        navigate("/");
    };

    const entrar = () => {
        navigate("/entrar");
    };

    const abrirPerfil = () => {
        navigate("/perfil");
    };

    const abrirCarrinho = () => {
        navigate("/perfil#carrinho");
    };

    const abrirMenu = () => {

        setMenuAberto(
            anterior => !anterior
        );
    };
    const navegarMenu = (
        rota,
        secao
    ) => {

        setMenuAberto(false);

        navigate(
            `${rota}#${secao}`
        );
    };

    /* =========================================================
   ABRIR COMPRAS
========================================================= */

    const abrirComprasMenu = () => {

        setMenuAberto(
            false
        );

        navigate(
            "/compras"
        );

    };


    /* =========================================================
       ABRIR REELS
    
       PEGA AUTOMATICAMENTE UM PRODUTO PRINCIPAL
       CADASTRADO NESTA LOJA.
    ========================================================= */

    const abrirReelsMenu = () => {

        setMenuAberto(
            false
        );


        try {

            const produtos =
                pegarProdutosBusca();


            if (
                !Array.isArray(
                    produtos
                ) ||
                produtos.length === 0
            ) {

                console.warn(
                    "[HEADER REELS] Nenhum produto disponível."
                );

                return;
            }


            /*
             * Procurar um produto principal.
             *
             * produto_variedade_id:
             * null, "", 0 ou "0" = produto principal
             */
            const produto =
                produtos.find(
                    item => {

                        if (!item?.id) {
                            return false;
                        }


                        const variedadeId =
                            item?.produto_variedade_id;


                        return (
                            variedadeId === null ||
                            variedadeId === undefined ||
                            variedadeId === "" ||
                            variedadeId === 0 ||
                            variedadeId === "0"
                        );

                    }
                );


            if (!produto?.id) {

                console.warn(
                    "[HEADER REELS] Nenhum produto principal encontrado."
                );

                return;
            }


            navigate(
                `/reels/${produto.id}`
            );


        } catch (
        erro
        ) {

            console.error(
                "[HEADER REELS] Erro ao abrir Reels:",
                erro
            );

        }

    };
    useEffect(() => {

        function clicarFora(evento) {

            const clicouMenuNormal =
                menuRef.current?.contains(
                    evento.target
                );

            const clicouMenuFlutuante =
                menuFlutuanteRef.current?.contains(
                    evento.target
                );

            if (
                !clicouMenuNormal &&
                !clicouMenuFlutuante
            ) {

                setMenuAberto(false);
            }
        }

        document.addEventListener(
            "mousedown",
            clicarFora
        );

        return () => {

            document.removeEventListener(
                "mousedown",
                clicarFora
            );
        };

    }, []);



    /* =========================================================
   BUSCA DE PRODUTOS
========================================================= */

    const normalizarTextoBusca = (texto) => {
        return String(texto || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
    };


    /* =========================================================
       PEGAR PRODUTOS DO CACHE DE CATEGORIAS
    ========================================================= */

    const pegarProdutosBusca = () => {

        try {

            const cache =
                lerCacheCategorias();

            if (
                !cache ||
                !Array.isArray(cache?.produtos)
            ) {
                return [];
            }

            return cache.produtos;

        } catch (erro) {

            console.error(
                "[HEADER BUSCA] Erro ao ler produtos:",
                erro
            );

            return [];
        }
    };


    /* =========================================================
       RESULTADOS DA BUSCA
    ========================================================= */

    const termoBusca =
        normalizarTextoBusca(
            busca
        );


    const resultadosBusca =
        termoBusca
            ? pegarProdutosBusca()
                .filter(
                    produto => {

                        const nome =
                            normalizarTextoBusca(
                                produto?.nome
                            );

                        const categoria =
                            normalizarTextoBusca(
                                produto?.categoria
                            );

                        return (
                            nome.includes(
                                termoBusca
                            ) ||
                            categoria.includes(
                                termoBusca
                            )
                        );
                    }
                )
                .sort(
                    (a, b) => {

                        const nomeA =
                            normalizarTextoBusca(
                                a?.nome
                            );

                        const nomeB =
                            normalizarTextoBusca(
                                b?.nome
                            );


                        /*
                         * Quem começa exatamente
                         * com o texto digitado vem primeiro.
                         */

                        const aComeca =
                            nomeA.startsWith(
                                termoBusca
                            );

                        const bComeca =
                            nomeB.startsWith(
                                termoBusca
                            );


                        if (
                            aComeca &&
                            !bComeca
                        ) {
                            return -1;
                        }


                        if (
                            !aComeca &&
                            bComeca
                        ) {
                            return 1;
                        }


                        return nomeA.localeCompare(
                            nomeB,
                            "pt-BR"
                        );
                    }
                )
                .slice(
                    0,
                    8
                )
            : [];


    /* =========================================================
       FORMATAR PREÇO
    ========================================================= */

    function formatarPrecoBusca(
        valor
    ) {

        if (
            valor === null ||
            valor === undefined ||
            valor === ""
        ) {
            return "";
        }


        let texto =
            String(valor)
                .trim()
                .replace(/\s/g, "")
                .replace("R$", "");


        if (
            texto.includes(",")
        ) {

            texto =
                texto
                    .replace(/\./g, "")
                    .replace(",", ".");
        }


        const numero =
            Number(texto);


        if (
            Number.isNaN(numero)
        ) {
            return String(valor);
        }


        return numero.toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }
        );
    }


    /* =========================================================
       PEGAR PRIMEIRA IMAGEM
    ========================================================= */

    function pegarImagemBusca(
        produto
    ) {

        const imagemUrl =
            produto?.imagem_url;

        if (!imagemUrl) {
            return "";
        }

        const imagens =
            String(imagemUrl)
                .split("|")
                .map(
                    imagem =>
                        imagem.trim()
                )
                .filter(Boolean);

        return imagens[0] || "";
    }


    /* =========================================================
       PREÇO DO RESULTADO
    ========================================================= */

    function pegarPrecoBusca(
        produto
    ) {

        const promocao =
            produto?.preco_promocao;


        const possuiPromocao =
            promocao !== null &&
            promocao !== undefined &&
            String(promocao).trim() !== "" &&
            Number(
                String(promocao)
                    .replace(/\./g, "")
                    .replace(",", ".")
                    .replace("R$", "")
                    .trim()
            ) > 0;


        if (
            possuiPromocao
        ) {
            return {
                promocao: true,

                preco:
                    formatarPrecoBusca(
                        promocao
                    ),

                precoAnterior:
                    formatarPrecoBusca(
                        produto?.preco
                    )
            };
        }


        return {
            promocao: false,

            preco:
                formatarPrecoBusca(
                    produto?.preco
                ),

            precoAnterior: ""
        };
    }


    /* =========================================================
       ABRIR PRODUTO
    ========================================================= */

    function abrirProdutoBusca(
        produto
    ) {

        if (
            !produto?.id
        ) {
            return;
        }


        /*
         * Segurança caso futuramente
         * uma variante apareça no cache.
         */

        const produtoVariedadeId =
            Number(
                produto?.produto_variedade_id ??
                0
            );


        const produtoPrincipalId =
            produtoVariedadeId > 0
                ? produtoVariedadeId
                : produto.id;


        setBusca("");

        setBuscaAberta(
            false
        );

        setIndiceBuscaAtivo(
            -1
        );


        navigate(
            `/produtos/${produtoPrincipalId}`
        );
    }


    /* =========================================================
       DIGITAR
    ========================================================= */

    function alterarBusca(
        evento
    ) {

        const valor =
            evento.target.value;


        setBusca(
            valor
        );


        setIndiceBuscaAtivo(
            -1
        );


        setBuscaAberta(
            Boolean(
                valor.trim()
            )
        );
    }


    /* =========================================================
       TECLADO
    ========================================================= */

    function tecladoBusca(
        evento
    ) {

        if (
            evento.key === "Escape"
        ) {

            setBuscaAberta(
                false
            );

            setIndiceBuscaAtivo(
                -1
            );

            return;
        }


        if (
            resultadosBusca.length === 0
        ) {
            return;
        }


        if (
            evento.key === "ArrowDown"
        ) {

            evento.preventDefault();


            setBuscaAberta(
                true
            );


            setIndiceBuscaAtivo(
                anterior => {

                    if (
                        anterior >=
                        resultadosBusca.length - 1
                    ) {
                        return 0;
                    }


                    return anterior + 1;
                }
            );


            return;
        }


        if (
            evento.key === "ArrowUp"
        ) {

            evento.preventDefault();


            setBuscaAberta(
                true
            );


            setIndiceBuscaAtivo(
                anterior => {

                    if (
                        anterior <= 0
                    ) {
                        return (
                            resultadosBusca.length -
                            1
                        );
                    }


                    return anterior - 1;
                }
            );


            return;
        }


        if (
            evento.key === "Enter"
        ) {

            evento.preventDefault();


            const produto =
                indiceBuscaAtivo >= 0
                    ? resultadosBusca[
                    indiceBuscaAtivo
                    ]
                    : resultadosBusca[0];


            if (
                produto
            ) {

                abrirProdutoBusca(
                    produto
                );
            }
        }
    }
    useEffect(() => {

        function clicarForaBusca(
            evento
        ) {

            if (
                buscaRef.current &&
                !buscaRef.current.contains(
                    evento.target
                )
            ) {

                setBuscaAberta(
                    false
                );

                setIndiceBuscaAtivo(
                    -1
                );
            }
        }


        document.addEventListener(
            "mousedown",
            clicarForaBusca
        );


        return () => {

            document.removeEventListener(
                "mousedown",
                clicarForaBusca
            );
        };

    }, []);
    /* =====================================================
       HEADER
    ===================================================== */

    return (
        <>
            {/* =================================================
                ESTILO DO MODELO SELECIONADO
            ================================================= */}

            <style>
                {estiloHeader}
            </style>


            {/* =================================================
                HEADER
            ================================================= */}

            <header className="ironstore-header-principal-vitrine">


                {/* =============================================
                    IDENTIDADE DA LOJA
                ============================================= */}

                <section
                    className="ironstore-header-identidade-loja"
                    onClick={abrirInicio}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                            abrirInicio();
                        }
                    }}
                >
                    {dadosHeader?.imagem && (
                        <img
                            className="ironstore-header-imagem-identidade"
                            src={dadosHeader.imagem}
                            alt={dadosHeader.loja || "Loja"}
                        />
                    )}

                    <span className="ironstore-header-texto-nome-loja">
                        {dadosHeader?.loja || ""}
                    </span>
                </section>

                {/* =============================================
                    PESQUISA
                ============================================= */}

                <section
                    className="ironstore-header-central-pesquisa"
                    ref={buscaRef}
                >

                    <div className="ironstore-header-busca-container">

                        <span
                            className="ironstore-header-busca-icone"
                            aria-hidden="true"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <circle
                                    cx="11"
                                    cy="11"
                                    r="6.5"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                />

                                <path
                                    d="M16 16L20 20"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>


                        <input
                            className="ironstore-header-campo-busca-produtos"
                            type="text"
                            placeholder="Buscar produtos..."
                            autoComplete="off"

                            value={
                                busca
                            }

                            onChange={
                                alterarBusca
                            }

                            onFocus={() => {

                                if (
                                    busca.trim()
                                ) {

                                    setBuscaAberta(
                                        true
                                    );
                                }
                            }}

                            onKeyDown={
                                tecladoBusca
                            }
                        />


                        {busca && (

                            <button
                                type="button"
                                className="ironstore-header-busca-limpar"

                                onClick={() => {

                                    setBusca("");

                                    setBuscaAberta(
                                        false
                                    );

                                    setIndiceBuscaAtivo(
                                        -1
                                    );
                                }}

                                aria-label="Limpar pesquisa"
                            >
                                ×
                            </button>

                        )}

                    </div>


                    {/* =====================================================
        RESULTADOS
    ===================================================== */}

                    {buscaAberta && (

                        <div className="ironstore-header-busca-resultados">


                            {/* =============================================
                CABEÇALHO
            ============================================= */}

                            <div className="ironstore-header-busca-cabecalho">

                                <span>
                                    Produtos
                                </span>

                                {resultadosBusca.length > 0 && (

                                    <small>
                                        {resultadosBusca.length}
                                        {" "}
                                        {resultadosBusca.length === 1
                                            ? "resultado"
                                            : "resultados"
                                        }
                                    </small>

                                )}

                            </div>


                            {/* =============================================
                PRODUTOS
            ============================================= */}

                            {resultadosBusca.length > 0 ? (

                                <div className="ironstore-header-busca-lista">

                                    {resultadosBusca.map(
                                        (
                                            produto,
                                            indice
                                        ) => {

                                            const imagem =
                                                pegarImagemBusca(
                                                    produto
                                                );


                                            const preco =
                                                pegarPrecoBusca(
                                                    produto
                                                );


                                            return (

                                                <button
                                                    key={
                                                        produto.id
                                                    }

                                                    type="button"

                                                    className={`
                                        ironstore-header-busca-produto
                                        ${indiceBuscaAtivo === indice
                                                            ? "ativo"
                                                            : ""
                                                        }
                                    `}

                                                    onMouseEnter={() =>
                                                        setIndiceBuscaAtivo(
                                                            indice
                                                        )
                                                    }

                                                    onClick={() =>
                                                        abrirProdutoBusca(
                                                            produto
                                                        )
                                                    }
                                                >

                                                    {/* IMAGEM */}

                                                    <span className="ironstore-header-busca-produto-imagem">

                                                        {imagem ? (

                                                            <img
                                                                src={
                                                                    imagem
                                                                }

                                                                alt=""
                                                            />

                                                        ) : (

                                                            <span className="ironstore-header-busca-sem-imagem">
                                                                —
                                                            </span>

                                                        )}

                                                    </span>


                                                    {/* DADOS */}

                                                    <span className="ironstore-header-busca-produto-info">

                                                        <strong>
                                                            {produto?.nome}
                                                        </strong>


                                                        {produto?.categoria && (

                                                            <small>
                                                                {produto.categoria}
                                                            </small>

                                                        )}

                                                    </span>


                                                    {/* PREÇO */}

                                                    <span className="ironstore-header-busca-produto-preco">

                                                        {preco.promocao && (

                                                            <small>
                                                                {preco.precoAnterior}
                                                            </small>

                                                        )}

                                                        <strong>
                                                            {preco.preco}
                                                        </strong>

                                                    </span>


                                                    {/* SETA */}

                                                    <span
                                                        className="ironstore-header-busca-produto-seta"
                                                        aria-hidden="true"
                                                    >
                                                        →
                                                    </span>

                                                </button>

                                            );
                                        }
                                    )}

                                </div>

                            ) : (

                                <div className="ironstore-header-busca-vazio">

                                    <span className="ironstore-header-busca-vazio-icone">
                                        ?
                                    </span>

                                    <strong>
                                        Nenhum produto encontrado
                                    </strong>

                                    <p>
                                        Tente pesquisar usando outro nome.
                                    </p>

                                </div>

                            )}


                            {/* =============================================
                RODAPÉ
            ============================================= */}

                            {resultadosBusca.length > 0 && (

                                <div className="ironstore-header-busca-rodape">

                                    <span>
                                        ↑↓ para navegar
                                    </span>

                                    <span>
                                        Enter para abrir
                                    </span>

                                </div>

                            )}

                        </div>

                    )}

                </section>


                {/* =============================================
                    AÇÕES
                ============================================= */}

                <nav className="ironstore-header-controles-direita">


                    {/* ENTRAR */}

                    {clienteLogado ? (

                        <button
                            className="ironstore-header-cliente"
                            type="button"
                            onClick={abrirPerfil} title={[
                                clienteLogado.nome,
                                clienteLogado.sobrenome
                            ]
                                .filter(Boolean)
                                .join(" ") ||
                                "Cliente"
                            }
                        >

                            {clienteLogado.foto ? (

                                <img
                                    className="ironstore-header-cliente-foto"
                                    src={clienteLogado.foto}
                                    alt=""
                                />

                            ) : (

                                <span className="ironstore-header-cliente-avatar">
                                    {(
                                        clienteLogado.nome?.[0] ||
                                        clienteLogado.email?.[0] ||
                                        "U"
                                    ).toUpperCase()}
                                </span>

                            )}

                            <span className="ironstore-header-cliente-dados">



                                <strong>
                                    {[
                                        clienteLogado.nome,
                                        clienteLogado.sobrenome
                                    ]
                                        .filter(Boolean)
                                        .join(" ") ||
                                        "Cliente"
                                    }
                                </strong>

                            </span>

                        </button>

                    ) : (

                        <button
                            className="ironstore-header-acao-entrar"
                            type="button"
                            onClick={entrar}
                        >
                            Entrar
                        </button>

                    )}
                    <button
                        className="ironstore-header-acao-carrinho"
                        type="button"
                        onClick={abrirCarrinho}
                        aria-label="Abrir carrinho"
                    >
                        <svg
                            className="ironstore-header-icone-carrinho"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M3 4H5L7.2 14.2C7.4 15.1 8.2 15.7 9.1 15.7H17.4C18.3 15.7 19.1 15.1 19.3 14.2L21 7H6"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            <circle
                                cx="9.5"
                                cy="19"
                                r="1.25"
                                fill="currentColor"
                            />

                            <circle
                                cx="18"
                                cy="19"
                                r="1.25"
                                fill="currentColor"
                            />
                        </svg>

                        <span className="ironstore-header-texto-carrinho">
                            Carrinho
                        </span>
                    </button>

                    {/* MENU */}

                    <div
                        className="ironstore-header-menu-area"
                        ref={menuRef}
                    >

                        <button
                            className={`ironstore-header-acao-menu ${menuAberto
                                ? "ativo"
                                : ""
                                }`}
                            type="button"
                            onClick={abrirMenu}
                            aria-label={
                                menuAberto
                                    ? "Fechar menu"
                                    : "Abrir menu"
                            }
                            aria-expanded={menuAberto}
                            title="Menu"
                        >

                            {menuAberto
                                ? "×"
                                : "☰"
                            }

                        </button>


                        {menuAberto && !headerForaDaTela && (
                            <div className="ironstore-header-menu-flutuante">

                                {/* =========================================
                EXPLORAR
            ========================================= */}

                                <div className="ironstore-header-menu-grupo">

                                    <span className="ironstore-header-menu-titulo">
                                        Explorar
                                    </span>

                                    <button
                                        type="button"
                                        onClick={
                                            abrirComprasMenu
                                        }
                                    >
                                        Comprar
                                    </button>


                                    <button
                                        type="button"
                                        onClick={
                                            abrirReelsMenu
                                        }
                                    >
                                        Ver Reels
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            navegarMenu(
                                                "/",
                                                "categorias"
                                            )
                                        }
                                    >
                                        Categorias
                                    </button>


                                    <button
                                        type="button"
                                        onClick={() =>
                                            navegarMenu(
                                                "/",
                                                "mais-comprados"
                                            )
                                        }
                                    >
                                        Mais comprados
                                    </button>


                                    <button
                                        type="button"
                                        onClick={() =>
                                            navegarMenu(
                                                "/",
                                                "promocoes"
                                            )
                                        }
                                    >
                                        Promoções
                                    </button>


                                    <button
                                        type="button"
                                        onClick={() =>
                                            navegarMenu(
                                                "/",
                                                "meios-de-envio"
                                            )
                                        }
                                    >
                                        Meios de envio
                                    </button>


                                    {/*     <button
                                        type="button"
                                        onClick={() =>
                                            navegarMenu(
                                                "/",
                                                "depoimentos"
                                            )
                                        }
                                    >
                                        Depoimentos
                                    </button>


                                   <button
                                        type="button"
                                        onClick={() =>
                                            navegarMenu(
                                                "/",
                                                "redes-sociais"
                                            )
                                        }
                                    >
                                        Nossas redes sociais
                                    </button>*/}

                                </div>


                                {/* =========================================
                CONTA
            ========================================= */}

                                {clienteLogado && (

                                    <div className="ironstore-header-menu-grupo">

                                        <span className="ironstore-header-menu-titulo">
                                            Minha conta
                                        </span>


                                        <button
                                            type="button"
                                            onClick={() =>
                                                navegarMenu(
                                                    "/perfil",
                                                    "dados"
                                                )
                                            }
                                        >
                                            Meus dados
                                        </button>


                                        <button
                                            type="button"
                                            onClick={() =>
                                                navegarMenu(
                                                    "/perfil",
                                                    "compras"
                                                )
                                            }
                                        >
                                            Minhas compras
                                        </button>


                                        <button
                                            type="button"
                                            onClick={() =>
                                                navegarMenu(
                                                    "/perfil",
                                                    "mais-vistos"
                                                )
                                            }
                                        >
                                            Mais vistos
                                        </button>


                                        <button
                                            type="button"
                                            onClick={() =>
                                                navegarMenu(
                                                    "/perfil",
                                                    "carrinho"
                                                )
                                            }
                                        >
                                            Carrinho
                                        </button>

                                    </div>

                                )}

                            </div>

                        )}

                    </div>






                </nav>

            </header>
            {/* =================================================
    MENU FLUTUANTE QUANDO HEADER SAI DA TELA
================================================= */}

            {/* =================================================
    MENU FLUTUANTE FIXO

    APARECE SOMENTE QUANDO O HEADER
    SAI COMPLETAMENTE DA TELA
================================================= */}

            {headerForaDaTela && (

                <div
                    ref={menuFlutuanteRef}
                    className="
            ironstore-header-menu-flutuante-fixo-area
        "
                >

                    {/* =========================================
            BOTÃO MENU
        ========================================= */}

                    <button
                        type="button"
                        className={`
                ironstore-header-menu-flutuante-fixo-botao

                ${menuAberto
                                ? "ativo"
                                : ""
                            }
            `}
                        onClick={
                            abrirMenu
                        }
                        aria-label={
                            menuAberto
                                ? "Fechar menu"
                                : "Abrir menu"
                        }
                        aria-expanded={
                            menuAberto
                        }
                        title="Menu"
                    >

                        {menuAberto
                            ? "×"
                            : "☰"
                        }

                    </button>


                    {/* =========================================
            CONTEÚDO DO MENU
        ========================================= */}

                    {menuAberto && (

                        <div className="ironstore-header-menu-flutuante-fixo-conteudo">

                            {/* =================================
                    EXPLORAR
                ================================= */}

                            <div
                                className="
                        ironstore-header-menu-flutuante-fixo-grupo
                    "
                            >

                                <span
                                    className="
                            ironstore-header-menu-flutuante-fixo-titulo
                        "
                                >
                                    Explorar
                                </span>


                                <button
                                    type="button"
                                    onClick={
                                        abrirComprasMenu
                                    }
                                >
                                    Comprar
                                </button>


                                <button
                                    type="button"
                                    onClick={
                                        abrirReelsMenu
                                    }
                                >
                                    Ver Reels
                                </button>


                                <button
                                    type="button"
                                    onClick={() =>
                                        navegarMenu(
                                            "/",
                                            "categorias"
                                        )
                                    }
                                >
                                    Categorias
                                </button>


                                <button
                                    type="button"
                                    onClick={() =>
                                        navegarMenu(
                                            "/",
                                            "mais-comprados"
                                        )
                                    }
                                >
                                    Mais comprados
                                </button>


                                <button
                                    type="button"
                                    onClick={() =>
                                        navegarMenu(
                                            "/",
                                            "promocoes"
                                        )
                                    }
                                >
                                    Promoções
                                </button>


                                <button
                                    type="button"
                                    onClick={() =>
                                        navegarMenu(
                                            "/",
                                            "meios-de-envio"
                                        )
                                    }
                                >
                                    Meios de envio
                                </button>

                            </div>


                            {/* =================================
                    MINHA CONTA
                ================================= */}

                            {clienteLogado && (

                                <div
                                    className="
                            ironstore-header-menu-flutuante-fixo-grupo
                        "
                                >

                                    <span
                                        className="
                                ironstore-header-menu-flutuante-fixo-titulo
                            "
                                    >
                                        Minha conta
                                    </span>


                                    <button
                                        type="button"
                                        onClick={() =>
                                            navegarMenu(
                                                "/perfil",
                                                "dados"
                                            )
                                        }
                                    >
                                        Meus dados
                                    </button>


                                    <button
                                        type="button"
                                        onClick={() =>
                                            navegarMenu(
                                                "/perfil",
                                                "compras"
                                            )
                                        }
                                    >
                                        Minhas compras
                                    </button>


                                    <button
                                        type="button"
                                        onClick={() =>
                                            navegarMenu(
                                                "/perfil",
                                                "mais-vistos"
                                            )
                                        }
                                    >
                                        Mais vistos
                                    </button>


                                    <button
                                        type="button"
                                        onClick={() =>
                                            navegarMenu(
                                                "/perfil",
                                                "carrinho"
                                            )
                                        }
                                    >
                                        Carrinho
                                    </button>

                                </div>

                            )}

                        </div>

                    )}

                </div>

            )}
        </>
    );
}