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
/* =========================================================
   IRONSTORE PREMIUM ENTRANCE
   Animação cinematográfica de entrada
========================================================= */

/* ESTADO INICIAL DO BANNER */

.ironstore-apresentacao-classico {
    animation:
        ironApresentacaoEntrada
        1.15s
        cubic-bezier(0.16, 1, 0.3, 1)
        both;
}


/* =========================================================
   REVELAÇÃO DA IMAGEM
========================================================= */

.ironstore-apresentacao-classico-imagem-area {
    animation:
        ironImagemRevelacao
        1.65s
        cubic-bezier(0.16, 1, 0.3, 1)
        both;
}


/* MOVIMENTO DA IMAGEM */

.ironstore-apresentacao-classico-imagem {
    animation:
        ironImagemZoomEntrada
        2s
        cubic-bezier(0.16, 1, 0.3, 1)
        both;
}


/* =========================================================
   OVERLAY
========================================================= */

.ironstore-apresentacao-classico-overlay {
    opacity: 0;

    animation:
        ironOverlayEntrada
        1.1s
        ease-out
        0.35s
        forwards;
}


/* =========================================================
   ÁREA DO TEXTO
========================================================= */

.ironstore-apresentacao-classico-texto-area {
    animation:
        ironTextoAreaEntrada
        1.1s
        cubic-bezier(0.16, 1, 0.3, 1)
        0.35s
        both;
}


/* =========================================================
   CONTEÚDO
========================================================= */

.ironstore-apresentacao-classico-texto {
    animation:
        ironTextoEntrada
        1.15s
        cubic-bezier(0.16, 1, 0.3, 1)
        0.55s
        both;
}


/* TÍTULO */

.ironstore-apresentacao-classico-texto h1 {
    animation:
        ironTituloEntrada
        1.2s
        cubic-bezier(0.16, 1, 0.3, 1)
        0.7s
        both;
}


/* DETALHE, CASO ESTEJA PRESENTE NO MODELO */

.ironstore-apresentacao-classico-detalhe {
    animation:
        ironDetalheEntrada
        0.9s
        cubic-bezier(0.16, 1, 0.3, 1)
        0.6s
        both;
}


/* =========================================================
   KEYFRAMES
========================================================= */

/* BANNER */

@keyframes ironApresentacaoEntrada {
    0% {
        opacity: 0;
        transform: translateY(32px) scale(0.975);
        filter: blur(8px);
    }

    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0);
    }
}


/* REVELAÇÃO CINEMATOGRÁFICA */

@keyframes ironImagemRevelacao {
    0% {
        clip-path: inset(0 100% 0 0);
    }

    100% {
        clip-path: inset(0 0 0 0);
    }
}


/* ZOOM DA IMAGEM */

@keyframes ironImagemZoomEntrada {
    0% {
        transform: scale(1.18) translateX(3%);
        filter: brightness(0.65) saturate(0.75);
    }

    100% {
        transform: scale(1.015) translateX(0);
        filter: brightness(1) saturate(0.96);
    }
}


/* OVERLAY */

@keyframes ironOverlayEntrada {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}


/* ÁREA DO TEXTO */

@keyframes ironTextoAreaEntrada {
    0% {
        opacity: 0;
        transform: translateX(-45px);
        filter: blur(8px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
        filter: blur(0);
    }
}


/* CONTEÚDO */

@keyframes ironTextoEntrada {
    0% {
        opacity: 0;
        transform: translateX(-35px) translateY(12px);
        filter: blur(7px);
    }

    100% {
        opacity: 1;
        transform: translateX(0) translateY(0);
        filter: blur(0);
    }
}


/* TÍTULO */

@keyframes ironTituloEntrada {
    0% {
        opacity: 0;
        transform: translateY(28px);
        letter-spacing: 2px;
        filter: blur(10px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
        letter-spacing: inherit;
        filter: blur(0);
    }
}


/* DETALHE */

@keyframes ironDetalheEntrada {
    0% {
        opacity: 0;
        transform: translateY(-15px) scale(0.9);
        filter: blur(5px);
    }

    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0);
    }
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

    .ironstore-apresentacao-classico {
        animation-duration: 1s;
    }

    .ironstore-apresentacao-classico-imagem-area {
        animation-duration: 1.4s;
    }

    .ironstore-apresentacao-classico-texto-area {
        animation-delay: 0.3s;
    }

    .ironstore-apresentacao-classico-texto {
        animation-delay: 0.45s;
    }

    .ironstore-apresentacao-classico-texto h1 {
        animation-delay: 0.6s;
    }

}


/* =========================================================
   ACESSIBILIDADE
========================================================= */

@media (prefers-reduced-motion: reduce) {

    .ironstore-apresentacao-classico,
    .ironstore-apresentacao-classico-imagem-area,
    .ironstore-apresentacao-classico-imagem,
    .ironstore-apresentacao-classico-overlay,
    .ironstore-apresentacao-classico-texto-area,
    .ironstore-apresentacao-classico-texto,
    .ironstore-apresentacao-classico-texto h1,
    .ironstore-apresentacao-classico-detalhe {
        animation: none !important;
        opacity: 1;
        filter: none;
        clip-path: none;
        transform: none;
    }

}
/* Título principal */
.ironstore-apresentacao-classico-texto h1.ironstore-apresentacao-titulo-letras {
    animation: none !important;
    white-space: normal;
    overflow-wrap: normal;
    word-break: normal;
}

/* Mantém cada palavra inteira durante a quebra de linha */
.ironstore-apresentacao-palavra-animada {
    display: inline-block;
    white-space: nowrap;
}

/* Animação individual de cada letra */
.ironstore-apresentacao-letra-animada {
    display: inline-block;
    position: relative;

    opacity: 0;

    transform:
        translate3d(
            var(--letra-x),
            var(--letra-y),
            0
        )
        rotate(var(--letra-rotacao))
        scale(0.94);

    filter: blur(7px);

    transform-origin: center center;

    animation:
        ironLetraCinematicaEntrada
        1120ms
        cubic-bezier(0.22, 1, 0.36, 1)
        var(--letra-atraso, 0ms)
        both;

    backface-visibility: hidden;
    will-change: transform, opacity, filter;
}

/* Movimento de chegada */
@keyframes ironLetraCinematicaEntrada {
    0% {
        opacity: 0;

        transform:
            translate3d(
                var(--letra-x),
                var(--letra-y),
                0
            )
            rotate(var(--letra-rotacao))
            scale(0.94);

        filter: blur(7px);
    }

    45% {
        opacity: 0.8;
        filter: blur(3px);
    }

    78% {
        opacity: 1;

        transform:
            translate3d(0, 0, 0)
            rotate(0deg)
            scale(1.015);

        filter: blur(0.5px);
    }

    100% {
        opacity: 1;

        transform:
            translate3d(0, 0, 0)
            rotate(0deg)
            scale(1);

        filter: blur(0);
    }
}

/* Respeita usuários que preferem movimento reduzido */
@media (prefers-reduced-motion: reduce) {
    .ironstore-apresentacao-letra-animada {
        animation: none !important;
        opacity: 1;
        transform: none;
        filter: none;
        will-change: auto;
    }
}

`;

export default classicoApresentacao;