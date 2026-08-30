import React, {
    useEffect,
    useState
} from "react";

import {
    useNavigate
} from "react-router-dom";

import {
    API_URL
} from "../../../../config";


/* COMPONENTE DO PRODUTO */

import ProdutoCategoria
    from "../../../home/body/componentes/categorias/produtocategorias";


/* CSS DO MODELO CLÁSSICO */

import classicoCategorias
    from "../../../../modelos/classico/categorias/classico_categorias";


/* CACHE / DOMÍNIO */

import {
    pegarDominioAtualCategorias
} from "../../../home/body/componentes/categorias/cache";

/* =========================================================
   CHAVE IRONSTORE
========================================================= */

const IRONSTORE_APP_KEY_GERAL =
    import.meta.env
        .VITE_IRONSTORE_APP_KEY_GERAL;

/* =========================================================
   CACHE EXCLUSIVO DO CARRINHO
========================================================= */

const CACHE_CARRINHO_PREFIX =
    "ironstore_carrinho";


function pegarChaveCacheCarrinho(
    dominio,
    clienteId = ""
) {

    return `${CACHE_CARRINHO_PREFIX}:${dominio}:${clienteId}`;

}


/* =========================================================
   PEGAR ID DO CLIENTE SALVO LOCALMENTE

   SOMENTE PARA SEPARAR O CACHE LOCAL.
   NÃO É USADO COMO AUTENTICAÇÃO.
========================================================= */

function pegarClienteIdCacheCarrinho() {

    try {

        const cliente =
            JSON.parse(
                localStorage.getItem(
                    "ironstore_cliente"
                ) || "{}"
            );


        return String(
            cliente?.id || ""
        );


    } catch {

        return "";

    }

}


/* =========================================================
   LER CACHE
========================================================= */

function lerCacheCarrinho(
    dominio
) {

    try {

        const clienteId =
            pegarClienteIdCacheCarrinho();


        const chave =
            pegarChaveCacheCarrinho(
                dominio,
                clienteId
            );


        const salvo =
            localStorage.getItem(
                chave
            );


        if (!salvo) {
            return [];
        }


        const dados =
            JSON.parse(
                salvo
            );


        return Array.isArray(
            dados
        )
            ? dados
            : [];


    } catch (erro) {

        console.warn(
            "[CARRINHO CACHE] Erro ao ler:",
            erro
        );

        return [];

    }

}


/* =========================================================
   SALVAR CACHE
========================================================= */

function salvarCacheCarrinho(
    dominio,
    produtos
) {

    try {

        const clienteId =
            pegarClienteIdCacheCarrinho();


        const chave =
            pegarChaveCacheCarrinho(
                dominio,
                clienteId
            );


        localStorage.setItem(
            chave,
            JSON.stringify(
                Array.isArray(produtos)
                    ? produtos
                    : []
            )
        );


    } catch (erro) {

        console.warn(
            "[CARRINHO CACHE] Erro ao salvar:",
            erro
        );

    }

}


/* =========================================================
   LIMPAR CACHE
========================================================= */

function limparCacheCarrinho(
    dominio
) {

    try {

        const clienteId =
            pegarClienteIdCacheCarrinho();


        const chave =
            pegarChaveCacheCarrinho(
                dominio,
                clienteId
            );


        localStorage.removeItem(
            chave
        );


    } catch (erro) {

        console.warn(
            "[CARRINHO CACHE] Erro ao limpar:",
            erro
        );

    }

}


/* =========================================================
   NORMALIZAR PARA COMPARAÇÃO

   A ORDEM DOS OBJETOS NÃO DEVE GERAR
   FALSO POSITIVO DE ALTERAÇÃO.
========================================================= */

function normalizarCarrinhoCache(
    produtos
) {

    if (
        !Array.isArray(produtos)
    ) {
        return [];
    }


    return [...produtos]
        .sort(
            (a, b) => {

                const idA =
                    Number(
                        a?.seguimento_id ||
                        0
                    );

                const idB =
                    Number(
                        b?.seguimento_id ||
                        0
                    );


                return idA - idB;

            }
        );

}


/* =========================================================
   COMPARAR CACHE X SERVIDOR
========================================================= */

