const classicoApresentacao = `

/* =========================================================
   APRESENTAÇÃO CLÁSSICA
========================================================= */

.ironstore-apresentacao-classico {
    position: relative;

    width: min(
        1380px,
        calc(100% - 32px)
    );

    height: clamp(
        420px,
        62vh,
        650px
    );

    margin: 0 auto;

    overflow: hidden;

    border-radius: 22px;

    background: #0f172a;

    isolation: isolate;
}


/* =========================================================
   ÁREA DA IMAGEM
========================================================= */

.ironstore-apresentacao-classico-imagem-area {
    position: absolute;

    inset: 0;

    overflow: hidden;

    z-index: 1;
}


/* =========================================================
   IMAGEM
========================================================= */

.ironstore-apresentacao-classico-imagem {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;

    transform:
        scale(1.015);

    opacity: 1;

    filter:
        saturate(0.96)
        contrast(1.02);

    transition:
        opacity 400ms ease,
        transform 700ms cubic-bezier(
            0.22,
            1,
            0.36,
            1
        ),
        filter 400ms ease;
}


/* =========================================================
   IMAGEM SAINDO
========================================================= */

.ironstore-apresentacao-imagem-saindo {
    opacity: 0;

    transform:
        scale(1.045);

    filter:
        saturate(0.9)
        blur(2px);
}


/* =========================================================
   OVERLAY

   Escurece principalmente a região do texto.
========================================================= */

.ironstore-apresentacao-classico-overlay {
    position: absolute;

    inset: 0;

    z-index: 2;

    pointer-events: none;

    background:
        linear-gradient(
            90deg,
            rgba(4, 10, 22, 0.76) 0%,
            rgba(4, 10, 22, 0.56) 35%,
            rgba(4, 10, 22, 0.20) 66%,
            rgba(4, 10, 22, 0.08) 100%
        ),
        linear-gradient(
            0deg,
            rgba(4, 10, 22, 0.20),
            transparent 45%
        );
}


/* =========================================================
   TEXTO
========================================================= */

.ironstore-apresentacao-classico-texto-area {
    position: relative;

    z-index: 3;

    width: min(
        1180px,
        calc(100% - 80px)
    );

    height: 100%;

    margin: 0 auto;

    display: flex;

    align-items: center;
}


/* =========================================================
   CONTEÚDO DO TEXTO
========================================================= */

.ironstore-apresentacao-classico-texto {
    width: min(
        620px,
        70%
    );

    display: flex;

    flex-direction: column;

    align-items: flex-start;

    gap: 13px;

    opacity: 1;

    transform:
        translateY(0);

    filter:
        blur(0);

    transition:
        opacity 300ms ease,
        transform 450ms cubic-bezier(
            0.22,
            1,
            0.36,
            1
        ),
        filter 300ms ease;
}


/* =========================================================
   MENSAGEM SAINDO
========================================================= */

.ironstore-apresentacao-mensagem-saindo {
    opacity: 0;

    transform:
        translateY(12px);

    filter:
        blur(3px);
}


/* =========================================================
   DETALHE
========================================================= */

.ironstore-apresentacao-classico-detalhe {
    display: inline-flex;

    align-items: center;

    min-height: 29px;

    padding: 0 12px;

    border:
        1px solid rgba(
            255,
            255,
            255,
            0.25
        );

    border-radius: 999px;

    background:
        rgba(
            255,
            255,
            255,
            0.10
        );

    backdrop-filter:
        blur(8px);

    color:
        rgba(
            255,
            255,
            255,
            0.92
        );

    font-size: 11px;

    font-weight: 700;

    letter-spacing: 1.2px;

    text-transform: uppercase;
}


/* =========================================================
   TÍTULO
========================================================= */

.ironstore-apresentacao-classico-texto h1 {
    margin: 0;

    color: #ffffff;

    font-size:
        clamp(
            34px,
            5vw,
            68px
        );

    font-weight: 750;

    line-height: 1.04;

    letter-spacing: -2px;

    text-wrap: balance;

    text-shadow:
        0 2px 18px
        rgba(
            0,
            0,
            0,
            0.16
        );
}


/* =========================================================
   TABLET
========================================================= */

@media (
    max-width: 900px
) {

    .ironstore-apresentacao-classico {
        height:
            clamp(
                390px,
                58vh,
                560px
            );

        border-radius: 18px;
    }


    .ironstore-apresentacao-classico-texto-area {
        width:
            calc(
                100% - 56px
            );
    }


    .ironstore-apresentacao-classico-texto {
        width: 75%;
    }


    .ironstore-apresentacao-classico-texto h1 {
        letter-spacing: -1.5px;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (
    max-width: 600px
) {

    .ironstore-apresentacao-classico {
        width:
            calc(
                100% - 20px
            );

        height:
            430px;

        border-radius: 16px;
    }


    .ironstore-apresentacao-classico-overlay {
        background:
            linear-gradient(
                0deg,
                rgba(4, 10, 22, 0.78) 0%,
                rgba(4, 10, 22, 0.48) 50%,
                rgba(4, 10, 22, 0.12) 100%
            );
    }


    .ironstore-apresentacao-classico-texto-area {
        width:
            calc(
                100% - 36px
            );

        align-items:
            flex-end;

        padding-bottom:
            42px;

        box-sizing:
            border-box;
    }


    .ironstore-apresentacao-classico-texto {
        width: 100%;

        gap: 10px;
    }


    .ironstore-apresentacao-classico-texto h1 {
        font-size:
            clamp(
                29px,
                9vw,
                42px
            );

        line-height: 1.08;

        letter-spacing: -1px;
    }


    .ironstore-apresentacao-classico-detalhe {
        min-height: 27px;

        padding:
            0 10px;

        font-size: 10px;
    }

}


/* =========================================================
   ACESSIBILIDADE

   Se o usuário desativou animações no sistema,
   reduzimos as transições.
========================================================= */

@media (
    prefers-reduced-motion: reduce
) {

    .ironstore-apresentacao-classico-imagem,
    .ironstore-apresentacao-classico-texto {
        transition:
            opacity 100ms linear;
    }

}

`;

export default classicoApresentacao;