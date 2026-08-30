/* =========================================================
   IRONSTORE
   CACHE GERAL

   Cache separado por:
   domínio + área + cliente opcional
========================================================= */


/* =========================================================
   DOMÍNIO ATUAL
========================================================= */

export function pegarDominioAtual() {
    return window.location.origin
        .trim()
        .replace(/\/+$/, "")
        .toLowerCase();
}


/* =========================================================
   CLIENTE LOCAL
========================================================= */

export function pegarClienteLocal() {
    try {
        const clienteSalvo =
            localStorage.getItem(
                "ironstore_cliente"
            );

        if (!clienteSalvo) {
            return null;
        }

        return JSON.parse(
            clienteSalvo
        );

    } catch (erro) {
        console.error(
            "[IRONSTORE CACHE CLIENTE]",
            erro
        );

        return null;
    }
}


/* =========================================================
   IDENTIFICADOR DO CLIENTE

   Prioridade:
   1. ID
   2. Email
========================================================= */

export function pegarIdentificadorCliente() {
    const cliente =
        pegarClienteLocal();

    if (!cliente) {
        return null;
    }

    const identificador =
        cliente.id ||
        cliente.email;

    if (!identificador) {
        return null;
    }

    return String(
        identificador
    )
        .trim()
        .toLowerCase();
}


/* =========================================================
   GERAR CHAVE DE CACHE
========================================================= */

export function gerarChaveCache(
    area,
    usarCliente = false
) {
    const dominio =
        pegarDominioAtual();

    const areaNormalizada =
        String(area || "geral")
            .trim()
            .toLowerCase();

    if (usarCliente) {
        const cliente =
            pegarIdentificadorCliente();

        /*
            Cache pessoal nunca deve cair em uma chave
            compartilhada caso não exista cliente.
        */

        if (!cliente) {
            return null;
        }

        return (
            `ironstore_${areaNormalizada}_` +
            `${dominio}_${cliente}`
        );
    }

    return (
        `ironstore_${areaNormalizada}_` +
        dominio
    );
}


/* =========================================================
   PEGAR CACHE
========================================================= */

export function pegarCache(
    area,
    usarCliente = false
) {
    try {
        const chave =
            gerarChaveCache(
                area,
                usarCliente
            );

        if (!chave) {
            return null;
        }

        const cacheSalvo =
            localStorage.getItem(
                chave
            );

        if (!cacheSalvo) {
            return null;
        }

        return JSON.parse(
            cacheSalvo
        );

    } catch (erro) {
        console.error(
            `[IRONSTORE CACHE ${area}]`,
            erro
        );

        apagarCache(
            area,
            usarCliente
        );

        return null;
    }
}


/* =========================================================
   SALVAR CACHE
========================================================= */

export function salvarCache(
    area,
    dados,
    usarCliente = false
) {
    try {
        const chave =
            gerarChaveCache(
                area,
                usarCliente
            );

        if (!chave) {
            return false;
        }

        localStorage.setItem(
            chave,
            JSON.stringify(
                dados
            )
        );

        return true;

    } catch (erro) {
        console.error(
            `[IRONSTORE CACHE SALVAR ${area}]`,
            erro
        );

        return false;
    }
}


/* =========================================================
   APAGAR CACHE
========================================================= */

export function apagarCache(
    area,
    usarCliente = false
) {
    try {
        const chave =
            gerarChaveCache(
                area,
                usarCliente
            );

        if (!chave) {
            return;
        }

        localStorage.removeItem(
            chave
        );

    } catch (erro) {
        console.error(
            `[IRONSTORE CACHE APAGAR ${area}]`,
            erro
        );
    }
}


/* =========================================================
   COMPARAR CACHE COM NOVOS DADOS
========================================================= */

export function cacheDiferente(
    cache,
    novosDados
) {
    try {
        return (
            JSON.stringify(cache) !==
            JSON.stringify(novosDados)
        );

    } catch {
        return true;
    }
}


/* =========================================================
   ATUALIZAR SOMENTE SE MUDOU

   Retorna true se o cache foi alterado.
========================================================= */

export function atualizarCache(
    area,
    novosDados,
    usarCliente = false
) {
    const cacheAtual =
        pegarCache(
            area,
            usarCliente
        );

    if (
        !cacheDiferente(
            cacheAtual,
            novosDados
        )
    ) {
        return false;
    }

    salvarCache(
        area,
        novosDados,
        usarCliente
    );

    return true;
}