function carrinhosSaoIguais(
    cache,
    servidor
) {

    try {

        return JSON.stringify(
            normalizarCarrinhoCache(
                cache
            )
        ) === JSON.stringify(
            normalizarCarrinhoCache(
                servidor
            )
        );


    } catch {

        return false;

    }

}
/* =========================================================
   COMPONENTE
========================================================= */

export default function Carrinho() {

    const navigate =
        useNavigate();


    /* =====================================================
       PRODUTOS
    ===================================================== */

    const [
        produtos,
        setProdutos
    ] = useState([]);


    /* =====================================================
       CARREGAMENTO
    ===================================================== */

    const [
        carregando,
        setCarregando
    ] = useState(true);


    /* =====================================================
       ERRO
    ===================================================== */

    const [
        erro,
        setErro
    ] = useState("");


    /* =====================================================
       PRODUTOS SENDO REMOVIDOS
    ===================================================== */

    const [
        removendo,
        setRemovendo
    ] = useState(
        new Set()
    );


    /* =====================================================
       CARREGAR CARRINHO
    ===================================================== */

    useEffect(() => {

        let ativo =
            true;


        async function carregarCarrinho() {

            const token =
                localStorage.getItem(
                    "ironstore_cliente_token"
                );


            if (!token) {

                navigate(
                    "/entrar",
                    {
                        replace: true
                    }
                );

                return;

            }


            const dominio =
                pegarDominioAtualCategorias();


            /* =====================================================
               1. CARREGAR CACHE PRIMEIRO
            ===================================================== */

            const cache =
                lerCacheCarrinho(
                    dominio
                );


            if (
                ativo &&
                cache.length > 0
            ) {

                setProdutos(
                    cache
                );

                /*
                 * Já temos conteúdo para mostrar.
                 * Não precisamos deixar loading ocupando a tela.
                 */

                setCarregando(
                    false
                );

            } else {

                setCarregando(
                    true
                );

            }


            setErro("");


            /* =====================================================
               2. SINCRONIZAR COM BACKEND
            ===================================================== */

            try {

                const resposta =
                    await fetch(
                        `${API_URL}/ironstore/carrinho?dominio=${encodeURIComponent(
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


                let resultado =
                    null;


                try {

                    resultado =
                        await resposta.json();

                } catch {

                    resultado =
                        null;

                }


                /* =================================================
                   TOKEN INVÁLIDO
                ================================================= */

                if (
                    resposta.status === 401
                ) {

                    limparCacheCarrinho(
                        dominio
                    );


                    localStorage.removeItem(
                        "ironstore_cliente_token"
                    );

                    localStorage.removeItem(
                        "ironstore_cliente"
                    );


                    navigate(
                        "/entrar",
                        {
                            replace: true
                        }
                    );


                    return;

                }


                /* =================================================
                   ERRO
                ================================================= */

                if (!resposta.ok) {

                    throw new Error(
                        resultado?.detail ||
                        "Não foi possível carregar o carrinho."
                    );

                }


                /* =================================================
                   PRODUTOS DO SERVIDOR
                ================================================= */

                const produtosServidor =
                    Array.isArray(
                        resultado?.produtos
                    )
                        ? resultado.produtos
                        : [];


                /* =================================================
                   3. COMPARAR CACHE X SERVIDOR
                ================================================= */

                const iguais =
                    carrinhosSaoIguais(
                        cache,
                        produtosServidor
                    );


                /* =================================================
                   4. SE MUDOU, ATUALIZA CACHE
                ================================================= */

                if (!iguais) {

                    salvarCacheCarrinho(
                        dominio,
                        produtosServidor
                    );

                }


                /* =================================================
                   5. BACKEND É A VERDADE FINAL
                ================================================= */

                if (ativo) {

                    setProdutos(
                        produtosServidor
                    );

                }


            } catch (erroCarregar) {

                console.error(
                    "[IRONSTORE CARRINHO]",
                    erroCarregar
                );


                /*
                 * SE EXISTE CACHE:
                 *
                 * mantém os produtos visíveis.
                 *
                 * Não destruímos a experiência porque
                 * houve uma falha temporária de rede.
                 */

                if (
                    ativo &&
                    cache.length === 0
                ) {

                    setErro(
                        erroCarregar?.message ||
                        "Não foi possível carregar o carrinho."
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


        carregarCarrinho();


        return () => {

            ativo =
                false;

        };

    }, [
        navigate
    ]);


    /* =====================================================
       ABRIR PRODUTO

       MESMA ROTA DE CATEGORIAS
    ===================================================== */

    function abrirProduto(
        produto
    ) {

        const loja =
            produto?.loja ||
            produto?.nome_loja ||
            produto?.comercio ||
            "";


        navigate(
            `/produtos/${produto.id}/${encodeURIComponent(
                loja
            )}`
        );

    }


    /* =====================================================
       REMOVER DO CARRINHO
    ===================================================== */

    async function removerDoCarrinho(
        produto
    ) {

        const token =
            localStorage.getItem(
                "ironstore_cliente_token"
            );


        if (!token) {

            navigate(
                "/entrar"
            );

            return;

        }


        const seguimentoId =
            produto?.seguimento_id;


        if (!seguimentoId) {

            console.error(
                "[CARRINHO] seguimento_id não encontrado.",
                produto
            );

            return;

        }


        /* =============================================
           MARCAR COMO REMOVENDO
        ============================================= */

        setRemovendo(
            anterior => {

                const novo =
                    new Set(
                        anterior
                    );

                novo.add(
                    seguimentoId
                );

                return novo;

            }
        );


        try {

            const resposta =
                await fetch(
                    `${API_URL}/ironstore/carrinho/${seguimentoId}`,
                    {
                        method:
                            "DELETE",

                        headers: {

                            "X-IronStore-Key":
                                IRONSTORE_APP_KEY_GERAL,

                            "Authorization":
                                `Bearer ${token}`

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


            /* =========================================
               TOKEN INVÁLIDO
            ========================================= */

            if (
                resposta.status === 401
            ) {

                localStorage.removeItem(
                    "ironstore_cliente_token"
                );

                localStorage.removeItem(
                    "ironstore_cliente"
                );

                navigate(
                    "/entrar"
                );

                return;

            }


            /* =========================================
               ERRO
            ========================================= */

            if (!resposta.ok) {

                throw new Error(
                    resultado?.detail ||
                    "Não foi possível remover o produto."
                );

            }


            /* =========================================
               REMOVER DA INTERFACE
            ========================================= */

            const dominio =
                pegarDominioAtualCategorias();


            setProdutos(
                anterior => {

                    const novosProdutos =
                        anterior.filter(
                            item =>
                                item.seguimento_id !==
                                seguimentoId
                        );


                    /* =============================================
                       ATUALIZAR CACHE IMEDIATAMENTE
                    ============================================= */

                    salvarCacheCarrinho(
                        dominio,
                        novosProdutos
                    );


                    return novosProdutos;

                }
            );


        } catch (erroRemover) {

            console.error(
                "[IRONSTORE REMOVER CARRINHO]",
                erroRemover
            );


            setErro(
                erroRemover?.message ||
                "Não foi possível remover o produto."
            );


        } finally {

            setRemovendo(
                anterior => {

                    const novo =
                        new Set(
                            anterior
                        );

                    novo.delete(
                        seguimentoId
                    );

                    return novo;

                }
            );

        }

    }


    /* =====================================================
       RENDER
    ===================================================== */

    return (

        <section
            className="ironstore-perfil-carrinho-area"
        >
            <style>
                {classicoCategorias}
            </style>
            {/* =============================================
                CABEÇALHO
            ============================================= */}
            {/* =============================================
    CABEÇALHO
============================================= */}

            <div
                className="ironstore-perfil-carrinho-cabecalho"
            >

                <div
                    className="ironstore-perfil-carrinho-titulo-area"
                >

                    <div
                        className="ironstore-perfil-carrinho-titulo-icone"
                        aria-hidden="true"
                    >
                        <span
                            className="ironstore-perfil-carrinho-titulo-alca"
                        />

                        <span
                            className="ironstore-perfil-carrinho-titulo-bolsa"
                        />
                    </div>


                    <div
                        className="ironstore-perfil-carrinho-titulo-conteudo"
                    >
                        <span
                            className="ironstore-perfil-carrinho-label"
                        >
                            Sua seleção
                        </span>

                        <h2>
                            Meu carrinho
                        </h2>

                        <p>
                            Revise seus produtos antes de continuar.
                        </p>
                    </div>

                </div>


                {!carregando &&
                    produtos.length > 0 && (

                        <div
                            className="ironstore-perfil-carrinho-acoes"
                        >

                            <button
                                type="button"
                                className="ironstore-perfil-carrinho-finalizar"
                                onClick={
                                    () =>
                                        navigate(
                                            "/compras"
                                        )
                                }
                            >

                                <span
                                    className="ironstore-perfil-carrinho-finalizar-texto"
                                >
                                    Finalizar minha compra
                                </span>

                                <span
                                    className="ironstore-perfil-carrinho-finalizar-icone"
                                    aria-hidden="true"
                                >
                                    →
                                </span>

                            </button>


                            <span
                                className="ironstore-perfil-carrinho-total"
                            >
                                {produtos.length}

                                {" "}

                                {produtos.length === 1
                                    ? "produto"
                                    : "produtos"
                                }
                            </span>

                        </div>

                    )}

            </div>


            {/* =============================================
                CARREGANDO
            ============================================= */}

            {carregando && (

                <div
                    className="ironstore-perfil-carrinho-carregando"
                >

                    <span />

                    <p>
                        Carregando seu carrinho...
                    </p>

                </div>

            )}


            {/* =============================================
                ERRO
            ============================================= */}

            {!carregando && erro && (

                <div
                    className="ironstore-perfil-carrinho-erro"
                >
                    {erro}
                </div>

            )}


            {/* =============================================
                CARRINHO VAZIO
            ============================================= */}

            {!carregando &&
                !erro &&
                produtos.length === 0 && (

                    <div
                        className="ironstore-perfil-carrinho-vazio"
                    >

                        <div
                            className="ironstore-perfil-carrinho-vazio-icone"
                        >
                            <span />
                        </div>

                        <strong>
                            Seu carrinho está vazio
                        </strong>

                        <p>
                            Adicione produtos para encontrá-los aqui.
                        </p>

                        <button
                            type="button"
                            onClick={
                                () =>
                                    navigate(
                                        "/#categorias"
                                    )
                            }
                        >
                            Explorar produtos

                            <span>
                                →
                            </span>
                        </button>

                    </div>

                )}


            {/* =============================================
                TODOS OS PRODUTOS

                SEM SEPARAÇÃO POR CATEGORIA
            ============================================= */}

            {!carregando &&
                produtos.length > 0 && (

                    <div
                        className="ironstore-perfil-carrinho-produtos"
                    >

                        {produtos.map(
                            produto => {

                                const estaRemovendo =
                                    removendo.has(
                                        produto.seguimento_id
                                    );


                                return (

                                    <div
                                        key={
                                            produto.seguimento_id
                                        }
                                        className={
                                            `
                                        ironstore-perfil-carrinho-item
                                        ${estaRemovendo
                                                ? "removendo"
                                                : ""
                                            }
                                        `
                                        }
                                    >

                                        {/* =====================
                                        MESMO CARD
                                        DE CATEGORIAS
                                    ====================== */}

                                        <ProdutoCategoria
                                            produto={
                                                produto
                                            }

                                            onAbrir={
                                                () =>
                                                    abrirProduto(
                                                        produto
                                                    )
                                            }

                                            clienteLogado={
                                                false
                                            }
                                        />


                                        {/* =====================
                                        REMOVER
                                    ====================== */}

                                        <button
                                            type="button"
                                            className="ironstore-perfil-carrinho-remover"
                                            disabled={
                                                estaRemovendo
                                            }
                                            onClick={
                                                () =>
                                                    removerDoCarrinho(
                                                        produto
                                                    )
                                            }
                                        >

                                            <span
                                                className="ironstore-perfil-carrinho-remover-texto"
                                            >
                                                {estaRemovendo
                                                    ? "Removendo..."
                                                    : "Remover do carrinho"
                                                }
                                            </span>


                                            <span
                                                className="ironstore-perfil-carrinho-remover-icone"
                                                aria-hidden="true"
                                            >
                                                ×
                                            </span>

                                        </button>

                                    </div>

                                );

                            }
                        )}

                    </div>

                )}

        </section>

    );

}