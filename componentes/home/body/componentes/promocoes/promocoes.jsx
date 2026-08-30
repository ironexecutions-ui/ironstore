import React, {
    useEffect,
    useState
} from "react";

import {
    useNavigate
} from "react-router-dom";

import {
    API_URL
} from "../../../../../config";

import ProdutoCategoria
    from "../categorias/produtocategorias";


import classicoPromocoes
    from "../../../../../modelos/classico/promocoes/classico_promocoes";
import {
    pegarDominioAtualPromocoes,
    lerCachePromocoes,
    salvarCachePromocoes,
    normalizarDadosPromocoes,
    dadosPromocoesSaoIguais
} from "./cache";


/* =========================================================
   CHAVE
========================================================= */

const IRONSTORE_APP_KEY_GERAL =
    import.meta.env
        .VITE_IRONSTORE_APP_KEY_GERAL;

/* =========================================================
   MODELOS
========================================================= */

const modelosPromocoes = {

    classico:
        classicoPromocoes,

};
/* =========================================================
   COMPONENTE
========================================================= */

export default function Promocoes() {

    const navigate =
        useNavigate();


    /* =====================================================
       CACHE INICIAL
    ===================================================== */

    const cacheInicial =
        lerCachePromocoes();


    const [
        dados,
        setDados
    ] = useState(
        cacheInicial
    );


    /* =====================================================
       LOGIN
    ===================================================== */

    const [
        clienteLogado,
        setClienteLogado
    ] = useState(
        () =>
            Boolean(
                localStorage.getItem(
                    "ironstore_cliente_token"
                )
            )
    );


    /* =====================================================
       CARRINHO
    ===================================================== */

    const [
        produtosCarrinho,
        setProdutosCarrinho
    ] = useState(
        new Set()
    );


    /* =====================================================
       SINCRONIZAR PROMOÇÕES
    ===================================================== */

    useEffect(() => {

        let ativo =
            true;


        async function carregar() {

            /* =============================================
               CACHE PRIMEIRO
            ============================================= */

            const cache =
                lerCachePromocoes();


            if (
                cache &&
                ativo
            ) {

                setDados(
                    cache
                );

            }


            /* =============================================
               CHAVE
            ============================================= */

            if (
                !IRONSTORE_APP_KEY_GERAL
            ) {

                console.error(
                    "[PROMOÇÕES] VITE_IRONSTORE_APP_KEY_GERAL não configurada."
                );

                return;

            }


            try {

                /* =============================================
                   MESMA FONTE DE CATEGORIAS
                ============================================= */

                const dominio =
                    pegarDominioAtualPromocoes();


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
                                    IRONSTORE_APP_KEY_GERAL

                            }

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
                        "[PROMOÇÕES]",
                        resultado?.detail ||
                        `Erro HTTP ${resposta.status}`
                    );

                    return;

                }


                /* =============================================
                   FILTRA + NORMALIZA

                   Aqui todos os produtos sem preco_promocao
                   são removidos.
                ============================================= */

                const servidor =
                    normalizarDadosPromocoes(
                        resultado
                    );


                /* =============================================
                   CACHE ATUAL
                ============================================= */

                const cacheAtual =
                    lerCachePromocoes();


                /* =============================================
                   COMPARAR
                ============================================= */

                const igual =
                    dadosPromocoesSaoIguais(
                        cacheAtual,
                        servidor
                    );


                if (
                    igual
                ) {

                    return;

                }


                /* =============================================
                   MUDOU

                   servidor
                      ↓
                   cache de promoções
                      ↓
                   interface
                ============================================= */

                const atualizado =
                    salvarCachePromocoes(
                        servidor
                    );


                if (
                    !ativo
                ) {

                    return;

                }


                setDados(
                    atualizado
                );


            } catch (erro) {

                console.warn(
                    "[PROMOÇÕES] Backend indisponível. Mantendo cache.",
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
       CARRINHO
    ===================================================== */

    useEffect(() => {

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
                    pegarDominioAtualPromocoes();


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


                if (
                    !resposta.ok
                ) {

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
                    "[PROMOÇÕES CARRINHO]",
                    erro
                );

            }

        }


        carregarCarrinho();

    }, []);


    /* =====================================================
       LOGIN
    ===================================================== */

    useEffect(() => {

        function verificarLogin() {

            setClienteLogado(

                Boolean(
                    localStorage.getItem(
                        "ironstore_cliente_token"
                    )
                )

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

        const token =
            localStorage.getItem(
                "ironstore_cliente_token"
            );


        if (!token) {

            setClienteLogado(
                false
            );

            navigate(
                "/entrar"
            );

            return;

        }


        try {

            const dominio =
                pegarDominioAtualPromocoes();


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


            if (
                !resposta.ok
            ) {

                console.error(
                    "[PROMOÇÕES CARRINHO]",
                    resultado?.detail ||
                    `Erro HTTP ${resposta.status}`
                );

                return;

            }


            if (
                resultado?.adicionado ||
                resultado?.ja_estava_carrinho
            ) {

                setProdutosCarrinho(
                    anterior => {

                        const novo =
                            new Set(
                                anterior
                            );


                        novo.add(
                            String(
                                produto.id
                            )
                        );


                        return novo;

                    }
                );

            }


        } catch (erro) {

            console.error(
                "[PROMOÇÕES CARRINHO]",
                erro
            );

        }

    }


    /* =====================================================
       PRODUTOS
    ===================================================== */

    const produtos =
        dados?.produtos ||
        [];

    /* =========================================================
       QUANTIDADE POR CARGA
    ========================================================= */

    const PRODUTOS_POR_CARGA =
        20;


    const [
        limiteProdutos,
        setLimiteProdutos
    ] = useState(
        PRODUTOS_POR_CARGA
    );


    /* =========================================================
       PRODUTOS VISÍVEIS
    ========================================================= */

    const produtosVisiveis =
        produtos.slice(
            0,
            limiteProdutos
        );


    /* =========================================================
       EXISTEM MAIS PRODUTOS?
    ========================================================= */

    const temMaisProdutos =
        produtosVisiveis.length <
        produtos.length;


    /* =========================================================
       QUANTIDADE DA PRÓXIMA CARGA
    ========================================================= */

    const quantidadeProximaCarga =
        Math.min(

            PRODUTOS_POR_CARGA,

            Math.max(
                0,

                produtos.length -
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


        const produtoVariedadeId =
            Number(
                produto?.produto_variedade_id ??
                0
            );


        const produtoPrincipalId =
            produtoVariedadeId > 0
                ? produtoVariedadeId
                : produto.id;


        if (
            !produtoPrincipalId
        ) {

            return;

        }


        navigate(
            `/produtos/${produtoPrincipalId}`
        );

    }


    /* =====================================================
       SEM CACHE
    ===================================================== */

    if (
        !dados
    ) {

        return null;

    }


    /* =====================================================
       SEM PROMOÇÕES

       REGRA PEDIDA:
       se nenhum produto possui preco_promocao,
       a área inteira desaparece.
    ===================================================== */

    if (
        produtos.length === 0
    ) {

        return null;

    }


    /* =====================================================
       RENDER
    ===================================================== */
    /* =====================================================
       MODELO
    ===================================================== */

    const modelo =
        String(
            dados?.modelo ||
            "classico"
        )
            .trim()
            .toLowerCase();


    const estilo =
        modelosPromocoes[
        modelo
        ] ||
        modelosPromocoes.classico;


    return (
        <>
            <style>
                {estilo}
            </style>

            <section
                className="ironstore-promocoes"
            >

                <div
                    className="ironstore-promocoes-conteudo"
                >

                    {/* =========================================
                    CABEÇALHO
                ========================================= */}

                    <div
                        className="ironstore-promocoes-topo"
                    >

                        <div
                            className="ironstore-promocoes-topo-esquerda"
                        >

                            <div
                                className="ironstore-promocoes-icone"
                            >

                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >

                                    <path
                                        d="M20 12.5 12.5 20a2 2 0 0 1-2.83 0L4 14.33a2 2 0 0 1 0-2.83L11.5 4H18a2 2 0 0 1 2 2v6.5Z"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                    <circle
                                        cx="16"
                                        cy="8"
                                        r="1.25"
                                        fill="currentColor"
                                    />

                                </svg>

                            </div>


                            <div
                                className="ironstore-promocoes-titulos"
                            >

                                <span
                                    className="ironstore-promocoes-subtitulo"
                                >
                                    Preços especiais
                                </span>

                                <h2>
                                    Promoções
                                </h2>

                                <p>
                                    Produtos selecionados com preços especiais.
                                </p>

                            </div>

                        </div>


                        <div
                            className="ironstore-promocoes-indicador"
                        >

                            <span
                                className="ironstore-promocoes-indicador-ponto"
                            />

                            <div>
                                <strong>
                                    {produtos.length}
                                </strong>

                                <span>
                                    {produtos.length === 1
                                        ? "oferta ativa"
                                        : "ofertas ativas"
                                    }
                                </span>
                            </div>

                        </div>

                    </div>


                    {/* =========================================
                    DIVISOR
                ========================================= */}

                    <div
                        className="ironstore-promocoes-divisor"
                    >

                        <span>
                            Aproveite enquanto estiver disponível
                        </span>

                        <div />

                    </div>


                    {/* =========================================
                    PRODUTOS
                ========================================= */}

                    <div
                        className="ironstore-promocoes-grid"
                    >

                        {produtosVisiveis.map(
                            produto => (

                                <div
                                    key={produto.id}
                                    className="ironstore-promocoes-produto"
                                >

                                    <div
                                        className="ironstore-promocoes-selo"
                                    >
                                        Oferta
                                    </div>

                                    <ProdutoCategoria
                                        produto={produto}

                                        onAbrir={
                                            abrirProduto
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

                                </div>

                            )
                        )}

                    </div>


                    {/* =========================================
                        CARREGAR MAIS
                    ========================================= */}

                    {temMaisProdutos && (

                        <div
                            className="ironstore-promocoes-carregar-area"
                        >

                            <button
                                type="button"
                                className="ironstore-promocoes-carregar"
                                onClick={
                                    carregarMaisProdutos
                                }
                            >

                                <span>
                                    Carregar mais
                                </span>

                                <small>
                                    +{quantidadeProximaCarga}
                                </small>

                                <span
                                    className="ironstore-promocoes-carregar-icone"
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