import React, {
    useEffect,
    useRef,
    useState
} from "react";

import "./loading.css";


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

const TEMPO_LOADING = 1200;
const INTERVALO_PROGRESSO = 45;


/* =========================================================
   LOADING
========================================================= */

export default function Loading({
    onFinalizado
}) {

    const [
        progresso,
        setProgresso
    ] = useState(0);

    const [
        mensagem,
        setMensagem
    ] = useState(
        "Carregando sua loja..."
    );

    const iniciouRef =
        useRef(false);


    /* =====================================================
       CARREGAMENTO
    ===================================================== */

    useEffect(
        () => {

            if (
                iniciouRef.current
            ) {

                return;

            }

            iniciouRef.current =
                true;


            let ativo =
                true;

            let progressoAtual =
                0;


            /* =================================================
               PROGRESSO
            ================================================= */

            const intervalo =
                setInterval(
                    () => {

                        if (
                            !ativo
                        ) {

                            return;

                        }


                        progressoAtual +=
                            Math.floor(
                                Math.random() * 5
                            ) + 2;


                        if (
                            progressoAtual >= 92
                        ) {

                            progressoAtual =
                                92;

                        }


                        setProgresso(
                            progressoAtual
                        );

                    },
                    INTERVALO_PROGRESSO
                );


            /* =================================================
               MENSAGENS
            ================================================= */

            const mensagem1 =
                setTimeout(
                    () => {

                        if (ativo) {

                            setMensagem(
                                "Preparando produtos..."
                            );

                        }

                    },
                    250
                );


            const mensagem2 =
                setTimeout(
                    () => {

                        if (ativo) {

                            setMensagem(
                                "Organizando sua loja..."
                            );

                        }

                    },
                    550
                );


            const mensagem3 =
                setTimeout(
                    () => {

                        if (ativo) {

                            setMensagem(
                                "Quase pronto..."
                            );

                        }

                    },
                    850
                );


            /* =================================================
               FINALIZAR
            ================================================= */

            const finalizar =
                setTimeout(
                    () => {

                        if (
                            !ativo
                        ) {

                            return;

                        }


                        clearInterval(
                            intervalo
                        );


                        setProgresso(
                            100
                        );


                        setMensagem(
                            "Tudo pronto"
                        );


                        setTimeout(
                            () => {

                                if (
                                    ativo &&
                                    typeof onFinalizado ===
                                    "function"
                                ) {

                                    onFinalizado();

                                }

                            },
                            200
                        );

                    },
                    TEMPO_LOADING
                );


            /* =================================================
               LIMPEZA
            ================================================= */

            return () => {

                ativo =
                    false;


                clearInterval(
                    intervalo
                );

                clearTimeout(
                    mensagem1
                );

                clearTimeout(
                    mensagem2
                );

                clearTimeout(
                    mensagem3
                );

                clearTimeout(
                    finalizar
                );

            };

        },
        [
            onFinalizado
        ]
    );


    /* =====================================================
       INTERFACE
    ===================================================== */

    return (

        <div
            className="ironstore-loading-global"
            role="status"
            aria-live="polite"
        >

            <div
                className="ironstore-loading-global__fundo"
            />


            <div
                className="ironstore-loading-global__conteudo"
            >

                {/* =========================================
                    MARCA
                ========================================= */}

                <div
                    className="ironstore-loading-global__marca"
                >

                    <div
                        className="ironstore-loading-global__simbolo"
                    >

                        <span
                            className="ironstore-loading-global__simbolo-centro"
                        >
                            I
                        </span>

                    </div>


                    <div
                        className="ironstore-loading-global__marca-textos"
                    >

                        <strong
                            className="ironstore-loading-global__titulo"
                        >
                            IronStore
                        </strong>

                        <span
                            className="ironstore-loading-global__subtitulo"
                        >
                            Sua loja está sendo preparada
                        </span>

                    </div>

                </div>


                {/* =========================================
                    ANIMAÇÃO
                ========================================= */}

                <div
                    className="ironstore-loading-global__animacao"
                >

                    <div
                        className="
                            ironstore-loading-global__anel
                            ironstore-loading-global__anel--externo
                        "
                    />

                    <div
                        className="
                            ironstore-loading-global__anel
                            ironstore-loading-global__anel--interno
                        "
                    />

                    <div
                        className="ironstore-loading-global__nucleo"
                    />

                </div>


                {/* =========================================
                    STATUS
                ========================================= */}

                <div
                    className="ironstore-loading-global__status"
                >

                    <span
                        className="ironstore-loading-global__mensagem"
                    >
                        {mensagem}
                    </span>


                    <span
                        className="ironstore-loading-global__porcentagem"
                    >
                        {progresso}%
                    </span>

                </div>


                {/* =========================================
                    BARRA
                ========================================= */}

                <div
                    className="ironstore-loading-global__barra"
                >

                    <div
                        className="ironstore-loading-global__barra-progresso"
                        style={{
                            width:
                                `${progresso}%`
                        }}
                    />

                </div>


                <span
                    className="ironstore-loading-global__rodape"
                >
                    Aguarde só um instante
                </span>

            </div>

        </div>

    );

}