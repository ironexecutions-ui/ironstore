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
    API_URL
} from "../../../../../config";

import classicoCategorias
    from "../../../../../modelos/classico/categorias/classico_categorias";

import {
    pegarDominioAtualCategorias,
    lerCacheCategorias,
    salvarCacheCategorias,
    normalizarDadosCategorias,
    dadosCategoriasSaoIguais,
    gerarCategoriasProdutos,
    ordenarProdutosPorDestaque
} from "./cache";

import ProdutoCategoria
    from "./produtocategorias";

/* =========================================================
   CHAVE GERAL
========================================================= */

const IRONSTORE_APP_KEY_GERAL =
    import.meta.env
        .VITE_IRONSTORE_APP_KEY_GERAL;


/* =========================================================
   MODELOS
========================================================= */

const modelosCategorias = {

    classico:
        classicoCategorias,

};


/* =========================================================
   COMPONENTE
========================================================= */

export default function Categorias() {

    const navigate =
        useNavigate();
    /* =====================================================
       CLIENTE LOGADO
    ===================================================== */

    const [
        clienteLogado,
        setClienteLogado
    ] = useState(() => {

        const token =
            localStorage.getItem(
                "ironstore_cliente_token"
            );

        return Boolean(token);
    });
    const [
        produtosCarrinho,
        setProdutosCarrinho
    ] = useState(
        new Set()
    );
    /* =====================================================
       CARREGAR PRODUTOS DO CARRINHO
    ===================================================== */

    async function carregarCarrinho() {

        const token =
            localStorage.getItem(
                "ironstore_cliente_token"
            );


        if (!token) {

            setProdutosCarrinho(
                new Set()
            );

            return;

        }


        try {

            const dominio =
                pegarDominioAtualCategorias();


            const resposta =
                await fetch(
                    `${API_URL}/ironstore/carrinho/verificar?dominio=${encodeURIComponent(
                        dominio
                    )}`,
                    {

                        method:
                            "GET",

                        headers: {

                            "X-IronStore-Key":
                                IRONSTORE_APP_KEY_GERAL,

                            "Authorization":
                                `Bearer ${token}`

                        }

                    }
                );


            const resultado =
                await resposta.json();


            if (!resposta.ok) {

                console.error(
                    "[CARRINHO VERIFICAR]",
                    resultado?.detail
                );

                return;

            }


            setProdutosCarrinho(
                new Set(
                    (
                        resultado?.produtos_ids ||
                        []
                    ).map(
                        String
                    )
                )
            );


        } catch (erro) {

            console.error(
                "[CARRINHO VERIFICAR]",
                erro
            );

        }

    }
    useEffect(() => {

        const token =
            localStorage.getItem(
                "ironstore_cliente_token"
            );


        if (!token) {
            return;
        }


        carregarCarrinho();

    }, []);
    /* =====================================================
       ATUALIZAR ESTADO DO LOGIN
    ===================================================== */
    const location =
        useLocation();

    const estaEmProduto =
        /^\/produtos\/[^/]+\/?$/.test(
            location.pathname
        );
    useEffect(() => {

        function verificarLogin() {

            const token =
                localStorage.getItem(
                    "ironstore_cliente_token"
                );

            setClienteLogado(
                Boolean(token)
            );
        }


        verificarLogin();


        window.addEventListener(
            "storage",
            verificarLogin
        );


        return () => {

            window.removeEventListener(
                "storage",
                verificarLogin
            );

        };

    }, []);
    /* =====================================================
       ADICIONAR AO CARRINHO
    ===================================================== */

    async function adicionarAoCarrinho(
        produto
    ) {

        /* =================================================
           TOKEN
        ================================================= */

        const token =
            localStorage.getItem(
                "ironstore_cliente_token"
            );


        if (!token) {

            setClienteLogado(
                false
            );

            return;

        }


        /* =================================================
           CHAVE
        ================================================= */

        if (!IRONSTORE_APP_KEY_GERAL) {

            console.error(
                "[CARRINHO] Chave IronStore não configurada."
            );

            return;

        }


        try {

            /* =============================================
               DOMÍNIO
            ============================================= */

            const dominio =
                pegarDominioAtualCategorias();


            /* =============================================
               REQUISIÇÃO
            ============================================= */

            const resposta =
                await fetch(
                    `${API_URL}/ironstore/carrinho/adicionar`,
                    {

                        method:
                            "POST",

                        headers: {

                            "Content-Type":
                                "application/json",

                            "X-IronStore-Key":
                                IRONSTORE_APP_KEY_GERAL,

                            "Authorization":
                                `Bearer ${token}`

                        },

                        body:
                            JSON.stringify({

                                dominio:
                                    dominio,

                                produto_id:
                                    produto.id

                            })

                    }
                );


            /* =============================================
               RESPOSTA
            ============================================= */

            let resultado =
                null;


            try {

                resultado =
                    await resposta.json();

            } catch {

                resultado =
                    null;

            }


            /* =============================================
               TOKEN INVÁLIDO / EXPIRADO
            ============================================= */

            if (
                resposta.status === 401
            ) {

                localStorage.removeItem(
                    "ironstore_cliente_token"
                );

                localStorage.removeItem(
                    "ironstore_cliente"
                );

                setClienteLogado(
                    false
                );

                navigate(
                    "/entrar"
                );

                return;

            }


            /* =============================================
               ERRO
            ============================================= */

            if (!resposta.ok) {

                console.error(
                    "[CARRINHO]",
                    resultado?.detail ||
                    `Erro HTTP ${resposta.status}`
                );

                return;

            }


            /* =============================================
               JÁ ESTAVA NO CARRINHO
            ============================================= */




            /* =============================================
               ADICIONADO
            ============================================= */




            if (
                resultado?.adicionado ||
                resultado?.ja_estava_carrinho
            ) {

                setProdutosCarrinho(
                    anterior => {

                        const novo =
                            new Set(anterior);

                        novo.add(
                            String(produto.id)
                        );

                        return novo;
                    }
                );

            }

        } catch (erro) {

            console.error(
                "[CARRINHO] Erro ao adicionar produto:",
                erro
            );

        }

    }
    /* =====================================================
       CACHE INICIAL
    ===================================================== */

    const cacheInicial =
        lerCacheCategorias();


    /* =====================================================
       DADOS
    ===================================================== */

    const [
        dados,
        setDados
    ] = useState(
        cacheInicial
    );


    /* =====================================================
       CATEGORIA SELECIONADA
    ===================================================== */

    const [
        categoriaSelecionada,
        setCategoriaSelecionada
    ] = useState(
        "Todas"
    );
    /* =========================================================
       QUANTIDADE DE PRODUTOS EXIBIDOS
    ========================================================= */

    const PRODUTOS_POR_CARGA =
        20;


    const [
        limiteProdutos,
        setLimiteProdutos
    ] = useState(
        PRODUTOS_POR_CARGA
    );

    /* =====================================================
       ABRIR / FECHAR CATEGORIAS
    ===================================================== */

    const [
        categoriasAbertas,
        setCategoriasAbertas
    ] = useState(false);


    /* =====================================================
       PRODUTOS EMBARALHADOS

       Mantemos isso separado para que uma renderização
       qualquer não fique mudando a ordem dos produtos.
    ===================================================== */

    const [
        ordemProdutos,
        setOrdemProdutos
    ] = useState(
        () =>
            ordenarProdutosPorDestaque(
                cacheInicial?.produtos ||
                []
            )
    );


    /* =====================================================
       SINCRONIZAR
    ===================================================== */

    useEffect(() => {

        let ativo =
            true;


        async function carregar() {

            /* =============================================
               CACHE
            ============================================= */

            const cache =
                lerCacheCategorias();

            if (
                cache &&
                ativo
            ) {

                setDados(
                    cache
                );


                setOrdemProdutos(
                    ordenarProdutosPorDestaque(
                        cache?.produtos ||
                        []
                    )
                );

            }


            /* =============================================
               CHAVE
            ============================================= */

            if (
                !IRONSTORE_APP_KEY_GERAL
            ) {

                console.error(
                    "[CATEGORIAS] VITE_IRONSTORE_APP_KEY_GERAL não configurada."
                );

                return;

            }


            /* =============================================
               SERVIDOR
            ============================================= */

            try {

                const dominio =
                    pegarDominioAtualCategorias();


                const resposta =
                    await fetch(

                        `${API_URL}/ironstore/categorias?dominio=${encodeURIComponent(
                            dominio
                        )}`,

                        {

                            method:
                                "GET",

                            headers: {

                                "X-IronStore-Key":
                                    IRONSTORE_APP_KEY_GERAL,

                            },

                        }

                    );


                let resultado =
                    null;


                try {

                    resultado =
                        await resposta.json();

                } catch {

                    resultado =
                        null;

                }


                if (
                    !ativo
                ) {

                    return;

                }


                if (
                    !resposta.ok
                ) {

                    console.error(
                        "[CATEGORIAS]",
                        resultado?.detail ||
                        `Erro HTTP ${resposta.status}`
                    );

                    return;

                }


                /* =============================================
                   NORMALIZAR SERVIDOR
                ============================================= */

                const servidor =
                    normalizarDadosCategorias(
                        resultado
                    );


                /* =============================================
                   CACHE ATUAL
                ============================================= */

                const cacheAtual =
                    lerCacheCategorias();


                /* =============================================
                   COMPARAR
                ============================================= */

                const igual =
                    dadosCategoriasSaoIguais(
                        cacheAtual,
                        servidor
                    );


                /* =============================================
                   SEM ALTERAÇÃO
                ============================================= */

                if (
                    igual
                ) {

                    return;

                }


                /* =============================================
                   SERVIDOR MUDOU

                   1. Atualiza cache
                   2. Atualiza interface
                   3. Gera nova ordem variada
                ============================================= */

                const atualizado =
                    salvarCacheCategorias(
                        servidor
                    );


                setDados(
                    atualizado
                );


                setOrdemProdutos(
                    ordenarProdutosPorDestaque(
                        atualizado?.produtos ||
                        []
                    )
                );

            } catch (erro) {

                console.warn(
                    "[CATEGORIAS] Backend indisponível. Mantendo cache.",
                    erro
                );

            }

        }


        carregar();


        return () => {

            ativo =
                false;

        };

    }, []);


    /* =====================================================
       PRODUTOS
    ===================================================== */

    const produtos =
        dados?.produtos || [];


    /* =====================================================
       CATEGORIAS DISPONÍVEIS
    ===================================================== */

    const categorias =
        useMemo(
            () =>
                gerarCategoriasProdutos(
                    produtos
                ),
            [produtos]
        );


    /* =====================================================
       GARANTIR CATEGORIA VÁLIDA

       Se uma categoria for removida do servidor enquanto
       estiver selecionada, voltamos para "Todas".
    ===================================================== */

    useEffect(() => {

        if (
            !categorias.includes(
                categoriaSelecionada
            )
        ) {

            setCategoriaSelecionada(
                "Todas"
            );

        }

    }, [
        categorias,
        categoriaSelecionada
    ]);


    /* =====================================================
       PRODUTOS FILTRADOS
    ===================================================== */

    const produtosFiltrados =
        useMemo(() => {

            const idsPermitidos =
                new Set(
                    produtos.map(
                        produto =>
                            produto.id
                    )
                );


            /* =============================================
               Mantém apenas produtos que ainda existem
               no cache mais recente.
            ============================================= */

            const ordemValida =
                ordemProdutos.filter(
                    produto =>
                        idsPermitidos.has(
                            produto.id
                        )
                );


            /* =============================================
               TODAS
            ============================================= */

            if (
                categoriaSelecionada ===
                "Todas"
            ) {

                return ordemValida;

            }


            /* =============================================
               CATEGORIA ESPECÍFICA
            ============================================= */

            return ordemValida.filter(
                produto =>
                    produto.categoria ===
                    categoriaSelecionada
            );


        }, [
            produtos,
            ordemProdutos,
            categoriaSelecionada
        ]);

    /* =========================================================
       PRODUTOS VISÍVEIS
    
       20
       40
       60
       80
       ...
    ========================================================= */

    const produtosVisiveis =
        useMemo(
            () => {

                return produtosFiltrados.slice(
                    0,
                    limiteProdutos
                );

            },
            [
                produtosFiltrados,
                limiteProdutos
            ]
        );


    /* =========================================================
       VERIFICAR SE EXISTEM MAIS
    ========================================================= */

    const temMaisProdutos =
        produtosVisiveis.length <
        produtosFiltrados.length;


    /* =========================================================
       QUANTIDADE DO PRÓXIMO CARREGAMENTO
    ========================================================= */

    const quantidadeProximaCarga =
        Math.min(

            PRODUTOS_POR_CARGA,

            Math.max(
                0,

                produtosFiltrados.length -
                produtosVisiveis.length
            )

        );


    /* =========================================================
       CARREGAR MAIS
    ========================================================= */

    function carregarMaisProdutos() {

        setLimiteProdutos(
            anterior =>
                anterior +
                PRODUTOS_POR_CARGA
        );

    }
    /* =====================================================
       ABRIR PRODUTO
    ===================================================== */

    function abrirProduto(
        produto
    ) {

        if (!produto) {
            return;
        }


        /* =====================================================
           ID PRINCIPAL
    
           principal:
           produto_variedade_id = 0
           usa o próprio id
    
           filho:
           produto_variedade_id > 0
           usa produto_variedade_id
        ===================================================== */

        const produtoVariedadeId =
            Number(
                produto?.produto_variedade_id ?? 0
            );


        const produtoPrincipalId =
            produtoVariedadeId > 0
                ? produtoVariedadeId
                : produto.id;


        if (!produtoPrincipalId) {
            return;
        }


        navigate(
            `/produtos/${produtoPrincipalId}`
        );

    }
    /* =====================================================
       ABRIR PRODUTO NO REELS
    ===================================================== */

    function abrirProdutoReels(
        produto
    ) {

        if (!produto) {
            return;
        }


        const produtoVariedadeId =
            Number(
                produto?.produto_variedade_id ?? 0
            );


        const produtoPrincipalId =
            produtoVariedadeId > 0
                ? produtoVariedadeId
                : produto.id;


        if (!produtoPrincipalId) {
            return;
        }


        navigate(
            `/reels/${produtoPrincipalId}`
        );
    }

    /* =====================================================
       SEM CACHE

       Aguarda o backend.
    ===================================================== */

    if (!dados) {

        return null;

    }


    /* =====================================================
       SEM PRODUTOS DISPONÍVEIS

       Não mostra a seção inteira.
    ===================================================== */

    if (
        produtos.length === 0
    ) {

        return null;

    }


    /* =====================================================
       MODELO
    ===================================================== */

    const modelo =
        dados?.modelo ||
        "classico";


    const estilo =
        modelosCategorias[
        modelo
        ] ||
        modelosCategorias.classico;


    /* =====================================================
       RENDER
    ===================================================== */

    return (
        <>

            <style>
                {estilo}
            </style>


            <section
                className="ironstore-categorias-classico"
            >

                <div
                    className="ironstore-categorias-classico-conteudo"
                >


                    {/* =====================================
                        CABEÇALHO
                    ===================================== */}

                    {/* =====================================
    CABEÇALHO
===================================== */}

                    <div
                        className="ironstore-categorias-classico-cabecalho"
                    >

                        <div
                            className="ironstore-categorias-classico-cabecalho-esquerda"
                        >

                            <span
                                className="ironstore-categorias-classico-subtitulo"
                            >
                                Explore na {dados?.comercio?.loja || "loja"}
                            </span>


                            <div
                                className="ironstore-categorias-classico-titulo-linha"
                            >

                                <h2>
                                    Nossos produtos
                                </h2>


                                {!estaEmProduto && (

                                    <button
                                        type="button"
                                        className={
                                            `
            ironstore-categorias-classico-botao
            ${categoriasAbertas
                                                ? "ativo"
                                                : ""
                                            }
            `
                                        }
                                        onClick={
                                            () =>
                                                setCategoriasAbertas(
                                                    anterior =>
                                                        !anterior
                                                )
                                        }
                                    >

                                        <span>
                                            Categorias
                                        </span>

                                        <span
                                            className="ironstore-categorias-classico-seta"
                                        >
                                            {categoriasAbertas
                                                ? "−"
                                                : "+"
                                            }
                                        </span>

                                    </button>

                                )}
                            </div>

                        </div>

                    </div>


                    {/* =====================================
                        CATEGORIAS
                    ===================================== */}

                    <div
                        className={
                            `
                            ironstore-categorias-classico-opcoes-area
                            ${categoriasAbertas
                                ? "aberto"
                                : ""
                            }
                            `
                        }
                    >

                        <div
                            className="ironstore-categorias-classico-opcoes"
                        >

                            {categorias.map(
                                categoria => (

                                    <button
                                        type="button"
                                        key={
                                            categoria
                                        }
                                        className={
                                            `
                                            ironstore-categorias-classico-categoria
                                            ${categoriaSelecionada ===
                                                categoria
                                                ? "selecionada"
                                                : ""
                                            }
                                            `
                                        }
                                        onClick={
                                            () => {

                                                setCategoriaSelecionada(
                                                    categoria
                                                );


                                                setLimiteProdutos(
                                                    PRODUTOS_POR_CARGA
                                                );


                                                setCategoriasAbertas(
                                                    false
                                                );

                                            }
                                        }
                                    >

                                        {categoria}

                                    </button>

                                )
                            )}

                        </div>

                    </div>


                    {/* =====================================
                        CATEGORIA ATUAL
                    ===================================== */}

                    <div
                        className="ironstore-categorias-classico-resultado"
                    >

                        <span>
                            {categoriaSelecionada}
                        </span>

                        <small>
                            {produtosFiltrados.length}
                            {" "}
                            {produtosFiltrados.length === 1
                                ? "produto"
                                : "produtos"
                            }
                        </small>

                    </div>


                    {/* =====================================
                        PRODUTOS
                    ===================================== */}

                    <div
                        className="ironstore-categorias-classico-grid"
                    >

                        {produtosVisiveis.map(
                            (
                                produto,
                                indiceProduto
                            ) => {

                                /* =============================================
                                   ALTERNÂNCIA DOS CARDS
                        
                                   0 = REELS
                                   1 = NORMAL
                                   2 = REELS
                                   3 = NORMAL
                                   ...
                                ============================================= */

                                const usarModoReels =
                                    indiceProduto % 2 === 0;


                                return (

                                    <ProdutoCategoria
                                        key={produto.id}

                                        produto={
                                            produto
                                        }

                                        modoReels={
                                            usarModoReels
                                        }

                                        onAbrir={
                                            usarModoReels
                                                ? abrirProdutoReels
                                                : abrirProduto
                                        }

                                        clienteLogado={
                                            clienteLogado
                                        }

                                        produtosCarrinho={
                                            produtosCarrinho
                                        }

                                        onAdicionarCarrinho={
                                            adicionarAoCarrinho
                                        }
                                    />

                                );

                            }
                        )}

                    </div>


                    {/* =====================================
                        CARREGAR MAIS
                    ===================================== */}

                    {temMaisProdutos && (

                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: "40px",
                                marginBottom: "10px",
                                padding: "8px 0",
                                boxSizing: "border-box"
                            }}
                        >

                            <button
                                type="button"
                                onClick={carregarMaisProdutos}
                                style={{
                                    appearance: "none",
                                    WebkitAppearance: "none",

                                    minWidth: "215px",
                                    height: "48px",

                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",

                                    gap: "10px",

                                    padding: "0 10px 0 18px",
                                    margin: "0",

                                    border: "1px solid #e2e8f0",
                                    borderRadius: "12px",

                                    background: "#ffffff",
                                    color: "#0f172a",

                                    fontFamily: "inherit",
                                    fontSize: "12px",
                                    fontWeight: "700",

                                    cursor: "pointer",

                                    boxSizing: "border-box",

                                    boxShadow:
                                        "0 2px 5px rgba(15, 23, 42, 0.05), 0 8px 20px rgba(15, 23, 42, 0.06)"
                                }}
                            >

                                {/* TEXTO */}
                                <span
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",

                                        color: "#0f172a",

                                        fontSize: "12px",
                                        fontWeight: "700",
                                        lineHeight: "1",

                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    Carregar mais
                                </span>


                                {/* QUANTIDADE */}
                                <span
                                    style={{
                                        minWidth: "32px",
                                        height: "24px",

                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",

                                        padding: "0 7px",

                                        borderRadius: "7px",

                                        background: "#f1f5f9",
                                        color: "#64748b",

                                        fontSize: "9px",
                                        fontWeight: "700",
                                        lineHeight: "1",

                                        boxSizing: "border-box"
                                    }}
                                >
                                    +{quantidadeProximaCarga}
                                </span>


                                {/* SETA */}
                                <span
                                    style={{
                                        width: "28px",
                                        height: "28px",

                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",

                                        flexShrink: "0",

                                        borderRadius: "8px",

                                        background: "#0f172a",
                                        color: "#ffffff",

                                        fontSize: "15px",
                                        fontWeight: "600",
                                        lineHeight: "1"
                                    }}
                                >
                                    ↓
                                </span>

                            </button>

                        </div>

                    )}


                </div>

            </section>

        </>
    );

}