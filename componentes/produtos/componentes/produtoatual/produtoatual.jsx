import React, {
    useEffect,
    useMemo,
    useState
} from "react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import {
    API_URL
} from "../../../../config";


import {
    pegarDominioAtualProduto,
    lerCacheProdutoAtual,
    salvarCacheProdutoAtual,
    produtoAtualIgual,
    obterImagemCacheada
} from "./cache";


import classicoProdutos
    from "../../../../modelos/classico/produtos/classico_produtos";


const IRONSTORE_APP_KEY_GERAL =
    import.meta.env
        .VITE_IRONSTORE_APP_KEY_GERAL;

/* =========================================================
   MODELOS
========================================================= */

const MODELOS = {
    classico:
        classicoProdutos
};


/* =========================================================
   COMPONENTE
========================================================= */

export default function ProdutoAtual() {

    const navigate =
        useNavigate();

    const {
        produtoId
    } = useParams();


    /* =====================================================
       DADOS
    ===================================================== */

    const [
        dados,
        setDados
    ] = useState(null);


    const [
        carregando,
        setCarregando
    ] = useState(true);


    const [
        erro,
        setErro
    ] = useState("");


    const [
        quantidade,
        setQuantidade
    ] = useState(1);


    const [
        adicionando,
        setAdicionando
    ] = useState(false);


    const [
        adicionado,
        setAdicionado
    ] = useState(false);

    const [
        seguimentoCarrinhoId,
        setSeguimentoCarrinhoId
    ] = useState(null);


    const [
        removendoCarrinho,
        setRemovendoCarrinho
    ] = useState(false);

    /* =====================================================
   VARIEDADE SELECIONADA
===================================================== */

    const [
        variedadeSelecionadaId,
        setVariedadeSelecionadaId
    ] = useState(null);
    /* =====================================================
       PRODUTO
    ===================================================== */

    const produto =
        dados?.produto ||
        null;


    const variedades =
        Array.isArray(
            dados?.variedades
        )
            ? dados.variedades
            : [];

    /* =====================================================
       PRODUTO REAL SELECIONADO
    
       A URL continua usando o produto principal.
       Aqui usamos o ID real da variedade selecionada.
    ===================================================== */

    const variedadeSelecionada =
        variedades.find(
            variedade =>
                Number(variedade?.id) ===
                Number(variedadeSelecionadaId)
        ) ||
        variedades.find(
            variedade =>
                Number(variedade?.id) ===
                Number(produto?.id)
        ) ||
        null;


    const produtoSelecionado =
        variedadeSelecionada
            ? {
                ...produto,

                ...variedadeSelecionada,

                id:
                    variedadeSelecionada.id,

                nome_base:
                    produto?.nome,

                produto_principal_id:
                    produto?.id
            }
            : produto;


    const produtoSelecionadoId =
        produtoSelecionado?.id ||
        produto?.id ||
        null;
    /* =====================================================
       MODELO
    ===================================================== */

    const modelo =
        dados?.modelo ||
        "classico";


    const cssModelo =
        MODELOS[modelo] ||
        classicoProdutos;


    /* =====================================================
       CLIENTE LOGADO

       SOMENTE CONTROLE VISUAL.
       AUTORIZAÇÃO CONTINUA NO BACKEND.
    ===================================================== */

    const clienteLogado =
        Boolean(
            localStorage.getItem(
                "ironstore_cliente_token"
            )
        );


    /* =====================================================
       CARREGAR PRODUTO
    ===================================================== */



    useEffect(() => {
        let ativo = true;

        async function carregarProduto() {
            if (!produtoId) {
                setErro("Produto não identificado.");
                setCarregando(false);
                return;
            }

            const dominio = pegarDominioAtualProduto();

            const cache = lerCacheProdutoAtual(
                dominio,
                produtoId
            );

            setCarregando(true);
            setErro("");
            setAdicionado(false);
            setSeguimentoCarrinhoId(null);

            /*
             * PRIMEIRO: EXIBIR O CACHE IMEDIATAMENTE.
             * O backend será consultado em seguida.
             */

            if (cache?.produto) {
                setDados(cache);

                setAdicionado(
                    Boolean(cache?.no_carrinho)
                );

                setSeguimentoCarrinhoId(
                    cache?.seguimento_carrinho_id || null
                );
            } else {
                setDados(null);
            }

            try {
                const token = localStorage.getItem(
                    "ironstore_cliente_token"
                );

                const headers = {
                    "X-IronStore-Key": IRONSTORE_APP_KEY_GERAL,
                    "X-IronStore-Domain": dominio
                };

                if (token) {
                    headers.Authorization = `Bearer ${token}`;
                }

                /*
                 * CONSULTAR BACKEND EM SEGUNDO PLANO.
                 */

                const resposta = await fetch(
                    `${API_URL}/ironstore/produto/${encodeURIComponent(produtoId)}`,
                    {
                        method: "GET",
                        headers,
                        cache: "no-store"
                    }
                );

                let resultado = null;

                try {
                    resultado = await resposta.json();
                } catch {
                    resultado = null;
                }

                if (!resposta.ok) {
                    throw new Error(
                        resultado?.detail ||
                        "Não foi possível carregar o produto."
                    );
                }

                if (!resultado?.produto) {
                    throw new Error("Produto não encontrado.");
                }

                if (!ativo) return;

                /*
                 * ATUALIZAR O CACHE COM OS DADOS MAIS RECENTES.
                 */

                const dadosIguais = produtoAtualIgual(
                    cache,
                    resultado
                );

                if (!dadosIguais) {
                    salvarCacheProdutoAtual(
                        dominio,
                        produtoId,
                        resultado
                    );
                }

                /*
                 * ATUALIZAR A TELA COM O BACKEND.
                 */

                setDados(resultado);

                setAdicionado(
                    Boolean(resultado?.no_carrinho)
                );

                setSeguimentoCarrinhoId(
                    resultado?.seguimento_carrinho_id || null
                );

                /*
                 * REGISTRAR VISUALIZAÇÃO SEM BLOQUEAR A TELA.
                 */

                if (token) {
                    fetch(
                        `${API_URL}/ironstore/produto/${encodeURIComponent(produtoId)}/visto`,
                        {
                            method: "POST",
                            headers: {
                                "X-IronStore-Key": IRONSTORE_APP_KEY_GERAL,
                                "X-IronStore-Domain": dominio,
                                Authorization: `Bearer ${token}`
                            }
                        }
                    ).catch(erro => {
                        console.error("[VISTO] ERRO:", erro);
                    });
                }

            } catch (erroCarregar) {
                console.error(
                    "[PRODUTO ATUAL]",
                    erroCarregar
                );

                if (!ativo) return;

                /*
                 * SE O CACHE JÁ FOI EXIBIDO,
                 * MANTER O PRODUTO NA TELA.
                 */

                if (!cache?.produto) {
                    setErro(
                        erroCarregar?.message ||
                        "Não foi possível carregar o produto."
                    );
                }

            } finally {
                if (ativo) {
                    setCarregando(false);
                }
            }
        }

        setQuantidade(1);
        setAdicionado(false);
        setSeguimentoCarrinhoId(null);

        setVariedadeSelecionadaId(
            Number(produtoId)
        );

        carregarProduto();

        return () => {
            ativo = false;
        };
    }, [produtoId]);



    /* =====================================================
       VERIFICAR CARRINHO DA VARIEDADE SELECIONADA
    ===================================================== */

    useEffect(() => {

        let ativo = true;


        async function verificarCarrinhoProduto() {

            const token =
                localStorage.getItem(
                    "ironstore_cliente_token"
                );


            if (
                !token ||
                !produtoSelecionadoId
            ) {

                if (ativo) {

                    setAdicionado(false);

                    setSeguimentoCarrinhoId(
                        null
                    );

                }

                return;
            }


            try {

                const dominio =
                    pegarDominioAtualProduto();


                const resposta =
                    await fetch(
                        `${API_URL}/ironstore/carrinho?dominio=${encodeURIComponent(
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


                const produtosCarrinho =
                    Array.isArray(
                        resultado?.produtos
                    )
                        ? resultado.produtos
                        : [];


                const registro =
                    produtosCarrinho.find(
                        item =>
                            Number(item?.id) ===
                            Number(produtoSelecionadoId)
                    );


                if (!ativo) {
                    return;
                }


                if (registro) {

                    setAdicionado(true);

                    setSeguimentoCarrinhoId(
                        registro?.seguimento_id ||
                        null
                    );

                } else {

                    setAdicionado(false);

                    setSeguimentoCarrinhoId(
                        null
                    );

                }

            } catch (erroCarrinho) {

                console.error(
                    "[PRODUTO CARRINHO]",
                    erroCarrinho
                );

            }

        }


        verificarCarrinhoProduto();


        return () => {

            ativo = false;

        };

    }, [
        produtoSelecionadoId
    ]);
    /* =====================================================
    IMAGENS
 ===================================================== */

    const imagens =
        useMemo(
            () => {

                const imagemUrl =
                    produto?.imagem_url;

                if (!imagemUrl) {
                    return [];
                }


                /* =========================================
                   CASO JÁ VENHA COMO ARRAY
                ========================================= */

                if (
                    Array.isArray(
                        imagemUrl
                    )
                ) {

                    return imagemUrl
                        .map(
                            imagem =>
                                String(
                                    imagem || ""
                                ).trim()
                        )
                        .filter(Boolean);

                }


                /* =========================================
                   BANCO:
                   url1|url2|url3|
                ========================================= */

                return String(
                    imagemUrl
                )
                    .split("|")
                    .map(
                        imagem =>
                            imagem.trim()
                    )
                    .filter(Boolean);

            },
            [
                produto?.imagem_url
            ]
        );

    const [imagensExibicao, setImagensExibicao] = useState([]);

    useEffect(() => {
        let ativo = true;
        const urlsCriadas = [];

        setImagensExibicao([]);

        async function carregarImagens() {
            if (!imagens.length) {
                return;
            }

            const imagensCarregadas = await Promise.all(
                imagens.map(async imagem => {
                    const imagemCacheada = await obterImagemCacheada(
                        imagem
                    );

                    const resultado = imagemCacheada || imagem;

                    if (resultado.startsWith("blob:")) {
                        urlsCriadas.push(resultado);
                    }

                    return resultado;
                })
            );

            if (ativo) {
                setImagensExibicao(imagensCarregadas);
            } else {
                urlsCriadas.forEach(url => {
                    URL.revokeObjectURL(url);
                });
            }
        }

        carregarImagens();

        return () => {
            ativo = false;

            urlsCriadas.forEach(url => {
                URL.revokeObjectURL(url);
            });
        };
    }, [imagens]);


    const [
        imagemAtual,
        setImagemAtual
    ] = useState(0);


    /* =====================================================
       VOLTAR PARA PRIMEIRA IMAGEM AO TROCAR PRODUTO
    ===================================================== */

    useEffect(() => {

        setImagemAtual(0);

    }, [
        produto?.id
    ]);

    useEffect(() => {

        setImagemAtual(0);

    }, [
        produto?.id
    ]);


    /* =====================================================
       PREÇOS
    ===================================================== */

    const precoBase =
        useMemo(
            () => {

                if (!produto) {
                    return 0;
                }


                const ironstore =
                    Number(
                        produto.preco_ironstore
                    );


                if (
                    Number.isFinite(
                        ironstore
                    ) &&
                    ironstore > 0
                ) {

                    return ironstore;

                }


                return (
                    Number(
                        produto.preco
                    ) ||
                    0
                );

            },
            [
                produto
            ]
        );


    const precoPromocao =
        useMemo(
            () => {

                if (
                    produto?.preco_promocao === null ||
                    produto?.preco_promocao === undefined ||
                    String(
                        produto.preco_promocao
                    ).trim() === ""
                ) {

                    return null;

                }


                const valor =
                    Number(
                        String(
                            produto.preco_promocao
                        )
                            .replace(",", ".")
                    );


                if (
                    !Number.isFinite(valor) ||
                    valor <= 0
                ) {

                    return null;

                }


                return valor;

            },
            [
                produto?.preco_promocao
            ]
        );


    const precoAtual =
        precoPromocao ??
        precoBase;


    function moeda(
        valor
    ) {

        return Number(
            valor || 0
        ).toLocaleString(
            "pt-BR",
            {
                style:
                    "currency",

                currency:
                    "BRL"
            }
        );

    }
    /* =====================================================
       TROCAR VARIEDADE
    
       Cada variedade possui seu próprio ID.
       Ao selecionar, atualiza a URL para o ID dela.
    ===================================================== */



    function escolherVariedade(variedade) {
        if (!variedade?.id) {
            return;
        }

        const novoProdutoId = Number(variedade.id);
        const produtoAtualId = Number(produtoId);

        if (
            !Number.isFinite(novoProdutoId) ||
            novoProdutoId <= 0 ||
            novoProdutoId === produtoAtualId
        ) {
            return;
        }

        navigate(`/produtos/${novoProdutoId}`);
    }


    async function salvarQuantidade(
        novaQuantidade
    ) {

        const token =
            localStorage.getItem(
                "ironstore_cliente_token"
            );


        /*
         * Sem login não existe registro
         * associado ao cliente para atualizar.
         */

        if (
            !token ||
            !produto?.id
        ) {
            return;
        }


        const quantidadeFinal =
            Math.max(
                1,
                Math.floor(
                    Number(
                        novaQuantidade
                    ) || 1
                )
            );


        try {

            const dominio =
                pegarDominioAtualProduto();


            const resposta =
                await fetch(
                    `${API_URL}/ironstore/produto/${encodeURIComponent(
                        produto.id
                    )}/quantidade`,
                    {
                        method:
                            "PUT",

                        headers: {

                            "Content-Type":
                                "application/json",

                            "X-IronStore-Key":
                                IRONSTORE_APP_KEY_GERAL,

                            "X-IronStore-Domain":
                                dominio,

                            "Authorization":
                                `Bearer ${token}`
                        },

                        body:
                            JSON.stringify({
                                quantidade:
                                    quantidadeFinal
                            })
                    }
                );


            const resultado =
                await resposta.json();


            if (!resposta.ok) {

                throw new Error(
                    resultado?.detail ||
                    "Não foi possível atualizar a quantidade."
                );

            }


        } catch (erroQuantidade) {

            console.error(
                "[QUANTIDADE]",
                erroQuantidade
            );

        }

    }
    /* =====================================================
       QUANTIDADE
    ===================================================== */

    function diminuirQuantidade() {

        const novaQuantidade =
            Math.max(
                1,
                quantidade - 1
            );

        setQuantidade(
            novaQuantidade
        );

        salvarQuantidade(
            novaQuantidade
        );

    }


    function aumentarQuantidade() {

        const novaQuantidade =
            quantidade + 1;

        setQuantidade(
            novaQuantidade
        );

        salvarQuantidade(
            novaQuantidade
        );

    }


    function alterarQuantidade(
        evento
    ) {

        const numero =
            Number(
                evento.target.value
            );


        if (
            !Number.isFinite(numero)
        ) {
            return;
        }


        const novaQuantidade =
            Math.max(
                1,
                Math.floor(
                    numero
                )
            );


        setQuantidade(
            novaQuantidade
        );

        salvarQuantidade(
            novaQuantidade
        );

    }

    /* =====================================================
       ADICIONAR AO CARRINHO
    ===================================================== */

    async function adicionarCarrinho() {

        const token =
            localStorage.getItem(
                "ironstore_cliente_token"
            );


        if (!token) {

            navigate(
                "/entrar"
            );

            return false;

        }


        if (
            !produtoSelecionadoId ||
            adicionando
        ) {
            return false;
        }


        setAdicionando(true);

        setErro("");


        try {

            const dominio =
                pegarDominioAtualProduto();


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
                                        produtoSelecionadoId
                                    ),

                                quantidade:
                                    quantidade
                            })
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

                return false;

            }


            if (!resposta.ok) {

                throw new Error(
                    resultado?.detail ||
                    "Não foi possível adicionar ao carrinho."
                );

            }


            setAdicionado(true);

            setSeguimentoCarrinhoId(
                resultado?.id ||
                seguimentoCarrinhoId
            );

            return true;

        } catch (erroAdicionar) {

            setErro(
                erroAdicionar?.message ||
                "Não foi possível adicionar ao carrinho."
            );

            return false;

        } finally {

            setAdicionando(false);

        }

    }


    /* =====================================================
       FINALIZAR
    ===================================================== */

    async function finalizarCompra() {

        if (!clienteLogado) {

            navigate(
                "/entrar"
            );

            return;

        }


        if (adicionando) {
            return;
        }


        if (!adicionado) {

            const produtoFoiAdicionado =
                await adicionarCarrinho();


            if (!produtoFoiAdicionado) {
                return;
            }

        }


        navigate(
            "/compras"
        );

    }


    /* =====================================================
       LOADING
    ===================================================== */

    if (
        carregando &&
        !produto
    ) {

        return (
            <>
                <style>
                    {cssModelo}
                </style>

                <section className="ironstore-produto-atual">

                    <div className="ironstore-produto-atual-loading">

                        <span />

                        <p>
                            Carregando produto...
                        </p>

                    </div>

                </section>
            </>
        );

    }


    /* =====================================================
       ERRO
    ===================================================== */

    if (
        erro &&
        !produto
    ) {

        return (
            <>
                <style>
                    {cssModelo}
                </style>

                <section className="ironstore-produto-atual">

                    <div className="ironstore-produto-atual-erro">

                        <strong>
                            Produto indisponível
                        </strong>

                        <p>
                            {erro}
                        </p>

                    </div>

                </section>
            </>
        );

    }


    if (!produto) {
        return null;
    }
    /* =====================================================
       REMOVER DO CARRINHO
    ===================================================== */

    async function removerCarrinho() {

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
            !seguimentoCarrinhoId ||
            removendoCarrinho
        ) {
            return;
        }


        setRemovendoCarrinho(true);

        setErro("");


        try {

            const resposta =
                await fetch(
                    `${API_URL}/ironstore/carrinho/${seguimentoCarrinhoId}`,
                    {
                        method:
                            "DELETE",

                        headers: {

                            "X-IronStore-Key":
                                IRONSTORE_APP_KEY_GERAL,

                            "Authorization":
                                `Bearer ${token}`

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
                    "Não foi possível remover do carrinho."
                );

            }


            setAdicionado(false);

            setSeguimentoCarrinhoId(
                null
            );


            /* =============================================
               ATUALIZAR CACHE DA PÁGINA
            ============================================= */

            const dominio =
                pegarDominioAtualProduto();


            const novosDados = {
                ...dados,

                no_carrinho:
                    false,

                seguimento_carrinho_id:
                    null
            };


            setDados(
                novosDados
            );


            salvarCacheProdutoAtual(
                dominio,
                produtoId,
                novosDados
            );


        } catch (erroRemover) {

            setErro(
                erroRemover?.message ||
                "Não foi possível remover do carrinho."
            );


        } finally {

            setRemovendoCarrinho(
                false
            );

        }

    }

    /* =====================================================
       RENDER
    ===================================================== */

    return (
        <>
            <style>
                {cssModelo}
            </style>

            <section className="ironstore-produto-atual">

                <div className="ironstore-produto-atual-conteudo">


                    {/* =====================================
                        GALERIA
                    ====================================== */}

                    <div className="ironstore-produto-atual-galeria">

                        <div className="ironstore-produto-atual-imagem-principal">

                            {imagensExibicao.length > 0 ? (
                                <img
                                    src={imagensExibicao[imagemAtual]}
                                    alt={
                                        produto.nome
                                    }
                                />

                            ) : (

                                <div className="ironstore-produto-atual-sem-imagem">
                                    Sem imagem
                                </div>

                            )}

                        </div>


                        {imagensExibicao.length > 1 && (
                            <div className="ironstore-produto-atual-miniaturas">

                                {imagensExibicao.map((
                                    imagem,
                                    index
                                ) => (

                                    <button
                                        key={
                                            `${imagem}-${index}`
                                        }
                                        type="button"
                                        className={
                                            imagemAtual === index
                                                ? "ativo"
                                                : ""
                                        }
                                        onClick={
                                            () =>
                                                setImagemAtual(
                                                    index
                                                )
                                        }
                                    >
                                        <img
                                            src={
                                                imagem
                                            }
                                            alt=""
                                        />
                                    </button>

                                )
                                )}

                            </div>

                        )}

                    </div>


                    {/* =====================================
                        INFORMAÇÕES
                    ====================================== */}

                    <div className="ironstore-produto-atual-info">

                        {produto.categoria && (

                            <span className="ironstore-produto-atual-categoria">
                                {produto.categoria}
                            </span>

                        )}


                        <h1>
                            {produto.nome}
                        </h1>





                        {/* =============================
                            PREÇO
                        ============================== */}

                        <div className="ironstore-produto-atual-precos">

                            {precoPromocao !== null && (

                                <span className="ironstore-produto-atual-preco-anterior">
                                    {moeda(
                                        precoBase
                                    )}
                                </span>

                            )}


                            <strong>
                                {moeda(
                                    precoAtual
                                )}
                            </strong>


                            {precoPromocao !== null && (

                                <span className="ironstore-produto-atual-promocao">
                                    Oferta
                                </span>

                            )}

                        </div>


                        {/* =============================
                            VARIEDADES
                        ============================== */}

                        {variedades.length > 0 && (

                            <div className="ironstore-produto-atual-variedades">

                                <span className="ironstore-produto-atual-variedades-titulo">

                                    {produto.variedad_primaria ||
                                        "Opções"}

                                </span>


                                <div className="ironstore-produto-atual-variedades-lista">

                                    {variedades.map(
                                        variedade => {

                                            const ativa =
                                                Number(
                                                    variedade.id
                                                ) ===
                                                Number(
                                                    produto.id
                                                );


                                            return (

                                                <button
                                                    key={
                                                        variedade.id
                                                    }
                                                    type="button"
                                                    className={
                                                        ativa
                                                            ? "ativo"
                                                            : ""
                                                    }
                                                    onClick={
                                                        () =>
                                                            escolherVariedade(
                                                                variedade
                                                            )
                                                    }
                                                >
                                                    {variedade.nome}
                                                </button>

                                            );

                                        }
                                    )}

                                </div>

                            </div>

                        )}


                        {/* =============================
                            OUTRAS INFORMAÇÕES
                        ============================== */}
                        {produto.descricao && (

                            <div className="ironstore-produto-atual-descricao">

                                <span>
                                    Sobre o produto
                                </span>

                                <h2>
                                    Descrição
                                </h2>

                                <p>
                                    {produto.descricao}
                                </p>

                            </div>

                        )}
                        <div className="ironstore-produto-atual-detalhes">

                            {produto.unidade && (

                                <div>
                                    <span>
                                        Unidade
                                    </span>

                                    <strong>
                                        {produto.unidade}
                                    </strong>
                                </div>

                            )}


                            {produto.tempo_servico && (

                                <div>
                                    <span>
                                        Tempo do serviço
                                    </span>

                                    <strong>
                                        {produto.tempo_servico}
                                    </strong>
                                </div>

                            )}



                        </div>


                        {/* =============================
                            QUANTIDADE
                        ============================== */}

                        <div className="ironstore-produto-atual-quantidade-area">

                            <span>
                                Quantidade
                            </span>


                            <div className="ironstore-produto-atual-quantidade">

                                <button
                                    type="button"
                                    onClick={
                                        diminuirQuantidade
                                    }
                                >
                                    −
                                </button>


                                <input
                                    type="number"
                                    min="1"
                                    value={
                                        quantidade
                                    }
                                    onChange={
                                        alterarQuantidade
                                    }
                                />


                                <button
                                    type="button"
                                    onClick={
                                        aumentarQuantidade
                                    }
                                >
                                    +
                                </button>

                            </div>

                        </div>


                        {/* =============================
                            AÇÕES
                        ============================== */}

                        <div className="ironstore-produto-atual-acoes">

                            <button
                                type="button"
                                className={`
        ironstore-compra-btn
        ${adicionado
                                        ? "ironstore-compra-btn--adicionado"
                                        : "ironstore-compra-btn--adicionar"
                                    }
        ${(adicionando || removendoCarrinho)
                                        ? "ironstore-compra-btn--loading"
                                        : ""
                                    }
    `}
                                disabled={
                                    adicionando ||
                                    removendoCarrinho
                                }
                                onClick={
                                    adicionado
                                        ? removerCarrinho
                                        : adicionarCarrinho
                                }
                            >
                                <span
                                    className="ironstore-compra-btn-fundo"
                                    aria-hidden="true"
                                />

                                <span className="ironstore-compra-btn-conteudo">

                                    <span
                                        className="ironstore-compra-btn-icone"
                                        aria-hidden="true"
                                    >
                                        {(adicionando || removendoCarrinho) ? (
                                            <span className="ironstore-compra-btn-spinner" />
                                        ) : adicionado ? (
                                            <span className="ironstore-compra-btn-check">
                                                ✓
                                            </span>
                                        ) : (
                                            <span className="ironstore-compra-btn-carrinho">
                                                <span />
                                            </span>
                                        )}
                                    </span>

                                    <span className="ironstore-compra-btn-textos">

                                        <strong>
                                            {removendoCarrinho
                                                ? "Removendo..."
                                                : adicionando
                                                    ? "Adicionando..."
                                                    : adicionado
                                                        ? "Produto no carrinho"
                                                        : "Adicionar ao carrinho"
                                            }
                                        </strong>

                                        <small>
                                            {removendoCarrinho
                                                ? "Aguarde um instante"
                                                : adicionando
                                                    ? "Salvando seu produto"
                                                    : adicionado
                                                        ? "Clique para remover"
                                                        : "Adicionar e continuar comprando"
                                            }
                                        </small>

                                    </span>

                                    {!adicionando && !removendoCarrinho && (
                                        <span
                                            className="ironstore-compra-btn-seta"
                                            aria-hidden="true"
                                        >
                                            →
                                        </span>
                                    )}

                                </span>
                            </button>

                            <button
                                type="button"
                                className="ironstore-produto-atual-finalizar"
                                onClick={
                                    finalizarCompra
                                }
                            >
                                Finalizar compra
                            </button>

                        </div>


                        {erro && (

                            <div className="ironstore-produto-atual-aviso">
                                {erro}
                            </div>

                        )}

                    </div>

                </div>


                {/* =========================================
                    DESCRIÇÃO
                ========================================== */}



            </section>
        </>
    );

}
