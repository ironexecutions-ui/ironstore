import React, {
    useEffect,
    useMemo,
    useState
} from "react";

import {
    useLocation,
    useNavigate
} from "react-router-dom";

import {
    lerCacheCategorias
} from "../componentes/home/body/componentes/categorias/cache";

import "./verreels.css";


/* =========================================================
   CONFIGURAÇÃO
========================================================= */

const CACHE_PREFIX =
    "ironstore_ver_reels_fechado";


/* =========================================================
   DOMÍNIO
========================================================= */

function pegarDominioAtual() {

    return window.location.origin
        .trim()
        .toLowerCase()
        .replace(/\/+$/, "");

}


/* =========================================================
   CHAVE DO CACHE

   CADA LOJA POSSUI SEU PRÓPRIO ESTADO.
========================================================= */

function gerarChaveCache() {

    return `${CACHE_PREFIX}:${pegarDominioAtual()}`;

}


/* =========================================================
   VERIFICAR SE FOI FECHADO
========================================================= */

function foiFechado() {

    try {

        return (
            localStorage.getItem(
                gerarChaveCache()
            ) === "1"
        );

    } catch {

        return false;

    }

}


/* =========================================================
   SALVAR FECHAMENTO
========================================================= */

function salvarFechado() {

    try {

        localStorage.setItem(
            gerarChaveCache(),
            "1"
        );

    } catch (
    erro
    ) {

        console.error(
            "[VER REELS CACHE]",
            erro
        );

    }

}


/* =========================================================
   LIBERAR NOVAMENTE
========================================================= */

function liberarNovamente() {

    try {

        localStorage.removeItem(
            gerarChaveCache()
        );

    } catch (
    erro
    ) {

        console.error(
            "[VER REELS CACHE]",
            erro
        );

    }

}


/* =========================================================
   PEGAR IMAGENS
========================================================= */

function pegarImagens(
    produto
) {

    if (!produto?.imagem_url) {
        return [];
    }


    return String(
        produto.imagem_url
    )
        .split("|")
        .map(
            imagem =>
                imagem.trim()
        )
        .filter(Boolean);

}


/* =========================================================
   VERIFICAR PRODUTO PRINCIPAL
========================================================= */

function produtoEhPrincipal(
    produto
) {

    const variedadeId =
        produto?.produto_variedade_id;


    return (
        variedadeId === null ||
        variedadeId === undefined ||
        variedadeId === "" ||
        variedadeId === 0 ||
        variedadeId === "0"
    );

}


/* =========================================================
   PEGAR PRODUTO PARA A PRÉVIA
========================================================= */

function pegarProdutoReels() {

    try {

        const cache =
            lerCacheCategorias();


        const produtos =
            Array.isArray(
                cache?.produtos
            )
                ? cache.produtos
                : [];


        if (!produtos.length) {
            return null;
        }


        /*
         * Preferência:
         *
         * produto principal
         * disponível
         * com pelo menos 3 imagens
         *
         * Assim já tentamos escolher algo compatível
         * com a própria área de Reels.
         */

        const produtoIdeal =
            produtos.find(
                produto => {

                    if (
                        !produto?.id ||
                        !produtoEhPrincipal(
                            produto
                        )
                    ) {
                        return false;
                    }


                    const imagens =
                        pegarImagens(
                            produto
                        );


                    return (
                        imagens.length >= 3
                    );

                }
            );


        if (produtoIdeal) {
            return produtoIdeal;
        }


        /*
         * Fallback:
         * qualquer produto principal com imagem.
         */

        return (
            produtos.find(
                produto =>
                    produto?.id &&
                    produtoEhPrincipal(
                        produto
                    ) &&
                    pegarImagens(
                        produto
                    ).length > 0
            ) ||
            null
        );


    } catch (
    erro
    ) {

        console.error(
            "[VER REELS PRODUTO]",
            erro
        );

        return null;

    }

}


