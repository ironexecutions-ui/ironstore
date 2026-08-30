const classicoEntrar = `

/* =========================================================
   PÁGINA
========================================================= */

.ironstore-entrar {
    width: 100%;
    min-height: 680px;
    padding: 52px 24px 80px;
    box-sizing: border-box;

    background:
        linear-gradient(
            180deg,
            #f8fafc 0%,
            #ffffff 420px
        );

    color: #111827;
    font-family: inherit;
}


/* =========================================================
   CARREGANDO
========================================================= */

.ironstore-entrar-carregando {
    width: 100%;
    min-height: 500px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #64748b;

    font-size: 13px;
    font-weight: 600;
}


/* =========================================================
   LOGIN
========================================================= */

.ironstore-entrar-login {
    width: 100%;
    max-width: 440px;

    margin: 65px auto;

    padding: 46px 42px;

    box-sizing: border-box;

    border: 1px solid #e5e7eb;
    border-radius: 22px;

    background: rgba(255, 255, 255, 0.96);

    box-shadow:
        0 24px 60px rgba(15, 23, 42, 0.08),
        0 3px 10px rgba(15, 23, 42, 0.03);

    text-align: center;
}


/* =========================================================
   LOGIN TÍTULO
========================================================= */

.ironstore-entrar-login h1 {
    margin: 0 0 10px;

    color: #111827;

    font-size: 30px;
    font-weight: 800;

    line-height: 1.15;

    letter-spacing: -0.8px;
}


/* =========================================================
   LOGIN DESCRIÇÃO
========================================================= */

.ironstore-entrar-login > p {
    max-width: 340px;

    margin: 0 auto 30px;

    color: #64748b;

    font-size: 13px;
    font-weight: 450;

    line-height: 1.65;
}


/* =========================================================
   GOOGLE
========================================================= */

.ironstore-google-botao {
    width: 100%;
    min-height: 44px;

    display: flex;
    align-items: center;
    justify-content: center;
}


/* =========================================================
   PERFIL
========================================================= */

.ironstore-perfil {
    width: min(1080px, 100%);

    margin: 0 auto;

    padding: 34px;

    box-sizing: border-box;

    border: 1px solid #e5e7eb;
    border-radius: 24px;

    background: #ffffff;

    box-shadow:
        0 22px 60px rgba(15, 23, 42, 0.06),
        0 2px 8px rgba(15, 23, 42, 0.025);

    overflow: hidden;
}


/* =========================================================
   CABEÇALHO PERFIL
========================================================= */

.ironstore-perfil-cabecalho {
    position: relative;

    display: flex;
    align-items: center;

    gap: 18px;

    margin: -34px -34px 30px;

    padding: 30px 34px;

    background:
        linear-gradient(
            135deg,
            #f8fafc 0%,
            #ffffff 60%,
            #f1f5f9 100%
        );

    border-bottom: 1px solid #e5e7eb;
}


/* =========================================================
   FOTO
========================================================= */

.ironstore-perfil-cabecalho img {
    width: 72px;
    height: 72px;

    flex-shrink: 0;

    object-fit: cover;

    border-radius: 50%;

    border: 4px solid #ffffff;

    box-shadow:
        0 0 0 1px #e2e8f0,
        0 8px 22px rgba(15, 23, 42, 0.12);
}


/* =========================================================
   NOME
========================================================= */

.ironstore-perfil-cabecalho h1 {
    margin: 0 0 6px;

    color: #0f172a;

    font-size: 25px;
    font-weight: 800;

    line-height: 1.15;

    letter-spacing: -0.7px;
}


/* =========================================================
   EMAIL
========================================================= */

.ironstore-perfil-cabecalho span {
    display: block;

    color: #64748b;

    font-size: 12px;
    font-weight: 500;
}


/* =========================================================
   BOTÃO SAIR
========================================================= */

.ironstore-perfil-cabecalho > button {
    margin-left: auto;

    height: 40px;

    padding: 0 17px;

    border: 1px solid #e2e8f0;
    border-radius: 10px;

    background: rgba(255, 255, 255, 0.8);

    color: #475569;

    font-family: inherit;
    font-size: 12px;
    font-weight: 700;

    cursor: pointer;

    box-shadow:
        0 2px 5px rgba(15, 23, 42, 0.03);

    transition:
        border-color 160ms ease,
        background 160ms ease,
        color 160ms ease,
        transform 160ms ease;
}

.ironstore-perfil-cabecalho > button:hover {
    border-color: #fecaca;

    background: #fff1f2;

    color: #dc2626;
}

.ironstore-perfil-cabecalho > button:active {
    transform: scale(0.97);
}


/* =========================================================
   ÁREAS
========================================================= */

.ironstore-perfil-area {
    display: grid;

    grid-template-columns:
        repeat(
            2,
            minmax(0, 1fr)
        );

    column-gap: 22px;
    row-gap: 19px;

    margin-bottom: 22px;

    padding: 24px;

    border: 1px solid #e8edf3;
    border-radius: 16px;

    background: #ffffff;

    box-shadow:
        0 2px 8px rgba(15, 23, 42, 0.025);
}


/* =========================================================
   TÍTULO DA ÁREA
========================================================= */

.ironstore-perfil-area h2 {
    position: relative;

    grid-column: 1 / -1;

    margin: 0 0 7px;

    padding-bottom: 15px;

    border-bottom: 1px solid #f1f5f9;

    color: #111827;

    font-size: 16px;
    font-weight: 800;

    line-height: 1.2;

    letter-spacing: -0.25px;
}


/* =========================================================
   LABEL
========================================================= */

.ironstore-perfil-area label {
    min-width: 0;

    display: flex;
    flex-direction: column;

    gap: 7px;

    color: #475569;

    font-size: 11px;
    font-weight: 700;

    letter-spacing: 0.05px;
}


/* =========================================================
   INPUTS
========================================================= */

.ironstore-perfil-area input {
    width: 100%;
    height: 46px;

    padding: 0 14px;

    box-sizing: border-box;

    border: 1px solid #dfe5ec;
    border-radius: 10px;

    outline: none;

    background: #fbfcfd;

    color: #0f172a;

    font-family: inherit;
    font-size: 13px;
    font-weight: 500;

    transition:
        border-color 160ms ease,
        box-shadow 160ms ease,
        background 160ms ease;
}

.ironstore-perfil-area input:hover {
    border-color: #cbd5e1;

    background: #ffffff;
}

.ironstore-perfil-area input:focus {
    border-color: #64748b;

    background: #ffffff;

    box-shadow:
        0 0 0 3px rgba(100, 116, 139, 0.10);
}


/* =========================================================
   PLACEHOLDER
========================================================= */

.ironstore-perfil-area input::placeholder,
.ironstore-perfil-area textarea::placeholder {
    color: #a8b2c1;
}


/* =========================================================
   EMAIL BLOQUEADO
========================================================= */

.ironstore-perfil-area input:disabled {
    cursor: not-allowed;

    border-color: #e5e7eb;

    background: #f3f4f6;

    color: #64748b;

    opacity: 1;
}


/* =========================================================
   TEXTO AUXILIAR
========================================================= */

.ironstore-perfil-area small {
    margin-top: -1px;

    color: #94a3b8;

    font-size: 10px;
    font-weight: 500;

    line-height: 1.5;
}


/* =========================================================
   TEXTAREA
========================================================= */

.ironstore-perfil-area textarea {
    grid-column: 1 / -1;

    width: 100%;
    min-height: 125px;

    padding: 14px;

    box-sizing: border-box;

    resize: vertical;

    border: 1px solid #dfe5ec;
    border-radius: 10px;

    outline: none;

    background: #fbfcfd;

    color: #0f172a;

    font-family: inherit;
    font-size: 13px;
    font-weight: 500;

    line-height: 1.55;

    transition:
        border-color 160ms ease,
        box-shadow 160ms ease,
        background 160ms ease;
}

.ironstore-perfil-area textarea:hover {
    border-color: #cbd5e1;

    background: #ffffff;
}

.ironstore-perfil-area textarea:focus {
    border-color: #64748b;

    background: #ffffff;

    box-shadow:
        0 0 0 3px rgba(100, 116, 139, 0.10);
}


/* =========================================================
   ERRO
========================================================= */

.ironstore-entrar-erro {
    margin: 0 0 18px;

    padding: 12px 14px;

    border: 1px solid #fecaca;
    border-radius: 10px;

    background: #fff1f2;

    color: #b91c1c;

    font-size: 11px;
    font-weight: 600;

    line-height: 1.45;
}


/* =========================================================
   SUCESSO
========================================================= */

.ironstore-entrar-sucesso {
    margin: 0 0 18px;

    padding: 12px 14px;

    border: 1px solid #bbf7d0;
    border-radius: 10px;

    background: #f0fdf4;

    color: #15803d;

    font-size: 11px;
    font-weight: 600;

    line-height: 1.45;
}


/* =========================================================
   BOTÃO SALVAR
========================================================= */

.ironstore-perfil > button:last-child {
    min-width: 180px;
    height: 46px;

    float: right;

    margin-top: 4px;

    padding: 0 22px;

    border: 1px solid #0f172a;
    border-radius: 11px;

    background: #0f172a;

    color: #ffffff;

    font-family: inherit;
    font-size: 12px;
    font-weight: 750;

    cursor: pointer;

    box-shadow:
        0 7px 18px rgba(15, 23, 42, 0.15);

    transition:
        background 160ms ease,
        transform 160ms ease,
        box-shadow 160ms ease;
}

.ironstore-perfil > button:last-child:hover {
    background: #1e293b;

    box-shadow:
        0 10px 24px rgba(15, 23, 42, 0.19);
}

.ironstore-perfil > button:last-child:active {
    transform: translateY(1px);
}

.ironstore-perfil > button:last-child:disabled {
    cursor: not-allowed;

    opacity: 0.55;
}


/* =========================================================
   LIMPAR FLOAT
========================================================= */

.ironstore-perfil::after {
    content: "";

    display: block;

    clear: both;
}


/* =========================================================
   RESPONSIVO
========================================================= */

@media (max-width: 720px) {

    .ironstore-entrar {
        padding:
            28px
            14px
            55px;
    }

    .ironstore-perfil {
        padding: 18px;

        border-radius: 18px;
    }

    .ironstore-perfil-cabecalho {
        margin:
            -18px
            -18px
            22px;

        padding:
            22px
            18px;

        gap: 13px;
    }

    .ironstore-perfil-cabecalho img {
        width: 58px;
        height: 58px;
    }

    .ironstore-perfil-cabecalho h1 {
        font-size: 19px;
    }

    .ironstore-perfil-cabecalho > button {
        padding: 0 12px;
    }

    .ironstore-perfil-area {
        grid-template-columns: 1fr;

        padding: 18px;

        border-radius: 14px;
    }

    .ironstore-perfil-area h2,
    .ironstore-perfil-area textarea {
        grid-column: 1;
    }

    .ironstore-perfil > button:last-child {
        width: 100%;

        float: none;
    }

    .ironstore-entrar-login {
        margin: 35px auto;

        padding:
            36px
            22px;

        border-radius: 18px;
    }
}
/* =========================================================
   LOGIN PROFISSIONAL
========================================================= */

.ironstore-login-topo {
    width: 100%;
    margin-bottom: 28px;
    text-align: center;
}

.ironstore-login-topo h1 {
    margin: 0 0 10px;

    color: #0f172a;

    font-size: 28px;
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.7px;
}

.ironstore-login-topo p {
    max-width: 330px;

    margin: 0 auto;

    color: #64748b;

    font-size: 13px;
    font-weight: 450;
    line-height: 1.6;
}


/* =========================================================
   ÁREA GOOGLE
========================================================= */

.ironstore-login-google-area {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 5px 0 22px;
}

.ironstore-google-botao {
    width: 100%;
    min-height: 44px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.ironstore-google-botao > div {
    max-width: 100%;
}


/* =========================================================
   SEGURANÇA LOGIN
========================================================= */

.ironstore-login-seguranca {
    position: relative;

    margin-top: 3px;
    padding-top: 20px;

    border-top: 1px solid #eef2f7;

    color: #94a3b8;

    font-size: 10.5px;
    font-weight: 500;
    line-height: 1.55;
    text-align: center;
}


/* =========================================================
   INTRODUÇÃO CADASTRO
========================================================= */

.ironstore-cadastro-introducao {
    width: min(1080px, 100%);

    margin: 0 auto 22px;

    padding: 4px 4px 0;

    box-sizing: border-box;
}

.ironstore-cadastro-etapa {
    display: inline-flex;
    align-items: center;

    min-height: 25px;

    margin-bottom: 12px;
    padding: 0 10px;

    border: 1px solid #dbe3ec;
    border-radius: 999px;

    background: #f8fafc;

    color: #475569;

    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.9px;
}

.ironstore-cadastro-introducao h1 {
    margin: 0 0 7px;

    color: #0f172a;

    font-size: 27px;
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.7px;
}

.ironstore-cadastro-introducao p {
    max-width: 600px;

    margin: 0;

    color: #64748b;

    font-size: 12px;
    font-weight: 450;
    line-height: 1.6;
}


/* =========================================================
   CAMPO INVÁLIDO
========================================================= */

.ironstore-perfil-area .ironstore-campo-invalido {
    display: flex;
    align-items: center;

    margin-top: 1px;

    color: #dc2626;

    font-size: 10px;
    font-weight: 650;
    line-height: 1.4;
}

.ironstore-perfil-area label:has(
    .ironstore-campo-invalido
) input {
    border-color: #fca5a5;
    background: #fffafa;
}

.ironstore-perfil-area label:has(
    .ironstore-campo-invalido
) input:focus {
    border-color: #ef4444;

    box-shadow:
        0 0 0 3px rgba(239, 68, 68, 0.08);
}


/* =========================================================
   BOTÃO DESABILITADO
========================================================= */

.ironstore-perfil > button:last-child:disabled {
    cursor: not-allowed;

    border-color: #e2e8f0;

    background: #e2e8f0;

    color: #94a3b8;

    box-shadow: none;

    opacity: 1;
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 720px) {

    .ironstore-login-topo h1 {
        font-size: 24px;
    }

    .ironstore-login-google-area {
        padding-bottom: 18px;
    }

    .ironstore-cadastro-introducao {
        margin-bottom: 18px;

        padding: 0 3px;
    }

    .ironstore-cadastro-introducao h1 {
        font-size: 23px;
    }

    .ironstore-cadastro-introducao p {
        font-size: 11.5px;
    }
}


/* =========================================================
   LOGIN GOOGLE PROCESSANDO
========================================================= */

.ironstore-login-processando {
    width: min(430px, 100%);

    margin: 70px auto;

    padding: 48px 38px 38px;

    box-sizing: border-box;

    border: 1px solid #e5e7eb;
    border-radius: 22px;

    background: #ffffff;

    box-shadow:
        0 24px 65px rgba(15, 23, 42, 0.08),
        0 3px 10px rgba(15, 23, 42, 0.03);

    text-align: center;
}


/* ÍCONE */

.ironstore-login-processando-icone {
    width: 64px;
    height: 64px;

    margin: 0 auto 25px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 18px;

    background: #f8fafc;

    border: 1px solid #e8edf3;
}


/* SPINNER */

.ironstore-login-spinner {
    width: 25px;
    height: 25px;

    border: 3px solid #e2e8f0;
    border-top-color: #0f172a;
    border-radius: 50%;

    animation:
        ironstore-login-girar
        0.75s
        linear
        infinite;
}

@keyframes ironstore-login-girar {

    to {
        transform: rotate(360deg);
    }
}


/* TEXTO */

.ironstore-login-processando-texto > span {
    display: block;

    margin-bottom: 9px;

    color: #64748b;

    font-size: 9px;
    font-weight: 800;

    letter-spacing: 1.1px;
}

.ironstore-login-processando-texto h1 {
    margin: 0 0 10px;

    color: #0f172a;

    font-size: 23px;
    font-weight: 800;

    line-height: 1.2;

    letter-spacing: -0.6px;
}

.ironstore-login-processando-texto p {
    max-width: 310px;

    margin: 0 auto;

    color: #64748b;

    font-size: 12px;
    font-weight: 450;

    line-height: 1.6;
}


/* STATUS */

.ironstore-login-processando-status {
    margin-top: 27px;

    padding: 13px 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    border: 1px solid #eef2f7;
    border-radius: 10px;

    background: #f8fafc;

    color: #475569;

    font-size: 10px;
    font-weight: 650;
}

.ironstore-login-processando-status span {
    width: 7px;
    height: 7px;

    flex-shrink: 0;

    border-radius: 50%;

    background: #22c55e;

    box-shadow:
        0 0 0 4px rgba(34, 197, 94, 0.10);

    animation:
        ironstore-login-pulso
        1.3s
        ease-in-out
        infinite;
}

@keyframes ironstore-login-pulso {

    0%,
    100% {
        opacity: 0.45;
    }

    50% {
        opacity: 1;
    }
}


/* MOBILE */

@media (max-width: 720px) {

    .ironstore-login-processando {
        margin: 35px auto;

        padding:
            40px
            22px
            30px;

        border-radius: 18px;
    }

    .ironstore-login-processando-texto h1 {
        font-size: 21px;
    }
}
    /* =========================================================
   INTRODUÇÃO DO CADASTRO
========================================================= */

.ironstore-cadastro-introducao {
    position: relative;

    width: min(1080px, 100%);

    margin: 0 auto 24px;

    padding: 28px 30px;

    box-sizing: border-box;

    overflow: hidden;

    border: 1px solid #e5eaf0;
    border-radius: 20px;

    background:
        linear-gradient(
            135deg,
            #ffffff 0%,
            #f8fafc 55%,
            #f1f5f9 100%
        );

    box-shadow:
        0 12px 35px rgba(15, 23, 42, 0.045),
        0 2px 5px rgba(15, 23, 42, 0.02);
}


/* =========================================================
   DETALHE DECORATIVO
========================================================= */

.ironstore-cadastro-introducao::after {
    content: "";

    position: absolute;

    width: 190px;
    height: 190px;

    top: -115px;
    right: -70px;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(15, 23, 42, 0.055),
            rgba(15, 23, 42, 0)
        );

    pointer-events: none;
}


/* =========================================================
   ETAPA
========================================================= */

.ironstore-cadastro-etapa {
    position: relative;
    z-index: 1;

    display: inline-flex;
    align-items: center;

    gap: 7px;

    min-height: 28px;

    margin-bottom: 14px;
    padding: 0 11px;

    border: 1px solid #dce3eb;
    border-radius: 999px;

    background: rgba(255, 255, 255, 0.85);

    color: #475569;

    font-size: 9px;
    font-weight: 800;

    letter-spacing: 0.9px;

    box-shadow:
        0 2px 5px rgba(15, 23, 42, 0.025);
}


/* BOLINHA DA ETAPA */

.ironstore-cadastro-etapa::before {
    content: "";

    width: 6px;
    height: 6px;

    flex-shrink: 0;

    border-radius: 50%;

    background: #16a34a;

    box-shadow:
        0 0 0 4px rgba(22, 163, 74, 0.09);
}


/* =========================================================
   TÍTULO
========================================================= */

.ironstore-cadastro-introducao h1 {
    position: relative;
    z-index: 1;

    max-width: 720px;

    margin: 0 0 9px;

    color: #0f172a;

    font-size: 29px;
    font-weight: 850;

    line-height: 1.15;

    letter-spacing: -0.85px;
}


/* =========================================================
   DESCRIÇÃO
========================================================= */

.ironstore-cadastro-introducao p {
    position: relative;
    z-index: 1;

    max-width: 590px;

    margin: 0;

    color: #64748b;

    font-size: 12.5px;
    font-weight: 450;

    line-height: 1.65;
}


/* =========================================================
   BARRA INFERIOR
========================================================= */

.ironstore-cadastro-introducao::before {
    content: "";

    position: absolute;

    left: 30px;
    right: 30px;
    bottom: 0;

    height: 3px;

    border-radius:
        3px
        3px
        0
        0;

    background:
        linear-gradient(
            90deg,
            #0f172a 0%,
            #334155 42%,
            #e2e8f0 42%,
            #e2e8f0 100%
        );
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 720px) {

    .ironstore-cadastro-introducao {
        margin-bottom: 16px;

        padding:
            22px
            20px
            24px;

        border-radius: 16px;
    }

    .ironstore-cadastro-introducao h1 {
        font-size: 22px;

        letter-spacing: -0.55px;
    }

    .ironstore-cadastro-introducao p {
        font-size: 11.5px;
    }

    .ironstore-cadastro-introducao::before {
        left: 20px;
        right: 20px;
    }

    .ironstore-cadastro-etapa {
        margin-bottom: 12px;
    }
}
`;

export default classicoEntrar;