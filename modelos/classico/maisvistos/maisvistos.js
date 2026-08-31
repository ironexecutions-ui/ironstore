const classicoMaisVistos = `

/* =========================================================
   IRONSTORE
   MAIS VISTOS — MODELO CLÁSSICO
========================================================= */


/* =========================================================
   ÁREA PRINCIPAL
========================================================= */

.ironstore-perfil-mais-vistos-area {
    width: 100%;
    max-width: 1240px;

    position: relative;

    margin: 0 auto;
    padding: 34px 28px 48px;

    background:
        linear-gradient(
            145deg,
            #f8f9fb 0%,
            #f4f6f8 52%,
            #f8f9fa 100%
        );

    border:
        1px solid
        rgba(15, 23, 42, 0.055);

    border-radius: 24px;

    box-shadow:
        0 1px 2px rgba(15, 23, 42, 0.02),
        0 12px 35px rgba(15, 23, 42, 0.035);

    box-sizing: border-box;
}


/* =========================================================
   CABEÇALHO
========================================================= */

.ironstore-perfil-mais-vistos-cabecalho {
    width: 100%;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    gap: 24px;

    position: relative;

    margin-bottom: 27px;
    padding-bottom: 20px;

    border-bottom:
        1px solid
        rgba(15, 23, 42, 0.08);

    box-sizing: border-box;
}


/* =========================================================
   DETALHE DO CABEÇALHO
========================================================= */

.ironstore-perfil-mais-vistos-cabecalho::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: -1px;

    width: 54px;
    height: 2px;

    background:
        linear-gradient(
            90deg,
            #142a4a 0%,
            rgba(20, 42, 74, 0.25) 100%
        );

    border-radius: 999px;
}


/* =========================================================
   TÍTULO
========================================================= */

.ironstore-perfil-mais-vistos-cabecalho h2 {
    margin: 0;

    color: #142a4a;

    font-size: 27px;
    font-weight: 750;
    line-height: 1.15;

    letter-spacing: -0.65px;
}


/* =========================================================
   DESCRIÇÃO
========================================================= */

.ironstore-perfil-mais-vistos-cabecalho p {
    max-width: 520px;

    margin: 7px 0 0;

    color: #6b7280;

    font-size: 13px;
    font-weight: 400;
    line-height: 1.55;
}


/* =========================================================
   TOTAL DE PRODUTOS
========================================================= */

.ironstore-perfil-mais-vistos-total {
    min-height: 34px;

    flex-shrink: 0;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 7px 13px;

    background:
        rgba(255, 255, 255, 0.78);

    border:
        1px solid
        rgba(20, 42, 74, 0.09);

    border-radius: 999px;

    color: #526174;

    box-shadow:
        0 2px 8px
        rgba(15, 23, 42, 0.035);

    backdrop-filter:
        blur(8px);

    -webkit-backdrop-filter:
        blur(8px);

    font-size: 11px;
    font-weight: 650;
    line-height: 1;

    white-space: nowrap;

    box-sizing: border-box;
}


/* =========================================================
   CONTEÚDO
========================================================= */

.ironstore-perfil-mais-vistos-conteudo {
    width: 100%;
    min-width: 0;

    position: relative;

    box-sizing: border-box;
}


/* =========================================================
   ENTRADA DO CONTEÚDO
========================================================= */

.ironstore-perfil-mais-vistos-conteudo {
    animation:
        ironstoreMaisVistosConteudoEntrada
        0.35s ease both;
}


@keyframes ironstoreMaisVistosConteudoEntrada {

    from {
        opacity: 0;

        transform:
            translateY(7px);
    }

    to {
        opacity: 1;

        transform:
            translateY(0);
    }

}


/* =========================================================
   ESTADO SEM PRODUTOS / ERRO

   Esse estado acontece quando o cabeçalho é o único
   elemento dentro da section.
========================================================= */

.ironstore-perfil-mais-vistos-area
> .ironstore-perfil-mais-vistos-cabecalho:only-child {
    min-height: 230px;

    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 0;

    margin: 0;
    padding: 42px 24px;

    text-align: center;

    background:
        rgba(255, 255, 255, 0.56);

    border:
        1px solid
        rgba(15, 23, 42, 0.055);

    border-radius: 18px;

    box-shadow:
        inset 0 1px 0
        rgba(255, 255, 255, 0.8);

    box-sizing: border-box;
}


/* remover linha normal nesse estado */

.ironstore-perfil-mais-vistos-area
> .ironstore-perfil-mais-vistos-cabecalho:only-child::after {
    width: 34px;

    left: 50%;

    bottom: 25px;

    transform:
        translateX(-50%);

    opacity: 0.35;
}


.ironstore-perfil-mais-vistos-area
> .ironstore-perfil-mais-vistos-cabecalho:only-child h2 {
    font-size: 22px;
}


.ironstore-perfil-mais-vistos-area
> .ironstore-perfil-mais-vistos-cabecalho:only-child p {
    max-width: 420px;

    margin-top: 8px;

    text-align: center;
}


/* =========================================================
   LOADING — ÁREA
========================================================= */

.ironstore-mais-vistos-loading {
    width: 100%;
    max-width: 1240px;

    margin: 0 auto;
    padding: 34px 28px 48px;

    box-sizing: border-box;
}


/* =========================================================
   LOADING — CONTAINER
========================================================= */

.ironstore-mais-vistos-loading-conteudo {
    width: 100%;
    min-height: 230px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;

    overflow: hidden;

    padding: 42px 24px;

    background:
        linear-gradient(
            145deg,
            #f8f9fb 0%,
            #f4f6f8 52%,
            #f8f9fa 100%
        );

    border:
        1px solid
        rgba(15, 23, 42, 0.055);

    border-radius: 24px;

    box-shadow:
        0 1px 2px rgba(15, 23, 42, 0.02),
        0 12px 35px rgba(15, 23, 42, 0.035);

    box-sizing: border-box;
}


/* =========================================================
   LOADING — BRILHO DE FUNDO
========================================================= */

.ironstore-mais-vistos-loading-conteudo::before {
    content: "";

    position: absolute;

    width: 300px;
    height: 300px;

    top: -210px;
    right: -80px;

    background:
        radial-gradient(
            circle,
            rgba(20, 42, 74, 0.055) 0%,
            rgba(20, 42, 74, 0) 70%
        );

    border-radius: 50%;

    pointer-events: none;
}


/* =========================================================
   LOADING — SPINNER
========================================================= */

.ironstore-mais-vistos-loading-spinner {
    width: 46px;
    height: 46px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 18px;
}


.ironstore-mais-vistos-loading-spinner::before {
    content: "";

    position: absolute;

    inset: 0;

    border:
        3px solid
        rgba(20, 42, 74, 0.10);

    border-top-color:
        #142a4a;

    border-radius: 50%;

    animation:
        ironstoreMaisVistosSpinner
        0.8s linear infinite;
}


.ironstore-mais-vistos-loading-spinner span {
    width: 6px;
    height: 6px;

    display: block;

    background:
        #142a4a;

    border-radius: 50%;

    box-shadow:
        0 2px 5px
        rgba(20, 42, 74, 0.20);
}


@keyframes ironstoreMaisVistosSpinner {

    from {
        transform:
            rotate(0deg);
    }

    to {
        transform:
            rotate(360deg);
    }

}


/* =========================================================
   LOADING — TEXTOS
========================================================= */

.ironstore-mais-vistos-loading-textos {
    position: relative;

    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
}


.ironstore-mais-vistos-loading-titulo {
    margin: 0;

    color: #142a4a;

    font-size: 22px;
    font-weight: 750;
    line-height: 1.2;

    letter-spacing: -0.45px;
}


.ironstore-mais-vistos-loading-descricao {
    margin: 7px 0 0;

    color: #7b8492;

    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
}


/* =========================================================
   HOVER DO TOTAL
========================================================= */

.ironstore-perfil-mais-vistos-total {
    transition:
        transform 0.2s ease,
        border-color 0.2s ease,
        box-shadow 0.2s ease;
}


.ironstore-perfil-mais-vistos-total:hover {
    transform:
        translateY(-1px);

    border-color:
        rgba(20, 42, 74, 0.15);

    box-shadow:
        0 4px 12px
        rgba(15, 23, 42, 0.06);
}


/* =========================================================
   RESPONSIVO — 900PX
========================================================= */

@media (max-width: 900px) {

    .ironstore-perfil-mais-vistos-area {
        padding:
            30px
            20px
            40px;

        border-radius: 21px;
    }


    .ironstore-perfil-mais-vistos-cabecalho {
        gap: 18px;

        margin-bottom: 23px;
        padding-bottom: 18px;
    }


    .ironstore-perfil-mais-vistos-cabecalho h2 {
        font-size: 24px;
    }


    .ironstore-mais-vistos-loading {
        padding:
            30px
            20px
            40px;
    }


    .ironstore-mais-vistos-loading-conteudo {
        border-radius: 21px;
    }

}


/* =========================================================
   RESPONSIVO — MOBILE
========================================================= */

@media (max-width: 640px) {

    .ironstore-perfil-mais-vistos-area {
        padding:
            22px
            14px
            30px;

        border-radius: 18px;
    }


    .ironstore-perfil-mais-vistos-cabecalho {
        align-items: flex-start;

        gap: 12px;

        margin-bottom: 19px;
        padding-bottom: 16px;
    }


    .ironstore-perfil-mais-vistos-cabecalho h2 {
        font-size: 21px;

        letter-spacing: -0.4px;
    }


    .ironstore-perfil-mais-vistos-cabecalho p {
        max-width: 280px;

        margin-top: 5px;

        font-size: 12px;
        line-height: 1.45;
    }


    .ironstore-perfil-mais-vistos-total {
        min-height: 30px;

        padding:
            6px
            10px;

        font-size: 10px;
    }


    /* =====================================================
       VAZIO / ERRO
    ===================================================== */

    .ironstore-perfil-mais-vistos-area
    > .ironstore-perfil-mais-vistos-cabecalho:only-child {
        min-height: 190px;

        padding:
            34px
            18px;

        border-radius: 14px;
    }


    .ironstore-perfil-mais-vistos-area
    > .ironstore-perfil-mais-vistos-cabecalho:only-child h2 {
        font-size: 19px;
    }


    .ironstore-perfil-mais-vistos-area
    > .ironstore-perfil-mais-vistos-cabecalho:only-child p {
        max-width: 290px;

        font-size: 12px;
    }


    /* =====================================================
       LOADING
    ===================================================== */

    .ironstore-mais-vistos-loading {
        padding:
            22px
            14px
            30px;
    }


    .ironstore-mais-vistos-loading-conteudo {
        min-height: 190px;

        padding:
            34px
            18px;

        border-radius: 18px;
    }


    .ironstore-mais-vistos-loading-spinner {
        width: 40px;
        height: 40px;

        margin-bottom: 15px;
    }


    .ironstore-mais-vistos-loading-titulo {
        font-size: 19px;
    }


    .ironstore-mais-vistos-loading-descricao {
        font-size: 12px;
    }

}


/* =========================================================
   MOBILE PEQUENO
========================================================= */

@media (max-width: 420px) {

    .ironstore-perfil-mais-vistos-area {
        padding:
            18px
            11px
            26px;
    }


    .ironstore-perfil-mais-vistos-cabecalho {
        flex-direction: column;

        align-items: flex-start;

        gap: 9px;
    }


    .ironstore-perfil-mais-vistos-total {
        align-self: flex-start;
    }


    .ironstore-mais-vistos-loading {
        padding:
            18px
            11px
            26px;
    }

}


/* =========================================================
   REDUZIR MOVIMENTO
========================================================= */

@media (prefers-reduced-motion: reduce) {

    .ironstore-perfil-mais-vistos-conteudo {
        animation: none;
    }


    .ironstore-mais-vistos-loading-spinner::before {
        animation: none;
    }


    .ironstore-perfil-mais-vistos-total {
        transition: none;
    }

}

`;

export default classicoMaisVistos;