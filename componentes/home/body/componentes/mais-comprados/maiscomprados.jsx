import React, {
    useEffect,
    useState
} from "react";
import {
    pegarDominioAtualMaisComprados,
    lerCacheMaisComprados,
    salvarCacheMaisComprados,
    normalizarDadosMaisComprados,
    dadosMaisCompradosSaoIguais
} from "./cache";
import {
    useNavigate
} from "react-router-dom";
import classicoMaiscomprados
    from "../../../../../modelos/classico/maiscomprados/maiscomprados";
import {
    API_URL
} from "../../../../../config";

import ProdutoCategoria
    from "../categorias/produtocategorias";

const IRONSTORE_APP_KEY_GERAL =
    import.meta.env
        .VITE_IRONSTORE_APP_KEY_GERAL;

/* =========================================================
   MODELOS
========================================================= */

const modelosMaiscomprados = {

    classico:
        classicoMaiscomprados,

};
/* =========================================================
   DOMÍNIO
========================================================= */

function pegarDominioAtual() {

    return window.location.origin
        .trim()
        .replace(/\/+$/, "")
        .toLowerCase();
}


/* =========================================================
   COMPONENTE
========================================================= */

export default function Maiscomprados() {

    const navigate =
        useNavigate();

    /* =========================================================
       CACHE INICIAL
    ========================================================= */

    const cacheInicial =
        lerCacheMaisComprados();


    /* =========================================================
       DADOS
    
       A interface trabalha sempre com os dados normalizados
       vindos do cache.
    ========================================================= */

    const [
        dados,
        setDados
    ] = useState(
        cacheInicial
    );

    const [
        clienteLogado,
        setClienteLogado
    ] = useState(() => {

        return Boolean(
            localStorage.getItem(
                "ironstore_cliente_token"
            )
        );

    });

    const [
        produtosCarrinho,
        setProdutosCarrinho
    ] = useState(
        new Set()
    );


    /* =====================================================
       SINCRONIZAR MAIS COMPRADOS
    
       REGRA:
    
       CACHE
          ↓
       INTERFACE
    
       SERVIDOR
          ↓
       COMPARA COM CACHE
          ↓
       SE DIFERENTE
          ↓
       ATUALIZA CACHE
          ↓
       ATUALIZA INTERFACE
    ===================================================== */

    useEffect(() => {

        let ativo =
            true;


        async function carregar() {

            /* =============================================
               1. CARREGAR CACHE
    
               O SITE MOSTRA O CACHE PRIMEIRO.
            ============================================= */

            const cache =
                lerCacheMaisComprados();


            if (
                cache &&
                ativo
            ) {

                setDados(
                    cache
                );

            }


            /* =============================================
               2. CHAVE
            ============================================= */

            if (
                !IRONSTORE_APP_KEY_GERAL
            ) {

                console.error(
                    "[MAIS COMPRADOS] VITE_IRONSTORE_APP_KEY_GERAL não configurada."
                );

                return;

            }


            /* =============================================
               3. SERVIDOR
            ============================================= */

            try {

                const dominio =
                    pegarDominioAtualMaisComprados();


                const resposta =
                    await fetch(

                        `${API_URL}/ironstore/mais-comprados?dominio=${encodeURIComponent(
                            dominio
                        )}`,

                        {

                            method:
                                "GET",

                            headers: {

                                "X-IronStore-Key":
                                    IRONSTORE_APP_KEY_GERAL

                            }

                        }

                    );


                let resultado =
                    null;


                try {

                    resultado =
                        await resposta.json();

                } catch {

                    resultado =
                        null;

                }


                if (
                    !ativo
                ) {

                    return;

                }


                /* =============================================
                   4. ERRO
    
                   NÃO APAGA CACHE.
                   MANTÉM O QUE JÁ ESTAVA NA TELA.
                ============================================= */

                if (
                    !resposta.ok
                ) {

                    console.error(
                        "[MAIS COMPRADOS]",
                        resultado?.detail ||
                        `Erro HTTP ${resposta.status}`
                    );

                    return;

                }


                /* =============================================
                   5. NORMALIZAR SERVIDOR
                ============================================= */

                const servidor =
                    normalizarDadosMaisComprados(
                        resultado
                    );


                /* =============================================
                   6. CACHE ATUAL
                ============================================= */

                const cacheAtual =
                    lerCacheMaisComprados();


                /* =============================================
                   7. COMPARAR
                ============================================= */

                const igual =
                    dadosMaisCompradosSaoIguais(
                        cacheAtual,
                        servidor
                    );


                /* =============================================
                   8. IGUAL
    
                   Não grava.
                   Não renderiza novamente.
                ============================================= */

                if (
                    igual
                ) {

                    return;

                }


                /* =============================================
                   9. DIFERENTE
    
                   servidor
                      ↓
                   localStorage
                      ↓
                   interface
                ============================================= */

                const atualizado =
                    salvarCacheMaisComprados(
                        servidor
                    );


                if (
                    !ativo
                ) {

                    return;

                }


                setDados(
                    atualizado
                );


            } catch (erro) {

                console.warn(
                    "[MAIS COMPRADOS] Backend indisponível. Mantendo cache.",
                    erro
                );

            }

        }


        carregar();


        return () => {

            ativo =
                false;

        };

    }, []);
    /* =====================================================
       DADOS DA INTERFACE
    
       NÃO vêm diretamente do fetch.
       Vêm do estado sincronizado com o cache.
    ===================================================== */

    const produtos =
        dados?.produtos ||
        [];


    const modelo =
        String(
            dados?.modelo ||
            "classico"
        )
            .trim()
            .toLowerCase();
    /* =====================================================
       CARRINHO
    ===================================================== */

    useEffect(() => {

        async function carregarCarrinho() {

            const token =
                localStorage.getItem(
                    "ironstore_cliente_token"
                );

            if (!token) {

                setProdutosCarrinho(
                    new Set()
                );

                return;
            }

            try {

                const dominio =
                    pegarDominioAtual();

                const resposta =
                    await fetch(
                        `${API_URL}/ironstore/carrinho/verificar?dominio=${encodeURIComponent(
                            dominio
                        )}`,
                        {
                            method: "GET",

                            headers: {
                                "X-IronStore-Key":
                                    IRONSTORE_APP_KEY_GERAL,

                                "Authorization":
                                    `Bearer ${token}`
                            }
                        }
                    );

                const resultado =
                    await resposta.json();

                if (!resposta.ok) {
                    return;
                }

                setProdutosCarrinho(
                    new Set(
                        (
                            resultado?.produtos_ids ||
                            []
                        ).map(
                            String
                        )
                    )
                );

            } catch (erro) {

                console.error(
                    "[MAIS COMPRADOS CARRINHO]",
                    erro
                );
            }
        }

        carregarCarrinho();

    }, []);


    /* =====================================================
       ABRIR PRODUTO
    ===================================================== */

    function abrirProduto(
        produto
    ) {

        const produtoVariedadeId =
            Number(
                produto?.produto_variedade_id ??
                0
            );

        const produtoPrincipalId =
            produtoVariedadeId > 0
                ? produtoVariedadeId
                : produto?.id;

        if (!produtoPrincipalId) {
            return;
        }

        navigate(
            `/produtos/${produtoPrincipalId}`
        );
    }


    /* =====================================================
       ADICIONAR AO CARRINHO
    ===================================================== */

    async function adicionarAoCarrinho(
        produto
    ) {

        const token =
            localStorage.getItem(
                "ironstore_cliente_token"
            );

        if (!token) {

            setClienteLogado(
                false
            );

            navigate(
                "/entrar"
            );

            return;
        }

        try {

            const dominio =
                pegarDominioAtual();

            const resposta =
                await fetch(
                    `${API_URL}/ironstore/carrinho/adicionar`,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json",

                            "X-IronStore-Key":
                                IRONSTORE_APP_KEY_GERAL,

                            "Authorization":
                                `Bearer ${token}`
                        },

                        body:
                            JSON.stringify({
                                dominio:
                                    dominio,

                                produto_id:
                                    produto.id
                            })
                    }
                );

            const resultado =
                await resposta.json();

            if (
                resposta.status === 401
            ) {

                localStorage.removeItem(
                    "ironstore_cliente_token"
                );

                localStorage.removeItem(
                    "ironstore_cliente"
                );

                setClienteLogado(
                    false
                );

                navigate(
                    "/entrar"
                );

                return;
            }

            if (!resposta.ok) {

                console.error(
                    "[MAIS COMPRADOS CARRINHO]",
                    resultado?.detail
                );

                return;
            }

            if (
                resultado?.adicionado ||
                resultado?.ja_estava_carrinho
            ) {

                setProdutosCarrinho(
                    anterior => {

                        const novo =
                            new Set(
                                anterior
                            );

                        novo.add(
                            String(
                                produto.id
                            )
                        );

                        return novo;
                    }
                );
            }

        } catch (erro) {

            console.error(
                "[MAIS COMPRADOS CARRINHO]",
                erro
            );
        }
    }


    /* =====================================================
       SEM CACHE AINDA
    
       Na primeira visita não existe cache.
       Aguarda a resposta do backend.
    ===================================================== */




    /* =========================================================
       MODELO
    ========================================================= */

    const estilo =
        modelosMaiscomprados[
        modelo
        ] ||
        modelosMaiscomprados.classico;

    /* =====================================================
       RENDER
    ===================================================== */

    return (
        <>

            <style>
                {estilo}
            </style>

            <section
                className="ironstore-mais-comprados"
            >

                <div
                    className="ironstore-mais-comprados-conteudo"
                >

                    {/* =========================================
                    CABEÇALHO
                ========================================= */}

                    <div
                        className="ironstore-mais-comprados-cabecalho"
                    >

                        <div
                            className="ironstore-mais-comprados-icone"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M7 21h10"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M12 17v4"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M8 4h8v4a4 4 0 0 1-8 0V4Z"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinejoin="round"
                                />

                                <path
                                    d="M8 6H5v1a4 4 0 0 0 4 4"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                <path
                                    d="M16 6h3v1a4 4 0 0 1-4 4"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>


                        <div
                            className="ironstore-mais-comprados-cabecalho-texto"
                        >

                            <span>
                                Preferidos dos clientes
                            </span>

                            <h2>
                                Mais comprados
                            </h2>

                            <p>
                                Os produtos que estão fazendo sucesso por aqui.
                            </p>

                        </div>

                    </div>


                    {/* =========================================
                    PRODUTOS
                ========================================= */}

                    <div
                        className="ironstore-mais-comprados-trilho"
                    >

                        {produtos.map(
                            (
                                produto,
                                index
                            ) => {

                                const posicao =
                                    index + 1;

                                return (

                                    <div
                                        key={
                                            produto.id
                                        }
                                        className={
                                            `
                                        ironstore-mais-comprados-item
                                        ${posicao === 1
                                                ? "primeiro"
                                                : ""
                                            }
                                        `
                                        }
                                    >

                                        <div
                                            className="ironstore-mais-comprados-ranking"
                                        >

                                            <span
                                                className="ironstore-mais-comprados-posicao"
                                            >
                                                {posicao}
                                            </span>

                                            <div
                                                className="ironstore-mais-comprados-ranking-texto"
                                            >

                                                <strong>
                                                    {posicao === 1
                                                        ? "Mais vendido"
                                                        : `Top ${posicao}`
                                                    }
                                                </strong>



                                            </div>

                                        </div>


                                        <ProdutoCategoria
                                            produto={
                                                produto
                                            }

                                            onAbrir={
                                                abrirProduto
                                            }

                                            clienteLogado={
                                                clienteLogado
                                            }

                                            produtosCarrinho={
                                                produtosCarrinho
                                            }

                                            onAdicionarCarrinho={
                                                adicionarAoCarrinho
                                            }
                                        />

                                    </div>

                                );

                            }
                        )}

                    </div>

                </div>

            </section>

        </>
    );
}