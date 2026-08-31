/* =========================================================
   CACHE
   IRONSTORE — MAIS VISTOS
========================================================= */

const CACHE_PREFIX =
    "ironstore_mais_vistos";


/* =========================================================
   DOMÍNIO
========================================================= */

export function pegarDominioAtualMaisVistos() {

    return window.location.origin
        .trim()
        .toLowerCase()
        .replace(/\/+$/, "");

}


/* =========================================================
   CLIENTE
   SOMENTE PARA SEPARAR O CACHE LOCAL
========================================================= */

function pegarClienteIdCache() {

    try {

        const cliente =
            JSON.parse(
                localStorage.getItem(
                    "ironstore_cliente"
                ) || "{}"
            );

        return String(
            cliente?.id ||
            ""
        );

    } catch {

        return "";

    }

}


/* =========================================================
   CHAVE
========================================================= */

function gerarChaveCache() {

    const dominio =
        pegarDominioAtualMaisVistos();

    const clienteId =
        pegarClienteIdCache();

    return `${CACHE_PREFIX}:${dominio}:${clienteId}`;

}


/* =========================================================
   CARREGAR CACHE
========================================================= */

export function carregarCacheMaisVistos() {

    try {

        const salvo =
            localStorage.getItem(
                gerarChaveCache()
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
            "[MAIS VISTOS CACHE] Erro ao carregar:",
            erro
        );

        return null;

    }

}


/* =========================================================
   SALVAR CACHE
========================================================= */

export function salvarCacheMaisVistos(
    dados
) {

    try {

        localStorage.setItem(
            gerarChaveCache(),
            JSON.stringify(
                dados
            )
        );

        return true;

    } catch (erro) {

        console.warn(
            "[MAIS VISTOS CACHE] Erro ao salvar:",
            erro
        );

        return false;

    }

}


/* =========================================================
   NORMALIZAR
========================================================= */

function normalizarDados(
    dados
) {

    const produtos =
        Array.isArray(
            dados?.produtos
        )
            ? [...dados.produtos]
            : [];


    produtos.sort(
        (a, b) => {

            const idA =
                Number(
                    a?.id ||
                    0
                );

            const idB =
                Number(
                    b?.id ||
                    0
                );

            return idA - idB;

        }
    );


    return {

        modelo:
            String(
                dados?.modelo ||
                "classico"
            )
                .trim()
                .toLowerCase(),

        produtos:
            produtos

    };

}


/* =========================================================
   COMPARAR
========================================================= */

export function cacheMaisVistosIgual(
    cache,
    servidor
) {

    try {

        return JSON.stringify(
            normalizarDados(
                cache
            )
        ) === JSON.stringify(
            normalizarDados(
                servidor
            )
        );

    } catch {

        return false;

    }

}


/* =========================================================
   SINCRONIZAR
========================================================= */

export function sincronizarCacheMaisVistos(
    dadosServidor
) {

    const cacheAtual =
        carregarCacheMaisVistos();


    const dadosNormalizados =
        normalizarDados(
            dadosServidor
        );


    if (!cacheAtual) {

        salvarCacheMaisVistos(
            dadosNormalizados
        );

        return {
            mudou: true,
            criado: true
        };

    }


    const igual =
        cacheMaisVistosIgual(
            cacheAtual,
            dadosNormalizados
        );


    if (igual) {

        return {
            mudou: false,
            criado: false
        };

    }


    salvarCacheMaisVistos(
        dadosNormalizados
    );


    return {
        mudou: true,
        criado: false
    };

}


/* =========================================================
   LIMPAR
========================================================= */

export function limparCacheMaisVistos() {

    try {

        localStorage.removeItem(
            gerarChaveCache()
        );

    } catch (erro) {

        console.warn(
            "[MAIS VISTOS CACHE] Erro ao limpar:",
            erro
        );

    }

}