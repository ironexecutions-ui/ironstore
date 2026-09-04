const classicoSeguimento = `

/* =========================================================
   IRONSTORE
   MINHAS COMPRAS — CLASSICO PREMIUM
========================================================= */

.ironstore-perfil-compras-area {
    width: 100%;
    max-width: 1380px;
    margin: 0 auto;
    padding: 32px 24px 70px;
    box-sizing: border-box;

    font-family:
        Inter,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;

    color: #111827;
}


/* =========================================================
   CABEÇALHO
========================================================= */

.ironstore-perfil-compras-header {
    position: relative;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    gap: 24px;

    margin-bottom: 28px;
    padding: 0 2px;
}

.ironstore-perfil-compras-header > div:first-child {
    min-width: 0;
}

.ironstore-perfil-compras-label {
    display: inline-flex;
    align-items: center;

    margin-bottom: 8px;

    font-size: 10px;
    line-height: 1;
    font-weight: 800;
    letter-spacing: 0.15em;
    text-transform: uppercase;

    color: #6b7280;
}

.ironstore-perfil-compras-header h2 {
    margin: 0;

    font-size: clamp(
        26px,
        3vw,
        38px
    );

    line-height: 1.08;
    letter-spacing: -0.04em;
    font-weight: 750;

    color: #0a0a0b;
}

.ironstore-perfil-compras-header p {
    max-width: 560px;

    margin:
        9px
        0
        0;

    font-size: 13px;
    line-height: 1.6;

    color: #737373;
}


/* =========================================================
   CONTADOR
========================================================= */

.ironstore-perfil-compras-total {
    flex-shrink: 0;

    display: flex;
    align-items: baseline;

    gap: 6px;

    padding:
        9px
        14px;

    border:
        1px solid
        #e5e7eb;

    border-radius: 999px;

    background:
        rgba(
            255,
            255,
            255,
            0.85
        );

    box-shadow:
        0 1px 2px
        rgba(
            0,
            0,
            0,
            0.03
        );

    font-size: 15px;
    font-weight: 750;

    color: #111827;
}

.ironstore-perfil-compras-total span {
    font-size: 11px;
    font-weight: 500;

    color: #9ca3af;
}


/* =========================================================
   ÁREA DA TABELA
========================================================= */

.ironstore-perfil-compras-tabela-area {
    position: relative;

    width: 100%;

    overflow: hidden;

    border:
        1px solid
        #e7e9ee;

    border-radius: 20px;

    background:
        #ffffff;

    box-shadow:
        0 1px 2px
            rgba(
                0,
                0,
                0,
                0.02
            ),
        0 10px 30px
            rgba(
                15,
                23,
                42,
                0.035
            );
}

.ironstore-perfil-compras-tabela {
    width: 100%;

    border-collapse: collapse;
    border-spacing: 0;

    table-layout: auto;
}


/* =========================================================
   CABEÇALHO DA TABELA
========================================================= */

.ironstore-perfil-compras-tabela thead {
    background:
        #fafafa;
}

.ironstore-perfil-compras-tabela th {
    padding:
        15px
        20px;

    border-bottom:
        1px solid
        #eceef1;

    text-align: left;

    font-size: 9px;
    line-height: 1;
    font-weight: 800;

    letter-spacing: 0.09em;
    text-transform: uppercase;

    color: #9ca3af;

    white-space: nowrap;
}


/* =========================================================
   LINHAS
========================================================= */

.ironstore-perfil-compras-tabela tbody > tr:not(
    .ironstore-compras-detalhes-linha
) {
    transition:
        background-color
        160ms ease;
}

.ironstore-perfil-compras-tabela tbody > tr:not(
    .ironstore-compras-detalhes-linha
):hover {
    background:
        #fcfcfd;
}

.ironstore-perfil-compras-tabela td {
    padding:
        18px
        20px;

    border-bottom:
        1px solid
        #f0f1f3;

    vertical-align: middle;

    font-size: 12px;
    line-height: 1.45;

    color: #52525b;
}

.ironstore-perfil-compras-tabela tbody > tr:last-child td {
    border-bottom: 0;
}


/* =========================================================
   PROTOCOLO
========================================================= */

.ironstore-compras-protocolo {
    display: inline-flex;
    align-items: center;

    font-size: 12px;
    font-weight: 750;

    letter-spacing: 0.015em;

    color: #111827;

    font-variant-numeric:
        tabular-nums;
}


/* =========================================================
   VALOR
========================================================= */

.ironstore-perfil-compras-tabela td strong {
    font-weight: 700;

    color: #18181b;
}


/* =========================================================
   STATUS
========================================================= */

.ironstore-compras-status {
    display: inline-flex;
    align-items: center;

    gap: 7px;

    min-height: 26px;

    padding:
        0
        10px;

    border-radius: 999px;

    font-size: 10px;
    line-height: 1;
    font-weight: 700;

    white-space: nowrap;

    border:
        1px solid
        transparent;
}

.ironstore-compras-status::before {
    content: "";

    width: 5px;
    height: 5px;

    border-radius: 50%;

    background:
        currentColor;

    opacity: 0.8;
}


/* PAGO */

.ironstore-compras-status-pago-por-embalar {
    color: #7c5d12;

    background:
        #fffbeb;

    border-color:
        #f5e8b5;
}


/* EMBALADO */

.ironstore-compras-status-embalado-por-enviar {
    color: #175cd3;

    background:
        #eff8ff;

    border-color:
        #d1e9ff;
}


/* ENVIADO */

.ironstore-compras-status-enviado-por-receber {
    color: #4338ca;

    background:
        #f4f3ff;

    border-color:
        #e0e0ff;
}


/* ENTREGUE */

.ironstore-compras-status-entregue {
    color: #067647;

    background:
        #ecfdf3;

    border-color:
        #c6f0d8;
}


/* CANCELADO */

.ironstore-compras-status-cancelado {
    color: #b42318;

    background:
        #fff4f2;

    border-color:
        #fecdca;
}


/* REEMBOLSADO */

.ironstore-compras-status-reembolsado {
    color: #475467;

    background:
        #f8fafc;

    border-color:
        #e4e7ec;
}


/* DEVOLVIDO */

.ironstore-compras-status-devolvido {
    color: #9a3412;

    background:
        #fff7ed;

    border-color:
        #fed7aa;
}


/* =========================================================
   BOTÃO DETALHES
========================================================= */

.ironstore-compras-acoes {
    display: flex;
    align-items: center;

    justify-content: flex-start;
}

.ironstore-compras-botao-detalhes {
    position: relative;

    min-height: 32px;

    padding:
        0
        13px;

    border:
        1px solid
        #e4e7ec;

    border-radius: 9px;

    outline: none;

    background:
        #ffffff;

    box-shadow:
        0 1px 2px
        rgba(
            16,
            24,
            40,
            0.03
        );

    font-family: inherit;
    font-size: 10px;
    line-height: 1;
    font-weight: 650;

    color: #344054;

    cursor: pointer;

    transition:
        background-color 150ms ease,
        border-color 150ms ease,
        color 150ms ease,
        box-shadow 150ms ease,
        transform 150ms ease;
}

.ironstore-compras-botao-detalhes:hover {
    color: #101828;

    border-color:
        #cfd4dc;

    background:
        #f9fafb;

    box-shadow:
        0 2px 5px
        rgba(
            16,
            24,
            40,
            0.05
        );
}

.ironstore-compras-botao-detalhes:active {
    transform:
        translateY(1px);
}


/* =========================================================
   LINHA DE DETALHES
========================================================= */

.ironstore-compras-detalhes-linha > td {
    padding: 0 !important;

    background:
        #f8f9fb;

    border-bottom:
        1px solid
        #e7e9ee !important;
}

.ironstore-compras-detalhes {
    position: relative;

    margin:
        0;

    padding:
        24px;

    background:
        linear-gradient(
            180deg,
            #f8f9fb 0%,
            #fbfbfc 100%
        );

    box-shadow:
        inset
        0
        1px
        0
        rgba(
            255,
            255,
            255,
            0.9
        );
}


/* =========================================================
   RESUMO DOS DETALHES
========================================================= */

.ironstore-compras-detalhes-topo {
    display: grid;

    grid-template-columns:
        repeat(
            6,
            minmax(
                0,
                1fr
            )
        );

    overflow: hidden;

    border:
        1px solid
        #e4e7ec;

    border-radius: 14px;

    background:
        #ffffff;

    box-shadow:
        0 1px 3px
        rgba(
            16,
            24,
            40,
            0.025
        );
}

.ironstore-compras-detalhes-topo > div {
    position: relative;

    min-width: 0;

    padding:
        16px
        17px;

    border-right:
        1px solid
        #eef0f2;
}

.ironstore-compras-detalhes-topo > div:last-child {
    border-right: 0;
}

.ironstore-compras-detalhes-topo > div > span {
    display: block;

    margin-bottom: 6px;

    font-size: 8px;
    line-height: 1;
    font-weight: 800;

    letter-spacing: 0.09em;
    text-transform: uppercase;

    color: #a1a1aa;
}

.ironstore-compras-detalhes-topo > div > strong {
    display: block;

    overflow: hidden;

    font-size: 11px;
    line-height: 1.4;
    font-weight: 700;

    color: #18181b;

    text-overflow: ellipsis;
}


/* =========================================================
   RASTREIO
========================================================= */

.ironstore-compras-rastreio {
    color: #175cd3 !important;
}

a.ironstore-compras-rastreio {
    display: inline-flex;
    align-items: center;

    max-width: 100%;

    color: #175cd3 !important;

    text-decoration: none;

    border-bottom:
        1px solid
        rgba(
            23,
            92,
            211,
            0.25
        );

    transition:
        color 150ms ease,
        border-color 150ms ease;
}

a.ironstore-compras-rastreio:hover {
    color: #004eeb !important;

    border-color:
        currentColor;
}


/* =========================================================
   PRODUTOS
========================================================= */

.ironstore-compras-produtos {
    margin-top: 18px;

    overflow: hidden;

    border:
        1px solid
        #e4e7ec;

    border-radius: 14px;

    background:
        #ffffff;

    box-shadow:
        0 1px 3px
        rgba(
            16,
            24,
            40,
            0.025
        );
}


/* =========================================================
   TÍTULO PRODUTOS
========================================================= */

.ironstore-compras-produtos-titulo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;

    padding:
        14px
        18px;

    border-bottom:
        1px solid
        #eef0f2;

    background:
        #fcfcfd;
}

.ironstore-compras-produtos-titulo > div {
    display: flex;
    align-items: center;

    gap: 8px;
}

.ironstore-compras-produtos-titulo span {
    font-size: 9px;
    line-height: 1;
    font-weight: 800;

    letter-spacing: 0.08em;
    text-transform: uppercase;

    color: #9ca3af;
}

.ironstore-compras-produtos-titulo strong {
    font-size: 11px;
    font-weight: 700;

    color: #27272a;
}

.ironstore-compras-produtos-titulo small {
    font-size: 10px;

    color: #a1a1aa;
}


/* =========================================================
   LISTA DE PRODUTOS
========================================================= */

.ironstore-compras-produtos-lista {
    display: flex;
    flex-direction: column;
}

.ironstore-compras-produto {
    display: flex;
    align-items: center;

    gap: 14px;

    padding:
        14px
        18px;

    border-bottom:
        1px solid
        #f0f1f3;

    background:
        #ffffff;

    transition:
        background-color
        150ms ease;
}

.ironstore-compras-produto:last-child {
    border-bottom: 0;
}

.ironstore-compras-produto:hover {
    background:
        #fdfdfd;
}


/* =========================================================
   IMAGEM DO PRODUTO
========================================================= */

.ironstore-compras-produto-imagem {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    flex:
        0
        0
        62px;

    width: 62px;
    height: 62px;

    overflow: hidden;

    border:
        1px solid
        #eceef1;

    border-radius: 11px;

    background:
        #f7f7f8;
}

.ironstore-compras-produto-imagem img {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;

    transition:
        transform
        300ms ease;
}

.ironstore-compras-produto:hover
.ironstore-compras-produto-imagem img {
    transform:
        scale(1.025);
}

.ironstore-compras-produto-imagem span {
    padding: 6px;

    text-align: center;

    font-size: 8px;
    line-height: 1.3;

    color: #a1a1aa;
}


/* =========================================================
   INFORMAÇÕES PRODUTO
========================================================= */

.ironstore-compras-produto-info {
    min-width: 0;

    display: flex;
    flex-direction: column;

    gap: 4px;
}

.ironstore-compras-produto-info > strong {
    max-width: 650px;

    overflow: hidden;

    font-size: 12px;
    line-height: 1.4;
    font-weight: 700;

    color: #18181b;

    text-overflow: ellipsis;
    white-space: nowrap;
}

.ironstore-compras-produto-info > span {
    font-size: 10px;
    line-height: 1.4;

    color: #8b8b93;
}

.ironstore-compras-produto-info > span b {
    font-weight: 650;

    color: #52525b;
}


/* =========================================================
   STATUS ANTIGO POR PRODUTO
   Mantido porque o JSX ainda possui essas classes
========================================================= */

.ironstore-compras-produto-status {
    width: fit-content;

    margin-top: 3px;

    padding:
        4px
        7px;

    border-radius: 6px;

    background:
        #f4f4f5;

    font-size: 8px !important;
    line-height: 1 !important;
    font-weight: 700;

    color: #52525b !important;
}


/* =========================================================
   PÓS-ENTREGA / CANCELAMENTO
   PROPOSITALMENTE DISCRETO
========================================================= */

.ironstore-compras-pos-entrega {
    position: relative;

    display: grid;

    grid-template-columns:
        minmax(
            0,
            1fr
        )
        auto;

    grid-template-areas:
        "titulo botao"
        "texto botao";

    align-items: center;

    column-gap: 24px;
    row-gap: 4px;

    margin-top: 16px;

    padding:
        13px
        16px;

    border:
        1px solid
        #e8eaed;

    border-radius: 11px;

    background:
        rgba(
            255,
            255,
            255,
            0.7
        );
}

.ironstore-compras-pos-entrega > span {
    grid-area: titulo;

    font-size: 10px;
    line-height: 1.3;
    font-weight: 650;

    color: #52525b;
}

.ironstore-compras-pos-entrega > small {
    grid-area: texto;

    font-size: 9px;
    line-height: 1.45;

    color: #a1a1aa;
}

.ironstore-compras-pos-entrega > button {
    grid-area: botao;

    appearance: none;

    padding:
        5px
        0;

    border: 0;
    outline: none;

    background:
        transparent;

    font-family: inherit;
    font-size: 9px;
    line-height: 1.2;
    font-weight: 600;

    color: #71717a;

    text-decoration:
        underline;

    text-decoration-color:
        #d4d4d8;

    text-underline-offset:
        3px;

    cursor: pointer;

    transition:
        color 150ms ease,
        text-decoration-color
        150ms ease;
}

.ironstore-compras-pos-entrega > button:hover {
    color: #27272a;

    text-decoration-color:
        #71717a;
}


/* =========================================================
   LOADING
========================================================= */

.ironstore-perfil-compras-loading {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 220px;

    border:
        1px solid
        #e7e9ee;

    border-radius: 18px;

    background:
        #ffffff;

    font-size: 11px;
    font-weight: 550;

    color: #8b8b93;

    box-shadow:
        0 6px 24px
        rgba(
            15,
            23,
            42,
            0.03
        );
}


/* =========================================================
   ERRO
========================================================= */

.ironstore-perfil-compras-erro {
    margin-bottom: 18px;

    padding:
        12px
        14px;

    border:
        1px solid
        #fecdca;

    border-radius: 10px;

    background:
        #fffafa;

    font-size: 11px;
    line-height: 1.5;

    color: #b42318;
}


/* =========================================================
   VAZIO
========================================================= */

.ironstore-perfil-compras-vazio {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 7px;

    min-height: 260px;

    padding: 30px;

    border:
        1px solid
        #e7e9ee;

    border-radius: 18px;

    background:
        #ffffff;

    text-align: center;

    box-shadow:
        0 6px 24px
        rgba(
            15,
            23,
            42,
            0.03
        );
}

.ironstore-perfil-compras-vazio strong {
    font-size: 13px;
    font-weight: 700;

    color: #27272a;
}

.ironstore-perfil-compras-vazio span {
    max-width: 380px;

    font-size: 10px;
    line-height: 1.5;

    color: #a1a1aa;
}


/* =========================================================
   TABLET
========================================================= */

@media (
    max-width: 1050px
) {

    .ironstore-perfil-compras-area {
        padding:
            26px
            18px
            60px;
    }

    .ironstore-perfil-compras-tabela-area {
        overflow-x: auto;
    }

    .ironstore-perfil-compras-tabela {
        min-width: 850px;
    }

    .ironstore-compras-detalhes-topo {
        grid-template-columns:
            repeat(
                3,
                1fr
            );
    }

    .ironstore-compras-detalhes-topo > div {
        border-bottom:
            1px solid
            #eef0f2;
    }

    .ironstore-compras-detalhes-topo > div:nth-child(3n) {
        border-right: 0;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (
    max-width: 700px
) {

    .ironstore-perfil-compras-area {
        padding:
            22px
            12px
            50px;
    }

    .ironstore-perfil-compras-header {
        align-items: flex-start;

        margin-bottom: 20px;
    }

    .ironstore-perfil-compras-header h2 {
        font-size: 26px;
    }

    .ironstore-perfil-compras-header p {
        max-width: 310px;

        font-size: 11px;
    }

    .ironstore-perfil-compras-total {
        padding:
            7px
            10px;

        font-size: 12px;
    }


    /* =============================================
       TABELA VIRA CARDS HORIZONTAIS
    ============================================== */

    .ironstore-perfil-compras-tabela-area {
        overflow-x: auto;

        border-radius: 14px;
    }

    .ironstore-perfil-compras-tabela {
        min-width: 760px;
    }

    .ironstore-perfil-compras-tabela th {
        padding:
            12px
            14px;

        font-size: 8px;
    }

    .ironstore-perfil-compras-tabela td {
        padding:
            14px;

        font-size: 10px;
    }

    .ironstore-compras-status {
        min-height: 23px;

        padding:
            0
            8px;

        font-size: 8px;
    }

    .ironstore-compras-botao-detalhes {
        min-height: 29px;

        padding:
            0
            10px;

        font-size: 9px;
    }


    /* =============================================
       DETALHES
    ============================================== */

    .ironstore-compras-detalhes {
        padding: 14px;
    }

    .ironstore-compras-detalhes-topo {
        grid-template-columns:
            repeat(
                2,
                minmax(
                    0,
                    1fr
                )
            );

        border-radius: 11px;
    }

    .ironstore-compras-detalhes-topo > div {
        padding:
            13px
            12px;

        border-right:
            1px solid
            #eef0f2;

        border-bottom:
            1px solid
            #eef0f2;
    }

    .ironstore-compras-detalhes-topo > div:nth-child(2n) {
        border-right: 0;
    }

    .ironstore-compras-detalhes-topo > div > span {
        font-size: 7px;
    }

    .ironstore-compras-detalhes-topo > div > strong {
        font-size: 10px;
    }


    /* =============================================
       PRODUTOS
    ============================================== */

    .ironstore-compras-produtos {
        margin-top: 12px;

        border-radius: 11px;
    }

    .ironstore-compras-produtos-titulo {
        padding:
            12px;

        gap: 10px;
    }

    .ironstore-compras-produtos-titulo > div {
        flex-direction: column;
        align-items: flex-start;

        gap: 3px;
    }

    .ironstore-compras-produtos-titulo small {
        font-size: 8px;
    }

    .ironstore-compras-produto {
        gap: 11px;

        padding:
            12px;
    }

    .ironstore-compras-produto-imagem {
        flex-basis: 54px;

        width: 54px;
        height: 54px;

        border-radius: 9px;
    }

    .ironstore-compras-produto-info > strong {
        max-width: 230px;

        font-size: 10px;
    }

    .ironstore-compras-produto-info > span {
        font-size: 9px;
    }


    /* =============================================
       CANCELAMENTO
    ============================================== */

    .ironstore-compras-pos-entrega {
        display: flex;
        flex-direction: column;

        align-items: flex-start;

        gap: 4px;

        margin-top: 12px;

        padding:
            11px
            12px;
    }

    .ironstore-compras-pos-entrega > button {
        margin-top: 3px;
    }

}


/* =========================================================
   MOBILE PEQUENO
========================================================= */

@media (
    max-width: 420px
) {

    .ironstore-perfil-compras-area {
        padding-left: 8px;
        padding-right: 8px;
    }

    .ironstore-perfil-compras-header {
        gap: 12px;
    }

    .ironstore-perfil-compras-header h2 {
        font-size: 23px;
    }

    .ironstore-perfil-compras-total span {
        display: none;
    }

    .ironstore-compras-detalhes {
        padding: 10px;
    }

    .ironstore-compras-detalhes-topo > div {
        padding:
            11px
            10px;
    }

    .ironstore-compras-produto-imagem {
        flex-basis: 48px;

        width: 48px;
        height: 48px;
    }

}
/* =========================================================
   LOADING PREMIUM
========================================================= */

.ironstore-compras-loading-premium {
    width: 100%;
    box-sizing: border-box;
}


/* =========================================================
   CABEÇALHO SKELETON
========================================================= */

.ironstore-compras-loading-cabecalho {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 10px;

    margin-bottom: 28px;
    padding: 2px;
}


/* =========================================================
   LINHAS SKELETON
========================================================= */

.ironstore-compras-loading-linha {
    position: relative;

    overflow: hidden;

    height: 10px;

    border-radius: 999px;

    background:
        #eceef1;
}


/* EFEITO DE LUZ */

.ironstore-compras-loading-linha::after {
    content: "";

    position: absolute;

    top: 0;
    bottom: 0;

    left: -100%;

    width: 100%;

    background:
        linear-gradient(
            90deg,
            transparent 0%,
            rgba(
                255,
                255,
                255,
                0.35
            ) 30%,
            rgba(
                255,
                255,
                255,
                0.9
            ) 50%,
            rgba(
                255,
                255,
                255,
                0.35
            ) 70%,
            transparent 100%
        );

    animation:
        ironstoreComprasSkeleton
        1.45s
        ease-in-out
        infinite;
}


/* =========================================================
   LABEL
========================================================= */

.ironstore-compras-loading-label {
    width: 68px;
    height: 7px;

    background:
        #e5e7eb;
}


/* =========================================================
   TÍTULO
========================================================= */

.ironstore-compras-loading-titulo {
    width: 235px;
    height: 30px;

    border-radius: 8px;

    background:
        #e4e6e9;
}


/* =========================================================
   DESCRIÇÃO
========================================================= */

.ironstore-compras-loading-texto {
    width: min(
        390px,
        72%
    );

    height: 9px;

    background:
        #eff0f2;
}


/* =========================================================
   CARD PRINCIPAL
========================================================= */

.ironstore-compras-loading-card {
    position: relative;

    width: 100%;

    overflow: hidden;

    border:
        1px solid
        #e7e9ee;

    border-radius: 20px;

    background:
        #ffffff;

    box-shadow:
        0 1px 2px
            rgba(
                15,
                23,
                42,
                0.02
            ),
        0 12px 35px
            rgba(
                15,
                23,
                42,
                0.035
            );
}


/* =========================================================
   TOPO DA TABELA
========================================================= */

.ironstore-compras-loading-card-topo {
    position: relative;

    height: 45px;

    overflow: hidden;

    border-bottom:
        1px solid
        #eceef1;

    background:
        #fafafa;
}

.ironstore-compras-loading-card-topo::after {
    content: "";

    position: absolute;

    top: 0;
    bottom: 0;

    left: -100%;

    width: 100%;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(
                255,
                255,
                255,
                0.8
            ),
            transparent
        );

    animation:
        ironstoreComprasSkeleton
        1.6s
        ease-in-out
        infinite;
}


/* =========================================================
   LINHAS DA TABELA
========================================================= */

.ironstore-compras-loading-item {
    display: grid;

    grid-template-columns:
        0.8fr
        1fr
        0.8fr
        0.9fr
        1.25fr
        0.8fr;

    align-items: center;

    gap: 30px;

    min-height: 72px;

    padding:
        0
        20px;

    border-bottom:
        1px solid
        #f0f1f3;

    box-sizing: border-box;
}

.ironstore-compras-loading-item:last-child {
    border-bottom: 0;
}


/* TAMANHOS VARIADOS */

.ironstore-compras-loading-item
> .ironstore-compras-loading-linha {
    width: 70%;
}

.ironstore-compras-loading-item:nth-child(2)
> .ironstore-compras-loading-linha:nth-child(1) {
    width: 58%;
}

.ironstore-compras-loading-item:nth-child(3)
> .ironstore-compras-loading-linha:nth-child(1) {
    width: 72%;
}

.ironstore-compras-loading-item:nth-child(4)
> .ironstore-compras-loading-linha:nth-child(1) {
    width: 50%;
}

.ironstore-compras-loading-item:nth-child(5)
> .ironstore-compras-loading-linha:nth-child(1) {
    width: 66%;
}


/* =========================================================
   STATUS SKELETON
========================================================= */

.ironstore-compras-loading-status {
    width: 105px !important;
    height: 25px;

    border-radius: 999px;

    background:
        #e9ebee;
}


/* =========================================================
   BOTÃO SKELETON
========================================================= */

.ironstore-compras-loading-botao {
    width: 86px !important;
    height: 31px;

    border-radius: 9px;

    background:
        #e7e9ec;
}


/* =========================================================
   ANIMAÇÃO
========================================================= */

@keyframes ironstoreComprasSkeleton {

    0% {
        left: -100%;
    }

    100% {
        left: 100%;
    }

}


/* =========================================================
   TABLET
========================================================= */

@media (
    max-width: 1000px
) {

    .ironstore-compras-loading-item {
        gap: 20px;

        padding:
            0
            16px;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (
    max-width: 700px
) {

    .ironstore-compras-loading-cabecalho {
        margin-bottom: 20px;

        gap: 8px;
    }

    .ironstore-compras-loading-label {
        width: 55px;
        height: 6px;
    }

    .ironstore-compras-loading-titulo {
        width: 190px;
        height: 25px;
    }

    .ironstore-compras-loading-texto {
        width: 75%;
        height: 8px;
    }


    /* CARD */

    .ironstore-compras-loading-card {
        border-radius: 14px;
    }

    .ironstore-compras-loading-card-topo {
        height: 39px;
    }


    /* LINHAS */

    .ironstore-compras-loading-item {
        grid-template-columns:
            0.9fr
            1fr
            1.2fr;

        gap: 16px;

        min-height: 64px;

        padding:
            0
            14px;
    }


    /* ESCONDER COLUNAS SECUNDÁRIAS */

    .ironstore-compras-loading-item
    > :nth-child(3),

    .ironstore-compras-loading-item
    > :nth-child(4),

    .ironstore-compras-loading-item
    > :nth-child(6) {
        display: none;
    }


    .ironstore-compras-loading-status {
        width: 90px !important;
        height: 23px;
    }

}


/* =========================================================
   MOBILE PEQUENO
========================================================= */

@media (
    max-width: 420px
) {

    .ironstore-compras-loading-titulo {
        width: 165px;
        height: 23px;
    }

    .ironstore-compras-loading-texto {
        width: 85%;
    }

    .ironstore-compras-loading-item {
        gap: 12px;

        min-height: 60px;

        padding:
            0
            11px;
    }

    .ironstore-compras-loading-status {
        width: 76px !important;
    }

}


/* =========================================================
   ACESSIBILIDADE
========================================================= */

@media (
    prefers-reduced-motion: reduce
) {

    .ironstore-compras-loading-linha::after,
    .ironstore-compras-loading-card-topo::after {
        animation: none;
    }

}

/* =========================================================
   RESPONSIVO PREMIUM DEFINITIVO
   TABLET + MOBILE + TELAS PEQUENAS
========================================================= */


/* =========================================================
   PROTEÇÃO GLOBAL
========================================================= */

.ironstore-perfil-compras-area,
.ironstore-perfil-compras-area * {
    box-sizing: border-box;
}

.ironstore-perfil-compras-area {
    min-width: 0;
}

.ironstore-perfil-compras-header,
.ironstore-perfil-compras-tabela-area,
.ironstore-compras-detalhes,
.ironstore-compras-detalhes-topo,
.ironstore-compras-produtos,
.ironstore-compras-produtos-lista,
.ironstore-compras-produto,
.ironstore-compras-produto-info {
    min-width: 0;
}


/* =========================================================
   NOTEBOOK / TABLET GRANDE
========================================================= */

@media (max-width: 1100px) {

    .ironstore-perfil-compras-area {
        padding:
            28px
            18px
            60px;
    }

    .ironstore-perfil-compras-tabela-area {
        overflow-x: auto;
        overflow-y: hidden;

        scrollbar-width: thin;
    }

    .ironstore-perfil-compras-tabela {
        min-width: 820px;
    }

    .ironstore-perfil-compras-tabela th,
    .ironstore-perfil-compras-tabela td {
        padding-left: 16px;
        padding-right: 16px;
    }

    .ironstore-compras-detalhes {
        min-width: 0;
    }

    .ironstore-compras-detalhes-topo {
        grid-template-columns:
            repeat(
                3,
                minmax(0, 1fr)
            );
    }

    .ironstore-compras-detalhes-topo > div {
        border-bottom:
            1px solid
            #eef0f2;
    }

    .ironstore-compras-detalhes-topo > div:nth-child(3n) {
        border-right: 0;
    }

    .ironstore-compras-detalhes-topo > div:nth-last-child(-n + 3) {
        border-bottom: 0;
    }

}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 820px) {

    .ironstore-perfil-compras-area {
        padding:
            24px
            14px
            50px;
    }


    /* CABEÇALHO */

    .ironstore-perfil-compras-header {
        align-items: flex-start;

        gap: 18px;

        margin-bottom: 22px;
    }

    .ironstore-perfil-compras-header h2 {
        font-size: 29px;
    }

    .ironstore-perfil-compras-header p {
        max-width: 470px;
    }


    /* DETALHES */

    .ironstore-compras-detalhes {
        padding: 18px;
    }

    .ironstore-compras-detalhes-topo {
        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            );
    }

    .ironstore-compras-detalhes-topo > div {
        border-right:
            1px solid
            #eef0f2;

        border-bottom:
            1px solid
            #eef0f2;
    }

    .ironstore-compras-detalhes-topo > div:nth-child(2n) {
        border-right: 0;
    }

    .ironstore-compras-detalhes-topo > div:nth-last-child(-n + 2) {
        border-bottom: 0;
    }


    /* PRODUTO */

    .ironstore-compras-produto-info > strong {
        max-width: 100%;
    }

}


/* =========================================================
   MOBILE
   TABELA VIRA CARDS
========================================================= */

@media (max-width: 700px) {

    .ironstore-perfil-compras-area {
        width: 100%;

        padding:
            20px
            12px
            44px;

        overflow: hidden;
    }


    /* =====================================================
       CABEÇALHO
    ===================================================== */

    .ironstore-perfil-compras-header {
        display: grid;

        grid-template-columns:
            minmax(0, 1fr)
            auto;

        align-items: start;

        gap:
            12px
            14px;

        margin-bottom: 20px;

        padding: 0;
    }

    .ironstore-perfil-compras-label {
        margin-bottom: 7px;

        font-size: 9px;

        letter-spacing: 0.13em;
    }

    .ironstore-perfil-compras-header h2 {
        font-size:
            clamp(
                24px,
                7vw,
                30px
            );

        line-height: 1.05;
    }

    .ironstore-perfil-compras-header p {
        max-width: 100%;

        margin-top: 8px;

        padding-right: 4px;

        font-size: 11px;
        line-height: 1.5;
    }

    .ironstore-perfil-compras-total {
        align-self: start;

        padding:
            7px
            10px;

        gap: 4px;

        font-size: 12px;

        white-space: nowrap;
    }

    .ironstore-perfil-compras-total span {
        font-size: 9px;
    }


    /* =====================================================
       ERRO / VAZIO
    ===================================================== */

    .ironstore-perfil-compras-erro {
        margin-bottom: 14px;

        padding:
            11px
            12px;

        border-radius: 10px;

        font-size: 10px;
    }

    .ironstore-perfil-compras-vazio {
        min-height: 220px;

        padding:
            26px
            18px;

        border-radius: 14px;
    }

    .ironstore-perfil-compras-vazio strong {
        font-size: 12px;
    }

    .ironstore-perfil-compras-vazio span {
        font-size: 10px;
    }


    /* =====================================================
       REMOVE COMPORTAMENTO DE TABELA
    ===================================================== */

    .ironstore-perfil-compras-tabela-area {
        width: 100%;

        overflow: visible;

        border: 0;

        border-radius: 0;

        background: transparent;

        box-shadow: none;
    }

    .ironstore-perfil-compras-tabela {
        display: block;

        width: 100%;
        min-width: 0;

        border-collapse: separate;
    }

    .ironstore-perfil-compras-tabela thead {
        display: none;
    }

    .ironstore-perfil-compras-tabela tbody {
        display: flex;

        width: 100%;

        flex-direction: column;

        gap: 12px;
    }


    /* =====================================================
       COMPRA = CARD
    ===================================================== */

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ) {
        display: grid;

        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            );

        width: 100%;

        overflow: hidden;

        border:
            1px solid
            #e6e8ec;

        border-radius:
            15px
            15px
            15px
            15px;

        background:
            #ffffff;

        box-shadow:
            0 1px 2px
                rgba(
                    15,
                    23,
                    42,
                    0.025
                ),
            0 8px 24px
                rgba(
                    15,
                    23,
                    42,
                    0.035
                );
    }

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ):hover {
        background: #ffffff;
    }


    /* =====================================================
       CÉLULAS DO CARD
    ===================================================== */

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ) > td {
        position: relative;

        display: flex;

        min-width: 0;
        min-height: 65px;

        flex-direction: column;

        align-items: flex-start;
        justify-content: center;

        gap: 7px;

        padding:
            25px
            14px
            11px;

        border: 0;
        border-bottom:
            1px solid
            #f0f1f3;

        background: transparent;

        font-size: 11px;

        overflow-wrap: anywhere;
    }


    /* COLUNA ESQUERDA */

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ) > td:nth-child(odd) {
        border-right:
            1px solid
            #f0f1f3;
    }


    /* LABELS CRIADOS VIA CSS */

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ) > td::before {
        position: absolute;

        top: 10px;
        left: 14px;

        font-size: 7px;
        line-height: 1;
        font-weight: 800;

        letter-spacing: 0.09em;
        text-transform: uppercase;

        color: #a1a1aa;
    }

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ) > td:nth-child(1)::before {
        content: "Protocolo";
    }

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ) > td:nth-child(2)::before {
        content: "Total pago";
    }

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ) > td:nth-child(3)::before {
        content: "Frete";
    }

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ) > td:nth-child(4)::before {
        content: "Pagamento";
    }

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ) > td:nth-child(5)::before {
        content: "Situação";
    }

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ) > td:nth-child(6)::before {
        content: "Ações";
    }


    /* ÚLTIMA FILEIRA */

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ) > td:nth-last-child(-n + 2) {
        border-bottom: 0;
    }


    /* =====================================================
       VALORES
    ===================================================== */

    .ironstore-compras-protocolo {
        font-size: 12px;
    }

    .ironstore-perfil-compras-tabela td strong {
        font-size: 11px;
    }


    /* =====================================================
       STATUS
    ===================================================== */

    .ironstore-compras-status {
        max-width: 100%;

        min-height: 24px;

        padding:
            0
            8px;

        font-size: 8px;

        white-space: normal;

        line-height: 1.25;
    }


    /* =====================================================
       AÇÕES
    ===================================================== */

    .ironstore-compras-acoes {
        width: 100%;
    }

    .ironstore-compras-botao-detalhes {
        width: 100%;

        min-height: 34px;

        padding:
            0
            10px;

        border-radius: 8px;

        font-size: 9px;
    }


    /* =====================================================
       LINHA DOS DETALHES
    ===================================================== */

    .ironstore-compras-detalhes-linha {
        display: block;

        width: 100%;

        margin-top: -13px;
    }

    .ironstore-compras-detalhes-linha > td {
        display: block;

        width: 100%;

        padding: 0 !important;

        border: 0 !important;

        background: transparent;
    }

    .ironstore-compras-detalhes {
        width: 100%;

        padding:
            14px
            10px
            12px;

        border:
            1px solid
            #e6e8ec;

        border-top: 0;

        border-radius:
            0
            0
            15px
            15px;

        background:
            linear-gradient(
                180deg,
                #f8f9fb 0%,
                #fbfbfc 100%
            );

        box-shadow:
            0 8px 22px
                rgba(
                    15,
                    23,
                    42,
                    0.025
                );
    }


    /* =====================================================
       RESUMO DOS DETALHES
    ===================================================== */

    .ironstore-compras-detalhes-topo {
        display: grid;

        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            );

        width: 100%;

        border-radius: 11px;
    }

    .ironstore-compras-detalhes-topo > div {
        min-width: 0;

        padding:
            12px
            11px;

        border-right:
            1px solid
            #eef0f2;

        border-bottom:
            1px solid
            #eef0f2;
    }

    .ironstore-compras-detalhes-topo > div:nth-child(2n) {
        border-right: 0;
    }

    .ironstore-compras-detalhes-topo > div:nth-last-child(-n + 2) {
        border-bottom: 0;
    }

    .ironstore-compras-detalhes-topo > div > span {
        margin-bottom: 5px;

        font-size: 7px;
    }

    .ironstore-compras-detalhes-topo > div > strong {
        max-width: 100%;

        font-size: 10px;

        white-space: normal;
        overflow-wrap: anywhere;
    }


    /* =====================================================
       RASTREIO
    ===================================================== */

    a.ironstore-compras-rastreio {
        max-width: 100%;

        white-space: normal;
        overflow-wrap: anywhere;
        word-break: break-word;
    }


    /* =====================================================
       PRODUTOS
    ===================================================== */

    .ironstore-compras-produtos {
        width: 100%;

        margin-top: 12px;

        border-radius: 11px;
    }

    .ironstore-compras-produtos-titulo {
        display: flex;

        align-items: flex-start;
        justify-content: space-between;

        gap: 10px;

        padding:
            11px
            12px;
    }

    .ironstore-compras-produtos-titulo > div {
        min-width: 0;

        flex-direction: column;

        align-items: flex-start;

        gap: 3px;
    }

    .ironstore-compras-produtos-titulo span {
        font-size: 7px;
    }

    .ironstore-compras-produtos-titulo strong {
        font-size: 10px;
    }

    .ironstore-compras-produtos-titulo small {
        flex-shrink: 0;

        max-width: 45%;

        text-align: right;

        font-size: 8px;
        line-height: 1.35;
    }


    /* =====================================================
       ITEM DE PRODUTO
    ===================================================== */

    .ironstore-compras-produto {
        width: 100%;

        align-items: flex-start;

        gap: 11px;

        padding:
            12px;
    }

    .ironstore-compras-produto-imagem {
        flex:
            0
            0
            56px;

        width: 56px;
        height: 56px;

        border-radius: 9px;
    }

    .ironstore-compras-produto-info {
        flex: 1;

        width: 0;

        gap: 4px;
    }

    .ironstore-compras-produto-info > strong {
        width: 100%;
        max-width: none;

        overflow: visible;

        font-size: 10px;
        line-height: 1.35;

        text-overflow: unset;
        white-space: normal;

        overflow-wrap: anywhere;
    }

    .ironstore-compras-produto-info > span {
        max-width: 100%;

        font-size: 9px;

        white-space: normal;
        overflow-wrap: anywhere;
    }


    /* =====================================================
       CANCELAMENTO
    ===================================================== */

    .ironstore-compras-pos-entrega {
        display: flex;

        width: 100%;

        flex-direction: column;

        align-items: flex-start;

        gap: 4px;

        margin-top: 12px;

        padding:
            11px
            12px;

        border-radius: 10px;
    }

    .ironstore-compras-pos-entrega > span {
        font-size: 9px;
    }

    .ironstore-compras-pos-entrega > small {
        font-size: 8px;
        line-height: 1.45;
    }

    .ironstore-compras-pos-entrega > button {
        margin-top: 4px;

        font-size: 8px;
    }


    /* =====================================================
       LOADING RESPONSIVO
    ===================================================== */

    .ironstore-compras-loading-premium {
        width: 100%;

        overflow: hidden;
    }

    .ironstore-compras-loading-cabecalho {
        margin-bottom: 18px;

        padding: 0;
    }

    .ironstore-compras-loading-label {
        width: 52px;
        height: 6px;
    }

    .ironstore-compras-loading-titulo {
        width: 52%;
        max-width: 190px;

        height: 24px;
    }

    .ironstore-compras-loading-texto {
        width: 76%;
        max-width: 300px;

        height: 8px;
    }

    .ironstore-compras-loading-card {
        border-radius: 14px;
    }

    .ironstore-compras-loading-card-topo {
        height: 36px;
    }

    .ironstore-compras-loading-item {
        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            );

        gap:
            18px
            12px;

        min-height: 108px;

        padding:
            15px
            12px;
    }

    .ironstore-compras-loading-item
    > .ironstore-compras-loading-linha {
        display: block;

        width: 70%;

        margin: 0;
    }

    .ironstore-compras-loading-item
    > :nth-child(3),

    .ironstore-compras-loading-item
    > :nth-child(4),

    .ironstore-compras-loading-item
    > :nth-child(6) {
        display: block;
    }

    .ironstore-compras-loading-status {
        width: 82px !important;
        height: 23px;
    }

    .ironstore-compras-loading-botao {
        width: 100% !important;
        max-width: 105px;

        height: 30px;
    }

}


/* =========================================================
   CELULAR PEQUENO
========================================================= */

@media (max-width: 480px) {

    .ironstore-perfil-compras-area {
        padding:
            18px
            9px
            40px;
    }


    /* CABEÇALHO */

    .ironstore-perfil-compras-header {
        grid-template-columns:
            minmax(0, 1fr)
            auto;

        gap: 10px;
    }

    .ironstore-perfil-compras-header h2 {
        font-size: 23px;
    }

    .ironstore-perfil-compras-header p {
        font-size: 10px;
    }

    .ironstore-perfil-compras-total {
        padding:
            6px
            8px;

        font-size: 11px;
    }

    .ironstore-perfil-compras-total span {
        display: none;
    }


    /* CARD */

    .ironstore-perfil-compras-tabela tbody {
        gap: 10px;
    }

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ) {
        border-radius: 13px;
    }

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ) > td {
        min-height: 61px;

        padding:
            24px
            11px
            10px;
    }

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ) > td::before {
        top: 9px;
        left: 11px;

        font-size: 6.5px;
    }

    .ironstore-compras-status {
        font-size: 7.5px;
    }


    /* DETALHES */

    .ironstore-compras-detalhes {
        padding:
            11px
            8px
            10px;

        border-radius:
            0
            0
            13px
            13px;
    }

    .ironstore-compras-detalhes-topo > div {
        padding:
            11px
            9px;
    }


    /* PRODUTO */

    .ironstore-compras-produto {
        gap: 9px;

        padding:
            10px;
    }

    .ironstore-compras-produto-imagem {
        flex-basis: 50px;

        width: 50px;
        height: 50px;
    }

    .ironstore-compras-produto-info > strong {
        font-size: 9.5px;
    }

    .ironstore-compras-produto-info > span {
        font-size: 8px;
    }


    /* LOADING */

    .ironstore-compras-loading-item {
        gap:
            16px
            10px;

        min-height: 100px;

        padding:
            14px
            10px;
    }

}


/* =========================================================
   CELULAR MUITO PEQUENO
========================================================= */

@media (max-width: 350px) {

    .ironstore-perfil-compras-area {
        padding-left: 6px;
        padding-right: 6px;
    }

    .ironstore-perfil-compras-header {
        display: flex;

        flex-direction: column;
    }

    .ironstore-perfil-compras-total {
        align-self: flex-start;
    }


    /* CARD EM UMA COLUNA */

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ) {
        grid-template-columns: 1fr;
    }

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ) > td {
        min-height: 58px;

        border-right: 0 !important;
        border-bottom:
            1px solid
            #f0f1f3;
    }

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ) > td:nth-last-child(2) {
        border-bottom:
            1px solid
            #f0f1f3;
    }

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ) > td:last-child {
        border-bottom: 0;
    }


    /* RESUMO EM UMA COLUNA */

    .ironstore-compras-detalhes-topo {
        grid-template-columns: 1fr;
    }

    .ironstore-compras-detalhes-topo > div {
        border-right: 0 !important;
        border-bottom:
            1px solid
            #eef0f2 !important;
    }

    .ironstore-compras-detalhes-topo > div:last-child {
        border-bottom: 0 !important;
    }


    /* PRODUTO */

    .ironstore-compras-produto-imagem {
        flex-basis: 46px;

        width: 46px;
        height: 46px;
    }


    /* LOADING */

    .ironstore-compras-loading-item {
        grid-template-columns: 1fr;

        min-height: 0;
    }

}

/* =========================================================
   UPGRADE VISUAL
   MINHAS COMPRAS — CLASSICO PREMIUM
========================================================= */

/* =========================================================
   ÁREA GERAL
========================================================= */

.ironstore-perfil-compras-area {
    position: relative;
    max-width: 1420px;
    padding-top: 38px;
}


/* =========================================================
   CABEÇALHO MAIS PREMIUM
========================================================= */

.ironstore-perfil-compras-header {
    position: relative;
    padding-bottom: 22px;
    margin-bottom: 24px;
}

.ironstore-perfil-compras-header::after {
    content: "";

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    height: 1px;

    background:
        linear-gradient(
            90deg,
            #d9dde5 0%,
            #eceef2 55%,
            transparent 100%
        );
}

.ironstore-perfil-compras-label {
    padding: 6px 9px;

    border:
        1px solid
        #e5e7eb;

    border-radius: 999px;

    background: #ffffff;

    box-shadow:
        0 1px 2px
        rgba(15, 23, 42, 0.03);
}

.ironstore-perfil-compras-header h2 {
    margin-top: 3px;

    font-weight: 800;

    letter-spacing: -0.045em;

    color: #09090b;
}

.ironstore-perfil-compras-header p {
    color: #71717a;
}


/* =========================================================
   CONTADOR
========================================================= */

.ironstore-perfil-compras-total {
    min-height: 38px;

    padding:
        0
        15px;

    align-items: center;

    border-color: #e2e5ea;

    background:
        linear-gradient(
            180deg,
            #ffffff 0%,
            #fafafa 100%
        );

    box-shadow:
        0 1px 2px
            rgba(15, 23, 42, 0.04),
        0 5px 15px
            rgba(15, 23, 42, 0.025);
}


/* =========================================================
   TABELA PRINCIPAL
========================================================= */

.ironstore-perfil-compras-tabela-area {
    border-color: #e2e5ea;

    border-radius: 18px;

    box-shadow:
        0 1px 2px
            rgba(15, 23, 42, 0.025),
        0 8px 25px
            rgba(15, 23, 42, 0.035),
        0 22px 55px
            rgba(15, 23, 42, 0.025);
}


/* CABEÇALHO */

.ironstore-perfil-compras-tabela thead {
    background:
        linear-gradient(
            180deg,
            #fcfcfd 0%,
            #f8f9fa 100%
        );
}

.ironstore-perfil-compras-tabela th {
    height: 48px;

    padding:
        0
        20px;

    color: #8b8f98;

    letter-spacing: 0.1em;
}


/* =========================================================
   LINHA DE COMPRA
========================================================= */

.ironstore-perfil-compras-tabela tbody > tr:not(
    .ironstore-compras-detalhes-linha
) {
    position: relative;

    transition:
        background-color 160ms ease,
        box-shadow 160ms ease;
}

.ironstore-perfil-compras-tabela tbody > tr:not(
    .ironstore-compras-detalhes-linha
):hover {
    background: #fafbfc;

    box-shadow:
        inset
        3px
        0
        0
        #d4d8df;
}

.ironstore-perfil-compras-tabela td {
    height: 68px;

    padding:
        14px
        20px;
}


/* =========================================================
   PROTOCOLO
========================================================= */

.ironstore-compras-protocolo {
    position: relative;

    padding:
        6px
        9px;

    border:
        1px solid
        #e8eaee;

    border-radius: 7px;

    background: #fafafa;

    font-size: 11px;
    font-weight: 750;

    color: #18181b;

    box-shadow:
        inset
        0
        1px
        0
        #ffffff;
}


/* =========================================================
   STATUS MAIS REFINADO
========================================================= */

.ironstore-compras-status {
    min-height: 28px;

    padding:
        0
        11px;

    gap: 7px;

    font-size: 9px;
    font-weight: 750;

    letter-spacing: 0.015em;

    box-shadow:
        inset
        0
        1px
        0
        rgba(255, 255, 255, 0.6);
}

.ironstore-compras-status::before {
    width: 6px;
    height: 6px;

    box-shadow:
        0
        0
        0
        3px
        rgba(0, 0, 0, 0.035);
}


/* =========================================================
   BOTÃO DETALHES
========================================================= */

.ironstore-compras-botao-detalhes {
    min-height: 34px;

    padding:
        0
        14px;

    border-color: #dfe3e8;

    border-radius: 8px;

    background:
        linear-gradient(
            180deg,
            #ffffff 0%,
            #fafafa 100%
        );

    font-weight: 700;

    box-shadow:
        0 1px 2px
            rgba(15, 23, 42, 0.04),
        0 2px 5px
            rgba(15, 23, 42, 0.025);
}

.ironstore-compras-botao-detalhes:hover {
    background: #f7f8fa;

    border-color: #cfd4dc;

    transform: translateY(-1px);

    box-shadow:
        0 3px 8px
        rgba(15, 23, 42, 0.07);
}


/* =========================================================
   ÁREA ABERTA DA COMPRA
========================================================= */

.ironstore-compras-detalhes {
    padding:
        26px
        26px
        28px;

    background:
        linear-gradient(
            180deg,
            #f7f8fa 0%,
            #fafbfc 100%
        );
}


/* =========================================================
   RESUMO
========================================================= */

.ironstore-compras-detalhes-topo {
    border-color: #e1e4e8;

    border-radius: 13px;

    box-shadow:
        0 1px 2px
            rgba(15, 23, 42, 0.025),
        0 5px 16px
            rgba(15, 23, 42, 0.025);
}

.ironstore-compras-detalhes-topo > div {
    min-height: 74px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    transition:
        background-color
        150ms ease;
}

.ironstore-compras-detalhes-topo > div:hover {
    background: #fcfcfd;
}

.ironstore-compras-detalhes-topo > div > span {
    margin-bottom: 7px;

    color: #a0a4ac;
}

.ironstore-compras-detalhes-topo > div > strong {
    font-size: 11px;

    color: #202124;
}


/* =========================================================
   RASTREIO
========================================================= */

a.ironstore-compras-rastreio {
    position: relative;

    padding:
        3px
        0;

    font-weight: 700;

    color: #175cd3 !important;

    border-bottom:
        1px dashed
        rgba(23, 92, 211, 0.35);
}

a.ironstore-compras-rastreio:hover {
    color: #004eeb !important;

    border-bottom-style: solid;
}


/* =========================================================
   PRODUTOS
========================================================= */

.ironstore-compras-produtos {
    margin-top: 20px;

    border-color: #e1e4e8;

    border-radius: 13px;

    box-shadow:
        0 1px 2px
            rgba(15, 23, 42, 0.025),
        0 5px 16px
            rgba(15, 23, 42, 0.025);
}


/* CABEÇALHO DOS PRODUTOS */

.ironstore-compras-produtos-titulo {
    min-height: 48px;

    padding:
        0
        18px;

    background:
        linear-gradient(
            180deg,
            #fdfdfd 0%,
            #fafafa 100%
        );
}


/* =========================================================
   PRODUTO
========================================================= */

.ironstore-compras-produto {
    position: relative;

    min-height: 86px;

    padding:
        13px
        18px;

    transition:
        background-color 150ms ease;
}

.ironstore-compras-produto:hover {
    background: #fafbfc;
}


/* IMAGEM */

.ironstore-compras-produto-imagem {
    flex:
        0
        0
        66px;

    width: 66px;
    height: 66px;

    border-radius: 10px;

    border-color: #e5e7eb;

    background:
        linear-gradient(
            135deg,
            #f7f7f8,
            #f1f2f4
        );

    box-shadow:
        0 1px 2px
        rgba(15, 23, 42, 0.03);
}

.ironstore-compras-produto-imagem img {
    object-fit: cover;
}


/* INFO */

.ironstore-compras-produto-info {
    gap: 5px;
}

.ironstore-compras-produto-info > strong {
    font-size: 12px;

    font-weight: 750;

    letter-spacing: -0.01em;

    color: #18181b;
}

.ironstore-compras-produto-info > span {
    font-size: 10px;

    color: #858991;
}


/* =========================================================
   CANCELAMENTO / PÓS ENTREGA
========================================================= */

.ironstore-compras-pos-entrega {
    margin-top: 18px;

    padding:
        14px
        16px;

    border:
        1px solid
        #e5e7eb;

    border-radius: 10px;

    background:
        linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.9),
            rgba(250, 250, 250, 0.85)
        );

    box-shadow:
        0 1px 2px
        rgba(15, 23, 42, 0.02);
}

.ironstore-compras-pos-entrega > span {
    font-size: 10px;

    font-weight: 700;

    color: #4b5563;
}

.ironstore-compras-pos-entrega > small {
    color: #9ca3af;
}

.ironstore-compras-pos-entrega > button {
    padding:
        7px
        10px;

    border:
        1px solid
        transparent;

    border-radius: 7px;

    text-decoration: none;

    transition:
        background-color 150ms ease,
        border-color 150ms ease,
        color 150ms ease;
}

.ironstore-compras-pos-entrega > button:hover {
    color: #3f3f46;

    background: #f4f4f5;

    border-color: #e4e4e7;

    text-decoration: none;
}


/* =========================================================
   SCROLLBAR
========================================================= */

.ironstore-perfil-compras-tabela-area::-webkit-scrollbar {
    height: 6px;
}

.ironstore-perfil-compras-tabela-area::-webkit-scrollbar-track {
    background: transparent;
}

.ironstore-perfil-compras-tabela-area::-webkit-scrollbar-thumb {
    background: #d4d7dc;

    border-radius: 999px;
}


/* =========================================================
   MOBILE — UPGRADE DOS CARDS
========================================================= */

@media (max-width: 700px) {

    .ironstore-perfil-compras-area {
        padding:
            20px
            10px
            46px;
    }

    .ironstore-perfil-compras-header {
        padding-bottom: 18px;
    }

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ) {
        border-radius: 14px;

        border-color: #e2e5e9;

        box-shadow:
            0 1px 2px
                rgba(15, 23, 42, 0.025),
            0 7px 20px
                rgba(15, 23, 42, 0.035);
    }

    .ironstore-perfil-compras-tabela tbody > tr:not(
        .ironstore-compras-detalhes-linha
    ):hover {
        box-shadow:
            0 1px 2px
                rgba(15, 23, 42, 0.025),
            0 7px 20px
                rgba(15, 23, 42, 0.035);
    }

    .ironstore-compras-protocolo {
        padding:
            5px
            7px;

        font-size: 10px;
    }

    .ironstore-compras-detalhes {
        padding:
            13px
            9px
            14px;
    }

    .ironstore-compras-detalhes-topo {
        border-radius: 10px;
    }

    .ironstore-compras-detalhes-topo > div {
        min-height: 64px;
    }

    .ironstore-compras-produtos {
        border-radius: 10px;
    }

    .ironstore-compras-produto {
        min-height: 76px;
    }

    .ironstore-compras-produto-imagem {
        flex-basis: 56px;

        width: 56px;
        height: 56px;
    }

    .ironstore-compras-botao-detalhes {
        min-height: 36px;
    }

    .ironstore-compras-pos-entrega {
        padding:
            12px
            13px;
    }

}


/* =========================================================
   MOBILE PEQUENO
========================================================= */

@media (max-width: 420px) {

    .ironstore-perfil-compras-area {
        padding-left: 7px;
        padding-right: 7px;
    }

    .ironstore-perfil-compras-header h2 {
        font-size: 22px;
    }

    .ironstore-perfil-compras-total {
        min-height: 34px;

        padding:
            0
            10px;
    }

    .ironstore-compras-detalhes {
        padding:
            11px
            7px
            12px;
    }

    .ironstore-compras-detalhes-topo > div {
        min-height: 61px;

        padding:
            11px
            9px;
    }

    .ironstore-compras-produto {
        padding:
            11px
            10px;
    }

    .ironstore-compras-produto-imagem {
        flex-basis: 50px;

        width: 50px;
        height: 50px;
    }

}








/* =========================================================
   BOTÃO DE RASTREIO
   ALINHADO AO CLÁSSICO PREMIUM
========================================================= */

.ironstore-rastreio-link-premium {
    appearance: none;
    -webkit-appearance: none;

    position: relative;

    width: 100%;
    max-width: 260px;
    min-width: 0;

    display: flex;
    align-items: center;

    gap: 10px;

    margin: 2px 0 0;

    padding:
        8px
        10px;

    box-sizing: border-box;

    overflow: hidden;

    border:
        1px solid
        #e1e4e8;

    border-radius: 9px;

    outline: none;

    background:
        linear-gradient(
            180deg,
            #ffffff 0%,
            #fafbfc 100%
        );

    box-shadow:
        0 1px 2px
            rgba(
                15,
                23,
                42,
                0.025
            ),
        0 3px 8px
            rgba(
                15,
                23,
                42,
                0.025
            );

    font-family: inherit;

    color: #18181b;

    text-align: left;

    cursor: pointer;

    transition:
        transform 150ms ease,
        border-color 150ms ease,
        background-color 150ms ease,
        box-shadow 150ms ease;
}


/* =========================================================
   HOVER
========================================================= */

.ironstore-rastreio-link-premium:hover {
    transform:
        translateY(-1px);

    border-color:
        #cfd4dc;

    background:
        #ffffff;

    box-shadow:
        0 2px 4px
            rgba(
                15,
                23,
                42,
                0.035
            ),
        0 6px 14px
            rgba(
                15,
                23,
                42,
                0.05
            );
}


/* =========================================================
   CLIQUE
========================================================= */

.ironstore-rastreio-link-premium:active {
    transform:
        translateY(0)
        scale(0.99);

    box-shadow:
        0 1px 2px
        rgba(
            15,
            23,
            42,
            0.03
        );
}


/* =========================================================
   FOCO
========================================================= */

.ironstore-rastreio-link-premium:focus-visible {
    border-color:
        #b9c2ce;

    outline:
        3px solid
        rgba(
            23,
            92,
            211,
            0.10
        );

    outline-offset:
        2px;
}


/* =========================================================
   ÍCONE
========================================================= */

.ironstore-rastreio-link-premium-icone {
    position: relative;

    width: 34px;
    height: 34px;

    flex:
        0
        0
        34px;

    display: flex;
    align-items: center;
    justify-content: center;

    border:
        1px solid
        #e4e7ec;

    border-radius: 8px;

    background:
        #f8f9fa;

    color:
        #175cd3;

    transition:
        color 150ms ease,
        border-color 150ms ease,
        background-color 150ms ease;
}


/* =========================================================
   SVG
========================================================= */

.ironstore-rastreio-link-premium-icone svg {
    display: block;

    width: 16px;
    height: 16px;
}


/* =========================================================
   ÍCONE NO HOVER
========================================================= */

.ironstore-rastreio-link-premium:hover
.ironstore-rastreio-link-premium-icone {
    color:
        #004eeb;

    border-color:
        #d9dee6;

    background:
        #f5f7fa;
}


/* =========================================================
   CONTEÚDO
========================================================= */

.ironstore-rastreio-link-premium-conteudo {
    min-width: 0;

    flex: 1;

    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: center;

    gap: 2px;
}


/* =========================================================
   LABEL
========================================================= */

.ironstore-rastreio-link-premium-conteudo small {
    display: block;

    margin: 0;

    font-size: 7.5px;
    line-height: 1.1;
    font-weight: 800;

    letter-spacing:
        0.075em;

    text-transform:
        uppercase;

    color:
        #a0a4ac;
}


/* =========================================================
   CÓDIGO
========================================================= */

.ironstore-rastreio-link-premium-conteudo strong {
    display: block;

    width: 100%;

    margin: 0;

    overflow: hidden;

    font-size: 10.5px;
    line-height: 1.35;
    font-weight: 750;

    letter-spacing:
        0.01em;

    color:
        #27272a !important;

    font-variant-numeric:
        tabular-nums;

    text-overflow:
        ellipsis;

    white-space:
        nowrap;
}


/* =========================================================
   SETA
========================================================= */

.ironstore-rastreio-link-premium-seta {
    width: 20px;
    height: 20px;

    flex:
        0
        0
        20px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 1px;

    border-radius: 6px;

    color:
        #a1a1aa;

    font-size: 18px;
    line-height: 1;
    font-weight: 300;

    transition:
        transform 150ms ease,
        color 150ms ease,
        background-color 150ms ease;
}


/* =========================================================
   SETA NO HOVER
========================================================= */

.ironstore-rastreio-link-premium:hover
.ironstore-rastreio-link-premium-seta {
    transform:
        translateX(2px);

    color:
        #52525b;

    background:
        #f4f4f5;
}


/* =========================================================
   REMOVE ESTILOS ANTIGOS QUE POSSAM INTERFERIR
========================================================= */

button.ironstore-rastreio-link-premium {
    text-decoration: none;

    color:
        #18181b !important;
}

button.ironstore-rastreio-link-premium
strong {
    text-decoration: none;
}


/* =========================================================
   TABLET
========================================================= */

@media (
    max-width: 1050px
) {

    .ironstore-rastreio-link-premium {
        max-width:
            245px;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (
    max-width: 700px
) {

    .ironstore-rastreio-link-premium {
        width: 100%;
        max-width: none;

        gap: 9px;

        margin-top: 3px;

        padding:
            8px
            9px;

        border-radius:
            8px;
    }

    .ironstore-rastreio-link-premium-icone {
        width: 32px;
        height: 32px;

        flex-basis:
            32px;

        border-radius:
            7px;
    }

    .ironstore-rastreio-link-premium-icone svg {
        width: 15px;
        height: 15px;
    }

    .ironstore-rastreio-link-premium-conteudo small {
        font-size:
            7px;
    }

    .ironstore-rastreio-link-premium-conteudo strong {
        font-size:
            10px;
    }

    .ironstore-rastreio-link-premium-seta {
        width: 18px;
        height: 18px;

        flex-basis:
            18px;

        font-size:
            17px;
    }

}


/* =========================================================
   MOBILE PEQUENO
========================================================= */

@media (
    max-width: 480px
) {

    .ironstore-rastreio-link-premium {
        min-height: 48px;

        padding:
            7px
            8px;
    }

    .ironstore-rastreio-link-premium-icone {
        width: 30px;
        height: 30px;

        flex-basis:
            30px;
    }

    .ironstore-rastreio-link-premium-conteudo {
        gap: 1px;
    }

    .ironstore-rastreio-link-premium-conteudo strong {
        font-size:
            9.5px;
    }

}


/* =========================================================
   CELULAR MUITO PEQUENO
========================================================= */

@media (
    max-width: 350px
) {

    .ironstore-rastreio-link-premium {
        gap: 7px;

        padding:
            7px;
    }

    .ironstore-rastreio-link-premium-icone {
        width: 28px;
        height: 28px;

        flex-basis:
            28px;
    }

    .ironstore-rastreio-link-premium-conteudo small {
        font-size:
            6.5px;
    }

    .ironstore-rastreio-link-premium-conteudo strong {
        font-size:
            9px;
    }

    .ironstore-rastreio-link-premium-seta {
        display: none;
    }

}

`;

export default classicoSeguimento;