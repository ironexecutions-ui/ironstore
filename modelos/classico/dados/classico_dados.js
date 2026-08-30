const classicoDados = `

    /* =========================================================
       ÁREA PRINCIPAL
    ========================================================= */

.ironstore-perfil-dados-area {
    position: relative;

    width: 100%;
    max-width: 1180px;

    margin: 20px auto;
    padding: 32px 28px;

    box-sizing: border-box;

    font-family: inherit;
    color: #101828;

    /* FUNDO PREMIUM */
    background:
        radial-gradient(
            circle at 50% 0%,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(255, 255, 255, 0) 38%
        ),
        linear-gradient(
            180deg,
            #f8f9fb 0%,
            #f4f6f8 45%,
            #f6f7f9 100%
        );

    border:
        1px solid
        rgba(15, 23, 42, 0.05);

    border-radius: 18px;

    box-shadow:
        inset 0 1px 0
            rgba(255, 255, 255, 0.8),
        0 8px 30px
            rgba(15, 23, 42, 0.035);
            
}


    /* =========================================================
       TÍTULO
    ========================================================= */

    .ironstore-perfil-dados-area h2 {
        margin: 0 0 24px;

        color: #101828;

        font-size: 24px;
        font-weight: 750;
        line-height: 1.2;

        letter-spacing: -0.6px;
    }


    /* =========================================================
       CARD DO CLIENTE
    ========================================================= */

    .ironstore-perfil-dados-cliente {
        position: relative;

        width: 100%;

        display: flex;
        align-items: center;

        gap: 18px;

        margin-bottom: 20px;
        padding: 22px;

        box-sizing: border-box;

        overflow: hidden;

        border: 1px solid #e4e7ec;
        border-radius: 20px;

        background:
            linear-gradient(
                135deg,
                #ffffff 0%,
                #fafbfc 65%,
                #f5f7fa 100%
            );

        box-shadow:
            0 1px 2px rgba(16, 24, 40, 0.03),
            0 8px 24px rgba(16, 24, 40, 0.045);
    }


    /* =========================================================
       DETALHE SUPERIOR
    ========================================================= */

    .ironstore-perfil-dados-cliente::before {
        content: "";

        position: absolute;

        top: 0;
        left: 22px;
        right: 22px;

        height: 3px;

        border-radius: 0 0 999px 999px;

        background:
            linear-gradient(
                90deg,
                #142a4a,
                #345b88,
                transparent
            );

        opacity: 0.85;
    }


    /* =========================================================
       FOTO
    ========================================================= */

    .ironstore-perfil-dados-cliente img {
        width: 76px;
        height: 76px;

        flex: 0 0 76px;

        display: block;

        object-fit: cover;

        border: 3px solid #ffffff;
        border-radius: 18px;

        background: #f2f4f7;

        box-shadow:
            0 0 0 1px #e4e7ec,
            0 5px 14px rgba(15, 23, 42, 0.12);
    }


    /* =========================================================
       IDENTIDADE
    ========================================================= */

    .ironstore-perfil-dados-identidade {
        min-width: 0;
        flex: 1;
    }


    /* =========================================================
       NOME
    ========================================================= */

    .ironstore-perfil-dados-cliente h3 {
        width: fit-content;

        margin: 0 0 6px;

        color: #101828;

        font-size: 20px;
        font-weight: 750;
        line-height: 1.2;

        letter-spacing: -0.4px;
    }


    /* =========================================================
       NOME EDITÁVEL
    ========================================================= */

    .ironstore-perfil-dado-editavel {
        position: relative;

        cursor: pointer;

        transition:
            color 160ms ease,
            opacity 160ms ease;
    }

    .ironstore-perfil-dado-editavel:hover {
        color: #345b88;
    }


    /* pequeno indicador de edição */

    .ironstore-perfil-dado-editavel::after {
        content: "Editar";

        display: inline-block;

        margin-left: 9px;

        color: #98a2b3;

        font-size: 10px;
        font-weight: 600;

        letter-spacing: 0;
        vertical-align: middle;

        opacity: 0;

        transform: translateY(-1px);

        transition: opacity 160ms ease;
    }

    .ironstore-perfil-dado-editavel:hover::after {
        opacity: 1;
    }


    /* =========================================================
       EMAIL - NÃO EDITÁVEL
    ========================================================= */

    .ironstore-perfil-dado-email {
        margin: 0;

        color: #667085;

        font-size: 13px;
        font-weight: 500;
        line-height: 1.5;

        word-break: break-word;

        cursor: default;
    }


    /* =========================================================
       INFORMAÇÕES
    ========================================================= */

    .ironstore-perfil-dados-informacoes {
        width: 100%;

        display: grid;

        grid-template-columns:
            repeat(2, minmax(0, 1fr));

        gap: 12px;
    }


    /* =========================================================
       CARD EDITÁVEL
    ========================================================= */

    .ironstore-perfil-dado-card {
        position: relative;

        min-width: 0;
        min-height: 62px;

        display: flex;
        flex-direction: column;
        justify-content: center;

        gap: 5px;

        margin: 0;
        padding: 14px 16px;

        box-sizing: border-box;

        overflow: hidden;

        border: 1px solid #eaecf0;
        border-radius: 14px;

        background: #ffffff;

        color: #475467;

        font-size: 13px;
        font-weight: 500;
        line-height: 1.4;

        cursor: pointer;

        box-shadow:
            0 1px 2px rgba(16, 24, 40, 0.025);

        transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            transform 180ms ease,
            background 180ms ease;
    }


    /* =========================================================
       HOVER
    ========================================================= */

    .ironstore-perfil-dado-card:hover {
        border-color: #cfd6df;

        background:
            linear-gradient(
                135deg,
                #ffffff,
                #fbfcfd
            );

        box-shadow:
            0 5px 16px rgba(16, 24, 40, 0.055);

        transform: translateY(-1px);
    }


    /* linha lateral indicando que é clicável */

    .ironstore-perfil-dado-card::before {
        content: "";

        position: absolute;

        top: 12px;
        bottom: 12px;
        left: 0;

        width: 3px;

        border-radius: 0 999px 999px 0;

        background: #345b88;

        opacity: 0;

        transform: scaleY(0.5);

        transition:
            opacity 180ms ease,
            transform 180ms ease;
    }

    .ironstore-perfil-dado-card:hover::before {
        opacity: 0.75;
        transform: scaleY(1);
    }


    /* =========================================================
       LABEL
    ========================================================= */

    .ironstore-perfil-dado-card > strong {
        display: block;

        color: #344054;

        font-size: 11px;
        font-weight: 700;

        line-height: 1.2;

        text-transform: uppercase;
        letter-spacing: 0.45px;
    }


    /* =========================================================
       VALOR
    ========================================================= */

    .ironstore-perfil-dado-card > span {
        display: block;

        min-width: 0;

        overflow: hidden;

        color: #475467;

        font-size: 13px;
        font-weight: 500;

        text-overflow: ellipsis;
        white-space: nowrap;
    }


    /* =========================================================
       ESTADO EDITANDO
    ========================================================= */

    .ironstore-perfil-dado-card.editando {
        overflow: visible;

        cursor: default;

        border-color: #9fb3ca;

        background:
            linear-gradient(
                135deg,
                #ffffff 0%,
                #f8fafc 100%
            );

        box-shadow:
            0 0 0 3px rgba(52, 91, 136, 0.08),
            0 8px 22px rgba(16, 24, 40, 0.06);

        transform: none;
    }

    .ironstore-perfil-dado-card.editando::before {
        opacity: 1;

        transform: scaleY(1);
    }


    /* =========================================================
       ÁREA DE EDIÇÃO
    ========================================================= */

    .ironstore-perfil-dados-edicao {
        width: 100%;

        display: flex;
        flex-direction: column;

        gap: 9px;

        margin-top: 5px;
    }


    /* =========================================================
       INPUTS
    ========================================================= */

    .ironstore-perfil-dados-edicao input {
        width: 100%;
        min-width: 0;
        height: 42px;

        padding: 0 12px;

        box-sizing: border-box;

        outline: none;

        border: 1px solid #d0d5dd;
        border-radius: 10px;

        background: #ffffff;

        color: #101828;

        font-family: inherit;
        font-size: 13px;
        font-weight: 500;

        box-shadow:
            0 1px 2px rgba(16, 24, 40, 0.03);

        transition:
            border-color 160ms ease,
            box-shadow 160ms ease;
    }

    .ironstore-perfil-dados-edicao input::placeholder {
        color: #98a2b3;
    }

    .ironstore-perfil-dados-edicao input:hover {
        border-color: #b9c1cc;
    }

    .ironstore-perfil-dados-edicao input:focus {
        border-color: #52759e;

        box-shadow:
            0 0 0 3px rgba(52, 91, 136, 0.10);
    }


    /* =========================================================
       BOTÕES DA EDIÇÃO
    ========================================================= */

    .ironstore-perfil-dados-edicao-acoes {
        display: flex;
        align-items: center;

        gap: 7px;
    }

    .ironstore-perfil-dados-edicao-acoes button {
        min-height: 34px;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        padding: 7px 13px;

        box-sizing: border-box;

        border: none;
        border-radius: 9px;

        font-family: inherit;
        font-size: 12px;
        font-weight: 650;

        cursor: pointer;

        transition:
            background 160ms ease,
            color 160ms ease,
            opacity 160ms ease,
            transform 160ms ease;
    }


    /* SALVAR */

    .ironstore-perfil-dados-edicao-acoes button:first-child {
        background:
            linear-gradient(
                135deg,
                #142a4a,
                #274c75
            );

        color: #ffffff;

        box-shadow:
            0 3px 8px rgba(20, 42, 74, 0.18);
    }

    .ironstore-perfil-dados-edicao-acoes button:first-child:hover:not(:disabled) {
        transform: translateY(-1px);

        background:
            linear-gradient(
                135deg,
                #10243f,
                #203f63
            );
    }


    /* CANCELAR */

    .ironstore-perfil-dados-edicao-acoes button:last-child {
        border: 1px solid #e4e7ec;

        background: #ffffff;

        color: #667085;
    }

    .ironstore-perfil-dados-edicao-acoes button:last-child:hover:not(:disabled) {
        background: #f9fafb;
        color: #344054;
    }


    /* DESABILITADO */

    .ironstore-perfil-dados-edicao-acoes button:disabled {
        cursor: not-allowed;

        opacity: 0.55;

        transform: none;
    }


    /* =========================================================
       ERRO DE EDIÇÃO
    ========================================================= */

    .ironstore-perfil-dados-erro-edicao {
        width: 100%;

        margin: -5px 0 15px;
        padding: 11px 14px;

        box-sizing: border-box;

        border: 1px solid #fecdca;
        border-radius: 11px;

        background: #fef3f2;

        color: #b42318;

        font-size: 12.5px;
        font-weight: 550;
        line-height: 1.4;
    }


    /* =========================================================
       CARREGAMENTO / ERRO PRINCIPAL
    ========================================================= */

    .ironstore-perfil-dados-area > p {
        margin: 0;

        padding: 30px 20px;

        text-align: center;

        color: #667085;

        font-size: 13px;
        font-weight: 500;
    }


    /* =========================================================
       TABLET
    ========================================================= */

    @media (max-width: 800px) {

        .ironstore-perfil-dados-area {
            padding: 26px 20px;
        }

        .ironstore-perfil-dados-informacoes {
            grid-template-columns: 1fr;
        }

        .ironstore-perfil-dado-card > span {
            white-space: normal;
            overflow: visible;

            text-overflow: initial;
        }
    }


    /* =========================================================
       MOBILE
    ========================================================= */

    @media (max-width: 600px) {

        .ironstore-perfil-dados-area {
            padding: 22px 14px;
        }

        .ironstore-perfil-dados-area h2 {
            margin-bottom: 18px;

            font-size: 21px;
        }

        .ironstore-perfil-dados-cliente {
            gap: 14px;

            padding: 18px 16px;

            border-radius: 17px;
        }

        .ironstore-perfil-dados-cliente::before {
            left: 16px;
            right: 16px;
        }

        .ironstore-perfil-dados-cliente img {
            width: 62px;
            height: 62px;

            flex-basis: 62px;

            border-radius: 15px;
        }

        .ironstore-perfil-dados-cliente h3 {
            font-size: 17px;
        }

        .ironstore-perfil-dado-email {
            font-size: 12px;
        }

        .ironstore-perfil-dados-informacoes {
            gap: 9px;
        }

        .ironstore-perfil-dado-card {
            min-height: 58px;

            padding: 13px 14px;

            border-radius: 12px;
        }

        .ironstore-perfil-dado-card > strong {
            font-size: 10px;
        }

        .ironstore-perfil-dado-card > span {
            font-size: 12.5px;
        }

        .ironstore-perfil-dados-edicao input {
            height: 44px;

            font-size: 16px;
        }

        .ironstore-perfil-dados-edicao-acoes {
            width: 100%;
        }

        .ironstore-perfil-dados-edicao-acoes button {
            min-height: 40px;

            flex: 1;
        }


        /*
            No celular não dependemos de hover
            para indicar que o dado é editável.
        */

        .ironstore-perfil-dado-card::after {
            content: "Editar";

            position: absolute;

            top: 11px;
            right: 12px;

            color: #98a2b3;

            font-size: 9px;
            font-weight: 650;

            text-transform: uppercase;
            letter-spacing: 0.4px;
        }

        .ironstore-perfil-dado-card.editando::after {
            display: none;
        }

        .ironstore-perfil-dado-editavel::after {
            opacity: 0.75;
        }
    }


    /* =========================================================
       MOBILE PEQUENO
    ========================================================= */

    @media (max-width: 390px) {

        .ironstore-perfil-dados-cliente {
            align-items: flex-start;
        }

        .ironstore-perfil-dados-cliente img {
            width: 54px;
            height: 54px;

            flex-basis: 54px;

            border-radius: 13px;
        }

        .ironstore-perfil-dados-cliente h3 {
            font-size: 16px;
        }

        .ironstore-perfil-dados-edicao-acoes {
            flex-direction: column;
        }

        .ironstore-perfil-dados-edicao-acoes button {
            width: 100%;
        }
    }


    /* =========================================================
       SEM HOVER EM DISPOSITIVOS TOUCH
    ========================================================= */

    @media (hover: none) {

        .ironstore-perfil-dado-card:hover {
            border-color: #eaecf0;

            background: #ffffff;

            box-shadow:
                0 1px 2px rgba(16, 24, 40, 0.025);

            transform: none;
        }

        .ironstore-perfil-dado-card.editando {
            border-color: #9fb3ca;

            background:
                linear-gradient(
                    135deg,
                    #ffffff 0%,
                    #f8fafc 100%
                );

            box-shadow:
                0 0 0 3px rgba(52, 91, 136, 0.08),
                0 8px 22px rgba(16, 24, 40, 0.06);
        }
    }



/* =========================================================
   MODAL ENDEREÇO — MODERNO
========================================================= */

.ironstore-endereco-modal-fundo {
    position: fixed;
    inset: 0;
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 24px;

    background:
        rgba(5, 12, 24, 0.52);

    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    animation:
        ironstoreEnderecoFundo 0.2s ease;
}


/* =========================================================
   MODAL
========================================================= */

.ironstore-endereco-modal {
    position: relative;

    width: 100%;
    max-width: 560px;
    max-height: calc(100vh - 48px);

    overflow-y: auto;

    padding: 30px;

    border:
        1px solid rgba(255, 255, 255, 0.75);

    border-radius: 24px;

    background:
        rgba(255, 255, 255, 0.97);

    box-shadow:
        0 30px 80px rgba(5, 20, 40, 0.24),
        0 8px 24px rgba(5, 20, 40, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.9);

    animation:
        ironstoreEnderecoModal 0.28s
        cubic-bezier(0.22, 1, 0.36, 1);
}


/* =========================================================
   CABEÇALHO
========================================================= */

.ironstore-endereco-modal h3 {
    margin:
        0 0 26px;

    color: #0f2745;

    font-size: 22px;
    font-weight: 800;
    line-height: 1.2;

    letter-spacing: -0.4px;
}


/* LINHA DECORATIVA */

.ironstore-endereco-modal h3::after {
    content: "";

    display: block;

    width: 38px;
    height: 4px;

    margin-top: 10px;

    border-radius: 999px;

    background:
        linear-gradient(
            90deg,
            #163d6b,
            #4f7eae
        );
}


/* =========================================================
   LABEL
========================================================= */

.ironstore-endereco-modal label {
    display: flex;
    flex-direction: column;

    gap: 8px;

    margin-bottom: 17px;

    color: #53657a;

    font-size: 11px;
    font-weight: 800;

    letter-spacing: 0.65px;
    text-transform: uppercase;
}


/* =========================================================
   INPUT
========================================================= */

.ironstore-endereco-modal input {
    width: 100%;
    min-height: 50px;

    box-sizing: border-box;

    padding:
        0 15px;

    border:
        1px solid #dce4ed;

    border-radius: 13px;

    outline: none;

    background:
        #f7f9fc;

    color:
        #102a49;

    font-size: 15px;
    font-weight: 550;

    transition:
        border-color 0.2s ease,
        background 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s ease;
}


.ironstore-endereco-modal input::placeholder {
    color: #9aa8b8;
    font-weight: 450;
}


.ironstore-endereco-modal input:hover {
    border-color: #c5d1df;

    background: #ffffff;
}


.ironstore-endereco-modal input:focus {
    border-color: #3d6e9f;

    background: #ffffff;

    box-shadow:
        0 0 0 4px
        rgba(52, 91, 136, 0.11);

    transform:
        translateY(-1px);
}


/* =========================================================
   CEP — PRIMEIRO E MAIS IMPORTANTE
========================================================= */

.ironstore-endereco-modal
label:first-of-type {
    position: relative;

    margin-bottom: 22px;
}


.ironstore-endereco-modal
label:first-of-type input {
    min-height: 56px;

    padding:
        0 17px;

    border-color:
        #cbd9e8;

    background:
        linear-gradient(
            135deg,
            #f4f8fc,
            #ffffff
        );

    color: #0c315a;

    font-size: 17px;
    font-weight: 750;

    letter-spacing: 0.7px;

    box-shadow:
        0 5px 16px
        rgba(25, 63, 101, 0.06);
}


.ironstore-endereco-modal
label:first-of-type input:focus {
    border-color:
        #2e6297;

    box-shadow:
        0 0 0 4px
        rgba(46, 98, 151, 0.12),
        0 8px 22px
        rgba(25, 63, 101, 0.08);
}


/* =========================================================
   ERRO
========================================================= */

.ironstore-endereco-modal
.ironstore-perfil-dados-erro-edicao {
    margin:
        -5px 0 20px;

    padding:
        12px 14px;

    border:
        1px solid #f0cccc;

    border-radius: 12px;

    background:
        #fff6f6;

    color:
        #a73838;

    font-size: 13px;
    font-weight: 600;
}


/* =========================================================
   ÁREA DOS BOTÕES
========================================================= */

.ironstore-endereco-modal-acoes {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    gap: 10px;

    margin-top: 28px;
    padding-top: 20px;

    border-top:
        1px solid #edf1f5;
}


.ironstore-endereco-modal-acoes button {
    min-height: 46px;

    padding:
        0 20px;

    border-radius: 12px;

    font-family: inherit;
    font-size: 13px;
    font-weight: 750;

    cursor: pointer;

    transition:
        transform 0.18s ease,
        background 0.18s ease,
        border-color 0.18s ease,
        box-shadow 0.18s ease;
}


/* =========================================================
   CANCELAR
========================================================= */

.ironstore-endereco-modal-acoes
button:first-child {
    border:
        1px solid #dce3eb;

    background:
        #f7f9fb;

    color:
        #536579;
}


.ironstore-endereco-modal-acoes
button:first-child:hover {
    border-color:
        #cbd5e0;

    background:
        #eef2f6;

    color:
        #243c57;
}


/* =========================================================
   SALVAR
========================================================= */

.ironstore-endereco-modal-acoes
button:last-child {
    border:
        1px solid #163b65;

    background:
        linear-gradient(
            135deg,
            #183e69,
            #285a8d
        );

    color:
        #ffffff;

    box-shadow:
        0 8px 20px
        rgba(22, 59, 101, 0.20);
}


.ironstore-endereco-modal-acoes
button:last-child:hover {
    transform:
        translateY(-2px);

    box-shadow:
        0 11px 25px
        rgba(22, 59, 101, 0.27);
}


.ironstore-endereco-modal-acoes
button:last-child:active {
    transform:
        translateY(0);

    box-shadow:
        0 5px 12px
        rgba(22, 59, 101, 0.18);
}


/* =========================================================
   DESABILITADO
========================================================= */

.ironstore-endereco-modal-acoes
button:disabled {
    opacity: 0.5;

    cursor: not-allowed;

    transform: none;

    box-shadow: none;
}


/* =========================================================
   SCROLL
========================================================= */

.ironstore-endereco-modal::-webkit-scrollbar {
    width: 6px;
}


.ironstore-endereco-modal::-webkit-scrollbar-thumb {
    border-radius: 999px;

    background:
        #cad5e0;
}


/* =========================================================
   ANIMAÇÕES
========================================================= */

@keyframes ironstoreEnderecoFundo {

    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}


@keyframes ironstoreEnderecoModal {

    from {
        opacity: 0;

        transform:
            translateY(14px)
            scale(0.975);
    }

    to {
        opacity: 1;

        transform:
            translateY(0)
            scale(1);
    }
}


/* =========================================================
   MOBILE — BOTTOM SHEET
========================================================= */

@media (max-width: 600px) {

    .ironstore-endereco-modal-fundo {
        align-items: flex-end;

        padding: 0;

        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
    }


    .ironstore-endereco-modal {
        width: 100%;
        max-width: none;

        max-height: 92vh;

        padding:
            26px 18px 22px;

        border: none;

        border-radius:
            26px 26px 0 0;

        box-shadow:
            0 -20px 60px
            rgba(0, 18, 40, 0.18);

        animation:
            ironstoreEnderecoMobile 0.3s
            cubic-bezier(0.22, 1, 0.36, 1);
    }


    /* BARRINHA SUPERIOR */

    .ironstore-endereco-modal::before {
        content: "";

        display: block;

        width: 42px;
        height: 5px;

        margin:
            -12px auto 20px;

        border-radius: 999px;

        background:
            #d5dde6;
    }


    .ironstore-endereco-modal h3 {
        margin-bottom: 24px;

        font-size: 21px;
    }


    .ironstore-endereco-modal input {
        min-height: 52px;

        font-size: 16px;
    }


    .ironstore-endereco-modal
    label:first-of-type input {
        min-height: 58px;

        font-size: 18px;
    }


    .ironstore-endereco-modal-acoes {
        position: sticky;
        bottom: -22px;

        z-index: 5;

        margin:
            28px -18px -22px;

        padding:
            16px 18px
            calc(
                18px +
                env(safe-area-inset-bottom)
            );

        background:
            rgba(255, 255, 255, 0.96);

        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);

        box-shadow:
            0 -8px 25px
            rgba(20, 42, 74, 0.06);
    }


    .ironstore-endereco-modal-acoes button {
        flex: 1;

        min-height: 50px;

        padding:
            0 12px;
    }
}


@keyframes ironstoreEnderecoMobile {

    from {
        opacity: 0;

        transform:
            translateY(100%);
    }

    to {
        opacity: 1;

        transform:
            translateY(0);
    }
}







    
`;

export default classicoDados;