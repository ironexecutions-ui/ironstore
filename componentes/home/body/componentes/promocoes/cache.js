/* =========================================================
   CACHE
   PROMOÇÕES
========================================================= */

const CACHE_KEY =
    "ironstore_promocoes";


/* =========================================================
   DOMÍNIO
========================================================= */

export function pegarDominioAtualPromocoes() {

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
        )
        .toLowerCase();

}


/* =========================================================
   TEXTO
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
   NÚMERO
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
   VERIFICAR PREÇO PROMOCIONAL

   Só é promoção quando realmente existe um preço.
========================================================= */

function temPrecoPromocional(
    produto
) {

    const valor =
        produto?.preco_promocao;


    if (
        valor === undefined ||
        valor === null
    ) {

        return false;

    }


    const texto =
        String(
            valor
        ).trim();


    if (
        texto === ""
    ) {

        return false;

    }


    const numero =
        Number(
            texto.replace(
                ",",
                "."
            )
        );


    return (
        Number.isFinite(
            numero
        ) &&
        numero > 0
    );

}


/* =========================================================
   VARIEDADE
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
   PRODUTO
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

        preco_recebido:
            normalizarNumero(
                produto.preco_recebido
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
   NORMALIZAR DADOS

   IMPORTANTE:
   O servidor pode mandar todos os produtos.

   O cache de Promoções guarda SOMENTE produtos
   que possuem preco_promocao.
========================================================= */

export function normalizarDadosPromocoes(
    dados
) {

    if (
        !dados ||
        typeof dados !==
        "object"
    ) {

        return {

            ok: true,
            modelo: "classico",
            produtos: []

        };

    }


    const produtos =
        Array.isArray(
            dados.produtos
        )
            ? dados.produtos
            : [];


    const produtosPromocao =
        produtos
            .filter(
                temPrecoPromocional
            )
            .map(
                normalizarProduto
            )
            .filter(
                produto =>
                    produto &&
                    produto.id !== null
            );


    return {

        ok:
            dados.ok !== false,

        modelo:
            normalizarTexto(
                dados.modelo
            ) ||
            "classico",

        produtos:
            produtosPromocao

    };

}


/* =========================================================
   LER CACHE
========================================================= */

export function lerCachePromocoes() {

    try {

        const salvo =
            localStorage.getItem(
                CACHE_KEY
            );


        if (!salvo) {

            return null;

        }


        return normalizarDadosPromocoes(
            JSON.parse(
                salvo
            )
        );


    } catch (erro) {

        console.warn(
            "[PROMOÇÕES CACHE] Erro ao ler:",
            erro
        );


        return null;

    }

}


/* =========================================================
   SALVAR CACHE
========================================================= */

export function salvarCachePromocoes(
    dados
) {

    try {

        const normalizado =
            normalizarDadosPromocoes(
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
            "[PROMOÇÕES CACHE] Erro ao salvar:",
            erro
        );


        return normalizarDadosPromocoes(
            dados
        );

    }

}


/* =========================================================
   COMPARAR
========================================================= */

export function dadosPromocoesSaoIguais(
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
            JSON.stringify(
                normalizarDadosPromocoes(
                    cache
                )
            ) ===
            JSON.stringify(
                normalizarDadosPromocoes(
                    servidor
                )
            )
        );


    } catch {

        return false;

    }

}


/* =========================================================
   LIMPAR
========================================================= */

export function limparCachePromocoes() {

    try {

        localStorage.removeItem(
            CACHE_KEY
        );


        return true;


    } catch {

        return false;

    }

}