
/* =========================================================
   CACHE EXCLUSIVO DO PRODUTO ATUAL
========================================================= */

const CACHE_PREFIX = "ironstore_produto_atual";
const CACHE_IMAGENS = "ironstore_imagens_produtos_v1";

/* =========================================================
   NORMALIZAR DOMÍNIO
========================================================= */

function normalizarDominioCache(dominio) {
    return String(dominio || "")
        .trim()
        .toLowerCase()
        .replace(/\/+$/, "");
}

/* =========================================================
   PEGAR DOMÍNIO ATUAL
========================================================= */

export function pegarDominioAtualProduto() {
    if (typeof window === "undefined") {
        return "";
    }

    return normalizarDominioCache(
        `${window.location.protocol}//${window.location.host}`
    );
}

/* =========================================================
   CHAVE DO PRODUTO
========================================================= */

function pegarChaveProduto(dominio, produtoId) {
    return `${CACHE_PREFIX}:${normalizarDominioCache(dominio)}:${produtoId}`;
}

/* =========================================================
   LER DADOS DO PRODUTO
========================================================= */

export function lerCacheProdutoAtual(dominio, produtoId) {
    try {
        const chave = pegarChaveProduto(dominio, produtoId);
        const salvo = localStorage.getItem(chave);

        if (!salvo) {
            return null;
        }

        const dados = JSON.parse(salvo);

        if (!dados || typeof dados !== "object") {
            return null;
        }

        return dados;
    } catch (erro) {
        console.warn("[PRODUTO ATUAL CACHE]", erro);
        return null;
    }
}

/* =========================================================
   SALVAR DADOS DO PRODUTO
========================================================= */

export function salvarCacheProdutoAtual(dominio, produtoId, dados) {
    try {
        const chave = pegarChaveProduto(dominio, produtoId);

        localStorage.setItem(
            chave,
            JSON.stringify(dados)
        );
    } catch (erro) {
        console.warn("[PRODUTO ATUAL CACHE]", erro);
    }
}

/* =========================================================
   COMPARAR DADOS
========================================================= */

export function produtoAtualIgual(cache, servidor) {
    if (!cache || !servidor) {
        return false;
    }

    try {
        return JSON.stringify(cache) === JSON.stringify(servidor);
    } catch {
        return false;
    }
}

/* =========================================================
   OBTER IMAGEM DO CACHE OU BAIXAR E ARMAZENAR
========================================================= */

export async function obterImagemCacheada(imagemUrl) {
    if (!imagemUrl || typeof imagemUrl !== "string") {
        return null;
    }

    try {
        let cache = null;

        if ("caches" in window) {
            cache = await caches.open(CACHE_IMAGENS);

            const imagemSalva = await cache.match(imagemUrl);

            if (imagemSalva) {
                const blob = await imagemSalva.blob();

                if (blob.size > 0) {
                    return URL.createObjectURL(blob);
                }
            }
        }

        const resposta = await fetch(imagemUrl, {
            method: "GET",
            mode: "cors",
            credentials: "omit",
            cache: "no-store"
        });

        if (!resposta.ok || resposta.type === "opaque") {
            return imagemUrl;
        }

        const respostaParaCache = resposta.clone();

        const blob = await resposta.blob();

        if (!blob.size) {
            return imagemUrl;
        }

        if (cache) {
            try {
                await cache.put(
                    imagemUrl,
                    respostaParaCache
                );
            } catch (erroCache) {
                console.warn(
                    "[CACHE IMAGEM] Não foi possível armazenar:",
                    erroCache
                );
            }
        }

        return URL.createObjectURL(blob);

    } catch (erro) {
        console.warn(
            "[CACHE IMAGEM] Não foi possível carregar a imagem:",
            imagemUrl,
            erro
        );

        return imagemUrl;
    }
}
