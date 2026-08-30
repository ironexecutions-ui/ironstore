const classicoFooter = `

/* =========================================================
   FOOTER CLÁSSICO
========================================================= */

.ironstore-footer-classico-principal {
    width: 100%;
    margin-top: 70px;

    background: #ffffff;

    border-top: 1px solid rgba(15, 23, 42, 0.10);

    color: #142a4a;
}


/* =========================================================
   CONTEÚDO
========================================================= */

.ironstore-footer-classico-conteudo {
    width: min(1180px, calc(100% - 48px));

    margin: 0 auto;

    padding: 52px 0 44px;

    display: grid;

    grid-template-columns:
        minmax(240px, 1.4fr)
        repeat(
            auto-fit,
            minmax(170px, 1fr)
        );

    gap: 44px;
}


/* =========================================================
   IDENTIDADE
========================================================= */

.ironstore-footer-classico-identidade {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 14px;
}


.ironstore-footer-classico-logo {
    width: 58px;
    height: 58px;

    display: block;

    object-fit: cover;

    border-radius: 15px;

    border: 1px solid rgba(15, 23, 42, 0.08);
}


.ironstore-footer-classico-nome {
    margin: 0;

    color: #0f213d;

    font-size: 21px;
    font-weight: 750;

    line-height: 1.2;

    letter-spacing: -0.4px;
}


.ironstore-footer-classico-mensagem {
    max-width: 340px;

    margin: 0;

    color: #64748b;

    font-size: 14px;
    font-weight: 400;

    line-height: 1.65;
}


/* =========================================================
   BLOCOS
========================================================= */

.ironstore-footer-classico-bloco {
    min-width: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 10px;
}


.ironstore-footer-classico-bloco h3 {
    margin: 0 0 5px;

    color: #0f213d;

    font-size: 13px;
    font-weight: 750;

    line-height: 1.3;

    text-transform: uppercase;

    letter-spacing: 0.7px;
}


.ironstore-footer-classico-bloco p {
    margin: 0;

    color: #64748b;

    font-size: 13px;

    line-height: 1.6;
}


.ironstore-footer-classico-bloco a {
    max-width: 100%;

    color: #64748b;

    font-size: 13px;
    font-weight: 500;

    line-height: 1.5;

    text-decoration: none;

    overflow-wrap: anywhere;

    transition:
        color 160ms ease,
        transform 160ms ease;
}


.ironstore-footer-classico-bloco a:hover {
    color: #142a4a;

    transform: translateX(2px);
}


/* =========================================================
   REDES
========================================================= */

.ironstore-footer-classico-redes {
    display: flex;
    flex-wrap: wrap;

    gap: 8px;
}


.ironstore-footer-classico-redes a {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    min-height: 34px;

    padding: 0 12px;

    border: 1px solid rgba(20, 42, 74, 0.14);

    border-radius: 9px;

    background: rgba(20, 42, 74, 0.025);

    color: #142a4a;

    font-size: 12px;
    font-weight: 650;
}


.ironstore-footer-classico-redes a:hover {
    background: rgba(20, 42, 74, 0.07);

    border-color: rgba(20, 42, 74, 0.25);

    transform: translateY(-1px);
}


/* =========================================================
   PARTE INFERIOR
========================================================= */

.ironstore-footer-classico-inferior {
    width: min(1180px, calc(100% - 48px));

    min-height: 62px;

    margin: 0 auto;

    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 20px;

    border-top: 1px solid rgba(15, 23, 42, 0.08);

    color: #94a3b8;

    font-size: 12px;
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 900px) {

    .ironstore-footer-classico-conteudo {
        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            );

        gap: 36px;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

    .ironstore-footer-classico-principal {
        margin-top: 48px;
    }


    .ironstore-footer-classico-conteudo {
        width: calc(100% - 36px);

        padding: 38px 0 32px;

        grid-template-columns: 1fr;

        gap: 30px;
    }


    .ironstore-footer-classico-identidade {
        gap: 12px;
    }


    .ironstore-footer-classico-logo {
        width: 52px;
        height: 52px;

        border-radius: 13px;
    }


    .ironstore-footer-classico-nome {
        font-size: 19px;
    }


    .ironstore-footer-classico-mensagem {
        max-width: 100%;

        font-size: 13px;
    }


    .ironstore-footer-classico-inferior {
        width: calc(100% - 36px);

        padding: 18px 0;

        flex-direction: column;

        align-items: flex-start;
        justify-content: center;

        gap: 5px;
    }

}
/* =========================================================
   PARTE INFERIOR
========================================================= */

.ironstore-footer-classico-inferior {
    width: min(1180px, calc(100% - 48px));

    min-height: 68px;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 24px;

    border-top: 1px solid rgba(15, 23, 42, 0.08);

    color: #94a3b8;

    font-size: 12px;
}


/* =========================================================
   DADOS DA LOJA
========================================================= */

.ironstore-footer-classico-inferior-loja {
    display: flex;
    align-items: center;

    gap: 10px;

    flex-wrap: wrap;
}


.ironstore-footer-classico-cnpj {
    position: relative;

    padding-left: 11px;
}


.ironstore-footer-classico-cnpj::before {
    content: "";

    position: absolute;

    left: 0;
    top: 50%;

    width: 3px;
    height: 3px;

    border-radius: 50%;

    background: currentColor;

    transform: translateY(-50%);
}


/* =========================================================
   IRON EXECUTIONS
========================================================= */

.ironstore-footer-classico-desenvolvimento {
    display: flex;
    align-items: center;

    gap: 4px;

    white-space: nowrap;

    color: #94a3b8;

    font-size: 11px;
}


.ironstore-footer-classico-desenvolvimento a {
    position: relative;

    color: #64748b;

    font-weight: 700;

    text-decoration: none;

    transition:
        color 160ms ease,
        opacity 160ms ease;
}


.ironstore-footer-classico-desenvolvimento a::after {
    content: "";

    position: absolute;

    left: 0;
    right: 0;
    bottom: -2px;

    height: 1px;

    background: currentColor;

    opacity: 0;

    transform: scaleX(0.7);

    transition:
        opacity 160ms ease,
        transform 160ms ease;
}


.ironstore-footer-classico-desenvolvimento a:hover {
    color: #142a4a;
}


.ironstore-footer-classico-desenvolvimento a:hover::after {
    opacity: 0.45;

    transform: scaleX(1);
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

    .ironstore-footer-classico-inferior {
        width: calc(100% - 36px);

        padding: 18px 0;

        flex-direction: column;

        align-items: flex-start;
        justify-content: center;

        gap: 11px;
    }


    .ironstore-footer-classico-inferior-loja {
        gap: 7px;
    }


    .ironstore-footer-classico-desenvolvimento {
        white-space: normal;

        flex-wrap: wrap;

        gap: 3px;

        line-height: 1.5;
    }

}
`;

export default classicoFooter;