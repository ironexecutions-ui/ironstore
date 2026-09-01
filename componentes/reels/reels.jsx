import React, {
    useEffect,
    useRef,
    useState
} from "react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import {
    API_URL
} from "../../config";

import {
    lerCacheReels,
    salvarCacheReels,
    normalizarDadosReels,
    reelsSaoIguais,
    pegarDominioAtualReels
} from "./cache";

import "./reels.css";


const IRONSTORE_APP_KEY_GERAL =
    import.meta.env
        .VITE_IRONSTORE_APP_KEY_GERAL;


/* =========================================================
   MOEDA
========================================================= */

function moeda(
    valor
) {

    return Number(
        valor || 0
    ).toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}

/* =========================================================
   COLOCAR PRODUTO DA URL PRIMEIRO
========================================================= */

function ordenarReelsPeloProdutoInicial(
    dados,
    produtoId
) {

    if (
        !dados ||
        !Array.isArray(
            dados.reels
        ) ||
        !produtoId
    ) {
        return dados;
    }


    const idInicial =
        String(
            produtoId
        );


    const indiceProduto =
        dados.reels.findIndex(
            produto =>
                String(
                    produto?.id
                ) === idInicial
        );


    /*
     * Já está primeiro.
     */
    if (
        indiceProduto === 0
    ) {
        return dados;
    }


    /*
     * Produto não existe nos reels.
     * Não altera nada.
     */
    if (
        indiceProduto < 0
    ) {
        return dados;
    }


    const produtoInicial =
        dados.reels[
        indiceProduto
        ];


    const restantes =
        dados.reels.filter(
            (_, indice) =>
                indice !==
                indiceProduto
        );


    return {
        ...dados,

        produto_inicial_id:
            Number(
                produtoInicial.id
            ),

        reels: [
            produtoInicial,
            ...restantes
        ]
    };
}
/* =========================================================
   COMPONENTE
========================================================= */

