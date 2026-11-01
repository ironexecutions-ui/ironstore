/* =========================================================
   CACHE EXCLUSIVO DO PRODUTO ATUAL
========================================================= */

const CACHE_PREFIX =
    "ironstore_produto_atual";


/* =========================================================
   NORMALIZAR DOMÍNIO
========================================================= */

function normalizarDominioCache(
    dominio
) {

    return String(
        dominio || ""
    )
        .trim()
        .toLowerCase()
        .replace(/\/+$/, "");

}


/* =========================================================
   PEGAR DOMÍNIO ATUAL
========================================================= */

export function pegarDominioAtualProduto() {

    if (
        typeof window === "undefined"
    ) {
        return "";
    }

    return normalizarDominioCache(
        `${window.location.protocol}//${window.location.host}`
    );

}


/* =========================================================
   CHAVE
========================================================= */

function pegarChaveProduto(
    dominio,
    produtoId
) {

    return `${CACHE_PREFIX}:${normalizarDominioCache(
        dominio
    )}:${produtoId}`;

}


/* =========================================================
   LER
========================================================= */

export function lerCacheProdutoAtual(
    dominio,
    produtoId
) {

    try {

        const chave =
            pegarChaveProduto(
                dominio,
                produtoId
            );

        const salvo =
            localStorage.getItem(
                chave
            );

        if (!salvo) {
            return null;
        }

        const dados =
            JSON.parse(
                salvo
            );

        if (
            !dados ||
            typeof dados !== "object"
        ) {
            return null;
        }

        return dados;

    } catch (erro) {

        console.warn(
            "[PRODUTO ATUAL CACHE]",
            erro
        );

        return null;

    }

}


/* =========================================================
   SALVAR
========================================================= */

export function salvarCacheProdutoAtual(
    dominio,
    produtoId,
    dados
) {

    try {

        const chave =
            pegarChaveProduto(
                dominio,
                produtoId
            );

        localStorage.setItem(
            chave,
            JSON.stringify(
                dados
            )
        );

    } catch (erro) {

        console.warn(
            "[PRODUTO ATUAL CACHE]",
            erro
        );

    }

}


/* =========================================================
   COMPARAR
========================================================= */

export function produtoAtualIgual(
    cache,
    servidor
) {

    if (
        !cache ||
        !servidor
    ) {
        return false;
    }

    try {

        return (
            JSON.stringify(cache) ===
            JSON.stringify(servidor)
        );

    } catch {

        return false;

    }

}