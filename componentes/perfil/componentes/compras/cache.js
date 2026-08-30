/* =========================================================
   CACHE
   IRONSTORE — COMPRAS
========================================================= */

const CACHE_PREFIX =
    "ironstore_compras";


/* =========================================================
   CHAVE DO CACHE
========================================================= */

function gerarChaveCache() {

    const dominio =
        window.location.origin
            .trim()
            .toLowerCase()
            .replace(/\/+$/, "");

    return `${CACHE_PREFIX}:${dominio}`;
}


/* =========================================================
   LER CACHE
========================================================= */

export function carregarCacheCompras() {

    try {

        const chave =
            gerarChaveCache();

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

        console.error(
            "[CACHE COMPRAS] Erro ao carregar:",
            erro
        );

        return null;
    }
}


/* =========================================================
   SALVAR CACHE

   IMPORTANTE:
   salva TODO o objeto recebido da API.
   Não transforma os dados.
========================================================= */

export function salvarCacheCompras(
    dados
) {

    try {

        const chave =
            gerarChaveCache();

        localStorage.setItem(
            chave,
            JSON.stringify(
                dados
            )
        );

        return true;

    } catch (erro) {

        console.error(
            "[CACHE COMPRAS] Erro ao salvar:",
            erro
        );

        return false;
    }
}


/* =========================================================
   COMPARAR CACHE COM SERVIDOR
========================================================= */

export function cacheComprasMudou(
    cacheAtual,
    dadosServidor
) {

    try {

        return (
            JSON.stringify(
                cacheAtual
            ) !==
            JSON.stringify(
                dadosServidor
            )
        );

    } catch {

        return true;
    }
}


/* =========================================================
   SINCRONIZAR

   servidor -> cache

   Se forem diferentes:
   substitui TODO o cache pelos dados novos.
========================================================= */

export function sincronizarCacheCompras(
    dadosServidor
) {

    const cacheAtual =
        carregarCacheCompras();

    const mudou =
        cacheComprasMudou(
            cacheAtual,
            dadosServidor
        );

    if (mudou) {

        salvarCacheCompras(
            dadosServidor
        );
    }

    return {
        mudou,
        dados:
            mudou
                ? dadosServidor
                : cacheAtual
    };
}


/* =========================================================
   LIMPAR CACHE
========================================================= */

export function limparCacheCompras() {

    try {

        localStorage.removeItem(
            gerarChaveCache()
        );

        return true;

    } catch (erro) {

        console.error(
            "[CACHE COMPRAS] Erro ao limpar:",
            erro
        );

        return false;
    }
}