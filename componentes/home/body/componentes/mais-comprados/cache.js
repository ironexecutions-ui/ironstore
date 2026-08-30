/* =========================================================
   CACHE
   MAIS COMPRADOS
========================================================= */

const CACHE_KEY =
    "ironstore_mais_comprados";


/* =========================================================
   DOMÍNIO ATUAL
========================================================= */

export function pegarDominioAtualMaisComprados() {

    if (
        typeof window ===
        "undefined"
    ) {

        return "";

    }


    return String(
        window.location.origin ||
        ""
    )
        .trim()
        .replace(
            /\/+$/,
            ""
        );

}


/* =========================================================
   NORMALIZAR TEXTO
========================================================= */

function normalizarTexto(
    valor
) {

    if (
        valor === undefined ||
        valor === null
    ) {

        return "";

    }


    return String(
        valor
    ).trim();

}


/* =========================================================
   NORMALIZAR NÚMERO
========================================================= */

function normalizarNumero(
    valor
) {

    if (
        valor === undefined ||
        valor === null ||
        valor === ""
    ) {

        return null;

    }


    const numero =
        Number(
            valor
        );


    return Number.isFinite(
        numero
    )
        ? numero
        : null;

}


/* =========================================================
   NORMALIZAR VARIEDADE
========================================================= */

function normalizarVariedade(
    variedade
) {

    if (
        !variedade ||
        typeof variedade !==
        "object"
    ) {

        return null;

    }


    return {

        id:
            normalizarNumero(
                variedade.id
            ),

        nome:
            normalizarTexto(
                variedade.nome
            ),

        preco:
            normalizarNumero(
                variedade.preco
            ),

        preco_ironstore:
            normalizarNumero(
                variedade.preco_ironstore
            ),

        preco_promocao:
            normalizarTexto(
                variedade.preco_promocao
            ),

        imagem_url:
            normalizarTexto(
                variedade.imagem_url
            ),

        variedade:
            normalizarTexto(
                variedade.variedade
            ),

        variedad_primaria:
            normalizarTexto(
                variedade.variedad_primaria
            ),

        qual_variedad:
            normalizarTexto(
                variedade.qual_variedad
            ),

        produto_variedade_id:
            normalizarTexto(
                variedade.produto_variedade_id
            )

    };

}


/* =========================================================
   NORMALIZAR PRODUTO

   Mantemos os campos utilizados pelo ProdutoCategoria.
========================================================= */

function normalizarProduto(
    produto
) {

    if (
        !produto ||
        typeof produto !==
        "object"
    ) {

        return null;

    }


    return {

        id:
            normalizarNumero(
                produto.id
            ),

        nome:
            normalizarTexto(
                produto.nome
            ),

        unidade:
            normalizarTexto(
                produto.unidade
            ),

        peso:
            normalizarTexto(
                produto.peso
            ),

        codigo_barras:
            normalizarTexto(
                produto.codigo_barras
            ),

        qrcode:
            normalizarTexto(
                produto.qrcode
            ),

        preco:
            normalizarNumero(
                produto.preco
            ),

        preco_ironstore:
            normalizarNumero(
                produto.preco_ironstore
            ),

        categoria:
            normalizarTexto(
                produto.categoria
            ),

        variedade:
            normalizarTexto(
                produto.variedade
            ),

        imagem_url:
            normalizarTexto(
                produto.imagem_url
            ),

        descricao:
            normalizarTexto(
                produto.descricao
            ),

        descricao_curta:
            normalizarTexto(
                produto.descricao_curta
            ),

        preco_promocao:
            normalizarTexto(
                produto.preco_promocao
            ),

        destaque:
            normalizarTexto(
                produto.destaque
            ),

        peso_g:
            normalizarTexto(
                produto.peso_g
            ),

        altura_cm:
            normalizarTexto(
                produto.altura_cm
            ),

        cumprimento_cm:
            normalizarTexto(
                produto.cumprimento_cm
            ),

        largura_cm:
            normalizarTexto(
                produto.largura_cm
            ),

        variedad_primaria:
            normalizarTexto(
                produto.variedad_primaria
            ),

        qual_variedad:
            normalizarTexto(
                produto.qual_variedad
            ),

        produto_variedade_id:
            normalizarTexto(
                produto.produto_variedade_id
            ),

        quantidade_vendida:
            normalizarNumero(
                produto.quantidade_vendida
            ) ?? 0,

        variedades:
            Array.isArray(
                produto.variedades
            )
                ? produto.variedades
                    .map(
                        normalizarVariedade
                    )
                    .filter(
                        Boolean
                    )
                : []

    };

}


/* =========================================================
   NORMALIZAR RESPOSTA COMPLETA
========================================================= */

export function normalizarDadosMaisComprados(
    dados
) {

    if (
        !dados ||
        typeof dados !==
        "object"
    ) {

        return {

            ok: true,

            modelo:
                "classico",

            produtos: []

        };

    }


    return {

        ok:
            dados.ok !==
            false,

        modelo:
            normalizarTexto(
                dados.modelo
            ) ||
            "classico",

        produtos:
            Array.isArray(
                dados.produtos
            )
                ? dados.produtos
                    .map(
                        normalizarProduto
                    )
                    .filter(
                        produto =>
                            produto &&
                            produto.id !==
                            null
                    )
                : []

    };

}


/* =========================================================
   LER CACHE
========================================================= */

export function lerCacheMaisComprados() {

    try {

        const salvo =
            localStorage.getItem(
                CACHE_KEY
            );


        if (!salvo) {

            return null;

        }


        const dados =
            JSON.parse(
                salvo
            );


        return normalizarDadosMaisComprados(
            dados
        );


    } catch (erro) {

        console.warn(
            "[MAIS COMPRADOS CACHE] Erro ao ler:",
            erro
        );


        return null;

    }

}


/* =========================================================
   SALVAR CACHE
========================================================= */

export function salvarCacheMaisComprados(
    dados
) {

    try {

        const normalizado =
            normalizarDadosMaisComprados(
                dados
            );


        localStorage.setItem(
            CACHE_KEY,
            JSON.stringify(
                normalizado
            )
        );


        return normalizado;


    } catch (erro) {

        console.warn(
            "[MAIS COMPRADOS CACHE] Erro ao salvar:",
            erro
        );


        return normalizarDadosMaisComprados(
            dados
        );

    }

}


/* =========================================================
   COMPARAR CACHE X SERVIDOR

   true  = iguais
   false = houve alteração
========================================================= */

export function dadosMaisCompradosSaoIguais(
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

        const cacheNormalizado =
            normalizarDadosMaisComprados(
                cache
            );


        const servidorNormalizado =
            normalizarDadosMaisComprados(
                servidor
            );


        return (
            JSON.stringify(
                cacheNormalizado
            ) ===
            JSON.stringify(
                servidorNormalizado
            )
        );


    } catch {

        return false;

    }

}


/* =========================================================
   LIMPAR CACHE
========================================================= */

export function limparCacheMaisComprados() {

    try {

        localStorage.removeItem(
            CACHE_KEY
        );


        return true;


    } catch {

        return false;

    }

}