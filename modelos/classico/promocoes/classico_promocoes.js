const classicoPromocoes = `

/* =========================================================
   IRONSTORE
   PROMOÇÕES
   CLÁSSICO
========================================================= */

.ironstore-promocoes {
    position: relative;

    width: 100%;

    padding:
        34px
        0
        48px;

    background:
        linear-gradient(
            180deg,
            #ffffff 0%,
            #fafafa 100%
        );

    overflow: hidden;
}

.ironstore-promocoes *,
.ironstore-promocoes *::before,
.ironstore-promocoes *::after {
    box-sizing: border-box;
}

.ironstore-promocoes-conteudo {
    position: relative;
    z-index: 1;

    width: min(
        100%,
        1480px
    );

    margin:
        0
        auto;

    padding:
        0
        32px;
}


/* =========================================================
   TOPO
========================================================= */

.ironstore-promocoes-topo {
    position: relative;

    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 28px;

    width: 100%;

    padding:
        24px
        26px;

    border:
        1px
        solid
        #e5e7eb;

    border-radius: 18px;

    background:
        #ffffff;

    box-shadow:
        0 8px 30px
        rgba(
            15,
            23,
            42,
            0.045
        );

    overflow: hidden;
}


/* =========================================================
   DETALHE LATERAL
========================================================= */

.ironstore-promocoes-topo::before {
    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 4px;
    height: 100%;

    background:
        linear-gradient(
            180deg,
            #ef4444,
            #b91c1c
        );
}


/* =========================================================
   ESQUERDA
========================================================= */

.ironstore-promocoes-topo-esquerda {
    display: flex;

    align-items: center;

    gap: 17px;

    min-width: 0;
}


/* =========================================================
   ÍCONE
========================================================= */

.ironstore-promocoes-icone {
    display: flex;

    align-items: center;
    justify-content: center;

    flex:
        0
        0
        auto;

    width: 48px;
    height: 48px;

    border:
        1px
        solid
        #fee2e2;

    border-radius: 14px;

    color:
        #dc2626;

    background:
        #fff7f7;
}

.ironstore-promocoes-icone svg {
    width: 23px;
    height: 23px;
}


/* =========================================================
   TÍTULOS
========================================================= */

.ironstore-promocoes-titulos {
    min-width: 0;
}

.ironstore-promocoes-subtitulo {
    display: block;

    margin-bottom: 4px;

    font-size: 11px;
    font-weight: 800;
    line-height: 1.2;

    letter-spacing: 0.09em;

    text-transform: uppercase;

    color:
        #dc2626;
}

.ironstore-promocoes-titulos h2 {
    margin: 0;

    font-size:
        clamp(
            24px,
            2.2vw,
            32px
        );

    font-weight: 800;

    line-height: 1.08;

    letter-spacing: -0.035em;

    color:
        #0f172a;
}

.ironstore-promocoes-titulos p {
    margin:
        6px
        0
        0;

    font-size: 13px;
    font-weight: 400;

    line-height: 1.45;

    color:
        #64748b;
}


/* =========================================================
   INDICADOR
========================================================= */

.ironstore-promocoes-indicador {
    display: flex;

    align-items: center;

    gap: 10px;

    flex:
        0
        0
        auto;

    padding:
        10px
        14px;

    border:
        1px
        solid
        #e5e7eb;

    border-radius: 12px;

    background:
        #f8fafc;
}

.ironstore-promocoes-indicador-ponto {
    display: block;

    width: 8px;
    height: 8px;

    flex:
        0
        0
        auto;

    border-radius: 50%;

    background:
        #dc2626;

    box-shadow:
        0 0 0 4px
        rgba(
            220,
            38,
            38,
            0.08
        );
}

.ironstore-promocoes-indicador > div {
    display: flex;

    align-items: baseline;

    gap: 5px;
}

.ironstore-promocoes-indicador strong {
    font-size: 15px;
    font-weight: 800;

    color:
        #0f172a;
}

.ironstore-promocoes-indicador span:not(
    .ironstore-promocoes-indicador-ponto
) {
    font-size: 11px;
    font-weight: 600;

    color:
        #64748b;
}


/* =========================================================
   DIVISOR
========================================================= */

.ironstore-promocoes-divisor {
    display: flex;

    align-items: center;

    gap: 14px;

    width: 100%;

    margin:
        23px
        0
        16px;
}

.ironstore-promocoes-divisor span {
    flex:
        0
        0
        auto;

    font-size: 11px;
    font-weight: 700;

    letter-spacing: 0.025em;

    color:
        #64748b;
}

.ironstore-promocoes-divisor div {
    width: 100%;
    height: 1px;

    background:
        #e5e7eb;
}


/* =========================================================
   GRID
========================================================= */

.ironstore-promocoes-grid {
    display: grid;

    grid-template-columns:
        repeat(
            5,
            minmax(
                0,
                1fr
            )
        );

    gap: 18px;

    width: 100%;

    align-items: stretch;
}


/* =========================================================
   WRAPPER DO PRODUTO
========================================================= */

.ironstore-promocoes-produto {
    position: relative;

    min-width: 0;

    width: 100%;
}


/* =========================================================
   SELO
========================================================= */

.ironstore-promocoes-selo {
    position: absolute;

    z-index: 10;

    top: 10px;
    left: 10px;

    display: inline-flex;

    align-items: center;
    justify-content: center;

    min-height: 25px;

    padding:
        0
        9px;

    border-radius: 7px;

    background:
        #dc2626;

    color:
        #ffffff;

    font-size: 9px;
    font-weight: 800;

    line-height: 1;

    letter-spacing: 0.06em;

    text-transform: uppercase;

    box-shadow:
        0 4px 12px
        rgba(
            220,
            38,
            38,
            0.18
        );

    pointer-events: none;
}


/* =========================================================
   DESKTOP MENOR
========================================================= */

@media (
    max-width: 1280px
) {

    .ironstore-promocoes-conteudo {
        padding:
            0
            26px;
    }

    .ironstore-promocoes-grid {
        grid-template-columns:
            repeat(
                4,
                minmax(
                    0,
                    1fr
                )
            );

        gap: 16px;
    }

}


/* =========================================================
   TABLET
========================================================= */

@media (
    max-width: 980px
) {

    .ironstore-promocoes {
        padding:
            30px
            0
            40px;
    }

    .ironstore-promocoes-conteudo {
        padding:
            0
            20px;
    }

    .ironstore-promocoes-topo {
        padding:
            21px
            22px;
    }

    .ironstore-promocoes-grid {
        grid-template-columns:
            repeat(
                3,
                minmax(
                    0,
                    1fr
                )
            );

        gap: 15px;
    }

}


/* =========================================================
   MOBILE / TABLET PEQUENO
========================================================= */

@media (
    max-width: 720px
) {

    .ironstore-promocoes {
        padding:
            22px
            0
            34px;
    }

    .ironstore-promocoes-conteudo {
        padding:
            0
            14px;
    }

    .ironstore-promocoes-topo {
        align-items: flex-start;

        padding:
            18px
            17px;

        border-radius: 15px;
    }

    .ironstore-promocoes-topo-esquerda {
        gap: 13px;
    }

    .ironstore-promocoes-icone {
        width: 42px;
        height: 42px;

        border-radius: 12px;
    }

    .ironstore-promocoes-icone svg {
        width: 20px;
        height: 20px;
    }

    .ironstore-promocoes-titulos h2 {
        font-size: 25px;
    }

    .ironstore-promocoes-titulos p {
        max-width: 360px;

        font-size: 12px;
    }

    .ironstore-promocoes-indicador {
        padding:
            8px
            10px;
    }

    .ironstore-promocoes-indicador span:not(
        .ironstore-promocoes-indicador-ponto
    ) {
        display: none;
    }

    .ironstore-promocoes-divisor {
        margin:
            19px
            0
            13px;
    }

    .ironstore-promocoes-grid {
        grid-template-columns:
            repeat(
                2,
                minmax(
                    0,
                    1fr
                )
            );

        gap:
            12px
            10px;
    }

}


/* =========================================================
   CELULAR
========================================================= */

@media (
    max-width: 480px
) {

    .ironstore-promocoes {
        padding:
            18px
            0
            28px;
    }

    .ironstore-promocoes-conteudo {
        padding:
            0
            10px;
    }

    .ironstore-promocoes-topo {
        gap: 10px;

        padding:
            15px
            13px;

        border-radius: 13px;
    }

    .ironstore-promocoes-topo::before {
        width: 3px;
    }

    .ironstore-promocoes-topo-esquerda {
        gap: 10px;
    }

    .ironstore-promocoes-icone {
        width: 36px;
        height: 36px;

        border-radius: 10px;
    }

    .ironstore-promocoes-icone svg {
        width: 18px;
        height: 18px;
    }

    .ironstore-promocoes-subtitulo {
        margin-bottom: 3px;

        font-size: 9px;
    }

    .ironstore-promocoes-titulos h2 {
        font-size: 21px;
    }

    .ironstore-promocoes-titulos p {
        margin-top: 4px;

        font-size: 10.5px;

        line-height: 1.4;
    }

    .ironstore-promocoes-indicador {
        gap: 6px;

        padding:
            7px
            8px;

        border-radius: 9px;
    }

    .ironstore-promocoes-indicador-ponto {
        width: 6px;
        height: 6px;

        box-shadow:
            0 0 0 3px
            rgba(
                220,
                38,
                38,
                0.07
            );
    }

    .ironstore-promocoes-indicador strong {
        font-size: 12px;
    }

    .ironstore-promocoes-divisor {
        gap: 10px;

        margin:
            16px
            0
            11px;
    }

    .ironstore-promocoes-divisor span {
        font-size: 9px;
    }

    .ironstore-promocoes-grid {
        gap:
            10px
            7px;
    }

    .ironstore-promocoes-selo {
        top: 7px;
        left: 7px;

        min-height: 21px;

        padding:
            0
            7px;

        border-radius: 6px;

        font-size: 8px;
    }

}


/* =========================================================
   MUITO PEQUENO
========================================================= */

@media (
    max-width: 340px
) {

    .ironstore-promocoes-indicador {
        display: none;
    }

    .ironstore-promocoes-titulos p {
        display: none;
    }

    .ironstore-promocoes-grid {
        grid-template-columns:
            repeat(
                2,
                minmax(
                    0,
                    1fr
                )
            );
    }

}
/* =========================================================
   CARREGAR MAIS
========================================================= */

.ironstore-promocoes-carregar-area {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 100%;

    margin-top: 28px;
}

.ironstore-promocoes-carregar {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    gap: 9px;

    min-height: 43px;

    padding:
        0
        18px;

    border:
        1px
        solid
        #dfe3e8;

    border-radius: 11px;

    background:
        #ffffff;

    color:
        #0f172a;

    font-family: inherit;

    font-size: 12px;
    font-weight: 700;

    cursor: pointer;

    box-shadow:
        0 3px 10px
        rgba(
            15,
            23,
            42,
            0.04
        );

    transition:
        transform 0.18s ease,
        border-color 0.18s ease,
        box-shadow 0.18s ease,
        background 0.18s ease;
}

.ironstore-promocoes-carregar:hover {
    transform:
        translateY(-1px);

    border-color:
        #cbd5e1;

    background:
        #fafafa;

    box-shadow:
        0 6px 18px
        rgba(
            15,
            23,
            42,
            0.07
        );
}

.ironstore-promocoes-carregar:active {
    transform:
        translateY(0);
}

.ironstore-promocoes-carregar small {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    min-width: 27px;
    height: 21px;

    padding:
        0
        6px;

    border-radius: 6px;

    background:
        #f1f5f9;

    color:
        #64748b;

    font-size: 10px;
    font-weight: 800;
}

.ironstore-promocoes-carregar-icone {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;

    margin-left: 1px;

    border-radius: 50%;

    color:
        #dc2626;

    font-size: 14px;
    font-weight: 700;

    transition:
        transform 0.18s ease;
}

.ironstore-promocoes-carregar:hover
.ironstore-promocoes-carregar-icone {
    transform:
        translateY(2px);
}


/* =========================================================
   CARREGAR MAIS - MOBILE
========================================================= */

@media (
    max-width: 480px
) {

    .ironstore-promocoes-carregar-area {
        margin-top: 21px;
    }

    .ironstore-promocoes-carregar {
        min-height: 41px;

        padding:
            0
            15px;

        gap: 7px;

        border-radius: 10px;

        font-size: 11px;
    }

    .ironstore-promocoes-carregar small {
        min-width: 25px;
        height: 20px;

        font-size: 9px;
    }

}
`;

export default classicoPromocoes;