export default function Reelslog() {

    const navigate =
        useNavigate();

    const {
        produtoid
    } = useParams();

    const containerRef =
        useRef(null);


    const dominio =
        pegarDominioAtualReels();


    const [
        dados,
        setDados
    ] = useState(
        () => {

            const cache =
                lerCacheReels(
                    dominio
                );

            return ordenarReelsPeloProdutoInicial(
                cache,
                produtoid
            );
        }
    );


    const [
        carregando,
        setCarregando
    ] = useState(
        !dados
    );


    const [
        erro,
        setErro
    ] = useState("");


    const [
        adicionandoId,
        setAdicionandoId
    ] = useState(null);


    const [
        adicionados,
        setAdicionados
    ] = useState(
        new Set()
    );
    const produtoVisivelRef =
        useRef(
            String(
                produtoid || ""
            )
        );

    /* =====================================================
       CARREGAR
    ===================================================== */

    useEffect(() => {

        let ativo =
            true;


        async function carregar() {

            const cache =
                lerCacheReels(
                    dominio
                );


            const cacheOrdenado =
                ordenarReelsPeloProdutoInicial(
                    cache,
                    produtoid
                );


            if (
                cacheOrdenado &&
                ativo
            ) {

                setDados(
                    cacheOrdenado
                );

                setCarregando(
                    false
                );

            }


            if (
                !IRONSTORE_APP_KEY_GERAL
            ) {

                setErro(
                    "Chave do IronStore não configurada."
                );

                setCarregando(
                    false
                );

                return;

            }


            try {

                const resposta =
                    await fetch(
                        `${API_URL}/ironstore/reels/${encodeURIComponent(
                            produtoid
                        )}`,
                        {

                            method:
                                "GET",

                            headers: {

                                "X-IronStore-Key":
                                    IRONSTORE_APP_KEY_GERAL,

                                "X-IronStore-Domain":
                                    dominio

                            }

                        }
                    );


                const resultado =
                    await resposta.json();


                if (!resposta.ok) {

                    throw new Error(
                        resultado?.detail ||
                        "Não foi possível carregar os Reels."
                    );

                }


                const normalizadoApi =
                    normalizarDadosReels(
                        resultado
                    );


                const normalizado =
                    ordenarReelsPeloProdutoInicial(
                        normalizadoApi,
                        produtoid
                    );


                if (
                    !reelsSaoIguais(
                        cache,
                        normalizado
                    )
                ) {

                    salvarCacheReels(
                        dominio,
                        normalizado
                    );

                }


                if (ativo) {

                    setDados(
                        normalizado
                    );

                    setErro("");

                }

            } catch (
            erroCarregar
            ) {

                console.error(
                    "[REELS]",
                    erroCarregar
                );


                if (
                    ativo &&
                    !cache
                ) {

                    setErro(
                        erroCarregar?.message ||
                        "Não foi possível carregar os Reels."
                    );

                }

            } finally {

                if (ativo) {

                    setCarregando(
                        false
                    );

                }

            }

        }


        carregar();


        return () => {

            ativo =
                false;

        };

    }, [
        dominio,
        produtoid
    ]);
    /* =========================================================
       VERIFICAR PRODUTOS JÁ ADICIONADOS AO CARRINHO
    ========================================================= */

    useEffect(() => {

        let ativo = true;


        async function verificarCarrinho() {

            const token =
                localStorage.getItem(
                    "ironstore_cliente_token"
                );


            /*
             * Sem login não existe carrinho
             * de cliente para verificar.
             */
            if (!token) {

                if (ativo) {

                    setAdicionados(
                        new Set()
                    );

                }

                return;
            }


            if (
                !dados?.reels?.length ||
                !IRONSTORE_APP_KEY_GERAL
            ) {
                return;
            }


            const idsAdicionados =
                new Set();


            try {

                await Promise.all(

                    dados.reels.map(
                        async produto => {

                            if (!produto?.id) {
                                return;
                            }


                            const resposta =
                                await fetch(
                                    `${API_URL}/ironstore/carrinho/verificar?dominio=${encodeURIComponent(
                                        dominio
                                    )}&produto_id=${encodeURIComponent(
                                        produto.id
                                    )}`,
                                    {

                                        method:
                                            "GET",

                                        headers: {

                                            "X-IronStore-Key":
                                                IRONSTORE_APP_KEY_GERAL,

                                            "Authorization":
                                                `Bearer ${token}`

                                        }

                                    }
                                );


                            /*
                             * Token inválido.
                             */
                            if (
                                resposta.status === 401
                            ) {

                                localStorage.removeItem(
                                    "ironstore_cliente_token"
                                );

                                localStorage.removeItem(
                                    "ironstore_cliente"
                                );

                                return;
                            }


                            if (!resposta.ok) {
                                return;
                            }


                            const resultado =
                                await resposta.json();





                            /*
                             * Aceita os formatos mais comuns
                             * retornados pela rota.
                             */
                            const produtosIdsCarrinho =
                                Array.isArray(
                                    resultado?.produtos_ids
                                )
                                    ? resultado.produtos_ids.map(
                                        id => String(id)
                                    )
                                    : [];


                            const estaAdicionado =
                                produtosIdsCarrinho.includes(
                                    String(
                                        produto.id
                                    )
                                );


                            if (estaAdicionado) {

                                idsAdicionados.add(
                                    String(
                                        produto.id
                                    )
                                );

                            }

                        }
                    )

                );


                if (!ativo) {
                    return;
                }


                setAdicionados(
                    new Set(
                        idsAdicionados
                    )
                );


            } catch (
            erroVerificacao
            ) {

                console.error(
                    "[REELS VERIFICAR CARRINHO]",
                    erroVerificacao
                );

            }

        }


        verificarCarrinho();


        return () => {

            ativo = false;

        };

    }, [
        dados?.reels,
        dominio
    ]);

    /* =====================================================
       ADICIONAR CARRINHO
    ===================================================== */

    async function adicionarCarrinho(
        produto
    ) {

        const token =
            localStorage.getItem(
                "ironstore_cliente_token"
            );


        if (!token) {

            navigate(
                "/entrar"
            );

            return;

        }


        if (
            !produto?.id ||
            adicionandoId
        ) {
            return;
        }


        setAdicionandoId(
            produto.id
        );


        try {

            const resposta =
                await fetch(
                    `${API_URL}/ironstore/carrinho/adicionar`,
                    {

                        method:
                            "POST",

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
                                    Number(
                                        produto.id
                                    ),

                                quantidade:
                                    1

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

                navigate(
                    "/entrar"
                );

                return;

            }


            if (!resposta.ok) {

                throw new Error(
                    resultado?.detail ||
                    "Não foi possível adicionar."
                );

            }


            setAdicionados(
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

        } catch (
        erroAdicionar
        ) {

            console.error(
                "[REELS CARRINHO]",
                erroAdicionar
            );

        } finally {

            setAdicionandoId(
                null
            );

        }

    }

    /* =========================================================
       COMPARTILHAR PRODUTO
    ========================================================= */

    async function compartilharProduto(
        produto
    ) {

        if (!produto?.id) {
            return;
        }


        const linkProduto =
            `${window.location.origin}/produtos/${produto.id}`;


        const nomeLoja =
            dados?.comercio?.loja ||
            "Nossa loja";


        const precoProduto =
            produto?.preco_promocao ||
            produto?.preco;


        const precoFormatado =
            precoProduto
                ? moeda(
                    precoProduto
                )
                : "";


        const descricao =
            produto?.descricao_curta ||
            produto?.descricao ||
            "";


        const mensagem =
            `Olha esse produto da ${nomeLoja}!\n\n` +
            `${produto.nome}` +
            (
                precoFormatado
                    ? `\n${precoFormatado}`
                    : ""
            ) +
            (
                descricao
                    ? `\n\n${descricao}`
                    : ""
            ) +
            `\n\nVeja o produto aqui:\n${linkProduto}`;


        /*
         * CELULAR / NAVEGADORES COMPATÍVEIS
         *
         * Abre o compartilhamento nativo:
         * WhatsApp
         * Messenger
         * Gmail
         * Telegram
         * etc.
         */
        if (
            navigator.share
        ) {

            try {

                await navigator.share({

                    title:
                        produto.nome,

                    text:
                        mensagem,

                    url:
                        linkProduto

                });

                return;

            } catch (
            erroCompartilhar
            ) {

                /*
                 * Usuário simplesmente fechou
                 * o menu de compartilhamento.
                 */
                if (
                    erroCompartilhar?.name ===
                    "AbortError"
                ) {
                    return;
                }

                console.error(
                    "[REELS COMPARTILHAR]",
                    erroCompartilhar
                );

            }

        }


        /*
         * FALLBACK PARA COMPUTADOR
         *
         * Copia mensagem + link.
         */
        try {

            await navigator.clipboard.writeText(
                mensagem
            );

            alert(
                "Mensagem e link do produto copiados."
            );

        } catch (
        erroClipboard
        ) {

            console.error(
                "[REELS COMPARTILHAR]",
                erroClipboard
            );

        }

    }
    /* =====================================================
       LOADING
    ===================================================== */

    if (
        carregando &&
        !dados
    ) {

        return (

            <div className="ironstore-reels-vitrine-loading">

                <span className="ironstore-reels-vitrine-loading-spinner" />

                <strong>
                    Preparando produtos
                </strong>

            </div>

        );

    }


    /* =====================================================
       ERRO
    ===================================================== */

    if (
        erro &&
        !dados
    ) {

        return (

            <div className="ironstore-reels-vitrine-erro">

                <strong>
                    Reels indisponíveis
                </strong>

                <p>
                    {erro}
                </p>

            </div>

        );

    }


    const reels =
        dados?.reels ||
        [];


    const comercio =
        dados?.comercio ||
        {};

    /* =========================================================
       SINCRONIZAR URL COM REEL VISÍVEL
    ========================================================= */

    useEffect(() => {

        const container =
            containerRef.current;

        if (
            !container ||
            !dados?.reels?.length
        ) {
            return;
        }


        const elementos =
            container.querySelectorAll(
                "[data-ironstore-reel-id]"
            );


        if (!elementos.length) {
            return;
        }


        const observer =
            new IntersectionObserver(
                entradas => {

                    let reelMaisVisivel =
                        null;


                    for (
                        const entrada
                        of entradas
                    ) {

                        if (
                            !entrada.isIntersecting
                        ) {
                            continue;
                        }


                        if (
                            !reelMaisVisivel ||
                            entrada.intersectionRatio >
                            reelMaisVisivel.intersectionRatio
                        ) {

                            reelMaisVisivel =
                                entrada;

                        }

                    }


                    if (!reelMaisVisivel) {
                        return;
                    }


                    const novoProdutoId =
                        reelMaisVisivel
                            .target
                            .dataset
                            .ironstoreReelId;


                    if (!novoProdutoId) {
                        return;
                    }


                    if (
                        produtoVisivelRef.current ===
                        String(
                            novoProdutoId
                        )
                    ) {
                        return;
                    }


                    produtoVisivelRef.current =
                        String(
                            novoProdutoId
                        );


                    /*
                     * IMPORTANTE:
                     *
                     * Não usamos navigate() aqui.
                     *
                     * Se usarmos navigate, produtoid muda,
                     * o useEffect da API roda novamente e
                     * toda a sequência dos Reels pode ser
                     * reconstruída.
                     *
                     * replaceState muda somente a URL.
                     */

                    window.history.replaceState(
                        window.history.state,
                        "",
                        `/reels/${novoProdutoId}`
                    );

                },
                {

                    root:
                        container,

                    threshold: [
                        0.55,
                        0.7,
                        0.85,
                        0.95
                    ]

                }
            );


        elementos.forEach(
            elemento => {

                observer.observe(
                    elemento
                );

            }
        );


        return () => {

            observer.disconnect();

        };

    }, [
        dados?.reels
    ]);
    /* =====================================================
       RETURN
    ===================================================== */

    return (

        <main
            ref={containerRef}
            className="ironstore-reels-vitrine-feed"
        >

            {reels.map(
                (
                    produto,
                    indice
                ) => {

                    const adicionado =
                        adicionados.has(
                            String(
                                produto.id
                            )
                        );


                    return (

                        <article
                            key={produto.id}
                            data-ironstore-reel-id={produto.id}
                            className={`
        ironstore-reels-vitrine-item
        ironstore-reels-vitrine-item--${produto.modelo_reel}
    `}
                        >

                            {/* =============================
                                IMAGENS
                            ============================== */}

                            <div className="ironstore-reels-vitrine-midia">

                                {produto.imagens.map(
                                    (
                                        imagem,
                                        imagemIndice
                                    ) => (

                                        <figure
                                            key={`${produto.id}-${imagemIndice}`}
                                            className={`
                                                ironstore-reels-vitrine-imagem-quadro
                                                ironstore-reels-vitrine-imagem-quadro--${imagemIndice + 1}
                                            `}
                                        >

                                            <img
                                                src={imagem}
                                                alt={`${produto.nome} ${imagemIndice + 1}`}
                                                loading={
                                                    indice <= 1
                                                        ? "eager"
                                                        : "lazy"
                                                }
                                            />

                                        </figure>

                                    )
                                )}

                                <div className="ironstore-reels-vitrine-sombra" />

                            </div>


                            {/* =============================
                                CONTADOR
                            ============================== */}

                            <div className="ironstore-reels-vitrine-progresso">

                                {produto.imagens.map(
                                    (
                                        _,
                                        imagemIndice
                                    ) => (

                                        <span
                                            key={imagemIndice}
                                            className="ironstore-reels-vitrine-progresso-barra"
                                        />

                                    )
                                )}

                            </div>


                            {/* =============================
                                AÇÕES
                            ============================== */}

                            <aside className="ironstore-reels-vitrine-acoes">

                                <button
                                    type="button"
                                    className={`
                                        ironstore-reels-vitrine-acao
                                        ${adicionado
                                            ? "ironstore-reels-vitrine-acao--ativo"
                                            : ""
                                        }
                                    `}
                                    onClick={() =>
                                        adicionarCarrinho(
                                            produto
                                        )
                                    }
                                >

                                    <span className="ironstore-reels-vitrine-acao-icone">
                                        {adicionandoId === produto.id
                                            ? "..."
                                            : adicionado
                                                ? "✓"
                                                : "🛒"
                                        }
                                    </span>

                                    <small>
                                        {adicionado
                                            ? "Adicionado"
                                            : "Carrinho"
                                        }
                                    </small>

                                </button>


                                <button
                                    type="button"
                                    className="ironstore-reels-vitrine-acao"
                                    onClick={() =>
                                        navigate(
                                            "/compras"
                                        )
                                    }
                                >

                                    <span className="ironstore-reels-vitrine-acao-icone">
                                        🛍️
                                    </span>

                                    <small>
                                        Compras
                                    </small>

                                </button>


                                <button
                                    type="button"
                                    className="ironstore-reels-vitrine-acao"
                                    onClick={() =>
                                        navigate(
                                            `/produtos/${produto.id}`
                                        )
                                    }
                                >

                                    <span className="ironstore-reels-vitrine-acao-icone">
                                        👁️
                                    </span>

                                    <small>
                                        Ver Mais
                                    </small>

                                </button>
                                <button
                                    type="button"
                                    className="
        ironstore-reels-vitrine-acao
        ironstore-reels-vitrine-acao--compartilhar
    "
                                    onClick={() =>
                                        compartilharProduto(
                                            produto
                                        )
                                    }
                                >

                                    <span className="
        ironstore-reels-vitrine-acao-icone
        ironstore-reels-vitrine-acao-icone--compartilhar
    ">
                                        📲
                                    </span>

                                    <small>
                                        Compartilhar
                                    </small>

                                </button>
                            </aside>


                            {/* =============================
                                INFORMAÇÕES
                            ============================== */}

                            <section className="ironstore-reels-vitrine-info">

                                <div className="ironstore-reels-vitrine-loja">

                                    {comercio.imagem && (
                                        <img
                                            src={comercio.imagem}
                                            alt={comercio.loja}
                                            className="ironstore-reels-vitrine-loja-logo"
                                        />
                                    )}

                                    <strong>
                                        {comercio.loja}
                                    </strong>

                                </div>

                                {/* NOME PRIMEIRO */}
                                <h2 className="ironstore-reels-vitrine-produto-nome">
                                    {produto.nome}
                                </h2>

                                {/* VARIEDADES DEPOIS DO NOME */}
                                {produto.variedades?.length > 0 && (

                                    <div className="ironstore-reels-vitrine-variedades">

                                        {produto.variedades.map(
                                            (
                                                variedade,
                                                variedadeIndice
                                            ) => (

                                                <span
                                                    key={`${produto.id}-variedade-${variedadeIndice}`}
                                                    className="ironstore-reels-vitrine-variedade"
                                                >
                                                    {variedade}
                                                </span>

                                            )
                                        )}

                                    </div>

                                )}

                                {(produto.descricao_curta ||
                                    produto.descricao) && (

                                        <p className="ironstore-reels-vitrine-descricao">

                                            {produto.descricao_curta ||
                                                produto.descricao}

                                        </p>

                                    )}

                                <div className="ironstore-reels-vitrine-precos">

                                    {produto.preco_promocao ? (

                                        <>

                                            <span className="ironstore-reels-vitrine-preco-antigo">
                                                {moeda(
                                                    produto.preco
                                                )}
                                            </span>

                                            <strong className="ironstore-reels-vitrine-preco-atual">
                                                {moeda(
                                                    produto.preco_promocao
                                                )}
                                            </strong>

                                        </>

                                    ) : (

                                        <strong className="ironstore-reels-vitrine-preco-atual">
                                            {moeda(
                                                produto.preco
                                            )}
                                        </strong>

                                    )}

                                </div>

                            </section>
                        </article>

                    );

                }
            )}

        </main>

    );

}