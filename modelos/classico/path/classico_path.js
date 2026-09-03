const classicoPath = `

/* =========================================================
   IRONSTORE PATH
   MODELO CLÁSSICO PREMIUM
========================================================= */

.ironstore-path-classico,
.ironstore-path-classico * {
    box-sizing: border-box !important;
}

.ironstore-path-classico {
    --path-navy: #10233f;
    --path-navy-2: #18395f;
    --path-navy-3: #245783;

    --path-text: #152238;
    --path-text-soft: #66758a;
    --path-text-light: #8d99aa;

    --path-white: #ffffff;
    --path-bg: #f4f7fb;
    --path-border: rgba(17, 42, 73, 0.09);

    width: 100% !important;
    min-height: 100vh !important;

    position: relative !important;
    overflow: hidden !important;

    margin: 0 !important;
    padding:
        56px
        22px
        42px
        22px !important;

    background:
        radial-gradient(
            circle at 10% 5%,
            rgba(52, 109, 166, 0.12),
            transparent 30%
        ),
        radial-gradient(
            circle at 90% 25%,
            rgba(41, 87, 133, 0.08),
            transparent 30%
        ),
        linear-gradient(
            180deg,
            #f8fafd 0%,
            #f3f6fa 48%,
            #eef3f8 100%
        ) !important;

    color: var(--path-text) !important;

    font-family:
        Inter,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Roboto,
        Helvetica,
        Arial,
        sans-serif !important;
}


/* =========================================================
   DECORAÇÃO DO FUNDO
========================================================= */

.ironstore-path-classico-decoracao {
    position: absolute !important;
    display: block !important;

    border-radius: 999px !important;

    pointer-events: none !important;
    user-select: none !important;

    filter: blur(1px) !important;
}

.ironstore-path-classico-decoracao-um {
    width: 390px !important;
    height: 390px !important;

    top: -220px !important;
    left: -180px !important;

    background:
        radial-gradient(
            circle,
            rgba(35, 83, 130, 0.12) 0%,
            rgba(35, 83, 130, 0) 70%
        ) !important;
}

.ironstore-path-classico-decoracao-dois {
    width: 460px !important;
    height: 460px !important;

    right: -250px !important;
    top: 280px !important;

    background:
        radial-gradient(
            circle,
            rgba(28, 75, 121, 0.09) 0%,
            rgba(28, 75, 121, 0) 72%
        ) !important;
}


/* =========================================================
   CONTEÚDO PRINCIPAL
========================================================= */

.ironstore-path-classico-conteudo {
    width: 100% !important;
    max-width: 640px !important;

    position: relative !important;
    z-index: 2 !important;

    margin:
        0
        auto !important;

    animation:
        ironstorePathEntrada
        0.55s
        ease
        both !important;
}


/* =========================================================
   APRESENTAÇÃO
========================================================= */

.ironstore-path-classico-apresentacao {
    width: 100% !important;

    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;

    text-align: center !important;

    margin:
        0
        0
        30px
        0 !important;
}


/* =========================================================
   LOGO DA EMPRESA
========================================================= */

.ironstore-path-classico-logo-container {
    position: relative !important;

    display: inline-flex !important;

    margin:
        0
        auto
        18px
        auto !important;
}

.ironstore-path-classico-logo-area {
    width: 126px !important;
    height: 126px !important;

    position: relative !important;

    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    padding: 5px !important;

    border-radius: 34px !important;

    background:
        rgba(255, 255, 255, 0.96) !important;

    border:
        1px solid
        rgba(18, 47, 79, 0.09) !important;

    box-shadow:
        0 22px 50px rgba(19, 47, 78, 0.13),
        0 7px 18px rgba(19, 47, 78, 0.07),
        inset 0 1px 0 rgba(255, 255, 255, 0.9) !important;
}

.ironstore-path-classico-logo {
    width: 100% !important;
    height: 100% !important;

    display: block !important;

    object-fit: cover !important;

    border-radius: 29px !important;
}

.ironstore-path-classico-logo-fallback {
    width: 100% !important;
    height: 100% !important;

    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    border-radius: 29px !important;

    background:
        linear-gradient(
            145deg,
            #102641,
            #245782
        ) !important;

    color: #ffffff !important;

    font-size: 48px !important;
    line-height: 1 !important;
    font-weight: 800 !important;
}


/* =========================================================
   SELO VERIFICADO
========================================================= */

.ironstore-path-classico-verificado {
    width: 31px !important;
    height: 31px !important;

    position: absolute !important;
    right: -8px !important;
    bottom: 7px !important;

    z-index: 4 !important;

    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    border-radius: 50% !important;

    background:
        linear-gradient(
            145deg,
            #1e4b78,
            #112c4b
        ) !important;

    border:
        4px solid
        #f5f8fb !important;

    color: #ffffff !important;

    font-size: 13px !important;
    font-weight: 900 !important;

    box-shadow:
        0 6px 14px rgba(15, 42, 70, 0.2) !important;
}


/* =========================================================
   PÁGINA OFICIAL
========================================================= */

.ironstore-path-classico-oficial {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;

    min-height: 28px !important;

    padding:
        6px
        12px !important;

    margin:
        0
        0
        10px
        0 !important;

    border-radius: 999px !important;

    background:
        rgba(25, 64, 103, 0.075) !important;

    border:
        1px solid
        rgba(25, 64, 103, 0.08) !important;

    color: #345878 !important;

    font-size: 10px !important;
    line-height: 1 !important;
    font-weight: 800 !important;

    letter-spacing: 1.15px !important;
    text-transform: uppercase !important;
}


/* =========================================================
   NOME
========================================================= */

.ironstore-path-classico-nome {
    max-width: 570px !important;

    margin:
        0
        auto !important;

    color:
        var(--path-navy) !important;

    font-size:
        clamp(
            29px,
            5vw,
            40px
        ) !important;

    line-height: 1.1 !important;
    font-weight: 800 !important;

    letter-spacing: -1.25px !important;

    word-break: break-word !important;
}


/* =========================================================
   MENSAGEM
========================================================= */

.ironstore-path-classico-mensagem {
    max-width: 520px !important;

    margin:
        14px
        auto
        0
        auto !important;

    color:
        var(--path-text-soft) !important;

    font-size: 15px !important;
    line-height: 1.7 !important;
    font-weight: 450 !important;
}


/* =========================================================
   DESTAQUE DO SITE
========================================================= */

.ironstore-path-classico-destaque {
    width: 100% !important;

    margin:
        0
        0
        14px
        0 !important;
}

.ironstore-path-classico-site {
    width: 100% !important;
    min-height: 84px !important;

    position: relative !important;
    overflow: hidden !important;

    display: flex !important;
    align-items: center !important;

    gap: 15px !important;

    padding:
        15px
        18px !important;

    border-radius: 22px !important;

    text-decoration: none !important;

    background:
        linear-gradient(
            135deg,
            #102641 0%,
            #173c63 52%,
            #22547f 100%
        ) !important;

    border:
        1px solid
        rgba(255, 255, 255, 0.08) !important;

    box-shadow:
        0 18px 35px rgba(16, 45, 75, 0.18),
        0 6px 15px rgba(16, 45, 75, 0.09) !important;

    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease,
        filter 0.25s ease !important;
}

.ironstore-path-classico-site::before {
    content: "" !important;

    width: 160px !important;
    height: 160px !important;

    position: absolute !important;
    right: -80px !important;
    top: -100px !important;

    border-radius: 50% !important;

    background:
        rgba(255, 255, 255, 0.07) !important;

    pointer-events: none !important;
}

.ironstore-path-classico-site:hover {
    transform:
        translateY(-3px) !important;

    box-shadow:
        0 25px 45px rgba(16, 45, 75, 0.23),
        0 8px 18px rgba(16, 45, 75, 0.11) !important;

    filter:
        brightness(1.04) !important;
}

.ironstore-path-classico-site:active {
    transform:
        translateY(-1px)
        scale(0.995) !important;
}


/* =========================================================
   ÍCONE SITE
========================================================= */

.ironstore-path-classico-site-icone {
    width: 50px !important;
    min-width: 50px !important;
    height: 50px !important;

    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    border-radius: 15px !important;

    background:
        rgba(255, 255, 255, 0.12) !important;

    border:
        1px solid
        rgba(255, 255, 255, 0.1) !important;

    color: #ffffff !important;

    font-size: 22px !important;
    line-height: 1 !important;
    font-weight: 500 !important;
}


/* =========================================================
   TEXTO SITE
========================================================= */

.ironstore-path-classico-site-textos {
    min-width: 0 !important;
    flex: 1 !important;

    display: flex !important;
    flex-direction: column !important;

    gap: 4px !important;

    text-align: left !important;
}

.ironstore-path-classico-site-textos strong {
    color: #ffffff !important;

    font-size: 15.5px !important;
    line-height: 1.2 !important;
    font-weight: 750 !important;
}

.ironstore-path-classico-site-textos small {
    color:
        rgba(
            255,
            255,
            255,
            0.68
        ) !important;

    font-size: 12px !important;
    line-height: 1.35 !important;
    font-weight: 450 !important;
}

.ironstore-path-classico-site-seta {
    width: 36px !important;
    min-width: 36px !important;
    height: 36px !important;

    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    border-radius: 50% !important;

    color: #ffffff !important;

    background:
        rgba(255, 255, 255, 0.1) !important;

    font-size: 18px !important;

    transition:
        transform 0.25s ease !important;
}

.ironstore-path-classico-site:hover
.ironstore-path-classico-site-seta {
    transform:
        translateX(3px) !important;
}


/* =========================================================
   WHATSAPP
========================================================= */

.ironstore-path-classico-whatsapp-area {
    width: 100% !important;

    margin:
        0
        0
        30px
        0 !important;
}

.ironstore-path-classico-whatsapp {
    width: 100% !important;
    min-height: 76px !important;

    display: flex !important;
    align-items: center !important;

    gap: 14px !important;

    padding:
        12px
        17px !important;

    border-radius: 21px !important;

    background:
        rgba(255, 255, 255, 0.94) !important;

    border:
        1px solid
        rgba(25, 77, 61, 0.1) !important;

    box-shadow:
        0 10px 28px rgba(23, 55, 81, 0.075) !important;

    text-decoration: none !important;

    transition:
        transform 0.24s ease,
        box-shadow 0.24s ease,
        border-color 0.24s ease !important;
}

.ironstore-path-classico-whatsapp:hover {
    transform:
        translateY(-2px) !important;

    border-color:
        rgba(25, 156, 98, 0.24) !important;

    box-shadow:
        0 16px 34px rgba(23, 55, 81, 0.11) !important;
}


/* =========================================================
   LOGO WHATSAPP
========================================================= */

.ironstore-path-classico-whatsapp-logo-area {
    width: 50px !important;
    min-width: 50px !important;
    height: 50px !important;

    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    padding: 8px !important;

    border-radius: 15px !important;

    background:
        #f1fbf5 !important;
}

.ironstore-path-classico-whatsapp-logo {
    width: 100% !important;
    height: 100% !important;

    display: block !important;

    object-fit: contain !important;
}


/* =========================================================
   TEXTO WHATSAPP
========================================================= */

.ironstore-path-classico-whatsapp-textos {
    min-width: 0 !important;
    flex: 1 !important;

    display: flex !important;
    flex-direction: column !important;

    gap: 4px !important;

    text-align: left !important;
}

.ironstore-path-classico-whatsapp-textos strong {
    color:
        #173e31 !important;

    font-size: 14.5px !important;
    line-height: 1.2 !important;
    font-weight: 750 !important;
}

.ironstore-path-classico-whatsapp-textos small {
    color:
        #75847d !important;

    font-size: 11.5px !important;
    line-height: 1.35 !important;
}

.ironstore-path-classico-whatsapp-seta {
    width: 34px !important;
    min-width: 34px !important;
    height: 34px !important;

    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    border-radius: 50% !important;

    background:
        #f1f7f3 !important;

    color:
        #20885d !important;

    font-size: 17px !important;

    transition:
        transform 0.25s ease !important;
}

.ironstore-path-classico-whatsapp:hover
.ironstore-path-classico-whatsapp-seta {
    transform:
        translateX(3px) !important;
}


/* =========================================================
   SEÇÕES
========================================================= */

.ironstore-path-classico-secao {
    width: 100% !important;

    margin:
        0
        0
        31px
        0 !important;
}

.ironstore-path-classico-secao-cabecalho {
    width: 100% !important;

    display: flex !important;
    align-items: flex-end !important;
    justify-content: space-between !important;

    margin:
        0
        0
        13px
        0 !important;

    padding:
        0
        3px !important;
}

.ironstore-path-classico-secao-subtitulo {
    display: block !important;

    margin:
        0
        0
        4px
        0 !important;

    color:
        #7c8c9e !important;

    font-size: 9.5px !important;
    line-height: 1.2 !important;
    font-weight: 800 !important;

    letter-spacing: 1.5px !important;
}

.ironstore-path-classico-secao-titulo {
    display: block !important;

    margin: 0 !important;

    color:
        var(--path-navy) !important;

    font-size: 19px !important;
    line-height: 1.25 !important;
    font-weight: 800 !important;

    letter-spacing: -0.35px !important;
}


/* =========================================================
   GRID DAS REDES
========================================================= */

.ironstore-path-classico-redes {
    width: 100% !important;

    display: grid !important;

    grid-template-columns:
        repeat(
            2,
            minmax(0, 1fr)
        ) !important;

    gap: 11px !important;
}


/* =========================================================
   CARD REDE SOCIAL
========================================================= */

.ironstore-path-classico-rede {
    min-width: 0 !important;
    min-height: 78px !important;

    position: relative !important;
    overflow: hidden !important;

    display: flex !important;
    align-items: center !important;

    gap: 12px !important;

    padding:
        12px
        13px !important;

    border-radius: 20px !important;

    background:
        rgba(255, 255, 255, 0.92) !important;

    border:
        1px solid
        var(--path-border) !important;

    box-shadow:
        0 8px 24px rgba(23, 50, 78, 0.06) !important;

    text-decoration: none !important;

    transition:
        transform 0.24s ease,
        box-shadow 0.24s ease,
        border-color 0.24s ease,
        background 0.24s ease !important;
}

.ironstore-path-classico-rede:hover {
    transform:
        translateY(-3px) !important;

    background:
        #ffffff !important;

    border-color:
        rgba(24, 62, 100, 0.15) !important;

    box-shadow:
        0 15px 32px rgba(23, 50, 78, 0.11) !important;
}


/* =========================================================
   FUNDO SUAVE POR REDE
========================================================= */

.ironstore-path-classico-rede-instagram:hover {
    border-color:
        rgba(193, 53, 132, 0.2) !important;
}

.ironstore-path-classico-rede-tiktok:hover {
    border-color:
        rgba(20, 20, 20, 0.2) !important;
}

.ironstore-path-classico-rede-youtube:hover {
    border-color:
        rgba(255, 0, 0, 0.18) !important;
}

.ironstore-path-classico-rede-facebook:hover {
    border-color:
        rgba(24, 119, 242, 0.2) !important;
}

.ironstore-path-classico-rede-x:hover {
    border-color:
        rgba(0, 0, 0, 0.2) !important;
}


/* =========================================================
   ÁREA DO LOGO DA REDE
========================================================= */

.ironstore-path-classico-rede-logo-area {
    width: 48px !important;
    min-width: 48px !important;
    height: 48px !important;

    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    padding: 8px !important;

    border-radius: 15px !important;

    background:
        #f5f7fa !important;

    border:
        1px solid
        rgba(20, 45, 72, 0.05) !important;

    transition:
        transform 0.25s ease !important;
}

.ironstore-path-classico-rede:hover
.ironstore-path-classico-rede-logo-area {
    transform:
        scale(1.055) !important;
}


/* =========================================================
   LOGO REAL DA REDE
========================================================= */

.ironstore-path-classico-rede-logo {
    width: 100% !important;
    height: 100% !important;

    display: block !important;

    object-fit: contain !important;

    object-position: center !important;
}


/* =========================================================
   TEXTO DAS REDES
========================================================= */

.ironstore-path-classico-rede-textos {
    min-width: 0 !important;
    flex: 1 !important;

    display: flex !important;
    flex-direction: column !important;

    gap: 3px !important;

    text-align: left !important;
}

.ironstore-path-classico-rede-textos strong {
    overflow: hidden !important;

    color:
        #1b2b40 !important;

    font-size: 13.5px !important;
    line-height: 1.2 !important;
    font-weight: 750 !important;

    white-space: nowrap !important;
    text-overflow: ellipsis !important;
}

.ironstore-path-classico-rede-textos small {
    overflow: hidden !important;

    color:
        #8490a0 !important;

    font-size: 10.5px !important;
    line-height: 1.3 !important;
    font-weight: 450 !important;

    white-space: nowrap !important;
    text-overflow: ellipsis !important;
}


/* =========================================================
   SETA DAS REDES
========================================================= */

.ironstore-path-classico-rede-seta {
    width: 27px !important;
    min-width: 27px !important;
    height: 27px !important;

    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    border-radius: 50% !important;

    background:
        #f3f6f9 !important;

    color:
        #8290a0 !important;

    font-size: 14px !important;

    transition:
        transform 0.24s ease,
        background 0.24s ease,
        color 0.24s ease !important;
}

.ironstore-path-classico-rede:hover
.ironstore-path-classico-rede-seta {
    transform:
        translateX(2px) !important;

    background:
        #eaf0f6 !important;

    color:
        #294f73 !important;
}


/* =========================================================
   SOBRE A EMPRESA
========================================================= */

.ironstore-path-classico-sobre {
    margin-bottom:
        24px !important;
}

.ironstore-path-classico-informacoes {
    width: 100% !important;

    overflow: hidden !important;

    border-radius: 22px !important;

    background:
        rgba(255, 255, 255, 0.88) !important;

    border:
        1px solid
        var(--path-border) !important;

    box-shadow:
        0 9px 28px rgba(23, 50, 78, 0.055) !important;
}


/* =========================================================
   LINHA DE INFORMAÇÃO
========================================================= */

.ironstore-path-classico-informacoes-linha {
    width: 100% !important;
    min-height: 69px !important;

    display: flex !important;
    align-items: center !important;

    gap: 13px !important;

    padding:
        13px
        16px !important;

    position: relative !important;

    background:
        transparent !important;

    text-decoration: none !important;

    transition:
        background 0.2s ease !important;
}

.ironstore-path-classico-informacoes-linha:not(:last-child) {
    border-bottom:
        1px solid
        rgba(18, 47, 79, 0.065) !important;
}

.ironstore-path-classico-informacoes-link:hover {
    background:
        rgba(22, 55, 89, 0.025) !important;
}


/* =========================================================
   ÍCONE INFORMAÇÕES
========================================================= */

.ironstore-path-classico-info-icone {
    width: 39px !important;
    min-width: 39px !important;
    height: 39px !important;

    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    border-radius: 12px !important;

    background:
        #f0f4f8 !important;

    color:
        #345878 !important;

    font-size: 16px !important;
    line-height: 1 !important;
    font-weight: 700 !important;
}


/* =========================================================
   TEXTO INFORMAÇÕES
========================================================= */

.ironstore-path-classico-info-textos {
    min-width: 0 !important;
    flex: 1 !important;

    display: flex !important;
    flex-direction: column !important;

    gap: 3px !important;
}

.ironstore-path-classico-info-textos > span {
    color:
        #8a96a6 !important;

    font-size: 10px !important;
    line-height: 1.25 !important;
    font-weight: 650 !important;

    letter-spacing: 0.25px !important;
}

.ironstore-path-classico-info-textos > strong {
    overflow-wrap: anywhere !important;

    color:
        #26374b !important;

    font-size: 12.5px !important;
    line-height: 1.45 !important;
    font-weight: 650 !important;
}


/* =========================================================
   RODAPÉ
========================================================= */

.ironstore-path-classico-rodape {
    width: 100% !important;

    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    gap: 10px !important;

    padding:
        15px
        10px
        3px
        10px !important;

    opacity: 0.75 !important;
}


/* =========================================================
   LOGO RODAPÉ
========================================================= */

.ironstore-path-classico-rodape-logo {
    width: 34px !important;
    min-width: 34px !important;
    height: 34px !important;

    overflow: hidden !important;

    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    border-radius: 10px !important;

    background:
        #ffffff !important;

    border:
        1px solid
        rgba(20, 45, 72, 0.08) !important;

    color:
        #183b60 !important;

    font-size: 13px !important;
    font-weight: 800 !important;
}

.ironstore-path-classico-rodape-logo img {
    width: 100% !important;
    height: 100% !important;

    display: block !important;

    object-fit: cover !important;
}


/* =========================================================
   TEXTO RODAPÉ
========================================================= */

.ironstore-path-classico-rodape-textos {
    display: flex !important;
    flex-direction: column !important;

    gap: 1px !important;

    text-align: left !important;
}

.ironstore-path-classico-rodape-textos strong {
    color:
        #4d5e71 !important;

    font-size: 10.5px !important;
    line-height: 1.3 !important;
    font-weight: 700 !important;
}

.ironstore-path-classico-rodape-textos span {
    color:
        #8b97a5 !important;

    font-size: 9.5px !important;
    line-height: 1.3 !important;
}


/* =========================================================
   LOADING / ERRO
========================================================= */

.ironstore-path-classico-estado {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    padding:
        25px !important;
}

.ironstore-path-classico-carregando {
    width: 100% !important;
    max-width: 420px !important;

    min-height: 190px !important;

    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;

    gap: 8px !important;

    padding:
        30px !important;

    border-radius: 25px !important;

    background:
        rgba(255, 255, 255, 0.94) !important;

    border:
        1px solid
        rgba(18, 47, 79, 0.08) !important;

    box-shadow:
        0 18px 50px rgba(20, 47, 77, 0.1) !important;

    text-align: center !important;
}

.ironstore-path-classico-carregando strong {
    color:
        #183550 !important;

    font-size: 16px !important;
    font-weight: 750 !important;
}

.ironstore-path-classico-carregando span {
    color:
        #7e8b9b !important;

    font-size: 12px !important;
    line-height: 1.5 !important;
}


/* =========================================================
   LOADER
========================================================= */

.ironstore-path-classico-loader {
    width: 31px !important;
    height: 31px !important;

    margin:
        0
        0
        8px
        0 !important;

    border-radius: 50% !important;

    border:
        3px solid
        rgba(25, 61, 96, 0.12) !important;

    border-top-color:
        #1d4c77 !important;

    animation:
        ironstorePathLoader
        0.7s
        linear
        infinite !important;
}


/* =========================================================
   FOCUS ACESSÍVEL
========================================================= */

.ironstore-path-classico a:focus-visible {
    outline:
        3px solid
        rgba(37, 91, 143, 0.28) !important;

    outline-offset:
        3px !important;
}


/* =========================================================
   ANIMAÇÕES
========================================================= */

@keyframes ironstorePathEntrada {

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


@keyframes ironstorePathLoader {

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
   TABLET / CELULAR
========================================================= */

@media (
    max-width: 650px
) {

    .ironstore-path-classico {
        padding:
            36px
            15px
            30px
            15px !important;
    }


    /* =====================================================
       LOGO
    ===================================================== */

    .ironstore-path-classico-logo-area {
        width: 112px !important;
        height: 112px !important;

        border-radius:
            30px !important;
    }

    .ironstore-path-classico-logo {
        border-radius:
            25px !important;
    }

    .ironstore-path-classico-logo-fallback {
        border-radius:
            25px !important;

        font-size:
            42px !important;
    }


    /* =====================================================
       APRESENTAÇÃO
    ===================================================== */

    .ironstore-path-classico-apresentacao {
        margin-bottom:
            25px !important;
    }

    .ironstore-path-classico-nome {
        font-size:
            30px !important;

        letter-spacing:
            -0.85px !important;
    }

    .ironstore-path-classico-mensagem {
        max-width:
            450px !important;

        font-size:
            13.5px !important;

        line-height:
            1.65 !important;
    }


    /* =====================================================
       REDES
    ===================================================== */

    .ironstore-path-classico-redes {
        grid-template-columns:
            1fr !important;
    }

    .ironstore-path-classico-rede {
        min-height:
            74px !important;
    }


    /* =====================================================
       SITE
    ===================================================== */

    .ironstore-path-classico-site {
        min-height:
            79px !important;

        border-radius:
            20px !important;

        padding:
            13px
            15px !important;
    }

    .ironstore-path-classico-site-icone {
        width:
            46px !important;

        min-width:
            46px !important;

        height:
            46px !important;
    }


    /* =====================================================
       WHATSAPP
    ===================================================== */

    .ironstore-path-classico-whatsapp {
        border-radius:
            19px !important;
    }


    /* =====================================================
       SEÇÃO
    ===================================================== */

    .ironstore-path-classico-secao {
        margin-bottom:
            27px !important;
    }

    .ironstore-path-classico-secao-titulo {
        font-size:
            18px !important;
    }

}


/* =========================================================
   CELULAR PEQUENO
========================================================= */

@media (
    max-width: 390px
) {

    .ironstore-path-classico {
        padding:
            29px
            11px
            25px
            11px !important;
    }

    .ironstore-path-classico-logo-area {
        width:
            102px !important;

        height:
            102px !important;
    }

    .ironstore-path-classico-nome {
        font-size:
            27px !important;
    }

    .ironstore-path-classico-mensagem {
        font-size:
            13px !important;
    }

    .ironstore-path-classico-site-textos small,
    .ironstore-path-classico-whatsapp-textos small {
        font-size:
            10.5px !important;
    }

    .ironstore-path-classico-rede {
        padding:
            11px !important;
    }

    .ironstore-path-classico-rede-logo-area {
        width:
            45px !important;

        min-width:
            45px !important;

        height:
            45px !important;
    }

}


/* =========================================================
   REDUZIR ANIMAÇÕES
========================================================= */

@media (
    prefers-reduced-motion: reduce
) {

    .ironstore-path-classico *,
    .ironstore-path-classico *::before,
    .ironstore-path-classico *::after {
        scroll-behavior:
            auto !important;

        transition-duration:
            0.01ms !important;

        animation-duration:
            0.01ms !important;

        animation-iteration-count:
            1 !important;
    }

}
/* =========================================================
   CAMADA EXTRA PREMIUM
   ADICIONAR NO FINAL DO CLASSICO_PATH.JS
========================================================= */


/* =========================================================
   1. FUNDO MAIS SOFISTICADO
========================================================= */

.ironstore-path-classico::before {
    content: "" !important;

    position: fixed !important;
    inset: 0 !important;

    z-index: 0 !important;

    pointer-events: none !important;

    background:
        linear-gradient(
            rgba(255, 255, 255, 0.16) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.16) 1px,
            transparent 1px
        ) !important;

    background-size:
        48px 48px !important;

    mask-image:
        linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.18),
            transparent 55%
        ) !important;

    opacity: 0.32 !important;
}


/* =========================================================
   2. LUZ AMBIENTE CENTRAL
========================================================= */

.ironstore-path-classico::after {
    content: "" !important;

    position: absolute !important;

    width: 760px !important;
    height: 420px !important;

    left: 50% !important;
    top: -260px !important;

    transform:
        translateX(-50%) !important;

    z-index: 0 !important;

    border-radius:
        50% !important;

    pointer-events:
        none !important;

    background:
        radial-gradient(
            ellipse,
            rgba(35, 84, 134, 0.14) 0%,
            rgba(35, 84, 134, 0.055) 40%,
            transparent 72%
        ) !important;

    filter:
        blur(4px) !important;
}


/* =========================================================
   3. PAINEL CENTRAL SUTIL

   Dá mais sensação de página premium sem criar
   uma caixa pesada em volta de tudo.
========================================================= */

.ironstore-path-classico-conteudo::before {
    content: "" !important;

    position: absolute !important;

    z-index: -1 !important;

    top: -25px !important;
    left: -30px !important;
    right: -30px !important;
    bottom: -25px !important;

    border-radius:
        38px !important;

    background:
        linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.24),
            rgba(255, 255, 255, 0.06)
        ) !important;

    border:
        1px solid
        rgba(255, 255, 255, 0.36) !important;

    box-shadow:
        0 40px 100px
        rgba(20, 47, 77, 0.045) !important;

    pointer-events:
        none !important;
}


/* =========================================================
   4. LOGO MAIS PREMIUM
========================================================= */

.ironstore-path-classico-logo-area::before {
    content: "" !important;

    position: absolute !important;

    inset: -5px !important;

    z-index: -1 !important;

    border-radius:
        39px !important;

    background:
        linear-gradient(
            135deg,
            rgba(28, 74, 119, 0.23),
            rgba(255, 255, 255, 0.7),
            rgba(28, 74, 119, 0.1)
        ) !important;

    opacity:
        0.75 !important;
}

.ironstore-path-classico-logo-area {
    transition:
        transform 0.35s ease,
        box-shadow 0.35s ease !important;
}

.ironstore-path-classico-logo-container:hover
.ironstore-path-classico-logo-area {
    transform:
        translateY(-4px)
        scale(1.02) !important;

    box-shadow:
        0 28px 60px rgba(19, 47, 78, 0.17),
        0 8px 20px rgba(19, 47, 78, 0.08) !important;
}


/* =========================================================
   5. SELO OFICIAL MAIS PROFISSIONAL
========================================================= */

.ironstore-path-classico-oficial {
    box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.7),
        0 5px 14px rgba(25, 64, 103, 0.04) !important;
}


/* =========================================================
   6. NOME COM MELHOR ACABAMENTO
========================================================= */

.ironstore-path-classico-nome {
    text-wrap:
        balance !important;

    text-shadow:
        0 2px 15px
        rgba(20, 50, 80, 0.045) !important;
}


/* =========================================================
   7. MENSAGEM MAIS ELEGANTE
========================================================= */

.ironstore-path-classico-mensagem {
    text-wrap:
        balance !important;
}


/* =========================================================
   8. BOTÃO DO SITE - EFEITO DE LUZ
========================================================= */

.ironstore-path-classico-site::after {
    content: "" !important;

    position: absolute !important;

    width: 140px !important;
    height: 200% !important;

    top: -50% !important;
    left: -180px !important;

    transform:
        rotate(18deg) !important;

    pointer-events:
        none !important;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.09),
            rgba(255, 255, 255, 0.18),
            rgba(255, 255, 255, 0.09),
            transparent
        ) !important;

    transition:
        left 0.7s ease !important;
}

.ironstore-path-classico-site:hover::after {
    left:
        calc(100% + 70px) !important;
}


/* =========================================================
   9. ÍCONE SITE MAIS ELEGANTE
========================================================= */

.ironstore-path-classico-site-icone {
    box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.15),
        0 8px 20px rgba(0, 0, 0, 0.08) !important;

    backdrop-filter:
        blur(10px) !important;
}


/* =========================================================
   10. WHATSAPP COM DESTAQUE VERDE SUAVE
========================================================= */

.ironstore-path-classico-whatsapp {
    position:
        relative !important;

    overflow:
        hidden !important;
}

.ironstore-path-classico-whatsapp::before {
    content: "" !important;

    position: absolute !important;

    width: 120px !important;
    height: 120px !important;

    left: -65px !important;
    top: -70px !important;

    border-radius:
        50% !important;

    background:
        rgba(37, 211, 102, 0.07) !important;

    pointer-events:
        none !important;
}

.ironstore-path-classico-whatsapp::after {
    content: "" !important;

    position: absolute !important;

    left: 0 !important;
    top: 17px !important;
    bottom: 17px !important;

    width: 3px !important;

    border-radius:
        0 999px 999px 0 !important;

    background:
        linear-gradient(
            180deg,
            #25d366,
            #17984b
        ) !important;

    opacity:
        0.82 !important;
}

.ironstore-path-classico-whatsapp-logo-area {
    position:
        relative !important;

    z-index:
        2 !important;

    box-shadow:
        0 8px 18px
        rgba(37, 211, 102, 0.09) !important;
}


/* =========================================================
   11. CABEÇALHO DAS SEÇÕES COM LINHA
========================================================= */

.ironstore-path-classico-secao-cabecalho::after {
    content: "" !important;

    height: 1px !important;

    flex: 1 !important;

    margin:
        0
        0
        6px
        17px !important;

    background:
        linear-gradient(
            90deg,
            rgba(30, 66, 102, 0.11),
            transparent
        ) !important;
}


/* =========================================================
   12. CARDS DAS REDES MAIS PROFISSIONAIS
========================================================= */

.ironstore-path-classico-rede::before {
    content: "" !important;

    position: absolute !important;

    left: 0 !important;
    top: 15px !important;
    bottom: 15px !important;

    width: 3px !important;

    border-radius:
        0 999px 999px 0 !important;

    opacity:
        0 !important;

    transform:
        scaleY(0.45) !important;

    transition:
        opacity 0.25s ease,
        transform 0.25s ease !important;
}

.ironstore-path-classico-rede:hover::before {
    opacity:
        1 !important;

    transform:
        scaleY(1) !important;
}


/* =========================================================
   13. INSTAGRAM
========================================================= */

.ironstore-path-classico-rede-instagram::before {
    background:
        linear-gradient(
            180deg,
            #833ab4,
            #e1306c,
            #f77737
        ) !important;
}

.ironstore-path-classico-rede-instagram:hover
.ironstore-path-classico-rede-logo-area {
    background:
        rgba(225, 48, 108, 0.055) !important;
}


/* =========================================================
   14. FACEBOOK
========================================================= */

.ironstore-path-classico-rede-facebook::before {
    background:
        #1877f2 !important;
}

.ironstore-path-classico-rede-facebook:hover
.ironstore-path-classico-rede-logo-area {
    background:
        rgba(24, 119, 242, 0.055) !important;
}


/* =========================================================
   15. YOUTUBE
========================================================= */

.ironstore-path-classico-rede-youtube::before {
    background:
        #ff0000 !important;
}

.ironstore-path-classico-rede-youtube:hover
.ironstore-path-classico-rede-logo-area {
    background:
        rgba(255, 0, 0, 0.045) !important;
}


/* =========================================================
   16. TIKTOK
========================================================= */

.ironstore-path-classico-rede-tiktok::before {
    background:
        linear-gradient(
            180deg,
            #25f4ee,
            #111111,
            #fe2c55
        ) !important;
}

.ironstore-path-classico-rede-tiktok:hover
.ironstore-path-classico-rede-logo-area {
    background:
        rgba(0, 0, 0, 0.035) !important;
}


/* =========================================================
   17. X
========================================================= */

.ironstore-path-classico-rede-x::before {
    background:
        #111111 !important;
}

.ironstore-path-classico-rede-x:hover
.ironstore-path-classico-rede-logo-area {
    background:
        rgba(0, 0, 0, 0.045) !important;
}


/* =========================================================
   18. LOGOS COM MICROINTERAÇÃO
========================================================= */

.ironstore-path-classico-rede-logo {
    transition:
        transform 0.3s
        cubic-bezier(
            0.2,
            0.8,
            0.2,
            1
        ) !important;
}

.ironstore-path-classico-rede:hover
.ironstore-path-classico-rede-logo {
    transform:
        scale(1.09) !important;
}


/* =========================================================
   19. CARD DAS REDES - BRILHO
========================================================= */

.ironstore-path-classico-rede::after {
    content: "" !important;

    position: absolute !important;

    width: 80px !important;
    height: 130px !important;

    top: -30px !important;
    right: -100px !important;

    transform:
        rotate(25deg) !important;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.75),
            transparent
        ) !important;

    pointer-events:
        none !important;

    transition:
        right 0.55s ease !important;
}

.ironstore-path-classico-rede:hover::after {
    right:
        calc(100% + 50px) !important;
}


/* =========================================================
   20. INFORMAÇÕES MAIS PREMIUM
========================================================= */

.ironstore-path-classico-informacoes {
    position:
        relative !important;

    backdrop-filter:
        blur(15px) !important;

    -webkit-backdrop-filter:
        blur(15px) !important;
}

.ironstore-path-classico-informacoes::before {
    content: "" !important;

    position: absolute !important;

    left: 18px !important;
    right: 18px !important;
    top: 0 !important;

    height: 1px !important;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.9),
            transparent
        ) !important;

    pointer-events:
        none !important;
}


/* =========================================================
   21. ÍCONES DAS INFORMAÇÕES
========================================================= */

.ironstore-path-classico-info-icone {
    box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.85) !important;

    transition:
        transform 0.25s ease,
        background 0.25s ease !important;
}

.ironstore-path-classico-informacoes-linha:hover
.ironstore-path-classico-info-icone {
    transform:
        scale(1.05) !important;

    background:
        #e9f0f6 !important;
}


/* =========================================================
   22. RODAPÉ COM DIVISÓRIA
========================================================= */

.ironstore-path-classico-rodape {
    position:
        relative !important;

    margin-top:
        10px !important;

    padding-top:
        25px !important;
}

.ironstore-path-classico-rodape::before {
    content: "" !important;

    position: absolute !important;

    top: 8px !important;
    left: 25% !important;
    right: 25% !important;

    height: 1px !important;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(24, 57, 90, 0.11),
            transparent
        ) !important;
}


/* =========================================================
   23. LOGO DO RODAPÉ
========================================================= */

.ironstore-path-classico-rodape-logo {
    box-shadow:
        0 5px 14px
        rgba(20, 50, 80, 0.07) !important;
}


/* =========================================================
   24. SCROLLBAR PREMIUM
========================================================= */

.ironstore-path-classico::-webkit-scrollbar {
    width:
        8px !important;
}

.ironstore-path-classico::-webkit-scrollbar-track {
    background:
        transparent !important;
}

.ironstore-path-classico::-webkit-scrollbar-thumb {
    background:
        rgba(26, 60, 95, 0.18) !important;

    border-radius:
        999px !important;
}


/* =========================================================
   25. SELEÇÃO DE TEXTO
========================================================= */

.ironstore-path-classico ::selection {
    background:
        rgba(27, 72, 115, 0.18) !important;

    color:
        #10233f !important;
}


/* =========================================================
   26. DESKTOP - MAIS ESPAÇO E PROFUNDIDADE
========================================================= */

@media (min-width: 900px) {

    .ironstore-path-classico {
        padding-top:
            68px !important;

        padding-bottom:
            55px !important;
    }

    .ironstore-path-classico-conteudo {
        max-width:
            670px !important;
    }

    .ironstore-path-classico-logo-area {
        width:
            132px !important;

        height:
            132px !important;
    }

    .ironstore-path-classico-apresentacao {
        margin-bottom:
            34px !important;
    }

}


/* =========================================================
   27. MOBILE - MAIS LIMPO
========================================================= */

@media (max-width: 650px) {

    .ironstore-path-classico-conteudo::before {
        left:
            -7px !important;

        right:
            -7px !important;

        top:
            -15px !important;

        border-radius:
            29px !important;

        opacity:
            0.6 !important;
    }

    .ironstore-path-classico-secao-cabecalho::after {
        margin-left:
            12px !important;
    }

    .ironstore-path-classico-site:hover,
    .ironstore-path-classico-whatsapp:hover,
    .ironstore-path-classico-rede:hover {
        transform:
            none !important;
    }

}


/* =========================================================
   28. MOBILE MUITO PEQUENO
========================================================= */

@media (max-width: 380px) {

    .ironstore-path-classico-conteudo::before {
        display:
            none !important;
    }

    .ironstore-path-classico-secao-cabecalho::after {
        display:
            none !important;
    }

}


/* =========================================================
   29. SUPORTE A TOUCH
   EVITA HOVER ESTRANHO NO CELULAR
========================================================= */

@media (hover: none) {

    .ironstore-path-classico-site:hover,
    .ironstore-path-classico-whatsapp:hover,
    .ironstore-path-classico-rede:hover,
    .ironstore-path-classico-logo-container:hover
    .ironstore-path-classico-logo-area {
        transform:
            none !important;
    }

    .ironstore-path-classico-site:active,
    .ironstore-path-classico-whatsapp:active,
    .ironstore-path-classico-rede:active {
        transform:
            scale(0.985) !important;
    }

}
`;

export default classicoPath;