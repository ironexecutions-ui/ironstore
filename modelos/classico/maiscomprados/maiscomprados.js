const classicoMaiscomprados = `

/* =========================================================
   MAIS COMPRADOS
========================================================= */

.ironstore-mais-comprados {
    width: 100%;
    padding: 34px 0 40px;
    overflow: hidden;
    background:
        linear-gradient(
            180deg,
            rgba(248, 250, 252, 0) 0%,
            rgba(245, 248, 252, 0.7) 50%,
            rgba(248, 250, 252, 0) 100%
        );
}

.ironstore-mais-comprados-conteudo {
    width: min(
        1380px,
        calc(100% - 40px)
    );

    margin: 0 auto;
}


/* =========================================================
   CABEÇALHO
========================================================= */

.ironstore-mais-comprados-cabecalho {
    position: relative;

    display: flex;
    align-items: center;

    gap: 14px;

    margin-bottom: 20px;
}


/* =========================================================
   ÍCONE
========================================================= */

.ironstore-mais-comprados-icone {
    width: 46px;
    height: 46px;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border:
        1px solid
        rgba(18, 61, 114, 0.12);

    border-radius: 14px;

    background:
        linear-gradient(
            145deg,
            #ffffff,
            #edf4fb
        );

    color: #123d72;

    box-shadow:
        0 5px 18px
        rgba(18, 61, 114, 0.08);
}

.ironstore-mais-comprados-icone svg {
    width: 23px;
    height: 23px;
}


/* =========================================================
   TEXTO CABEÇALHO
========================================================= */

.ironstore-mais-comprados-cabecalho-texto {
    min-width: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.ironstore-mais-comprados-cabecalho-texto > span {
    margin-bottom: 2px;

    color: #123d72;

    font-size: 9px;
    font-weight: 850;

    letter-spacing: 0.85px;
    text-transform: uppercase;
}

.ironstore-mais-comprados-cabecalho-texto h2 {
    margin: 0;

    color: #101828;

    font-size:
        clamp(
            23px,
            2.5vw,
            31px
        );

    font-weight: 850;
    line-height: 1.08;

    letter-spacing: -0.7px;
}

.ironstore-mais-comprados-cabecalho-texto p {
    margin:
        4px
        0
        0;

    color: #7b8798;

    font-size: 11px;
    font-weight: 500;
    line-height: 1.4;
}


/* =========================================================
   LINHA DECORATIVA
========================================================= */

.ironstore-mais-comprados-cabecalho::after {
    content: "";

    flex: 1;

    height: 1px;

    margin-left: 12px;

    background:
        linear-gradient(
            90deg,
            #e1e8f0,
            transparent
        );
}


/* =========================================================
   TRILHO
========================================================= */

.ironstore-mais-comprados-trilho {
    display: flex;
    align-items: stretch;

    gap: 15px;

    width: 100%;

    padding:
        5px
        3px
        17px;

    overflow-x: auto;
    overflow-y: hidden;

    scroll-behavior: smooth;
    scroll-snap-type: x proximity;

    scrollbar-width: thin;

    scrollbar-color:
        #d5dde7
        transparent;
}

.ironstore-mais-comprados-trilho::-webkit-scrollbar {
    height: 4px;
}

.ironstore-mais-comprados-trilho::-webkit-scrollbar-track {
    background: transparent;
}

.ironstore-mais-comprados-trilho::-webkit-scrollbar-thumb {
    background: #d5dde7;

    border-radius: 999px;
}


/* =========================================================
   ITEM
========================================================= */

.ironstore-mais-comprados-item {
    position: relative;

    flex:
        0
        0
        min(
            245px,
            78vw
        );

    padding-top: 39px;

    scroll-snap-align: start;

    transition:
        transform 180ms ease;
}

.ironstore-mais-comprados-item:hover {
    transform:
        translateY(-2px);
}


/* =========================================================
   RANKING
========================================================= */

.ironstore-mais-comprados-ranking {
    position: absolute;

    top: 0;
    left: 5px;
    right: 5px;

    height: 35px;

    display: flex;
    align-items: center;

    gap: 8px;

    padding: 0 9px;

    box-sizing: border-box;

    border:
        1px solid
        #e4eaf1;

    border-radius:
        10px
        10px
        6px
        6px;

    background:
        linear-gradient(
            180deg,
            #ffffff,
            #f8fafc
        );
}


/* =========================================================
   POSIÇÃO
========================================================= */

.ironstore-mais-comprados-posicao {
    width: 23px;
    height: 23px;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 7px;

    background: #edf3f9;

    color: #123d72;

    font-size: 10px;
    font-weight: 900;
}


/* =========================================================
   INFORMAÇÃO
========================================================= */

.ironstore-mais-comprados-ranking-texto {
    min-width: 0;

    display: flex;
    align-items: center;

    gap: 6px;
}

.ironstore-mais-comprados-ranking-texto strong {
    color: #344054;

    font-size: 9px;
    font-weight: 850;

    white-space: nowrap;
}

.ironstore-mais-comprados-ranking-texto span {
    position: relative;

    padding-left: 7px;

    color: #98a2b3;

    font-size: 9px;
    font-weight: 600;

    white-space: nowrap;
}

.ironstore-mais-comprados-ranking-texto span::before {
    content: "";

    position: absolute;

    left: 0;
    top: 50%;

    width: 3px;
    height: 3px;

    border-radius: 50%;

    background: #c4ccd6;

    transform:
        translateY(-50%);
}


/* =========================================================
   PRIMEIRO LUGAR
========================================================= */

.ironstore-mais-comprados-item.primeiro
.ironstore-mais-comprados-ranking {
    border-color:
        rgba(
            185,
            138,
            37,
            0.24
        );

    background:
        linear-gradient(
            135deg,
            #fffef9,
            #fff8e8
        );

    box-shadow:
        0 4px 14px
        rgba(
            166,
            116,
            17,
            0.06
        );
}

.ironstore-mais-comprados-item.primeiro
.ironstore-mais-comprados-posicao {
    background:
        linear-gradient(
            145deg,
            #f8e7ae,
            #eac767
        );

    color: #68480b;
}

.ironstore-mais-comprados-item.primeiro
.ironstore-mais-comprados-ranking-texto strong {
    color: #72500d;
}


/* =========================================================
   MOBILE
========================================================= */

@media (
    max-width: 700px
) {

    .ironstore-mais-comprados {
        padding:
            25px
            0
            31px;
    }

    .ironstore-mais-comprados-conteudo {
        width:
            calc(
                100% - 24px
            );
    }

    .ironstore-mais-comprados-cabecalho {
        gap: 11px;

        margin-bottom: 16px;
    }

    .ironstore-mais-comprados-cabecalho::after {
        display: none;
    }

    .ironstore-mais-comprados-icone {
        width: 40px;
        height: 40px;

        border-radius: 12px;
    }

    .ironstore-mais-comprados-icone svg {
        width: 20px;
        height: 20px;
    }

    .ironstore-mais-comprados-cabecalho-texto h2 {
        font-size: 23px;
    }

    .ironstore-mais-comprados-cabecalho-texto p {
        font-size: 10px;
    }

    .ironstore-mais-comprados-trilho {
        gap: 11px;

        padding-bottom: 13px;
    }

    .ironstore-mais-comprados-item {
        flex-basis:
            min(
                220px,
                76vw
            );
    }

}

`;

export default classicoMaiscomprados;