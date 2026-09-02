const classicoSugestoes = `

/* =========================================================
   IRONSTORE
   EXPLORAR PRODUTOS V1
   DESIGN COMPLETO
========================================================= */


/* =========================================================
   RAIZ
========================================================= */

.ironstore-explorar-produtos-v1 {
    position: relative;

    width: 100%;

    margin: 0;

    padding:
        58px
        0
        78px;

    background:
        #ffffff;

    box-sizing: border-box;

    overflow: hidden;
}


/* =========================================================
   CONTAINER
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-container {
    position: relative;

    width: min(
        1380px,
        calc(100% - 48px)
    );

    margin:
        0
        auto;

    box-sizing: border-box;
}


/* =========================================================
   CABEÇALHO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-header {
    display: flex;

    align-items: flex-end;
    justify-content: space-between;

    gap: 30px;

    width: 100%;

    margin:
        0
        0
        30px;

    box-sizing: border-box;
}


/* =========================================================
   CONTEÚDO DO CABEÇALHO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-header-conteudo {
    display: flex;

    flex-direction: column;

    align-items: flex-start;

    min-width: 0;

    max-width: 720px;
}


/* =========================================================
   IDENTIFICAÇÃO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-identificacao {
    display: flex;

    align-items: center;

    gap: 9px;

    margin:
        0
        0
        8px;
}


/* =========================================================
   LINHA DECORATIVA
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-linha {
    display: block;

    width: 22px;
    height: 2px;

    border-radius: 999px;

    background:
        #0f172a;
}


/* =========================================================
   LABEL
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-label {
    display: block;

    margin: 0;

    color:
        #64748b;

    font-family: inherit;

    font-size: 11px;

    font-weight: 750;

    line-height: 1.2;

    letter-spacing: 1.4px;

    text-transform: uppercase;
}


/* =========================================================
   TÍTULO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-titulo {
    margin: 0;

    padding: 0;

    color:
        #0f172a;

    font-family: inherit;

    font-size: clamp(
        30px,
        3vw,
        42px
    );

    font-weight: 760;

    line-height: 1.05;

    letter-spacing: -1.5px;
}


/* =========================================================
   DESCRIÇÃO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-descricao {
    max-width: 580px;

    margin:
        12px
        0
        0;

    color:
        #64748b;

    font-family: inherit;

    font-size: 14px;

    font-weight: 400;

    line-height: 1.65;
}


/* =========================================================
   CONTADOR
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-contador {
    display: flex;

    align-items: center;

    justify-content: center;

    gap: 7px;

    flex:
        0
        0
        auto;

    min-height: 38px;

    padding:
        0
        14px;

    border:
        1px
        solid
        #e2e8f0;

    border-radius: 9px;

    background:
        #f8fafc;

    color:
        #64748b;

    box-sizing: border-box;
}


/* =========================================================
   NÚMERO DO CONTADOR
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-contador strong {
    color:
        #0f172a;

    font-family: inherit;

    font-size: 13px;

    font-weight: 800;

    line-height: 1;
}


/* =========================================================
   TEXTO DO CONTADOR
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-contador span {
    color:
        #64748b;

    font-family: inherit;

    font-size: 11px;

    font-weight: 600;

    line-height: 1;
}


/* =========================================================
   ÁREA DOS FILTROS
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtros {
    position: relative;

    display: block;

    width: 100%;

    margin: 0;

    padding: 0;
}


/* =========================================================
   SCROLL DOS FILTROS
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtros-scroll {
    display: flex;

    align-items: center;

    gap: 8px;

    width: 100%;

    padding:
        2px
        0
        10px;

    overflow-x: auto;
    overflow-y: hidden;

    scrollbar-width: none;

    overscroll-behavior-x: contain;

    -webkit-overflow-scrolling: touch;

    box-sizing: border-box;
}


.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtros-scroll::-webkit-scrollbar {
    display: none;
}


/* =========================================================
   FILTRO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtro {
    appearance: none;

    position: relative;

    display: inline-flex;

    align-items: center;
    justify-content: center;

    gap: 8px;

    flex:
        0
        0
        auto;

    min-height: 39px;

    margin: 0;

    padding:
        0
        16px;

    border:
        1px
        solid
        #e2e8f0;

    border-radius: 10px;

    outline: none;

    background:
        #ffffff;

    color:
        #64748b;

    font-family: inherit;

    cursor: pointer;

    white-space: nowrap;

    box-sizing: border-box;

    transition:
        background-color 160ms ease,
        border-color 160ms ease,
        color 160ms ease,
        box-shadow 160ms ease,
        transform 160ms ease;
}


/* =========================================================
   TEXTO DO FILTRO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtro-texto {
    position: relative;

    z-index: 1;

    font-family: inherit;

    font-size: 12px;

    font-weight: 700;

    line-height: 1;
}


/* =========================================================
   HOVER FILTRO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtro:hover {
    border-color:
        #cbd5e1;

    background:
        #f8fafc;

    color:
        #0f172a;

    transform:
        translateY(-1px);
}


/* =========================================================
   FILTRO ATIVO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtro-ativo {
    border-color:
        #0f172a;

    background:
        #0f172a;

    color:
        #ffffff;

    box-shadow:
        0
        5px
        14px
        rgba(15, 23, 42, 0.14);
}


.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtro-ativo:hover {
    border-color:
        #0f172a;

    background:
        #0f172a;

    color:
        #ffffff;
}


/* =========================================================
   INDICADOR DO FILTRO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtro-indicador {
    display: block;

    flex:
        0
        0
        auto;

    width: 5px;
    height: 5px;

    border-radius: 50%;

    background:
        currentColor;

    opacity: 0.8;
}


/* =========================================================
   FOCO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtro:focus-visible {
    outline:
        2px
        solid
        #94a3b8;

    outline-offset:
        3px;
}


/* =========================================================
   DIVISOR
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-divisor {
    width: 100%;
    height: 1px;

    margin:
        13px
        0
        30px;

    background:
        #edf0f4;
}


/* =========================================================
   ÁREA DE PRODUTOS
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-area {
    position: relative;

    width: 100%;

    min-width: 0;

    box-sizing: border-box;
}


/* =========================================================
   GRID
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-grid {
    display: grid;

    grid-template-columns:
        repeat(
            4,
            minmax(0, 1fr)
        );

    align-items: stretch;

    width: 100%;

    gap:
        28px
        18px;

    margin: 0;

    padding: 0;

    box-sizing: border-box;
}


/* =========================================================
   ITEM DO GRID
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-item {
    position: relative;

    display: flex;

    width: 100%;

    min-width: 0;

    margin: 0;

    padding: 0;

    box-sizing: border-box;
}


/* =========================================================
   PRIMEIRO FILHO DO ITEM

   NÃO ALTERA O DESIGN INTERNO DO ProdutoCategoria.
   SOMENTE GARANTE QUE O CARD USE A LARGURA DISPONÍVEL.
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-item > * {
    width: 100%;

    min-width: 0;

    box-sizing: border-box;
}


/* =========================================================
   ESTADO VAZIO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-vazio {
    display: flex;

    align-items: center;

    width: 100%;

    min-height: 132px;

    gap: 18px;

    padding:
        24px
        26px;

    border:
        1px
        solid
        #e2e8f0;

    border-radius: 14px;

    background:
        #f8fafc;

    box-sizing: border-box;
}


/* =========================================================
   ÍCONE VAZIO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-vazio-icone {
    display: flex;

    align-items: center;
    justify-content: center;

    flex:
        0
        0
        50px;

    width: 50px;
    height: 50px;

    border:
        1px
        solid
        #e2e8f0;

    border-radius: 12px;

    background:
        #ffffff;

    color:
        #64748b;
}


.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-vazio-icone svg {
    display: block;

    width: 24px;
    height: 24px;
}


/* =========================================================
   CONTEÚDO VAZIO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-vazio-conteudo {
    display: flex;

    flex-direction: column;

    align-items: flex-start;

    flex:
        1
        1
        auto;

    min-width: 0;

    gap: 5px;
}


/* =========================================================
   TÍTULO VAZIO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-vazio-titulo {
    margin: 0;

    color:
        #0f172a;

    font-family: inherit;

    font-size: 15px;

    font-weight: 750;

    line-height: 1.4;
}


/* =========================================================
   TEXTO VAZIO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-vazio-texto {
    margin: 0;

    color:
        #64748b;

    font-family: inherit;

    font-size: 13px;

    font-weight: 400;

    line-height: 1.5;
}


/* =========================================================
   BOTÃO VAZIO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-vazio-botao {
    appearance: none;

    display: inline-flex;

    align-items: center;
    justify-content: center;

    flex:
        0
        0
        auto;

    gap: 10px;

    min-height: 40px;

    padding:
        0
        16px;

    border:
        1px
        solid
        #dbe1e8;

    border-radius: 9px;

    outline: none;

    background:
        #ffffff;

    color:
        #0f172a;

    font-family: inherit;

    font-size: 12px;

    font-weight: 700;

    cursor: pointer;

    transition:
        background-color 160ms ease,
        border-color 160ms ease,
        transform 160ms ease,
        box-shadow 160ms ease;
}


/* =========================================================
   SETA DO BOTÃO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-vazio-botao span {
    display: inline-block;

    font-size: 16px;

    line-height: 1;

    transition:
        transform 160ms ease;
}


/* =========================================================
   HOVER BOTÃO VAZIO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-vazio-botao:hover {
    border-color:
        #cbd5e1;

    background:
        #ffffff;

    box-shadow:
        0
        4px
        12px
        rgba(15, 23, 42, 0.07);

    transform:
        translateY(-1px);
}


.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-vazio-botao:hover span {
    transform:
        translateX(3px);
}


/* =========================================================
   DESKTOP MENOR
========================================================= */

@media (
    max-width: 1180px
) {

    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-grid {
        grid-template-columns:
            repeat(
                3,
                minmax(0, 1fr)
            );
    }

}


/* =========================================================
   TABLET
========================================================= */

@media (
    max-width: 900px
) {

    .ironstore-explorar-produtos-v1 {
        padding:
            48px
            0
            62px;
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-container {
        width:
            calc(
                100% - 36px
            );
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-header {
        align-items:
            flex-start;
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-titulo {
        font-size:
            32px;

        letter-spacing:
            -1px;
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-grid {
        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            );

        gap:
            24px
            14px;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (
    max-width: 600px
) {

    .ironstore-explorar-produtos-v1 {
        padding:
            36px
            0
            48px;
    }


    /* =====================================================
       CONTAINER
    ===================================================== */

    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-container {
        width:
            calc(
                100% - 28px
            );
    }


    /* =====================================================
       CABEÇALHO
    ===================================================== */

    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-header {
        display: block;

        margin-bottom:
            22px;
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-identificacao {
        margin-bottom:
            7px;
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-linha {
        width:
            17px;
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-label {
        font-size:
            9px;

        letter-spacing:
            1.2px;
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-titulo {
        font-size:
            27px;

        line-height:
            1.08;

        letter-spacing:
            -0.8px;
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-descricao {
        max-width:
            100%;

        margin-top:
            9px;

        font-size:
            12px;

        line-height:
            1.55;
    }


    /* =====================================================
       CONTADOR
    ===================================================== */

    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-contador {
        display:
            none;
    }


    /* =====================================================
       FILTROS
    ===================================================== */

    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-filtros-scroll {
        gap:
            7px;

        padding-bottom:
            7px;
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-filtro {
        min-height:
            36px;

        padding:
            0
            13px;

        border-radius:
            9px;
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-filtro-texto {
        font-size:
            11px;
    }


    /* =====================================================
       DIVISOR
    ===================================================== */

    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-divisor {
        margin:
            10px
            0
            22px;
    }


    /* =====================================================
       GRID

       2 PRODUTOS POR LINHA
    ===================================================== */

    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-grid {
        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            );

        gap:
            20px
            10px;
    }


    /* =====================================================
       VAZIO
    ===================================================== */

    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-vazio {
        flex-direction:
            column;

        align-items:
            flex-start;

        gap:
            14px;

        min-height:
            auto;

        padding:
            22px
            20px;

        border-radius:
            12px;
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-vazio-icone {
        flex-basis:
            44px;

        width:
            44px;

        height:
            44px;

        border-radius:
            10px;
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-vazio-icone svg {
        width:
            21px;

        height:
            21px;
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-vazio-titulo {
        font-size:
            14px;
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-vazio-texto {
        font-size:
            12px;
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-vazio-botao {
        min-height:
            38px;

        padding:
            0
            14px;

        font-size:
            11px;
    }

}


/* =========================================================
   CELULARES PEQUENOS
========================================================= */

@media (
    max-width: 390px
) {

    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-container {
        width:
            calc(
                100% - 22px
            );
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-titulo {
        font-size:
            25px;
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-grid {
        gap:
            18px
            8px;
    }

}


/* =========================================================
   TELAS MUITO PEQUENAS

   MUDA PARA 1 PRODUTO POR LINHA SOMENTE QUANDO
   REALMENTE NÃO HÁ ESPAÇO SUFICIENTE.
========================================================= */

@media (
    max-width: 315px
) {

    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-grid {
        grid-template-columns:
            minmax(
                0,
                1fr
            );
    }

}


/* =========================================================
   REDUÇÃO DE MOVIMENTO
========================================================= */

@media (
    prefers-reduced-motion: reduce
) {

    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-filtro,

    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-vazio-botao,

    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-vazio-botao span {
        transition:
            none;
    }

}



/* =========================================================
   CARD DE PRODUTO DENTRO DAS SUGESTÕES

   IMPORTANTE:
   TODAS AS REGRAS COMEÇAM COM:
   .ironstore-explorar-produtos-v1-item

   PORTANTO NÃO ALTERAM OS CARDS DA HOME.
========================================================= */


/* =========================================================
   CARD
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico {
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;
    min-width: 0;
    height: 100%;

    margin: 0;
    padding: 0;

    border:
        1px solid
        #e8edf3;

    border-radius:
        14px;

    background:
        #ffffff;

    overflow: hidden;

    box-sizing: border-box;

    box-shadow:
        0 2px 5px
        rgba(15, 23, 42, 0.025);

    transition:
        transform 180ms ease,
        box-shadow 180ms ease,
        border-color 180ms ease;
}


/* =========================================================
   HOVER CARD
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico:hover {
    border-color:
        #d8dee8;

    box-shadow:
        0 12px 30px
        rgba(15, 23, 42, 0.09);

    transform:
        translateY(-3px);
}


/* =========================================================
   ÁREA CLICÁVEL
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-clique {
    position: relative;

    display: flex;
    flex-direction: column;

    flex:
        1 1 auto;

    width: 100%;

    min-width: 0;

    cursor: pointer;

    box-sizing: border-box;
}


/* =========================================================
   ÁREA DA IMAGEM
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-imagem-area {
    position: relative;

    display: flex;

    align-items: center;
    justify-content: center;

    width: 100%;

    aspect-ratio:
        1 / 1;

    min-height: 0;

    margin: 0;

    padding: 0;

    background:
        #f8f9fb;

    overflow: hidden;

    box-sizing: border-box;
}


/* =========================================================
   IMAGEM
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-imagem {
    display: block;

    width: 100%;
    height: 100%;

    max-width: 100%;

    object-fit: cover;

    object-position: center;

    margin: 0;

    padding: 0;

    border: 0;

    transition:
        transform 350ms
        cubic-bezier(
            0.2,
            0.7,
            0.2,
            1
        );
}


/* =========================================================
   ZOOM DA IMAGEM
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico:hover
.ironstore-produto-classico-imagem {
    transform:
        scale(1.035);
}


/* =========================================================
   INDICADORES DAS FOTOS
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-indicadores {
    position: absolute;

    z-index: 3;

    left: 50%;
    bottom: 10px;

    display: flex;

    align-items: center;
    justify-content: center;

    gap: 5px;

    transform:
        translateX(-50%);
}


/* =========================================================
   PONTO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-indicadores span {
    display: block;

    width: 5px;
    height: 5px;

    padding: 0;
    margin: 0;

    border-radius:
        999px;

    background:
        rgba(
            15,
            23,
            42,
            0.28
        );

    transition:
        width 180ms ease,
        background-color 180ms ease;
}


/* =========================================================
   PONTO ATIVO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-indicadores span.ativo {
    width:
        15px;

    background:
        #0f172a;
}


/* =========================================================
   INFORMAÇÕES
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-informacoes {
    display: flex;

    flex-direction: column;

    align-items: flex-start;

    width: 100%;

    min-width: 0;

    padding:
        17px
        17px
        18px;

    box-sizing: border-box;
}


/* =========================================================
   NOME
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-informacoes h3 {
    display:
        -webkit-box;

    width: 100%;

    min-height:
        42px;

    margin:
        0
        0
        11px;

    padding: 0;

    overflow: hidden;

    color:
        #111827;

    font-family:
        inherit;

    font-size:
        15px;

    font-weight:
        700;

    line-height:
        1.4;

    letter-spacing:
        -0.15px;

    text-overflow:
        ellipsis;

    -webkit-line-clamp:
        2;

    -webkit-box-orient:
        vertical;
}


/* =========================================================
   VARIEDADES
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-variedades {
    display: flex;

    flex-direction: column;

    align-items: flex-start;

    width: 100%;

    gap: 7px;

    margin:
        0
        0
        13px;
}


/* =========================================================
   TÍTULO OPÇÕES
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-variedades-titulo {
    display: block;

    margin: 0;

    color:
        #94a3b8;

    font-family:
        inherit;

    font-size:
        9px;

    font-weight:
        750;

    line-height:
        1;

    letter-spacing:
        1px;

    text-transform:
        uppercase;
}


/* =========================================================
   LISTA DAS VARIEDADES
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-variedades-lista {
    display: flex;

    align-items: center;

    flex-wrap: wrap;

    width: 100%;

    gap: 5px;
}


/* =========================================================
   BOTÃO DE VARIEDADE
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-variedade {
    appearance: none;

    display: inline-flex;

    align-items: center;
    justify-content: center;

    flex:
        0 0 auto;

    min-width:
        28px;

    min-height:
        27px;

    margin: 0;

    padding:
        0
        8px;

    border:
        1px solid
        #e2e8f0;

    border-radius:
        6px;

    outline: none;

    background:
        #ffffff;

    color:
        #475569;

    font-family:
        inherit;

    font-size:
        10px;

    font-weight:
        700;

    line-height:
        1;

    cursor: pointer;

    box-sizing:
        border-box;

    transition:
        border-color 150ms ease,
        background-color 150ms ease,
        color 150ms ease,
        transform 150ms ease;
}


/* =========================================================
   HOVER VARIEDADE
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-variedade:hover {
    border-color:
        #94a3b8;

    background:
        #f8fafc;

    color:
        #0f172a;
}


/* =========================================================
   VARIEDADE SELECIONADA
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-variedade.selecionada {
    border-color:
        #0f172a;

    background:
        #0f172a;

    color:
        #ffffff;
}


/* =========================================================
   PREÇO NORMAL
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-preco {
    display: flex;

    align-items: baseline;

    flex-wrap: wrap;

    gap: 5px;

    width: 100%;

    margin-top:
        auto;

    color:
        #0f172a;

    font-family:
        inherit;
}


/* =========================================================
   PREÇO NORMAL STRONG
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-preco strong {
    color:
        #0f172a;

    font-family:
        inherit;

    font-size:
        19px;

    font-weight:
        800;

    line-height:
        1.15;

    letter-spacing:
        -0.4px;
}


/* =========================================================
   PROMOÇÃO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-promocao {
    display: flex;

    align-items: baseline;

    flex-wrap: wrap;

    width: 100%;

    gap:
        7px;

    margin-top:
        auto;
}


/* =========================================================
   PREÇO ANTIGO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-preco-antigo {
    color:
        #94a3b8;

    font-family:
        inherit;

    font-size:
        11px;

    font-weight:
        500;

    line-height:
        1;

    text-decoration:
        line-through;
}


/* =========================================================
   PREÇO PROMOCIONAL
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-promocao strong {
    color:
        #0f172a;

    font-family:
        inherit;

    font-size:
        19px;

    font-weight:
        800;

    line-height:
        1.15;

    letter-spacing:
        -0.4px;
}


/* =========================================================
   ÁREA DO CARRINHO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-carrinho-area {
    width: 100%;

    margin-top:
        auto;

    padding:
        0
        17px
        17px;

    box-sizing:
        border-box;
}


/* =========================================================
   BOTÃO CARRINHO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-carrinho {
    appearance: none;

    position: relative;

    display: flex;

    align-items: center;
    justify-content: center;

    width: 100%;

    min-height:
        43px;

    margin: 0;

    padding:
        0
        14px;

    border:
        1px solid
        #0f172a;

    border-radius:
        9px;

    outline: none;

    background:
        #0f172a;

    color:
        #ffffff;

    font-family:
        inherit;

    font-size:
        11px;

    font-weight:
        700;

    cursor: pointer;

    overflow: hidden;

    box-sizing:
        border-box;

    transition:
        transform 160ms ease,
        background-color 160ms ease,
        border-color 160ms ease,
        box-shadow 160ms ease;
}


/* =========================================================
   HOVER CARRINHO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-carrinho:hover:not(:disabled) {
    background:
        #1e293b;

    border-color:
        #1e293b;

    box-shadow:
        0 6px 16px
        rgba(15, 23, 42, 0.16);

    transform:
        translateY(-1px);
}


/* =========================================================
   CONTEÚDO ADICIONAR
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-carrinho-adicionar {
    display: flex;

    align-items: center;
    justify-content: space-between;

    width: 100%;

    gap: 10px;
}


/* =========================================================
   SETA
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-carrinho-seta {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    font-size:
        15px;

    line-height:
        1;

    transition:
        transform 160ms ease;
}


.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-carrinho:hover
.ironstore-produto-carrinho-seta {
    transform:
        translateX(-3px);
}


/* =========================================================
   CONTEÚDO "NO CARRINHO"
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-carrinho-adicionado {
    display: none;

    align-items: center;
    justify-content: center;

    gap: 7px;

    width: 100%;
}


/* =========================================================
   ESTADO NO CARRINHO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-carrinho.no-carrinho {
    border-color:
        #dbe3ea;

    background:
        #f1f5f9;

    color:
        #334155;

    cursor:
        default;

    box-shadow:
        none;

    transform:
        none;
}


.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-carrinho.no-carrinho
.ironstore-produto-carrinho-adicionar {
    display:
        none;
}


.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-carrinho.no-carrinho
.ironstore-produto-carrinho-adicionado {
    display:
        flex;
}


/* =========================================================
   CHECK
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-carrinho-check {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    width: 18px;
    height: 18px;

    border-radius:
        50%;

    background:
        #0f172a;

    color:
        #ffffff;

    font-size:
        10px;

    font-weight:
        800;
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 900px) {

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-informacoes {
        padding:
            15px
            15px
            16px;
    }


    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-carrinho-area {
        padding:
            0
            15px
            15px;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico {
        border-radius:
            11px;
    }


    /* IMAGEM */

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-imagem-area {
        aspect-ratio:
            1 / 1.08;
    }


    /* INFORMAÇÕES */

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-informacoes {
        padding:
            12px
            11px
            13px;
    }


    /* NOME */

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-informacoes h3 {
        min-height:
            34px;

        margin-bottom:
            9px;

        font-size:
            12px;

        line-height:
            1.4;
    }


    /* OPÇÕES */

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-variedades {
        gap:
            5px;

        margin-bottom:
            10px;
    }


    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-variedades-titulo {
        font-size:
            8px;

        letter-spacing:
            0.7px;
    }


    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-variedades-lista {
        gap:
            4px;
    }


    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-variedade {
        min-width:
            24px;

        min-height:
            24px;

        padding:
            0
            6px;

        border-radius:
            5px;

        font-size:
            9px;
    }


    /* PREÇO */

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-preco strong,

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-promocao strong {
        font-size:
            16px;
    }


    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-preco-antigo {
        font-size:
            9px;
    }


    /* CARRINHO */

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-carrinho-area {
        padding:
            0
            11px
            11px;
    }


    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-carrinho {
        min-height:
            37px;

        padding:
            0
            10px;

        border-radius:
            7px;

        font-size:
            9px;
    }


    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-carrinho-seta {
        font-size:
            13px;
    }


    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-carrinho-check {
        width:
            16px;

        height:
            16px;

        font-size:
            9px;
    }

}


/* =========================================================
   MOBILE MUITO PEQUENO
========================================================= */

@media (max-width: 390px) {

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-informacoes {
        padding:
            10px
            9px
            11px;
    }


    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-carrinho-area {
        padding:
            0
            9px
            9px;
    }


    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-informacoes h3 {
        font-size:
            11px;
    }


    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-preco strong,

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-promocao strong {
        font-size:
            15px;
    }

}


/* =========================================================
   MELHORIAS EXTRAS
   IRONSTORE EXPLORAR PRODUTOS V1
========================================================= */


/* =========================================================
   1. FUNDO MAIS SOFISTICADO
========================================================= */

.ironstore-explorar-produtos-v1 {
    background:
        linear-gradient(
            180deg,
            #ffffff 0%,
            #ffffff 72%,
            #fafbfc 100%
        );
}


/* =========================================================
   2. DETALHE DECORATIVO NO TOPO
========================================================= */

.ironstore-explorar-produtos-v1::before {
    content: "";

    position: absolute;

    top: 0;
    left: 50%;

    width: min(
        1380px,
        calc(100% - 48px)
    );

    height: 1px;

    transform:
        translateX(-50%);

    background:
        linear-gradient(
            90deg,
            transparent,
            #e2e8f0 15%,
            #e2e8f0 85%,
            transparent
        );

    pointer-events: none;
}


/* =========================================================
   3. CABEÇALHO COM MAIS PRESENÇA
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-header {
    position: relative;
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-titulo {
    text-wrap: balance;
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-descricao {
    text-wrap: pretty;
}


/* =========================================================
   4. CONTADOR MAIS MODERNO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-contador {
    position: relative;

    overflow: hidden;

    box-shadow:
        0 1px 2px
        rgba(15, 23, 42, 0.03);

    transition:
        border-color 180ms ease,
        background-color 180ms ease,
        box-shadow 180ms ease;
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-contador:hover {
    border-color:
        #cbd5e1;

    background:
        #ffffff;

    box-shadow:
        0 4px 14px
        rgba(15, 23, 42, 0.06);
}


/* =========================================================
   5. FILTROS MAIS PREMIUM
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtro {
    box-shadow:
        0 1px 2px
        rgba(15, 23, 42, 0.025);
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtro:hover {
    box-shadow:
        0 4px 12px
        rgba(15, 23, 42, 0.06);
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtro:active {
    transform:
        translateY(0)
        scale(0.97);
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtro-ativo {
    box-shadow:
        0 7px 18px
        rgba(15, 23, 42, 0.17);
}


/* =========================================================
   6. INDICADOR DO FILTRO ATIVO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtro-ativo
.ironstore-explorar-produtos-v1-filtro-indicador {
    width: 5px;
    height: 5px;

    box-shadow:
        0 0 0 3px
        rgba(255, 255, 255, 0.12);
}


/* =========================================================
   7. CARD MAIS REFINADO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico {
    isolation: isolate;

    border-color:
        #e9edf2;

    box-shadow:
        0 1px 2px
        rgba(15, 23, 42, 0.025),
        0 3px 8px
        rgba(15, 23, 42, 0.025);
}


/* =========================================================
   8. BORDA INTERNA SUAVE
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico::after {
    content: "";

    position: absolute;

    z-index: 5;

    inset: 0;

    border-radius:
        inherit;

    box-shadow:
        inset 0 0 0 1px
        rgba(255, 255, 255, 0.45);

    pointer-events: none;
}


/* =========================================================
   9. HOVER DO CARD
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico:hover {
    border-color:
        #d8dee7;

    transform:
        translateY(-5px);

    box-shadow:
        0 4px 8px
        rgba(15, 23, 42, 0.04),
        0 18px 38px
        rgba(15, 23, 42, 0.10);
}


/* =========================================================
   10. IMAGEM MAIS LIMPA
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-imagem-area {
    isolation: isolate;

    background:
        linear-gradient(
            145deg,
            #fafafa,
            #f5f6f8
        );
}


/* =========================================================
   11. LEVE SOMBRA INTERNA SOBRE IMAGEM
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-imagem-area::after {
    content: "";

    position: absolute;

    z-index: 2;

    inset: 0;

    background:
        linear-gradient(
            180deg,
            transparent 72%,
            rgba(15, 23, 42, 0.025)
        );

    pointer-events: none;
}


/* =========================================================
   12. ZOOM MAIS NATURAL
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-imagem {
    will-change:
        transform;

    transition:
        transform 450ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        ),
        filter 250ms ease;
}

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico:hover
.ironstore-produto-classico-imagem {
    transform:
        scale(1.045);
}


/* =========================================================
   13. INDICADORES DE IMAGEM COM FUNDO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-indicadores {
    min-height: 18px;

    padding:
        0
        7px;

    border:
        1px solid
        rgba(255, 255, 255, 0.55);

    border-radius:
        999px;

    background:
        rgba(255, 255, 255, 0.72);

    box-shadow:
        0 2px 8px
        rgba(15, 23, 42, 0.08);

    backdrop-filter:
        blur(6px);

    -webkit-backdrop-filter:
        blur(6px);
}


/* =========================================================
   14. NOME DO PRODUTO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-informacoes h3 {
    transition:
        color 180ms ease;
}

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico:hover
.ironstore-produto-classico-informacoes h3 {
    color:
        #020617;
}


/* =========================================================
   15. OPÇÕES MAIS DISCRETAS
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-variedades {
    padding-top:
        2px;
}


/* =========================================================
   16. VARIEDADES INFORMATIVAS
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-variedade-informativa {
    position: relative;

    min-height:
        25px;

    padding:
        0
        8px;

    border:
        1px solid
        #e5e7eb;

    border-radius:
        6px;

    background:
        #f8fafc;

    color:
        #64748b;

    cursor:
        default;

    pointer-events:
        none;

    user-select:
        none;

    box-shadow:
        none;

    transition:
        none;
}


/* =========================================================
   17. VARIEDADE PRINCIPAL SEM APARÊNCIA DE BOTÃO ATIVO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-variedade-informativa.selecionada {
    border-color:
        #d8dee7;

    background:
        #eef2f6;

    color:
        #334155;

    box-shadow:
        inset 0 0 0 1px
        rgba(15, 23, 42, 0.015);
}


/* =========================================================
   18. PREÇO COM MAIS DESTAQUE
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-preco,

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-promocao {
    position: relative;

    padding-top:
        12px;

    border-top:
        1px solid
        #f0f2f5;
}


/* =========================================================
   19. PREÇO NORMAL
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-preco {
    color:
        #0f172a;

    font-size:
        19px;

    font-weight:
        800;

    line-height:
        1.15;

    letter-spacing:
        -0.45px;
}


/* =========================================================
   20. PREÇO PROMOCIONAL
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-promocao strong {
    position: relative;

    color:
        #0f172a;

    font-size:
        20px;

    font-weight:
        850;

    letter-spacing:
        -0.5px;
}


/* =========================================================
   21. PREÇO ANTIGO MAIS LIMPO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-preco-antigo {
    color:
        #9ca3af;

    text-decoration-thickness:
        1px;

    text-decoration-color:
        #9ca3af;
}


/* =========================================================
   22. CARD GANHA REALCE NO FOCO DO TECLADO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-clique:focus-visible {
    outline:
        2px solid
        #0f172a;

    outline-offset:
        -3px;

    border-radius:
        13px;
}


/* =========================================================
   23. ANIMAÇÃO DOS CARDS AO CARREGAR
========================================================= */

@keyframes ironstoreExplorarProdutoEntradaV1 {

    from {
        opacity: 0;

        transform:
            translateY(14px);
    }

    to {
        opacity: 1;

        transform:
            translateY(0);
    }

}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-item {
    animation:
        ironstoreExplorarProdutoEntradaV1
        420ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        )
        both;
}


/* =========================================================
   24. ENTRADA ESCALONADA
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-item:nth-child(2) {
    animation-delay:
        35ms;
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-item:nth-child(3) {
    animation-delay:
        70ms;
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-item:nth-child(4) {
    animation-delay:
        105ms;
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-item:nth-child(5) {
    animation-delay:
        140ms;
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-item:nth-child(6) {
    animation-delay:
        175ms;
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-item:nth-child(7) {
    animation-delay:
        210ms;
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-item:nth-child(8) {
    animation-delay:
        245ms;
}


/* =========================================================
   25. ESTADO VAZIO MAIS ELEGANTE
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-vazio {
    position: relative;

    overflow: hidden;

    background:
        linear-gradient(
            135deg,
            #fafbfc,
            #f8fafc
        );

    box-shadow:
        inset 0 1px 0
        rgba(255, 255, 255, 0.8);
}


/* =========================================================
   26. DETALHE DO ESTADO VAZIO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-vazio::before {
    content: "";

    position: absolute;

    top: -55px;
    right: -55px;

    width: 130px;
    height: 130px;

    border-radius:
        50%;

    background:
        rgba(15, 23, 42, 0.025);

    pointer-events:
        none;
}


/* =========================================================
   27. RESPONSIVO TABLET
========================================================= */

@media (max-width: 900px) {

    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-item {
        animation-delay:
            0ms;
    }

}


/* =========================================================
   28. MELHORIAS MOBILE
========================================================= */

@media (max-width: 600px) {

    .ironstore-explorar-produtos-v1::before {
        width:
            calc(100% - 28px);
    }


    /* CARD */

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico {
        box-shadow:
            0 1px 4px
            rgba(15, 23, 42, 0.04);
    }


    /* REMOVE ELEVAÇÃO EXAGERADA NO TOUCH */

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico:hover {
        transform:
            none;

        box-shadow:
            0 1px 4px
            rgba(15, 23, 42, 0.04);
    }


    /* PREÇO */

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-preco,

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-promocao {
        padding-top:
            9px;
    }


    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-preco {
        font-size:
            16px;
    }


    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-promocao strong {
        font-size:
            16px;
    }


    /* INDICADORES */

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-indicadores {
        bottom:
            7px;

        min-height:
            15px;

        padding:
            0
            5px;
    }

}


/* =========================================================
   29. SEM ANIMAÇÃO PARA QUEM PREFERE REDUZIR MOVIMENTO
========================================================= */

@media (prefers-reduced-motion: reduce) {

    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-item {
        animation:
            none;
    }

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico,

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-imagem {
        transition:
            none;
    }

}




/* =========================================================
   IRONSTORE
   ACABAMENTO PREMIUM FINAL
   SUGESTÕES
========================================================= */


/* =========================================================
   SEÇÃO
========================================================= */

.ironstore-explorar-produtos-v1 {
    isolation: isolate;
}

.ironstore-explorar-produtos-v1::after {
    content: "";

    position: absolute;
    z-index: -1;

    top: -180px;
    left: 50%;

    width: 900px;
    height: 420px;

    transform:
        translateX(-50%);

    border-radius:
        50%;

    background:
        radial-gradient(
            circle,
            rgba(15, 23, 42, 0.025) 0%,
            rgba(15, 23, 42, 0.012) 35%,
            transparent 72%
        );

    pointer-events:
        none;
}


/* =========================================================
   CABEÇALHO MAIS PREMIUM
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-header {
    position: relative;
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-header-conteudo {
    position: relative;
}


/* =========================================================
   LINHA DO LABEL
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-linha {
    position: relative;

    overflow: hidden;

    box-shadow:
        0 0 0 1px
        rgba(15, 23, 42, 0.02);
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-linha::after {
    content: "";

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.55),
            transparent
        );
}


/* =========================================================
   TÍTULO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-titulo {
    text-rendering:
        optimizeLegibility;

    -webkit-font-smoothing:
        antialiased;
}


/* =========================================================
   CONTADOR PREMIUM
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-contador {
    position: relative;

    overflow: hidden;

    border-color:
        #e5e9ef;

    background:
        linear-gradient(
            180deg,
            #ffffff 0%,
            #f8fafc 100%
        );

    box-shadow:
        0 1px 2px
        rgba(15, 23, 42, 0.025),
        inset 0 1px 0
        rgba(255, 255, 255, 0.9);

    transition:
        border-color 160ms ease,
        box-shadow 160ms ease,
        transform 160ms ease;
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-contador:hover {
    border-color:
        #d8dee7;

    box-shadow:
        0 5px 15px
        rgba(15, 23, 42, 0.055);

    transform:
        translateY(-1px);
}


/* =========================================================
   ÁREA DOS FILTROS
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtros {
    position: relative;
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtros::after {
    content: "";

    position: absolute;
    z-index: 3;

    top: 0;
    right: 0;
    bottom: 8px;

    width: 28px;

    background:
        linear-gradient(
            90deg,
            transparent,
            #ffffff
        );

    pointer-events:
        none;
}


/* =========================================================
   FILTROS
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtro {
    position: relative;

    overflow: hidden;

    -webkit-tap-highlight-color:
        transparent;

    user-select:
        none;
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtro::before {
    content: "";

    position: absolute;

    inset: 0;

    opacity: 0;

    background:
        linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.55),
            transparent
        );

    transition:
        opacity 160ms ease;

    pointer-events:
        none;
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtro:hover::before {
    opacity: 1;
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-filtro-ativo::before {
    opacity: 0.08;
}


/* =========================================================
   DIVISOR
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-divisor {
    background:
        linear-gradient(
            90deg,
            transparent 0%,
            #e8edf2 4%,
            #e8edf2 96%,
            transparent 100%
        );
}


/* =========================================================
   ITEM
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-item {
    isolation: isolate;
}


/* =========================================================
   CARD
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico {
    will-change:
        transform;

    backface-visibility:
        hidden;

    -webkit-font-smoothing:
        antialiased;
}


/* =========================================================
   BRILHO SUTIL DO CARD
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico::before {
    content: "";

    position: absolute;
    z-index: 4;

    top: 0;
    left: 0;

    width: 100%;
    height: 1px;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.9),
            transparent
        );

    opacity: 0;

    transition:
        opacity 180ms ease;

    pointer-events:
        none;
}

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico:hover::before {
    opacity: 1;
}


/* =========================================================
   IMAGEM
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-imagem-area::after {
    content: "";

    position: absolute;
    z-index: 2;

    inset: 0;

    background:
        linear-gradient(
            180deg,
            transparent 72%,
            rgba(15, 23, 42, 0.025) 100%
        );

    pointer-events:
        none;
}


/* =========================================================
   IMAGEM MAIS NATURAL NO HOVER
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-imagem {
    transform-origin:
        center center;

    will-change:
        transform;
}

@media (hover: hover) {

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico:hover
    .ironstore-produto-classico-imagem {
        transform:
            scale(1.045);
    }

}


/* =========================================================
   INDICADORES DAS IMAGENS
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-indicadores {
    padding:
        5px
        7px;

    border-radius:
        999px;

    background:
        rgba(255, 255, 255, 0.78);

    backdrop-filter:
        blur(7px);

    -webkit-backdrop-filter:
        blur(7px);

    box-shadow:
        0 2px 8px
        rgba(15, 23, 42, 0.06);
}


/* =========================================================
   INFORMAÇÕES
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-informacoes {
    position: relative;

    background:
        #ffffff;
}


/* =========================================================
   NOME DO PRODUTO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-informacoes h3 {
    transition:
        color 160ms ease;

    text-rendering:
        optimizeLegibility;
}

@media (hover: hover) {

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico:hover
    .ironstore-produto-classico-informacoes h3 {
        color:
            #020617;
    }

}


/* =========================================================
   VARIEDADES
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-variedade {
    position: relative;

    overflow: hidden;

    box-shadow:
        0 1px 2px
        rgba(15, 23, 42, 0.025);

    -webkit-tap-highlight-color:
        transparent;
}

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-variedade:active {
    transform:
        scale(0.94);
}

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-variedade.selecionada {
    box-shadow:
        0 4px 10px
        rgba(15, 23, 42, 0.13);
}


/* =========================================================
   PREÇO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-preco strong,

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-promocao strong {
    text-rendering:
        optimizeLegibility;

    font-variant-numeric:
        tabular-nums;
}


/* =========================================================
   PREÇO ANTIGO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-preco-antigo {
    text-decoration-thickness:
        1px;

    text-decoration-color:
        #94a3b8;
}


/* =========================================================
   BOTÃO DO CARRINHO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-carrinho {
    isolation: isolate;

    -webkit-tap-highlight-color:
        transparent;
}

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-carrinho::before {
    content: "";

    position: absolute;
    z-index: -1;

    top: 0;
    left: -120%;

    width: 70%;
    height: 100%;

    transform:
        skewX(-20deg);

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.10),
            transparent
        );

    transition:
        left 450ms ease;

    pointer-events:
        none;
}

@media (hover: hover) {

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-carrinho:hover::before {
        left:
            150%;
    }

}


/* =========================================================
   CLIQUE DO BOTÃO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-carrinho:active:not(:disabled) {
    transform:
        translateY(0)
        scale(0.985);

    box-shadow:
        0 2px 7px
        rgba(15, 23, 42, 0.12);
}


/* =========================================================
   ESTADO NO CARRINHO
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-carrinho.no-carrinho {
    background:
        linear-gradient(
            180deg,
            #f8fafc,
            #f1f5f9
        );

    border-color:
        #e2e8f0;
}


/* =========================================================
   CHECK
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-carrinho-check {
    box-shadow:
        0 2px 6px
        rgba(15, 23, 42, 0.16);
}


/* =========================================================
   ESTADO VAZIO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-vazio-icone {
    position: relative;

    box-shadow:
        0 2px 7px
        rgba(15, 23, 42, 0.04),
        inset 0 1px 0
        rgba(255, 255, 255, 0.9);
}


/* =========================================================
   BOTÃO ESTADO VAZIO
========================================================= */

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-vazio-botao {
    position: relative;

    overflow: hidden;

    -webkit-tap-highlight-color:
        transparent;
}

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-vazio-botao:active {
    transform:
        scale(0.97);
}


/* =========================================================
   DESKTOP GRANDE
========================================================= */

@media (min-width: 1400px) {

    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-grid {
        gap:
            30px
            20px;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

    .ironstore-explorar-produtos-v1::after {
        top:
            -100px;

        width:
            100%;

        height:
            280px;
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-filtros::after {
        width:
            18px;
    }


    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico {
        will-change:
            auto;
    }


    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico::before {
        display:
            none;
    }


    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-imagem-area::after {
        opacity:
            0.6;
    }


    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-indicadores {
        bottom:
            7px;

        padding:
            4px
            6px;
    }

}


/* =========================================================
   TOUCH
========================================================= */

@media (hover: none) {

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico:hover {
        transform:
            none;
    }


    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico:hover
    .ironstore-produto-classico-imagem {
        transform:
            none;
    }


    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-contador:hover {
        transform:
            none;
    }

}


/* =========================================================
   ACESSIBILIDADE
========================================================= */

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-variedade:focus-visible,

.ironstore-explorar-produtos-v1-item
.ironstore-produto-classico-carrinho:focus-visible,

.ironstore-explorar-produtos-v1
.ironstore-explorar-produtos-v1-vazio-botao:focus-visible {
    outline:
        2px
        solid
        #64748b;

    outline-offset:
        3px;
}


/* =========================================================
   REDUÇÃO DE MOVIMENTO
========================================================= */

@media (prefers-reduced-motion: reduce) {

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico,

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-imagem,

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-carrinho,

    .ironstore-explorar-produtos-v1-item
    .ironstore-produto-classico-variedade,

    .ironstore-explorar-produtos-v1
    .ironstore-explorar-produtos-v1-contador {
        transition:
            none !important;

        animation:
            none !important;
    }

}

`;

export default classicoSugestoes;