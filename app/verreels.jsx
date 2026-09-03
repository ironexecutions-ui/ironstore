import React, {
    useEffect,
    useMemo,
    useState
} from "react";

import {
    useLocation,
    useNavigate
} from "react-router-dom";

import {
    lerCacheCategorias
} from "../componentes/home/body/componentes/categorias/cache";

import "./verreels.css";


/* =========================================================
   CONFIGURAÇÃO
========================================================= */

const CACHE_PREFIX =
    "ironstore_ver_reels_fechado";

const TEMPO_REEL =
    8000;

const TEMPO_ANIMACAO =
    700;


/* =========================================================
   DOMÍNIO
========================================================= */

function pegarDominioAtual() {

    return window.location.origin
        .trim()
        .toLowerCase()
        .replace(/\/+$/, "");

}


/* =========================================================
   CHAVE DO CACHE
========================================================= */

function gerarChaveCache() {

    return `${CACHE_PREFIX}:${pegarDominioAtual()}`;

}


/* =========================================================
   VERIFICAR SE FOI FECHADO
========================================================= */

function foiFechado() {

    try {

        return (
            localStorage.getItem(
                gerarChaveCache()
            ) === "1"
        );

    } catch {

        return false;

    }

}


/* =========================================================
   SALVAR FECHAMENTO
========================================================= */

function salvarFechado() {

    try {

        localStorage.setItem(
            gerarChaveCache(),
            "1"
        );

    } catch (
    erro
    ) {

        console.error(
            "[VER REELS CACHE]",
            erro
        );

    }

}


/* =========================================================
   LIBERAR NOVAMENTE
========================================================= */

function liberarNovamente() {

    try {

        localStorage.removeItem(
            gerarChaveCache()
        );

    } catch (
    erro
    ) {

        console.error(
            "[VER REELS CACHE]",
            erro
        );

    }

}


/* =========================================================
   PEGAR IMAGENS
========================================================= */

function pegarImagens(
    produto
) {

    if (
        !produto?.imagem_url
    ) {

        return [];

    }

    return String(
        produto.imagem_url
    )
        .split("|")
        .map(
            imagem =>
                imagem.trim()
        )
        .filter(Boolean);

}


/* =========================================================
   VERIFICAR PRODUTO PRINCIPAL
========================================================= */

function produtoEhPrincipal(
    produto
) {

    const variedadeId =
        produto?.produto_variedade_id;

    return (
        variedadeId === null ||
        variedadeId === undefined ||
        variedadeId === "" ||
        variedadeId === 0 ||
        variedadeId === "0"
    );

}


/* =========================================================
   PEGAR TODOS OS PRODUTOS DOS MINI REELS
========================================================= */

function pegarProdutosReels() {

    try {

        const cache =
            lerCacheCategorias();

        const produtos =
            Array.isArray(
                cache?.produtos
            )
                ? cache.produtos
                : [];

        if (
            !produtos.length
        ) {

            return [];

        }


        /* =================================================
           PRIMEIRA TENTATIVA

           PRODUTOS PRINCIPAIS COM 3 OU MAIS IMAGENS
        ================================================= */

        const ids =
            new Set();

        const produtosIdeais =
            produtos.filter(
                produto => {

                    if (
                        !produto?.id ||
                        !produtoEhPrincipal(
                            produto
                        )
                    ) {

                        return false;

                    }

                    const imagens =
                        pegarImagens(
                            produto
                        );

                    if (
                        imagens.length < 3
                    ) {

                        return false;

                    }

                    const id =
                        String(
                            produto.id
                        );

                    if (
                        ids.has(
                            id
                        )
                    ) {

                        return false;

                    }

                    ids.add(
                        id
                    );

                    return true;

                }
            );


        if (
            produtosIdeais.length
        ) {

            return produtosIdeais;

        }


        /* =================================================
           FALLBACK

           SE NÃO TIVER PRODUTO COM 3 IMAGENS,
           ACEITA PRODUTO PRINCIPAL COM PELO MENOS 1.
        ================================================= */

        const idsFallback =
            new Set();

        return produtos.filter(
            produto => {

                if (
                    !produto?.id ||
                    !produtoEhPrincipal(
                        produto
                    )
                ) {

                    return false;

                }

                if (
                    !pegarImagens(
                        produto
                    ).length
                ) {

                    return false;

                }

                const id =
                    String(
                        produto.id
                    );

                if (
                    idsFallback.has(
                        id
                    )
                ) {

                    return false;

                }

                idsFallback.add(
                    id
                );

                return true;

            }
        );

    } catch (
    erro
    ) {

        console.error(
            "[VER REELS PRODUTOS]",
            erro
        );

        return [];

    }

}

