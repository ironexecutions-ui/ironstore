const classicoCategorias = `

/* =========================================================
   ÁREA PRINCIPAL
========================================================= */

.ironstore-categorias-classico {
    width: 100%;
    padding: 42px 0 56px;
    background: #ffffff;
}
/* =========================================================
   DESCRIÇÃO CURTA
========================================================= */

.ironstore-produto-classico-descricao-curta {
    display: -webkit-box;

    width: 100%;
    max-width: 100%;

    margin:
        5px
        0
        12px;

    padding: 0;

    overflow: hidden;

    color:
        #7c8798;

    font-size:
        12px;

    font-weight:
        450;

    line-height:
        1.55;

    letter-spacing:
        0.01em;

    text-align:
        left;

    word-break:
        normal;

    overflow-wrap:
        break-word;

    text-overflow:
        ellipsis;

    -webkit-box-orient:
        vertical;

    -webkit-line-clamp:
        2;
}


/* =========================================================
   DESCRIÇÃO + NOME
   DEIXA UMA SEPARAÇÃO MAIS LIMPA
========================================================= */

.ironstore-produto-classico-informacoes h3
+
.ironstore-produto-classico-descricao-curta {
    margin-top:
        6px;
}


/* =========================================================
   QUANDO VEM ANTES DAS VARIEDADES
========================================================= */

.ironstore-produto-classico-descricao-curta
+
.ironstore-produto-classico-variedades {
    margin-top:
        10px;
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

    .ironstore-produto-classico-descricao-curta {
        margin:
            4px
            0
            9px;

        font-size:
            10.5px;

        line-height:
            1.5;

        -webkit-line-clamp:
            2;
    }

}


/* =========================================================
   MOBILE PEQUENO
========================================================= */

@media (max-width: 390px) {

    .ironstore-produto-classico-descricao-curta {
        font-size:
            10px;

        line-height:
            1.45;
    }

}
.ironstore-categorias-classico-conteudo {
    width: min(
        1380px,
        calc(100% - 48px)
    );

    margin: 0 auto;
}


/* =========================================================
   CABEÇALHO
========================================================= */

.ironstore-categorias-classico-cabecalho {
    display: block;

    margin-bottom: 24px;
}


/* =========================================================
   BLOCO ESQUERDO
========================================================= */

.ironstore-categorias-classico-cabecalho-esquerda {
    display: flex;

    flex-direction: column;

    align-items: flex-start;
}


/* =========================================================
   SUBTÍTULO
========================================================= */

.ironstore-categorias-classico-subtitulo {
    display: block;

    margin-bottom: 7px;

    color: #64748b;

    font-size: 11px;

    font-weight: 750;

    letter-spacing: 1.4px;

    text-transform: uppercase;
}


/* =========================================================
   TÍTULO + BOTÃO
========================================================= */

.ironstore-categorias-classico-titulo-linha {
    display: flex;

    align-items: center;

    gap: 14px;
}


/* =========================================================
   TÍTULO
========================================================= */

.ironstore-categorias-classico-titulo-linha h2 {
    margin: 0;

    color: #0f172a;

    font-size: 34px;

    font-weight: 760;

    line-height: 1.08;

    letter-spacing: -1.2px;
}


/* =========================================================
   BOTÃO CATEGORIAS
========================================================= */

.ironstore-categorias-classico-botao {
    height: 38px;

    padding:
        0
        10px
        0
        14px;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 9px;

    border:
        1px solid
        #e2e8f0;

    border-radius: 9px;

    background: #ffffff;

    color: #475569;

    font-family: inherit;

    font-size: 12px;

    font-weight: 700;

    cursor: pointer;

    transition:
        border-color 180ms ease,
        background 180ms ease,
        color 180ms ease,
        box-shadow 180ms ease,
        transform 180ms ease;
}


/* =========================================================
   HOVER
========================================================= */

.ironstore-categorias-classico-botao:hover {
    border-color: #cbd5e1;

    background: #f8fafc;

    color: #0f172a;

    box-shadow:
        0 3px 10px
        rgba(
            15,
            23,
            42,
            0.06
        );
}


/* =========================================================
   ABERTO
========================================================= */

.ironstore-categorias-classico-botao.ativo {
    border-color: #cbd5e1;

    background: #f8fafc;

    color: #0f172a;
}


/* =========================================================
   CLIQUE
========================================================= */

.ironstore-categorias-classico-botao:active {
    transform: scale(0.97);
}


/* =========================================================
   + / -
========================================================= */

.ironstore-categorias-classico-seta {
    width: 21px;

    height: 21px;

    display: grid;

    place-items: center;

    border-radius: 6px;

    background: #f1f5f9;

    color: #64748b;

    font-size: 15px;

    line-height: 1;
}


.ironstore-categorias-classico-botao:hover
.ironstore-categorias-classico-seta,
.ironstore-categorias-classico-botao.ativo
.ironstore-categorias-classico-seta {
    background: #e2e8f0;
    color: #0f172a;
}
/* =========================================================
   ÁREA
========================================================= */

.ironstore-produto-classico-carrinho-area {
    width: 100%;
    box-sizing: border-box;

    padding:
        13px
        4px
        0;
}


/* =========================================================
   BOTÃO
========================================================= */

.ironstore-produto-classico-carrinho {
    position: relative;

    width: 100%;
    height: 42px;

    overflow: hidden;

    padding: 0;

    border:
        1px solid
        #dfe4ea;

    border-radius: 9px;

    background:
        #ffffff;

    font-family: inherit;

    cursor: pointer;

    box-shadow:
        0 1px 2px
        rgba(
            15,
            23,
            42,
            0.025
        );

    transition:
        background-color
        420ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        ),
        border-color
        420ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        ),
        box-shadow
        220ms ease,
        transform
        160ms ease;
}


/* =========================================================
   ADICIONAR
========================================================= */

.ironstore-produto-carrinho-adicionar {
    position: absolute;

    inset: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;

    padding:
        0
        14px;

    color:
        #334155;

    font-size: 11px;
    font-weight: 680;

    letter-spacing: 0.01em;

    white-space: nowrap;

    opacity: 1;

    transform:
        translateX(0);

    transition:
        transform
        440ms
        cubic-bezier(
            0.76,
            0,
            0.24,
            1
        ),
        opacity
        240ms ease;
}


/* =========================================================
   SETA
========================================================= */

.ironstore-produto-carrinho-seta {
    display: flex;

    align-items: center;
    justify-content: center;

    color:
        #94a3b8;

    font-size: 16px;
    font-weight: 400;

    line-height: 1;

    transition:
        color 180ms ease,
        transform
        260ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        );
}


/* =========================================================
   HOVER
========================================================= */

.ironstore-produto-classico-carrinho:not(
    .no-carrinho
):hover {
    border-color:
        #cbd5e1;

    background:
        #fafbfc;

    box-shadow:
        0 4px 12px
        rgba(
            15,
            23,
            42,
            0.05
        );
}


.ironstore-produto-classico-carrinho:not(
    .no-carrinho
):hover
.ironstore-produto-carrinho-seta {
    color:
        #334155;

    transform:
        translateX(2px);
}


/* =========================================================
   NO CARRINHO
   COMEÇA FORA PELA DIREITA
========================================================= */

.ironstore-produto-carrinho-adicionado {
    position: absolute;

    inset: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;

    padding:
        0
        14px;

    color:
        #ffffff;

    font-size: 11px;
    font-weight: 680;

    letter-spacing: 0.01em;

    white-space: nowrap;

    opacity: 0;

    transform:
        translateX(100%);

    transition:
        transform
        440ms
        cubic-bezier(
            0.76,
            0,
            0.24,
            1
        ),
        opacity
        260ms ease;
}


/* =========================================================
   CHECK
========================================================= */

.ironstore-produto-carrinho-check {
    order: 2;

    display: flex;

    align-items: center;
    justify-content: center;

    width: auto;
    height: auto;

    border: 0;

    background: transparent;

    color:
        #cbd5e1;

    font-size: 13px;
    font-weight: 600;

    line-height: 1;

    opacity: 0;

    transform:
        translateX(5px);

    transition:
        opacity
        240ms
        260ms ease,
        transform
        320ms
        220ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        );
}


/* =========================================================
   ESTADO CONFIRMADO
========================================================= */

.ironstore-produto-classico-carrinho.no-carrinho {
    border-color:
        #0f172a;

    background:
        #0f172a;

    cursor: default;

    box-shadow:
        0 3px 10px
        rgba(
            15,
            23,
            42,
            0.10
        );
}


/* =========================================================
   ANTIGO CONTEÚDO SAI PARA ESQUERDA
========================================================= */

.ironstore-produto-classico-carrinho.no-carrinho
.ironstore-produto-carrinho-adicionar {
    opacity: 0;

    transform:
        translateX(-100%);
}


/* =========================================================
   NOVO CONTEÚDO ENTRA PELA DIREITA
========================================================= */

.ironstore-produto-classico-carrinho.no-carrinho
.ironstore-produto-carrinho-adicionado {
    opacity: 1;

    transform:
        translateX(0);
}


/* =========================================================
   CHECK ENTRA POR ÚLTIMO
========================================================= */

.ironstore-produto-classico-carrinho.no-carrinho
.ironstore-produto-carrinho-check {
    opacity: 1;

    transform:
        translateX(0);
}


/* =========================================================
   CLIQUE
========================================================= */

.ironstore-produto-classico-carrinho:not(
    .no-carrinho
):active {
    transform:
        scale(0.985);
}


/* =========================================================
   DISABLED
========================================================= */

.ironstore-produto-classico-carrinho:disabled {
    opacity: 1;

    cursor: default;
}


/* =========================================================
   FOCO
========================================================= */

.ironstore-produto-classico-carrinho:focus-visible {
    outline:
        2px solid
        rgba(
            15,
            23,
            42,
            0.25
        );

    outline-offset:
        3px;
}
/* =========================================================
   IRONSTORE — CARRINHO PREMIUM
========================================================= */

.ironstore-perfil-carrinho-area {
    position: relative;

    width: 100%;
    box-sizing: border-box;

    padding:
        
        32px !important;

    /* Fundo premium */
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

    border-top:
        1px solid
        rgba(15, 23, 42, 0.045);

    border-bottom:
        1px solid
        rgba(15, 23, 42, 0.055);
border-radius: 40px;
    box-shadow:
        inset 0 1px 0
        rgba(255, 255, 255, 0.8);

    isolation: isolate;
}
.ironstore-perfil-carrinho-area::before {
    content: "";
    position: absolute;

    top: 0;
    left: 50%;

    width: min(900px, 90%);
    height: 220px;

    transform:
        translateX(-50%);

    background:
        radial-gradient(
            ellipse at top,
            rgba(255, 255, 255, 0.72) 0%,
            rgba(255, 255, 255, 0) 70%
        );

    pointer-events: none;

    z-index: -1;
}
/* =========================================================
   VARIEDADES DO PRODUTO
   PREMIUM / FORTE / E-COMMERCE
========================================================= */

.ironstore-produto-classico-variedades {
    width: 100%;
    margin-top: 14px;
    margin-bottom: 14px;
}


/* =========================================================
   TÍTULO
========================================================= */

.ironstore-produto-classico-variedades-titulo {
    display: flex;
    align-items: center;
    gap: 6px;

    margin-bottom: 9px;

    font-size: 10px;
    font-weight: 800;

    color: #667085;

    text-transform: uppercase;
    letter-spacing: 1px;
}


/* =========================================================
   LISTA
========================================================= */

.ironstore-produto-classico-variedades-lista {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 7px;

    width: 100%;
}


/* =========================================================
   BOTÃO
========================================================= */

.ironstore-produto-classico-variedade {
    position: relative;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    min-width: 44px;
    min-height: 36px;

    padding: 8px 13px;

    border: 1px solid #d0d5dd;
    border-radius: 10px;

    background:
        linear-gradient(
            180deg,
            #ffffff 0%,
            #f8fafc 100%
        );

    color: #344054;

    font-size: 12px;
    font-weight: 700;
    line-height: 1;

    white-space: nowrap;

    cursor: pointer;

    box-shadow:
        0 1px 2px rgba(16, 24, 40, 0.04);

    transition:
        transform 160ms ease,
        border-color 160ms ease,
        background 160ms ease,
        color 160ms ease,
        box-shadow 160ms ease;
}


/* =========================================================
   HOVER
========================================================= */

.ironstore-produto-classico-variedade:hover {
    border-color: #667085;

    color: #101828;

    background: #ffffff;

    transform: translateY(-2px);

    box-shadow:
        0 5px 12px rgba(16, 24, 40, 0.10);
}


/* =========================================================
   SELECIONADA
========================================================= */

.ironstore-produto-classico-variedade.selecionada {
    padding-right: 31px;

    border-color: #101828;

    background:
        linear-gradient(
            135deg,
            #101828 0%,
            #1d2939 100%
        );

    color: #ffffff;

    box-shadow:
        0 5px 12px rgba(16, 24, 40, 0.20),
        inset 0 1px 0 rgba(255, 255, 255, 0.10);

    transform: translateY(-1px);
}


/* =========================================================
   CHECK DA SELECIONADA
========================================================= */

.ironstore-produto-classico-variedade.selecionada::after {
    content: "✓";

    position: absolute;

    right: 9px;
    top: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 15px;
    height: 15px;

    border-radius: 50%;

    background: #ffffff;
    color: #101828;

    font-size: 9px;
    font-weight: 900;

    transform: translateY(-50%);
}


/* =========================================================
   CLIQUE
========================================================= */

.ironstore-produto-classico-variedade:active {
    transform: translateY(0) scale(0.97);
}


/* =========================================================
   FOCO
========================================================= */

.ironstore-produto-classico-variedade:focus-visible {
    outline: none;

    box-shadow:
        0 0 0 3px rgba(16, 24, 40, 0.12);
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

    .ironstore-produto-classico-variedades {
        margin-top: 11px;
        margin-bottom: 12px;
    }

    .ironstore-produto-classico-variedades-lista {
        gap: 6px;
    }

    .ironstore-produto-classico-variedade {
        min-height: 34px;

        padding: 7px 11px;

        border-radius: 9px;

        font-size: 11px;
    }

    .ironstore-produto-classico-variedade.selecionada {
        padding-right: 28px;
    }

}
/* =========================================================
   CABEÇALHO
========================================================= */

.ironstore-perfil-carrinho-cabecalho {
    position: relative;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    gap: 24px;

    margin-bottom: 30px;

    padding-bottom: 18px;

    border-bottom:
        1px solid
        #e9edf2;
}


/* DETALHE SUPERIOR */

.ironstore-perfil-carrinho-cabecalho::before {
    content: "";

    position: absolute;

    left: 0;
    bottom: -1px;

    width: 42px;
    height: 2px;

    border-radius: 999px;

    background:
        #0f172a;
}


/* =========================================================
   LABEL
========================================================= */

.ironstore-perfil-carrinho-label {
    display: block;

    margin-bottom: 8px;

    color:
        #94a3b8;

    font-size: 9px;
    font-weight: 750;

    line-height: 1;

    letter-spacing: 1.6px;

    text-transform: uppercase;
}


/* =========================================================
   TÍTULO
========================================================= */

.ironstore-perfil-carrinho-cabecalho h2 {
    margin: 0;

    color:
        #0f172a;

    font-size:
        clamp(
            27px,
            3vw,
            35px
        );

    font-weight: 760;

    line-height: 1;

    letter-spacing: -1.2px;
}


/* =========================================================
   QUANTIDADE
========================================================= */

.ironstore-perfil-carrinho-total {
    min-height: 31px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    padding:
        0
        12px;

    border:
        1px solid
        #e5e9ee;

    border-radius: 999px;

    background:
        #ffffff;

    color:
        #64748b;

    font-size: 10px;
    font-weight: 650;

    letter-spacing: 0.1px;

    box-shadow:
        0 1px 2px
        rgba(
            15,
            23,
            42,
            0.025
        );
}


/* =========================================================
   GRID DE PRODUTOS
========================================================= */

.ironstore-perfil-carrinho-produtos {
    display: grid;

    grid-template-columns:
        repeat(
            4,
            minmax(0, 1fr)
        );

    column-gap: 18px;
    row-gap: 32px;

    align-items: stretch;
}


/* =========================================================
   ITEM
========================================================= */

.ironstore-perfil-carrinho-item {
    position: relative;

    min-width: 0;

    display: flex;
    flex-direction: column;

    opacity: 1;

    transform:
        translateY(0)
        scale(1);

    transition:
        opacity
        360ms ease,
        transform
        420ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        ),
        filter
        360ms ease;
}


/* =========================================================
   CARD DO PRODUTO
   FAZ O ProdutoCategoria OCUPAR O ESPAÇO NORMAL
========================================================= */

.ironstore-perfil-carrinho-item
.ironstore-produto-classico {
    flex: 1;
}


/* =========================================================
   REMOVENDO
========================================================= */

.ironstore-perfil-carrinho-item.removendo {
    opacity: 0;

    transform:
        translateY(7px)
        scale(0.975);

    filter:
        blur(2px);

    pointer-events: none;
}


/* =========================================================
   BOTÃO REMOVER
========================================================= */

.ironstore-perfil-carrinho-remover {
    position: relative;

    width: calc(100% - 8px);
    height: 39px;

    overflow: hidden;

    box-sizing: border-box;

    margin:
        9px
        4px
        0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding:
        0
        13px;

    border:
        1px solid
        #e6eaf0;

    border-radius: 9px;

    background:
        #ffffff;

    color:
        #64748b;

    font-family: inherit;

    cursor: pointer;

    box-shadow:
        0 1px 2px
        rgba(
            15,
            23,
            42,
            0.025
        );

    transition:
        background-color
        200ms ease,
        border-color
        200ms ease,
        color
        200ms ease,
        box-shadow
        200ms ease,
        transform
        160ms ease;
}


/* =========================================================
   TEXTO REMOVER
========================================================= */

.ironstore-perfil-carrinho-remover-texto {
    position: relative;

    z-index: 2;

    font-size: 10px;
    font-weight: 650;

    line-height: 1;

    letter-spacing: 0.02em;
}


/* =========================================================
   ÍCONE REMOVER
========================================================= */

.ironstore-perfil-carrinho-remover-icone {
    position: relative;

    z-index: 2;

    width: 20px;
    height: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background:
        #f8fafc;

    color:
        #94a3b8;

    font-size: 15px;
    font-weight: 400;

    line-height: 1;

    transition:
        background-color
        200ms ease,
        color
        200ms ease,
        transform
        280ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        );
}


/* =========================================================
   HOVER REMOVER
========================================================= */

.ironstore-perfil-carrinho-remover:hover {
    border-color:
        #d7dde5;

    background:
        #fafbfc;

    color:
        #334155;

    box-shadow:
        0 4px 12px
        rgba(
            15,
            23,
            42,
            0.045
        );
}


.ironstore-perfil-carrinho-remover:hover
.ironstore-perfil-carrinho-remover-icone {
    background:
        #0f172a;

    color:
        #ffffff;

    transform:
        rotate(90deg);
}


/* =========================================================
   ACTIVE
========================================================= */

.ironstore-perfil-carrinho-remover:active {
    transform:
        scale(0.985);
}


/* =========================================================
   DISABLED
========================================================= */

.ironstore-perfil-carrinho-remover:disabled {
    cursor: default;
}


/* =========================================================
   FOCO
========================================================= */

.ironstore-perfil-carrinho-remover:focus-visible {
    outline:
        2px solid
        rgba(
            15,
            23,
            42,
            0.18
        );

    outline-offset: 3px;
}


/* =========================================================
   CARRINHO VAZIO
========================================================= */

.ironstore-perfil-carrinho-vazio {
    position: relative;

    min-height: 290px;

    overflow: hidden;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    padding: 42px;

    border:
        1px solid
        #e8edf2;

    border-radius: 16px;

    background:
        linear-gradient(
            180deg,
            #ffffff 0%,
            #fbfcfd 100%
        );

    text-align: center;

    box-shadow:
        0 8px 30px
        rgba(
            15,
            23,
            42,
            0.035
        );
}


/* =========================================================
   ÍCONE CARRINHO VAZIO
========================================================= */

.ironstore-perfil-carrinho-vazio-icone {
    position: relative;

    width: 52px;
    height: 52px;

    display: grid;
    place-items: center;

    margin-bottom: 18px;

    border:
        1px solid
        #e5eaf0;

    border-radius: 14px;

    background:
        #ffffff;

    box-shadow:
        0 5px 18px
        rgba(
            15,
            23,
            42,
            0.055
        );
}


.ironstore-perfil-carrinho-vazio-icone span {
    position: relative;

    width: 18px;
    height: 17px;

    box-sizing: border-box;

    border:
        1.5px solid
        #64748b;

    border-radius:
        3px
        3px
        5px
        5px;
}


.ironstore-perfil-carrinho-vazio-icone span::before {
    content: "";

    position: absolute;

    top: -7px;
    left: 4px;

    width: 7px;
    height: 7px;

    box-sizing: border-box;

    border:
        1.5px solid
        #64748b;

    border-bottom: 0;

    border-radius:
        5px
        5px
        0
        0;
}


/* =========================================================
   TEXTO VAZIO
========================================================= */

.ironstore-perfil-carrinho-vazio strong {
    color:
        #0f172a;

    font-size: 15px;
    font-weight: 720;

    letter-spacing: -0.2px;
}


.ironstore-perfil-carrinho-vazio p {
    max-width: 300px;

    margin:
        7px
        0
        20px;

    color:
        #94a3b8;

    font-size: 11px;
    font-weight: 450;

    line-height: 1.55;
}


/* =========================================================
   EXPLORAR PRODUTOS
========================================================= */

.ironstore-perfil-carrinho-vazio button {
    height: 39px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    gap: 22px;

    box-sizing: border-box;

    padding:
        0
        15px;

    border:
        1px solid
        #0f172a;

    border-radius: 9px;

    background:
        #0f172a;

    color:
        #ffffff;

    font-family: inherit;

    font-size: 10px;
    font-weight: 650;

    cursor: pointer;

    box-shadow:
        0 4px 12px
        rgba(
            15,
            23,
            42,
            0.12
        );

    transition:
        background-color
        180ms ease,
        box-shadow
        180ms ease,
        transform
        180ms ease;
}


.ironstore-perfil-carrinho-vazio button span {
    font-size: 15px;

    transition:
        transform
        220ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        );
}


.ironstore-perfil-carrinho-vazio button:hover {
    background:
        #1e293b;

    box-shadow:
        0 7px 18px
        rgba(
            15,
            23,
            42,
            0.16
        );

    transform:
        translateY(-1px);
}


.ironstore-perfil-carrinho-vazio button:hover span {
    transform:
        translateX(3px);
}


/* =========================================================
   LOADING
========================================================= */

.ironstore-perfil-carrinho-carregando {
    min-height: 260px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 13px;

    color:
        #94a3b8;
}


.ironstore-perfil-carrinho-carregando span {
    width: 22px;
    height: 22px;

    box-sizing: border-box;

    border:
        2px solid
        #e5eaf0;

    border-top-color:
        #0f172a;

    border-radius: 50%;

    animation:
        ironstoreCarrinhoLoading
        650ms
        linear
        infinite;
}


.ironstore-perfil-carrinho-carregando p {
    margin: 0;

    font-size: 10px;
    font-weight: 550;

    letter-spacing: 0.1px;
}


@keyframes ironstoreCarrinhoLoading {

    to {
        transform:
            rotate(360deg);
    }

}


/* =========================================================
   ERRO
========================================================= */

.ironstore-perfil-carrinho-erro {
    box-sizing: border-box;

    padding:
        14px
        16px;

    border:
        1px solid
        #e5eaf0;

    border-radius: 10px;

    background:
        #fafbfc;

    color:
        #475569;

    font-size: 11px;
    font-weight: 500;
}


/* =========================================================
   TABLET
========================================================= */

@media (
    max-width: 1100px
) {

    .ironstore-perfil-carrinho-produtos {
        grid-template-columns:
            repeat(
                3,
                minmax(0, 1fr)
            );
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (
    max-width: 760px
) {

    .ironstore-perfil-carrinho-area {
        padding:
            36px
            0
            48px;
    }


    .ironstore-perfil-carrinho-produtos {
        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            );

        column-gap: 10px;
        row-gap: 24px;
    }


    .ironstore-perfil-carrinho-cabecalho {
        margin-bottom: 22px;
    }


    .ironstore-perfil-carrinho-cabecalho h2 {
        font-size: 26px;
    }


    .ironstore-perfil-carrinho-total {
        min-height: 28px;

        padding:
            0
            9px;

        font-size: 9px;
    }


    .ironstore-perfil-carrinho-remover {
        height: 37px;

        margin-top: 7px;
    }


    .ironstore-perfil-carrinho-remover-texto {
        font-size: 9px;
    }

}


/* =========================================================
   MOBILE PEQUENO
========================================================= */

@media (
    max-width: 420px
) {

    .ironstore-perfil-carrinho-produtos {
        column-gap: 8px;
    }


    .ironstore-perfil-carrinho-cabecalho {
        gap: 10px;
    }


    .ironstore-perfil-carrinho-remover {
        padding:
            0
            10px;
    }

}
    /* =========================================================
   ÁREA DO TÍTULO
========================================================= */

.ironstore-perfil-carrinho-titulo-area {
    display: flex;
    align-items: center;

    gap: 14px;

    min-width: 0;
}


/* =========================================================
   ÍCONE
========================================================= */

.ironstore-perfil-carrinho-titulo-icone {
    position: relative;

    width: 46px;
    height: 46px;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border:
        1px solid
        #e6eaf0;

    border-radius: 13px;

    background:
        linear-gradient(
            145deg,
            #ffffff 0%,
            #f7f9fb 100%
        );

    box-shadow:
        0 5px 16px
        rgba(
            15,
            23,
            42,
            0.055
        );
}


/* =========================================================
   DESENHO DA SACOLA
========================================================= */

.ironstore-perfil-carrinho-titulo-bolsa {
    position: absolute;

    left: 14px;
    bottom: 11px;

    width: 18px;
    height: 17px;

    box-sizing: border-box;

    border:
        1.5px solid
        #334155;

    border-radius:
        4px
        4px
        5px
        5px;
}


.ironstore-perfil-carrinho-titulo-alca {
    position: absolute;

    top: 10px;
    left: 18px;

    width: 10px;
    height: 9px;

    box-sizing: border-box;

    border:
        1.5px solid
        #334155;

    border-bottom: 0;

    border-radius:
        7px
        7px
        0
        0;
}


/* =========================================================
   CONTEÚDO
========================================================= */

.ironstore-perfil-carrinho-titulo-conteudo {
    min-width: 0;
}


/* =========================================================
   LABEL
========================================================= */

.ironstore-perfil-carrinho-label {
    display: block;

    margin-bottom: 5px;

    color:
        #94a3b8;

    font-size: 8px;
    font-weight: 750;

    line-height: 1;

    letter-spacing: 1.5px;

    text-transform: uppercase;
}


/* =========================================================
   TÍTULO
========================================================= */

.ironstore-perfil-carrinho-titulo-conteudo h2 {
    margin: 0;

    color:
        #0f172a;

    font-size: 28px;
    font-weight: 760;

    line-height: 1.05;

    letter-spacing: -0.8px;
}


/* =========================================================
   DESCRIÇÃO
========================================================= */

.ironstore-perfil-carrinho-titulo-conteudo p {
    margin:
        6px
        0
        0;

    color:
        #94a3b8;

    font-size: 10px;
    font-weight: 450;

    line-height: 1.4;
}


/* =========================================================
   HOVER SUTIL
========================================================= */

.ironstore-perfil-carrinho-titulo-icone {
    transition:
        transform 260ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        ),
        border-color 220ms ease,
        box-shadow 220ms ease;
}


.ironstore-perfil-carrinho-cabecalho:hover
.ironstore-perfil-carrinho-titulo-icone {
    transform:
        translateY(-2px);

    border-color:
        #d9dfe7;

    box-shadow:
        0 8px 22px
        rgba(
            15,
            23,
            42,
            0.075
        );
}


/* =========================================================
   MOBILE
========================================================= */

@media (
    max-width: 600px
) {

    .ironstore-perfil-carrinho-titulo-area {
        gap: 11px;
    }


    .ironstore-perfil-carrinho-titulo-icone {
        width: 42px;
        height: 42px;

        border-radius: 11px;
    }


    .ironstore-perfil-carrinho-titulo-bolsa {
        left: 13px;
        bottom: 10px;

        width: 16px;
        height: 16px;
    }


    .ironstore-perfil-carrinho-titulo-alca {
        top: 9px;
        left: 17px;

        width: 8px;
        height: 8px;
    }


    .ironstore-perfil-carrinho-titulo-conteudo h2 {
        font-size: 24px;
    }


    .ironstore-perfil-carrinho-titulo-conteudo p {
        font-size: 9px;
    }

}
/* =========================================================
   ÁREA EXPANSÍVEL DAS CATEGORIAS
========================================================= */

.ironstore-categorias-classico-opcoes-area {
    display: grid;

    grid-template-rows: 0fr;

    opacity: 0;

    transition:
        grid-template-rows
        380ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        ),
        opacity 220ms ease;
}


/* =========================================================
   ABERTA
========================================================= */

.ironstore-categorias-classico-opcoes-area.aberto {
    grid-template-rows: 1fr;

    opacity: 1;
}


/* =========================================================
   CONTAINER DAS OPÇÕES
========================================================= */

.ironstore-categorias-classico-opcoes {
    min-height: 0;

    overflow: hidden;

    display: flex;
    flex-wrap: wrap;

    gap: 8px;
}


/* =========================================================
   ESPAÇO QUANDO ABERTO
========================================================= */

.ironstore-categorias-classico-opcoes-area.aberto
.ironstore-categorias-classico-opcoes {
    padding-bottom: 24px;
}


/* =========================================================
   BOTÃO DE CADA CATEGORIA
========================================================= */

.ironstore-categorias-classico-categoria {
    height: 38px;

    padding: 0 16px;

    border:
        1px solid
        #e2e8f0;

    border-radius: 9px;

    background: #ffffff;

    color: #475569;

    font-family: inherit;

    font-size: 12px;
    font-weight: 650;

    cursor: pointer;

    transition:
        background 180ms ease,
        color 180ms ease,
        border-color 180ms ease,
        box-shadow 180ms ease,
        transform 180ms ease;
}


/* =========================================================
   HOVER CATEGORIA
========================================================= */

.ironstore-categorias-classico-categoria:hover {
    border-color: #cbd5e1;

    background: #f8fafc;

    color: #0f172a;
}


/* =========================================================
   CATEGORIA SELECIONADA
========================================================= */

.ironstore-categorias-classico-categoria.selecionada {
    border-color: #0f172a;

    background: #0f172a;

    color: #ffffff;

    box-shadow:
        0 4px 10px
        rgba(
            15,
            23,
            42,
            0.13
        );
}


/* =========================================================
   CLIQUE CATEGORIA
========================================================= */

.ironstore-categorias-classico-categoria:active {
    transform: scale(0.97);
}


/* =========================================================
   RESULTADO ATUAL
========================================================= */

.ironstore-categorias-classico-resultado {
    min-height: 32px;

    margin-bottom: 17px;

    padding-bottom: 11px;

    display: flex;
    align-items: center;

    gap: 9px;

    border-bottom:
        1px solid
        #f1f5f9;

    color: #0f172a;
}


/* =========================================================
   NOME DA CATEGORIA ATUAL
========================================================= */

.ironstore-categorias-classico-resultado > span {
    font-size: 13px;
    font-weight: 750;
}


/* =========================================================
   QUANTIDADE
========================================================= */

.ironstore-categorias-classico-resultado small {
    padding: 3px 7px;

    border-radius: 999px;

    background: #f1f5f9;

    color: #64748b;

    font-size: 10px;
    font-weight: 650;
}


/* =========================================================
   GRID DOS PRODUTOS
========================================================= */

.ironstore-categorias-classico-grid {
    display: grid;

    grid-template-columns:
        repeat(
            5,
            minmax(0, 1fr)
        );

    gap: 30px 16px;
}


/* =========================================================
   CARD DO PRODUTO
========================================================= */

.ironstore-produto-classico {
    position: relative;

    min-width: 0;

    border-radius: 16px;

    transition:
        transform
        260ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        );
}


/* =========================================================
   HOVER DO CARD
========================================================= */

.ironstore-produto-classico:hover {
    transform: translateY(-3px);
}


/* =========================================================
   ÁREA CLICÁVEL
========================================================= */

.ironstore-produto-classico-clique {
    width: 100%;

    padding: 0;

    display: block;

    border: 0;

    outline: none;

    background: transparent;

    color: inherit;

    font-family: inherit;

    text-align: left;

    cursor: pointer;
}


/* =========================================================
   FOCO
========================================================= */

.ironstore-produto-classico-clique:focus-visible {
    border-radius: 16px;

    outline:
        2px solid
        #334155;

    outline-offset: 4px;
}


/* =========================================================
   ÁREA DA IMAGEM
========================================================= */

.ironstore-produto-classico-imagem-area {
    position: relative;

    width: 100%;

    aspect-ratio: 1 / 1;

    overflow: hidden;

    border:
        1px solid
        #edf0f4;

    border-radius: 14px;

    background:
        linear-gradient(
            145deg,
            #f8fafc,
            #f1f5f9
        );

    box-shadow:
        0 1px 3px
        rgba(
            15,
            23,
            42,
            0.03
        );

    transition:
        border-color 250ms ease,
        box-shadow 250ms ease;
}


/* =========================================================
   HOVER DA ÁREA DA IMAGEM
========================================================= */

.ironstore-produto-classico:hover
.ironstore-produto-classico-imagem-area {
    border-color: #e2e8f0;

    box-shadow:
        0 10px 28px
        rgba(
            15,
            23,
            42,
            0.08
        );
}


/* =========================================================
   IMAGEM
========================================================= */

.ironstore-produto-classico-imagem {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;

    opacity: 1;

    transform: scale(1);

    filter:
        saturate(0.98)
        contrast(1.01);

    transition:
        opacity 450ms ease,
        transform
        900ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        ),
        filter 450ms ease;
}


/* =========================================================
   IMAGEM SAINDO
========================================================= */

.ironstore-produto-classico-imagem.trocando {
    opacity: 0;

    transform: scale(1.035);

    filter:
        saturate(0.94)
        blur(1px);
}


/* =========================================================
   HOVER IMAGEM
========================================================= */

.ironstore-produto-classico:hover
.ironstore-produto-classico-imagem:not(.trocando) {
    transform: scale(1.035);
}


/* =========================================================
   SEM IMAGEM
========================================================= */

.ironstore-produto-classico-sem-imagem {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background:
        linear-gradient(
            145deg,
            #f8fafc,
            #f1f5f9
        );

    color: #94a3b8;

    font-size: 11px;
    font-weight: 650;

    letter-spacing: 0.2px;
}


/* =========================================================
   INDICADORES DE IMAGEM
========================================================= */

.ironstore-produto-classico-indicadores {
    position: absolute;

    left: 50%;
    bottom: 10px;

    z-index: 3;

    transform:
        translateX(-50%);

    display: flex;
    align-items: center;

    gap: 4px;

    padding: 5px 7px;

    border:
        1px solid
        rgba(
            255,
            255,
            255,
            0.15
        );

    border-radius: 999px;

    background:
        rgba(
            15,
            23,
            42,
            0.28
        );

    backdrop-filter:
        blur(8px);

    -webkit-backdrop-filter:
        blur(8px);

    opacity: 0.72;

    transition:
        opacity 200ms ease,
        background 200ms ease;
}


/* =========================================================
   INDICADORES NO HOVER
========================================================= */

.ironstore-produto-classico:hover
.ironstore-produto-classico-indicadores {
    opacity: 1;

    background:
        rgba(
            15,
            23,
            42,
            0.38
        );
}


/* =========================================================
   PONTO DO INDICADOR
========================================================= */

.ironstore-produto-classico-indicadores span {
    width: 5px;
    height: 5px;

    flex-shrink: 0;

    border-radius: 999px;

    background:
        rgba(
            255,
            255,
            255,
            0.55
        );

    transition:
        width 280ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        ),
        background 200ms ease;
}


/* =========================================================
   FOTO ATIVA
========================================================= */

.ironstore-produto-classico-indicadores span.ativo {
    width: 15px;

    background: #ffffff;
}


/* =========================================================
   INFORMAÇÕES
========================================================= */

.ironstore-produto-classico-informacoes {
    padding:
        12px
        4px
        0;
}


/* =========================================================
   NOME
========================================================= */

.ironstore-produto-classico-informacoes h3 {
    min-height: 38px;

    margin:
        0
        0
        8px;

    overflow: hidden;

    display: -webkit-box;

    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    color: #334155;

    font-size: 13px;
    font-weight: 600;

    line-height: 1.42;

    letter-spacing: -0.1px;

    transition:
        color 180ms ease;
}


/* =========================================================
   NOME NO HOVER
========================================================= */

.ironstore-produto-classico:hover
.ironstore-produto-classico-informacoes h3 {
    color: #0f172a;
}


/* =========================================================
   PREÇO NORMAL
========================================================= */

.ironstore-produto-classico-preco {
    color: #0f172a;

    font-size: 17px;
    font-weight: 800;

    line-height: 1.15;

    letter-spacing: -0.4px;
}


/* =========================================================
   PROMOÇÃO
========================================================= */

.ironstore-produto-classico-promocao {
    min-height: 38px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;

    gap: 2px;
}


/* =========================================================
   PREÇO ANTIGO
========================================================= */

.ironstore-produto-classico-preco-antigo {
    color: #94a3b8;

    font-size: 10px;
    font-weight: 550;

    line-height: 1.1;

    text-decoration:
        line-through;

    text-decoration-thickness:
        1px;
}


/* =========================================================
   PREÇO PROMOCIONAL
========================================================= */

.ironstore-produto-classico-promocao strong {
    color: #0f172a;

    font-size: 18px;
    font-weight: 820;

    line-height: 1.15;

    letter-spacing: -0.45px;
}

/* =========================================================
   IRONSTORE CLASSIC
   REFINAMENTO PREMIUM + RESPONSIVIDADE COMPLETA
========================================================= */


/* =========================================================
   CONTAINER GERAL DO CARRINHO
========================================================= */

.ironstore-perfil-carrinho-area {
    width: min(
        1380px,
        calc(100% - 48px)
    );

    margin:
        0
        auto;

    padding:
        54px
        0
        72px;

    box-sizing: border-box;
}


/* =========================================================
   CABEÇALHO PREMIUM
========================================================= */

.ironstore-perfil-carrinho-cabecalho {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 30px;

    margin-bottom: 34px;

    padding:
        0
        0
        22px;

    border-bottom:
        1px solid
        #e9edf2;
}


/* LINHA DE DESTAQUE */

.ironstore-perfil-carrinho-cabecalho::before {
    content: "";

    position: absolute;

    left: 0;
    bottom: -1px;

    width: 52px;
    height: 2px;

    border-radius: 999px;

    background:
        #0f172a;

    transition:
        width
        400ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        );
}


.ironstore-perfil-carrinho-cabecalho:hover::before {
    width: 76px;
}


/* =========================================================
   TÍTULO
========================================================= */

.ironstore-perfil-carrinho-titulo-area {
    min-width: 0;

    display: flex;
    align-items: center;

    gap: 15px;
}


/* =========================================================
   ÍCONE PREMIUM
========================================================= */

.ironstore-perfil-carrinho-titulo-icone {
    position: relative;

    width: 48px;
    height: 48px;

    flex: 0 0 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    border:
        1px solid
        #e2e8f0;

    border-radius: 14px;

    background:
        linear-gradient(
            145deg,
            #ffffff 0%,
            #f8fafc 100%
        );

    box-shadow:
        0 1px 2px
        rgba(
            15,
            23,
            42,
            0.03
        ),
        0 7px 20px
        rgba(
            15,
            23,
            42,
            0.05
        );

    transition:
        transform
        320ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        ),
        border-color
        250ms ease,
        box-shadow
        250ms ease;
}


/* REFLEXO DISCRETO */

.ironstore-perfil-carrinho-titulo-icone::after {
    content: "";

    position: absolute;

    width: 38px;
    height: 80px;

    top: -20px;
    left: -60px;

    transform:
        rotate(25deg);

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(
                255,
                255,
                255,
                0.85
            ),
            transparent
        );

    transition:
        left
        650ms ease;
}


.ironstore-perfil-carrinho-cabecalho:hover
.ironstore-perfil-carrinho-titulo-icone::after {
    left: 65px;
}


.ironstore-perfil-carrinho-cabecalho:hover
.ironstore-perfil-carrinho-titulo-icone {
    transform:
        translateY(-2px);

    border-color:
        #d7dee7;

    box-shadow:
        0 2px 4px
        rgba(
            15,
            23,
            42,
            0.03
        ),
        0 10px 26px
        rgba(
            15,
            23,
            42,
            0.075
        );
}


/* =========================================================
   TEXTO DO TÍTULO
========================================================= */

.ironstore-perfil-carrinho-titulo-conteudo {
    min-width: 0;
}


.ironstore-perfil-carrinho-label {
    display: block;

    margin-bottom: 5px;

    color:
        #94a3b8;

    font-size: 9px;
    font-weight: 750;

    line-height: 1;

    letter-spacing: 1.5px;

    text-transform: uppercase;
}


.ironstore-perfil-carrinho-titulo-conteudo h2 {
    margin: 0;

    color:
        #0f172a;

    font-size:
        clamp(
            27px,
            2.5vw,
            34px
        );

    font-weight: 780;

    line-height: 1.03;

    letter-spacing: -1px;
}


.ironstore-perfil-carrinho-titulo-conteudo p {
    max-width: 430px;

    margin:
        7px
        0
        0;

    color:
        #94a3b8;

    font-size: 10.5px;
    font-weight: 450;

    line-height: 1.45;
}


/* =========================================================
   CONTADOR DE PRODUTOS
========================================================= */

.ironstore-perfil-carrinho-total {
    position: relative;

    min-width: max-content;
    min-height: 34px;

    flex-shrink: 0;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding:
        0
        14px;

    box-sizing: border-box;

    border:
        1px solid
        #e2e8f0;

    border-radius: 999px;

    background:
        #ffffff;

    color:
        #64748b;

    font-size: 10px;
    font-weight: 700;

    box-shadow:
        0 2px 8px
        rgba(
            15,
            23,
            42,
            0.035
        );

    transition:
        border-color
        200ms ease,
        color
        200ms ease,
        box-shadow
        200ms ease,
        transform
        200ms ease;
}


.ironstore-perfil-carrinho-total::before {
    content: "";

    width: 5px;
    height: 5px;

    margin-right: 7px;

    border-radius: 50%;

    background:
        #0f172a;
}


.ironstore-perfil-carrinho-total:hover {
    transform:
        translateY(-1px);

    border-color:
        #cbd5e1;

    color:
        #334155;

    box-shadow:
        0 5px 14px
        rgba(
            15,
            23,
            42,
            0.06
        );
}


/* =========================================================
   GRID PREMIUM DO CARRINHO

   MESMA PROPORÇÃO DE CATEGORIAS
========================================================= */

.ironstore-perfil-carrinho-produtos {
    display: grid;

    grid-template-columns:
        repeat(
            5,
            minmax(0, 1fr)
        );

    gap:
        34px
        16px;

    align-items: stretch;
}


/* =========================================================
   ITEM
========================================================= */

.ironstore-perfil-carrinho-item {
    position: relative;

    min-width: 0;

    display: flex;
    flex-direction: column;

    isolation: isolate;

    animation:
        ironstoreCarrinhoEntrada
        480ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        )
        both;
}


/* ENTRADA PROGRESSIVA */

.ironstore-perfil-carrinho-item:nth-child(2) {
    animation-delay: 35ms;
}

.ironstore-perfil-carrinho-item:nth-child(3) {
    animation-delay: 70ms;
}

.ironstore-perfil-carrinho-item:nth-child(4) {
    animation-delay: 105ms;
}

.ironstore-perfil-carrinho-item:nth-child(5) {
    animation-delay: 140ms;
}


@keyframes ironstoreCarrinhoEntrada {

    from {
        opacity: 0;

        transform:
            translateY(10px);
    }

    to {
        opacity: 1;

        transform:
            translateY(0);
    }

}


/* =========================================================
   CARD
========================================================= */

.ironstore-perfil-carrinho-item
.ironstore-produto-classico {
    flex: 1;
}


/* MELHOR CONTINUIDADE VISUAL */

.ironstore-perfil-carrinho-item
.ironstore-produto-classico-imagem-area {
    transition:
        border-color
        260ms ease,
        box-shadow
        300ms ease,
        transform
        300ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        );
}


.ironstore-perfil-carrinho-item:hover
.ironstore-produto-classico-imagem-area {
    box-shadow:
        0 12px 30px
        rgba(
            15,
            23,
            42,
            0.075
        );
}


/* =========================================================
   REMOVER
========================================================= */

.ironstore-perfil-carrinho-remover {
    position: relative;

    width: calc(100% - 8px);
    height: 40px;

    margin:
        10px
        4px
        0;

    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding:
        0
        13px;

    box-sizing: border-box;

    border:
        1px solid
        #e6eaf0;

    border-radius: 9px;

    background:
        #ffffff;

    color:
        #64748b;

    font-family: inherit;

    cursor: pointer;

    box-shadow:
        0 1px 2px
        rgba(
            15,
            23,
            42,
            0.025
        );

    transition:
        transform
        180ms ease,
        color
        200ms ease,
        background-color
        200ms ease,
        border-color
        200ms ease,
        box-shadow
        240ms ease;
}


.ironstore-perfil-carrinho-remover::before {
    content: "";

    position: absolute;

    inset: 0;

    background:
        #0f172a;

    transform:
        translateY(105%);

    transition:
        transform
        340ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        );
}


/* CONTEÚDO ACIMA DO FUNDO */

.ironstore-perfil-carrinho-remover-texto,
.ironstore-perfil-carrinho-remover-icone {
    position: relative;

    z-index: 2;
}


.ironstore-perfil-carrinho-remover-texto {
    font-size: 10px;
    font-weight: 650;

    line-height: 1;

    transition:
        color
        250ms ease,
        transform
        300ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        );
}


.ironstore-perfil-carrinho-remover-icone {
    width: 21px;
    height: 21px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background:
        #f8fafc;

    color:
        #94a3b8;

    font-size: 15px;

    transition:
        color
        250ms ease,
        background-color
        250ms ease,
        transform
        340ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        );
}


/* HOVER */

@media (hover: hover) {

    .ironstore-perfil-carrinho-remover:hover {
        border-color:
            #0f172a;

        box-shadow:
            0 6px 18px
            rgba(
                15,
                23,
                42,
                0.12
            );
    }


    .ironstore-perfil-carrinho-remover:hover::before {
        transform:
            translateY(0);
    }


    .ironstore-perfil-carrinho-remover:hover
    .ironstore-perfil-carrinho-remover-texto {
        color:
            #ffffff;

        transform:
            translateX(2px);
    }


    .ironstore-perfil-carrinho-remover:hover
    .ironstore-perfil-carrinho-remover-icone {
        background:
            rgba(
                255,
                255,
                255,
                0.12
            );

        color:
            #ffffff;

        transform:
            rotate(90deg);
    }

}


.ironstore-perfil-carrinho-remover:active {
    transform:
        scale(0.985);
}


/* =========================================================
   REMOVENDO PRODUTO
========================================================= */

.ironstore-perfil-carrinho-item.removendo {
    pointer-events: none;

    animation:
        ironstoreCarrinhoRemover
        380ms
        cubic-bezier(
            0.4,
            0,
            0.2,
            1
        )
        forwards;
}


@keyframes ironstoreCarrinhoRemover {

    0% {
        opacity: 1;

        transform:
            scale(1)
            translateY(0);

        filter:
            blur(0);
    }

    100% {
        opacity: 0;

        transform:
            scale(0.97)
            translateY(7px);

        filter:
            blur(2px);
    }

}


/* =========================================================
   CARRINHO VAZIO — PREMIUM
========================================================= */

.ironstore-perfil-carrinho-vazio {
    position: relative;

    width: 100%;
    min-height: 330px;

    overflow: hidden;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    padding:
        52px
        30px;

    border:
        1px solid
        #e8edf2;

    border-radius: 18px;

    background:
        linear-gradient(
            180deg,
            #ffffff 0%,
            #fbfcfd 100%
        );

    text-align: center;

    box-shadow:
        0 8px 35px
        rgba(
            15,
            23,
            42,
            0.035
        );
}


/* LUZ DE FUNDO */

.ironstore-perfil-carrinho-vazio::before {
    content: "";

    position: absolute;

    top: -130px;
    left: 50%;

    width: 320px;
    height: 230px;

    transform:
        translateX(-50%);

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(
                226,
                232,
                240,
                0.65
            )
            0%,
            rgba(
                248,
                250,
                252,
                0
            )
            70%
        );

    pointer-events: none;
}


/* =========================================================
   LOADING
========================================================= */

.ironstore-perfil-carrinho-carregando {
    width: 100%;
    min-height: 290px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 13px;
}


/* =========================================================
   ERRO
========================================================= */

.ironstore-perfil-carrinho-erro {
    position: relative;

    width: 100%;

    box-sizing: border-box;

    padding:
        15px
        17px
        15px
        42px;

    border:
        1px solid
        #e2e8f0;

    border-radius: 11px;

    background:
        #fafbfc;

    color:
        #475569;

    font-size: 11px;
    font-weight: 550;
}


.ironstore-perfil-carrinho-erro::before {
    content: "!";

    position: absolute;

    left: 14px;
    top: 50%;

    width: 18px;
    height: 18px;

    transform:
        translateY(-50%);

    display: flex;
    align-items: center;
    justify-content: center;

    border:
        1px solid
        #cbd5e1;

    border-radius: 50%;

    color:
        #64748b;

    font-size: 10px;
    font-weight: 800;
}


/* =========================================================
   RESPONSIVIDADE — DESKTOP MÉDIO
   1200px
========================================================= */

@media (max-width: 1200px) {

    .ironstore-perfil-carrinho-produtos {
        grid-template-columns:
            repeat(
                4,
                minmax(0, 1fr)
            );

        gap:
            32px
            16px;
    }

}


/* =========================================================
   RESPONSIVIDADE — TABLET
   960px
========================================================= */

@media (max-width: 960px) {

    .ironstore-perfil-carrinho-area {
        width:
            calc(100% - 36px);

        padding:
            44px
            0
            60px;
    }


    .ironstore-perfil-carrinho-cabecalho {
        margin-bottom:
            28px;

        padding-bottom:
            18px;
    }


    .ironstore-perfil-carrinho-produtos {
        grid-template-columns:
            repeat(
                3,
                minmax(0, 1fr)
            );

        gap:
            30px
            14px;
    }

}


/* =========================================================
   RESPONSIVIDADE — TABLET PEQUENO
   720px
========================================================= */

@media (max-width: 720px) {

    .ironstore-perfil-carrinho-area {
        width:
            calc(100% - 28px);

        padding:
            36px
            0
            50px;
    }


    .ironstore-perfil-carrinho-cabecalho {
        align-items:
            flex-start;

        gap:
            18px;

        margin-bottom:
            25px;
    }


    .ironstore-perfil-carrinho-titulo-icone {
        width: 44px;
        height: 44px;

        flex-basis: 44px;

        border-radius: 12px;
    }


    .ironstore-perfil-carrinho-titulo-conteudo h2 {
        font-size:
            26px;
    }


    .ironstore-perfil-carrinho-titulo-conteudo p {
        max-width:
            320px;

        font-size:
            10px;
    }


    .ironstore-perfil-carrinho-total {
        min-height:
            30px;

        padding:
            0
            10px;

        font-size:
            9px;
    }


    .ironstore-perfil-carrinho-produtos {
        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            );

        gap:
            28px
            11px;
    }


    .ironstore-perfil-carrinho-remover {
        height:
            38px;

        margin-top:
            8px;

        padding:
            0
            11px;
    }

}


/* =========================================================
   RESPONSIVIDADE — MOBILE
   520px
========================================================= */

@media (max-width: 520px) {

    .ironstore-perfil-carrinho-area {
        width:
            calc(100% - 22px);

        padding:
            30px
            0
            44px;
    }


    /* -----------------------------------------
       CABEÇALHO
    ----------------------------------------- */

    .ironstore-perfil-carrinho-cabecalho {
        align-items:
            flex-start;

        gap:
            10px;

        margin-bottom:
            22px;

        padding-bottom:
            16px;
    }


    .ironstore-perfil-carrinho-cabecalho::before {
        width:
            38px;
    }


    .ironstore-perfil-carrinho-titulo-area {
        gap:
            10px;
    }


    .ironstore-perfil-carrinho-titulo-icone {
        width:
            40px;

        height:
            40px;

        flex-basis:
            40px;

        border-radius:
            11px;
    }


    .ironstore-perfil-carrinho-titulo-conteudo h2 {
        font-size:
            23px;

        letter-spacing:
            -0.65px;
    }


    .ironstore-perfil-carrinho-label {
        margin-bottom:
            4px;

        font-size:
            7px;

        letter-spacing:
            1.2px;
    }


    .ironstore-perfil-carrinho-titulo-conteudo p {
        max-width:
            240px;

        margin-top:
            5px;

        font-size:
            9px;

        line-height:
            1.35;
    }


    /* -----------------------------------------
       CONTADOR
    ----------------------------------------- */

    .ironstore-perfil-carrinho-total {
        min-height:
            27px;

        padding:
            0
            8px;

        font-size:
            8px;
    }


    .ironstore-perfil-carrinho-total::before {
        width:
            4px;

        height:
            4px;

        margin-right:
            5px;
    }


    /* -----------------------------------------
       GRID
    ----------------------------------------- */

    .ironstore-perfil-carrinho-produtos {
        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            );

        gap:
            25px
            8px;
    }


    /* -----------------------------------------
       CARD
    ----------------------------------------- */

    .ironstore-produto-classico {
        border-radius:
            12px;
    }


    .ironstore-produto-classico-imagem-area {
        border-radius:
            11px;
    }


    .ironstore-produto-classico-informacoes {
        padding:
            9px
            2px
            0;
    }


    .ironstore-produto-classico-informacoes h3 {
        min-height:
            34px;

        margin-bottom:
            6px;

        font-size:
            11px;

        line-height:
            1.4;
    }


    .ironstore-produto-classico-preco {
        font-size:
            15px;
    }


    .ironstore-produto-classico-promocao strong {
        font-size:
            16px;
    }


    .ironstore-produto-classico-preco-antigo {
        font-size:
            9px;
    }


    /* -----------------------------------------
       REMOVER
    ----------------------------------------- */

    .ironstore-perfil-carrinho-remover {
        width:
            calc(100% - 4px);

        height:
            36px;

        margin:
            7px
            2px
            0;

        padding:
            0
            9px;

        border-radius:
            8px;
    }


    .ironstore-perfil-carrinho-remover-texto {
        font-size:
            8.5px;
    }


    .ironstore-perfil-carrinho-remover-icone {
        width:
            18px;

        height:
            18px;

        font-size:
            13px;
    }


    /* -----------------------------------------
       VAZIO
    ----------------------------------------- */

    .ironstore-perfil-carrinho-vazio {
        min-height:
            280px;

        padding:
            38px
            20px;

        border-radius:
            14px;
    }

}


/* =========================================================
   RESPONSIVIDADE — MOBILE MUITO PEQUENO
   360px
========================================================= */

@media (max-width: 360px) {

    .ironstore-perfil-carrinho-area {
        width:
            calc(100% - 16px);
    }


    .ironstore-perfil-carrinho-cabecalho {
        flex-wrap:
            wrap;
    }


    .ironstore-perfil-carrinho-total {
        margin-left:
            50px;
    }


    .ironstore-perfil-carrinho-produtos {
        gap:
            22px
            7px;
    }


    .ironstore-produto-classico-informacoes h3 {
        font-size:
            10.5px;
    }


    .ironstore-perfil-carrinho-remover {
        padding:
            0
            8px;
    }


    .ironstore-perfil-carrinho-remover-texto {
        font-size:
            8px;
    }

}


/* =========================================================
   TOUCH DEVICES
========================================================= */

@media (hover: none) {

    .ironstore-produto-classico:hover {
        transform:
            none;
    }


    .ironstore-perfil-carrinho-cabecalho:hover
    .ironstore-perfil-carrinho-titulo-icone {
        transform:
            none;
    }


    .ironstore-perfil-carrinho-remover::before {
        display:
            none;
    }


    .ironstore-perfil-carrinho-remover:active {
        background:
            #f8fafc;

        border-color:
            #cbd5e1;
    }

}


/* =========================================================
   ACESSIBILIDADE — REDUZIR ANIMAÇÕES
========================================================= */

@media (prefers-reduced-motion: reduce) {

    .ironstore-perfil-carrinho-item,
    .ironstore-perfil-carrinho-item.removendo,
    .ironstore-produto-classico,
    .ironstore-produto-classico-imagem,
    .ironstore-perfil-carrinho-remover,
    .ironstore-perfil-carrinho-titulo-icone {
        animation:
            none !important;

        transition:
            none !important;
    }

}





/* =========================================================
   CATEGORIAS — RESPONSIVIDADE FINAL
   ESTE BLOCO DEVE FICAR NO FINAL DO ARQUIVO
========================================================= */


/* =========================================================
   PROTEÇÃO GLOBAL CONTRA OVERFLOW
========================================================= */

.ironstore-categorias-classico,
.ironstore-categorias-classico * {
    box-sizing: border-box;
}

.ironstore-categorias-classico {
    width: 100%;
    max-width: 100%;

    overflow-x: hidden;
}

.ironstore-categorias-classico-conteudo {
    max-width: 1380px;
}

.ironstore-categorias-classico-grid {
    width: 100%;

    min-width: 0;
}

.ironstore-categorias-classico-grid
.ironstore-produto-classico {
    width: 100%;

    min-width: 0;
    max-width: 100%;
}

.ironstore-categorias-classico-grid
.ironstore-produto-classico-clique {
    width: 100%;

    min-width: 0;
    max-width: 100%;
}

.ironstore-categorias-classico-grid
.ironstore-produto-classico-imagem-area {
    width: 100%;

    min-width: 0;
    max-width: 100%;
}


/* =========================================================
   DESKTOP GRANDE
   5 COLUNAS
========================================================= */

@media (min-width: 1281px) {

    .ironstore-categorias-classico-grid {
        grid-template-columns:
            repeat(
                5,
                minmax(0, 1fr)
            );

        column-gap: 16px;
        row-gap: 30px;
    }

}


/* =========================================================
   NOTEBOOK
   4 COLUNAS
========================================================= */

@media (max-width: 1280px) {

    .ironstore-categorias-classico {
        padding:
            38px
            0
            50px;
    }

    .ironstore-categorias-classico-conteudo {
        width:
            calc(100% - 40px);
    }

    .ironstore-categorias-classico-grid {
        grid-template-columns:
            repeat(
                4,
                minmax(0, 1fr)
            );

        column-gap: 15px;
        row-gap: 28px;
    }

}


/* =========================================================
   TABLET
   3 COLUNAS
========================================================= */

@media (max-width: 1000px) {

    .ironstore-categorias-classico {
        padding:
            34px
            0
            44px;
    }

    .ironstore-categorias-classico-conteudo {
        width:
            calc(100% - 32px);
    }


    /* CABEÇALHO */

    .ironstore-categorias-classico-cabecalho {
        margin-bottom: 20px;
    }

    .ironstore-categorias-classico-titulo-linha h2 {
        font-size: 30px;
    }


    /* GRID */

    .ironstore-categorias-classico-grid {
        grid-template-columns:
            repeat(
                3,
                minmax(0, 1fr)
            );

        column-gap: 14px;
        row-gap: 27px;
    }

}


/* =========================================================
   TABLET PEQUENO
   2 COLUNAS
========================================================= */

@media (max-width: 760px) {

    .ironstore-categorias-classico {
        padding:
            28px
            0
            38px;
    }

    .ironstore-categorias-classico-conteudo {
        width:
            calc(100% - 24px);

        max-width: none;

        margin:
            0
            auto;
    }


    /* =====================================================
       CABEÇALHO
    ===================================================== */

    .ironstore-categorias-classico-cabecalho {
        margin-bottom: 17px;
    }

    .ironstore-categorias-classico-cabecalho-esquerda {
        width: 100%;

        min-width: 0;
    }

    .ironstore-categorias-classico-subtitulo {
        margin-bottom: 6px;

        font-size: 9px;

        letter-spacing: 1.1px;
    }

    .ironstore-categorias-classico-titulo-linha {
        width: 100%;

        display: flex;

        align-items: center;
        justify-content: space-between;

        gap: 10px;
    }

    .ironstore-categorias-classico-titulo-linha h2 {
        min-width: 0;

        font-size: 25px;

        line-height: 1.05;

        letter-spacing: -0.8px;
    }


    /* =====================================================
       BOTÃO CATEGORIAS
    ===================================================== */

    .ironstore-categorias-classico-botao {
        height: 34px;

        flex-shrink: 0;

        padding:
            0
            8px
            0
            11px;

        gap: 6px;

        border-radius: 8px;

        font-size: 10px;
    }

    .ironstore-categorias-classico-seta {
        width: 18px;
        height: 18px;

        border-radius: 5px;

        font-size: 13px;
    }


    /* =====================================================
       OPÇÕES DAS CATEGORIAS
    ===================================================== */

    .ironstore-categorias-classico-opcoes-area {
        width: 100%;

        max-width: 100%;
    }

    .ironstore-categorias-classico-opcoes {
        width: 100%;

        max-width: 100%;

        gap: 6px;

        overflow-x: auto;
        overflow-y: hidden;

        padding-bottom: 5px;

        scrollbar-width: none;
    }

    .ironstore-categorias-classico-opcoes::-webkit-scrollbar {
        display: none;
    }

    .ironstore-categorias-classico-categoria {
        flex-shrink: 0;

        white-space: nowrap;

        font-size: 10px;
    }


    /* =====================================================
       RESULTADO
    ===================================================== */

    .ironstore-categorias-classico-resultado {
        min-height: 28px;

        margin-bottom: 14px;

        padding-bottom: 9px;

        gap: 7px;
    }

    .ironstore-categorias-classico-resultado > span {
        font-size: 11px;
    }

    .ironstore-categorias-classico-resultado small {
        padding:
            2px
            6px;

        font-size: 8px;
    }


    /* =====================================================
       GRID REAL MOBILE
       2 COLUNAS
    ===================================================== */

    .ironstore-categorias-classico-grid {
        display: grid;

        width: 100%;

        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            );

        column-gap: 10px;
        row-gap: 24px;

        align-items: start;
    }


    /* =====================================================
       CARD
    ===================================================== */

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico {
        width: 100%;

        min-width: 0;
        max-width: 100%;

        border-radius: 12px;

        overflow: visible;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico:hover {
        transform: none;
    }


    /* =====================================================
       ÁREA CLICÁVEL
    ===================================================== */

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-clique {
        width: 100%;

        min-width: 0;

        display: block;
    }


    /* =====================================================
       IMAGEM
    ===================================================== */

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-imagem-area {
        width: 100%;

        min-width: 0;

        aspect-ratio: 1 / 1;

        border-radius: 11px;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-imagem {
        width: 100%;
        height: 100%;

        object-fit: cover;
    }


    /* =====================================================
       INDICADORES DA FOTO
    ===================================================== */

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-indicadores {
        bottom: 6px;

        gap: 3px;

        padding:
            3px
            5px;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-indicadores span {
        width: 4px;
        height: 4px;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-indicadores span.ativo {
        width: 11px;
    }


    /* =====================================================
       INFORMAÇÕES
    ===================================================== */

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-informacoes {
        width: 100%;

        min-width: 0;

        padding:
            9px
            2px
            0;
    }


    /* =====================================================
       NOME
    ===================================================== */

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-informacoes h3 {
        width: 100%;

        min-width: 0;

        min-height: 32px;

        margin:
            0
            0
            6px;

        font-size: 11px;

        line-height: 1.4;

        overflow: hidden;

        overflow-wrap: anywhere;

        -webkit-line-clamp: 2;
    }


    /* =====================================================
       VARIEDADES
    ===================================================== */

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-variedades {
        width: 100%;

        min-width: 0;

        margin:
            8px
            0
            9px;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-variedades-titulo {
        margin-bottom: 6px;

        font-size: 7px;

        letter-spacing: 0.7px;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-variedades-lista {
        width: 100%;

        min-width: 0;

        display: flex;

        flex-wrap: nowrap;

        gap: 4px;

        overflow-x: auto;
        overflow-y: hidden;

        padding-bottom: 3px;

        scrollbar-width: none;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-variedades-lista::-webkit-scrollbar {
        display: none;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-variedade {
        flex:
            0
            0
            auto;

        min-width: 32px;
        min-height: 29px;

        padding:
            5px
            8px;

        border-radius: 7px;

        font-size: 9px;

        white-space: nowrap;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-variedade.selecionada {
        padding-right: 23px;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-variedade.selecionada::after {
        right: 6px;

        width: 12px;
        height: 12px;

        font-size: 7px;
    }


    /* =====================================================
       PREÇO
    ===================================================== */

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-preco {
        max-width: 100%;

        font-size: 15px;

        line-height: 1.1;

        overflow-wrap: anywhere;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-promocao {
        min-height: 33px;

        gap: 1px;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-preco-antigo {
        font-size: 8px;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-promocao strong {
        max-width: 100%;

        font-size: 16px;

        line-height: 1.1;

        overflow-wrap: anywhere;
    }


    /* =====================================================
       CARRINHO
    ===================================================== */

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-carrinho-area {
        width: 100%;

        min-width: 0;

        padding:
            9px
            2px
            0;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-carrinho {
        width: 100%;

        min-width: 0;

        height: 36px;

        border-radius: 8px;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-carrinho-adicionar,
    .ironstore-categorias-classico-grid
    .ironstore-produto-carrinho-adicionado {
        min-width: 0;

        padding:
            0
            8px;

        font-size: 8px;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-carrinho-adicionar > span:first-child,
    .ironstore-categorias-classico-grid
    .ironstore-produto-carrinho-adicionado > span:not(
        .ironstore-produto-carrinho-check
    ) {
        min-width: 0;

        overflow: hidden;

        text-overflow: ellipsis;

        white-space: nowrap;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-carrinho-seta {
        flex-shrink: 0;

        margin-left: 4px;

        font-size: 13px;
    }

}


/* =========================================================
   CELULAR
   ATÉ 480px
========================================================= */

@media (max-width: 480px) {

    .ironstore-categorias-classico {
        padding:
            23px
            0
            32px;
    }

    .ironstore-categorias-classico-conteudo {
        width:
            calc(100% - 16px);
    }


    /* CABEÇALHO */

    .ironstore-categorias-classico-subtitulo {
        font-size: 8px;
    }

    .ironstore-categorias-classico-titulo-linha {
        gap: 7px;
    }

    .ironstore-categorias-classico-titulo-linha h2 {
        font-size: 21px;

        letter-spacing: -0.6px;
    }

    .ironstore-categorias-classico-botao {
        height: 31px;

        padding:
            0
            6px
            0
            9px;

        gap: 5px;

        font-size: 9px;
    }

    .ironstore-categorias-classico-seta {
        width: 17px;
        height: 17px;

        font-size: 12px;
    }


    /* GRID */

    .ironstore-categorias-classico-grid {
        grid-template-columns:
            repeat(
                2,
                minmax(0, 1fr)
            );

        column-gap: 8px;
        row-gap: 21px;
    }


    /* NOME */

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-informacoes {
        padding:
            8px
            1px
            0;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-informacoes h3 {
        min-height: 30px;

        margin-bottom: 5px;

        font-size: 10.5px;

        line-height: 1.35;
    }


    /* PREÇO */

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-preco {
        font-size: 14px;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-promocao strong {
        font-size: 15px;
    }


    /* VARIEDADES */

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-variedade {
        min-width: 29px;
        min-height: 27px;

        padding:
            4px
            7px;

        font-size: 8px;
    }


    /* CARRINHO */

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-carrinho-area {
        padding:
            8px
            1px
            0;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-carrinho {
        height: 34px;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-carrinho-adicionar,
    .ironstore-categorias-classico-grid
    .ironstore-produto-carrinho-adicionado {
        padding:
            0
            7px;

        font-size: 7.5px;
    }

}


/* =========================================================
   CELULAR MUITO PEQUENO
   380px
========================================================= */

@media (max-width: 380px) {

    .ironstore-categorias-classico-conteudo {
        width:
            calc(100% - 12px);
    }


    /* CABEÇALHO */

    .ironstore-categorias-classico-titulo-linha h2 {
        font-size: 19px;
    }

    .ironstore-categorias-classico-botao {
        height: 29px;

        font-size: 8px;
    }


    /* PRODUTOS */

    .ironstore-categorias-classico-grid {
        column-gap: 6px;

        row-gap: 19px;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-imagem-area {
        border-radius: 9px;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-informacoes h3 {
        min-height: 28px;

        font-size: 10px;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-preco {
        font-size: 13px;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-promocao strong {
        font-size: 14px;
    }


    /* BOTÃO */

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-carrinho {
        height: 32px;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-carrinho-adicionar,
    .ironstore-categorias-classico-grid
    .ironstore-produto-carrinho-adicionado {
        padding:
            0
            6px;

        font-size: 7px;
    }

}


/* =========================================================
   TELAS EXTREMAMENTE ESTREITAS
   320px
========================================================= */

@media (max-width: 320px) {

    .ironstore-categorias-classico-conteudo {
        width:
            calc(100% - 10px);
    }

    .ironstore-categorias-classico-grid {
        column-gap: 5px;
    }

    .ironstore-categorias-classico-titulo-linha h2 {
        font-size: 18px;
    }

    /*
       Mantém 2 colunas.
       Em vez de quebrar o layout,
       reduz elementos secundários.
    */

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-variedades-titulo {
        display: none;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-classico-variedades {
        margin-top: 6px;
    }

    .ironstore-categorias-classico-grid
    .ironstore-produto-carrinho-seta {
        display: none;
    }

}


/* =========================================================
   TOUCH
========================================================= */

@media (hover: none) {

    .ironstore-categorias-classico
    .ironstore-produto-classico:hover {
        transform: none;
    }

    .ironstore-categorias-classico
    .ironstore-produto-classico:hover
    .ironstore-produto-classico-imagem:not(.trocando) {
        transform: scale(1);
    }

}


/* =========================================================
   REDUÇÃO DE MOVIMENTO
========================================================= */

@media (prefers-reduced-motion: reduce) {

    .ironstore-categorias-classico *,
    .ironstore-categorias-classico *::before,
    .ironstore-categorias-classico *::after {
        scroll-behavior: auto !important;

        transition-duration:
            0.01ms !important;

        animation-duration:
            0.01ms !important;

        animation-iteration-count:
            1 !important;
    }


/* =========================================================
   CARREGAR MAIS PRODUTOS
   CLÁSSICO / PREMIUM / RESPONSIVO
========================================================= */

.ironstore-categorias-classico-carregar-area {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    margin-top: 42px;
    padding-top: 4px;
}


/* =========================================================
   BOTÃO
========================================================= */

.ironstore-categorias-classico-carregar {
    position: relative;

    min-width: 190px;
    height: 44px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    box-sizing: border-box;

    padding:
        0
        12px
        0
        18px;

    border:
        1px solid
        #dfe4ea;

    border-radius: 11px;

    background:
        #ffffff;

    color:
        #334155;

    font-family: inherit;

    font-size: 11px;
    font-weight: 700;

    letter-spacing: 0.01em;

    cursor: pointer;

    box-shadow:
        0 2px 5px
        rgba(
            15,
            23,
            42,
            0.035
        );

    transition:
        border-color 200ms ease,
        background-color 200ms ease,
        color 200ms ease,
        box-shadow 200ms ease,
        transform 180ms ease;
}


/* =========================================================
   TEXTO
========================================================= */

.ironstore-categorias-classico-carregar > span:first-child {
    white-space: nowrap;
}


/* =========================================================
   QUANTIDADE
========================================================= */

.ironstore-categorias-classico-carregar small {
    min-width: 28px;
    height: 22px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    padding:
        0
        7px;

    border-radius: 6px;

    background:
        #f1f5f9;

    color:
        #64748b;

    font-size: 9px;
    font-weight: 750;

    line-height: 1;

    transition:
        background-color 200ms ease,
        color 200ms ease;
}


/* =========================================================
   ÍCONE
========================================================= */

.ironstore-categorias-classico-carregar-icone {
    width: 25px;
    height: 25px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    margin-left: 2px;

    border-radius: 7px;

    background:
        #f8fafc;

    color:
        #94a3b8;

    font-size: 15px;
    font-weight: 500;

    line-height: 1;

    transition:
        background-color 200ms ease,
        color 200ms ease,
        transform 260ms
        cubic-bezier(
            0.22,
            1,
            0.36,
            1
        );
}


/* =========================================================
   HOVER
========================================================= */

.ironstore-categorias-classico-carregar:hover {
    border-color:
        #cbd5e1;

    background:
        #fafbfc;

    color:
        #0f172a;

    box-shadow:
        0 7px 20px
        rgba(
            15,
            23,
            42,
            0.07
        );

    transform:
        translateY(-1px);
}


.ironstore-categorias-classico-carregar:hover small {
    background:
        #e2e8f0;

    color:
        #334155;
}


.ironstore-categorias-classico-carregar:hover
.ironstore-categorias-classico-carregar-icone {
    background:
        #0f172a;

    color:
        #ffffff;

    transform:
        translateY(2px);
}


/* =========================================================
   CLIQUE
========================================================= */

.ironstore-categorias-classico-carregar:active {
    transform:
        translateY(0)
        scale(0.98);
}


/* =========================================================
   FOCO
========================================================= */

.ironstore-categorias-classico-carregar:focus-visible {
    outline:
        2px solid
        rgba(
            15,
            23,
            42,
            0.16
        );

    outline-offset:
        3px;
}


/* =========================================================
   MOBILE
========================================================= */

@media (
    max-width: 760px
) {

    .ironstore-categorias-classico-carregar-area {
        margin-top: 32px;
    }


    .ironstore-categorias-classico-carregar {
        min-width: 180px;
        height: 42px;

        padding:
            0
            10px
            0
            16px;

        gap: 9px;

        border-radius: 10px;
    }


    .ironstore-categorias-classico-carregar-icone {
        width: 24px;
        height: 24px;
    }

}


/* =========================================================
   MOBILE PEQUENO
========================================================= */

@media (
    max-width: 480px
) {

    .ironstore-categorias-classico-carregar-area {
        margin-top: 27px;

        padding:
            0
            4px;
    }


    .ironstore-categorias-classico-carregar {
        width: 100%;
        max-width: 260px;

        min-width: 0;

        height: 42px;
    }

}


/* =========================================================
   TOUCH
========================================================= */

@media (
    hover: none
) {

    .ironstore-categorias-classico-carregar:hover {
        transform: none;

        background:
            #ffffff;

        border-color:
            #dfe4ea;

        box-shadow:
            0 2px 5px
            rgba(
                15,
                23,
                42,
                0.035
            );
    }


    .ironstore-categorias-classico-carregar:active {
        transform:
            scale(0.98);

        background:
            #f8fafc;
    }

}

}



/* =========================================================
   AÇÕES DO CABEÇALHO DO CARRINHO
========================================================= */

.ironstore-perfil-carrinho-acoes {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    gap: 10px;

    flex-shrink: 0;
}


/* =========================================================
   FINALIZAR COMPRA
========================================================= */

.ironstore-perfil-carrinho-finalizar {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    gap: 9px;

    min-height: 42px;

    padding:
        0
        16px;

    border: 0;
    border-radius: 11px;

    background:
        #0f172a;

    color:
        #ffffff;

    font-family: inherit;

    font-size: 12px;
    font-weight: 700;

    line-height: 1;

    white-space: nowrap;

    cursor: pointer;

    box-shadow:
        0 5px 14px
        rgba(
            15,
            23,
            42,
            0.13
        );

    transition:
        transform 0.18s ease,
        background 0.18s ease,
        box-shadow 0.18s ease;
}

.ironstore-perfil-carrinho-finalizar:hover {
    background:
        #1e293b;

    transform:
        translateY(-1px);

    box-shadow:
        0 8px 18px
        rgba(
            15,
            23,
            42,
            0.16
        );
}

.ironstore-perfil-carrinho-finalizar:active {
    transform:
        translateY(0);
}


/* =========================================================
   SETA
========================================================= */

.ironstore-perfil-carrinho-finalizar-icone {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 21px;
    height: 21px;

    border-radius: 50%;

    background:
        rgba(
            255,
            255,
            255,
            0.12
        );

    font-size: 13px;
    font-weight: 700;

    transition:
        transform 0.18s ease;
}

.ironstore-perfil-carrinho-finalizar:hover
.ironstore-perfil-carrinho-finalizar-icone {
    transform:
        translateX(2px);
}


/* =========================================================
   RESPONSIVO
========================================================= */

@media (
    max-width: 720px
) {

    .ironstore-perfil-carrinho-cabecalho {
        align-items: flex-start;
    }

    .ironstore-perfil-carrinho-acoes {
        flex-direction: column;

        align-items: flex-end;

        gap: 7px;
    }

    .ironstore-perfil-carrinho-finalizar {
        min-height: 39px;

        padding:
            0
            13px;

        border-radius: 10px;

        font-size: 11px;
    }

}


@media (
    max-width: 520px
) {

    .ironstore-perfil-carrinho-cabecalho {
        flex-direction: column;

        gap: 15px;
    }

    .ironstore-perfil-carrinho-acoes {
        flex-direction: row;

        align-items: center;
        justify-content: space-between;

        width: 100%;
    }

    .ironstore-perfil-carrinho-finalizar {
        flex: 1;

        min-width: 0;
    }

}


@media (
    max-width: 380px
) {

    .ironstore-perfil-carrinho-finalizar {
        min-height: 38px;

        padding:
            0
            11px;

        font-size: 10px;
    }

    .ironstore-perfil-carrinho-finalizar-icone {
        width: 19px;
        height: 19px;

        font-size: 12px;
    }

}
`;

export default classicoCategorias;