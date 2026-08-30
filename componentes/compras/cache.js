/* =========================================================
   CACHE
   COMPRAS
========================================================= */

const CACHE_PRODUTOS =
    "ironstore_compras_produtos";

const CACHE_DESMARCADOS =
    "ironstore_compras_desmarcados";


/* =========================================================
   NORMALIZAR ID
========================================================= */

function normalizarId(
    id
) {

    if (
        id === undefined ||
        id === null
    ) {

        return "";

    }

    return String(
        id
    ).trim();

}


/* =========================================================
   CARREGAR PRODUTOS DO CACHE
========================================================= */

export function carregarProdutosCache() {

    try {

        const salvo =
            localStorage.getItem(
                CACHE_PRODUTOS
            );

        if (!salvo) {

            return [];

        }

        const dados =
            JSON.parse(
                salvo
            );

        if (
            !Array.isArray(
                dados
            )
        ) {

            localStorage.removeItem(
                CACHE_PRODUTOS
            );

            return [];

        }

        return dados;

    } catch (
    erro
    ) {

        console.error(
            "[CACHE COMPRAS] Erro ao carregar produtos:",
            erro
        );

        return [];

    }

}


/* =========================================================
   SALVAR PRODUTOS NO CACHE
========================================================= */

export function salvarProdutosCache(
    produtos
) {

    try {

        const lista =
            Array.isArray(
                produtos
            )
                ? produtos
                : [];

        localStorage.setItem(
            CACHE_PRODUTOS,
            JSON.stringify(
                lista
            )
        );

        console.log(
            "[CACHE COMPRAS] Produtos atualizados:",
            lista.length
        );

        return lista;

    } catch (
    erro
    ) {

        console.error(
            "[CACHE COMPRAS] Erro ao salvar produtos:",
            erro
        );

        return [];

    }

}


/* =========================================================
   COMPARAR CACHE COM SERVIDOR
========================================================= */

export function produtosCacheDiferentes(
    produtosServidor
) {

    const produtosCache =
        carregarProdutosCache();

    const servidor =
        Array.isArray(
            produtosServidor
        )
            ? produtosServidor
            : [];

    try {

        return (
            JSON.stringify(
                produtosCache
            ) !==
            JSON.stringify(
                servidor
            )
        );

    } catch (
    erro
    ) {

        console.error(
            "[CACHE COMPRAS] Erro ao comparar:",
            erro
        );

        return true;

    }

}


/* =========================================================
   SINCRONIZAR PRODUTOS

   1. Recebe servidor
   2. Compara com cache
   3. Se mudou, atualiza cache
   4. Retorna os produtos corretos
========================================================= */

export function sincronizarProdutosCache(
    produtosServidor
) {

    const servidor =
        Array.isArray(
            produtosServidor
        )
            ? produtosServidor
            : [];

    const cache =
        carregarProdutosCache();

    const diferente =
        JSON.stringify(
            cache
        ) !==
        JSON.stringify(
            servidor
        );

    if (
        diferente
    ) {

        console.log(
            "[CACHE COMPRAS] Servidor diferente do cache."
        );

        salvarProdutosCache(
            servidor
        );

        return {
            atualizado:
                true,

            produtos:
                servidor
        };

    }

    console.log(
        "[CACHE COMPRAS] Cache já está atualizado."
    );

    return {
        atualizado:
            false,

        produtos:
            cache
    };

}


/* =========================================================
   CARREGAR DESMARCADOS
========================================================= */

export function carregarDesmarcados() {

    try {

        const salvo =
            localStorage.getItem(
                CACHE_DESMARCADOS
            );

        if (!salvo) {

            return [];

        }

        const dados =
            JSON.parse(
                salvo
            );

        if (
            !Array.isArray(
                dados
            )
        ) {

            localStorage.removeItem(
                CACHE_DESMARCADOS
            );

            return [];

        }

        return [
            ...new Set(
                dados
                    .map(
                        normalizarId
                    )
                    .filter(Boolean)
            )
        ];

    } catch (
    erro
    ) {

        console.error(
            "[CACHE COMPRAS] Erro ao carregar desmarcados:",
            erro
        );

        return [];

    }

}


/* =========================================================
   SALVAR DESMARCADOS
========================================================= */

export function salvarDesmarcados(
    ids
) {

    try {

        const lista =
            Array.from(
                ids || []
            )
                .map(
                    normalizarId
                )
                .filter(Boolean);

        const listaUnica =
            [
                ...new Set(
                    lista
                )
            ];

        localStorage.setItem(
            CACHE_DESMARCADOS,
            JSON.stringify(
                listaUnica
            )
        );

    } catch (
    erro
    ) {

        console.error(
            "[CACHE COMPRAS] Erro ao salvar desmarcados:",
            erro
        );

    }

}


/* =========================================================
   DESMARCAR
========================================================= */

export function desmarcarProdutoCache(
    seguimentoId
) {

    const id =
        normalizarId(
            seguimentoId
        );

    if (!id) {

        return;

    }

    const atuais =
        new Set(
            carregarDesmarcados()
        );

    atuais.add(
        id
    );

    salvarDesmarcados(
        atuais
    );

}


/* =========================================================
   MARCAR NOVAMENTE
========================================================= */

export function marcarProdutoCache(
    seguimentoId
) {

    const id =
        normalizarId(
            seguimentoId
        );

    if (!id) {

        return;

    }

    const atuais =
        new Set(
            carregarDesmarcados()
        );

    atuais.delete(
        id
    );

    salvarDesmarcados(
        atuais
    );

}


/* =========================================================
   REMOVER DESMARCADOS QUE NÃO EXISTEM MAIS
========================================================= */

export function limparDesmarcadosAntigos(
    produtos
) {

    if (
        !Array.isArray(
            produtos
        )
    ) {

        return carregarDesmarcados();

    }

    const idsProdutos =
        new Set(
            produtos
                .map(
                    produto =>
                        normalizarId(
                            produto?.seguimento_id
                        )
                )
                .filter(Boolean)
        );

    const desmarcados =
        carregarDesmarcados();

    const validos =
        desmarcados.filter(
            id =>
                idsProdutos.has(
                    id
                )
        );

    salvarDesmarcados(
        validos
    );

    return validos;

}


/* =========================================================
   LIMPAR CACHE COMPLETO
========================================================= */

export function limparCacheCompras() {

    try {

        localStorage.removeItem(
            CACHE_PRODUTOS
        );

        localStorage.removeItem(
            CACHE_DESMARCADOS
        );

    } catch (
    erro
    ) {

        console.error(
            "[CACHE COMPRAS] Erro ao limpar:",
            erro
        );

    }

}