/* =========================================================
   PREÇO
========================================================= */

function moeda(
    valor
) {

    const numero =
        Number(
            valor || 0
        );


    if (
        !Number.isFinite(
            numero
        )
    ) {
        return "";
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
   COMPONENTE
========================================================= */

export default function VerReels() {

    const navigate =
        useNavigate();


    const location =
        useLocation();


    const estaNosReels =
        location.pathname.startsWith(
            "/reels/"
        );


    const [
        fechado,
        setFechado
    ] = useState(
        () => foiFechado()
    );


    const [
        produto,
        setProduto
    ] = useState(
        () => pegarProdutoReels()
    );


    const [
        entrando,
        setEntrando
    ] = useState(false);
    /* =========================================================
       LIBERAR NOVO CLIQUE AO MUDAR DE ROTA
    ========================================================= */

    useEffect(() => {

        setEntrando(
            false
        );

    }, [
        location.pathname
    ]);
    /* =========================================================
       ATUALIZAR 1 SEGUNDO DEPOIS DE CARREGAR
    
       DÁ TEMPO PARA O CACHE DE CATEGORIAS SER
       CARREGADO / ATUALIZADO PELO RESTANTE DO SITE.
    ========================================================= */

    useEffect(() => {

        if (estaNosReels) {
            return;
        }


        const timer =
            setTimeout(
                () => {

                    const produtoAtualizado =
                        pegarProdutoReels();


                    if (
                        produtoAtualizado?.id
                    ) {

                        setProduto(
                            produtoAtualizado
                        );

                    }

                },
                1000
            );


        return () => {

            clearTimeout(
                timer
            );

        };

    }, [
        location.pathname,
        estaNosReels
    ]);
    /* =====================================================
       AO ENTRAR NOS REELS

       APAGA O BLOQUEIO.

       MAS O COMPONENTE CONTINUA INVISÍVEL
       PORQUE estaNosReels = true.
    ===================================================== */

    useEffect(() => {

        if (!estaNosReels) {
            return;
        }


        liberarNovamente();


        setFechado(
            false
        );

    }, [
        estaNosReels
    ]);


    /* =====================================================
       AO MUDAR DE PÁGINA

       TENTA ATUALIZAR O PRODUTO DO CACHE.
    ===================================================== */

    /* =========================================================
     SINCRONIZAR VER REELS APÓS 1 SEGUNDO
  ========================================================= */

    useEffect(() => {

        if (estaNosReels) {
            return;
        }


        const timer =
            setTimeout(
                () => {

                    /* =========================================
                       ATUALIZAR PRODUTO
                    ========================================= */

                    const produtoAtualizado =
                        pegarProdutoReels();


                    if (
                        produtoAtualizado?.id
                    ) {

                        setProduto(
                            produtoAtualizado
                        );

                    }


                    /* =========================================
                       SINCRONIZAR FECHAMENTO
                    ========================================= */

                    setFechado(
                        foiFechado()
                    );

                },
                1000
            );


        return () => {

            clearTimeout(
                timer
            );

        };

    }, [
        location.pathname,
        estaNosReels
    ]);


    /* =====================================================
       ESCUTAR ALTERAÇÕES DO STORAGE

       ÚTIL SE O SITE ESTIVER ABERTO
       EM MAIS DE UMA ABA.
    ===================================================== */

    useEffect(() => {

        function atualizarStorage(
            evento
        ) {

            if (
                evento.key !==
                gerarChaveCache()
            ) {
                return;
            }


            setFechado(
                evento.newValue === "1"
            );

        }


        window.addEventListener(
            "storage",
            atualizarStorage
        );


        return () => {

            window.removeEventListener(
                "storage",
                atualizarStorage
            );

        };

    }, []);


    /* =====================================================
       IMAGENS
    ===================================================== */

    const imagens =
        useMemo(
            () =>
                pegarImagens(
                    produto
                ),
            [
                produto
            ]
        );


    /* =====================================================
       IMAGEM PRINCIPAL
    ===================================================== */

    const imagemPrincipal =
        imagens[0] ||
        "";


    /* =====================================================
       PREÇO
    ===================================================== */

    const preco =
        produto?.preco_promocao ||
        produto?.preco_ironstore ||
        produto?.preco;


    /* =====================================================
       FECHAR
    ===================================================== */

    function fechar(
        evento
    ) {

        evento.stopPropagation();


        salvarFechado();


        setFechado(
            true
        );

    }


    /* =====================================================
       ABRIR REELS
    ===================================================== */

    function abrirReels() {

        if (
            !produto?.id ||
            entrando
        ) {
            return;
        }


        setEntrando(
            true
        );


        /*
         * Já removemos o bloqueio aqui também.
         *
         * Assim, mesmo antes do componente detectar
         * a nova rota, o cache já fica preparado.
         */

        liberarNovamente();


        navigate(
            `/reels/${produto.id}`
        );

    }


    /* =====================================================
       NÃO EXIBIR
    ===================================================== */

    if (
        estaNosReels ||
        fechado ||
        !produto?.id ||
        !imagemPrincipal
    ) {

        return null;

    }


    /* =====================================================
       RETURN
    ===================================================== */

    return (

        <aside
            className="
                ironstore-ver-reels-flutuante
            "
            aria-label="Ver produtos em Reels"
        >

            {/* =============================================
                BOTÃO FECHAR
            ============================================= */}

            <button
                type="button"
                className="
                    ironstore-ver-reels-fechar
                "
                onClick={
                    fechar
                }
                aria-label="Fechar sugestão de Reels"
                title="Fechar"
            >
                ×
            </button>


            {/* =============================================
                CELULAR
            ============================================= */}

            <button
                type="button"
                className="
                    ironstore-ver-reels-celular
                "
                onClick={
                    abrirReels
                }
                aria-label={`Ver ${produto.nome || "produto"} nos Reels`}
            >

                {/* =========================================
                    TOPO DO CELULAR
                ========================================= */}

                <span className="
                    ironstore-ver-reels-celular-topo
                ">

                    <span className="
                        ironstore-ver-reels-camera
                    " />

                    <span className="
                        ironstore-ver-reels-alto-falante
                    " />

                </span>


                {/* =========================================
                    TELA
                ========================================= */}

                <span className="
                    ironstore-ver-reels-tela
                ">

                    <img
                        src={
                            imagemPrincipal
                        }
                        alt={
                            produto.nome ||
                            "Produto"
                        }
                        className="
                            ironstore-ver-reels-imagem
                        "
                    />


                    <span className="
                        ironstore-ver-reels-overlay
                    " />


                    {/* =====================================
                        IDENTIDADE REELS
                    ===================================== */}

                    <span className="
                        ironstore-ver-reels-selo
                    ">
                        REELS
                    </span>


                    {/* =====================================
                        PLAY
                    ===================================== */}

                    <span className="
                        ironstore-ver-reels-play
                    ">
                        ▶
                    </span>


                    {/* =====================================
                        INFORMAÇÕES
                    ===================================== */}

                    <span className="
                        ironstore-ver-reels-info
                    ">

                        <strong>
                            {produto.nome}
                        </strong>


                        {preco && (

                            <small>
                                {moeda(
                                    preco
                                )}
                            </small>

                        )}


                        <span className="
                            ironstore-ver-reels-chamada
                        ">
                            Ver agora
                            <b>
                                ›
                            </b>
                        </span>

                    </span>


                    {/* =====================================
                        BARRA INFERIOR
                    ===================================== */}

                    <span className="
                        ironstore-ver-reels-barra
                    " />

                </span>

            </button>


            {/* =============================================
                TEXTO EXTERNO
            ============================================= */}

            <span className="
                ironstore-ver-reels-texto
            ">
                Ver Reels
            </span>

        </aside>

    );

}