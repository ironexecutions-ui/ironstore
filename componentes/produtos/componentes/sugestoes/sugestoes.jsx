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
    lerCacheCategorias,
    gerarCategoriasProdutos,
    ordenarProdutosPorDestaque
} from "../../../home/body/componentes/categorias/cache";

import classicoSugestoes
    from "../../../../modelos/classico/sugestoes/sugestoes";

import ProdutoCategoria
    from "../../../home/body/componentes/categorias/produtocategorias";
/* =========================================================
   MODELOS
========================================================= */

const MODELOS_SUGESTOES = {

    classico:
        classicoSugestoes

};

export default function Sugestoes() {

    const navigate =
        useNavigate();

    const {
        produtoId
    } = useParams();

    /* =========================================================
       MODELO VISUAL
    ========================================================= */


    /* =========================================================
       CACHE DE CATEGORIAS
    ========================================================= */

    /* =========================================================
       CACHE DE CATEGORIAS
    ========================================================= */

    const [
        dados,
        setDados
    ] = useState(
        () => lerCacheCategorias()
    );


    /* =========================================================
       MODELO VISUAL
    ========================================================= */

    const modelo =
        String(
            dados?.modelo ||
            "classico"
        )
            .trim()
            .toLowerCase();


    const cssModelo =
        MODELOS_SUGESTOES[
        modelo
        ] ||
        MODELOS_SUGESTOES.classico;


    /* =========================================================
       CATEGORIA SELECIONADA
    ========================================================= */

    const [
        categoriaSelecionada,
        setCategoriaSelecionada
    ] = useState("");

    /* =========================================================
       CATEGORIA SELECIONADA
    ========================================================= */


    /* =========================================================
       ATUALIZAR CACHE
    ========================================================= */

    useEffect(() => {

        function atualizarDados() {

            const cache =
                lerCacheCategorias();

            if (cache) {

                setDados(
                    cache
                );

            }

        }


        atualizarDados();


        window.addEventListener(
            "storage",
            atualizarDados
        );


        return () => {

            window.removeEventListener(
                "storage",
                atualizarDados
            );

        };

    }, []);


    /* =========================================================
       PRODUTOS
    ========================================================= */

    const produtos =
        useMemo(
            () => {

                return Array.isArray(
                    dados?.produtos
                )
                    ? dados.produtos
                    : [];

            },
            [
                dados
            ]
        );


    /* =========================================================
       PRODUTO ATUAL

       Pode acontecer de a URL apontar para uma variedade.
       Então procuramos:

       1. pelo próprio id
       2. pelo produto_variedade_id
    ========================================================= */

    const produtoAtual =
        useMemo(
            () => {

                if (
                    !produtoId ||
                    produtos.length === 0
                ) {

                    return null;

                }


                const idAtual =
                    Number(
                        produtoId
                    );


                /* =============================================
                   PRIMEIRO TENTA ID EXATO
                ============================================= */

                const exato =
                    produtos.find(
                        produto =>
                            Number(
                                produto?.id
                            ) ===
                            idAtual
                    );


                if (exato) {

                    return exato;

                }


                /* =============================================
                   DEPOIS TENTA PRODUTO PRINCIPAL
                ============================================= */

                const principal =
                    produtos.find(
                        produto =>
                            Number(
                                produto?.produto_variedade_id
                            ) ===
                            idAtual
                    );


                return principal || null;

            },
            [
                produtoId,
                produtos
            ]
        );


    /* =========================================================
       CATEGORIA DO PRODUTO ATUAL
    ========================================================= */

    const categoriaProdutoAtual =
        produtoAtual?.categoria
            ? String(
                produtoAtual.categoria
            ).trim()
            : "";


    /* =========================================================
       AO ABRIR / TROCAR PRODUTO

       A categoria padrão passa a ser automaticamente
       a categoria do produto atual.
    ========================================================= */

    useEffect(() => {

        if (
            categoriaProdutoAtual
        ) {

            setCategoriaSelecionada(
                categoriaProdutoAtual
            );

        } else {

            setCategoriaSelecionada(
                "Todas"
            );

        }




    }, [
        produtoId,
        categoriaProdutoAtual
    ]);


    /* =========================================================
       CATEGORIAS DISPONÍVEIS
    ========================================================= */

    const categorias =
        useMemo(
            () => {

                return gerarCategoriasProdutos(
                    produtos
                );

            },
            [
                produtos
            ]
        );


    /* =========================================================
       ORDENAR PRODUTOS
    ========================================================= */

    const produtosOrdenados =
        useMemo(
            () => {

                return ordenarProdutosPorDestaque(
                    produtos
                );

            },
            [
                produtos
            ]
        );


    /* =========================================================
       ID PRINCIPAL DO PRODUTO ATUAL
    ========================================================= */

    const produtoAtualPrincipalId =
        useMemo(
            () => {

                if (!produtoAtual) {

                    return Number(
                        produtoId
                    );

                }


                const variedadeId =
                    Number(
                        produtoAtual?.produto_variedade_id ??
                        0
                    );


                if (
                    variedadeId > 0
                ) {

                    return variedadeId;

                }


                return Number(
                    produtoAtual?.id
                );

            },
            [
                produtoAtual,
                produtoId
            ]
        );


    /* =========================================================
       PRODUTOS FILTRADOS

       Remove o produto que já está aberto.
    ========================================================= */

    const produtosFiltrados =
        useMemo(
            () => {

                let lista =
                    produtosOrdenados.filter(
                        produto => {

                            const variedadeId =
                                Number(
                                    produto?.produto_variedade_id ??
                                    0
                                );


                            const principalId =
                                variedadeId > 0
                                    ? variedadeId
                                    : Number(
                                        produto?.id
                                    );


                            return (
                                principalId !==
                                Number(
                                    produtoAtualPrincipalId
                                )
                            );

                        }
                    );


                /* =============================================
                   TODAS
                ============================================= */

                if (
                    categoriaSelecionada ===
                    "Todas"
                ) {

                    return lista;

                }


                /* =============================================
                   CATEGORIA SELECIONADA
                ============================================= */

                return lista.filter(
                    produto =>
                        String(
                            produto?.categoria || ""
                        ).trim() ===
                        String(
                            categoriaSelecionada || ""
                        ).trim()
                );

            },
            [
                produtosOrdenados,
                categoriaSelecionada,
                produtoAtualPrincipalId
            ]
        );


    /* =========================================================
       ABRIR PRODUTO
    ========================================================= */

    function abrirProduto(
        produto
    ) {

        if (!produto) {

            return;

        }


        const produtoVariedadeId =
            Number(
                produto?.produto_variedade_id ??
                0
            );


        const produtoPrincipalId =
            produtoVariedadeId > 0
                ? produtoVariedadeId
                : produto.id;


        if (!produtoPrincipalId) {

            return;

        }


        navigate(
            `/produtos/${produtoPrincipalId}`
        );


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* =========================================================
       SEM DADOS
    ========================================================= */

    if (
        !dados ||
        produtos.length === 0
    ) {

        return null;

    }


    /* =========================================================
       RENDER
    ========================================================= */
    return (
        <>
            <style>
                {cssModelo}
            </style>

            <section
                className="ironstore-explorar-produtos-v1"
            >
                <div
                    className="ironstore-explorar-produtos-v1-container"
                >

                    {/* =====================================================
                    CABEÇALHO
                ====================================================== */}

                    <header
                        className="ironstore-explorar-produtos-v1-header"
                    >
                        <div
                            className="ironstore-explorar-produtos-v1-header-conteudo"
                        >
                            <div
                                className="ironstore-explorar-produtos-v1-identificacao"
                            >
                                <span
                                    className="ironstore-explorar-produtos-v1-linha"
                                    aria-hidden="true"
                                />

                                <span
                                    className="ironstore-explorar-produtos-v1-label"
                                >
                                    Continue explorando
                                </span>
                            </div>

                            <h2
                                className="ironstore-explorar-produtos-v1-titulo"
                            >
                                Sugestões para você
                            </h2>

                            <p
                                className="ironstore-explorar-produtos-v1-descricao"
                            >
                                Descubra outros produtos que podem
                                combinar com o que você procura.
                            </p>
                        </div>

                        <div
                            className="ironstore-explorar-produtos-v1-contador"
                        >
                            <strong>
                                {produtosFiltrados.length}
                            </strong>

                            <span>
                                {produtosFiltrados.length === 1
                                    ? "produto"
                                    : "produtos"
                                }
                            </span>
                        </div>
                    </header>


                    {/* =====================================================
                    NAVEGAÇÃO POR CATEGORIAS
                ====================================================== */}

                    <nav
                        className="ironstore-explorar-produtos-v1-filtros"
                        aria-label="Categorias de produtos"
                    >
                        <div
                            className="ironstore-explorar-produtos-v1-filtros-scroll"
                        >
                            {categorias.map(
                                categoria => {

                                    const selecionada =
                                        categoriaSelecionada ===
                                        categoria;

                                    return (
                                        <button
                                            type="button"
                                            key={categoria}
                                            className={`
                                            ironstore-explorar-produtos-v1-filtro
                                            ${selecionada
                                                    ? "ironstore-explorar-produtos-v1-filtro-ativo"
                                                    : ""
                                                }
                                        `}
                                            aria-pressed={
                                                selecionada
                                            }
                                            onClick={
                                                () =>
                                                    setCategoriaSelecionada(
                                                        categoria
                                                    )
                                            }
                                        >
                                            <span
                                                className="ironstore-explorar-produtos-v1-filtro-texto"
                                            >
                                                {categoria}
                                            </span>

                                            {selecionada && (
                                                <span
                                                    className="ironstore-explorar-produtos-v1-filtro-indicador"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </button>
                                    );
                                }
                            )}
                        </div>
                    </nav>


                    {/* =====================================================
                    DIVISOR
                ====================================================== */}

                    <div
                        className="ironstore-explorar-produtos-v1-divisor"
                        aria-hidden="true"
                    />


                    {/* =====================================================
                    PRODUTOS
                ====================================================== */}

                    <div
                        className="ironstore-explorar-produtos-v1-area"
                    >
                        {produtosFiltrados.length > 0 ? (

                            <div
                                className="ironstore-explorar-produtos-v1-grid"
                            >
                                {produtosFiltrados.map(
                                    produto => (

                                        <div
                                            className="ironstore-explorar-produtos-v1-item"
                                            key={produto.id}
                                        >
                                            <ProdutoCategoria
                                                produto={
                                                    produto
                                                }

                                                onAbrir={
                                                    produtoSelecionado =>
                                                        abrirProduto(
                                                            produtoSelecionado
                                                        )
                                                }

                                                clienteLogado={
                                                    false
                                                }

                                                produtosCarrinho={
                                                    new Set()
                                                }

                                                onAdicionarCarrinho={
                                                    () => { }
                                                }
                                            />
                                        </div>

                                    )
                                )}
                            </div>

                        ) : (

                            <div
                                className="ironstore-explorar-produtos-v1-vazio"
                            >
                                <div
                                    className="ironstore-explorar-produtos-v1-vazio-icone"
                                    aria-hidden="true"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M4 7.5L12 3L20 7.5V16.5L12 21L4 16.5V7.5Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinejoin="round"
                                        />

                                        <path
                                            d="M4.5 7.5L12 12L19.5 7.5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinejoin="round"
                                        />

                                        <path
                                            d="M12 12V20.5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </div>

                                <div
                                    className="ironstore-explorar-produtos-v1-vazio-conteudo"
                                >
                                    <strong
                                        className="ironstore-explorar-produtos-v1-vazio-titulo"
                                    >
                                        Nenhum outro produto
                                        nesta categoria
                                    </strong>

                                    <p
                                        className="ironstore-explorar-produtos-v1-vazio-texto"
                                    >
                                        Escolha outra categoria
                                        para continuar explorando.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    className="ironstore-explorar-produtos-v1-vazio-botao"
                                    onClick={
                                        () =>
                                            setCategoriaSelecionada(
                                                "Todas"
                                            )
                                    }
                                >
                                    Ver todos

                                    <span
                                        aria-hidden="true"
                                    >
                                        →
                                    </span>
                                </button>
                            </div>

                        )}
                    </div>

                </div>
            </section>
        </>
    );

}