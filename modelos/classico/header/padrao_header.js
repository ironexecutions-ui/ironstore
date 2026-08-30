const classicoHeader = `
    /* =========================================================
       IRONSTORE
       MODELO CLÁSSICO
       HEADER
    ========================================================= */

    .ironstore-header-principal-vitrine {
        position: relative;
        z-index: 1000;

        width: 100%;
        min-height: 86px;

        display: grid;
     grid-template-columns:
    minmax(220px, 1fr)
    minmax(340px, 1.35fr)
    minmax(340px, 1fr);

        align-items: center;
        gap: 30px;

        padding: 15px 36px;
        box-sizing: border-box;

        background:
            linear-gradient(
                180deg,
                rgba(255, 255, 255, 1) 0%,
                rgba(252, 253, 255, 1) 100%
            );

        border-bottom: 1px solid rgba(15, 23, 42, 0.07);

        box-shadow:
            0 1px 2px rgba(15, 23, 42, 0.02),
            0 8px 30px rgba(15, 23, 42, 0.035);
    }

.ironstore-header-identidade-loja {
    cursor: pointer;
}
    /* =========================================================
       IDENTIDADE DA LOJA
    ========================================================= */

    .ironstore-header-identidade-loja {
        min-width: 0;

        display: flex;
        align-items: center;

        gap: 14px;
    }


    /* =========================================================
       LOGO
    ========================================================= */

    .ironstore-header-imagem-identidade {
        width: 52px;
        height: 52px;

        flex: 0 0 52px;

        display: block;

        object-fit: cover;

        border-radius: 15px;

        background: #ffffff;

        border: 1px solid rgba(15, 23, 42, 0.08);

        box-shadow:
            0 2px 5px rgba(15, 23, 42, 0.05),
            0 8px 20px rgba(15, 23, 42, 0.08);

        transition:
            transform 180ms ease,
            box-shadow 180ms ease;
    }

    .ironstore-header-identidade-loja:hover
    .ironstore-header-imagem-identidade {
        transform: translateY(-1px);

        box-shadow:
            0 3px 7px rgba(15, 23, 42, 0.06),
            0 10px 24px rgba(15, 23, 42, 0.1);
    }


    /* =========================================================
       NOME DA LOJA
    ========================================================= */

    .ironstore-header-texto-nome-loja {
        min-width: 0;

        display: block;

        overflow: hidden;

        color: #101828;

        font-size: 18px;
        font-weight: 750;
        line-height: 1.15;

        letter-spacing: -0.45px;

        text-overflow: ellipsis;
        white-space: nowrap;
    }


    /* =========================================================
       ÁREA DA PESQUISA
    ========================================================= */

.ironstore-header-central-pesquisa {
    position: relative;

    width: min(100%, 570px);

    justify-self: center;

    transform: none;
}


    /* =========================================================
       ÍCONE VISUAL DA PESQUISA
    ========================================================= */

    .ironstore-header-central-pesquisa::before {
        content: "";

        position: absolute;
        z-index: 2;

        top: 50%;
        left: 18px;

        width: 17px;
        height: 17px;

        border: 2px solid #667085;
        border-radius: 50%;

        box-sizing: border-box;

        transform: translateY(-58%);

        pointer-events: none;

        transition:
            border-color 180ms ease,
            transform 180ms ease;
    }

    .ironstore-header-central-pesquisa::after {
        content: "";

        position: absolute;
        z-index: 2;

        top: calc(50% + 5px);
        left: 32px;

        width: 7px;
        height: 2px;

        border-radius: 999px;

        background: #667085;

        transform: rotate(45deg);

        transform-origin: left center;

        pointer-events: none;

        transition:
            background-color 180ms ease;
    }

    .ironstore-header-central-pesquisa:focus-within::before {
        border-color: #111827;

        transform:
            translateY(-58%)
            scale(1.04);
    }

    .ironstore-header-central-pesquisa:focus-within::after {
        background: #111827;
    }


    /* =========================================================
       INPUT DE PESQUISA
    ========================================================= */

    .ironstore-header-campo-busca-produtos {
        position: relative;

        width: 100%;
        height: 52px;

        padding:
            0
            22px
            0
            52px;

        box-sizing: border-box;

        outline: none;

        border: 1px solid #dfe3e8;
        border-radius: 17px;

        background:
            linear-gradient(
                180deg,
                #f8f9fb 0%,
                #f5f6f8 100%
            );

        color: #101828;

        font-family: inherit;
        font-size: 14px;
        font-weight: 500;

        letter-spacing: -0.1px;

        box-shadow:
            inset 0 1px 1px rgba(255, 255, 255, 0.9),
            0 1px 2px rgba(15, 23, 42, 0.025);

        transition:
            background 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease,
            transform 180ms ease;
    }

    .ironstore-header-campo-busca-produtos::placeholder {
        color: #98a2b3;

        font-weight: 450;
    }

    .ironstore-header-campo-busca-produtos:hover {
        background: #fafbfc;

        border-color: #cfd5dc;
    }

    .ironstore-header-campo-busca-produtos:focus {
        background: #ffffff;

        border-color: #98a2b3;

        box-shadow:
            0 0 0 4px rgba(17, 24, 39, 0.045),
            0 5px 18px rgba(15, 23, 42, 0.065);
    }


    /* =========================================================
       CONTROLES DA DIREITA
    ========================================================= */

    .ironstore-header-controles-direita {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        gap: 8px;

        white-space: nowrap;
    }


    /* =========================================================
       BASE DOS BOTÕES
    ========================================================= */

    .ironstore-header-acao-entrar,
    .ironstore-header-acao-menu,
    .ironstore-header-acao-carrinho {
        position: relative;

        height: 46px;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        box-sizing: border-box;

        font-family: inherit;
        font-size: 13px;
        font-weight: 650;

        cursor: pointer;

        user-select: none;

        transition:
            background-color 160ms ease,
            border-color 160ms ease,
            color 160ms ease,
            box-shadow 160ms ease,
            transform 130ms ease;
    }


    /* =========================================================
       ENTRAR
    ========================================================= */

    .ironstore-header-acao-entrar {
        padding: 0 17px;

        border: 1px solid transparent;
        border-radius: 13px;

        background: transparent;

        color: #475467;
    }

    .ironstore-header-acao-entrar:hover {
        background: #f2f4f7;

        color: #101828;
    }

    .ironstore-header-acao-entrar:active {
        transform: scale(0.97);
    }


    /* =========================================================
       MENU
    ========================================================= */

    .ironstore-header-acao-menu {
        width: 46px;
        min-width: 46px;

        padding: 0;

        border: 1px solid #e4e7ec;
        border-radius: 13px;

        background: #ffffff;

        color: #344054;

        font-size: 19px;
        font-weight: 500;

        box-shadow:
            0 1px 2px rgba(16, 24, 40, 0.04);
    }

    .ironstore-header-acao-menu:hover {
        border-color: #d0d5dd;

        background: #f9fafb;

        color: #101828;

        box-shadow:
            0 3px 8px rgba(16, 24, 40, 0.06);

        transform: translateY(-1px);
    }

    .ironstore-header-acao-menu:active {
        transform: scale(0.95);
    }

/* =========================================================
   CARRINHO
   TRANSPARENTE / AZUL ESCURO
========================================================= */

.ironstore-header-acao-carrinho {
    min-width: 122px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    gap: 9px;

    padding: 0 18px;

    border: 1.5px solid rgba(20, 42, 74, 0.28);
    border-radius: 14px;

    background: transparent;

    color: #142a4a;

    font-size: 13px;
    font-weight: 700;

    letter-spacing: -0.1px;

    box-shadow:
        0 1px 2px rgba(20, 42, 74, 0.03),
        inset 0 0 0 1px rgba(255, 255, 255, 0.5);

    transition:
        background-color 180ms ease,
        border-color 180ms ease,
        color 180ms ease,
        box-shadow 180ms ease,
        transform 150ms ease;
}


/* ÍCONE */

.ironstore-header-icone-carrinho {
    width: 22px;
    height: 22px;

    display: block;

    flex-shrink: 0;

    color: #142a4a;

    transition:
        transform 180ms ease;
}


/* TEXTO */

.ironstore-header-texto-carrinho {
    display: inline-flex;
    align-items: center;

    color: #142a4a;

    line-height: 1;
}


/* HOVER */

.ironstore-header-acao-carrinho:hover {
    background: rgba(20, 42, 74, 0.055);

    border-color: rgba(20, 42, 74, 0.55);

    color: #0b1f3a;

    box-shadow:
        0 4px 12px rgba(20, 42, 74, 0.08),
        0 0 0 3px rgba(20, 42, 74, 0.025);

    transform: translateY(-1px);
}

.ironstore-header-acao-carrinho:hover
.ironstore-header-icone-carrinho {
    transform: translateX(2px);
}


/* CLIQUE */

.ironstore-header-acao-carrinho:active {
    background: rgba(20, 42, 74, 0.09);

    border-color: rgba(20, 42, 74, 0.65);

    box-shadow:
        0 1px 3px rgba(20, 42, 74, 0.08);

    transform: scale(0.97);
}
  
    /* =========================================================
       FOCO ACESSÍVEL
    ========================================================= */

    .ironstore-header-acao-entrar:focus-visible,
    .ironstore-header-acao-menu:focus-visible,
    .ironstore-header-acao-carrinho:focus-visible {
        outline: none;

        box-shadow:
            0 0 0 4px rgba(16, 24, 40, 0.1);
    }


    /* =========================================================
       DESKTOP MENOR
    ========================================================= */

    @media (max-width: 1150px) {

        .ironstore-header-principal-vitrine {
            grid-template-columns:
                minmax(190px, 0.75fr)
                minmax(300px, 1.4fr)
                auto;

            gap: 20px;

            padding-left: 24px;
            padding-right: 24px;
        }

        .ironstore-header-central-pesquisa {
            transform: none;
        }

        .ironstore-header-texto-nome-loja {
            font-size: 16px;
        }
    }


    /* =========================================================
       TABLET
    ========================================================= */

    @media (max-width: 850px) {

        .ironstore-header-principal-vitrine {
            grid-template-columns:
                minmax(0, 1fr)
                auto;

            gap: 12px 16px;

            padding: 12px 18px 15px;
        }

        .ironstore-header-identidade-loja {
            grid-column: 1;
            grid-row: 1;
        }

        .ironstore-header-controles-direita {
            grid-column: 2;
            grid-row: 1;
        }

        .ironstore-header-central-pesquisa {
            grid-column: 1 / -1;
            grid-row: 2;

            max-width: none;

            transform: none;
        }
    }


    /* =========================================================
       MOBILE
    ========================================================= */

    @media (max-width: 600px) {

        .ironstore-header-principal-vitrine {
            min-height: auto;

            gap: 11px;

            padding:
                max(10px, env(safe-area-inset-top))
                12px
                13px;
        }

        .ironstore-header-imagem-identidade {
            width: 43px;
            height: 43px;

            flex-basis: 43px;

            border-radius: 12px;
        }

        .ironstore-header-texto-nome-loja {
            max-width: 145px;

            font-size: 15px;
        }

        .ironstore-header-acao-entrar {
            display: none;
        }

        .ironstore-header-acao-menu {
            width: 42px;
            min-width: 42px;
            height: 42px;

            border-radius: 12px;
        }

      /* =========================================================
   CARRINHO
========================================================= */

.ironstore-header-acao-carrinho {
    min-width: 122px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    gap: 9px;

    padding: 0 18px;

    overflow: hidden;

    border: 1px solid #101828;
    border-radius: 14px;

    background:
        linear-gradient(
            135deg,
            #101828 0%,
            #1d2939 100%
        );

    color: #ffffff;

    font-size: 13px;
    font-weight: 700;

    letter-spacing: -0.1px;

    box-shadow:
        0 3px 7px rgba(16, 24, 40, 0.13),
        0 9px 20px rgba(16, 24, 40, 0.1);
}


/* ÍCONE */

.ironstore-header-icone-carrinho {
    width: 21px;
    height: 21px;

    flex-shrink: 0;

    display: block;

    color: #ffffff;

    transition:
        transform 180ms ease;
}


/* TEXTO */

.ironstore-header-texto-carrinho {
    display: inline-flex;
    align-items: center;

    line-height: 1;

    color: inherit;
}


/* HOVER */

.ironstore-header-acao-carrinho:hover {
    border-color: #1d2939;

    background:
        linear-gradient(
            135deg,
            #1d2939 0%,
            #344054 100%
        );

    box-shadow:
        0 5px 10px rgba(16, 24, 40, 0.16),
        0 12px 26px rgba(16, 24, 40, 0.12);

    transform: translateY(-2px);
}

.ironstore-header-acao-carrinho:hover
.ironstore-header-icone-carrinho {
    transform: translateX(2px);
}


/* CLIQUE */

.ironstore-header-acao-carrinho:active {
    box-shadow:
        0 2px 5px rgba(16, 24, 40, 0.13);

    transform:
        translateY(0)
        scale(0.97);
}


/* =========================================================
   CARRINHO MOBILE
========================================================= */

@media (max-width: 600px) {

    .ironstore-header-acao-carrinho {
        width: 46px;
        min-width: 46px;
        height: 42px;

        padding: 0;

        border-radius: 12px;
    }

    .ironstore-header-texto-carrinho {
        display: none;
    }

    .ironstore-header-icone-carrinho {
        width: 21px;
        height: 21px;
    }
}

   
            transform: translateX(-43%);
        }

        .ironstore-header-campo-busca-produtos {
            height: 48px;

            border-radius: 14px;
        }
    }


    /* =========================================================
       MOBILE PEQUENO
    ========================================================= */

    @media (max-width: 390px) {

        .ironstore-header-principal-vitrine {
            padding-left: 10px;
            padding-right: 10px;
        }

        .ironstore-header-identidade-loja {
            gap: 9px;
        }

        .ironstore-header-imagem-identidade {
            width: 40px;
            height: 40px;

            flex-basis: 40px;
        }

        .ironstore-header-texto-nome-loja {
            max-width: 115px;

            font-size: 14px;
        }

        .ironstore-header-controles-direita {
            gap: 6px;
        }
    }
        /* =========================================================
   CLIENTE LOGADO
========================================================= */

.ironstore-header-cliente {
    height: 48px;
    max-width: 210px;

    display: inline-flex;
    align-items: center;

    gap: 10px;

    padding:
        5px
        12px
        5px
        6px;

    box-sizing: border-box;

    overflow: hidden;

    border: 1px solid transparent;
    border-radius: 14px;

    background: transparent;

    color: #101828;

    font-family: inherit;

    cursor: pointer;

    transition:
        background-color 160ms ease,
        border-color 160ms ease,
        box-shadow 160ms ease,
        transform 130ms ease;
}


/* =========================================================
   HOVER
========================================================= */

.ironstore-header-cliente:hover {
    border-color: #e4e7ec;

    background: #f8fafc;

    box-shadow:
        0 2px 7px rgba(15, 23, 42, 0.04);

    transform: translateY(-1px);
}

.ironstore-header-cliente:active {
    transform: scale(0.98);
}


/* =========================================================
   FOTO
========================================================= */

.ironstore-header-cliente-foto,
.ironstore-header-cliente-avatar {
    width: 36px;
    height: 36px;

    flex: 0 0 36px;

    border-radius: 50%;

    box-sizing: border-box;
}


/* FOTO GOOGLE */

.ironstore-header-cliente-foto {
    display: block;

    object-fit: cover;

    border: 2px solid #ffffff;

    box-shadow:
        0 0 0 1px #dfe4ea,
        0 3px 8px rgba(15, 23, 42, 0.10);
}


/* FALLBACK SEM FOTO */

.ironstore-header-cliente-avatar {
    display: flex;
    align-items: center;
    justify-content: center;

    background:
        linear-gradient(
            135deg,
            #101828,
            #344054
        );

    color: #ffffff;

    font-size: 13px;
    font-weight: 800;

    box-shadow:
        0 3px 8px rgba(15, 23, 42, 0.12);
}


/* =========================================================
   NOME
========================================================= */

.ironstore-header-cliente-dados {
    min-width: 0;

    display: flex;
    flex-direction: column;

    align-items: flex-start;

    gap: 2px;

    overflow: hidden;

    text-align: left;
}


/* MINHA CONTA */

.ironstore-header-cliente-dados small {
    width: 100%;

    overflow: hidden;

    color: #98a2b3;

    font-size: 8.5px;
    font-weight: 700;

    line-height: 1;

    letter-spacing: 0.45px;

    text-transform: uppercase;

    text-overflow: ellipsis;
    white-space: nowrap;
}


/* NOME */

.ironstore-header-cliente-dados strong {
    display: block;

    width: 100%;

    overflow: hidden;

    color: #344054;

    font-size: 11.5px;
    font-weight: 750;

    line-height: 1.15;

    text-overflow: ellipsis;
    white-space: nowrap;
}

/* =========================================================
   ÁREA DO MENU
========================================================= */

.ironstore-header-menu-area {
    position: relative;

    display: flex;
    align-items: center;
}


/* =========================================================
   MENU PRINCIPAL
========================================================= */

.ironstore-header-menu-flutuante {
    position: absolute;

    top: calc(100% + 12px);
    right: -4px;

    z-index: 9999;

    width: 300px;
    box-sizing: border-box;

    padding: 8px;

    border: 1px solid #e4e9ef;
    border-radius: 14px;

    background: #ffffff;

    box-shadow:
        0 18px 45px rgba(15, 35, 60, 0.12),
        0 3px 10px rgba(15, 35, 60, 0.05);

    transform-origin: top right;

    animation:
        ironstoreMenuEntrada
        180ms
        cubic-bezier(0.22, 1, 0.36, 1);
}


/* =========================================================
   SETA SUPERIOR
========================================================= */

.ironstore-header-menu-flutuante::before {
    content: "";

    position: absolute;

    top: -6px;
    right: 18px;

    width: 10px;
    height: 10px;

    border-top: 1px solid #e4e9ef;
    border-left: 1px solid #e4e9ef;

    background: #ffffff;

    transform: rotate(45deg);
}


/* =========================================================
   GRUPOS
========================================================= */

.ironstore-header-menu-grupo {
    position: relative;

    display: flex;
    flex-direction: column;

    gap: 1px;

    padding: 6px 0;
}


.ironstore-header-menu-grupo
+ .ironstore-header-menu-grupo {
    margin-top: 4px;

    padding-top: 11px;

    border-top: 1px solid #edf0f4;
}


/* =========================================================
   TÍTULO DOS GRUPOS
========================================================= */

.ironstore-header-menu-titulo {
    display: block;

    padding: 5px 12px 8px;

    color: #8a97a6;

    font-size: 10px;
    font-weight: 700;
    line-height: 1;

    letter-spacing: 0.07em;
    text-transform: uppercase;

    user-select: none;
}


/* =========================================================
   OPÇÕES
========================================================= */

.ironstore-header-menu-grupo button {
    position: relative;

    display: flex;
    align-items: center;

    width: 100%;
    min-height: 42px;

    box-sizing: border-box;

    padding: 0 12px;

    border: 0;
    border-radius: 8px;

    outline: none;

    background: transparent;

    color: #263b53;

    font-family: inherit;
    font-size: 13px;
    font-weight: 550;
    line-height: 1.3;

    text-align: left;

    cursor: pointer;

    transition:
        background-color 140ms ease,
        color 140ms ease,
        padding-left 140ms ease;
}


/* =========================================================
   INDICADOR LATERAL
========================================================= */

.ironstore-header-menu-grupo button::before {
    content: "";

    position: absolute;

    left: 0;

    width: 3px;
    height: 0;

    border-radius: 0 4px 4px 0;

    background: #244f7d;

    opacity: 0;

    transition:
        height 140ms ease,
        opacity 140ms ease;
}


/* =========================================================
   HOVER
========================================================= */

.ironstore-header-menu-grupo button:hover {
    padding-left: 16px;

    background: #f5f7fa;

    color: #153d69;
}


.ironstore-header-menu-grupo button:hover::before {
    height: 20px;

    opacity: 1;
}


/* =========================================================
   TECLADO / ACESSIBILIDADE
========================================================= */

.ironstore-header-menu-grupo button:focus-visible {
    background: #f5f7fa;

    color: #153d69;

    box-shadow:
        inset 0 0 0 2px
        rgba(36, 79, 125, 0.22);
}


/* =========================================================
   BOTÃO ☰ QUANDO ABERTO
========================================================= */

.ironstore-header-acao-menu.ativo {
    border-color: #d7e0e9;

    background: #f2f5f8;

    color: #173d66;
}


/* =========================================================
   ANIMAÇÃO
========================================================= */

@keyframes ironstoreMenuEntrada {

    from {
        opacity: 0;

        transform:
            translateY(-5px)
            scale(0.985);
    }

    to {
        opacity: 1;

        transform:
            translateY(0)
            scale(1);
    }
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

    .ironstore-header-menu-flutuante {
        position: fixed;

        top: 72px;
        right: 10px;
        left: 10px;

        width: auto;

        max-height:
            calc(100dvh - 84px);

        overflow-y: auto;

        padding: 8px;

        border-radius: 14px;

        box-shadow:
            0 18px 45px
            rgba(10, 28, 48, 0.16);
    }


    .ironstore-header-menu-flutuante::before {
        display: none;
    }


    .ironstore-header-menu-grupo {
        padding: 7px 0;
    }


    .ironstore-header-menu-titulo {
        padding:
            7px 12px 9px;
    }


    .ironstore-header-menu-grupo button {
        min-height: 46px;

        padding:
            0 13px;

        border-radius: 9px;

        font-size: 14px;
    }


    .ironstore-header-menu-grupo button:hover {
        padding-left: 17px;
    }
}


/* =========================================================
   TELAS MUITO PEQUENAS
========================================================= */

@media (max-width: 380px) {

    .ironstore-header-menu-flutuante {
        top: 66px;

        right: 7px;
        left: 7px;
    }
}
    
/* =========================================================
   FOCO
========================================================= */

.ironstore-header-cliente:focus-visible {
    outline: none;

    box-shadow:
        0 0 0 4px rgba(16, 24, 40, 0.08);
}
/* =========================================================
   CLIENTE LOGADO
========================================================= */

.ironstore-header-cliente {
    position: relative;

    height: 48px;
    max-width: 230px;

    display: inline-flex;
    align-items: center;

    gap: 10px;

    padding: 5px 14px 5px 6px;

    box-sizing: border-box;

    overflow: hidden;

    border: 1px solid #e4e7ec;
    border-radius: 15px;

    background:
        linear-gradient(
            180deg,
            #ffffff 0%,
            #fafbfc 100%
        );

    color: #101828;

    font-family: inherit;

    cursor: pointer;

    box-shadow:
        0 1px 2px rgba(16, 24, 40, 0.03),
        0 4px 12px rgba(16, 24, 40, 0.025);

    transition:
        background 180ms ease,
        border-color 180ms ease,
        box-shadow 180ms ease,
        transform 150ms ease;
}


/* =========================================================
   HOVER
========================================================= */

.ironstore-header-cliente:hover {
    border-color: #cfd5dc;

    background: #ffffff;

    box-shadow:
        0 2px 4px rgba(15, 23, 42, 0.04),
        0 8px 20px rgba(15, 23, 42, 0.07);

    transform: translateY(-1px);
}

.ironstore-header-cliente:active {
    transform: translateY(0) scale(0.98);
}


/* =========================================================
   FOTO / AVATAR
========================================================= */

.ironstore-header-cliente-foto,
.ironstore-header-cliente-avatar {
    width: 36px;
    height: 36px;

    flex: 0 0 36px;

    border-radius: 11px;

    box-sizing: border-box;
}


/* =========================================================
   FOTO DO GOOGLE
========================================================= */

.ironstore-header-cliente-foto {
    display: block;

    object-fit: cover;

    border: 1px solid rgba(15, 23, 42, 0.08);

    background: #f2f4f7;

    box-shadow:
        0 2px 6px rgba(15, 23, 42, 0.08);
}


/* =========================================================
   AVATAR QUANDO NÃO EXISTIR FOTO
========================================================= */

.ironstore-header-cliente-avatar {
    display: flex;
    align-items: center;
    justify-content: center;

    background:
        linear-gradient(
            135deg,
            #142a4a 0%,
            #1d3d68 100%
        );

    color: #ffffff;

    font-size: 13px;
    font-weight: 800;

    text-transform: uppercase;

    box-shadow:
        0 3px 8px rgba(20, 42, 74, 0.18);
}


/* =========================================================
   INFORMAÇÕES DO CLIENTE
========================================================= */

.ironstore-header-cliente-dados {
    min-width: 0;

    display: flex;
    flex: 1;
    flex-direction: column;

    align-items: flex-start;
    justify-content: center;

    gap: 3px;

    overflow: hidden;

    text-align: left;
}


/* =========================================================
   TEXTO SUPERIOR
========================================================= */

.ironstore-header-cliente-dados::before {
    content: "Minha conta";

    display: block;

    width: 100%;

    overflow: hidden;

    color: #98a2b3;

    font-size: 8px;
    font-weight: 750;

    line-height: 1;

    letter-spacing: 0.6px;

    text-transform: uppercase;

    text-overflow: ellipsis;
    white-space: nowrap;
}


/* caso ainda exista um small dentro do JSX */

.ironstore-header-cliente-dados small {
    display: none;
}


/* =========================================================
   NOME DO CLIENTE
========================================================= */

.ironstore-header-cliente-dados strong {
    display: block;

    width: 100%;

    overflow: hidden;

    color: #1d2939;

    font-size: 12px;
    font-weight: 750;

    line-height: 1.15;

    letter-spacing: -0.15px;

    text-overflow: ellipsis;
    white-space: nowrap;
}


/* =========================================================
   SETA DA CONTA
========================================================= */

.ironstore-header-cliente::after {
    content: "";

    width: 6px;
    height: 6px;

    flex: 0 0 6px;

    margin-left: 2px;
    margin-right: 1px;
    margin-bottom: 4px;

    border-right: 1.5px solid #98a2b3;
    border-bottom: 1.5px solid #98a2b3;

    transform: rotate(45deg);

    transition:
        border-color 180ms ease,
        transform 180ms ease;
}

.ironstore-header-cliente:hover::after {
    border-color: #344054;

    transform:
        translateY(2px)
        rotate(45deg);
}


/* =========================================================
   FOCO
========================================================= */

.ironstore-header-cliente:focus-visible {
    outline: none;

    border-color: #98a2b3;

    box-shadow:
        0 0 0 4px rgba(20, 42, 74, 0.07);
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

    .ironstore-header-cliente {
        width: 42px;
        min-width: 42px;
        max-width: 42px;
        height: 42px;

        padding: 3px;

        justify-content: center;

        border-radius: 12px;
    }

    .ironstore-header-cliente-foto,
    .ironstore-header-cliente-avatar {
        width: 34px;
        height: 34px;

        flex-basis: 34px;

        border-radius: 10px;
    }

    .ironstore-header-cliente-dados {
        display: none;
    }

    .ironstore-header-cliente::after {
        display: none;
    }
}

/* =========================================================
   IRONSTORE
   BUSCA DE PRODUTOS — PREMIUM / CLASSIC
========================================================= */


/* =========================================================
   ÁREA PRINCIPAL
========================================================= */

.ironstore-header-central-pesquisa {
    position: relative;

    width: min(100%, 570px);

    justify-self: center;

    transform: none;

    z-index: 10000;
}


/* =========================================================
   REMOVE A LUPA ANTIGA DO HEADER
   O NOVO JSX JÁ POSSUI SEU PRÓPRIO ÍCONE
========================================================= */

.ironstore-header-central-pesquisa::before,
.ironstore-header-central-pesquisa::after {
    display: none;
    content: none;
}


/* =========================================================
   CONTAINER DO INPUT
========================================================= */

.ironstore-header-busca-container {
    position: relative;

    width: 100%;

    display: flex;
    align-items: center;

    isolation: isolate;
}


/* =========================================================
   ÍCONE DE BUSCA
========================================================= */

.ironstore-header-busca-icone {
    position: absolute;

    left: 18px;
    top: 50%;

    width: 18px;
    height: 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    transform: translateY(-50%);

    color: #667085;

    pointer-events: none;

    z-index: 3;

    transition:
        color 180ms ease,
        transform 180ms ease;
}

.ironstore-header-busca-icone svg {
    width: 100%;
    height: 100%;

    display: block;
}

.ironstore-header-busca-container:focus-within
.ironstore-header-busca-icone {
    color: #142a4a;

    transform:
        translateY(-50%)
        scale(1.05);
}


/* =========================================================
   INPUT
========================================================= */

.ironstore-header-campo-busca-produtos {
    position: relative;

    width: 100%;
    height: 52px;

    padding:
        0
        48px
        0
        52px;

    box-sizing: border-box;

    outline: none;

    border:
        1px solid
        #dfe3e8;

    border-radius: 17px;

    background:
        linear-gradient(
            180deg,
            #f9fafb 0%,
            #f5f7f9 100%
        );

    color: #101828;

    font-family: inherit;

    font-size: 14px;
    font-weight: 500;

    letter-spacing: -.1px;

    box-shadow:
        inset 0 1px 1px rgba(255,255,255,.95),
        0 1px 2px rgba(15,23,42,.025);

    transition:
        background 180ms ease,
        border-color 180ms ease,
        box-shadow 180ms ease;
}

.ironstore-header-campo-busca-produtos::placeholder {
    color: #98a2b3;

    font-weight: 450;
}

.ironstore-header-campo-busca-produtos:hover {
    border-color: #cfd5dc;

    background: #fafbfc;
}

.ironstore-header-campo-busca-produtos:focus {
    border-color:
        rgba(20,42,74,.42);

    background: #ffffff;

    box-shadow:
        0 0 0 4px rgba(20,42,74,.055),
        0 6px 20px rgba(15,23,42,.07);
}


/* =========================================================
   BOTÃO LIMPAR
========================================================= */

.ironstore-header-busca-limpar {
    position: absolute;

    right: 11px;
    top: 50%;

    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    transform: translateY(-50%);

    padding: 0;

    border:
        1px solid
        transparent;

    border-radius: 9px;

    background: transparent;

    color: #98a2b3;

    font-family: inherit;
    font-size: 19px;
    font-weight: 400;

    line-height: 1;

    cursor: pointer;

    z-index: 4;

    transition:
        color 150ms ease,
        background 150ms ease,
        border-color 150ms ease,
        transform 150ms ease;
}

.ironstore-header-busca-limpar:hover {
    border-color: #e4e7ec;

    background: #f2f4f7;

    color: #344054;

    transform:
        translateY(-50%)
        scale(1.04);
}

.ironstore-header-busca-limpar:active {
    transform:
        translateY(-50%)
        scale(.94);
}


/* =========================================================
   PAINEL FLUTUANTE
========================================================= */

.ironstore-header-busca-resultados {
    position: absolute;

    top: calc(100% + 10px);

    left: 50%;

    width: min(
        calc(100vw - 32px),
        640px
    );

    max-height:
        min(
            560px,
            calc(100vh - 130px)
        );

    display: flex;
    flex-direction: column;

    overflow: hidden;

    border:
        1px solid
        rgba(20,42,74,.11);

    border-radius: 18px;

    background:
        rgba(255,255,255,.985);

    backdrop-filter:
        blur(22px)
        saturate(135%);

    -webkit-backdrop-filter:
        blur(22px)
        saturate(135%);

    box-shadow:
        0 4px 10px rgba(15,35,60,.05),
        0 18px 45px rgba(15,35,60,.13),
        0 35px 80px rgba(15,35,60,.08);

    transform:
        translateX(-50%);

    transform-origin:
        top center;

    animation:
        ironstoreBuscaEntrada
        190ms
        cubic-bezier(.22,1,.36,1);

    z-index: 999999;
}


/* =========================================================
   DETALHE SUPERIOR
========================================================= */

.ironstore-header-busca-resultados::before {
    content: "";

    position: absolute;

    top: 0;
    left: 20px;
    right: 20px;

    height: 1px;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.95),
            transparent
        );

    pointer-events: none;

    z-index: 2;
}


/* =========================================================
   ANIMAÇÃO
========================================================= */

@keyframes ironstoreBuscaEntrada {

    from {
        opacity: 0;

        transform:
            translateX(-50%)
            translateY(-6px)
            scale(.985);
    }

    to {
        opacity: 1;

        transform:
            translateX(-50%)
            translateY(0)
            scale(1);
    }

}


/* =========================================================
   CABEÇALHO DOS RESULTADOS
========================================================= */

.ironstore-header-busca-cabecalho {
    min-height: 48px;

    flex: 0 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 16px;

    padding:
        0
        16px;

    box-sizing: border-box;

    border-bottom:
        1px solid
        #edf0f4;

    background:
        linear-gradient(
            180deg,
            #ffffff 0%,
            #fbfcfd 100%
        );
}

.ironstore-header-busca-cabecalho span {
    display: inline-flex;
    align-items: center;

    color: #667085;

    font-size: 9px;
    font-weight: 800;

    line-height: 1;

    letter-spacing: .09em;

    text-transform: uppercase;
}


/* =========================================================
   QUANTIDADE DE RESULTADOS
========================================================= */

.ironstore-header-busca-cabecalho small {
    min-height: 24px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding:
        0
        9px;

    border:
        1px solid
        #e4e7ec;

    border-radius: 999px;

    background: #ffffff;

    color: #667085;

    font-size: 9px;
    font-weight: 700;

    line-height: 1;

    box-shadow:
        0 1px 2px
        rgba(16,24,40,.03);
}


/* =========================================================
   LISTA
========================================================= */

.ironstore-header-busca-lista {
    flex: 1 1 auto;

    max-height: 430px;

    overflow-x: hidden;
    overflow-y: auto;

    padding: 7px;

    box-sizing: border-box;

    overscroll-behavior: contain;

    scrollbar-width: thin;

    scrollbar-color:
        #cfd5dc
        transparent;
}

.ironstore-header-busca-lista::-webkit-scrollbar {
    width: 5px;
}

.ironstore-header-busca-lista::-webkit-scrollbar-track {
    background: transparent;
}

.ironstore-header-busca-lista::-webkit-scrollbar-thumb {
    border-radius: 999px;

    background: #cfd5dc;
}


/* =========================================================
   PRODUTO
========================================================= */

.ironstore-header-busca-produto {
    position: relative;

    width: 100%;
    min-height: 76px;

    display: grid;

    grid-template-columns:
        58px
        minmax(0,1fr)
        auto
        32px;

    align-items: center;

    gap: 12px;

    padding:
        8px
        10px;

    box-sizing: border-box;

    overflow: hidden;

    border:
        1px solid
        transparent;

    border-radius: 13px;

    outline: none;

    background:
        transparent;

    color: #101828;

    font-family: inherit;

    text-align: left;

    cursor: pointer;

    transition:
        background 150ms ease,
        border-color 150ms ease,
        box-shadow 150ms ease,
        transform 150ms ease;
}


/* =========================================================
   INDICADOR LATERAL
========================================================= */

.ironstore-header-busca-produto::before {
    content: "";

    position: absolute;

    left: 0;
    top: 17px;
    bottom: 17px;

    width: 3px;

    border-radius:
        0
        999px
        999px
        0;

    background:
        linear-gradient(
            180deg,
            #142a4a,
            #244f7d
        );

    opacity: 0;

    transform:
        scaleY(.45);

    transition:
        opacity 150ms ease,
        transform 150ms ease;
}


/* =========================================================
   HOVER / SELECIONADO PELO TECLADO
========================================================= */

.ironstore-header-busca-produto:hover,
.ironstore-header-busca-produto.ativo {
    z-index: 2;

    border-color:
        #e4e9ef;

    background:
        linear-gradient(
            135deg,
            #ffffff 0%,
            #f6f8fb 100%
        );

    box-shadow:
        0 2px 5px rgba(15,35,60,.035),
        0 7px 18px rgba(15,35,60,.055);

    transform:
        translateY(-1px);
}

.ironstore-header-busca-produto:hover::before,
.ironstore-header-busca-produto.ativo::before {
    opacity: 1;

    transform:
        scaleY(1);
}


/* =========================================================
   FOCO ACESSÍVEL
========================================================= */

.ironstore-header-busca-produto:focus-visible {
    border-color:
        rgba(36,79,125,.25);

    background: #f7f9fb;

    box-shadow:
        inset 0 0 0 2px
        rgba(36,79,125,.12);
}


/* =========================================================
   IMAGEM
========================================================= */

.ironstore-header-busca-produto-imagem {
    position: relative;

    width: 58px;
    height: 58px;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    box-sizing: border-box;

    border:
        1px solid
        #e4e7ec;

    border-radius: 12px;

    background:
        linear-gradient(
            145deg,
            #ffffff,
            #f7f8fa
        );

    box-shadow:
        0 1px 2px rgba(16,24,40,.025),
        0 3px 7px rgba(16,24,40,.035);

    transition:
        border-color 180ms ease,
        box-shadow 180ms ease,
        transform 180ms ease;
}


/* =========================================================
   IMAGEM DO PRODUTO
========================================================= */

.ironstore-header-busca-produto-imagem img {
    width: 100%;
    height: 100%;

    display: block;

    padding: 3px;

    box-sizing: border-box;

    object-fit: contain;

    border-radius: inherit;

    transition:
        transform 220ms
        cubic-bezier(.22,1,.36,1);
}

.ironstore-header-busca-produto:hover
.ironstore-header-busca-produto-imagem {
    border-color: #d7e0e9;

    box-shadow:
        0 3px 8px rgba(15,35,60,.07);

    transform:
        translateY(-1px);
}

.ironstore-header-busca-produto:hover
.ironstore-header-busca-produto-imagem img {
    transform:
        scale(1.055);
}


/* =========================================================
   SEM IMAGEM
========================================================= */

.ironstore-header-busca-sem-imagem {
    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    border:
        1px solid
        #e4e7ec;

    border-radius: 9px;

    background: #f5f7fa;

    color: #98a2b3;

    font-size: 13px;
    font-weight: 750;
}


/* =========================================================
   INFORMAÇÕES
========================================================= */

.ironstore-header-busca-produto-info {
    min-width: 0;

    display: flex;
    flex-direction: column;

    align-items: flex-start;

    gap: 6px;
}


/* =========================================================
   NOME
========================================================= */

.ironstore-header-busca-produto-info strong {
    display: block;

    width: 100%;

    overflow: hidden;

    color: #1d2939;

    font-size: 12.5px;
    font-weight: 750;

    line-height: 1.3;

    letter-spacing: -.15px;

    text-overflow: ellipsis;
    white-space: nowrap;
}


/* =========================================================
   CATEGORIA
========================================================= */

.ironstore-header-busca-produto-info small {
    display: inline-flex;
    align-items: center;

    max-width: 100%;
    min-height: 20px;

    padding:
        0
        7px;

    box-sizing: border-box;

    overflow: hidden;

    border:
        1px solid
        #e4e9ef;

    border-radius: 999px;

    background: #f7f9fb;

    color: #65768a;

    font-size: 8px;
    font-weight: 700;

    line-height: 1;

    letter-spacing: .02em;

    text-overflow: ellipsis;
    white-space: nowrap;
}


/* =========================================================
   PREÇO
========================================================= */

.ironstore-header-busca-produto-preco {
    min-width: 82px;

    display: flex;
    flex-direction: column;

    align-items: flex-end;
    justify-content: center;

    gap: 3px;

    white-space: nowrap;
}

.ironstore-header-busca-produto-preco strong {
    color: #142a4a;

    font-size: 13px;
    font-weight: 800;

    line-height: 1.1;

    letter-spacing: -.25px;
}


/* =========================================================
   PREÇO ANTIGO
========================================================= */

.ironstore-header-busca-produto-preco small {
    color: #98a2b3;

    font-size: 9px;
    font-weight: 550;

    line-height: 1;

    text-decoration:
        line-through;

    text-decoration-thickness:
        1px;
}


/* =========================================================
   SETA
========================================================= */

.ironstore-header-busca-produto-seta {
    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    border:
        1px solid
        #edf0f4;

    border-radius: 9px;

    background: #ffffff;

    color: #98a2b3;

    font-size: 15px;
    font-weight: 500;

    box-shadow:
        0 1px 2px
        rgba(16,24,40,.025);

    transition:
        color 150ms ease,
        background 150ms ease,
        border-color 150ms ease,
        box-shadow 150ms ease,
        transform 150ms ease;
}

.ironstore-header-busca-produto:hover
.ironstore-header-busca-produto-seta,
.ironstore-header-busca-produto.ativo
.ironstore-header-busca-produto-seta {
    border-color: #142a4a;

    background:
        linear-gradient(
            135deg,
            #142a4a 0%,
            #1d3d68 100%
        );

    color: #ffffff;

    box-shadow:
        0 4px 10px
        rgba(20,42,74,.18);

    transform:
        translateX(2px);
}


/* =========================================================
   SEPARAÇÃO ENTRE ITENS
========================================================= */

.ironstore-header-busca-produto +
.ironstore-header-busca-produto {
    margin-top: 2px;
}


/* =========================================================
   SEM RESULTADOS
========================================================= */

.ironstore-header-busca-vazio {
    min-height: 180px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding:
        28px
        20px;

    box-sizing: border-box;

    text-align: center;

    background:
        radial-gradient(
            circle at 50% 35%,
            rgba(20,42,74,.035),
            transparent 45%
        );
}


/* =========================================================
   ÍCONE — SEM RESULTADOS
========================================================= */

.ironstore-header-busca-vazio-icone {
    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 11px;

    border:
        1px solid
        #e4e9ef;

    border-radius: 12px;

    background:
        linear-gradient(
            145deg,
            #ffffff,
            #f4f6f8
        );

    color: #65768a;

    font-size: 13px;
    font-weight: 800;

    box-shadow:
        0 4px 12px
        rgba(15,35,60,.06);
}

.ironstore-header-busca-vazio strong {
    color: #263b53;

    font-size: 12px;
    font-weight: 750;

    line-height: 1.3;
}

.ironstore-header-busca-vazio p {
    max-width: 260px;

    margin:
        5px
        0
        0;

    color: #8a97a6;

    font-size: 10px;
    font-weight: 500;

    line-height: 1.45;
}


/* =========================================================
   RODAPÉ
========================================================= */

.ironstore-header-busca-rodape {
    min-height: 40px;

    flex: 0 0 auto;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    gap: 17px;

    padding:
        0
        16px;

    box-sizing: border-box;

    border-top:
        1px solid
        #edf0f4;

    background:
        linear-gradient(
            180deg,
            #fbfcfd,
            #f7f9fb
        );
}

.ironstore-header-busca-rodape span {
    position: relative;

    color: #8a97a6;

    font-size: 8px;
    font-weight: 650;

    line-height: 1;

    letter-spacing: .01em;
}

.ironstore-header-busca-rodape
span + span::before {
    content: "";

    position: absolute;

    left: -9px;
    top: 50%;

    width: 3px;
    height: 3px;

    border-radius: 50%;

    background: #cfd5dc;

    transform:
        translateY(-50%);
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 850px) {

    .ironstore-header-central-pesquisa {
        width: 100%;
        max-width: none;

        z-index: 10000;
    }


    .ironstore-header-busca-resultados {
        width: 100%;

        max-width: none;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

    .ironstore-header-campo-busca-produtos {
        height: 48px;

        padding:
            0
            43px
            0
            47px;

        border-radius: 14px;

        font-size: 13px;
    }


    .ironstore-header-busca-icone {
        left: 16px;

        width: 17px;
        height: 17px;
    }


    .ironstore-header-busca-limpar {
        right: 9px;

        width: 29px;
        height: 29px;
    }


    /* =====================================================
       DROPDOWN MOBILE
    ===================================================== */

    .ironstore-header-busca-resultados {
        top:
            calc(100% + 8px);

        left: 0;

        width: 100%;

        max-height:
            min(
                480px,
                calc(100dvh - 185px)
            );

        border-radius: 15px;

        transform: none;

        transform-origin:
            top center;

        animation:
            ironstoreBuscaEntradaMobile
            180ms
            cubic-bezier(.22,1,.36,1);
    }


    @keyframes ironstoreBuscaEntradaMobile {

        from {
            opacity: 0;

            transform:
                translateY(-5px)
                scale(.99);
        }

        to {
            opacity: 1;

            transform:
                translateY(0)
                scale(1);
        }

    }


    .ironstore-header-busca-cabecalho {
        min-height: 43px;

        padding:
            0
            12px;
    }


    .ironstore-header-busca-lista {
        max-height:
            min(
                375px,
                calc(100dvh - 260px)
            );

        padding: 5px;
    }


    /* =====================================================
       PRODUTO MOBILE
    ===================================================== */

    .ironstore-header-busca-produto {
        min-height: 67px;

        grid-template-columns:
            50px
            minmax(0,1fr)
            auto;

        gap: 9px;

        padding:
            7px;

        border-radius: 11px;
    }


    .ironstore-header-busca-produto::before {
        top: 14px;
        bottom: 14px;
    }


    .ironstore-header-busca-produto-imagem {
        width: 50px;
        height: 50px;

        border-radius: 10px;
    }


    .ironstore-header-busca-produto-info {
        gap: 4px;
    }


    .ironstore-header-busca-produto-info strong {
        font-size: 11px;
    }


    .ironstore-header-busca-produto-info small {
        min-height: 18px;

        padding:
            0
            6px;

        font-size: 7px;
    }


    .ironstore-header-busca-produto-preco {
        min-width: 67px;

        gap: 2px;
    }


    .ironstore-header-busca-produto-preco strong {
        font-size: 11px;
    }


    .ironstore-header-busca-produto-preco small {
        font-size: 8px;
    }


    .ironstore-header-busca-produto-seta {
        display: none;
    }


    .ironstore-header-busca-rodape {
        display: none;
    }

}


/* =========================================================
   MOBILE PEQUENO
========================================================= */

@media (max-width: 390px) {

    .ironstore-header-busca-produto {
        grid-template-columns:
            47px
            minmax(0,1fr);

        align-items: center;
    }


    .ironstore-header-busca-produto-imagem {
        width: 47px;
        height: 47px;
    }


    .ironstore-header-busca-produto-preco {
        grid-column: 2;

        min-width: 0;

        align-items: flex-start;

        margin-top: -2px;
    }

}


/* =========================================================
   TOUCH
========================================================= */

@media (hover: none) {

    .ironstore-header-busca-produto:hover {
        border-color: transparent;

        background: transparent;

        box-shadow: none;

        transform: none;
    }


    .ironstore-header-busca-produto:hover::before {
        opacity: 0;

        transform:
            scaleY(.45);
    }


    .ironstore-header-busca-produto.ativo {
        border-color: #e4e9ef;

        background: #f5f7fa;

        box-shadow: none;

        transform: none;
    }


    .ironstore-header-busca-produto.ativo::before {
        opacity: 1;

        transform:
            scaleY(1);
    }

}


/* =========================================================
   REDUZIR MOVIMENTO
========================================================= */

@media (prefers-reduced-motion: reduce) {

    .ironstore-header-busca-resultados,
    .ironstore-header-busca-produto,
    .ironstore-header-busca-produto::before,
    .ironstore-header-busca-produto-imagem,
    .ironstore-header-busca-produto-imagem img,
    .ironstore-header-busca-produto-seta,
    .ironstore-header-busca-icone,
    .ironstore-header-busca-limpar {
        animation: none !important;

        transition: none !important;
    }

}

`;

export default classicoHeader;