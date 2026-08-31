/* =========================================================
   CACHE
   IRONSTORE REELS
========================================================= */

const CACHE_PREFIX =
    "ironstore_reels";


/* =========================================================
   NORMALIZAR DOMÍNIO
========================================================= */

export function pegarDominioAtualReels() {

    return window.location.origin
        .trim()
        .toLowerCase()
        .replace(/\/+$/, "");

}


/* =========================================================
   CHAVE
========================================================= */

function gerarChaveCache(
    dominio
) {

    const dominioFinal =
        String(
            dominio || ""
        )
            .trim()
            .toLowerCase()
            .replace(/\/+$/, "");

    return `${CACHE_PREFIX}:${dominioFinal}`;

}


/* =========================================================
   NORMALIZAR IMAGENS
========================================================= */

function normalizarImagens(
    imagens
) {

    if (!Array.isArray(imagens)) {
        return [];
    }

    return imagens
        .map(
            imagem =>
                String(
                    imagem || ""
                ).trim()
        )
        .filter(Boolean);

}


/* =========================================================
   NORMALIZAR PRODUTO
========================================================= */

function normalizarProdutoReel(
    produto
) {

    if (!produto) {
        return null;
    }

    return {

        id:
            Number(
                produto.id
            ),

        nome:
            String(
                produto.nome || ""
            ),

        descricao:
            String(
                produto.descricao || ""
            ),

        descricao_curta:
            String(
                produto.descricao_curta || ""
            ),

        categoria:
            String(
                produto.categoria || ""
            ),

        variedades:
            Array.isArray(
                produto.variedades
            )
                ? produto.variedades
                    .map(
                        variedade =>
                            String(
                                variedade || ""
                            ).trim()
                    )
                    .filter(Boolean)
                : [],

        preco:
            produto.preco,

        preco_promocao:
            produto.preco_promocao,

        destaque:
            produto.destaque,

        imagens:
            normalizarImagens(
                produto.imagens
            ),

        quantidade_imagens:
            Number(
                produto.quantidade_imagens ||
                0
            ),

        modelo_reel:
            String(
                produto.modelo_reel ||
                "cinematico"
            ),

    };

}


/* =========================================================
   NORMALIZAR DADOS
========================================================= */

export function normalizarDadosReels(
    dados
) {

    if (!dados) {
        return null;
    }

    return {

        comercio: {

            id:
                dados?.comercio?.id,

            loja:
                String(
                    dados?.comercio?.loja ||
                    ""
                ),

            imagem:
                String(
                    dados?.comercio?.imagem ||
                    ""
                ),

        },

        produto_inicial_id:
            Number(
                dados?.produto_inicial_id ||
                0
            ),

        reels:
            (
                Array.isArray(
                    dados?.reels
                )
                    ? dados.reels
                    : []
            )
                .map(
                    normalizarProdutoReel
                )
                .filter(Boolean),

    };

}


/* =========================================================
   LER
========================================================= */

export function lerCacheReels(
    dominio
) {

    try {

        const chave =
            gerarChaveCache(
                dominio
            );

        const salvo =
            localStorage.getItem(
                chave
            );

        if (!salvo) {
            return null;
        }

        return normalizarDadosReels(
            JSON.parse(
                salvo
            )
        );

    } catch (erro) {

        console.warn(
            "[REELS CACHE] Erro ao ler:",
            erro
        );

        return null;

    }

}


/* =========================================================
   SALVAR
========================================================= */

export function salvarCacheReels(
    dominio,
    dados
) {

    try {

        const normalizado =
            normalizarDadosReels(
                dados
            );

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

        return normalizado;

    } catch (erro) {

        console.warn(
            "[REELS CACHE] Erro ao salvar:",
            erro
        );

        return null;

    }

}


/* =========================================================
   COMPARAR
========================================================= */

export function reelsSaoIguais(
    anterior,
    novo
) {

    if (!anterior || !novo) {
        return false;
    }

    try {

        return JSON.stringify(
            normalizarDadosReels(
                anterior
            )
        ) === JSON.stringify(
            normalizarDadosReels(
                novo
            )
        );

    } catch {

        return false;

    }

}