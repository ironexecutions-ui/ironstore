import { useEffect } from "react";

import { API_URL } from "../config";


/* =========================================================
   CHAVE IRONSTORE
========================================================= */

const IRONSTORE_APP_KEY_ABA =
    import.meta.env.VITE_IRONSTORE_APP_KEY_ABA;


/* =========================================================
   DOMÍNIO ATUAL
========================================================= */

function pegarDominioAtual() {
    return window.location.origin
        .trim()
        .replace(/\/+$/, "")
        .toLowerCase();
}


/* =========================================================
   CHAVE DO CACHE

   Cada domínio possui seu próprio cache.

   CONTEÚDO ATUAL:
   loja
   imagem
========================================================= */

function gerarChaveCacheAba() {
    const dominio = pegarDominioAtual();

    return `ironstore_identidade_aba_${dominio}`;
}


/* =========================================================
   NORMALIZAR DADOS
========================================================= */

function normalizarDadosAba(dados) {
    return {
        loja: dados?.loja || "",
        imagem: dados?.imagem || "",
    };
}


/* =========================================================
   LER CACHE
========================================================= */

function lerCacheAba() {
    const chave = gerarChaveCacheAba();

    try {
        const salvo = localStorage.getItem(chave);

        if (!salvo) {
            return null;
        }

        return normalizarDadosAba(
            JSON.parse(salvo)
        );

    } catch (erro) {
        console.warn(
            "[ABA] Cache inválido:",
            erro
        );

        localStorage.removeItem(chave);

        return null;
    }
}


/* =========================================================
   SALVAR CACHE
========================================================= */

function salvarCacheAba(dados) {
    const chave = gerarChaveCacheAba();

    try {
        localStorage.setItem(
            chave,
            JSON.stringify(
                normalizarDadosAba(dados)
            )
        );

    } catch (erro) {
        console.warn(
            "[ABA] Não foi possível salvar cache:",
            erro
        );
    }
}


/* =========================================================
   COMPARAR CACHE
========================================================= */

function dadosAbaSaoIguais(
    cache,
    servidor
) {
    if (!cache) {
        return false;
    }

    return (
        cache.loja === servidor.loja &&
        cache.imagem === servidor.imagem
    );
}


/* =========================================================
   APLICAR IDENTIDADE NA ABA
========================================================= */

function aplicarIdentidadeDaAba(dados) {
    if (!dados) {
        return;
    }


    /* =====================================================
       NOME DA ABA
    ===================================================== */

    if (dados.loja) {
        document.title = dados.loja;
    }


    /* =====================================================
       FAVICON
    ===================================================== */

    if (dados.imagem) {
        let favicon =
            document.querySelector(
                "link[rel='icon']"
            );

        if (!favicon) {
            favicon =
                document.createElement("link");

            favicon.rel = "icon";

            document.head.appendChild(
                favicon
            );
        }

        favicon.href = dados.imagem;
    }
}


/* =========================================================
   COMPONENTE ABA

   Este componente não renderiza nada visual.

   Responsabilidades:
   - descobrir domínio
   - carregar cache
   - consultar backend
   - atualizar cache
   - definir nome da aba
   - definir favicon
========================================================= */

export default function Aba() {

    useEffect(() => {
        let componenteAtivo = true;


        async function carregarIdentidadeDaAba() {

            /* =================================================
               1. CACHE PRIMEIRO
            ================================================= */

            const cache =
                lerCacheAba();

            if (cache) {
                aplicarIdentidadeDaAba(
                    cache
                );
            }


            /* =================================================
               2. VERIFICAR CHAVE
            ================================================= */

            if (!IRONSTORE_APP_KEY_ABA) {
                console.error(
                    "[ABA] VITE_IRONSTORE_APP_KEY_ABA não configurada."
                );

                return;
            }


            /* =================================================
               3. CONSULTAR BACKEND
            ================================================= */

            try {
                const dominioAtual =
                    pegarDominioAtual();


                const resposta =
                    await fetch(
                        `${API_URL}/ironstore/dominio?dominio=${encodeURIComponent(
                            dominioAtual
                        )}`,
                        {
                            method: "GET",

                            headers: {
                                "X-IronStore-Key":
                                    IRONSTORE_APP_KEY_ABA,
                            },
                        }
                    );


                /* =================================================
                   4. LER RESPOSTA
                ================================================= */

                let dados = null;

                try {
                    dados =
                        await resposta.json();
                } catch {
                    dados = null;
                }


                /* =================================================
                   5. ERRO DO BACKEND

                   Mantemos o cache.
                ================================================= */

                if (!resposta.ok) {
                    console.error(
                        "[ABA] Não foi possível identificar a loja:",
                        dados?.detail ||
                        `Erro HTTP ${resposta.status}`
                    );

                    return;
                }


                if (!componenteAtivo) {
                    return;
                }


                /* =================================================
                   6. DADOS DO COMÉRCIO
                ================================================= */

                const comercio =
                    dados?.comercio;


                const dadosServidor =
                    normalizarDadosAba({
                        loja:
                            comercio?.loja,

                        imagem:
                            comercio?.imagem,
                    });


                /* =================================================
                   7. CACHE MAIS RECENTE
                ================================================= */

                const cacheAtual =
                    lerCacheAba();


                /* =================================================
                   8. COMPARAR
                ================================================= */

                const cacheIgual =
                    dadosAbaSaoIguais(
                        cacheAtual,
                        dadosServidor
                    );


                /* =================================================
                   9. CACHE JÁ ESTÁ CORRETO
                ================================================= */

                if (cacheIgual) {
                    aplicarIdentidadeDaAba(
                        dadosServidor
                    );

                    return;
                }


                /* =================================================
                   10. ALTERAÇÃO DETECTADA
                ================================================= */

                aplicarIdentidadeDaAba(
                    dadosServidor
                );


                salvarCacheAba(
                    dadosServidor
                );

            } catch (erro) {
                console.warn(
                    "[ABA] Backend indisponível. Mantendo identidade do cache.",
                    erro
                );
            }
        }


        carregarIdentidadeDaAba();


        return () => {
            componenteAtivo = false;
        };

    }, []);


    /* =====================================================
       NÃO EXISTE CONTEÚDO VISUAL
    ===================================================== */

    return null;
}