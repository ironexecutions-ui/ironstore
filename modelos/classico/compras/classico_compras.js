const classicoCompras = `

/* =========================================================
   IRONSTORE — COMPRAS
   MODELO CLÁSSICO PREMIUM
========================================================= */

.ironstore-compras,
.ironstore-compras *,
.ironstore-compras *::before,
.ironstore-compras *::after {
    box-sizing: border-box;
}


/* =========================================================
   PÁGINA
========================================================= */

.ironstore-compras {
    --ic-navy: #142a4a;
    --ic-navy-hover: #1b3b66;
    --ic-navy-light: #edf3f9;

    --ic-text: #101828;
    --ic-text-secondary: #344054;
    --ic-muted: #667085;
    --ic-soft: #98a2b3;

    --ic-border: #e4e7ec;
    --ic-border-soft: #edf0f4;

    --ic-bg: #f7f8fa;
    --ic-card: #ffffff;

    width: 100%;
    min-height: 100vh;

    padding:
        42px
        24px
        90px;

    background:
        radial-gradient(
            circle at 8% 0%,
            rgba(255,255,255,.95),
            transparent 28%
        ),
        radial-gradient(
            circle at 92% 5%,
            rgba(20,42,74,.045),
            transparent 25%
        ),
        linear-gradient(
            180deg,
            #fafbfc 0%,
            #f5f7f9 100%
        );

    color: var(--ic-text);

    font-family:
        Inter,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        sans-serif;
}


/* =========================================================
   CABEÇALHO
========================================================= */

.ironstore-compras-cabecalho {
    width: min(100%, 1240px);

    margin:
        0
        auto
        28px;
}

.ironstore-compras-cabecalho > div {
    max-width: 680px;
}

.ironstore-compras-cabecalho h1 {
    margin: 0;

    color: var(--ic-text);

    font-size:
        clamp(
            28px,
            3vw,
            40px
        );

    font-weight: 800;

    line-height: 1.08;

    letter-spacing: -.045em;
}

.ironstore-compras-cabecalho p {
    margin:
        9px
        0
        0;

    color: var(--ic-muted);

    font-size: 13px;
    font-weight: 500;

    line-height: 1.55;
}


/* =========================================================
   CONTEÚDO
========================================================= */

.ironstore-compras-conteudo {
    width: min(100%, 1240px);

    margin: 0 auto;

    display: grid;

    grid-template-columns:
        minmax(0, 1fr)
        350px;

    align-items: start;

    gap: 24px;
}


/* =========================================================
   LISTA DE PRODUTOS
========================================================= */

.ironstore-compras-lista {
    min-width: 0;

    display: flex;
    flex-direction: column;

    gap: 12px;
}


/* =========================================================
   CARD DO PRODUTO
========================================================= */

.ironstore-compras-produto {
    position: relative;

    width: 100%;

    display: grid;

    grid-template-columns:
        30px
        104px
        minmax(0,1fr)
        auto;

    align-items: center;

    gap: 17px;

    min-height: 132px;

    padding:
        14px
        18px;

    overflow: hidden;

    border:
        1px solid
        var(--ic-border);

    border-radius: 19px;

    background:
        linear-gradient(
            145deg,
            #ffffff 0%,
            #fdfdfd 100%
        );

    box-shadow:
        0 1px 2px rgba(16,24,40,.025),
        0 6px 18px rgba(16,24,40,.035);

    transition:
        border-color .2s ease,
        box-shadow .2s ease,
        transform .2s ease,
        opacity .2s ease,
        background .2s ease;
}


/* =========================================================
   CARD SELECIONADO
========================================================= */

.ironstore-compras-produto.selecionado {
    border-color:
        rgba(20,42,74,.15);

    box-shadow:
        0 1px 2px rgba(16,24,40,.025),
        0 8px 24px rgba(20,42,74,.055);
}

.ironstore-compras-produto.selecionado::before {
    content: "";

    position: absolute;

    left: 0;
    top: 22px;
    bottom: 22px;

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
}


/* =========================================================
   CARD DESMARCADO
========================================================= */

.ironstore-compras-produto.desmarcado {
    opacity: .58;

    background: #fafafa;

    box-shadow: none;
}

.ironstore-compras-produto.desmarcado:hover {
    opacity: .82;
}


/* =========================================================
   HOVER DO PRODUTO
========================================================= */

.ironstore-compras-produto:hover {
    transform:
        translateY(-2px);

    border-color:
        #d8dee6;

    box-shadow:
        0 4px 10px rgba(16,24,40,.035),
        0 14px 32px rgba(16,24,40,.07);
}


/* =========================================================
   CHECKBOX
========================================================= */

.ironstore-compras-produto-check {
    position: relative;

    width: 24px;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
}

.ironstore-compras-produto-check input {
    position: absolute;

    width: 1px;
    height: 1px;

    opacity: 0;

    pointer-events: none;
}

.ironstore-compras-produto-check span {
    position: relative;

    width: 21px;
    height: 21px;

    display: flex;
    align-items: center;
    justify-content: center;

    border:
        1.5px solid
        #cfd5dc;

    border-radius: 7px;

    background: #ffffff;

    box-shadow:
        inset 0 1px 1px
        rgba(16,24,40,.025);

    transition:
        background .16s ease,
        border-color .16s ease,
        box-shadow .16s ease,
        transform .16s ease;
}

.ironstore-compras-produto-check:hover span {
    border-color: #8c9bab;

    transform:
        scale(1.04);
}

.ironstore-compras-produto-check input:checked + span {
    border-color:
        var(--ic-navy);

    background:
        linear-gradient(
            135deg,
            #1d3d68,
            #142a4a
        );

    box-shadow:
        0 4px 10px
        rgba(20,42,74,.18);
}

.ironstore-compras-produto-check input:checked + span::after {
    content: "";

    width: 8px;
    height: 4px;

    margin-top: -2px;

    border-left:
        2px solid #ffffff;

    border-bottom:
        2px solid #ffffff;

    transform:
        rotate(-45deg);
}


/* =========================================================
   IMAGEM
========================================================= */

.ironstore-compras-produto-imagem {
    position: relative;

    width: 104px;
    height: 104px;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    border:
        1px solid
        var(--ic-border-soft);

    border-radius: 15px;

    background:
        linear-gradient(
            145deg,
            #ffffff,
            #f7f8fa
        );

    box-shadow:
        inset 0 1px 0 rgba(255,255,255,.95),
        0 3px 8px rgba(16,24,40,.035);
}

.ironstore-compras-produto-imagem img {
    width: 100%;
    height: 100%;

    display: block;

    padding: 5px;

    object-fit: contain;

    transition:
        transform .28s
        cubic-bezier(.22,1,.36,1);
}

.ironstore-compras-produto:hover
.ironstore-compras-produto-imagem img {
    transform:
        scale(1.045);
}


/* =========================================================
   SEM IMAGEM
========================================================= */

.ironstore-compras-produto-sem-imagem {
    padding: 10px;

    color: var(--ic-soft);

    font-size: 9px;
    font-weight: 650;

    text-align: center;
}


/* =========================================================
   INFORMAÇÕES
========================================================= */

.ironstore-compras-produto-info {
    min-width: 0;

    display: flex;
    flex-direction: column;

    align-items: flex-start;

    gap: 6px;
}

.ironstore-compras-produto-info h2 {
    width: 100%;

    margin: 0;

    overflow: hidden;

    color: var(--ic-text);

    font-size: 15px;
    font-weight: 750;

    line-height: 1.3;

    letter-spacing: -.02em;

    text-overflow: ellipsis;
    white-space: nowrap;
}

.ironstore-compras-produto-info p {
    display: -webkit-box;

    max-width: 520px;

    margin: 0;

    overflow: hidden;

    color: var(--ic-muted);

    font-size: 10px;
    font-weight: 500;

    line-height: 1.45;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}


/* =========================================================
   UNIDADE
========================================================= */

.ironstore-compras-produto-unidade {
    min-height: 20px;

    display: inline-flex;
    align-items: center;

    padding:
        0
        7px;

    border:
        1px solid
        #e4e9ef;

    border-radius: 999px;

    background: #f7f9fb;

    color: #65768a;

    font-size: 8px;
    font-weight: 750;

    line-height: 1;

    text-transform: uppercase;

    letter-spacing: .035em;
}


/* =========================================================
   QUANTIDADE
========================================================= */

.ironstore-compras-produto-quantidade {
    display: flex;
    align-items: center;

    gap: 10px;

    margin-top: 4px;
}

.ironstore-compras-produto-quantidade > span {
    color: var(--ic-muted);

    font-size: 9px;
    font-weight: 650;
}


/* =========================================================
   CONTROLE DE QUANTIDADE
========================================================= */

.ironstore-compras-quantidade-controle {
    height: 34px;

    display: inline-grid;

    grid-template-columns:
        34px
        42px
        34px;

    align-items: center;

    overflow: hidden;

    border:
        1px solid
        #dfe3e8;

    border-radius: 10px;

    background: #ffffff;

    box-shadow:
        0 1px 2px
        rgba(16,24,40,.025);
}

.ironstore-compras-quantidade-controle button {
    width: 34px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;

    border: 0;

    background: transparent;

    color: #344054;

    font-family: inherit;
    font-size: 16px;
    font-weight: 500;

    cursor: pointer;

    transition:
        background .15s ease,
        color .15s ease;
}

.ironstore-compras-quantidade-controle button:hover:not(:disabled) {
    background: #f2f4f7;

    color: var(--ic-navy);
}

.ironstore-compras-quantidade-controle button:active:not(:disabled) {
    background: #e9edf2;
}

.ironstore-compras-quantidade-controle button:disabled {
    color: #d0d5dd;

    cursor: not-allowed;
}


/* =========================================================
   INPUT QUANTIDADE
========================================================= */

.ironstore-compras-quantidade-controle input {
    width: 42px;
    height: 32px;

    padding: 0;

    outline: none;

    border: 0;
    border-left:
        1px solid #edf0f4;
    border-right:
        1px solid #edf0f4;

    background: #ffffff;

    color: var(--ic-text);

    font-family: inherit;
    font-size: 11px;
    font-weight: 750;

    text-align: center;

    appearance: textfield;
    -moz-appearance: textfield;
}

.ironstore-compras-quantidade-controle
input::-webkit-inner-spin-button,
.ironstore-compras-quantidade-controle
input::-webkit-outer-spin-button {
    margin: 0;

    -webkit-appearance: none;
}


/* =========================================================
   PREÇO DO PRODUTO
========================================================= */

.ironstore-compras-produto-preco {
    min-width: 115px;

    display: flex;
    flex-direction: column;

    align-items: flex-end;
    justify-content: center;

    gap: 5px;

    text-align: right;

    white-space: nowrap;
}

.ironstore-compras-produto-preco small {
    color: var(--ic-soft);

    font-size: 9px;
    font-weight: 550;
}

.ironstore-compras-produto-preco strong {
    color: var(--ic-navy);

    font-size: 17px;
    font-weight: 850;

    line-height: 1;

    letter-spacing: -.035em;
}


/* =========================================================
   RESUMO
========================================================= */

.ironstore-compras-resumo {
    position: sticky;

    top: 24px;

    width: 100%;

    padding: 22px;

    overflow: hidden;

    border:
        1px solid
        rgba(20,42,74,.11);

    border-radius: 21px;

    background:
        linear-gradient(
            160deg,
            rgba(255,255,255,.99),
            rgba(249,250,252,.98)
        );

    box-shadow:
        0 3px 8px rgba(16,24,40,.035),
        0 16px 40px rgba(16,24,40,.075);
}

.ironstore-compras-resumo::before {
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
            rgba(255,255,255,1),
            transparent
        );
}

.ironstore-compras-resumo h2 {
    margin:
        0
        0
        20px;

    color: var(--ic-text);

    font-size: 17px;
    font-weight: 800;

    letter-spacing: -.025em;
}


/* =========================================================
   LINHA DO RESUMO
========================================================= */

.ironstore-compras-resumo-linha {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;

    padding:
        12px
        0;

    border-bottom:
        1px solid
        var(--ic-border-soft);
}

.ironstore-compras-resumo-linha span {
    color: var(--ic-muted);

    font-size: 11px;
    font-weight: 550;
}

.ironstore-compras-resumo-linha strong {
    color: var(--ic-text-secondary);

    font-size: 12px;
    font-weight: 750;
}


/* =========================================================
   TOTAL
========================================================= */

.ironstore-compras-resumo-total {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    gap: 20px;

    margin-top: 17px;

    padding-top: 4px;
}

.ironstore-compras-resumo-total span {
    color: var(--ic-text-secondary);

    font-size: 12px;
    font-weight: 650;
}

.ironstore-compras-resumo-total strong {
    color: var(--ic-navy);

    font-size: 23px;
    font-weight: 850;

    line-height: 1;

    letter-spacing: -.045em;
}


/* =========================================================
   BOTÃO COMPRAR
========================================================= */

.ironstore-compras-botao-comprar {
    position: relative;

    width: 100%;
    min-height: 55px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 22px;

    padding:
        0
        20px;

    overflow: hidden;

    border:
        1px solid
        rgba(255,255,255,.08);

    border-radius: 14px;

    background:
        radial-gradient(
            circle at 12% 0%,
            rgba(255,255,255,.12),
            transparent 30%
        ),
        linear-gradient(
            135deg,
            #253f63 0%,
            #142a4a 55%,
            #0d1e35 100%
        );

    color: #ffffff;

    font-family: inherit;
    font-size: 12px;
    font-weight: 800;

    letter-spacing: .01em;

    cursor: pointer;

    box-shadow:
        0 7px 17px rgba(20,42,74,.18),
        0 16px 32px rgba(20,42,74,.13);

    transition:
        transform .18s ease,
        box-shadow .18s ease,
        opacity .18s ease;
}

.ironstore-compras-botao-comprar::after {
    content: "→";

    position: absolute;

    right: 18px;

    top: 50%;

    transform:
        translateY(-50%);

    color:
        rgba(255,255,255,.78);

    font-size: 17px;

    transition:
        transform .18s ease;
}

.ironstore-compras-botao-comprar:hover:not(:disabled) {
    transform:
        translateY(-2px);

    box-shadow:
        0 10px 22px rgba(20,42,74,.21),
        0 22px 42px rgba(20,42,74,.16);
}

.ironstore-compras-botao-comprar:hover:not(:disabled)::after {
    transform:
        translate(3px,-50%);
}

.ironstore-compras-botao-comprar:active:not(:disabled) {
    transform:
        translateY(0)
        scale(.995);
}

.ironstore-compras-botao-comprar:disabled {
    opacity: .48;

    cursor: not-allowed;

    box-shadow: none;
}


/* =========================================================
   PRODUTOS SELECIONADOS
========================================================= */

.ironstore-compras-selecionados {
    display: block;

    margin-top: 10px;

    color: var(--ic-soft);

    font-size: 9px;
    font-weight: 550;

    text-align: center;
}


/* =========================================================
   ERRO
========================================================= */

.ironstore-compras-erro {
    width: min(100%, 1240px);

    margin:
        0
        auto
        18px;

    padding:
        13px
        15px;

    border:
        1px solid
        #fecdca;

    border-radius: 12px;

    background:
        #fff6f5;

    color: #b42318;

    font-size: 11px;
    font-weight: 650;

    line-height: 1.45;
}


/* =========================================================
   LOADING
========================================================= */

.ironstore-compras-loading {
    width: min(100%, 500px);

    margin:
        80px
        auto;

    padding: 30px;

    border:
        1px solid
        var(--ic-border);

    border-radius: 18px;

    background: #ffffff;

    color: var(--ic-muted);

    font-size: 12px;
    font-weight: 650;

    text-align: center;

    box-shadow:
        0 10px 30px
        rgba(16,24,40,.06);
}


/* =========================================================
   CARRINHO VAZIO
========================================================= */

.ironstore-compras-vazio {
    width:
        min(
            100%,
            500px
        );

    margin:
        75px
        auto;

    padding:
        45px
        30px;

    border:
        1px solid
        var(--ic-border);

    border-radius: 22px;

    background:
        linear-gradient(
            145deg,
            #ffffff,
            #fafbfc
        );

    text-align: center;

    box-shadow:
        0 12px 35px
        rgba(16,24,40,.065);
}

.ironstore-compras-vazio h2 {
    margin: 0;

    color: var(--ic-text);

    font-size: 20px;
    font-weight: 800;

    letter-spacing: -.025em;
}

.ironstore-compras-vazio p {
    margin:
        8px
        0
        22px;

    color: var(--ic-muted);

    font-size: 11px;
}

.ironstore-compras-vazio button {
    min-height: 44px;

    padding:
        0
        20px;

    border: 0;

    border-radius: 11px;

    background:
        var(--ic-navy);

    color: #ffffff;

    font-family: inherit;
    font-size: 11px;
    font-weight: 750;

    cursor: pointer;

    box-shadow:
        0 6px 14px
        rgba(20,42,74,.16);

    transition:
        transform .16s ease,
        background .16s ease;
}

.ironstore-compras-vazio button:hover {
    background:
        var(--ic-navy-hover);

    transform:
        translateY(-1px);
}


/* =========================================================
   MODAL DE PAGAMENTO
========================================================= */

.ironstore-pagamento-overlay {
    position: fixed;

    inset: 0;

    z-index: 999999;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 22px;

    background:
        rgba(9,18,31,.52);

    backdrop-filter:
        blur(10px);

    -webkit-backdrop-filter:
        blur(10px);

    animation:
        ironstorePagamentoOverlay
        .18s ease;
}

@keyframes ironstorePagamentoOverlay {

    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }

}


/* =========================================================
   CAIXA DO MODAL
========================================================= */

.ironstore-pagamento-modal {
    position: relative;

    width:
        min(
            100%,
            480px
        );

    max-height:
        calc(100vh - 44px);

    overflow-x: hidden;
    overflow-y: auto;

    padding: 26px;

    border:
        1px solid
        rgba(255,255,255,.72);

    border-radius: 22px;

    background:
        linear-gradient(
            160deg,
            #ffffff,
            #f8fafc
        );

    box-shadow:
        0 25px 70px
        rgba(0,0,0,.22);

    animation:
        ironstorePagamentoModal
        .22s
        cubic-bezier(.22,1,.36,1);
}

@keyframes ironstorePagamentoModal {

    from {
        opacity: 0;

        transform:
            translateY(12px)
            scale(.975);
    }

    to {
        opacity: 1;

        transform:
            translateY(0)
            scale(1);
    }

}


/* =========================================================
   FECHAR MODAL
========================================================= */

.ironstore-pagamento-fechar {
    position: absolute;

    top: 15px;
    right: 15px;

    width: 33px;
    height: 33px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;

    border:
        1px solid
        var(--ic-border);

    border-radius: 10px;

    background: #ffffff;

    color: var(--ic-muted);

    font-family: inherit;
    font-size: 19px;
    font-weight: 400;

    cursor: pointer;

    transition:
        color .15s ease,
        background .15s ease,
        transform .15s ease;
}

.ironstore-pagamento-fechar:hover {
    background: #f2f4f7;

    color: var(--ic-text);

    transform:
        scale(1.04);
}


/* =========================================================
   TÍTULO PAGAMENTO
========================================================= */

.ironstore-pagamento-modal > h2 {
    margin:
        0
        0
        22px;

    padding-right: 45px;

    color: var(--ic-text);

    font-size: 21px;
    font-weight: 800;

    letter-spacing: -.035em;
}


/* =========================================================
   RESUMO PAGAMENTO
========================================================= */

.ironstore-pagamento-resumo {
    padding: 15px;

    border:
        1px solid
        var(--ic-border);

    border-radius: 15px;

    background:
        #f8fafc;
}

.ironstore-pagamento-resumo > div {
    min-height: 35px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;
}

.ironstore-pagamento-resumo span {
    color: var(--ic-muted);

    font-size: 10px;
    font-weight: 550;
}

.ironstore-pagamento-resumo strong {
    color: var(--ic-text-secondary);

    font-size: 11px;
    font-weight: 750;
}


/* =========================================================
   TOTAL DO MODAL
========================================================= */

.ironstore-pagamento-resumo
.ironstore-pagamento-total {
    margin-top: 8px;

    padding-top: 12px;

    border-top:
        1px solid
        var(--ic-border);
}

.ironstore-pagamento-total span {
    color: var(--ic-text-secondary);

    font-weight: 700;
}

.ironstore-pagamento-total strong {
    color: var(--ic-navy);

    font-size: 18px;
    font-weight: 850;

    letter-spacing: -.035em;
}


/* =========================================================
   MÉTODOS DE PAGAMENTO
========================================================= */

.ironstore-pagamento-metodos {
    display: grid;

    grid-template-columns:
        repeat(2,minmax(0,1fr));

    gap: 10px;

    margin-top: 18px;
}

.ironstore-pagamento-metodos button {
    min-height: 50px;

    padding:
        0
        15px;

    border:
        1px solid
        var(--ic-border);

    border-radius: 13px;

    background: #ffffff;

    color: var(--ic-text-secondary);

    font-family: inherit;
    font-size: 10px;
    font-weight: 750;

    cursor: pointer;

    box-shadow:
        0 2px 5px
        rgba(16,24,40,.025);

    transition:
        color .17s ease,
        background .17s ease,
        border-color .17s ease,
        box-shadow .17s ease,
        transform .17s ease;
}

.ironstore-pagamento-metodos button:hover:not(:disabled) {
    transform:
        translateY(-1px);

    border-color:
        rgba(20,42,74,.22);

    background:
        #f8fafc;

    color: var(--ic-navy);

    box-shadow:
        0 6px 15px
        rgba(16,24,40,.055);
}

.ironstore-pagamento-metodos button:first-child {
    border-color:
        var(--ic-navy);

    background:
        linear-gradient(
            135deg,
            #1d3d68,
            #142a4a
        );

    color: #ffffff;

    box-shadow:
        0 7px 16px
        rgba(20,42,74,.16);
}

.ironstore-pagamento-metodos button:disabled {
    opacity: .5;

    cursor: not-allowed;
}


/* =========================================================
   PIX
========================================================= */

.ironstore-pagamento-pix {
    display: flex;
    flex-direction: column;

    align-items: center;

    margin-top: 20px;

    text-align: center;
}

.ironstore-pagamento-pix h3 {
    margin:
        0
        0
        15px;

    color: var(--ic-text);

    font-size: 16px;
    font-weight: 800;
}

.ironstore-pagamento-pix > img {
    width: min(100%, 220px);
    aspect-ratio: 1;

    padding: 10px;

    border:
        1px solid
        var(--ic-border);

    border-radius: 16px;

    background: #ffffff;

    object-fit: contain;

    box-shadow:
        0 8px 22px
        rgba(16,24,40,.07);
}

.ironstore-pagamento-pix p {
    margin:
        18px
        0
        8px;

    color: var(--ic-muted);

    font-size: 10px;
    font-weight: 550;
}


/* =========================================================
   PIX COPIA E COLA
========================================================= */

.ironstore-pagamento-pix textarea {
    width: 100%;
    min-height: 78px;

    resize: none;

    padding: 11px;

    outline: none;

    border:
        1px solid
        var(--ic-border);

    border-radius: 11px;

    background: #f8fafc;

    color: var(--ic-text-secondary);

    font-family: inherit;
    font-size: 9px;

    line-height: 1.45;
}

.ironstore-pagamento-pix textarea:focus {
    border-color:
        rgba(20,42,74,.3);

    box-shadow:
        0 0 0 3px
        rgba(20,42,74,.05);
}


/* =========================================================
   COPIAR PIX
========================================================= */

.ironstore-pagamento-pix > button {
    width: 100%;
    min-height: 44px;

    margin-top: 9px;

    border: 0;

    border-radius: 11px;

    background:
        var(--ic-navy);

    color: #ffffff;

    font-family: inherit;
    font-size: 10px;
    font-weight: 750;

    cursor: pointer;

    box-shadow:
        0 6px 14px
        rgba(20,42,74,.15);

    transition:
        background .16s ease,
        transform .16s ease;
}

.ironstore-pagamento-pix > button:hover {
    background:
        var(--ic-navy-hover);

    transform:
        translateY(-1px);
}


/* =========================================================
   STATUS PIX
========================================================= */

.ironstore-pagamento-pix-status {
    width: 100%;

    margin-top: 13px;

    padding: 10px;

    border:
        1px solid
        #e4e9ef;

    border-radius: 10px;

    background: #f7f9fb;

    color: var(--ic-muted);

    font-size: 9px;
    font-weight: 550;

    text-align: center;
}

.ironstore-pagamento-pix-status strong {
    color: var(--ic-navy);

    font-weight: 750;
}


/* =========================================================
   RESPONSIVO — TABLET
========================================================= */

@media (max-width: 1000px) {

    .ironstore-compras-conteudo {
        grid-template-columns:
            minmax(0,1fr)
            310px;

        gap: 18px;
    }


    .ironstore-compras-produto {
        grid-template-columns:
            28px
            90px
            minmax(0,1fr)
            auto;

        gap: 13px;
    }


    .ironstore-compras-produto-imagem {
        width: 90px;
        height: 90px;
    }

}


/* =========================================================
   RESPONSIVO — MOBILE
========================================================= */

@media (max-width: 780px) {

    .ironstore-compras {
        min-height: 100dvh;

        padding:
            26px
            14px
            60px;
    }


    .ironstore-compras-cabecalho {
        margin-bottom: 20px;
    }


    .ironstore-compras-cabecalho h1 {
        font-size: 27px;
    }


    .ironstore-compras-cabecalho p {
        font-size: 11px;
    }


    .ironstore-compras-conteudo {
        display: flex;
        flex-direction: column;

        gap: 18px;
    }


    .ironstore-compras-lista {
        width: 100%;
    }


    /* =====================================================
       PRODUTO MOBILE
    ===================================================== */

    .ironstore-compras-produto {
        grid-template-columns:
            24px
            78px
            minmax(0,1fr);

        align-items: start;

        gap: 11px;

        min-height: 0;

        padding: 12px;

        border-radius: 16px;
    }


    .ironstore-compras-produto.selecionado::before {
        top: 17px;
        bottom: 17px;
    }


    .ironstore-compras-produto-imagem {
        width: 78px;
        height: 78px;

        border-radius: 12px;
    }


    .ironstore-compras-produto-info {
        padding-top: 2px;
    }


    .ironstore-compras-produto-info h2 {
        font-size: 12px;
    }


    .ironstore-compras-produto-info p {
        font-size: 9px;

        -webkit-line-clamp: 1;
    }


    .ironstore-compras-produto-quantidade {
        flex-wrap: wrap;

        gap: 6px;
    }


    .ironstore-compras-produto-quantidade > span {
        width: 100%;
    }


    /* =====================================================
       PREÇO MOBILE
    ===================================================== */

    .ironstore-compras-produto-preco {
        grid-column:
            2 / -1;

        width: 100%;
        min-width: 0;

        flex-direction: row;

        align-items: center;
        justify-content: flex-end;

        gap: 8px;

        padding-top: 4px;
    }


    .ironstore-compras-produto-preco strong {
        font-size: 15px;
    }


    /* =====================================================
       RESUMO MOBILE
    ===================================================== */

    .ironstore-compras-resumo {
        position: static;

        width: 100%;

        padding: 18px;

        border-radius: 18px;
    }


    .ironstore-compras-resumo-total strong {
        font-size: 21px;
    }

}


/* =========================================================
   MOBILE PEQUENO
========================================================= */

@media (max-width: 440px) {

    .ironstore-compras {
        padding:
            22px
            10px
            50px;
    }


    .ironstore-compras-cabecalho h1 {
        font-size: 24px;
    }


    .ironstore-compras-produto {
        grid-template-columns:
            22px
            67px
            minmax(0,1fr);

        gap: 9px;

        padding: 10px;
    }


    .ironstore-compras-produto-imagem {
        width: 67px;
        height: 67px;
    }


    .ironstore-compras-produto-info h2 {
        font-size: 11px;
    }


    .ironstore-compras-produto-unidade {
        min-height: 18px;

        font-size: 7px;
    }


    .ironstore-compras-quantidade-controle {
        height: 31px;

        grid-template-columns:
            31px
            38px
            31px;
    }


    .ironstore-compras-quantidade-controle button {
        width: 31px;
        height: 29px;
    }


    .ironstore-compras-quantidade-controle input {
        width: 38px;
        height: 29px;
    }


    .ironstore-compras-resumo {
        padding: 16px;
    }


    /* =====================================================
       PAGAMENTO
    ===================================================== */

    .ironstore-pagamento-overlay {
        padding: 10px;

        align-items: flex-end;
    }


    .ironstore-pagamento-modal {
        width: 100%;

        max-height:
            calc(100dvh - 20px);

        padding:
            22px
            16px
            18px;

        border-radius:
            20px
            20px
            14px
            14px;
    }


    .ironstore-pagamento-metodos {
        grid-template-columns: 1fr;
    }

}


/* =========================================================
   TOUCH
========================================================= */

@media (hover: none) {

    .ironstore-compras-produto:hover {
        transform: none;

        box-shadow:
            0 1px 2px rgba(16,24,40,.025),
            0 6px 18px rgba(16,24,40,.035);
    }


    .ironstore-compras-botao-comprar:hover:not(:disabled) {
        transform: none;
    }

}


/* =========================================================
   REDUZIR MOVIMENTO
========================================================= */

@media (prefers-reduced-motion: reduce) {

    .ironstore-compras *,
    .ironstore-compras *::before,
    .ironstore-compras *::after,
    .ironstore-pagamento-overlay,
    .ironstore-pagamento-modal {
        animation: none !important;

        transition: none !important;
    }

}
/* =========================================================
   PAGAMENTO COM CARTÃO
========================================================= */

.ironstore-pagamento-cartao {
    width: 100%;

    display: flex;
    flex-direction: column;

    margin-top: 18px;

    animation:
        ironstoreCartaoEntrada
        .22s
        cubic-bezier(.22,1,.36,1);
}

@keyframes ironstoreCartaoEntrada {

    from {
        opacity: 0;

        transform:
            translateY(8px);
    }

    to {
        opacity: 1;

        transform:
            translateY(0);
    }

}


/* =========================================================
   VOLTAR
========================================================= */

.ironstore-pagamento-cartao-voltar {
    width: fit-content;
    min-height: 32px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin:
        0
        0
        15px;

    padding:
        0
        11px;

    border:
        1px solid
        var(--ic-border);

    border-radius: 9px;

    background:
        #ffffff;

    color:
        var(--ic-muted);

    font-family: inherit;
    font-size: 9px;
    font-weight: 700;

    cursor: pointer;

    box-shadow:
        0 1px 2px
        rgba(16,24,40,.025);

    transition:
        background .16s ease,
        border-color .16s ease,
        color .16s ease,
        transform .16s ease;
}

.ironstore-pagamento-cartao-voltar:hover:not(:disabled) {
    border-color:
        rgba(20,42,74,.18);

    background:
        #f7f9fb;

    color:
        var(--ic-navy);

    transform:
        translateX(-2px);
}

.ironstore-pagamento-cartao-voltar:disabled {
    opacity: .5;

    cursor: not-allowed;
}


/* =========================================================
   TÍTULO
========================================================= */

.ironstore-pagamento-cartao > h3 {
    margin:
        0
        0
        5px;

    color:
        var(--ic-text);

    font-size: 17px;
    font-weight: 800;

    line-height: 1.2;

    letter-spacing: -.025em;
}

.ironstore-pagamento-cartao > p {
    margin:
        0
        0
        18px;

    color:
        var(--ic-muted);

    font-size: 10px;
    font-weight: 500;

    line-height: 1.5;
}


/* =========================================================
   FORMULÁRIO
========================================================= */

.ironstore-pagamento-cartao-form {
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 13px;

    padding: 17px;

    border:
        1px solid
        var(--ic-border);

    border-radius: 16px;

    background:
        linear-gradient(
            145deg,
            #ffffff,
            #fafbfc
        );

    box-shadow:
        0 2px 6px
        rgba(16,24,40,.025);
}


/* =========================================================
   LABEL
========================================================= */

.ironstore-pagamento-cartao-form label {
    width: 100%;
    min-width: 0;

    display: flex;
    flex-direction: column;

    gap: 6px;
}

.ironstore-pagamento-cartao-form label > span {
    color:
        var(--ic-text-secondary);

    font-size: 9px;
    font-weight: 700;

    line-height: 1;

    letter-spacing: .005em;
}


/* =========================================================
   INPUTS / SELECT
========================================================= */

.ironstore-pagamento-cartao-form input,
.ironstore-pagamento-cartao-form select {
    width: 100%;
    height: 45px;

    padding:
        0
        13px;

    outline: none;

    border:
        1px solid
        #dfe3e8;

    border-radius: 11px;

    background:
        linear-gradient(
            180deg,
            #ffffff,
            #fbfcfd
        );

    color:
        var(--ic-text);

    font-family: inherit;
    font-size: 11px;
    font-weight: 600;

    box-shadow:
        inset 0 1px 1px
        rgba(16,24,40,.018);

    transition:
        border-color .16s ease,
        box-shadow .16s ease,
        background .16s ease;
}

.ironstore-pagamento-cartao-form input::placeholder {
    color:
        #a9b1bc;

    font-weight: 500;
}

.ironstore-pagamento-cartao-form input:hover,
.ironstore-pagamento-cartao-form select:hover {
    border-color:
        #cfd6df;
}

.ironstore-pagamento-cartao-form input:focus,
.ironstore-pagamento-cartao-form select:focus {
    border-color:
        rgba(20,42,74,.38);

    background:
        #ffffff;

    box-shadow:
        0 0 0 3px
        rgba(20,42,74,.055),
        0 2px 5px
        rgba(16,24,40,.025);
}


/* =========================================================
   SELECT
========================================================= */

.ironstore-pagamento-cartao-form select {
    appearance: none;
    -webkit-appearance: none;

    padding-right: 38px;

    cursor: pointer;

    background-image:
        linear-gradient(
            45deg,
            transparent 50%,
            #667085 50%
        ),
        linear-gradient(
            135deg,
            #667085 50%,
            transparent 50%
        );

    background-position:
        calc(100% - 17px) 19px,
        calc(100% - 12px) 19px;

    background-size:
        5px 5px,
        5px 5px;

    background-repeat:
        no-repeat;
}


/* =========================================================
   VALIDADE + CVV
========================================================= */

.ironstore-pagamento-cartao-duplo {
    width: 100%;

    display: grid;

    grid-template-columns:
        repeat(
            2,
            minmax(0,1fr)
        );

    gap: 11px;
}


/* =========================================================
   BOTÃO PAGAR
========================================================= */

.ironstore-pagamento-cartao-pagar {
    position: relative;

    width: 100%;
    min-height: 51px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 4px;

    padding:
        0
        45px
        0
        20px;

    overflow: hidden;

    border:
        1px solid
        rgba(255,255,255,.08);

    border-radius: 13px;

    background:
        radial-gradient(
            circle at 12% 0%,
            rgba(255,255,255,.12),
            transparent 30%
        ),
        linear-gradient(
            135deg,
            #253f63 0%,
            #142a4a 55%,
            #0d1e35 100%
        );

    color:
        #ffffff;

    font-family: inherit;
    font-size: 11px;
    font-weight: 800;

    letter-spacing: .005em;

    cursor: pointer;

    box-shadow:
        0 7px 17px
        rgba(20,42,74,.18),
        0 14px 28px
        rgba(20,42,74,.11);

    transition:
        transform .18s ease,
        box-shadow .18s ease,
        opacity .18s ease;
}

.ironstore-pagamento-cartao-pagar::after {
    content: "→";

    position: absolute;

    top: 50%;
    right: 18px;

    transform:
        translateY(-50%);

    color:
        rgba(255,255,255,.78);

    font-size: 16px;

    transition:
        transform .18s ease;
}

.ironstore-pagamento-cartao-pagar:hover:not(:disabled) {
    transform:
        translateY(-2px);

    box-shadow:
        0 10px 22px
        rgba(20,42,74,.22),
        0 20px 36px
        rgba(20,42,74,.14);
}

.ironstore-pagamento-cartao-pagar:hover:not(:disabled)::after {
    transform:
        translate(
            3px,
            -50%
        );
}

.ironstore-pagamento-cartao-pagar:active:not(:disabled) {
    transform:
        translateY(0)
        scale(.995);
}

.ironstore-pagamento-cartao-pagar:disabled {
    opacity: .5;

    cursor: not-allowed;

    box-shadow: none;
}


/* =========================================================
   RESULTADO DO CARTÃO
========================================================= */

.ironstore-pagamento-cartao-resultado {
    width: 100%;

    margin-top: 13px;

    padding: 13px;

    border:
        1px solid
        #dfe5ec;

    border-radius: 11px;

    background:
        #f7f9fb;

    color:
        var(--ic-text-secondary);

    font-size: 10px;
    font-weight: 600;

    line-height: 1.45;
}


/* =========================================================
   CARTÃO — MOBILE
========================================================= */

@media (max-width: 440px) {

    .ironstore-pagamento-cartao {
        margin-top: 15px;
    }

    .ironstore-pagamento-cartao-form {
        gap: 12px;

        padding: 14px;

        border-radius: 14px;
    }

    .ironstore-pagamento-cartao-form input,
    .ironstore-pagamento-cartao-form select {
        height: 43px;

        font-size: 11px;
    }

    .ironstore-pagamento-cartao-duplo {
        gap: 8px;
    }

    .ironstore-pagamento-cartao-pagar {
        min-height: 49px;
    }

}

/* =========================================================
   CARTÃO — COMPLEMENTO DO NOVO FORMULÁRIO
========================================================= */

.ironstore-pagamento-cartao {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 20px;
}


/* =========================================================
   TOPO
========================================================= */

.ironstore-pagamento-cartao-topo {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 12px;

    padding-bottom: 14px;

    border-bottom:
        1px solid
        var(--ic-border);
}

.ironstore-pagamento-cartao-topo h3 {
    flex: 1;

    margin: 0;

    color:
        var(--ic-text);

    font-size: 16px;
    font-weight: 800;

    line-height: 1.2;

    letter-spacing: -.025em;
}


/* =========================================================
   VOLTAR
========================================================= */

.ironstore-pagamento-cartao-voltar {
    min-height: 34px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding:
        0
        12px;

    border:
        1px solid
        var(--ic-border);

    border-radius: 9px;

    background:
        #ffffff;

    color:
        var(--ic-muted);

    font-family: inherit;
    font-size: 9px;
    font-weight: 700;

    cursor: pointer;

    transition:
        background .16s ease,
        border-color .16s ease,
        color .16s ease,
        transform .16s ease;
}

.ironstore-pagamento-cartao-voltar:hover:not(:disabled) {
    border-color:
        rgba(20,42,74,.2);

    background:
        #f7f9fb;

    color:
        var(--ic-navy);

    transform:
        translateX(-2px);
}

.ironstore-pagamento-cartao-voltar:disabled {
    opacity: .5;
    cursor: not-allowed;
}


/* =========================================================
   CAMPOS
========================================================= */

.ironstore-pagamento-cartao-campo {
    width: 100%;
    min-width: 0;

    display: flex;
    flex-direction: column;

    gap: 7px;
}

.ironstore-pagamento-cartao-campo > span {
    color:
        var(--ic-text-secondary);

    font-size: 9px;
    font-weight: 700;

    line-height: 1;

    letter-spacing: .005em;
}


/* =========================================================
   INPUT / SELECT
========================================================= */

.ironstore-pagamento-cartao-campo input,
.ironstore-pagamento-cartao-campo select {
    width: 100%;
    height: 46px;

    padding:
        0
        13px;

    outline: none;

    border:
        1px solid
        #dfe3e8;

    border-radius: 11px;

    background:
        linear-gradient(
            180deg,
            #ffffff,
            #fbfcfd
        );

    color:
        var(--ic-text);

    font-family: inherit;
    font-size: 11px;
    font-weight: 600;

    box-shadow:
        inset 0 1px 1px
        rgba(16,24,40,.018);

    transition:
        border-color .16s ease,
        box-shadow .16s ease,
        background .16s ease;
}

.ironstore-pagamento-cartao-campo input::placeholder {
    color:
        #a9b1bc;

    font-weight: 500;
}

.ironstore-pagamento-cartao-campo input:hover,
.ironstore-pagamento-cartao-campo select:hover {
    border-color:
        #cbd3dc;
}

.ironstore-pagamento-cartao-campo input:focus,
.ironstore-pagamento-cartao-campo select:focus {
    border-color:
        rgba(20,42,74,.42);

    background:
        #ffffff;

    box-shadow:
        0 0 0 3px
        rgba(20,42,74,.055),
        0 3px 8px
        rgba(16,24,40,.035);
}

.ironstore-pagamento-cartao-campo input:disabled,
.ironstore-pagamento-cartao-campo select:disabled {
    opacity: .6;

    cursor: not-allowed;

    background:
        #f2f4f7;
}


/* =========================================================
   VALIDADE + CVV
========================================================= */

.ironstore-pagamento-cartao-linha {
    width: 100%;

    display: grid;

    grid-template-columns:
        repeat(
            2,
            minmax(0,1fr)
        );

    gap: 11px;
}


/* =========================================================
   SELECT PARCELAS
========================================================= */

.ironstore-pagamento-cartao-campo select {
    appearance: none;
    -webkit-appearance: none;

    padding-right: 40px;

    cursor: pointer;

    background-image:
        linear-gradient(
            45deg,
            transparent 50%,
            #667085 50%
        ),
        linear-gradient(
            135deg,
            #667085 50%,
            transparent 50%
        );

    background-position:
        calc(100% - 18px) 20px,
        calc(100% - 13px) 20px;

    background-size:
        5px 5px,
        5px 5px;

    background-repeat:
        no-repeat;
}


/* =========================================================
   RESULTADO DO CARTÃO
========================================================= */

.ironstore-pagamento-cartao-resultado {
    width: 100%;

    padding:
        12px
        13px;

    border:
        1px solid
        #dfe5ec;

    border-radius:
        11px;

    background:
        #f7f9fb;

    color:
        var(--ic-text-secondary);

    font-size: 10px;
    font-weight: 600;

    line-height: 1.45;
}


/* =========================================================
   BOTÃO PAGAR
========================================================= */

.ironstore-pagamento-cartao-pagar {
    position: relative;

    width: 100%;
    min-height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding:
        0
        46px
        0
        20px;

    overflow: hidden;

    border:
        1px solid
        rgba(255,255,255,.08);

    border-radius:
        13px;

    background:
        radial-gradient(
            circle at 12% 0%,
            rgba(255,255,255,.12),
            transparent 30%
        ),
        linear-gradient(
            135deg,
            #253f63 0%,
            #142a4a 55%,
            #0d1e35 100%
        );

    color:
        #ffffff;

    font-family: inherit;
    font-size: 11px;
    font-weight: 800;

    cursor: pointer;

    box-shadow:
        0 7px 17px
        rgba(20,42,74,.18),
        0 14px 28px
        rgba(20,42,74,.11);

    transition:
        transform .18s ease,
        box-shadow .18s ease,
        opacity .18s ease;
}

.ironstore-pagamento-cartao-pagar::after {
    content: "→";

    position: absolute;

    top: 50%;
    right: 18px;

    transform:
        translateY(-50%);

    color:
        rgba(255,255,255,.78);

    font-size: 16px;

    transition:
        transform .18s ease;
}

.ironstore-pagamento-cartao-pagar:hover:not(:disabled) {
    transform:
        translateY(-2px);

    box-shadow:
        0 10px 22px
        rgba(20,42,74,.22),
        0 20px 36px
        rgba(20,42,74,.14);
}

.ironstore-pagamento-cartao-pagar:hover:not(:disabled)::after {
    transform:
        translate(
            3px,
            -50%
        );
}

.ironstore-pagamento-cartao-pagar:active:not(:disabled) {
    transform:
        scale(.995);
}

.ironstore-pagamento-cartao-pagar:disabled {
    opacity: .5;

    cursor:
        not-allowed;

    box-shadow:
        none;
}


/* =========================================================
   PAGAMENTO APROVADO
========================================================= */

.ironstore-pagamento-sucesso {
    width: 100%;

    min-height: 330px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding:
        32px
        20px;

    text-align: center;
}

.ironstore-pagamento-sucesso-icone {
    width: 68px;
    height: 68px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;

    border-radius:
        50%;

    background:
        #ecfdf3;

    color:
        #067647;

    font-size: 31px;
    font-weight: 800;

    box-shadow:
        0 0 0 8px
        rgba(6,118,71,.055);
}

.ironstore-pagamento-sucesso h2 {
    margin:
        0
        0
        8px;

    color:
        var(--ic-text);

    font-size: 22px;
    font-weight: 850;

    letter-spacing:
        -.035em;
}

.ironstore-pagamento-sucesso p {
    max-width: 310px;

    margin:
        0
        0
        25px;

    color:
        var(--ic-muted);

    font-size: 11px;
    font-weight: 500;

    line-height: 1.55;
}

.ironstore-pagamento-sucesso-botao {
    min-width: 180px;
    min-height: 48px;

    padding:
        0
        24px;

    border: 0;

    border-radius:
        12px;

    background:
        linear-gradient(
            135deg,
            #253f63,
            #142a4a
        );

    color:
        #ffffff;

    font-family: inherit;
    font-size: 11px;
    font-weight: 800;

    cursor: pointer;

    box-shadow:
        0 8px 18px
        rgba(20,42,74,.18);

    transition:
        transform .17s ease,
        box-shadow .17s ease;
}

.ironstore-pagamento-sucesso-botao:hover {
    transform:
        translateY(-2px);

    box-shadow:
        0 11px 24px
        rgba(20,42,74,.23);
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 440px) {

    .ironstore-pagamento-cartao {
        gap: 12px;

        margin-top:
            15px;
    }

    .ironstore-pagamento-cartao-topo {
        padding-bottom:
            12px;
    }

    .ironstore-pagamento-cartao-topo h3 {
        font-size:
            14px;
    }

    .ironstore-pagamento-cartao-campo input,
    .ironstore-pagamento-cartao-campo select {
        height:
            44px;
    }

    .ironstore-pagamento-cartao-linha {
        gap:
            8px;
    }

    .ironstore-pagamento-cartao-pagar {
        min-height:
            50px;
    }

    .ironstore-pagamento-sucesso {
        min-height:
            300px;

        padding:
            25px
            10px;
    }

    .ironstore-pagamento-sucesso-icone {
        width:
            62px;

        height:
            62px;

        font-size:
            28px;
    }

}



/* =========================================================
   CARRINHO VAZIO
   IRONSTORE CLÁSSICO PREMIUM
========================================================= */

.ironstore-compras-vazio {
    position: relative;

    width: min(
        calc(100% - 32px),
        590px
    );

    min-height: 480px;

    margin:
        65px
        auto;

    padding:
        58px
        48px
        38px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    border:
        1px solid
        rgba(
            20,
            42,
            74,
            0.09
        );

    border-radius:
        30px;

    background:
        radial-gradient(
            circle at 50% -10%,
            rgba(
                20,
                42,
                74,
                0.07
            ),
            transparent 38%
        ),
        linear-gradient(
            145deg,
            #ffffff 0%,
            #fbfcfe 100%
        );

    text-align:
        center;

    box-shadow:
        0 2px 5px
        rgba(
            16,
            24,
            40,
            0.02
        ),

        0 16px 40px
        rgba(
            16,
            24,
            40,
            0.05
        ),

        0 35px 80px
        rgba(
            16,
            24,
            40,
            0.04
        );

    isolation:
        isolate;

    animation:
        ironstoreComprasVazioEntrada
        0.5s
        cubic-bezier(
            .22,
            1,
            .36,
            1
        );
}


/* =========================================================
   DETALHE SUPERIOR
========================================================= */

.ironstore-compras-vazio::before {
    content: "";

    position: absolute;

    top: 0;
    left: 50%;

    width: 130px;
    height: 3px;

    transform:
        translateX(-50%);

    border-radius:
        0 0 999px 999px;

    background:
        linear-gradient(
            90deg,
            transparent,
            #142a4a,
            transparent
        );

    opacity:
        0.85;
}


/* =========================================================
   LUZ DE FUNDO
========================================================= */

.ironstore-compras-vazio::after {
    content: "";

    position: absolute;

    width: 330px;
    height: 330px;

    top: -220px;
    left: 50%;

    transform:
        translateX(-50%);

    border-radius:
        50%;

    background:
        rgba(
            20,
            42,
            74,
            0.055
        );

    filter:
        blur(45px);

    pointer-events:
        none;

    z-index:
        -1;
}


/* =========================================================
   ÍCONE
========================================================= */

.ironstore-compras-vazio-icone {
    position: relative;

    width: 92px;
    height: 92px;

    margin-bottom:
        28px;

    display: flex;
    align-items: center;
    justify-content: center;

    border:
        1px solid
        rgba(
            20,
            42,
            74,
            0.09
        );

    border-radius:
        28px;

    background:
        linear-gradient(
            145deg,
            #ffffff,
            #f2f5f9
        );

    color:
        #142a4a;

    box-shadow:
        inset
        0 1px 0
        rgba(
            255,
            255,
            255,
            1
        ),

        0 8px 20px
        rgba(
            20,
            42,
            74,
            0.07
        ),

        0 20px 45px
        rgba(
            20,
            42,
            74,
            0.06
        );
}


/* ÍCONE SVG */

.ironstore-compras-vazio-icone svg {
    width:
        40px;

    height:
        40px;

    display:
        block;
}


/* =========================================================
   CONTEÚDO
========================================================= */

.ironstore-compras-vazio-conteudo {
    width:
        100%;

    display:
        flex;

    flex-direction:
        column;

    align-items:
        center;
}


/* =========================================================
   ETIQUETA
========================================================= */

.ironstore-compras-vazio-etiqueta {
    display:
        inline-flex;

    align-items:
        center;

    justify-content:
        center;

    min-height:
        27px;

    margin-bottom:
        11px;

    padding:
        0 12px;

    border:
        1px solid
        rgba(
            20,
            42,
            74,
            0.08
        );

    border-radius:
        999px;

    background:
        rgba(
            20,
            42,
            74,
            0.045
        );

    color:
        #42566f;

    font-size:
        10px;

    font-weight:
        750;

    letter-spacing:
        0.07em;

    text-transform:
        uppercase;
}


/* =========================================================
   TÍTULO
========================================================= */

.ironstore-compras-vazio-titulo {
    max-width:
        420px;

    margin:
        0;

    color:
        #101828;

    font-size:
        clamp(
            23px,
            3vw,
            29px
        );

    font-weight:
        850;

    line-height:
        1.16;

    letter-spacing:
        -0.045em;
}


/* =========================================================
   DESCRIÇÃO
========================================================= */

.ironstore-compras-vazio-descricao {
    max-width:
        370px;

    margin:
        13px auto 0;

    color:
        #667085;

    font-size:
        13px;

    font-weight:
        450;

    line-height:
        1.65;

    letter-spacing:
        -0.01em;
}


/* =========================================================
   BOTÃO
========================================================= */

.ironstore-compras-vazio-botao {
    position:
        relative;

    width:
        auto;

    min-width:
        225px;

    min-height:
        54px;

    margin-top:
        31px;

    padding:
        0 19px
        0 24px;

    display:
        inline-flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        17px;

    overflow:
        hidden;

    border:
        1px solid
        rgba(
            255,
            255,
            255,
            0.12
        );

    border-radius:
        15px;

    outline:
        none;

    background:
        linear-gradient(
            135deg,
            #29496f 0%,
            #142a4a 55%,
            #0c1d34 100%
        );

    color:
        #ffffff;

    font-family:
        inherit;

    font-size:
        12px;

    font-weight:
        750;

    letter-spacing:
        -0.005em;

    cursor:
        pointer;

    box-shadow:
        0 8px 18px
        rgba(
            20,
            42,
            74,
            0.18
        ),

        0 18px 35px
        rgba(
            20,
            42,
            74,
            0.12
        );

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        filter 0.2s ease;
}


/* =========================================================
   BRILHO DO BOTÃO
========================================================= */

.ironstore-compras-vazio-botao::before {
    content: "";

    position:
        absolute;

    top:
        0;

    left:
        -80%;

    width:
        45%;

    height:
        100%;

    transform:
        skewX(-20deg);

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(
                255,
                255,
                255,
                0.11
            ),
            transparent
        );

    transition:
        left 0.5s ease;
}


/* =========================================================
   TEXTO BOTÃO
========================================================= */

.ironstore-compras-vazio-botao span {
    position:
        relative;

    z-index:
        2;
}


/* =========================================================
   SETA
========================================================= */

.ironstore-compras-vazio-botao svg {
    position:
        relative;

    z-index:
        2;

    width:
        18px;

    height:
        18px;

    flex-shrink:
        0;

    transition:
        transform 0.2s ease;
}


/* =========================================================
   HOVER
========================================================= */

.ironstore-compras-vazio-botao:hover {
    transform:
        translateY(-2px);

    filter:
        brightness(1.05);

    box-shadow:
        0 11px 22px
        rgba(
            20,
            42,
            74,
            0.22
        ),

        0 24px 42px
        rgba(
            20,
            42,
            74,
            0.16
        );
}


.ironstore-compras-vazio-botao:hover::before {
    left:
        135%;
}


.ironstore-compras-vazio-botao:hover svg {
    transform:
        translateX(4px);
}


.ironstore-compras-vazio-botao:active {
    transform:
        translateY(0)
        scale(0.985);
}


/* =========================================================
   FOCO
========================================================= */

.ironstore-compras-vazio-botao:focus-visible {
    box-shadow:
        0 0 0 4px
        rgba(
            20,
            42,
            74,
            0.12
        ),

        0 10px 25px
        rgba(
            20,
            42,
            74,
            0.18
        );
}


/* =========================================================
   RODAPÉ
========================================================= */

.ironstore-compras-vazio-rodape {
    margin-top:
        32px;

    padding-top:
        22px;

    width:
        min(
            100%,
            310px
        );

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    gap:
        7px;

    border-top:
        1px solid
        rgba(
            20,
            42,
            74,
            0.07
        );

    color:
        #98a2b3;

    font-size:
        10px;

    font-weight:
        600;

    letter-spacing:
        0.01em;
}


.ironstore-compras-vazio-rodape svg {
    width:
        15px;

    height:
        15px;

    flex-shrink:
        0;

    color:
        #667085;
}


/* =========================================================
   ANIMAÇÃO
========================================================= */

@keyframes ironstoreComprasVazioEntrada {

    from {
        opacity:
            0;

        transform:
            translateY(14px)
            scale(0.985);
    }

    to {
        opacity:
            1;

        transform:
            translateY(0)
            scale(1);
    }

}


/* =========================================================
   TABLET
========================================================= */

@media (
    max-width: 768px
) {

    .ironstore-compras-vazio {
        width:
            min(
                calc(100% - 24px),
                560px
            );

        min-height:
            440px;

        margin:
            42px auto;

        padding:
            48px 30px 34px;

        border-radius:
            25px;
    }


    .ironstore-compras-vazio-icone {
        width:
            84px;

        height:
            84px;

        border-radius:
            25px;

        margin-bottom:
            25px;
    }


    .ironstore-compras-vazio-icone svg {
        width:
            36px;

        height:
            36px;
    }


    .ironstore-compras-vazio-titulo {
        font-size:
            23px;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (
    max-width: 480px
) {

    .ironstore-compras-vazio {
        width:
            100%;

        min-height:
            420px;

        margin:
            22px auto;

        padding:
            40px 20px 30px;

        border-radius:
            22px;
    }


    .ironstore-compras-vazio-icone {
        width:
            76px;

        height:
            76px;

        margin-bottom:
            22px;

        border-radius:
            22px;
    }


    .ironstore-compras-vazio-icone svg {
        width:
            33px;

        height:
            33px;
    }


    .ironstore-compras-vazio-etiqueta {
        font-size:
            9px;
    }


    .ironstore-compras-vazio-titulo {
        max-width:
            290px;

        font-size:
            21px;
    }


    .ironstore-compras-vazio-descricao {
        max-width:
            300px;

        font-size:
            12px;
    }


    .ironstore-compras-vazio-botao {
        width:
            100%;

        max-width:
            290px;

        min-height:
            52px;

        margin-top:
            27px;
    }


    .ironstore-compras-vazio-rodape {
        margin-top:
            27px;

        padding-top:
            19px;
    }

}


/* =========================================================
   ACESSIBILIDADE
========================================================= */

@media (
    prefers-reduced-motion: reduce
) {

    .ironstore-compras-vazio {
        animation:
            none;
    }


    .ironstore-compras-vazio-botao,
    .ironstore-compras-vazio-botao::before,
    .ironstore-compras-vazio-botao svg {
        transition:
            none;
    }

}
/* =========================================================
   FRETE
   OPÇÕES DE ENTREGA
   PREMIUM
========================================================= */

.ironstore-compras-frete {
    width: 100% !important;
    position: relative !important;
}


/* =========================================================
   LISTA DE OPÇÕES
========================================================= */

.ironstore-frete-opcoes {
    width: 100% !important;

    display: flex !important;
    flex-direction: column !important;

    gap: 9px !important;

    margin-top: 12px !important;
    padding: 0 !important;
}


/* =========================================================
   OPÇÃO DE ENTREGA
========================================================= */

.ironstore-frete-opcao {
    position: relative !important;

    width: 100% !important;
    min-height: 72px !important;

    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;

    gap: 14px !important;

    padding:
        13px
        14px
        13px
        17px !important;

    overflow: hidden !important;

    outline: none !important;

    border:
        1px solid
        #e1e6ec !important;

    border-radius: 14px !important;

    background:
        linear-gradient(
            145deg,
            #ffffff 0%,
            #fbfcfd 100%
        ) !important;

    color:
        var(--ic-text) !important;

    font-family:
        inherit !important;

    text-align: left !important;

    cursor: pointer !important;

    box-shadow:
        0 1px 2px rgba(16,24,40,.025),
        0 4px 12px rgba(16,24,40,.035) !important;

    transition:
        transform .18s ease,
        border-color .18s ease,
        background .18s ease,
        box-shadow .18s ease !important;
}


/* =========================================================
   BARRA LATERAL
========================================================= */

.ironstore-frete-opcao::before {
    content: "" !important;

    position: absolute !important;

    top: 13px !important;
    bottom: 13px !important;
    left: 0 !important;

    width: 3px !important;

    border-radius:
        0
        999px
        999px
        0 !important;

    background:
        transparent !important;

    transition:
        background .18s ease !important;
}


/* =========================================================
   INDICADOR DE SELEÇÃO
========================================================= */

.ironstore-frete-opcao::after {
    content: "" !important;

    flex:
        0 0 auto !important;

    width: 17px !important;
    height: 17px !important;

    order: 3 !important;

    border:
        1.5px solid
        #c9d1db !important;

    border-radius:
        50% !important;

    background:
        #ffffff !important;

    box-shadow:
        inset 0 0 0 4px
        #ffffff !important;

    transition:
        border-color .18s ease,
        background .18s ease,
        transform .18s ease,
        box-shadow .18s ease !important;
}


/* =========================================================
   HOVER
========================================================= */

.ironstore-frete-opcao:hover {
    transform:
        translateY(-2px) !important;

    border-color:
        rgba(20,42,74,.22) !important;

    background:
        linear-gradient(
            145deg,
            #ffffff 0%,
            #f6f9fc 100%
        ) !important;

    box-shadow:
        0 4px 10px rgba(16,24,40,.04),
        0 10px 24px rgba(20,42,74,.075) !important;
}


/* =========================================================
   ACTIVE
========================================================= */

.ironstore-frete-opcao:active {
    transform:
        translateY(0)
        scale(.995) !important;
}


/* =========================================================
   OPÇÃO SELECIONADA
========================================================= */

.ironstore-frete-opcao.selecionada {
    border-color:
        rgba(20,42,74,.34) !important;

    background:
        radial-gradient(
            circle at 100% 0%,
            rgba(20,42,74,.06),
            transparent 42%
        ),
        linear-gradient(
            145deg,
            #ffffff 0%,
            #f3f7fb 100%
        ) !important;

    box-shadow:
        0 1px 2px rgba(16,24,40,.025),
        0 8px 22px rgba(20,42,74,.085),
        inset 0 0 0 1px rgba(20,42,74,.025) !important;
}


/* =========================================================
   BARRA SELECIONADA
========================================================= */

.ironstore-frete-opcao.selecionada::before {
    background:
        linear-gradient(
            180deg,
            #315b8c 0%,
            #142a4a 100%
        ) !important;
}


/* =========================================================
   RADIO SELECIONADO
========================================================= */

.ironstore-frete-opcao.selecionada::after {
    border-color:
        #142a4a !important;

    background:
        #142a4a !important;

    box-shadow:
        inset 0 0 0 4px
        #ffffff,
        0 3px 8px
        rgba(20,42,74,.18) !important;

    transform:
        scale(1.03) !important;
}


/* =========================================================
   INFORMAÇÕES
========================================================= */

.ironstore-frete-opcao-info {
    min-width: 0 !important;

    flex:
        1 1 auto !important;

    display: flex !important;
    flex-direction: column !important;

    align-items: flex-start !important;
    justify-content: center !important;

    gap: 4px !important;
}


/* =========================================================
   NOME DO SERVIÇO
========================================================= */

.ironstore-frete-opcao-info > strong {
    width: 100% !important;

    margin: 0 !important;

    color:
        var(--ic-text) !important;

    font-size:
        11px !important;

    font-weight:
        800 !important;

    line-height:
        1.25 !important;

    letter-spacing:
        -.015em !important;
}


/* =========================================================
   TRANSPORTADORA
========================================================= */

.ironstore-frete-opcao-info > small {
    display: inline-flex !important;
    align-items: center !important;

    width: fit-content !important;

    margin: 0 !important;

    padding:
        3px
        6px !important;

    border:
        1px solid
        #e5e9ee !important;

    border-radius:
        999px !important;

    background:
        #f7f9fb !important;

    color:
        #65768a !important;

    font-size:
        7px !important;

    font-weight:
        750 !important;

    line-height:
        1 !important;

    text-transform:
        uppercase !important;

    letter-spacing:
        .04em !important;
}


/* =========================================================
   PRAZO
========================================================= */

.ironstore-frete-opcao-info > span {
    display: flex !important;
    align-items: center !important;

    gap: 5px !important;

    margin-top:
        1px !important;

    color:
        var(--ic-muted) !important;

    font-size:
        8px !important;

    font-weight:
        600 !important;

    line-height:
        1.3 !important;
}


/* PONTO VERDE DE PRAZO */

.ironstore-frete-opcao-info > span::before {
    content: "" !important;

    width: 5px !important;
    height: 5px !important;

    flex:
        0 0 auto !important;

    border-radius:
        50% !important;

    background:
        #12b76a !important;

    box-shadow:
        0 0 0 3px
        rgba(18,183,106,.09) !important;
}


/* =========================================================
   PREÇO
========================================================= */

.ironstore-frete-opcao-preco {
    flex:
        0 0 auto !important;

    min-width:
        70px !important;

    display: flex !important;
    align-items: center !important;
    justify-content: flex-end !important;

    margin-left:
        auto !important;

    color:
        var(--ic-navy) !important;

    font-size:
        12px !important;

    font-weight:
        850 !important;

    line-height:
        1 !important;

    letter-spacing:
        -.025em !important;

    white-space:
        nowrap !important;
}


/* =========================================================
   PREÇO QUANDO SELECIONADO
========================================================= */

.ironstore-frete-opcao.selecionada
.ironstore-frete-opcao-preco {
    color:
        #102b4c !important;
}


/* =========================================================
   TEXTO QUANDO SELECIONADO
========================================================= */

.ironstore-frete-opcao.selecionada
.ironstore-frete-opcao-info > strong {
    color:
        #102b4c !important;
}


/* =========================================================
   TRANSPORTADORA QUANDO SELECIONADA
========================================================= */

.ironstore-frete-opcao.selecionada
.ironstore-frete-opcao-info > small {
    border-color:
        rgba(20,42,74,.11) !important;

    background:
        rgba(20,42,74,.055) !important;

    color:
        #395675 !important;
}


/* =========================================================
   FOCO DE TECLADO
========================================================= */

.ironstore-frete-opcao:focus-visible {
    border-color:
        rgba(20,42,74,.45) !important;

    box-shadow:
        0 0 0 3px rgba(20,42,74,.075),
        0 8px 20px rgba(20,42,74,.08) !important;
}


/* =========================================================
   ERRO DO FRETE
========================================================= */

.ironstore-frete-erro {
    position: relative !important;

    width: 100% !important;

    margin-top:
        10px !important;

    padding:
        10px
        11px
        10px
        30px !important;

    border:
        1px solid
        #fecdca !important;

    border-radius:
        11px !important;

    background:
        linear-gradient(
            145deg,
            #fff8f7,
            #fff4f2
        ) !important;

    color:
        #b42318 !important;

    font-size:
        9px !important;

    font-weight:
        650 !important;

    line-height:
        1.45 !important;

    box-shadow:
        0 2px 7px
        rgba(180,35,24,.035) !important;
}


/* ÍCONE DO ERRO */

.ironstore-frete-erro::before {
    content: "!" !important;

    position:
        absolute !important;

    top:
        50% !important;

    left:
        10px !important;

    width:
        13px !important;

    height:
        13px !important;

    display:
        flex !important;

    align-items:
        center !important;

    justify-content:
        center !important;

    transform:
        translateY(-50%) !important;

    border-radius:
        50% !important;

    background:
        #b42318 !important;

    color:
        #ffffff !important;

    font-size:
        8px !important;

    font-weight:
        850 !important;
}


/* =========================================================
   SEPARAÇÃO DO FRETE NO RESUMO
========================================================= */

.ironstore-compras-frete
.ironstore-compras-resumo-linha {
    position:
        relative !important;
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 780px) {

    .ironstore-frete-opcoes {
        gap:
            8px !important;

        margin-top:
            10px !important;
    }


    .ironstore-frete-opcao {
        min-height:
            68px !important;

        padding:
            12px
            12px
            12px
            15px !important;

        gap:
            10px !important;

        border-radius:
            13px !important;
    }


    .ironstore-frete-opcao-info > strong {
        font-size:
            10px !important;
    }


    .ironstore-frete-opcao-info > span {
        font-size:
            8px !important;
    }


    .ironstore-frete-opcao-preco {
        min-width:
            62px !important;

        font-size:
            11px !important;
    }


    .ironstore-frete-opcao::after {
        width:
            16px !important;

        height:
            16px !important;
    }

}


/* =========================================================
   MOBILE PEQUENO
========================================================= */

@media (max-width: 440px) {

    .ironstore-frete-opcao {
        min-height:
            64px !important;

        padding:
            11px
            10px
            11px
            13px !important;

        gap:
            8px !important;
    }


    .ironstore-frete-opcao-info {
        gap:
            3px !important;
    }


    .ironstore-frete-opcao-info > strong {
        font-size:
            9px !important;
    }


    .ironstore-frete-opcao-info > small {
        padding:
            2px
            5px !important;

        font-size:
            6px !important;
    }


    .ironstore-frete-opcao-info > span {
        font-size:
            7px !important;
    }


    .ironstore-frete-opcao-preco {
        min-width:
            57px !important;

        font-size:
            10px !important;
    }


    .ironstore-frete-opcao::after {
        width:
            15px !important;

        height:
            15px !important;
    }

}


/* =========================================================
   DISPOSITIVOS TOUCH
========================================================= */

@media (hover: none) {

    .ironstore-frete-opcao:hover {
        transform:
            none !important;
    }

}


/* =========================================================
   ACESSIBILIDADE
========================================================= */

@media (prefers-reduced-motion: reduce) {

    .ironstore-frete-opcao,
    .ironstore-frete-opcao::before,
    .ironstore-frete-opcao::after {
        transition:
            none !important;
    }

}



/* =========================================================
   CONFIRMAÇÃO DO CÓDIGO DE RASTREIO
========================================================= */

.ironstore-rastreio-copiado-overlay {
    position: fixed;
    inset: 0;

    z-index: 999999;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    background:
        rgba(16, 24, 40, 0.18);

    backdrop-filter:
        blur(3px);

    -webkit-backdrop-filter:
        blur(3px);

    animation:
        ironstoreRastreioOverlayEntrada
        0.18s
        ease-out
        both;
}


.ironstore-rastreio-copiado-modal {
    position: relative;

    width: min(
        100%,
        390px
    );

    display: flex;
    align-items: center;

    gap: 15px;

    padding:
        18px
        20px;

    overflow: hidden;

    border:
        1px solid
        rgba(20, 42, 74, 0.10);

    border-radius: 18px;

    background:
        rgba(
            255,
            255,
            255,
            0.98
        );

    box-shadow:
        0 24px 70px
            rgba(
                16,
                24,
                40,
                0.18
            ),
        0 6px 20px
            rgba(
                16,
                24,
                40,
                0.08
            );

    animation:
        ironstoreRastreioModalEntrada
        0.25s
        cubic-bezier(
            0.16,
            1,
            0.3,
            1
        )
        both;
}


.ironstore-rastreio-copiado-modal::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: 0;

    width: 100%;
    height: 3px;

    background:
        var(
            --ic-navy,
            #142a4a
        );

    transform-origin:
        left center;

    animation:
        ironstoreRastreioTempo
        1s
        linear
        forwards;
}


/* =========================================================
   ÍCONE
========================================================= */

.ironstore-rastreio-copiado-icone {
    width: 46px;
    height: 46px;

    flex:
        0
        0
        46px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 14px;

    background:
        var(
            --ic-navy-light,
            #edf3f9
        );

    color:
        var(
            --ic-navy,
            #142a4a
        );
}


.ironstore-rastreio-copiado-icone svg {
    width: 22px;
    height: 22px;

    display: block;
}


/* =========================================================
   TEXTO
========================================================= */

.ironstore-rastreio-copiado-conteudo {
    min-width: 0;

    display: flex;
    flex-direction: column;

    align-items: flex-start;

    gap: 2px;
}


.ironstore-rastreio-copiado-conteudo strong {
    margin: 0;

    color:
        var(
            --ic-text,
            #101828
        );

    font-size: 15px;
    font-weight: 750;

    line-height: 1.3;

    letter-spacing: -0.015em;
}


.ironstore-rastreio-copiado-conteudo span {
    width: 100%;

    overflow: hidden;

    color:
        var(
            --ic-text-secondary,
            #344054
        );

    font-size: 13px;
    font-weight: 650;

    line-height: 1.4;

    text-overflow: ellipsis;
    white-space: nowrap;
}


.ironstore-rastreio-copiado-conteudo small {
    margin-top: 2px;

    color:
        var(
            --ic-muted,
            #667085
        );

    font-size: 11px;
    font-weight: 500;

    line-height: 1.4;
}


/* =========================================================
   ANIMAÇÕES
========================================================= */

@keyframes ironstoreRastreioOverlayEntrada {

    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}


@keyframes ironstoreRastreioModalEntrada {

    from {
        opacity: 0;

        transform:
            translateY(8px)
            scale(0.97);
    }

    to {
        opacity: 1;

        transform:
            translateY(0)
            scale(1);
    }
}


@keyframes ironstoreRastreioTempo {

    from {
        transform:
            scaleX(1);
    }

    to {
        transform:
            scaleX(0);
    }
}


/* =========================================================
   MOBILE
========================================================= */

@media (
    max-width: 520px
) {

    .ironstore-rastreio-copiado-overlay {
        padding:
            16px;
    }


    .ironstore-rastreio-copiado-modal {
        width: 100%;

        gap: 12px;

        padding:
            16px;

        border-radius:
            16px;
    }


    .ironstore-rastreio-copiado-icone {
        width: 42px;
        height: 42px;

        flex-basis:
            42px;

        border-radius:
            12px;
    }


    .ironstore-rastreio-copiado-icone svg {
        width: 20px;
        height: 20px;
    }


    .ironstore-rastreio-copiado-conteudo strong {
        font-size:
            14px;
    }


    .ironstore-rastreio-copiado-conteudo span {
        font-size:
            12px;
    }

}
.ironstore-compras-rastreio-botao {
    appearance: none;
    -webkit-appearance: none;

    margin: 0;
    padding: 0;

    border: 0;
    outline: none;

    background: transparent;

    color: inherit;
    font: inherit;

    cursor: pointer;

    text-align: inherit;
}

.ironstore-rastreio-link-premium {
    appearance: none;
    -webkit-appearance: none;

    width: 100%;
    max-width: 290px;

    display: flex;
    align-items: center;

    gap: 12px;

    margin: 4px 0 0;
    padding: 11px 13px;

    border: 1px solid rgba(20, 42, 74, 0.12);
    border-radius: 14px;

    background: linear-gradient(
        180deg,
        #ffffff 0%,
        #f8fafc 100%
    );

    box-shadow:
        0 1px 2px rgba(16, 24, 40, 0.04),
        0 4px 12px rgba(16, 24, 40, 0.04);

    color: #142a4a;

    cursor: pointer;

    text-align: left;

    transition:
        transform 0.18s ease,
        border-color 0.18s ease,
        box-shadow 0.18s ease,
        background 0.18s ease;
}


.ironstore-rastreio-link-premium:hover {
    transform: translateY(-1px);

    border-color: rgba(20, 42, 74, 0.24);

    background: #ffffff;

    box-shadow:
        0 2px 4px rgba(16, 24, 40, 0.05),
        0 8px 22px rgba(16, 24, 40, 0.08);
}


.ironstore-rastreio-link-premium:active {
    transform: translateY(0) scale(0.985);
}


.ironstore-rastreio-link-premium-icone {
    width: 38px;
    height: 38px;

    flex: 0 0 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 11px;

    background: #edf3f9;

    color: #142a4a;
}


.ironstore-rastreio-link-premium-icone svg {
    width: 18px;
    height: 18px;

    display: block;
}


.ironstore-rastreio-link-premium-conteudo {
    min-width: 0;

    flex: 1;

    display: flex;
    flex-direction: column;

    gap: 1px;
}


.ironstore-rastreio-link-premium-conteudo small {
    color: #667085;

    font-size: 10px;
    font-weight: 600;

    line-height: 1.3;

    letter-spacing: 0.02em;
}


.ironstore-rastreio-link-premium-conteudo strong {
    overflow: hidden;

    color: #142a4a;

    font-size: 13px;
    font-weight: 750;

    line-height: 1.4;

    text-overflow: ellipsis;
    white-space: nowrap;
}


.ironstore-rastreio-link-premium-seta {
    flex-shrink: 0;

    margin-left: 3px;

    color: #98a2b3;

    font-size: 24px;
    font-weight: 300;

    line-height: 1;

    transition:
        transform 0.18s ease,
        color 0.18s ease;
}


.ironstore-rastreio-link-premium:hover
.ironstore-rastreio-link-premium-seta {
    transform: translateX(2px);

    color: #142a4a;
}


.ironstore-rastreio-link-premium:focus-visible {
    outline: 3px solid rgba(20, 42, 74, 0.15);
    outline-offset: 2px;
}


@media (max-width: 520px) {

    .ironstore-rastreio-link-premium {
        max-width: 100%;

        padding: 10px 12px;

        border-radius: 13px;
    }

    .ironstore-rastreio-link-premium-icone {
        width: 36px;
        height: 36px;

        flex-basis: 36px;
    }

}
`;

export default classicoCompras;