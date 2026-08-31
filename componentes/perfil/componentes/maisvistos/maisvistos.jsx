import React, {
    useEffect,
    useState
} from "react";

import {
    useNavigate
} from "react-router-dom";

import {
    API_URL
} from "../../../../config";

import ProdutoCategoria
    from "../../../home/body/componentes/categorias/produtocategorias";
import classicoMaisVistos
    from "../../../../modelos/classico/maisvistos/maisvistos";
import {
    carregarCacheMaisVistos,
    sincronizarCacheMaisVistos,
    limparCacheMaisVistos
} from "./cache";

// =========================================================
// MODELOS DO MAIS VISTOS
// =========================================================

const modelosMaisVistos = {

    classico:
        classicoMaisVistos,

};

// =========================================================
// DOMÍNIO
// =========================================================

function pegarDominioAtual() {

    return window.location.origin
        .trim()
        .toLowerCase()
        .replace(/\/+$/, "");

}


// =========================================================
// MAIS VISTOS
// =========================================================

export default function MaisVistos() {

    const navigate = useNavigate();


    // =====================================================
    // ESTADOS
    // =====================================================

    const [
        produtos,
        setProdutos
    ] = useState([]);


    const [
        produtosCarrinho,
        setProdutosCarrinho
    ] = useState(
        new Set()
    );


    const [
        carregando,
        setCarregando
    ] = useState(true);


    const [
        erro,
        setErro
    ] = useState("");


    // =====================================================
    // AUTENTICAÇÃO
    // =====================================================

    const token =
        localStorage.getItem(
            "ironstore_cliente_token"
        );


    const clienteLogado =
        Boolean(token);


    const chaveGeral =
        import.meta.env
            .VITE_IRONSTORE_APP_KEY_GERAL;

    const [
        modelo,
        setModelo
    ] = useState(
        "classico"
    );
    // =====================================================
    // CARREGAR DADOS
    // =====================================================

    useEffect(() => {

        let ativo = true;


        // =====================================================
        // APLICAR CACHE NO JSX
        // =====================================================

        function aplicarCache(
            dados
        ) {

            if (
                !ativo ||
                !dados
            ) {
                return;
            }


            setProdutos(
                Array.isArray(
                    dados?.produtos
                )
                    ? dados.produtos
                    : []
            );


            setModelo(
                String(
                    dados?.modelo ||
                    "classico"
                )
                    .trim()
                    .toLowerCase()
            );

        }


        // =====================================================
        // CARREGAR
        // =====================================================

        async function carregar() {

            if (!token) {

                if (ativo) {

                    setProdutos([]);

                    setProdutosCarrinho(
                        new Set()
                    );

                    setCarregando(
                        false
                    );

                }

                return;

            }


            const dominio =
                pegarDominioAtual();


            // =================================================
            // 1. CACHE -> JSX
            // =================================================

            const cacheInicial =
                carregarCacheMaisVistos();


            if (cacheInicial) {

                aplicarCache(
                    cacheInicial
                );

                /*
                 * Já existe cache.
                 * Mostra imediatamente.
                 */

                setCarregando(
                    false
                );

            } else {

                /*
                 * Primeiro acesso.
                 * Não temos nada para mostrar ainda.
                 */

                setCarregando(
                    true
                );

            }


            setErro("");


            try {

                // =================================================
                // 2. SERVIDOR
                // =================================================

                const respostaMaisVistos =
                    await fetch(
                        `${API_URL}/ironstore/me/mais-vistos`,
                        {
                            method:
                                "GET",

                            headers: {

                                "X-IronStore-Key":
                                    chaveGeral,

                                "X-IronStore-Domain":
                                    dominio,

                                "Authorization":
                                    `Bearer ${token}`

                            }

                        }
                    );


                // =================================================
                // TOKEN INVÁLIDO
                // =================================================

                if (
                    respostaMaisVistos.status === 401
                ) {

                    limparCacheMaisVistos();


                    localStorage.removeItem(
                        "ironstore_cliente_token"
                    );

                    localStorage.removeItem(
                        "ironstore_cliente"
                    );


                    navigate(
                        "/entrar",
                        {
                            replace: true
                        }
                    );

                    return;

                }


                let dadosServidor =
                    null;


                try {

                    dadosServidor =
                        await respostaMaisVistos.json();

                } catch {

                    dadosServidor =
                        null;

                }


                if (
                    !respostaMaisVistos.ok
                ) {

                    throw new Error(
                        dadosServidor?.detail ||
                        "Não foi possível carregar os produtos mais vistos."
                    );

                }


                if (!ativo) {
                    return;
                }


                // =================================================
                // 3. SERVIDOR -> CACHE
                //
                // NÃO JOGAMOS dadosServidor DIRETO NO JSX.
                // =================================================

                const sincronizacao =
                    sincronizarCacheMaisVistos(
                        dadosServidor
                    );


                // =================================================
                // 4. CACHE MUDOU
                //
                // LER NOVAMENTE O CACHE -> JSX
                // =================================================

                if (
                    sincronizacao.mudou
                ) {

                    const cacheAtualizado =
                        carregarCacheMaisVistos();


                    aplicarCache(
                        cacheAtualizado
                    );

                }


                // =================================================
                // 5. PRIMEIRO ACESSO
                //
                // Garantia de leitura do cache criado.
                // =================================================

                if (
                    !cacheInicial &&
                    !sincronizacao.mudou
                ) {

                    const cacheCriado =
                        carregarCacheMaisVistos();


                    aplicarCache(
                        cacheCriado
                    );

                }


                // =================================================
                // 6. VERIFICAR CARRINHO
                // =================================================

                try {

                    const respostaCarrinho =
                        await fetch(
                            `${API_URL}/ironstore/carrinho/verificar?dominio=${encodeURIComponent(
                                dominio
                            )}`,
                            {
                                method:
                                    "GET",

                                headers: {

                                    "X-IronStore-Key":
                                        chaveGeral,

                                    "Authorization":
                                        `Bearer ${token}`

                                }

                            }
                        );


                    if (
                        respostaCarrinho.ok
                    ) {

                        const dadosCarrinho =
                            await respostaCarrinho.json();


                        if (ativo) {

                            setProdutosCarrinho(
                                new Set(
                                    (
                                        dadosCarrinho
                                            ?.produtos_ids ||
                                        []
                                    ).map(
                                        id =>
                                            String(id)
                                    )
                                )
                            );

                        }

                    }

                } catch (
                erroCarrinho
                ) {

                    console.error(
                        "Erro ao verificar carrinho:",
                        erroCarrinho
                    );

                }


            } catch (
            error
            ) {

                console.error(
                    "[IRONSTORE MAIS VISTOS]",
                    error
                );


                if (!ativo) {
                    return;
                }


                // =================================================
                // SE EXISTE CACHE, MANTÉM O SITE FUNCIONANDO
                // =================================================

                const cacheDisponivel =
                    carregarCacheMaisVistos();


                if (!cacheDisponivel) {

                    setErro(
                        error?.message ||
                        "Erro ao carregar produtos."
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

            ativo = false;

        };


    }, [
        token,
        chaveGeral,
        navigate
    ]);


    // =====================================================
    // ABRIR PRODUTO
    // =====================================================

    function abrirProduto(
        produto
    ) {

        const produtoVariedadeId =
            Number(
                produto
                    ?.produto_variedade_id ??
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


    // =====================================================
    // ADICIONAR AO CARRINHO
    // =====================================================

    async function adicionarAoCarrinho(
        produto
    ) {

        if (!produto?.id) {
            return;
        }


        if (!token) {

            navigate(
                "/entrar"
            );

            return;

        }


        const produtoId =
            Number(
                produto.id
            );


        if (!produtoId) {
            return;
        }


        // =============================================
        // JÁ ESTÁ NO CARRINHO
        // =============================================

        if (
            produtosCarrinho.has(
                String(
                    produtoId
                )
            )
        ) {

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
                                chaveGeral,

                            "Authorization":
                                `Bearer ${token}`

                        },

                        body: JSON.stringify({

                            dominio:
                                dominio,

                            produto_id:
                                produtoId

                        })

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

                navigate(
                    "/entrar",
                    {
                        replace: true
                    }
                );

                return;

            }


            if (!resposta.ok) {

                let mensagem =
                    "Não foi possível adicionar ao carrinho.";


                try {

                    const dadosErro =
                        await resposta.json();


                    mensagem =
                        dadosErro?.detail ||
                        mensagem;

                } catch {

                    // mantém mensagem

                }


                throw new Error(
                    mensagem
                );

            }


            const dados =
                await resposta.json();


            // =============================================
            // ATUALIZAR CARRINHO LOCALMENTE
            // =============================================

            if (
                dados?.adicionado ||
                dados?.ja_estava_carrinho
            ) {

                setProdutosCarrinho(
                    anteriores => {

                        const novo =
                            new Set(
                                anteriores
                            );


                        novo.add(
                            String(
                                produtoId
                            )
                        );


                        return novo;

                    }
                );

            }


        } catch (
        error
        ) {

            console.error(
                "Erro ao adicionar ao carrinho:",
                error
            );

        }

    }


    // =========================================================
    // MODELO VISUAL DO MAIS VISTOS
    // =========================================================

    const estilo =
        modelosMaisVistos[
        String(
            modelo ||
            "classico"
        )
            .trim()
            .toLowerCase()
        ] ||
        modelosMaisVistos.classico;


    // =====================================================
    // CARREGANDO
    // =====================================================

    if (carregando) {

        return (

            <>

                <style>
                    {estilo}
                </style>

                <section
                    className="ironstore-mais-vistos-loading"
                >

                    <div
                        className="ironstore-mais-vistos-loading-conteudo"
                    >

                        <div
                            className="ironstore-mais-vistos-loading-spinner"
                            aria-hidden="true"
                        >
                            <span />
                        </div>


                        <div
                            className="ironstore-mais-vistos-loading-textos"
                        >

                            <h2
                                className="ironstore-mais-vistos-loading-titulo"
                            >
                                Mais vistos
                            </h2>

                            <p
                                className="ironstore-mais-vistos-loading-descricao"
                            >
                                Carregando produtos...
                            </p>

                        </div>

                    </div>

                </section>

            </>

        );

    }


    // =====================================================
    // ERRO
    // =====================================================

    if (erro) {

        return (

            <>

                <style>
                    {estilo}
                </style>

                <section
                    className="ironstore-perfil-mais-vistos-area"
                >

                    <div
                        className="ironstore-perfil-mais-vistos-cabecalho"
                    >

                        <h2>
                            Mais vistos
                        </h2>

                        <p>
                            {erro}
                        </p>

                    </div>

                </section>

            </>

        );

    }


    // =====================================================
    // VAZIO
    // =====================================================

    if (
        produtos.length === 0
    ) {

        return (

            <>

                <style>
                    {estilo}
                </style>

                <section
                    className="ironstore-perfil-mais-vistos-area"
                >

                    <div
                        className="ironstore-perfil-mais-vistos-cabecalho"
                    >

                        <h2>
                            Mais vistos
                        </h2>

                        <p>
                            Os produtos que você visualizar
                            aparecerão aqui.
                        </p>

                    </div>

                </section>

            </>

        );

    }

    // =====================================================
    // PRODUTOS
    // =====================================================

    return (
        <>

            <style>
                {estilo}
            </style>

            <section
                className="ironstore-perfil-mais-vistos-area"
            >

                <div
                    className="ironstore-perfil-mais-vistos-cabecalho"
                >

                    <div>

                        <h2>
                            Mais vistos
                        </h2>

                        <p>
                            Produtos que mais chamaram
                            sua atenção.
                        </p>

                    </div>


                    <span
                        className="ironstore-perfil-mais-vistos-total"
                    >

                        {produtos.length}

                        {" "}

                        {produtos.length === 1
                            ? "produto"
                            : "produtos"
                        }

                    </span>

                </div>


                <div
                    className="ironstore-perfil-mais-vistos-conteudo"
                >

                    <div
                        className="ironstore-categorias-classico-grid"
                    >

                        {produtos.map(
                            produto => (

                                <ProdutoCategoria
                                    key={
                                        produto.id
                                    }

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

                            )
                        )}

                    </div>

                </div>

            </section>
        </>
    );

}