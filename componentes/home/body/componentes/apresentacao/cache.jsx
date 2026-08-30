/* =========================================================
   CACHE DA APRESENTAÇÃO IRONSTORE
========================================================= */


/* =========================================================
   DOMÍNIO
========================================================= */

export function pegarDominioAtualApresentacao() {

    return window.location.origin
        .trim()
        .replace(/\/+$/, "")
        .toLowerCase();

}


/* =========================================================
   CHAVE DO CACHE
========================================================= */

export function gerarChaveCacheApresentacao() {

    const dominio =
        pegarDominioAtualApresentacao();

    return `ironstore_apresentacao_${dominio}`;

}


/* =========================================================
   NORMALIZAR DADOS
========================================================= */

export function normalizarDadosApresentacao(
    dados
) {

    const comercio =
        dados?.comercio || {};

    const apresentacao =
        dados?.apresentacao || {};


    return {

        comercio: {

            id:
                comercio.id ?? null,

            loja:
                comercio.loja || "",

            imagem:
                comercio.imagem || "",

        },


        apresentacao: {

            id:
                apresentacao.id ?? null,

            dominio:
                apresentacao.dominio || "",

            arquivos:
                apresentacao.arquivos || "",

            mensagem:
                apresentacao.mensagem || "",

            segunda_mensagem:
                apresentacao.segunda_mensagem || "",

            terceira_mensagem:
                apresentacao.terceira_mensagem || "",

        },


        modelo:
            dados?.modelo || "classico",

    };

}


/* =========================================================
   LER CACHE
========================================================= */

export function lerCacheApresentacao() {

    const chave =
        gerarChaveCacheApresentacao();


    try {

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


        return normalizarDadosApresentacao(
            dados
        );


    } catch (erro) {

        console.warn(
            "[APRESENTAÇÃO] Cache inválido:",
            erro
        );


        /* =================================================
           CACHE CORROMPIDO

           Remove para não continuar tentando carregar
           JSON inválido nas próximas visitas.
        ================================================= */

        localStorage.removeItem(
            chave
        );


        return null;

    }

}


/* =========================================================
   SALVAR CACHE
========================================================= */

export function salvarCacheApresentacao(
    dados
) {

    const chave =
        gerarChaveCacheApresentacao();


    try {

        const normalizado =
            normalizarDadosApresentacao(
                dados
            );


        localStorage.setItem(
            chave,
            JSON.stringify(
                normalizado
            )
        );


        return normalizado;


    } catch (erro) {

        console.warn(
            "[APRESENTAÇÃO] Erro ao salvar cache:",
            erro
        );


        return null;

    }

}


/* =========================================================
   REMOVER CACHE

   Utilizado principalmente quando o servidor responde 404.

   Isso significa que o domínio não possui mais uma
   apresentação cadastrada em ironstore_apresentacao.

   Nesse caso não devemos continuar utilizando dados antigos.
========================================================= */

export function removerCacheApresentacao() {

    const chave =
        gerarChaveCacheApresentacao();


    try {

        localStorage.removeItem(
            chave
        );


        return true;


    } catch (erro) {

        console.warn(
            "[APRESENTAÇÃO] Não foi possível remover o cache:",
            erro
        );


        return false;

    }

}


/* =========================================================
   COMPARAR CACHE COM SERVIDOR
========================================================= */

export function dadosApresentacaoSaoIguais(
    cache,
    servidor
) {

    if (
        !cache ||
        !servidor
    ) {

        return false;

    }


    const cacheNormalizado =
        normalizarDadosApresentacao(
            cache
        );


    const servidorNormalizado =
        normalizarDadosApresentacao(
            servidor
        );


    return (
        JSON.stringify(
            cacheNormalizado
        )
        ===
        JSON.stringify(
            servidorNormalizado
        )
    );

}


/* =========================================================
   TRANSFORMAR ARQUIVOS EM ARRAY

   BANCO:

   imagem1 || imagem2 || imagem3


   RESULTADO:

   [
       "imagem1",
       "imagem2",
       "imagem3"
   ]
========================================================= */

export function separarArquivosApresentacao(
    arquivos
) {

    if (!arquivos) {

        return [];

    }


    return String(
        arquivos
    )
        .split("||")
        .map(
            arquivo =>
                arquivo.trim()
        )
        .filter(Boolean);

}


/* =========================================================
   TRANSFORMAR MENSAGENS EM ARRAY

   RESULTADO:

   [
       mensagem,
       segunda_mensagem,
       terceira_mensagem
   ]

   Campos vazios ou NULL são automaticamente ignorados.
========================================================= */

export function separarMensagensApresentacao(
    apresentacao
) {

    if (!apresentacao) {

        return [];

    }


    return [

        apresentacao.mensagem,

        apresentacao.segunda_mensagem,

        apresentacao.terceira_mensagem,

    ]
        .map(
            mensagem =>
                String(
                    mensagem || ""
                ).trim()
        )
        .filter(Boolean);

}


/* =========================================================
   VERIFICAR SE EXISTE CONTEÚDO

   Útil para impedir que uma apresentação vazia seja
   renderizada.
========================================================= */

export function apresentacaoPossuiConteudo(
    dados
) {

    if (!dados?.apresentacao) {

        return false;

    }


    const arquivos =
        separarArquivosApresentacao(
            dados.apresentacao.arquivos
        );


    const mensagens =
        separarMensagensApresentacao(
            dados.apresentacao
        );


    return (
        arquivos.length > 0 ||
        mensagens.length > 0
    );

}