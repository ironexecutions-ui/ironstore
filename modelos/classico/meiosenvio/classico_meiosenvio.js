const classicoMeiosEnvio = `

/* =========================================================
   IRONSTORE
   MEIOS DE ENVIO
   MODELO CLÁSSICO
========================================================= */


/* =========================================================
   RESET LOCAL
========================================================= */

.ironstore-meios-envio,
.ironstore-meios-envio * {
    box-sizing: border-box;
}


/* =========================================================
   SEÇÃO
========================================================= */

.ironstore-meios-envio {
    position: relative;

    width: 100%;

    padding:
        100px
        0
        105px;

    overflow: hidden;

    background:
        linear-gradient(
            180deg,
            #ffffff 0%,
            #ffffff 45%,
            #f8fafc 100%
        );

    color: #0f172a;

    isolation: isolate;
}


/* =========================================================
   FUNDO DECORATIVO
========================================================= */

.ironstore-meios-envio::before {
    content: "";

    position: absolute;

    z-index: -1;

    width: 700px;
    height: 700px;

    top: -430px;
    right: -330px;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(15, 23, 42, 0.055),
            rgba(15, 23, 42, 0.018) 38%,
            transparent 70%
        );

    pointer-events: none;
}


.ironstore-meios-envio::after {
    content: "";

    position: absolute;

    z-index: -1;

    width: 600px;
    height: 600px;

    left: -420px;
    bottom: -350px;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(100, 116, 139, 0.05),
            transparent 68%
        );

    pointer-events: none;
}


/* =========================================================
   CONTAINER
========================================================= */

.ironstore-meios-envio-conteudo {
    position: relative;

    width:
        min(
            1380px,
            calc(100% - 48px)
        );

    margin: 0 auto;
}


/* =========================================================
   CABEÇALHO
========================================================= */

.ironstore-meios-envio-cabecalho {
    width: 100%;
    max-width: 850px;

    margin-bottom: 48px;
}


/* =========================================================
   EYEBROW
========================================================= */

.ironstore-meios-envio-eyebrow {
    display: flex;

    align-items: center;

    gap: 11px;

    margin-bottom: 17px;

    color: #64748b;

    font-size: 10px;
    font-weight: 800;

    line-height: 1;

    letter-spacing: 1.9px;
}


.ironstore-meios-envio-eyebrow-linha {
    display: block;

    width: 28px;
    height: 1px;

    background:
        linear-gradient(
            90deg,
            #0f172a,
            #94a3b8
        );
}


/* =========================================================
   TÍTULO PRINCIPAL
========================================================= */

.ironstore-meios-envio-cabecalho h2 {
    max-width: 820px;

    margin:
        0
        0
        20px;

    color: #0f172a;

    font-size:
        clamp(
            40px,
            5vw,
            66px
        );

    font-weight: 780;

    line-height: 0.98;

    letter-spacing: -3.4px;
}


.ironstore-meios-envio-cabecalho h2 span {
    color: #64748b;

    font-weight: 540;
}


/* =========================================================
   DESCRIÇÃO PRINCIPAL
========================================================= */

.ironstore-meios-envio-cabecalho > p {
    max-width: 720px;

    margin: 0;

    color: #64748b;

    font-size: 14px;
    font-weight: 430;

    line-height: 1.8;

    letter-spacing: -0.08px;
}


/* =========================================================
   PAINEL PRINCIPAL
========================================================= */

.ironstore-meios-envio-painel {
    position: relative;

    width: 100%;

    margin-bottom: 70px;

    overflow: hidden;

    border:
        1px solid
        rgba(255, 255, 255, 0.08);

    border-radius: 28px;

    background:
        linear-gradient(
            135deg,
            #080e19 0%,
            #0f172a 43%,
            #172033 100%
        );

    box-shadow:
        0 30px 80px
        rgba(15, 23, 42, 0.16);

    isolation: isolate;
}


/* =========================================================
   LUZ PAINEL
========================================================= */

.ironstore-meios-envio-painel::before {
    content: "";

    position: absolute;

    z-index: -1;

    width: 550px;
    height: 550px;

    top: -370px;
    right: -110px;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(255, 255, 255, 0.14),
            rgba(255, 255, 255, 0.035) 40%,
            transparent 70%
        );

    pointer-events: none;
}


.ironstore-meios-envio-painel::after {
    content: "";

    position: absolute;

    z-index: -1;

    width: 420px;
    height: 420px;

    left: -300px;
    bottom: -320px;

    border:
        1px solid
        rgba(255, 255, 255, 0.04);

    border-radius: 50%;

    pointer-events: none;
}


/* =========================================================
   PAINEL CONTEÚDO
========================================================= */

.ironstore-meios-envio-painel-conteudo {
    position: relative;
    z-index: 2;

    display: flex;

    align-items: center;

    gap: 36px;

    min-height: 255px;

    padding:
        50px
        52px
        46px;
}


/* =========================================================
   ÍCONE PRINCIPAL
========================================================= */

.ironstore-meios-envio-painel-icone {
    position: relative;

    flex:
        0
        0
        104px;

    width: 104px;
    height: 104px;

    display: flex;

    align-items: center;
    justify-content: center;

    border:
        1px solid
        rgba(255, 255, 255, 0.14);

    border-radius: 27px;

    background:
        linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.095),
            rgba(255, 255, 255, 0.035)
        );

    color: #ffffff;

    box-shadow:
        inset
        0
        1px
        0
        rgba(255, 255, 255, 0.1),
        0
        15px
        35px
        rgba(0, 0, 0, 0.13);

    backdrop-filter:
        blur(15px);

    -webkit-backdrop-filter:
        blur(15px);
}


.ironstore-meios-envio-painel-icone::before {
    content: "";

    position: absolute;

    inset: 8px;

    border:
        1px solid
        rgba(255, 255, 255, 0.05);

    border-radius: 20px;

    pointer-events: none;
}


.ironstore-meios-envio-painel-icone svg {
    position: relative;
    z-index: 1;

    width: 49px;
    height: 49px;
}


/* =========================================================
   TEXTO PAINEL
========================================================= */

.ironstore-meios-envio-painel-texto {
    flex: 1;

    min-width: 0;

    max-width: 800px;
}


.ironstore-meios-envio-painel-label {
    display: block;

    margin-bottom: 11px;

    color:
        rgba(255, 255, 255, 0.45);

    font-size: 9px;
    font-weight: 800;

    line-height: 1;

    letter-spacing: 1.9px;
}


.ironstore-meios-envio-painel-texto h3 {
    max-width: 690px;

    margin:
        0
        0
        14px;

    color: #ffffff;

    font-size:
        clamp(
            29px,
            3.4vw,
            43px
        );

    font-weight: 730;

    line-height: 1.04;

    letter-spacing: -1.6px;
}


.ironstore-meios-envio-painel-texto p {
    max-width: 720px;

    margin: 0;

    color:
        rgba(255, 255, 255, 0.61);

    font-size: 13px;
    font-weight: 420;

    line-height: 1.78;
}


/* =========================================================
   RESUMO PAINEL
========================================================= */

.ironstore-meios-envio-painel-resumo {
    position: relative;
    z-index: 2;

    display: grid;

    grid-template-columns:
        1fr
        1px
        1fr
        1px
        1fr;

    align-items: center;

    border-top:
        1px solid
        rgba(255, 255, 255, 0.075);

    background:
        rgba(0, 0, 0, 0.12);
}


/* =========================================================
   ITEM RESUMO
========================================================= */

.ironstore-meios-envio-resumo-item {
    display: flex;

    align-items: center;

    gap: 15px;

    min-width: 0;

    padding:
        23px
        30px;
}


.ironstore-meios-envio-resumo-item > span {
    flex: 0 0 auto;

    color:
        rgba(255, 255, 255, 0.22);

    font-size: 11px;
    font-weight: 850;

    letter-spacing: 1px;
}


.ironstore-meios-envio-resumo-item > div {
    min-width: 0;
}


.ironstore-meios-envio-resumo-item small {
    display: block;

    margin-bottom: 5px;

    color:
        rgba(255, 255, 255, 0.34);

    font-size: 7px;
    font-weight: 800;

    line-height: 1;

    letter-spacing: 1.4px;
}


.ironstore-meios-envio-resumo-item strong {
    display: block;

    overflow: hidden;

    color:
        rgba(255, 255, 255, 0.88);

    font-size: 11px;
    font-weight: 650;

    line-height: 1.3;

    text-overflow: ellipsis;
    white-space: nowrap;
}


/* =========================================================
   DIVISOR
========================================================= */

.ironstore-meios-envio-resumo-divisor {
    width: 1px;
    height: 34px;

    background:
        rgba(255, 255, 255, 0.08);
}


/* =========================================================
   CABEÇALHO DO PROCESSO
========================================================= */

.ironstore-meios-envio-processo-cabecalho {
    display: flex;

    align-items: flex-end;
    justify-content: space-between;

    gap: 40px;

    margin-bottom: 25px;
}


.ironstore-meios-envio-processo-cabecalho > div {
    min-width: 0;
}


.ironstore-meios-envio-processo-cabecalho span {
    display: block;

    margin-bottom: 9px;

    color: #94a3b8;

    font-size: 9px;
    font-weight: 800;

    line-height: 1;

    letter-spacing: 1.8px;
}


.ironstore-meios-envio-processo-cabecalho h3 {
    margin: 0;

    color: #0f172a;

    font-size:
        clamp(
            27px,
            3vw,
            38px
        );

    font-weight: 750;

    line-height: 1.06;

    letter-spacing: -1.25px;
}


.ironstore-meios-envio-processo-cabecalho > p {
    max-width: 400px;

    margin: 0;

    color: #7c8798;

    font-size: 11px;

    line-height: 1.7;

    text-align: right;
}


/* =========================================================
   GRID ETAPAS
========================================================= */

.ironstore-meios-envio-etapas {
    display: grid;

    grid-template-columns:
        repeat(
            3,
            minmax(0, 1fr)
        );

    gap: 13px;
}


/* =========================================================
   CARD ETAPA
========================================================= */

.ironstore-meios-envio-etapa {
    position: relative;

    min-width: 0;
    min-height: 240px;

    padding: 27px;

    overflow: hidden;

    border:
        1px solid
        #e3e8ef;

    border-radius: 18px;

    background:
        linear-gradient(
            145deg,
            #ffffff,
            #fcfdff
        );

    box-shadow:
        0
        2px
        5px
        rgba(15, 23, 42, 0.018);

    transition:
        transform
        280ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        ),
        border-color
        240ms ease,
        box-shadow
        280ms ease;
}


/* =========================================================
   DETALHE CARD
========================================================= */

.ironstore-meios-envio-etapa::before {
    content: "";

    position: absolute;

    top: 0;
    left: 27px;
    right: 27px;

    height: 1px;

    opacity: 0;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(15, 23, 42, 0.16),
            transparent
        );

    transition:
        opacity
        240ms ease;
}


.ironstore-meios-envio-etapa::after {
    content: "";

    position: absolute;

    width: 170px;
    height: 170px;

    right: -125px;
    bottom: -125px;

    border:
        1px solid
        rgba(15, 23, 42, 0.05);

    border-radius: 50%;

    transition:
        transform
        400ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        );
}


/* =========================================================
   HOVER ETAPA
========================================================= */

@media (hover: hover) {

    .ironstore-meios-envio-etapa:hover {
        transform:
            translateY(-6px);

        border-color:
            #cdd6e1;

        box-shadow:
            0
            22px
            50px
            rgba(15, 23, 42, 0.075);
    }


    .ironstore-meios-envio-etapa:hover::before {
        opacity: 1;
    }


    .ironstore-meios-envio-etapa:hover::after {
        transform:
            scale(1.35);
    }


    .ironstore-meios-envio-etapa:hover
    .ironstore-meios-envio-etapa-icone {
        transform:
            translateY(-2px);

        border-color:
            #cbd5e1;

        background: #ffffff;
    }

}


/* =========================================================
   TOPO ETAPA
========================================================= */

.ironstore-meios-envio-etapa-topo {
    position: relative;
    z-index: 2;

    display: flex;

    align-items: center;
    justify-content: space-between;

    margin-bottom: 43px;
}


/* =========================================================
   NÚMERO
========================================================= */

.ironstore-meios-envio-etapa-numero {
    color: #94a3b8;

    font-size: 9px;
    font-weight: 850;

    line-height: 1;

    letter-spacing: 1.3px;
}


/* =========================================================
   ÍCONE ETAPA
========================================================= */

.ironstore-meios-envio-etapa-icone {
    width: 42px;
    height: 42px;

    display: flex;

    align-items: center;
    justify-content: center;

    border:
        1px solid
        #e2e8f0;

    border-radius: 11px;

    background: #f8fafc;

    color: #475569;

    transition:
        transform
        250ms ease,
        border-color
        250ms ease,
        background-color
        250ms ease;
}


.ironstore-meios-envio-etapa-icone svg {
    width: 20px;
    height: 20px;
}


/* =========================================================
   TEXTO ETAPA
========================================================= */

.ironstore-meios-envio-etapa-texto {
    position: relative;
    z-index: 2;
}


.ironstore-meios-envio-etapa-texto h4 {
    margin:
        0
        0
        10px;

    color: #172033;

    font-size: 16px;
    font-weight: 730;

    line-height: 1.25;

    letter-spacing: -0.4px;
}


.ironstore-meios-envio-etapa-texto p {
    max-width: 320px;

    margin: 0;

    color: #778396;

    font-size: 11.5px;
    font-weight: 420;

    line-height: 1.72;
}


/* =========================================================
   TRANSPARÊNCIA
========================================================= */

.ironstore-meios-envio-transparencia {
    position: relative;

    display: grid;

    grid-template-columns:
        auto
        minmax(0, 1fr)
        auto;

    align-items: center;

    gap: 25px;

    margin-top: 48px;

    padding:
        31px
        33px;

    overflow: hidden;

    border:
        1px solid
        #e1e7ee;

    border-radius: 19px;

    background:
        linear-gradient(
            135deg,
            #ffffff 0%,
            #f8fafc 100%
        );

    box-shadow:
        0
        7px
        24px
        rgba(15, 23, 42, 0.025);
}


.ironstore-meios-envio-transparencia::after {
    content: "";

    position: absolute;

    width: 180px;
    height: 180px;

    top: -120px;
    right: -90px;

    border:
        1px solid
        rgba(15, 23, 42, 0.04);

    border-radius: 50%;

    pointer-events: none;
}


/* =========================================================
   ÍCONE TRANSPARÊNCIA
========================================================= */

.ironstore-meios-envio-transparencia-icone {
    position: relative;
    z-index: 1;

    width: 58px;
    height: 58px;

    display: flex;

    align-items: center;
    justify-content: center;

    border:
        1px solid
        #dce3eb;

    border-radius: 15px;

    background: #ffffff;

    color: #334155;

    box-shadow:
        0
        7px
        18px
        rgba(15, 23, 42, 0.045);
}


.ironstore-meios-envio-transparencia-icone svg {
    width: 27px;
    height: 27px;
}


/* =========================================================
   TEXTO TRANSPARÊNCIA
========================================================= */

.ironstore-meios-envio-transparencia-texto {
    position: relative;
    z-index: 1;

    max-width: 650px;
}


.ironstore-meios-envio-transparencia-texto > span {
    display: block;

    margin-bottom: 7px;

    color: #94a3b8;

    font-size: 8px;
    font-weight: 850;

    line-height: 1;

    letter-spacing: 1.5px;
}


.ironstore-meios-envio-transparencia-texto h3 {
    margin:
        0
        0
        8px;

    color: #172033;

    font-size: 19px;
    font-weight: 740;

    line-height: 1.2;

    letter-spacing: -0.5px;
}


.ironstore-meios-envio-transparencia-texto p {
    margin: 0;

    color: #778396;

    font-size: 11px;

    line-height: 1.68;
}


/* =========================================================
   SELOS
========================================================= */

.ironstore-meios-envio-transparencia-selos {
    position: relative;
    z-index: 1;

    display: flex;

    align-items: center;
    justify-content: flex-end;

    flex-wrap: wrap;

    gap: 7px;

    max-width: 330px;
}


.ironstore-meios-envio-transparencia-selos span {
    position: relative;

    padding:
        8px
        11px
        8px
        25px;

    border:
        1px solid
        #e2e8f0;

    border-radius: 8px;

    background: #ffffff;

    color: #64748b;

    font-size: 8px;
    font-weight: 700;

    line-height: 1;

    white-space: nowrap;
}


.ironstore-meios-envio-transparencia-selos span::before {
    content: "";

    position: absolute;

    left: 11px;
    top: 50%;

    width: 6px;
    height: 6px;

    border-radius: 50%;

    background: #22c55e;

    transform:
        translateY(-50%);

    box-shadow:
        0
        0
        0
        3px
        rgba(34, 197, 94, 0.09);
}


/* =========================================================
   AVISO FINAL
========================================================= */

.ironstore-meios-envio-aviso {
    display: flex;

    align-items: flex-start;

    gap: 13px;

    width: 100%;

    margin-top: 18px;

    padding:
        17px
        20px;

    border:
        1px solid
        #e5eaf0;

    border-radius: 12px;

    background:
        rgba(255, 255, 255, 0.78);
}


/* =========================================================
   ÍCONE AVISO
========================================================= */

.ironstore-meios-envio-aviso-icone {
    flex: 0 0 auto;

    width: 21px;
    height: 21px;

    display: flex;

    align-items: center;
    justify-content: center;

    margin-top: 1px;

    border:
        1px solid
        #d9e0e8;

    border-radius: 50%;

    background: #ffffff;

    color: #64748b;

    font-family:
        Georgia,
        serif;

    font-size: 11px;
    font-weight: 700;
}


/* =========================================================
   TEXTO AVISO
========================================================= */

.ironstore-meios-envio-aviso p {
    margin: 0;

    color: #778396;

    font-size: 10.5px;
    font-weight: 420;

    line-height: 1.7;
}


.ironstore-meios-envio-aviso strong {
    color: #475569;

    font-weight: 750;
}


/* =========================================================
   ACESSIBILIDADE
========================================================= */

@media (
    prefers-reduced-motion:
    reduce
) {

    .ironstore-meios-envio-etapa,
    .ironstore-meios-envio-etapa::after,
    .ironstore-meios-envio-etapa-icone {
        transition: none;
    }

}


/* =========================================================
   DESKTOP MÉDIO
========================================================= */

@media (max-width: 1100px) {

    .ironstore-meios-envio {
        padding:
            82px
            0
            88px;
    }


    .ironstore-meios-envio-painel-conteudo {
        padding:
            42px;
    }


    .ironstore-meios-envio-etapas {
        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            );
    }


    .ironstore-meios-envio-etapa {
        min-height: 220px;
    }


    .ironstore-meios-envio-transparencia {
        grid-template-columns:
            auto
            1fr;
    }


    .ironstore-meios-envio-transparencia-selos {
        grid-column:
            1
            /
            -1;

        max-width: none;

        justify-content:
            flex-start;

        padding-left: 83px;
    }

}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 800px) {

    .ironstore-meios-envio {
        padding:
            70px
            0
            75px;
    }


    .ironstore-meios-envio-conteudo {
        width:
            calc(100% - 32px);
    }


    .ironstore-meios-envio-cabecalho {
        margin-bottom: 35px;
    }


    .ironstore-meios-envio-cabecalho h2 {
        font-size: 46px;

        letter-spacing: -2.3px;
    }


    .ironstore-meios-envio-cabecalho > p {
        max-width: 620px;

        font-size: 13px;
    }


    .ironstore-meios-envio-painel {
        margin-bottom: 55px;

        border-radius: 22px;
    }


    .ironstore-meios-envio-painel-conteudo {
        padding:
            35px;

        gap: 27px;
    }


    .ironstore-meios-envio-painel-icone {
        flex-basis: 82px;

        width: 82px;
        height: 82px;

        border-radius: 21px;
    }


    .ironstore-meios-envio-painel-icone svg {
        width: 39px;
        height: 39px;
    }


    .ironstore-meios-envio-painel-texto h3 {
        font-size: 31px;
    }


    .ironstore-meios-envio-painel-resumo {
        grid-template-columns: 1fr;
    }


    .ironstore-meios-envio-resumo-divisor {
        width: auto;
        height: 1px;

        margin:
            0
            30px;

        background:
            rgba(255, 255, 255, 0.07);
    }


    .ironstore-meios-envio-processo-cabecalho {
        display: block;
    }


    .ironstore-meios-envio-processo-cabecalho > p {
        max-width: 500px;

        margin-top: 11px;

        text-align: left;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

    .ironstore-meios-envio {
        padding:
            52px
            0
            58px;
    }


    .ironstore-meios-envio-conteudo {
        width:
            calc(100% - 24px);
    }


    /* =====================================================
       CABEÇALHO MOBILE
    ===================================================== */

    .ironstore-meios-envio-cabecalho {
        margin-bottom: 28px;
    }


    .ironstore-meios-envio-eyebrow {
        margin-bottom: 12px;

        font-size: 8px;

        letter-spacing: 1.5px;
    }


    .ironstore-meios-envio-eyebrow-linha {
        width: 20px;
    }


    .ironstore-meios-envio-cabecalho h2 {
        margin-bottom: 15px;

        font-size: 36px;

        line-height: 1;

        letter-spacing: -1.8px;
    }


    .ironstore-meios-envio-cabecalho > p {
        font-size: 11.5px;

        line-height: 1.72;
    }


    /* =====================================================
       PAINEL MOBILE
    ===================================================== */

    .ironstore-meios-envio-painel {
        margin-bottom: 43px;

        border-radius: 19px;
    }


    .ironstore-meios-envio-painel-conteudo {
        flex-direction: column;

        align-items: flex-start;

        gap: 23px;

        min-height: 0;

        padding:
            28px
            23px
            30px;
    }


    .ironstore-meios-envio-painel-icone {
        flex-basis: auto;

        width: 66px;
        height: 66px;

        border-radius: 17px;
    }


    .ironstore-meios-envio-painel-icone::before {
        inset: 5px;

        border-radius: 13px;
    }


    .ironstore-meios-envio-painel-icone svg {
        width: 32px;
        height: 32px;
    }


    .ironstore-meios-envio-painel-label {
        font-size: 7.5px;

        letter-spacing: 1.5px;
    }


    .ironstore-meios-envio-painel-texto h3 {
        margin-bottom: 11px;

        font-size: 25px;

        line-height: 1.08;

        letter-spacing: -0.9px;
    }


    .ironstore-meios-envio-painel-texto p {
        font-size: 11px;

        line-height: 1.7;
    }


    .ironstore-meios-envio-resumo-item {
        padding:
            18px
            22px;
    }


    .ironstore-meios-envio-resumo-divisor {
        margin:
            0
            22px;
    }


    /* =====================================================
       PROCESSO MOBILE
    ===================================================== */

    .ironstore-meios-envio-processo-cabecalho {
        margin-bottom: 19px;
    }


    .ironstore-meios-envio-processo-cabecalho span {
        font-size: 8px;
    }


    .ironstore-meios-envio-processo-cabecalho h3 {
        font-size: 27px;

        letter-spacing: -0.8px;
    }


    .ironstore-meios-envio-processo-cabecalho > p {
        font-size: 10.5px;
    }


    /* =====================================================
       ETAPAS MOBILE
    ===================================================== */

    .ironstore-meios-envio-etapas {
        grid-template-columns: 1fr;

        gap: 8px;
    }


    .ironstore-meios-envio-etapa {
        min-height: 0;

        padding:
            21px
            20px
            22px;

        border-radius: 14px;
    }


    .ironstore-meios-envio-etapa-topo {
        margin-bottom: 27px;
    }


    .ironstore-meios-envio-etapa-icone {
        width: 38px;
        height: 38px;

        border-radius: 10px;
    }


    .ironstore-meios-envio-etapa-icone svg {
        width: 18px;
        height: 18px;
    }


    .ironstore-meios-envio-etapa-texto h4 {
        margin-bottom: 7px;

        font-size: 14px;
    }


    .ironstore-meios-envio-etapa-texto p {
        max-width: 470px;

        font-size: 10.5px;

        line-height: 1.68;
    }


    /* =====================================================
       TRANSPARÊNCIA MOBILE
    ===================================================== */

    .ironstore-meios-envio-transparencia {
        display: flex;

        flex-direction: column;

        align-items: flex-start;

        gap: 17px;

        margin-top: 31px;

        padding:
            22px;

        border-radius: 14px;
    }


    .ironstore-meios-envio-transparencia-icone {
        width: 47px;
        height: 47px;

        border-radius: 12px;
    }


    .ironstore-meios-envio-transparencia-icone svg {
        width: 22px;
        height: 22px;
    }


    .ironstore-meios-envio-transparencia-texto h3 {
        font-size: 16px;
    }


    .ironstore-meios-envio-transparencia-texto p {
        font-size: 10.5px;
    }


    .ironstore-meios-envio-transparencia-selos {
        max-width: 100%;

        padding-left: 0;

        justify-content:
            flex-start;
    }


    .ironstore-meios-envio-transparencia-selos span {
        padding:
            7px
            9px
            7px
            22px;

        font-size: 7.5px;
    }


    .ironstore-meios-envio-transparencia-selos span::before {
        left: 9px;

        width: 5px;
        height: 5px;
    }


    /* =====================================================
       AVISO MOBILE
    ===================================================== */

    .ironstore-meios-envio-aviso {
        gap: 10px;

        margin-top: 13px;

        padding:
            14px
            15px;

        border-radius: 10px;
    }


    .ironstore-meios-envio-aviso-icone {
        width: 18px;
        height: 18px;

        font-size: 10px;
    }


    .ironstore-meios-envio-aviso p {
        font-size: 9.5px;

        line-height: 1.65;
    }

}


/* =========================================================
   MOBILE PEQUENO
========================================================= */

@media (max-width: 390px) {

    .ironstore-meios-envio {
        padding:
            46px
            0
            50px;
    }


    .ironstore-meios-envio-conteudo {
        width:
            calc(100% - 20px);
    }


    .ironstore-meios-envio-cabecalho h2 {
        font-size: 32px;

        letter-spacing: -1.4px;
    }


    .ironstore-meios-envio-painel-conteudo {
        padding:
            24px
            20px
            26px;
    }


    .ironstore-meios-envio-painel-texto h3 {
        font-size: 22px;
    }


    .ironstore-meios-envio-processo-cabecalho h3 {
        font-size: 24px;
    }


    .ironstore-meios-envio-etapa {
        padding:
            19px
            18px
            20px;
    }

}


/* =========================================================
   TELAS GRANDES
========================================================= */

@media (min-width: 1600px) {

    .ironstore-meios-envio-conteudo {
        width:
            min(
                1440px,
                calc(100% - 80px)
            );
    }


    .ironstore-meios-envio {
        padding:
            112px
            0
            120px;
    }

}

`;

export default classicoMeiosEnvio;