/* =========================================================
   COLOCAR PRODUTO DA URL PRIMEIRO

   Exemplo:

   URL:
   /produtos/25

   Antes:
   [8, 14, 25, 30]

   Depois:
   [25, 8, 14, 30]
========================================================= */

function colocarProdutoPrimeiro(
    lista,
    produtoId
) {

    if (
        !Array.isArray(lista) ||
        !lista.length ||
        !produtoId
    ) {

        return lista || [];
    }


    const idProcurado =
        String(
            produtoId
        );


    const indice =
        lista.findIndex(
            item =>
                String(
                    item?.id
                ) === idProcurado
        );


    /* =====================================================
       PRODUTO NÃO ESTÁ NA LISTA DE REELS
    ===================================================== */

    if (indice < 0) {

        return lista;
    }


    /* =====================================================
       JÁ É O PRIMEIRO
    ===================================================== */

    if (indice === 0) {

        return lista;
    }


    /* =====================================================
       RETIRAR DA POSIÇÃO ORIGINAL
    ===================================================== */

    const produtoSelecionado =
        lista[indice];


    const restantes =
        lista.filter(
            (
                item,
                indiceItem
            ) =>
                indiceItem !== indice
        );


    /* =====================================================
       COLOCAR PRIMEIRO
    ===================================================== */

    return [
        produtoSelecionado,
        ...restantes
    ];
}
/* =========================================================
   PREÇO
========================================================= */

