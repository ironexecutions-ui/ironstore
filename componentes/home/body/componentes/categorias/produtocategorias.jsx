import React, {
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";

import {
    separarImagensProduto
} from "./cache";


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

const TEMPO_TROCA_AUTOMATICA =
    10000;

const TEMPO_TRANSICAO =
    450;

/* =========================================================
   CONFIGURAÇÕES DO CARD ESTILO REELS
========================================================= */

const TEMPO_TROCA_REELS =
    3000;

const TEMPO_TRANSICAO_REELS =
    650;
/* =========================================================
   FORMATAR PREÇO
========================================================= */

function formatarPreco(valor) {

    if (
        valor === null ||
        valor === undefined ||
        valor === ""
    ) {
        return "";
    }


    /* =====================================================
       ACEITA:

       10
       10.50
       "10.50"
       "10,50"
       "R$ 10,50"
    ===================================================== */

    let texto =
        String(valor)
            .trim()
            .replace(/\s/g, "")
            .replace("R$", "");


    if (
        texto.includes(",")
    ) {

        texto =
            texto
                .replace(/\./g, "")
                .replace(",", ".");

    }


    const numero =
        Number(texto);


    if (
        Number.isNaN(numero)
    ) {

        return String(valor);

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
   VERIFICAR PREÇO PROMOCIONAL
========================================================= */

function possuiPrecoPromocional(valor) {

    if (
        valor === null ||
        valor === undefined
    ) {

        return false;

    }


    const texto =
        String(valor).trim();


    if (!texto) {

        return false;

    }


    /* =====================================================
       Se por algum motivo vier apenas 0, consideramos
       que não existe promoção.
    ===================================================== */

    const numero =
        Number(
            texto
                .replace(/\./g, "")
                .replace(",", ".")
                .replace("R$", "")
                .trim()
        );


    if (
        !Number.isNaN(numero) &&
        numero <= 0
    ) {

        return false;

    }


    return true;

}


/* =========================================================
   COMPONENTE
========================================================= */

export default function ProdutoCategoria({
    produto,
    onAbrir,
    clienteLogado,
    produtosCarrinho,
    onAdicionarCarrinho,
    modoReels = false
}) {

    /* =====================================================
       IMAGENS
    ===================================================== */

    const imagens =
        separarImagensProduto(
            produto?.imagem_url
        );


    /* =====================================================
       ÍNDICE VISÍVEL
    ===================================================== */

    const [
        indiceImagem,
        setIndiceImagem
    ] = useState(0);


    const indiceImagemRef =
        useRef(0);


    /* =====================================================
       ANIMAÇÃO
    ===================================================== */

    const [
        trocandoImagem,
        setTrocandoImagem
    ] = useState(false);
    /* =====================================================
       ANIMAÇÃO VERTICAL DO MODO REELS
    ===================================================== */

    const [
        animandoReels,
        setAnimandoReels
    ] = useState(false);

    const [
        resetandoReels,
        setResetandoReels
    ] = useState(false);
    const animandoReelsRef =
        useRef(false);


    const timeoutReelsRef =
        useRef(null);

    /* =====================================================
       CONTROLE
    ===================================================== */

    const timeoutRef =
        useRef(null);


    const ultimaTrocaRef =
        useRef(
            Date.now()
        );

    /* =====================================================
       VARIEDADE SELECIONADA
    ===================================================== */

    const variedades =
        Array.isArray(produto?.variedades)
            ? produto.variedades
            : [];


    const [
        variedadeSelecionada,
        setVariedadeSelecionada
    ] = useState(() => {

        if (
            Array.isArray(produto?.variedades) &&
            produto.variedades.length > 0
        ) {

            return (
                produto.variedades.find(
                    variedade =>
                        variedade?.principal
                ) ||
                produto.variedades[0]
            );

        }

        return null;

    });


    /* =====================================================
       SINCRONIZAR VARIEDADES
    ===================================================== */

    useEffect(() => {

        if (
            variedades.length === 0
        ) {

            setVariedadeSelecionada(
                null
            );

            return;

        }


        setVariedadeSelecionada(
            atual => {

                if (atual) {

                    const aindaExiste =
                        variedades.find(
                            variedade =>
                                String(variedade.id) ===
                                String(atual.id)
                        );

                    if (aindaExiste) {
                        return aindaExiste;
                    }

                }


                return (
                    variedades.find(
                        variedade =>
                            variedade?.principal
                    ) ||
                    variedades[0]
                );

            }
        );

    }, [
        produto?.id,
        produto?.variedades
    ]);


    /* =====================================================
       PRODUTO ATUAL
    ===================================================== */

    /* =====================================================
       PRODUTO / VARIEDADE ATUAL
    ===================================================== */

    const produtoSelecionado =
        variedadeSelecionada
            ? {
                ...produto,

                /* =========================================
                   ID REAL DA VARIEDADE
                ========================================= */

                id:
                    variedadeSelecionada.id,


                /* =========================================
                   RELAÇÃO COM PRODUTO PRINCIPAL
                ========================================= */

                produto_variedade_id:
                    Number(
                        variedadeSelecionada
                            ?.produto_variedade_id ?? 0
                    ),


                /* =========================================
                   PREÇO
                ========================================= */

                preco:
                    variedadeSelecionada.preco ??
                    produto?.preco,


                preco_promocao:
                    variedadeSelecionada.preco_promocao ??
                    produto?.preco_promocao,


                /* =========================================
                   CÓDIGO
                ========================================= */

                codigo_barras:
                    variedadeSelecionada.codigo_barras ??
                    produto?.codigo_barras,


                /* =========================================
                   IMAGEM
                ========================================= */

                imagem_url:
                    variedadeSelecionada.imagem_url ||
                    produto?.imagem_url,


                /* =========================================
                   VARIEDADE
                ========================================= */

                variedade_selecionada:
                    variedadeSelecionada

            }
            : produto;


    /* =====================================================
       ESTÁ NO CARRINHO?

       A VERIFICAÇÃO É PELO ID REAL DA VARIEDADE.
    ===================================================== */

    const noCarrinho =
        produtosCarrinho instanceof Set
            ? produtosCarrinho.has(
                String(
                    produtoSelecionado?.id
                )
            )
            : false;

    /* =====================================================
       SINCRONIZAR ÍNDICE
    ===================================================== */

    useEffect(() => {

        indiceImagemRef.current =
            indiceImagem;

    }, [indiceImagem]);


    /* =====================================================
       QUANDO AS IMAGENS DO PRODUTO MUDAREM

       Evita manter um índice que não existe mais.
    ===================================================== */

    useEffect(() => {

        if (
            imagens.length === 0
        ) {

            indiceImagemRef.current =
                0;

            setIndiceImagem(
                0
            );

            return;

        }


        if (
            indiceImagemRef.current >=
            imagens.length
        ) {

            indiceImagemRef.current =
                0;

            setIndiceImagem(
                0
            );

        }

    }, [
        produto?.imagem_url,
        imagens.length
    ]);


    /* =====================================================
       TROCAR PARA PRÓXIMA IMAGEM
    ===================================================== */

    const trocarImagem =
        useCallback(() => {

            if (
                imagens.length <= 1
            ) {

                return;

            }


            /* =============================================
               CANCELAR TRANSIÇÃO PENDENTE
            ============================================= */

            if (
                timeoutRef.current
            ) {

                clearTimeout(
                    timeoutRef.current
                );

                timeoutRef.current =
                    null;

            }


            /* =============================================
               COMEÇAR SAÍDA
            ============================================= */

            setTrocandoImagem(
                true
            );


            /* =============================================
               TROCAR NO MEIO DA TRANSIÇÃO
            ============================================= */

            timeoutRef.current =
                setTimeout(() => {

                    const proximoIndice =
                        (
                            indiceImagemRef.current +
                            1
                        ) %
                        imagens.length;


                    indiceImagemRef.current =
                        proximoIndice;


                    setIndiceImagem(
                        proximoIndice
                    );


                    ultimaTrocaRef.current =
                        Date.now();


                    requestAnimationFrame(
                        () => {

                            setTrocandoImagem(
                                false
                            );

                        }
                    );


                    timeoutRef.current =
                        null;


                }, TEMPO_TRANSICAO);

        }, [
            imagens
        ]);


    /* =====================================================
       TROCA AUTOMÁTICA

       A cada 10 segundos.
    ===================================================== */

    useEffect(() => {

        /* =============================================
           CARD REELS TEM SEU PRÓPRIO TIMER
        ============================================= */

        if (
            modoReels
        ) {

            return;

        }


        if (
            imagens.length <= 1
        ) {

            return;

        }


        const intervalo =
            setInterval(() => {

                trocarImagem();

            }, TEMPO_TROCA_AUTOMATICA);


        return () => {

            clearInterval(
                intervalo
            );

        };

    }, [
        modoReels,
        imagens.length,
        trocarImagem
    ]);
    /* =====================================================
       HOVER
    
       NORMAL:
       continua trocando imediatamente.
    
       REELS:
       não interfere na animação.
       O Reels sobe somente pelo timer de 3 segundos.
    ===================================================== */

    function mouseEntrou() {

        if (
            modoReels
        ) {

            return;

        }


        if (
            imagens.length <= 1
        ) {

            return;

        }


        trocarImagem();
    }


    /* =====================================================
       SAÍDA DO HOVER
    ===================================================== */

    function mouseSaiu() {

        if (
            modoReels
        ) {

            return;

        }


        if (
            imagens.length <= 1
        ) {

            return;

        }


        trocarImagem();
    }
    /* =====================================================
       LIMPEZA
    ===================================================== */

    useEffect(() => {

        return () => {

            if (
                timeoutRef.current
            ) {

                clearTimeout(
                    timeoutRef.current
                );

            }


            if (
                timeoutReelsRef.current
            ) {

                clearTimeout(
                    timeoutReelsRef.current
                );

            }


            animandoReelsRef.current =
                false;

        };

    }, []);


    /* =====================================================
       PREÇOS
    ===================================================== */

    const temPromocao =
        possuiPrecoPromocional(
            produtoSelecionado?.preco_promocao
        );


    const precoNormal =
        formatarPreco(
            produtoSelecionado?.preco
        );


    const precoPromocional =
        temPromocao
            ? formatarPreco(
                produtoSelecionado?.preco_promocao
            )
            : "";

    /* =====================================================
       IMAGEM ATUAL
    ===================================================== */

    const imagemAtual =
        imagens[
        indiceImagem
        ] || "";

    /* =====================================================
       PRÓXIMA IMAGEM DO REELS
    
       3 imagens:
       0 -> 1 -> 2 -> 0
    
       2 imagens:
       0 -> 1 -> 0
    
       1 imagem:
       0 -> 0 -> 0
    
       Portanto nunca precisa descer.
    ===================================================== */

    const proximoIndiceImagem =
        imagens.length > 0
            ? (
                indiceImagem + 1
            ) % imagens.length
            : 0;


    const proximaImagem =
        imagens.length > 0
            ? (
                imagens[
                proximoIndiceImagem
                ] ||
                imagemAtual
            )
            : "";
    /* =====================================================
       TROCAR IMAGEM NO MODO REELS
    
       IMPORTANTE:
    
       - sempre sobe
       - nunca faz animação inversa
       - última volta para primeira
       - uma única imagem também é repetida
    ===================================================== */

    const trocarImagemReels =
        useCallback(() => {

            if (
                !modoReels ||
                imagens.length === 0 ||
                animandoReelsRef.current
            ) {
                return;
            }

            /* =============================================
               1. COMEÇA A SUBIR
            ============================================= */

            animandoReelsRef.current = true;

            setResetandoReels(false);
            setAnimandoReels(true);


            if (timeoutReelsRef.current) {
                clearTimeout(
                    timeoutReelsRef.current
                );
            }


            /* =============================================
               2. ESPERA TERMINAR A SUBIDA
            ============================================= */

            timeoutReelsRef.current =
                setTimeout(() => {

                    const novoIndice =
                        (
                            indiceImagemRef.current + 1
                        ) % imagens.length;


                    /* =====================================
                       3. DESLIGA A TRANSIÇÃO
                    ===================================== */

                    setResetandoReels(true);


                    /* =====================================
                       4. NOVA IMAGEM VIRA A PRIMEIRA
                    ===================================== */

                    indiceImagemRef.current =
                        novoIndice;

                    setIndiceImagem(
                        novoIndice
                    );


                    /* =====================================
                       5. VOLTA O TRILHO PARA ZERO
                          SEM ANIMAÇÃO
                    ===================================== */

                    requestAnimationFrame(() => {

                        setAnimandoReels(false);


                        requestAnimationFrame(() => {

                            requestAnimationFrame(() => {

                                /* =========================
                                   6. REATIVA A TRANSIÇÃO
                                ========================= */

                                setResetandoReels(false);

                                animandoReelsRef.current =
                                    false;

                                timeoutReelsRef.current =
                                    null;

                            });

                        });

                    });

                }, TEMPO_TRANSICAO_REELS);

        }, [
            modoReels,
            imagens.length
        ]);
    /* =====================================================
       TIMER DO REELS
    
       EXATAMENTE A CADA 3 SEGUNDOS.
    
       Funciona também quando existe somente uma imagem.
    ===================================================== */

    useEffect(() => {

        if (
            !modoReels ||
            imagens.length === 0
        ) {

            return;

        }


        const intervaloReels =
            setInterval(() => {

                trocarImagemReels();

            }, TEMPO_TROCA_REELS);


        return () => {

            clearInterval(
                intervaloReels
            );

        };

    }, [
        modoReels,
        imagens.length,
        trocarImagemReels
    ]);


    function clicarProduto() {

        if (
            typeof onAbrir ===
            "function"
        ) {

            onAbrir(
                produtoSelecionado
            );

        }

    }


    /* =====================================================
       TECLADO

       Como o card é clicável, Enter e Espaço também abrem.
    ===================================================== */

    function teclaProduto(evento) {

        if (
            evento.key === "Enter" ||
            evento.key === " "
        ) {

            evento.preventDefault();

            clicarProduto();

        }

    }
    /* =====================================================
       ADICIONAR AO CARRINHO
    ===================================================== */

    function clicarAdicionarCarrinho(
        evento
    ) {

        evento.preventDefault();
        evento.stopPropagation();

        if (
            typeof onAdicionarCarrinho ===
            "function"
        ) {

            onAdicionarCarrinho(
                produtoSelecionado
            );

        }

    }

    /* =====================================================
       RENDER
    ===================================================== */

    return (

        <article
            className="ironstore-produto-classico"
            onMouseEnter={
                mouseEntrou
            }
            onMouseLeave={
                mouseSaiu
            }
        >

            <div
                className="ironstore-produto-classico-clique"
                role="link"
                tabIndex={0}
                onClick={
                    clicarProduto
                }
                onKeyDown={
                    teclaProduto
                }
            >


                {/* =========================================
                    IMAGEM
                ========================================= */}

                <div
                    className={
                        `
            ironstore-produto-classico-imagem-area

            ${modoReels
                            ? "ironstore-produto-categoria-reels-viewport-unico"
                            : ""
                        }
        `
                    }
                >

                    {imagemAtual ? (

                        modoReels ? (

                            <>
                                {/* =============================================
                MODO REELS
            ============================================= */}

                                <div
                                    className={
                                        `
        ironstore-produto-categoria-reels-trilho-unico

        ${animandoReels
                                            ? "ironstore-produto-categoria-reels-trilho-animando-unico"
                                            : ""
                                        }

        ${resetandoReels
                                            ? "ironstore-produto-categoria-reels-trilho-resetando-unico"
                                            : ""
                                        }
        `
                                    }
                                >

                                    {/* IMAGEM ATUAL */}

                                    <div
                                        className="ironstore-produto-categoria-reels-slide-unico"
                                    >
                                        <img
                                            className="ironstore-produto-categoria-reels-imagem-unica"
                                            src={imagemAtual}
                                            alt={produto?.nome || "Produto"}
                                            loading="lazy"
                                            draggable="false"
                                        />
                                    </div>


                                    {/* PRÓXIMA IMAGEM */}

                                    <div
                                        className="ironstore-produto-categoria-reels-slide-unico"
                                    >
                                        <img
                                            className="ironstore-produto-categoria-reels-imagem-unica"
                                            src={proximaImagem || imagemAtual}
                                            alt={produto?.nome || "Produto"}
                                            loading="lazy"
                                            draggable="false"
                                        />
                                    </div>

                                </div>


                                {/* =============================================
                SÍMBOLO DE REPRODUZIR
            ============================================= */}

                                <div
                                    className="ironstore-produto-reels-play"
                                    aria-hidden="true"
                                >
                                    <span>
                                        ▶
                                    </span>
                                </div>

                            </>

                        ) : (

                            /* =============================================
                                MODO NORMAL
                            ============================================= */

                            <img
                                className={
                                    `
                ironstore-produto-classico-imagem

                ${trocandoImagem
                                        ? "trocando"
                                        : ""
                                    }
                `
                                }
                                src={imagemAtual}
                                alt={produto?.nome || "Produto"}
                                loading="lazy"
                                draggable="false"
                            />

                        )

                    ) : (

                        <div
                            className="ironstore-produto-classico-sem-imagem"
                        >

                            <span>
                                Sem imagem
                            </span>

                        </div>

                    )}


                    {/* =====================================
                        INDICADORES DAS FOTOS
                    ===================================== */}

                    {imagens.length > 1 && (

                        <div
                            className="ironstore-produto-classico-indicadores"
                            aria-hidden="true"
                        >

                            {imagens.map(
                                (
                                    _,
                                    indice
                                ) => (

                                    <span
                                        key={
                                            indice
                                        }
                                        className={
                                            indice ===
                                                indiceImagem
                                                ? "ativo"
                                                : ""
                                        }
                                    />

                                )
                            )}

                        </div>

                    )}

                </div>


                {/* =========================================
                    INFORMAÇÕES
                ========================================= */}

                <div
                    className="ironstore-produto-classico-informacoes"
                >


                    {/* =====================================
                        NOME
                    ===================================== */}

                    <h3>
                        {produto?.nome}
                    </h3>
                    {/* =====================================================
    DESCRIÇÃO CURTA
===================================================== */}

                    {produto?.descricao_curta &&
                        String(
                            produto.descricao_curta
                        ).trim() && (

                            <p
                                className="ironstore-produto-classico-descricao-curta"
                            >
                                {
                                    String(
                                        produto.descricao_curta
                                    ).trim()
                                }
                            </p>

                        )
                    }

                    {/* =====================================
                        VARIEDADES
                    ===================================== */}

                    {variedades.length > 0 && (

                        <div
                            className="ironstore-produto-classico-variedades"
                            onClick={
                                evento =>
                                    evento.stopPropagation()
                            }
                        >

                            <span
                                className="ironstore-produto-classico-variedades-titulo"
                            >
                                Opções
                            </span>


                            <div
                                className="ironstore-produto-classico-variedades-lista"
                            >

                                {variedades.map(
                                    variedade => {

                                        const selecionada =
                                            String(
                                                variedadeSelecionada?.id
                                            ) ===
                                            String(
                                                variedade.id
                                            );


                                        return (

                                            <button
                                                key={
                                                    variedade.id
                                                }
                                                type="button"
                                                className={
                                                    `
                                                    ironstore-produto-classico-variedade
                                                    ${selecionada
                                                        ? "selecionada"
                                                        : ""
                                                    }
                                                    `
                                                }
                                                onClick={
                                                    evento => {

                                                        evento.preventDefault();
                                                        evento.stopPropagation();

                                                        setVariedadeSelecionada(
                                                            variedade
                                                        );

                                                    }
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


                    {/* =====================================
                        PREÇO NORMAL
                    ===================================== */}

                    {!temPromocao && (

                        <div
                            className="ironstore-produto-classico-preco"
                        >

                            {precoNormal}

                        </div>

                    )}


                    {/* =====================================
                        PREÇO PROMOCIONAL
                    ===================================== */}

                    {temPromocao && (

                        <div
                            className="ironstore-produto-classico-promocao"
                        >

                            <span
                                className="ironstore-produto-classico-preco-antigo"
                            >

                                {precoNormal}

                            </span>


                            <strong>

                                {precoPromocional}

                            </strong>

                        </div>

                    )}

                </div>

            </div>


            {/* =========================================
                ADICIONAR AO CARRINHO
            ========================================= */}

            {clienteLogado && (

                <div
                    className="ironstore-produto-classico-carrinho-area"
                >

                    <button
                        type="button"
                        className={
                            `
                ironstore-produto-classico-carrinho
                ${noCarrinho
                                ? "no-carrinho"
                                : ""
                            }
                `
                        }
                        onClick={
                            clicarAdicionarCarrinho
                        }
                        disabled={
                            noCarrinho
                        }
                    >

                        <span
                            className="ironstore-produto-carrinho-adicionar"
                        >
                            <span>
                                Adicionar ao carrinho
                            </span>

                            <span
                                className="ironstore-produto-carrinho-seta"
                            >
                                ←
                            </span>
                        </span>


                        <span
                            className="ironstore-produto-carrinho-adicionado"
                        >
                            <span
                                className="ironstore-produto-carrinho-check"
                            >
                                ✓
                            </span>

                            <span>
                                No carrinho
                            </span>
                        </span>

                    </button>

                </div>

            )}

        </article>

    );

}