const classicoFooter = `

/* =========================================================
   FOOTER CLÁSSICO
========================================================= */

.ironstore-footer-classico-principal {
    position: relative;

    width: 100%;

    margin-top: 72px;

    background: #ffffff;

    color: #142a4a;

    border-top: 1px solid rgba(15, 23, 42, 0.08);

    box-sizing: border-box;

    overflow: hidden;
}


/* =========================================================
   LINHA SUPERIOR
========================================================= */

.ironstore-footer-classico-principal::before {
    content: "";

    position: absolute;

    top: 0;
    left: 50%;

    width: min(1180px, calc(100% - 48px));
    height: 1px;

    transform: translateX(-50%);

    background: linear-gradient(
        90deg,
        transparent,
        rgba(20, 42, 74, 0.12),
        transparent
    );

    pointer-events: none;
}


/* =========================================================
   CONTEÚDO
========================================================= */

.ironstore-footer-classico-conteudo {
    width: min(1180px, calc(100% - 48px));

    margin: 0 auto;

    padding: 56px 0 48px;

    display: grid;

    grid-template-columns:
        minmax(250px, 1.45fr)
        repeat(
            3,
            minmax(160px, 1fr)
        );

    align-items: start;

    gap: 44px;

    box-sizing: border-box;
}


/* =========================================================
   IDENTIDADE
========================================================= */

.ironstore-footer-classico-identidade {
    min-width: 0;

    display: flex;
    flex-direction: column;

    align-items: flex-start;

    gap: 12px;
}


/* =========================================================
   LOGO DA LOJA
========================================================= */

.ironstore-footer-classico-logo-container {
    width: 62px;
    height: 62px;

    display: flex;

    align-items: center;
    justify-content: center;

    padding: 4px;

    background: #ffffff;

    border: 1px solid rgba(15, 23, 42, 0.08);

    border-radius: 16px;

    box-sizing: border-box;

    box-shadow:
        0 2px 5px rgba(15, 23, 42, 0.035),
        0 10px 26px rgba(15, 23, 42, 0.055);
}


.ironstore-footer-classico-logo {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: contain;

    border-radius: 12px;
}


/* =========================================================
   NOME
========================================================= */

.ironstore-footer-classico-nome {
    max-width: 100%;

    margin: 3px 0 0;

    color: #0f213d;

    font-size: 21px;
    font-weight: 750;

    line-height: 1.2;

    letter-spacing: -0.45px;

    overflow-wrap: anywhere;
}


/* =========================================================
   MENSAGEM
========================================================= */

.ironstore-footer-classico-mensagem {
    max-width: 350px;

    margin: 0;

    color: #64748b;

    font-size: 13.5px;
    font-weight: 400;

    line-height: 1.7;
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


/* =========================================================
   TÍTULOS
========================================================= */

.ironstore-footer-classico-bloco h3 {
    position: relative;

    margin: 0 0 8px;

    padding-bottom: 10px;

    color: #0f213d;

    font-size: 12px;
    font-weight: 800;

    line-height: 1.3;

    text-transform: uppercase;

    letter-spacing: 0.85px;
}


.ironstore-footer-classico-bloco h3::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: 0;

    width: 22px;
    height: 2px;

    background: #142a4a;

    border-radius: 999px;

    opacity: 0.55;
}


/* =========================================================
   LISTAS
========================================================= */

.ironstore-footer-classico-lista {
    min-width: 0;

    display: flex;
    flex-direction: column;

    align-items: flex-start;

    gap: 8px;
}


/* =========================================================
   PARÁGRAFOS
========================================================= */

.ironstore-footer-classico-bloco p {
    max-width: 100%;

    margin: 0;

    color: #64748b;

    font-size: 13px;
    font-weight: 400;

    line-height: 1.65;

    overflow-wrap: anywhere;
}


/* =========================================================
   LINKS
========================================================= */

.ironstore-footer-classico-link {
    position: relative;

    max-width: 100%;

    display: inline-flex;

    align-items: center;

    color: #64748b;

    font-size: 13px;
    font-weight: 500;

    line-height: 1.55;

    text-decoration: none;

    overflow-wrap: anywhere;

    transition:
        color 180ms ease,
        transform 180ms ease;
}


.ironstore-footer-classico-link:hover {
    color: #142a4a;

    transform: translateX(3px);
}


/* =========================================================
   WHATSAPP
========================================================= */

.ironstore-footer-classico-whatsapp {
    font-weight: 650;
}


/* =========================================================
   CEP
========================================================= */

.ironstore-footer-classico-cep {
    color: #94a3b8 !important;

    font-size: 12px !important;
}


/* =========================================================
   REDES SOCIAIS
========================================================= */

.ironstore-footer-classico-bloco-redes {
    min-width: 0;
}


.ironstore-footer-classico-redes {
    display: flex;

    align-items: center;

    flex-wrap: wrap;

    gap: 11px;
}


/* =========================================================
   BOTÃO EXTERNO
========================================================= */

.ironstore-footer-classico-rede-link {
    position: relative;

    width: 46px;
    height: 46px;

    flex: 0 0 46px;

    display: flex;

    align-items: center;
    justify-content: center;

    padding: 0;

    background: #ffffff;

    border: 1px solid rgba(15, 23, 42, 0.09);

    border-radius: 14px;

    box-sizing: border-box;

    text-decoration: none;

    box-shadow:
        0 2px 5px rgba(15, 23, 42, 0.035),
        0 7px 18px rgba(15, 23, 42, 0.045);

    transition:
        transform 180ms ease,
        box-shadow 180ms ease,
        border-color 180ms ease,
        background-color 180ms ease;
}


.ironstore-footer-classico-rede-link:hover {
    transform: translateY(-3px);

    border-color: rgba(15, 23, 42, 0.17);

    box-shadow:
        0 4px 8px rgba(15, 23, 42, 0.05),
        0 12px 26px rgba(15, 23, 42, 0.09);
}


.ironstore-footer-classico-rede-link:active {
    transform: translateY(-1px) scale(0.96);
}


.ironstore-footer-classico-rede-link:focus-visible {
    outline: 2px solid #142a4a;

    outline-offset: 3px;
}


/* =========================================================
   CONTAINER DO LOGO
========================================================= */

.ironstore-footer-classico-rede-icone {
    position: relative;

    width: 30px;
    height: 30px;

    display: flex;

    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    overflow: visible;
}


/* =========================================================
   IMAGEM PADRÃO
========================================================= */

.ironstore-footer-classico-rede-imagem {
    display: block;

    width: auto;
    height: auto;

    max-width: 100%;
    max-height: 100%;

    object-fit: contain;

    object-position: center;

    user-select: none;

    pointer-events: none;

    transition:
        transform 180ms ease,
        filter 180ms ease;
}


/* =========================================================
   INSTAGRAM

   Formato quadrado
========================================================= */

.ironstore-footer-classico-rede-instagram
.ironstore-footer-classico-rede-icone {
    width: 27px;
    height: 27px;
}


.ironstore-footer-classico-rede-instagram
.ironstore-footer-classico-rede-imagem {
    width: 27px;
    height: 27px;

    max-width: none;
    max-height: none;

    object-fit: contain;
}


/* =========================================================
   TIKTOK

   Formato circular
========================================================= */

.ironstore-footer-classico-rede-tiktok
.ironstore-footer-classico-rede-icone {
    width: 29px;
    height: 29px;

    border-radius: 50%;

    overflow: hidden;
}


.ironstore-footer-classico-rede-tiktok
.ironstore-footer-classico-rede-imagem {
    width: 29px;
    height: 29px;

    max-width: none;
    max-height: none;

    object-fit: cover;

    border-radius: 50%;
}


/* =========================================================
   FACEBOOK

   Formato circular
========================================================= */

.ironstore-footer-classico-rede-facebook
.ironstore-footer-classico-rede-icone {
    width: 30px;
    height: 30px;

    border-radius: 50%;

    overflow: hidden;
}


.ironstore-footer-classico-rede-facebook
.ironstore-footer-classico-rede-imagem {
    width: 30px;
    height: 30px;

    max-width: none;
    max-height: none;

    object-fit: cover;

    border-radius: 50%;
}


/* =========================================================
   X

   Formato circular
========================================================= */

.ironstore-footer-classico-rede-x
.ironstore-footer-classico-rede-icone {
    width: 29px;
    height: 29px;

    border-radius: 50%;

    overflow: hidden;
}


.ironstore-footer-classico-rede-x
.ironstore-footer-classico-rede-imagem {
    width: 29px;
    height: 29px;

    max-width: none;
    max-height: none;

    object-fit: cover;

    border-radius: 50%;
}


/* =========================================================
   YOUTUBE

   Formato retangular
========================================================= */

.ironstore-footer-classico-rede-youtube
.ironstore-footer-classico-rede-icone {
    width: 31px;
    height: 23px;

    overflow: visible;
}


.ironstore-footer-classico-rede-youtube
.ironstore-footer-classico-rede-imagem {
    width: 31px;
    height: 23px;

    max-width: none;
    max-height: none;

    object-fit: contain;
}


/* =========================================================
   HOVER DO LOGO
========================================================= */

.ironstore-footer-classico-rede-link:hover
.ironstore-footer-classico-rede-imagem {
    transform: scale(1.08);
}


/* =========================================================
   PARTE INFERIOR
========================================================= */

.ironstore-footer-classico-inferior {
    width: min(1180px, calc(100% - 48px));

    min-height: 70px;

    margin: 0 auto;

    padding: 15px 0;

    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 24px;

    border-top: 1px solid rgba(15, 23, 42, 0.075);

    color: #94a3b8;

    font-size: 11.5px;

    box-sizing: border-box;
}


/* =========================================================
   LOJA
========================================================= */

.ironstore-footer-classico-inferior-loja {
    min-width: 0;

    display: flex;

    align-items: center;

    flex-wrap: wrap;

    gap: 9px;

    line-height: 1.5;
}


.ironstore-footer-classico-copyright {
    overflow-wrap: anywhere;
}


/* =========================================================
   CNPJ
========================================================= */

.ironstore-footer-classico-cnpj {
    position: relative;

    padding-left: 12px;

    overflow-wrap: anywhere;
}


.ironstore-footer-classico-cnpj::before {
    content: "";

    position: absolute;

    left: 0;
    top: 50%;

    width: 3px;
    height: 3px;

    background: currentColor;

    border-radius: 50%;

    transform: translateY(-50%);

    opacity: 0.75;
}


/* =========================================================
   IRON EXECUTIONS
========================================================= */

.ironstore-footer-classico-desenvolvimento {
    min-width: 0;

    display: flex;

    align-items: center;
    justify-content: flex-end;

    flex-wrap: wrap;

    gap: 4px;

    color: #94a3b8;

    font-size: 11px;

    line-height: 1.5;

    text-align: right;
}


.ironstore-footer-classico-desenvolvimento a {
    position: relative;

    display: inline-block;

    color: #64748b;

    font-weight: 750;

    text-decoration: none;

    white-space: nowrap;

    transition: color 180ms ease;
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

    transform: scaleX(0.65);

    transform-origin: center;

    transition:
        opacity 180ms ease,
        transform 180ms ease;
}


.ironstore-footer-classico-desenvolvimento a:hover {
    color: #142a4a;
}


.ironstore-footer-classico-desenvolvimento a:hover::after {
    opacity: 0.5;

    transform: scaleX(1);
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 950px) {

    .ironstore-footer-classico-conteudo {
        width: calc(100% - 44px);

        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            );

        gap: 38px 34px;

        padding: 48px 0 42px;
    }


    .ironstore-footer-classico-principal::before {
        width: calc(100% - 44px);
    }


    .ironstore-footer-classico-inferior {
        width: calc(100% - 44px);
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

    .ironstore-footer-classico-principal {
        margin-top: 48px;
    }


    .ironstore-footer-classico-principal::before {
        width: calc(100% - 32px);
    }


    .ironstore-footer-classico-conteudo {
        width: calc(100% - 32px);

        padding: 38px 0 34px;

        grid-template-columns: 1fr;

        gap: 31px;
    }


    /* =====================================================
       IDENTIDADE
    ===================================================== */

    .ironstore-footer-classico-identidade {
        gap: 11px;
    }


    .ironstore-footer-classico-logo-container {
        width: 56px;
        height: 56px;

        border-radius: 14px;
    }


    .ironstore-footer-classico-logo {
        border-radius: 10px;
    }


    .ironstore-footer-classico-nome {
        font-size: 19px;
    }


    .ironstore-footer-classico-mensagem {
        max-width: 100%;

        font-size: 13px;
    }


    /* =====================================================
       BLOCOS
    ===================================================== */

    .ironstore-footer-classico-bloco {
        gap: 9px;
    }


    .ironstore-footer-classico-bloco h3 {
        margin-bottom: 6px;

        padding-bottom: 8px;

        font-size: 11.5px;
    }


    /* =====================================================
       REDES
    ===================================================== */

    .ironstore-footer-classico-redes {
        gap: 9px;
    }


    .ironstore-footer-classico-rede-link {
        width: 44px;
        height: 44px;

        flex-basis: 44px;

        border-radius: 13px;
    }


    /* =====================================================
       PARTE INFERIOR
    ===================================================== */

    .ironstore-footer-classico-inferior {
        width: calc(100% - 32px);

        min-height: 0;

        padding: 20px 0 24px;

        flex-direction: column;

        align-items: flex-start;
        justify-content: center;

        gap: 10px;
    }


    .ironstore-footer-classico-inferior-loja {
        gap: 7px;

        font-size: 11px;
    }


    .ironstore-footer-classico-desenvolvimento {
        justify-content: flex-start;

        gap: 3px;

        font-size: 10.5px;

        text-align: left;
    }

}


/* =========================================================
   MOBILE PEQUENO
========================================================= */

@media (max-width: 380px) {

    .ironstore-footer-classico-conteudo {
        width: calc(100% - 28px);

        padding-top: 34px;

        gap: 28px;
    }


    .ironstore-footer-classico-principal::before {
        width: calc(100% - 28px);
    }


    .ironstore-footer-classico-inferior {
        width: calc(100% - 28px);
    }


    .ironstore-footer-classico-redes {
        gap: 8px;
    }


    .ironstore-footer-classico-rede-link {
        width: 42px;
        height: 42px;

        flex-basis: 42px;
    }


    .ironstore-footer-classico-cnpj {
        width: 100%;

        padding-left: 0;
    }


    .ironstore-footer-classico-cnpj::before {
        display: none;
    }

}


/* =========================================================
   DISPOSITIVOS TOUCH
========================================================= */

@media (hover: none) {

    .ironstore-footer-classico-link:hover {
        transform: none;
    }


    .ironstore-footer-classico-rede-link:hover {
        transform: none;

        box-shadow:
            0 2px 5px rgba(15, 23, 42, 0.035),
            0 7px 18px rgba(15, 23, 42, 0.045);
    }


    .ironstore-footer-classico-rede-link:hover
    .ironstore-footer-classico-rede-imagem {
        transform: none;
    }

}


/* =========================================================
   REDUÇÃO DE MOVIMENTO
========================================================= */

@media (prefers-reduced-motion: reduce) {

    .ironstore-footer-classico-principal *,
    .ironstore-footer-classico-principal *::before,
    .ironstore-footer-classico-principal *::after {
        transition-duration: 0.01ms !important;

        animation-duration: 0.01ms !important;

        animation-iteration-count: 1 !important;
    }

}
/* =========================================================
   REFINAMENTO PREMIUM
========================================================= */

.ironstore-footer-classico-principal {
    isolation: isolate;

    background:
        radial-gradient(
            circle at 12% 0%,
            rgba(20, 42, 74, 0.035),
            transparent 28%
        ),
        radial-gradient(
            circle at 88% 100%,
            rgba(20, 42, 74, 0.025),
            transparent 30%
        ),
        linear-gradient(
            180deg,
            #ffffff 0%,
            #fcfdff 55%,
            #fafbfd 100%
        );
}


/* =========================================================
   LUZ AMBIENTE
========================================================= */

.ironstore-footer-classico-principal::after {
    content: "";

    position: absolute;

    z-index: -1;

    top: -180px;
    left: 50%;

    width: 720px;
    height: 320px;

    transform: translateX(-50%);

    border-radius: 50%;

    background:
        radial-gradient(
            ellipse,
            rgba(20, 42, 74, 0.045) 0%,
            rgba(20, 42, 74, 0.015) 45%,
            transparent 72%
        );

    filter: blur(8px);

    pointer-events: none;
}


/* =========================================================
   CONTEÚDO MAIS REFINADO
========================================================= */

.ironstore-footer-classico-conteudo {
    position: relative;

    padding-top: 62px;
    padding-bottom: 54px;

    gap: 52px;
}


/* =========================================================
   IDENTIDADE
========================================================= */

.ironstore-footer-classico-identidade {
    position: relative;
}


/* =========================================================
   LOGO PREMIUM
========================================================= */

.ironstore-footer-classico-logo-container {
    position: relative;

    width: 66px;
    height: 66px;

    padding: 5px;

    border-radius: 18px;

    background:
        linear-gradient(
            145deg,
            #ffffff,
            #f8fafc
        );

    border: 1px solid rgba(15, 23, 42, 0.075);

    box-shadow:
        0 1px 2px rgba(15, 23, 42, 0.03),
        0 8px 20px rgba(15, 23, 42, 0.055),
        0 20px 40px rgba(15, 23, 42, 0.025);

    transition:
        transform 220ms ease,
        box-shadow 220ms ease;
}


.ironstore-footer-classico-logo-container::before {
    content: "";

    position: absolute;

    inset: -1px;

    border-radius: inherit;

    padding: 1px;

    background:
        linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.9),
            rgba(20, 42, 74, 0.08)
        );

    pointer-events: none;

    opacity: 0.75;
}


.ironstore-footer-classico-logo-container:hover {
    transform: translateY(-2px);

    box-shadow:
        0 2px 4px rgba(15, 23, 42, 0.035),
        0 12px 26px rgba(15, 23, 42, 0.075),
        0 24px 50px rgba(15, 23, 42, 0.035);
}


.ironstore-footer-classico-logo {
    position: relative;

    z-index: 1;

    border-radius: 13px;
}


/* =========================================================
   NOME DA LOJA
========================================================= */

.ironstore-footer-classico-nome {
    margin-top: 5px;

    color: #10233f;

    font-size: 22px;
    font-weight: 780;

    letter-spacing: -0.55px;

    text-wrap: balance;
}


/* =========================================================
   MENSAGEM
========================================================= */

.ironstore-footer-classico-mensagem {
    max-width: 360px;

    color: #69798f;

    font-size: 13.5px;

    line-height: 1.72;
}


/* =========================================================
   BLOCOS
========================================================= */

.ironstore-footer-classico-bloco {
    position: relative;

    padding-top: 3px;
}


/* =========================================================
   TÍTULOS
========================================================= */

.ironstore-footer-classico-bloco h3 {
    margin-bottom: 11px;

    padding-bottom: 11px;

    color: #10233f;

    font-size: 11.5px;
    font-weight: 800;

    letter-spacing: 1.05px;
}


.ironstore-footer-classico-bloco h3::after {
    width: 28px;
    height: 2px;

    background:
        linear-gradient(
            90deg,
            #142a4a,
            rgba(20, 42, 74, 0.18)
        );

    opacity: 1;
}


/* =========================================================
   LINKS
========================================================= */

.ironstore-footer-classico-link {
    position: relative;

    padding: 2px 0;

    color: #66768b;

    font-size: 13px;

    transition:
        color 180ms ease,
        transform 180ms ease;
}


.ironstore-footer-classico-link::before {
    content: "";

    position: absolute;

    left: -8px;
    top: 50%;

    width: 3px;
    height: 3px;

    border-radius: 50%;

    background: #142a4a;

    opacity: 0;

    transform:
        translateY(-50%)
        scale(0);

    transition:
        opacity 180ms ease,
        transform 180ms ease;
}


.ironstore-footer-classico-link:hover {
    color: #10233f;

    transform: translateX(5px);
}


.ironstore-footer-classico-link:hover::before {
    opacity: 0.65;

    transform:
        translateY(-50%)
        scale(1);
}


/* =========================================================
   WHATSAPP
========================================================= */

.ironstore-footer-classico-whatsapp {
    color: #51677f;

    font-weight: 700;
}


/* =========================================================
   ENDEREÇO
========================================================= */

.ironstore-footer-classico-endereco p {
    transition: color 180ms ease;
}


.ironstore-footer-classico-endereco:hover p:first-child {
    color: #52657c;
}


/* =========================================================
   CEP
========================================================= */

.ironstore-footer-classico-cep {
    display: inline-flex;

    align-items: center;

    margin-top: 2px !important;

    color: #98a5b5 !important;

    font-size: 11.5px !important;

    letter-spacing: 0.15px;
}


/* =========================================================
   REDES SOCIAIS
========================================================= */

.ironstore-footer-classico-redes {
    gap: 10px;

    padding-top: 1px;
}


/* =========================================================
   BOTÕES SOCIAIS
========================================================= */

.ironstore-footer-classico-rede-link {
    position: relative;

    width: 48px;
    height: 48px;

    flex-basis: 48px;

    border-radius: 15px;

    background:
        linear-gradient(
            145deg,
            #ffffff,
            #fafbfc
        );

    border: 1px solid rgba(15, 23, 42, 0.075);

    box-shadow:
        0 2px 4px rgba(15, 23, 42, 0.025),
        0 6px 14px rgba(15, 23, 42, 0.04);

    overflow: visible;

    isolation: isolate;
}


/* =========================================================
   BRILHO DO BOTÃO
========================================================= */

.ironstore-footer-classico-rede-link::before {
    content: "";

    position: absolute;

    z-index: -1;

    inset: -1px;

    border-radius: inherit;

    background:
        linear-gradient(
            145deg,
            rgba(255, 255, 255, 1),
            rgba(20, 42, 74, 0.08)
        );

    opacity: 0;

    transition: opacity 200ms ease;

    pointer-events: none;
}


/* =========================================================
   SOMBRA INTERNA
========================================================= */

.ironstore-footer-classico-rede-link::after {
    content: "";

    position: absolute;

    inset: 1px;

    z-index: -1;

    border-radius: 13px;

    background:
        radial-gradient(
            circle at 50% 0%,
            rgba(255, 255, 255, 0.95),
            transparent 65%
        );

    pointer-events: none;
}


/* =========================================================
   HOVER SOCIAL
========================================================= */

.ironstore-footer-classico-rede-link:hover {
    transform:
        translateY(-4px)
        scale(1.025);

    border-color: rgba(15, 23, 42, 0.14);

    background: #ffffff;

    box-shadow:
        0 3px 6px rgba(15, 23, 42, 0.035),
        0 10px 22px rgba(15, 23, 42, 0.075),
        0 20px 40px rgba(15, 23, 42, 0.035);
}


.ironstore-footer-classico-rede-link:hover::before {
    opacity: 1;
}


/* =========================================================
   LOGOS
========================================================= */

.ironstore-footer-classico-rede-icone {
    z-index: 2;
}


.ironstore-footer-classico-rede-imagem {
    filter:
        saturate(0.96)
        contrast(1.02);

    transition:
        transform 220ms cubic-bezier(
            0.2,
            0.8,
            0.2,
            1
        ),
        filter 220ms ease;
}


.ironstore-footer-classico-rede-link:hover
.ironstore-footer-classico-rede-imagem {
    transform: scale(1.12);

    filter:
        saturate(1.08)
        contrast(1.04);
}


/* =========================================================
   INSTAGRAM
========================================================= */

.ironstore-footer-classico-rede-instagram
.ironstore-footer-classico-rede-icone {
    width: 28px;
    height: 28px;
}


.ironstore-footer-classico-rede-instagram
.ironstore-footer-classico-rede-imagem {
    width: 28px;
    height: 28px;

    object-fit: contain;
}


/* =========================================================
   FACEBOOK
========================================================= */

.ironstore-footer-classico-rede-facebook
.ironstore-footer-classico-rede-icone {
    width: 31px;
    height: 31px;

    border-radius: 50%;

    overflow: hidden;
}


.ironstore-footer-classico-rede-facebook
.ironstore-footer-classico-rede-imagem {
    width: 31px;
    height: 31px;

    object-fit: cover;

    border-radius: 50%;
}


/* =========================================================
   TIKTOK
========================================================= */

.ironstore-footer-classico-rede-tiktok
.ironstore-footer-classico-rede-icone {
    width: 30px;
    height: 30px;

    border-radius: 50%;

    overflow: hidden;
}


.ironstore-footer-classico-rede-tiktok
.ironstore-footer-classico-rede-imagem {
    width: 30px;
    height: 30px;

    object-fit: cover;

    border-radius: 50%;
}


/* =========================================================
   X
========================================================= */

.ironstore-footer-classico-rede-x
.ironstore-footer-classico-rede-icone {
    width: 30px;
    height: 30px;

    border-radius: 50%;

    overflow: hidden;
}


.ironstore-footer-classico-rede-x
.ironstore-footer-classico-rede-imagem {
    width: 30px;
    height: 30px;

    object-fit: cover;

    border-radius: 50%;
}


/* =========================================================
   YOUTUBE
========================================================= */

.ironstore-footer-classico-rede-youtube
.ironstore-footer-classico-rede-icone {
    width: 32px;
    height: 23px;

    overflow: visible;
}


.ironstore-footer-classico-rede-youtube
.ironstore-footer-classico-rede-imagem {
    width: 32px;
    height: 23px;

    object-fit: contain;
}


/* =========================================================
   FEEDBACK AO CLICAR
========================================================= */

.ironstore-footer-classico-rede-link:active {
    transform:
        translateY(-1px)
        scale(0.94);

    box-shadow:
        0 2px 6px rgba(15, 23, 42, 0.05);
}


/* =========================================================
   FOCO POR TECLADO
========================================================= */

.ironstore-footer-classico-rede-link:focus-visible {
    outline: none;

    border-color: rgba(20, 42, 74, 0.35);

    box-shadow:
        0 0 0 3px rgba(20, 42, 74, 0.08),
        0 8px 20px rgba(15, 23, 42, 0.07);
}


/* =========================================================
   BARRA INFERIOR
========================================================= */

.ironstore-footer-classico-inferior {
    position: relative;

    min-height: 74px;

    border-top: 0;

    color: #929fb0;
}


/* =========================================================
   SEPARADOR PREMIUM
========================================================= */

.ironstore-footer-classico-inferior::before {
    content: "";

    position: absolute;

    top: 0;
    left: 0;
    right: 0;

    height: 1px;

    background:
        linear-gradient(
            90deg,
            transparent 0%,
            rgba(15, 23, 42, 0.08) 8%,
            rgba(15, 23, 42, 0.11) 50%,
            rgba(15, 23, 42, 0.08) 92%,
            transparent 100%
        );
}


/* =========================================================
   COPYRIGHT
========================================================= */

.ironstore-footer-classico-copyright {
    color: #8795a8;

    font-weight: 500;

    letter-spacing: 0.05px;
}


/* =========================================================
   CNPJ
========================================================= */

.ironstore-footer-classico-cnpj {
    color: #9aa6b5;

    font-size: 11px;

    letter-spacing: 0.1px;
}


/* =========================================================
   DESENVOLVIMENTO
========================================================= */

.ironstore-footer-classico-desenvolvimento {
    color: #9aa6b5;
}


.ironstore-footer-classico-desenvolvimento a {
    color: #52667e;

    font-weight: 750;

    letter-spacing: 0.05px;
}


.ironstore-footer-classico-desenvolvimento a:hover {
    color: #142a4a;
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 950px) {

    .ironstore-footer-classico-conteudo {
        padding-top: 50px;
        padding-bottom: 45px;

        gap: 40px 36px;
    }

}


/* =========================================================
   MOBILE PREMIUM
========================================================= */

@media (max-width: 600px) {

    .ironstore-footer-classico-principal {
        margin-top: 52px;
    }


    .ironstore-footer-classico-conteudo {
        padding-top: 40px;
        padding-bottom: 36px;

        gap: 34px;
    }


    .ironstore-footer-classico-logo-container {
        width: 60px;
        height: 60px;

        padding: 4px;

        border-radius: 16px;
    }


    .ironstore-footer-classico-logo {
        border-radius: 12px;
    }


    .ironstore-footer-classico-nome {
        font-size: 20px;
    }


    .ironstore-footer-classico-mensagem {
        font-size: 13px;

        line-height: 1.7;
    }


    .ironstore-footer-classico-bloco h3 {
        margin-bottom: 8px;
    }


    .ironstore-footer-classico-redes {
        gap: 10px;
    }


    .ironstore-footer-classico-rede-link {
        width: 47px;
        height: 47px;

        flex-basis: 47px;

        border-radius: 14px;
    }


    .ironstore-footer-classico-inferior {
        padding-top: 22px;
        padding-bottom: 26px;

        gap: 11px;
    }

}


/* =========================================================
   MOBILE PEQUENO
========================================================= */

@media (max-width: 380px) {

    .ironstore-footer-classico-conteudo {
        gap: 30px;
    }


    .ironstore-footer-classico-rede-link {
        width: 44px;
        height: 44px;

        flex-basis: 44px;

        border-radius: 13px;
    }


    .ironstore-footer-classico-redes {
        gap: 8px;
    }

}
`;

export default classicoFooter;