function moeda(
    valor
) {

    const numero =
        Number(
            valor || 0
        );

    if (
        !Number.isFinite(
            numero
        )
    ) {

        return "";

    }

    return numero.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


/* =========================================================
   COMPONENTE
========================================================= */

export default function VerReels() {

    const navigate =
        useNavigate();

    const location =
        useLocation();


    /* =====================================================
       ESTÁ NA PÁGINA DE REELS
    ===================================================== */

    const estaNosReels =
        location.pathname.startsWith(
            "/reels/"
        );
    /* =====================================================
       VER REELS SÓ PODE APARECER EM /produtos/:id
    ===================================================== */

    /* =====================================================
       ROTAS ONDE O MINI REELS PODE APARECER
    ===================================================== */

    const estaEmPaginaProduto =
        /^\/produtos\/[^/]+\/?$/.test(
            location.pathname
        );


    const estaEmPath =
        /^\/path\/?$/.test(
            location.pathname
        );


    const podeExibirMiniReels =
        estaEmPaginaProduto ||
        estaEmPath;
    /* =====================================================
   ID DO PRODUTO PRESENTE NA URL

   /produtos/25 -> "25"
   /path        -> null
===================================================== */

    const produtoIdDaUrl =
        useMemo(
            () => {

                const resultado =
                    location.pathname.match(
                        /^\/produtos\/([^/]+)\/?$/
                    );


                if (!resultado?.[1]) {
                    return null;
                }


                return decodeURIComponent(
                    resultado[1]
                );

            },
            [
                location.pathname
            ]
        );
    /* =====================================================
       FECHAMENTO
    ===================================================== */

    const [
        fechado,
        setFechado
    ] = useState(
        () => foiFechado()
    );

    const [
        produtos,
        setProdutos
    ] = useState(
        () => {

            const lista =
                pegarProdutosReels();


            return colocarProdutoPrimeiro(
                lista,
                produtoIdDaUrl
            );
        }
    );


    const [
        indiceAtual,
        setIndiceAtual
    ] = useState(0);


    /* =====================================================
       ANIMAÇÃO
    ===================================================== */

    const [
        animando,
        setAnimando
    ] = useState(false);


    /* =====================================================
       ENTRANDO NOS REELS
    ===================================================== */

    const [
        entrando,
        setEntrando
    ] = useState(false);


    /* =====================================================
       PRODUTO ATUAL
    ===================================================== */

    const produto =
        produtos[
        indiceAtual
        ] || null;


    /* =====================================================
       PRÓXIMO ÍNDICE
    ===================================================== */

    const proximoIndice =
        produtos.length > 1
            ? (
                indiceAtual + 1
            ) % produtos.length
            : indiceAtual;


    /* =====================================================
       PRÓXIMO PRODUTO
    ===================================================== */

    const proximoProduto =
        produtos[
        proximoIndice
        ] || null;


    /* =====================================================
       LIBERAR CLIQUE AO MUDAR DE ROTA
    ===================================================== */

    useEffect(() => {

        setEntrando(
            false
        );

    }, [
        location.pathname
    ]);


    /* =====================================================
       ATUALIZAR PRODUTOS 1 SEGUNDO DEPOIS

       ISSO DÁ TEMPO PARA O CACHE DAS CATEGORIAS
       SER CARREGADO.
    ===================================================== */

    useEffect(() => {

        if (
            estaNosReels
        ) {

            return;
        }


        const timer =
            setTimeout(
                () => {

                    const listaAtualizada =
                        pegarProdutosReels();


                    if (
                        listaAtualizada.length
                    ) {

                        /* =========================================
                           SE ESTIVER EM /produtos/:id
    
                           COLOCA O PRODUTO DA URL PRIMEIRO
                        ========================================= */

                        const atualizados =
                            colocarProdutoPrimeiro(
                                listaAtualizada,
                                produtoIdDaUrl
                            );


                        setAnimando(
                            false
                        );


                        setProdutos(
                            atualizados
                        );


                        /* =========================================
                           SEMPRE COMEÇA PELO PRIMEIRO.
    
                           Como o produto da URL foi colocado
                           na posição 0, ele será exibido primeiro.
                        ========================================= */

                        setIndiceAtual(
                            0
                        );
                    }


                    setFechado(
                        foiFechado()
                    );

                },
                1000
            );


        return () => {

            clearTimeout(
                timer
            );

        };


    }, [
        location.pathname,
        estaNosReels,
        produtoIdDaUrl
    ]);


    /* =====================================================
       AO ENTRAR NOS REELS

       LIBERA NOVAMENTE O MINI REELS PARA QUANDO
       SAIR DA PÁGINA.
    ===================================================== */

    useEffect(() => {

        if (
            !estaNosReels
        ) {

            return;

        }

        liberarNovamente();

        setFechado(
            false
        );

        setAnimando(
            false
        );

    }, [
        estaNosReels
    ]);


    /* =====================================================
       TROCA AUTOMÁTICA DOS MINI REELS
    
       REGRAS:
    
       1. Produto inicial fica 8 segundos completos.
       2. Depois sobe.
       3. Aguarda a animação terminar.
       4. Próximo produto fica mais 8 segundos.
       5. Repete o processo.
    
       NÃO usamos setInterval porque ele continua contando
       enquanto a animação acontece.
    ===================================================== */

    useEffect(() => {

        if (
            estaNosReels ||
            fechado ||
            produtos.length <= 1
        ) {

            return;
        }


        let timeoutEspera =
            null;


        let timeoutAnimacao =
            null;


        let cancelado =
            false;


        /* =================================================
           PROGRAMAR PRÓXIMA TROCA
    
           Sempre espera TEMPO_REEL completo antes
           de começar qualquer movimento.
        ================================================= */

        const programarProximaTroca = () => {

            timeoutEspera =
                setTimeout(
                    () => {

                        if (cancelado) {
                            return;
                        }


                        /* =====================================
                           COMEÇAR SUBIDA
                        ===================================== */

                        setAnimando(
                            true
                        );


                        /* =====================================
                           AGUARDAR ANIMAÇÃO TERMINAR
                        ===================================== */

                        timeoutAnimacao =
                            setTimeout(
                                () => {

                                    if (cancelado) {
                                        return;
                                    }


                                    /* =============================
                                       AVANÇAR PRODUTO
                                    ============================= */

                                    setIndiceAtual(
                                        indiceAnterior => {

                                            return (
                                                indiceAnterior + 1
                                            ) % produtos.length;
                                        }
                                    );


                                    /* =============================
                                       RESETAR TRILHO SEM ANIMAÇÃO
                                    ============================= */

                                    requestAnimationFrame(
                                        () => {

                                            requestAnimationFrame(
                                                () => {

                                                    if (cancelado) {
                                                        return;
                                                    }


                                                    setAnimando(
                                                        false
                                                    );


                                                    /* =================
                                                       SOMENTE AGORA
                                                       COMEÇA A CONTAR
                                                       OS PRÓXIMOS
                                                       8 SEGUNDOS
                                                    ================= */

                                                    programarProximaTroca();

                                                }
                                            );

                                        }
                                    );

                                },
                                TEMPO_ANIMACAO
                            );

                    },
                    TEMPO_REEL
                );
        };


        /* =================================================
           PRIMEIRA CONTAGEM
    
           Começa do zero quando o produto inicial aparece.
        ================================================= */

        programarProximaTroca();


        /* =================================================
           LIMPEZA
        ================================================= */

        return () => {

            cancelado =
                true;


            if (timeoutEspera) {

                clearTimeout(
                    timeoutEspera
                );
            }


            if (timeoutAnimacao) {

                clearTimeout(
                    timeoutAnimacao
                );
            }
        };


    }, [
        estaNosReels,
        fechado,
        produtos.length,
        location.pathname
    ]);
    /* =====================================================
       ESCUTAR ALTERAÇÕES DO STORAGE
    ===================================================== */

    useEffect(() => {

        function atualizarStorage(
            evento
        ) {

            if (
                evento.key !==
                gerarChaveCache()
            ) {

                return;

            }

            setFechado(
                evento.newValue === "1"
            );

        }


        window.addEventListener(
            "storage",
            atualizarStorage
        );


        return () => {

            window.removeEventListener(
                "storage",
                atualizarStorage
            );

        };

    }, []);


    /* =====================================================
       IMAGEM ATUAL
    ===================================================== */

    const imagemPrincipal =
        useMemo(
            () => {

                const imagens =
                    pegarImagens(
                        produto
                    );

                return (
                    imagens[0] ||
                    ""
                );

            },
            [
                produto
            ]
        );


    /* =====================================================
       PRÓXIMA IMAGEM
    ===================================================== */

    const proximaImagem =
        useMemo(
            () => {

                const imagens =
                    pegarImagens(
                        proximoProduto
                    );

                return (
                    imagens[0] ||
                    ""
                );

            },
            [
                proximoProduto
            ]
        );


    /* =====================================================
       PREÇO ATUAL
    ===================================================== */

    const preco =
        produto?.preco_promocao ||
        produto?.preco_ironstore ||
        produto?.preco;


    /* =====================================================
       PRÓXIMO PREÇO
    ===================================================== */

    const proximoPreco =
        proximoProduto?.preco_promocao ||
        proximoProduto?.preco_ironstore ||
        proximoProduto?.preco;


    /* =====================================================
       FECHAR
    ===================================================== */

    function fechar(
        evento
    ) {

        evento.stopPropagation();

        salvarFechado();

        setFechado(
            true
        );

    }


    /* =====================================================
       ABRIR REELS
    ===================================================== */

    function abrirReels() {

        if (
            !produto?.id ||
            entrando ||
            animando
        ) {

            return;

        }

        setEntrando(
            true
        );

        liberarNovamente();

        navigate(
            `/reels/${produto.id}`
        );

    }


    /* =====================================================
       CONTEÚDO DO SLIDE
    ===================================================== */

    function renderizarProduto(
        item,
        imagem,
        valor
    ) {

        if (
            !item?.id ||
            !imagem
        ) {

            return null;

        }

        return (

            <span
                className="
                    ironstore-ver-reels-slide-conteudo
                "
            >

                {/* =========================================
                    IMAGEM
                ========================================= */}

                <img
                    src={
                        imagem
                    }
                    alt={
                        item.nome ||
                        "Produto"
                    }
                    className="
                        ironstore-ver-reels-imagem
                    "
                />


                {/* =========================================
                    OVERLAY
                ========================================= */}

                <span
                    className="
                        ironstore-ver-reels-overlay
                    "
                />


                {/* =========================================
                    REELS
                ========================================= */}

                <span
                    className="
                        ironstore-ver-reels-selo
                    "
                >
                    REELS
                </span>


                {/* =========================================
                    PLAY
                ========================================= */}

                <span
                    className="
                        ironstore-ver-reels-play
                    "
                >
                    ▶
                </span>


                {/* =========================================
                    INFORMAÇÕES
                ========================================= */}

                <span
                    className="
                        ironstore-ver-reels-info
                    "
                >

                    <strong>
                        {item.nome}
                    </strong>


                    {valor && (

                        <small>
                            {moeda(
                                valor
                            )}
                        </small>

                    )}


                    <span
                        className="
                            ironstore-ver-reels-chamada
                        "
                    >

                        Ver agora

                        <b>
                            ›
                        </b>

                    </span>

                </span>


                {/* =========================================
                    BARRA INFERIOR
                ========================================= */}

                <span
                    className="
                        ironstore-ver-reels-barra
                    "
                />

            </span>

        );

    }

    /* =====================================================
       NÃO EXIBIR
    
       O MINI VER REELS APARECE SOMENTE EM:
    
       /produtos/:id
    ===================================================== */
    /* =====================================================
       EXIBIR MINI REELS SOMENTE EM:
    
       /produtos/:id
       /path
    ===================================================== */

    if (
        !podeExibirMiniReels ||
        fechado ||
        !produto?.id ||
        !imagemPrincipal
    ) {

        return null;
    }

    /* =====================================================
       RETURN
    ===================================================== */

    return (

        <aside
            className="
                ironstore-ver-reels-flutuante
            "
            aria-label="Ver produtos em Reels"
        >

            {/* =============================================
                FECHAR
            ============================================= */}

            <button
                type="button"
                className="
                    ironstore-ver-reels-fechar
                "
                onClick={
                    fechar
                }
                aria-label="Fechar sugestão de Reels"
                title="Fechar"
            >
                ×
            </button>


            {/* =============================================
                CELULAR
            ============================================= */}

            <button
                type="button"
                className="
                    ironstore-ver-reels-celular
                "
                onClick={
                    abrirReels
                }
                aria-label={
                    `Ver ${produto.nome ||
                    "produto"
                    } nos Reels`
                }
            >

                {/* =========================================
                    TOPO DO CELULAR
                ========================================= */}

                <span
                    className="
                        ironstore-ver-reels-celular-topo
                    "
                >

                    <span
                        className="
                            ironstore-ver-reels-camera
                        "
                    />

                    <span
                        className="
                            ironstore-ver-reels-alto-falante
                        "
                    />

                </span>


                {/* =========================================
                    TELA
                ========================================= */}

                {/* =========================================
    TELA
========================================= */}

                <span
                    className="
        ironstore-ver-reels-tela
    "
                >

                    {/* =====================================
        TRILHO VERTICAL

        ITEM 1 = PRODUTO ATUAL
        ITEM 2 = PRÓXIMO PRODUTO
    ===================================== */}

                    <span
                        className={`
            ironstore-ver-reels-trilho
            ${animando
                                ? "ironstore-ver-reels-trilho-subindo"
                                : ""
                            }
        `}
                    >

                        {/* =================================
            PRODUTO ATUAL
        ================================= */}

                        <span
                            className="
                ironstore-ver-reels-item
            "
                        >

                            {renderizarProduto(
                                produto,
                                imagemPrincipal,
                                preco
                            )}

                        </span>


                        {/* =================================
            PRÓXIMO PRODUTO
        ================================= */}

                        {
                            produtos.length > 1 &&
                            proximoProduto?.id &&
                            proximaImagem && (

                                <span
                                    className="
                        ironstore-ver-reels-item
                    "
                                >

                                    {renderizarProduto(
                                        proximoProduto,
                                        proximaImagem,
                                        proximoPreco
                                    )}

                                </span>

                            )
                        }

                    </span>

                </span>
            </button>


            {/* =============================================
                TEXTO EXTERNO
            ============================================= */}

            <span
                className="
                    ironstore-ver-reels-texto
                "
            >
                Ver Reels
            </span>

        </aside>

    );

}