/* =========================================================
   IRONSTORE PATH
   CACHE DA PÁGINA PÚBLICA
========================================================= */

const CACHE_PREFIX =
    "ironstore_path";


/* =========================================================
   NORMALIZAR DOMÍNIO
========================================================= */

function normalizarDominio(
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
   GERAR CHAVE
========================================================= */

function gerarChaveCache(
    dominio
) {

    const dominioNormalizado =
        normalizarDominio(
            dominio
        );


    return `${CACHE_PREFIX}:${dominioNormalizado}`;
}


/* =========================================================
   NORMALIZAR OBJETO
========================================================= */

function normalizarObjeto(
    valor
) {

    if (
        !valor ||
        typeof valor !== "object" ||
        Array.isArray(valor)
    ) {

        return {};
    }


    return valor;
}


/* =========================================================
   NORMALIZAR MODELO
========================================================= */

function normalizarModelo(
    modelo
) {

    return String(
        modelo ||
        "classico"
    )
        .trim()
        .toLowerCase();
}


/* =========================================================
   NORMALIZAR DADOS DO PATH

   Essa será a estrutura oficial salva no cache.
========================================================= */

export function normalizarCachePath(
    dados
) {

    if (
        !dados ||
        typeof dados !== "object"
    ) {

        return null;
    }


    const comercio =
        normalizarObjeto(
            dados.comercio
        );


    const footer =
        normalizarObjeto(
            dados.footer
        );


    return {

        comercio,

        footer,

        modelo:
            normalizarModelo(
                dados.modelo
            )

    };
}


/* =========================================================
   LER CACHE
========================================================= */

export function lerCachePath(
    dominio
) {

    try {

        const chave =
            gerarChaveCache(
                dominio
            );


        const bruto =
            localStorage.getItem(
                chave
            );


        if (!bruto) {

            return null;
        }


        const convertido =
            JSON.parse(
                bruto
            );


        return normalizarCachePath(
            convertido
        );


    } catch (
    erro
    ) {

        console.error(
            "[PATH CACHE] Erro ao ler cache:",
            erro
        );


        return null;
    }
}


/* =========================================================
   SALVAR CACHE
========================================================= */

export function salvarCachePath(
    dominio,
    dados
) {

    try {

        const normalizado =
            normalizarCachePath(
                dados
            );


        if (!normalizado) {

            return false;
        }


        const chave =
            gerarChaveCache(
                dominio
            );


        localStorage.setItem(
            chave,
            JSON.stringify(
                normalizado
            )
        );


        return true;


    } catch (
    erro
    ) {

        console.error(
            "[PATH CACHE] Erro ao salvar cache:",
            erro
        );


        return false;
    }
}


/* =========================================================
   REMOVER CACHE
========================================================= */

export function removerCachePath(
    dominio
) {

    try {

        localStorage.removeItem(
            gerarChaveCache(
                dominio
            )
        );


        return true;


    } catch (
    erro
    ) {

        console.error(
            "[PATH CACHE] Erro ao remover cache:",
            erro
        );


        return false;
    }
}


/* =========================================================
   PREPARAR OBJETO PARA COMPARAÇÃO

   Ordena recursivamente as chaves dos objetos.

   Assim:
   {
       loja: "Teste",
       imagem: "x"
   }

   e:
   {
       imagem: "x",
       loja: "Teste"
   }

   serão considerados iguais.
========================================================= */

function ordenarObjeto(
    valor
) {

    if (
        Array.isArray(
            valor
        )
    ) {

        return valor.map(
            item =>
                ordenarObjeto(
                    item
                )
        );
    }


    if (
        valor &&
        typeof valor === "object"
    ) {

        const resultado = {};


        Object.keys(
            valor
        )
            .sort()
            .forEach(
                chave => {

                    resultado[chave] =
                        ordenarObjeto(
                            valor[chave]
                        );
                }
            );


        return resultado;
    }


    return valor;
}


/* =========================================================
   SERIALIZAR PARA COMPARAÇÃO
========================================================= */

function serializar(
    dados
) {

    const normalizado =
        normalizarCachePath(
            dados
        );


    if (!normalizado) {

        return "";
    }


    return JSON.stringify(
        ordenarObjeto(
            normalizado
        )
    );
}


/* =========================================================
   COMPARAR CACHE COM SERVIDOR
========================================================= */

export function cachePathIgual(
    cache,
    servidor
) {

    try {

        return (
            serializar(
                cache
            ) ===
            serializar(
                servidor
            )
        );


    } catch (
    erro
    ) {

        console.error(
            "[PATH CACHE] Erro ao comparar:",
            erro
        );


        return false;
    }
}


/* =========================================================
   MONTAR DADOS DAS DUAS APIS

   /dominio
   +
   /footer

   O /footer tem prioridade para os dados completos
   do comércio.
========================================================= */

export function montarDadosPath(
    dadosDominio,
    dadosFooter
) {

    const comercio = {

        ...normalizarObjeto(
            dadosDominio?.comercio
        ),

        ...normalizarObjeto(
            dadosFooter?.comercio
        )

    };


    const footer =
        normalizarObjeto(
            dadosFooter?.footer
        );


    const modelo =
        normalizarModelo(
            dadosFooter?.modelo
        );


    return normalizarCachePath(
        {
            comercio,
            footer,
            modelo
        }
    );
}


/* =========================================================
   ATUALIZAR CACHE SOMENTE SE NECESSÁRIO

   RETORNA:

   {
       dados,
       atualizado
   }
========================================================= */

export function sincronizarCachePath(
    dominio,
    dadosServidor
) {

    const servidor =
        normalizarCachePath(
            dadosServidor
        );


    if (!servidor) {

        return {
            dados: null,
            atualizado: false
        };
    }


    const cache =
        lerCachePath(
            dominio
        );


    /* =====================================================
       NÃO EXISTE CACHE

       Salva servidor.
    ===================================================== */

    if (!cache) {

        salvarCachePath(
            dominio,
            servidor
        );


        return {

            dados:
                servidor,

            atualizado:
                true

        };
    }


    /* =====================================================
       CACHE DIFERENTE DO SERVIDOR
    ===================================================== */

    if (
        !cachePathIgual(
            cache,
            servidor
        )
    ) {

        salvarCachePath(
            dominio,
            servidor
        );


        return {

            dados:
                servidor,

            atualizado:
                true

        };
    }


    /* =====================================================
       TUDO IGUAL

       Não escreve novamente no localStorage.
    ===================================================== */

    return {

        dados:
            cache,

        atualizado:
            false

    };
}