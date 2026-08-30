const classicoProdutos = `

/* =========================================================
   IRONSTORE
   PRODUTO — CLASSIC PREMIUM
========================================================= */

.ironstore-produto-atual,
.ironstore-produto-atual *,
.ironstore-produto-atual *::before,
.ironstore-produto-atual *::after {
    box-sizing: border-box;
}

.ironstore-produto-atual {
    --produto-texto: #0b1220;
    --produto-texto-2: #344054;
    --produto-texto-3: #667085;
    --produto-texto-4: #98a2b3;

    --produto-borda: #e4e7ec;
    --produto-borda-forte: #d0d5dd;

    --produto-fundo: #f5f7fa;
    --produto-card: #ffffff;

    --produto-dark: #101828;
    --produto-dark-2: #1d2939;

    position: relative;

    width: 100%;
    min-height: 600px;

    padding: 46px 24px 80px;

    overflow: hidden;

    color: var(--produto-texto);

    background:
        radial-gradient(
            circle at 16% 0%,
            rgba(255,255,255,.98),
            transparent 27%
        ),
        radial-gradient(
            circle at 84% 8%,
            rgba(226,232,240,.58),
            transparent 25%
        ),
        linear-gradient(
            180deg,
            #fafbfc 0%,
            #f5f7fa 48%,
            #f7f8fa 100%
        );

    font-family: inherit;

    isolation: isolate;
}


/* =========================================================
   DECORAÇÃO DE FUNDO
========================================================= */

.ironstore-produto-atual::before {
    content: "";

    position: absolute;
    z-index: -1;

    top: -280px;
    left: 50%;

    width: 1000px;
    height: 620px;

    transform: translateX(-50%);

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(255,255,255,.95) 0%,
            rgba(255,255,255,.35) 40%,
            transparent 70%
        );

    pointer-events: none;
}


/* =========================================================
   CONTEÚDO PRINCIPAL
========================================================= */

.ironstore-produto-atual-conteudo {
    position: relative;

    width: min(1280px, 100%);

    margin: 0 auto;

    display: grid;

    grid-template-columns:
        minmax(0, 1.08fr)
        minmax(390px, .92fr);

    gap: clamp(40px, 5vw, 78px);

    align-items: start;
}


/* =========================================================
   GALERIA
========================================================= */

.ironstore-produto-atual-galeria {
    position: sticky;

    top: 24px;

    min-width: 0;
}


/* =========================================================
   IMAGEM PRINCIPAL
========================================================= */

.ironstore-produto-atual-imagem-principal {
    position: relative;

    width: 100%;

    aspect-ratio: 1 / 1;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    border:
        1px solid
        rgba(16,24,40,.07);

    border-radius: 28px;

    background:
        radial-gradient(
            circle at 50% 25%,
            #ffffff,
            #fafbfc 58%,
            #f4f6f8
        );

    box-shadow:
        0 1px 2px rgba(16,24,40,.025),
        0 8px 20px rgba(16,24,40,.035),
        0 30px 70px rgba(16,24,40,.07);

    transition:
        transform .35s ease,
        box-shadow .35s ease,
        border-color .35s ease;
}

.ironstore-produto-atual-imagem-principal:hover {
    transform: translateY(-2px);

    border-color:
        rgba(16,24,40,.12);

    box-shadow:
        0 2px 4px rgba(16,24,40,.03),
        0 12px 28px rgba(16,24,40,.05),
        0 38px 90px rgba(16,24,40,.10);
}


/* =========================================================
   IMAGEM
========================================================= */

.ironstore-produto-atual-imagem-principal img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: contain;

    transition:
        transform .6s
        cubic-bezier(.2,.75,.25,1);
}

.ironstore-produto-atual-imagem-principal:hover img {
    transform: scale(1.035);
}


/* =========================================================
   SEM IMAGEM
========================================================= */

.ironstore-produto-atual-sem-imagem {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #98a2b3;

    font-size: 13px;
    font-weight: 700;

    letter-spacing: .02em;

    background:
        linear-gradient(
            145deg,
            #ffffff,
            #f4f6f8
        );
}


/* =========================================================
   MINIATURAS
========================================================= */

.ironstore-produto-atual-miniaturas {
    width: 100%;

    display: flex;
    align-items: center;

    gap: 10px;

    margin-top: 14px;

    padding: 3px 2px 8px;

    overflow-x: auto;

    scrollbar-width: thin;
    scrollbar-color: #d0d5dd transparent;
}

.ironstore-produto-atual-miniaturas::-webkit-scrollbar {
    height: 4px;
}

.ironstore-produto-atual-miniaturas::-webkit-scrollbar-thumb {
    border-radius: 999px;

    background: #d0d5dd;
}


/* =========================================================
   MINIATURA
========================================================= */

.ironstore-produto-atual-miniaturas button {
    position: relative;

    width: 76px;
    height: 76px;

    flex: 0 0 76px;

    padding: 5px;

    overflow: hidden;

    border: 1px solid #e4e7ec;

    border-radius: 14px;

    background: rgba(255,255,255,.88);

    cursor: pointer;

    box-shadow:
        0 2px 8px rgba(16,24,40,.035);

    transition:
        transform .2s ease,
        border-color .2s ease,
        box-shadow .2s ease,
        background .2s ease;
}

.ironstore-produto-atual-miniaturas button:hover {
    transform: translateY(-2px);

    border-color: #98a2b3;

    background: #ffffff;

    box-shadow:
        0 8px 20px rgba(16,24,40,.08);
}

.ironstore-produto-atual-miniaturas button.ativo {
    border-color: #101828;

    background: #ffffff;

    box-shadow:
        0 0 0 1px #101828,
        0 8px 20px rgba(16,24,40,.09);
}

.ironstore-produto-atual-miniaturas button.ativo::after {
    content: "";

    position: absolute;

    left: 50%;
    bottom: 3px;

    width: 18px;
    height: 2px;

    border-radius: 999px;

    transform: translateX(-50%);

    background: #101828;
}

.ironstore-produto-atual-miniaturas button img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: contain;

    border-radius: 9px;
}


/* =========================================================
   INFORMAÇÕES
========================================================= */

.ironstore-produto-atual-info {
    position: relative;

    min-width: 0;

    padding: 8px 0 0;
}


/* =========================================================
   CATEGORIA
========================================================= */

.ironstore-produto-atual-categoria {
    display: inline-flex;
    align-items: center;

    min-height: 28px;

    margin-bottom: 15px;

    padding: 0 11px;

    border:
        1px solid
        rgba(16,24,40,.08);

    border-radius: 999px;

    background:
        rgba(255,255,255,.72);

    backdrop-filter: blur(10px);

    color: #667085;

    font-size: 10px;
    font-weight: 800;

    letter-spacing: .09em;

    text-transform: uppercase;

    box-shadow:
        0 1px 3px rgba(16,24,40,.025);
}


/* =========================================================
   NOME
========================================================= */

.ironstore-produto-atual-info h1 {
    max-width: 650px;

    margin: 0 0 15px;

    color: #101828;

    font-size:
        clamp(
            32px,
            3.2vw,
            48px
        );

    font-weight: 800;

    line-height: 1.055;

    letter-spacing: -.042em;

    overflow-wrap: break-word;
}


/* =========================================================
   DESCRIÇÃO CURTA
========================================================= */

.ironstore-produto-atual-resumo {
    max-width: 610px;

    margin: 0 0 25px;

    color: #667085;

    font-size: 15px;

    line-height: 1.7;
}


/* =========================================================
   PREÇOS
========================================================= */

.ironstore-produto-atual-precos {
    position: relative;

    width: 100%;

    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 8px 12px;

    padding: 22px 0 27px;

    border-top:
        1px solid
        rgba(16,24,40,.07);

    border-bottom:
        1px solid
        rgba(16,24,40,.07);
}


/* PREÇO ATUAL */

.ironstore-produto-atual-precos strong {
    order: 1;

    color: #101828;

    font-size:
        clamp(
            30px,
            3vw,
            38px
        );

    font-weight: 850;

    line-height: 1;

    letter-spacing: -.045em;
}


/* PREÇO ANTERIOR */

.ironstore-produto-atual-preco-anterior {
    order: 2;

    color: #98a2b3;

    font-size: 15px;
    font-weight: 600;

    text-decoration: line-through;

    text-decoration-thickness: 1px;
}


/* OFERTA */

.ironstore-produto-atual-promocao {
    order: 3;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-height: 26px;

    padding: 0 10px;

    border-radius: 999px;

    background:
        linear-gradient(
            135deg,
            #101828,
            #344054
        );

    color: #ffffff;

    font-size: 9px;
    font-weight: 850;

    letter-spacing: .08em;

    text-transform: uppercase;

    box-shadow:
        0 5px 14px
        rgba(16,24,40,.14);
}


/* =========================================================
   VARIEDADES
========================================================= */

.ironstore-produto-atual-variedades {
    position: relative;

    width: 100%;

    padding: 26px 0;

    border-bottom:
        1px solid
        rgba(16,24,40,.07);
}

.ironstore-produto-atual-variedades-titulo {
    display: flex;
    align-items: center;

    margin-bottom: 12px;

    color: #344054;

    font-size: 12px;
    font-weight: 800;

    letter-spacing: .015em;
}

.ironstore-produto-atual-variedades-titulo::before {
    content: "";

    width: 6px;
    height: 6px;

    margin-right: 7px;

    border-radius: 50%;

    background: #101828;
}


/* =========================================================
   LISTA VARIEDADES
========================================================= */

.ironstore-produto-atual-variedades-lista {
    display: flex;

    flex-wrap: wrap;

    gap: 8px;
}


/* =========================================================
   BOTÃO VARIEDADE
========================================================= */

.ironstore-produto-atual-variedades-lista button {
    position: relative;

    min-width: 50px;
    min-height: 42px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 9px 15px;

    border: 1px solid #d0d5dd;

    border-radius: 11px;

    background:
        linear-gradient(
            180deg,
            #ffffff,
            #f9fafb
        );

    color: #344054;

    font: inherit;

    font-size: 12px;
    font-weight: 720;

    cursor: pointer;

    box-shadow:
        0 1px 2px
        rgba(16,24,40,.03);

    transition:
        transform .18s ease,
        border-color .18s ease,
        background .18s ease,
        color .18s ease,
        box-shadow .18s ease;
}

.ironstore-produto-atual-variedades-lista button:hover {
    transform: translateY(-2px);

    border-color: #667085;

    background: #ffffff;

    color: #101828;

    box-shadow:
        0 7px 16px
        rgba(16,24,40,.08);
}


/* =========================================================
   VARIEDADE ATIVA
========================================================= */

.ironstore-produto-atual-variedades-lista button.ativo {
    padding-right: 34px;

    border-color: #101828;

    background:
        linear-gradient(
            135deg,
            #101828,
            #1d2939
        );

    color: #ffffff;

    box-shadow:
        0 7px 18px
        rgba(16,24,40,.18);

    transform: translateY(-1px);
}

.ironstore-produto-atual-variedades-lista button.ativo::after {
    content: "✓";

    position: absolute;

    right: 10px;
    top: 50%;

    width: 16px;
    height: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    transform: translateY(-50%);

    border-radius: 50%;

    background: #ffffff;

    color: #101828;

    font-size: 9px;
    font-weight: 900;
}


/* =========================================================
   DESCRIÇÃO
========================================================= */

.ironstore-produto-atual-descricao {
    width: 100%;

    margin-top: 25px;

    padding: 22px;

    border:
        1px solid
        rgba(16,24,40,.07);

    border-radius: 16px;

    background:
        rgba(255,255,255,.60);

    box-shadow:
        0 5px 20px
        rgba(16,24,40,.025);
}

.ironstore-produto-atual-descricao > span {
    display: inline-flex;

    margin-bottom: 6px;

    color: #98a2b3;

    font-size: 9px;
    font-weight: 850;

    letter-spacing: .09em;

    text-transform: uppercase;
}

.ironstore-produto-atual-descricao h2 {
    margin: 0 0 11px;

    color: #101828;

    font-size: 20px;
    font-weight: 800;

    letter-spacing: -.025em;
}

.ironstore-produto-atual-descricao p {
    margin: 0;

    color: #667085;

    font-size: 14px;

    line-height: 1.75;

    white-space: pre-line;

    overflow-wrap: break-word;
}


/* =========================================================
   DETALHES
========================================================= */

.ironstore-produto-atual-detalhes {
    width: 100%;

    display: grid;

    grid-template-columns:
        repeat(
            auto-fit,
            minmax(115px, 1fr)
        );

    gap: 8px;

    padding-top: 18px;
}

.ironstore-produto-atual-detalhes > div {
    min-width: 0;

    padding: 11px 13px;

    border:
        1px solid
        rgba(16,24,40,.065);

    border-radius: 11px;

    background:
        rgba(255,255,255,.62);

    box-shadow:
        0 1px 3px
        rgba(16,24,40,.02);
}

.ironstore-produto-atual-detalhes span {
    display: block;

    margin-bottom: 4px;

    color: #98a2b3;

    font-size: 9px;
    font-weight: 750;

    letter-spacing: .06em;

    text-transform: uppercase;
}

.ironstore-produto-atual-detalhes strong {
    display: block;

    color: #344054;

    font-size: 12px;
    font-weight: 750;

    overflow-wrap: break-word;
}


/* =========================================================
   QUANTIDADE
========================================================= */

.ironstore-produto-atual-quantidade-area {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 16px;

    margin-top: 24px;

    padding: 15px 16px;

    border:
        1px solid
        rgba(16,24,40,.07);

    border-radius: 15px;

    background:
        rgba(255,255,255,.68);

    box-shadow:
        0 3px 12px
        rgba(16,24,40,.025);
}

.ironstore-produto-atual-quantidade-area > span {
    color: #344054;

    font-size: 12px;
    font-weight: 800;
}


/* CONTROLE */

.ironstore-produto-atual-quantidade {
    display: grid;

    grid-template-columns:
        40px
        48px
        40px;

    height: 40px;

    overflow: hidden;

    border: 1px solid #d0d5dd;

    border-radius: 11px;

    background: #ffffff;

    box-shadow:
        0 1px 3px
        rgba(16,24,40,.04);
}

.ironstore-produto-atual-quantidade button {
    width: 40px;
    height: 40px;

    padding: 0;

    border: 0;

    background: #f9fafb;

    color: #344054;

    font-size: 19px;
    font-weight: 600;

    cursor: pointer;

    transition:
        background .16s ease,
        color .16s ease;
}

.ironstore-produto-atual-quantidade button:hover {
    background: #101828;

    color: #ffffff;
}

.ironstore-produto-atual-quantidade input {
    width: 48px;
    height: 40px;

    padding: 0;

    border: 0;

    border-left: 1px solid #e4e7ec;
    border-right: 1px solid #e4e7ec;

    outline: 0;

    background: #ffffff;

    color: #101828;

    font: inherit;

    font-size: 13px;
    font-weight: 800;

    text-align: center;

    appearance: textfield;
    -moz-appearance: textfield;
}

.ironstore-produto-atual-quantidade input::-webkit-inner-spin-button,
.ironstore-produto-atual-quantidade input::-webkit-outer-spin-button {
    margin: 0;

    -webkit-appearance: none;
}


/* =========================================================
   AÇÕES
========================================================= */

.ironstore-produto-atual-acoes {
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 9px;

    margin-top: 14px;
}


/* =========================================================
   ADICIONAR
========================================================= */

.ironstore-produto-atual-adicionar {
    position: relative;

    width: 100%;
    min-height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    padding: 0 22px;

    overflow: hidden;

    border: 1px solid #101828;

    border-radius: 15px;

    background:
        linear-gradient(
            135deg,
            #1d2939 0%,
            #101828 58%,
            #0c111d 100%
        );

    color: #ffffff;

    font: inherit;

    font-size: 14px;
    font-weight: 800;

    letter-spacing: -.01em;

    cursor: pointer;

    box-shadow:
        0 8px 18px
        rgba(16,24,40,.12),
        0 16px 32px
        rgba(16,24,40,.09);

    transition:
        transform .2s ease,
        box-shadow .2s ease,
        filter .2s ease;
}

.ironstore-produto-atual-adicionar::before {
    content: "";

    position: absolute;

    top: 0;
    left: -55%;

    width: 35%;
    height: 100%;

    transform: skewX(-20deg);

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.13),
            transparent
        );

    transition: left .6s ease;

    pointer-events: none;
}

.ironstore-produto-atual-adicionar:hover {
    transform: translateY(-2px);

    box-shadow:
        0 12px 25px
        rgba(16,24,40,.17),
        0 20px 40px
        rgba(16,24,40,.11);
}

.ironstore-produto-atual-adicionar:hover::before {
    left: 125%;
}

.ironstore-produto-atual-adicionar:active {
    transform: scale(.992);
}

.ironstore-produto-atual-adicionar:disabled {
    opacity: .62;

    cursor: wait;

    transform: none;
}


/* =========================================================
   PRODUTO JÁ NO CARRINHO
========================================================= */

.ironstore-produto-atual-adicionar.remover-carrinho {
    border-color: #d0d5dd;

    background:
        linear-gradient(
            180deg,
            #ffffff,
            #f8fafc
        );

    color: #344054;

    box-shadow:
        0 4px 12px
        rgba(16,24,40,.045);
}

.ironstore-produto-atual-adicionar.remover-carrinho:hover {
    border-color: #f04438;

    background: #fffafa;

    color: #b42318;

    box-shadow:
        0 8px 20px
        rgba(240,68,56,.08);
}


/* =========================================================
   ÍCONE CARRINHO
========================================================= */

.ironstore-produto-atual-adicionar-icone {
    position: relative;

    width: 20px;
    height: 20px;

    flex: 0 0 20px;

    color: currentColor;
}

.ironstore-produto-atual-adicionar-icone::before {
    content: "";

    position: absolute;

    left: 2px;
    top: 4px;

    width: 13px;
    height: 9px;

    border:
        1.7px solid
        currentColor;

    border-top: 0;

    transform: skew(-7deg);
}

.ironstore-produto-atual-adicionar-icone::after {
    content: "";

    position: absolute;

    left: 5px;
    bottom: 1px;

    width: 3px;
    height: 3px;

    border-radius: 50%;

    background: currentColor;

    box-shadow:
        8px 0 0 currentColor;
}


/* =========================================================
   FINALIZAR COMPRA
========================================================= */

.ironstore-produto-atual-finalizar {
    width: 100%;
    min-height: 54px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    padding: 0 20px;

    border: 1px solid #d0d5dd;

    border-radius: 14px;

    background:
        rgba(255,255,255,.75);

    color: #344054;

    font: inherit;

    font-size: 13px;
    font-weight: 750;

    cursor: pointer;

    box-shadow:
        0 2px 5px
        rgba(16,24,40,.025);

    transition:
        transform .2s ease,
        border-color .2s ease,
        background .2s ease,
        color .2s ease,
        box-shadow .2s ease;
}

.ironstore-produto-atual-finalizar::after {
    content: "→";

    font-size: 17px;

    transition:
        transform .2s ease;
}

.ironstore-produto-atual-finalizar:hover {
    transform: translateY(-1px);

    border-color: #98a2b3;

    background: #ffffff;

    color: #101828;

    box-shadow:
        0 8px 18px
        rgba(16,24,40,.06);
}

.ironstore-produto-atual-finalizar:hover::after {
    transform: translateX(4px);
}


/* =========================================================
   AVISO / ERRO DE AÇÃO
========================================================= */

.ironstore-produto-atual-aviso {
    position: relative;

    width: 100%;

    margin-top: 12px;

    padding: 12px 14px 12px 39px;

    border:
        1px solid
        #fecdca;

    border-radius: 12px;

    background: #fffafa;

    color: #b42318;

    font-size: 12px;
    font-weight: 600;

    line-height: 1.5;
}

.ironstore-produto-atual-aviso::before {
    content: "!";

    position: absolute;

    left: 13px;
    top: 50%;

    width: 17px;
    height: 17px;

    display: flex;
    align-items: center;
    justify-content: center;

    transform: translateY(-50%);

    border-radius: 50%;

    background: #b42318;

    color: #ffffff;

    font-size: 10px;
    font-weight: 900;
}


/* =========================================================
   LOADING
========================================================= */

.ironstore-produto-atual-loading {
    width: min(1180px, calc(100% - 32px));

    min-height: 500px;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #667085;

    text-align: center;
}

.ironstore-produto-atual-loading span {
    position: relative;

    width: 42px;
    height: 42px;

    margin-bottom: 17px;

    border: 3px solid #e4e7ec;

    border-top-color: #101828;

    border-radius: 50%;

    animation:
        ironstoreProdutoLoading
        .7s
        linear
        infinite;
}

.ironstore-produto-atual-loading p {
    margin: 0;

    color: #667085;

    font-size: 13px;
    font-weight: 700;
}

@keyframes ironstoreProdutoLoading {

    to {
        transform: rotate(360deg);
    }

}


/* =========================================================
   ERRO DE CARREGAMENTO
========================================================= */

.ironstore-produto-atual-erro {
    width: min(680px, calc(100% - 32px));

    min-height: 360px;

    margin: 0 auto;

    padding: 38px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border:
        1px solid
        rgba(16,24,40,.07);

    border-radius: 24px;

    background:
        rgba(255,255,255,.76);

    backdrop-filter: blur(15px);

    text-align: center;

    box-shadow:
        0 20px 50px
        rgba(16,24,40,.05);
}

.ironstore-produto-atual-erro::before {
    content: "!";

    width: 46px;
    height: 46px;

    margin-bottom: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    border:
        1px solid #d0d5dd;

    border-radius: 50%;

    background: #ffffff;

    color: #344054;

    font-size: 19px;
    font-weight: 850;

    box-shadow:
        0 5px 14px
        rgba(16,24,40,.05);
}

.ironstore-produto-atual-erro strong {
    margin-bottom: 7px;

    color: #101828;

    font-size: 18px;
    font-weight: 800;
}

.ironstore-produto-atual-erro p {
    max-width: 450px;

    margin: 0;

    color: #667085;

    font-size: 13px;

    line-height: 1.65;
}


/* =========================================================
   FOCUS
========================================================= */

.ironstore-produto-atual button:focus-visible,
.ironstore-produto-atual input:focus-visible {
    outline: none;

    box-shadow:
        0 0 0 3px
        rgba(16,24,40,.13);
}


/* =========================================================
   DESKTOP MENOR
========================================================= */

@media (max-width: 1100px) {

    .ironstore-produto-atual {
        padding:
            42px
            20px
            65px;
    }

    .ironstore-produto-atual-conteudo {
        grid-template-columns:
            minmax(0, 1fr)
            minmax(350px, .9fr);

        gap: 42px;
    }

}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 900px) {

    .ironstore-produto-atual {
        padding:
            34px
            18px
            55px;
    }

    .ironstore-produto-atual-conteudo {
        grid-template-columns:
            minmax(0, 1fr)
            minmax(320px, .9fr);

        gap: 30px;
    }

    .ironstore-produto-atual-info h1 {
        font-size:
            clamp(
                28px,
                4vw,
                38px
            );
    }

}


/* =========================================================
   TABLET VERTICAL / MOBILE
========================================================= */

@media (max-width: 760px) {

    .ironstore-produto-atual {
        padding:
            24px
            16px
            50px;
    }

    .ironstore-produto-atual-conteudo {
        grid-template-columns: 1fr;

        gap: 30px;
    }

    .ironstore-produto-atual-galeria {
        position: relative;

        top: auto;
    }

    .ironstore-produto-atual-imagem-principal {
        max-height: 650px;

        border-radius: 22px;
    }

    .ironstore-produto-atual-info {
        padding-top: 0;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

    .ironstore-produto-atual {
        padding:
            14px
            12px
            38px;
    }

    .ironstore-produto-atual-conteudo {
        gap: 24px;
    }


    /* IMAGEM */

    .ironstore-produto-atual-imagem-principal {
        border-radius: 18px;

        box-shadow:
            0 10px 30px
            rgba(16,24,40,.055);
    }


    /* MINIATURAS */

    .ironstore-produto-atual-miniaturas {
        gap: 7px;

        margin-top: 9px;
    }

    .ironstore-produto-atual-miniaturas button {
        width: 62px;
        height: 62px;

        flex-basis: 62px;

        border-radius: 11px;
    }


    /* TÍTULO */

    .ironstore-produto-atual-categoria {
        margin-bottom: 10px;
    }

    .ironstore-produto-atual-info h1 {
        margin-bottom: 12px;

        font-size: 29px;

        line-height: 1.08;
    }


    /* PREÇO */

    .ironstore-produto-atual-precos {
        padding:
            19px
            0
            22px;
    }

    .ironstore-produto-atual-precos strong {
        font-size: 29px;
    }

    .ironstore-produto-atual-preco-anterior {
        font-size: 13px;
    }


    /* VARIEDADES */

    .ironstore-produto-atual-variedades {
        padding:
            21px
            0;
    }

    .ironstore-produto-atual-variedades-lista {
        gap: 7px;
    }

    .ironstore-produto-atual-variedades-lista button {
        min-height: 40px;

        padding:
            8px
            13px;

        border-radius: 10px;

        font-size: 11px;
    }

    .ironstore-produto-atual-variedades-lista button.ativo {
        padding-right: 31px;
    }


    /* DESCRIÇÃO */

    .ironstore-produto-atual-descricao {
        margin-top: 20px;

        padding: 18px;

        border-radius: 14px;
    }

    .ironstore-produto-atual-descricao h2 {
        font-size: 19px;
    }

    .ironstore-produto-atual-descricao p {
        font-size: 13px;

        line-height: 1.7;
    }


    /* DETALHES */

    .ironstore-produto-atual-detalhes {
        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            );
    }


    /* QUANTIDADE */

    .ironstore-produto-atual-quantidade-area {
        margin-top: 20px;

        padding:
            13px
            14px;

        border-radius: 13px;
    }


    /* AÇÕES */

    .ironstore-produto-atual-acoes {
        gap: 8px;

        margin-top: 12px;
    }

    .ironstore-produto-atual-adicionar {
        min-height: 57px;

        border-radius: 13px;

        font-size: 13px;
    }

    .ironstore-produto-atual-finalizar {
        min-height: 51px;

        border-radius: 13px;

        font-size: 12px;
    }

}


/* =========================================================
   MOBILE PEQUENO
========================================================= */

@media (max-width: 420px) {

    .ironstore-produto-atual {
        padding:
            10px
            10px
            32px;
    }

    .ironstore-produto-atual-info h1 {
        font-size: 26px;
    }

    .ironstore-produto-atual-precos strong {
        font-size: 27px;
    }

    .ironstore-produto-atual-detalhes {
        gap: 7px;
    }

    .ironstore-produto-atual-quantidade-area {
        gap: 10px;
    }

}


/* =========================================================
   MOBILE MUITO PEQUENO
========================================================= */

@media (max-width: 350px) {

    .ironstore-produto-atual {
        padding:
            8px
            8px
            28px;
    }

    .ironstore-produto-atual-info h1 {
        font-size: 24px;
    }

    .ironstore-produto-atual-miniaturas button {
        width: 54px;
        height: 54px;

        flex-basis: 54px;
    }

    .ironstore-produto-atual-variedades-lista button {
        min-height: 38px;

        padding:
            7px
            10px;
    }

    .ironstore-produto-atual-detalhes {
        grid-template-columns: 1fr;
    }

    .ironstore-produto-atual-quantidade-area {
        align-items: flex-start;

        flex-direction: column;
    }

}


/* =========================================================
   TOUCH
========================================================= */

@media (hover: none) {

    .ironstore-produto-atual-imagem-principal:hover,
    .ironstore-produto-atual-miniaturas button:hover,
    .ironstore-produto-atual-variedades-lista button:hover,
    .ironstore-produto-atual-adicionar:hover,
    .ironstore-produto-atual-finalizar:hover {
        transform: none;
    }

    .ironstore-produto-atual-imagem-principal:hover img {
        transform: none;
    }

    .ironstore-produto-atual-adicionar:hover::before {
        left: -55%;
    }

}


/* =========================================================
   ACESSIBILIDADE — REDUZIR MOVIMENTO
========================================================= */

@media (prefers-reduced-motion: reduce) {

    .ironstore-produto-atual *,
    .ironstore-produto-atual *::before,
    .ironstore-produto-atual *::after {
        animation-duration:
            .01ms !important;

        animation-iteration-count:
            1 !important;

        transition-duration:
            .01ms !important;

        scroll-behavior:
            auto !important;
    }

}

/* =========================================================
   BOTÃO DE COMPRA — PREMIUM
========================================================= */

.ironstore-compra-btn {
    position: relative;

    width: 100%;
    min-height: 68px;

    padding: 0;

    overflow: hidden;

    border: 0;
    border-radius: 17px;

    font: inherit;

    cursor: pointer;

    isolation: isolate;

    transition:
        transform .22s ease,
        box-shadow .22s ease,
        opacity .22s ease;
}


/* =========================================================
   FUNDO
========================================================= */

.ironstore-compra-btn-fundo {
    position: absolute;

    inset: 0;

    z-index: -2;

    border-radius: inherit;

    transition:
        background .25s ease,
        border-color .25s ease;
}


/* =========================================================
   CONTEÚDO
========================================================= */

.ironstore-compra-btn-conteudo {
    position: relative;

    width: 100%;
    min-height: 68px;

    display: grid;

    grid-template-columns:
        42px
        minmax(0, 1fr)
        30px;

    align-items: center;

    gap: 13px;

    padding:
        10px
        18px;

    text-align: left;
}


/* =========================================================
   ESTADO — ADICIONAR
========================================================= */

.ironstore-compra-btn--adicionar {
    color: #ffffff;

    box-shadow:
        0 8px 18px rgba(16, 24, 40, .14),
        0 18px 40px rgba(16, 24, 40, .13);
}

.ironstore-compra-btn--adicionar
.ironstore-compra-btn-fundo {
    border: 1px solid rgba(255, 255, 255, .07);

    background:
        radial-gradient(
            circle at 10% 0%,
            rgba(255,255,255,.11),
            transparent 28%
        ),
        linear-gradient(
            135deg,
            #25344a 0%,
            #172033 42%,
            #101828 72%,
            #0b1220 100%
        );
}


/* =========================================================
   BRILHO
========================================================= */

.ironstore-compra-btn--adicionar::before {
    content: "";

    position: absolute;

    z-index: -1;

    top: -70px;
    left: -80px;

    width: 190px;
    height: 190px;

    border-radius: 50%;

    background:
        rgba(255,255,255,.08);

    filter: blur(5px);

    pointer-events: none;
}


/* =========================================================
   EFEITO DE LUZ
========================================================= */

.ironstore-compra-btn--adicionar::after {
    content: "";

    position: absolute;

    z-index: 1;

    top: 0;
    left: -60%;

    width: 38%;
    height: 100%;

    transform: skewX(-22deg);

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.13),
            transparent
        );

    pointer-events: none;

    transition:
        left .65s
        cubic-bezier(.2,.7,.2,1);
}

.ironstore-compra-btn--adicionar:hover::after {
    left: 125%;
}


/* =========================================================
   HOVER
========================================================= */

.ironstore-compra-btn--adicionar:hover {
    transform: translateY(-2px);

    box-shadow:
        0 12px 24px rgba(16,24,40,.17),
        0 24px 48px rgba(16,24,40,.16);
}

.ironstore-compra-btn--adicionar:active {
    transform:
        translateY(0)
        scale(.993);
}


/* =========================================================
   ÍCONE
========================================================= */

.ironstore-compra-btn-icone {
    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 12px;

    background:
        rgba(255,255,255,.10);

    border:
        1px solid
        rgba(255,255,255,.09);

    color: currentColor;

    transition:
        transform .22s ease,
        background .22s ease;
}

.ironstore-compra-btn--adicionar:hover
.ironstore-compra-btn-icone {
    transform: scale(1.05);

    background:
        rgba(255,255,255,.15);
}


/* =========================================================
   CARRINHO DESENHADO EM CSS
========================================================= */

.ironstore-compra-btn-carrinho {
    position: relative;

    width: 21px;
    height: 21px;
}

.ironstore-compra-btn-carrinho::before {
    content: "";

    position: absolute;

    left: 3px;
    top: 5px;

    width: 14px;
    height: 9px;

    border:
        1.8px solid
        currentColor;

    border-top: 0;

    border-radius:
        0 0 3px 3px;

    transform:
        skewX(-7deg);
}

.ironstore-compra-btn-carrinho::after {
    content: "";

    position: absolute;

    left: 6px;
    bottom: 1px;

    width: 3px;
    height: 3px;

    border-radius: 50%;

    background:
        currentColor;

    box-shadow:
        9px 0 0
        currentColor;
}

.ironstore-compra-btn-carrinho > span {
    position: absolute;

    left: 0;
    top: 2px;

    width: 6px;
    height: 5px;

    border-top:
        1.8px solid
        currentColor;

    transform:
        rotate(8deg);
}


/* =========================================================
   TEXTOS
========================================================= */

.ironstore-compra-btn-textos {
    min-width: 0;

    display: flex;
    flex-direction: column;

    gap: 2px;
}

.ironstore-compra-btn-textos strong {
    display: block;

    margin: 0;

    color: currentColor;

    font-size: 14px;
    font-weight: 800;

    line-height: 1.2;

    letter-spacing: -.015em;
}

.ironstore-compra-btn-textos small {
    display: block;

    color:
        rgba(255,255,255,.61);

    font-size: 10px;
    font-weight: 550;

    line-height: 1.3;

    letter-spacing: .005em;
}


/* =========================================================
   SETA
========================================================= */

.ironstore-compra-btn-seta {
    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 9px;

    background:
        rgba(255,255,255,.07);

    color: currentColor;

    font-size: 18px;
    font-weight: 400;

    transition:
        transform .22s ease,
        background .22s ease;
}

.ironstore-compra-btn:hover
.ironstore-compra-btn-seta {
    transform: translateX(3px);

    background:
        rgba(255,255,255,.12);
}


/* =========================================================
   ESTADO — PRODUTO NO CARRINHO
========================================================= */

.ironstore-compra-btn--adicionado {
    color: #067647;

    border:
        1px solid
        #abefc6;

    background:
        linear-gradient(
            180deg,
            #f6fef9 0%,
            #ecfdf3 100%
        );

    box-shadow:
        0 5px 14px
        rgba(5,150,105,.055);
}

.ironstore-compra-btn--adicionado
.ironstore-compra-btn-fundo {
    background:
        linear-gradient(
            135deg,
            #f6fef9,
            #ecfdf3
        );
}

.ironstore-compra-btn--adicionado
.ironstore-compra-btn-icone {
    border:
        1px solid
        #abefc6;

    background: #dcfae6;

    color: #067647;
}

.ironstore-compra-btn--adicionado
.ironstore-compra-btn-textos small {
    color: #528b70;
}

.ironstore-compra-btn--adicionado
.ironstore-compra-btn-seta {
    background:
        rgba(6,118,71,.07);

    color: #067647;
}


/* =========================================================
   CHECK
========================================================= */

.ironstore-compra-btn-check {
    width: 21px;
    height: 21px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: #067647;

    color: #ffffff;

    font-size: 12px;
    font-weight: 900;

    box-shadow:
        0 3px 8px
        rgba(6,118,71,.18);
}


/* =========================================================
   HOVER PARA REMOVER
========================================================= */

.ironstore-compra-btn--adicionado:hover {
    transform: translateY(-1px);

    border-color: #fda29b;

    background:
        linear-gradient(
            180deg,
            #fffafa,
            #fef3f2
        );

    color: #b42318;

    box-shadow:
        0 8px 20px
        rgba(180,35,24,.07);
}

.ironstore-compra-btn--adicionado:hover
.ironstore-compra-btn-fundo {
    background:
        linear-gradient(
            180deg,
            #fffafa,
            #fef3f2
        );
}

.ironstore-compra-btn--adicionado:hover
.ironstore-compra-btn-icone {
    border-color: #fecdca;

    background: #fee4e2;

    color: #b42318;
}

.ironstore-compra-btn--adicionado:hover
.ironstore-compra-btn-check {
    background: #b42318;
}

.ironstore-compra-btn--adicionado:hover
.ironstore-compra-btn-textos small {
    color: #b5473c;
}

.ironstore-compra-btn--adicionado:hover
.ironstore-compra-btn-seta {
    background:
        rgba(180,35,24,.07);

    color: #b42318;
}


/* =========================================================
   LOADING
========================================================= */

.ironstore-compra-btn--loading {
    cursor: wait;
}

.ironstore-compra-btn--loading:hover {
    transform: none;
}


/* =========================================================
   SPINNER
========================================================= */

.ironstore-compra-btn-spinner {
    width: 20px;
    height: 20px;

    border:
        2px solid
        rgba(255,255,255,.28);

    border-top-color:
        currentColor;

    border-radius: 50%;

    animation:
        ironstoreCompraSpinner
        .65s
        linear
        infinite;
}

.ironstore-compra-btn--adicionado
.ironstore-compra-btn-spinner {
    border-color:
        rgba(6,118,71,.18);

    border-top-color:
        #067647;
}

@keyframes ironstoreCompraSpinner {

    to {
        transform:
            rotate(360deg);
    }

}


/* =========================================================
   DISABLED
========================================================= */

.ironstore-compra-btn:disabled {
    opacity: .72;

    cursor: wait;
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

    .ironstore-compra-btn {
        min-height: 64px;

        border-radius: 15px;
    }

    .ironstore-compra-btn-conteudo {
        min-height: 64px;

        grid-template-columns:
            39px
            minmax(0,1fr)
            27px;

        gap: 10px;

        padding:
            9px
            14px;
    }

    .ironstore-compra-btn-icone {
        width: 39px;
        height: 39px;

        border-radius: 11px;
    }

    .ironstore-compra-btn-textos strong {
        font-size: 13px;
    }

    .ironstore-compra-btn-textos small {
        font-size: 9px;
    }

    .ironstore-compra-btn-seta {
        width: 27px;
        height: 27px;

        border-radius: 8px;

        font-size: 16px;
    }

}


/* =========================================================
   MOBILE PEQUENO
========================================================= */

@media (max-width: 360px) {

    .ironstore-compra-btn-conteudo {
        grid-template-columns:
            38px
            minmax(0,1fr);

        padding:
            9px
            12px;
    }

    .ironstore-compra-btn-seta {
        display: none;
    }

}


/* =========================================================
   TOUCH
========================================================= */

@media (hover: none) {

    .ironstore-compra-btn:hover {
        transform: none;
    }

    .ironstore-compra-btn--adicionado:hover {
        border-color: #abefc6;

        background:
            linear-gradient(
                180deg,
                #f6fef9,
                #ecfdf3
            );

        color: #067647;
    }

}


/* =========================================================
   REDUZIR MOVIMENTO
========================================================= */

@media (prefers-reduced-motion: reduce) {

    .ironstore-compra-btn,
    .ironstore-compra-btn *,
    .ironstore-compra-btn::before,
    .ironstore-compra-btn::after {
        transition: none !important;
    }

    .ironstore-compra-btn--adicionar::after {
        display: none;
    }

}


`;

export default classicoProdutos;