import React, {
    useEffect,
    useRef,
    useState
} from "react";

import { API_URL }
    from "../../../../../config";

import classicoApresentacao
    from "../../../../../modelos/classico/apresentacao/classico_apresentacao";

import {
    pegarDominioAtualApresentacao,
    gerarChaveCacheApresentacao,
    lerCacheApresentacao,
    salvarCacheApresentacao,
    normalizarDadosApresentacao,
    dadosApresentacaoSaoIguais,
    separarArquivosApresentacao,
    separarMensagensApresentacao
} from "./cache";


/* =========================================================
   CHAVE
========================================================= */

const IRONSTORE_APP_KEY_APRESENTACAO =
    import.meta.env
        .VITE_IRONSTORE_APP_KEY_APRESENTACAO;


/* =========================================================
   TEMPOS
========================================================= */

const TEMPO_IMAGEM = 12000;

const TEMPO_MENSAGEM = 15000;

const TEMPO_TRANSICAO_IMAGEM = 1200;

const TEMPO_TRANSICAO_MENSAGEM = 800;


/* =========================================================
   MODELOS
========================================================= */

const modelosApresentacao = {

    classico:
        classicoApresentacao,

};


/* =========================================================
   COMPONENTE
========================================================= */

export default function Apresentacao() {


    /* =====================================================
       CACHE INICIAL
    ===================================================== */

    const cacheInicialRef =
        useRef(
            lerCacheApresentacao()
        );


    /* =====================================================
       DADOS
    ===================================================== */

    const [dados, setDados] =
        useState(
            cacheInicialRef.current
        );


    /* =====================================================
       IMAGEM ATUAL
    ===================================================== */

    const [imagemAtual, setImagemAtual] =
        useState(() => {

            const arquivos =
                separarArquivosApresentacao(
                    cacheInicialRef
                        .current
                        ?.apresentacao
                        ?.arquivos
                );


            return arquivos[0] || "";

        });


    /* =====================================================
       ÍNDICE DA IMAGEM
    ===================================================== */

    const indiceImagemRef =
        useRef(0);


    /* =====================================================
       MENSAGEM ATUAL
    ===================================================== */

    const [mensagemAtual, setMensagemAtual] =
        useState(() => {

            const mensagens =
                separarMensagensApresentacao(
                    cacheInicialRef
                        .current
                        ?.apresentacao
                );


            if (
                mensagens.length === 0
            ) {

                return "";

            }


            const indice =
                Math.floor(
                    Math.random() *
                    mensagens.length
                );


            return mensagens[indice];

        });


    /* =====================================================
       REFERÊNCIAS DO CONTEÚDO VISÍVEL

       Evita valores antigos dentro dos intervals.
    ===================================================== */

    const imagemAtualRef =
        useRef(imagemAtual);


    const mensagemAtualRef =
        useRef(mensagemAtual);


    useEffect(() => {

        imagemAtualRef.current =
            imagemAtual;

    }, [imagemAtual]);


    useEffect(() => {

        mensagemAtualRef.current =
            mensagemAtual;

    }, [mensagemAtual]);


    /* =====================================================
       ANIMAÇÕES
    ===================================================== */

    const [
        animandoImagem,
        setAnimandoImagem
    ] = useState(false);


    const [
        animandoMensagem,
        setAnimandoMensagem
    ] = useState(false);


    /* =====================================================
       DADOS MAIS RECENTES
    ===================================================== */

    const dadosRef =
        useRef(
            cacheInicialRef.current
        );


    useEffect(() => {

        dadosRef.current =
            dados;

    }, [dados]);


    /* =====================================================
       TIMEOUTS DAS TRANSIÇÕES
    ===================================================== */

    const timeoutImagemRef =
        useRef(null);


    const timeoutMensagemRef =
        useRef(null);


    /* =====================================================
       REMOVER APRESENTAÇÃO

       Utilizado quando o servidor confirma que este domínio
       não possui registro em ironstore_apresentacao.
    ===================================================== */

    function removerApresentacao() {

        const chave =
            gerarChaveCacheApresentacao();


        /* =============================================
           REMOVER CACHE
        ============================================= */

        try {

            localStorage.removeItem(
                chave
            );

        } catch (erro) {

            console.warn(
                "[APRESENTAÇÃO] Não foi possível remover cache.",
                erro
            );

        }


        /* =============================================
           CANCELAR TRANSIÇÕES PENDENTES
        ============================================= */

        if (
            timeoutImagemRef.current
        ) {

            clearTimeout(
                timeoutImagemRef.current
            );

            timeoutImagemRef.current =
                null;

        }


        if (
            timeoutMensagemRef.current
        ) {

            clearTimeout(
                timeoutMensagemRef.current
            );

            timeoutMensagemRef.current =
                null;

        }


        /* =============================================
           LIMPAR REFERÊNCIAS
        ============================================= */

        dadosRef.current =
            null;


        imagemAtualRef.current =
            "";


        mensagemAtualRef.current =
            "";


        indiceImagemRef.current =
            0;


        /* =============================================
           LIMPAR INTERFACE
        ============================================= */

        setAnimandoImagem(
            false
        );


        setAnimandoMensagem(
            false
        );


        setImagemAtual(
            ""
        );


        setMensagemAtual(
            ""
        );


        setDados(
            null
        );

    }


    /* =====================================================
       CARREGAR SERVIDOR
    ===================================================== */

    useEffect(() => {

        let componenteAtivo =
            true;


        async function carregar() {


            /* =================================================
               CACHE PRIMEIRO
            ================================================= */

            const cache =
                lerCacheApresentacao();


            if (
                cache &&
                componenteAtivo
            ) {

                setDados(
                    cache
                );


                dadosRef.current =
                    cache;

            }


            /* =================================================
               CHAVE
            ================================================= */

            if (
                !IRONSTORE_APP_KEY_APRESENTACAO
            ) {

                console.error(
                    "[APRESENTAÇÃO] VITE_IRONSTORE_APP_KEY_APRESENTACAO não configurada."
                );

                return;

            }


            /* =================================================
               BACKEND
            ================================================= */

            try {

                const dominio =
                    pegarDominioAtualApresentacao();


                const resposta =
                    await fetch(

                        `${API_URL}/ironstore/apresentacao?dominio=${encodeURIComponent(
                            dominio
                        )}`,

                        {

                            method:
                                "GET",

                            headers: {

                                "X-IronStore-Key":
                                    IRONSTORE_APP_KEY_APRESENTACAO,

                            },

                        }

                    );


                /* =================================================
                   RESPOSTA
                ================================================= */

                let resultado =
                    null;


                try {

                    resultado =
                        await resposta.json();

                } catch {

                    resultado =
                        null;

                }


                if (
                    !componenteAtivo
                ) {

                    return;

                }


                /* =================================================
                   NÃO EXISTE APRESENTAÇÃO

                   IMPORTANTE:

                   404 significa que o backend conseguiu responder,
                   mas não encontrou o domínio na tabela.

                   Nesse caso o cache antigo NÃO deve continuar
                   mostrando uma apresentação.
                ================================================= */

                if (
                    resposta.status === 404
                ) {

                    removerApresentacao();

                    return;

                }


                /* =================================================
                   OUTROS ERROS

                   401, 403, 500 etc.

                   Mantemos o cache porque não temos confirmação
                   de que a apresentação deixou de existir.
                ================================================= */

                if (
                    !resposta.ok
                ) {

                    console.error(
                        "[APRESENTAÇÃO]",
                        resultado?.detail ||
                        `Erro HTTP ${resposta.status}`
                    );

                    return;

                }


                /* =================================================
                   NORMALIZAR
                ================================================= */

                const servidor =
                    normalizarDadosApresentacao(
                        resultado
                    );


                /* =================================================
                   CACHE ATUAL
                ================================================= */

                const cacheAtual =
                    lerCacheApresentacao();


                /* =================================================
                   COMPARAR
                ================================================= */

                const igual =
                    dadosApresentacaoSaoIguais(
                        cacheAtual,
                        servidor
                    );


                /* =================================================
                   IGUAL

                   Não escreve novamente no localStorage.
                ================================================= */

                if (
                    igual
                ) {

                    dadosRef.current =
                        servidor;

                    return;

                }


                /* =================================================
                   DADOS DIFERENTES

                   Atualiza o cache imediatamente.

                   Não trocamos imagemAtual nem mensagemAtual aqui.
                   Se já havia cache, a interface respeita os
                   respectivos ciclos de 12s e 15s.
                ================================================= */

                salvarCacheApresentacao(
                    servidor
                );


                dadosRef.current =
                    servidor;


                setDados(
                    servidor
                );


                /* =================================================
                   NÃO EXISTIA CACHE

                   Nesse caso é a primeira carga real.

                   Mostramos o primeiro conteúdo imediatamente.
                ================================================= */

                if (
                    !cacheAtual
                ) {


                    /* =============================================
                       IMAGENS
                    ============================================= */

                    const arquivos =
                        separarArquivosApresentacao(
                            servidor
                                ?.apresentacao
                                ?.arquivos
                        );


                    if (
                        arquivos.length > 0
                    ) {

                        indiceImagemRef.current =
                            0;


                        imagemAtualRef.current =
                            arquivos[0];


                        setImagemAtual(
                            arquivos[0]
                        );

                    }


                    /* =============================================
                       MENSAGENS
                    ============================================= */

                    const mensagens =
                        separarMensagensApresentacao(
                            servidor
                                ?.apresentacao
                        );


                    if (
                        mensagens.length > 0
                    ) {

                        const indice =
                            Math.floor(
                                Math.random() *
                                mensagens.length
                            );


                        mensagemAtualRef.current =
                            mensagens[indice];


                        setMensagemAtual(
                            mensagens[indice]
                        );

                    }

                }


            } catch (erro) {


                /* =================================================
                   SERVIDOR INDISPONÍVEL

                   Não removemos nada.

                   Se existe cache, ele continua funcionando.
                ================================================= */

                console.warn(
                    "[APRESENTAÇÃO] Backend indisponível. Mantendo cache.",
                    erro
                );

            }

        }


        carregar();


        return () => {

            componenteAtivo =
                false;

        };


    }, []);


    /* =====================================================
       IMAGENS

       12 SEGUNDOS
    ===================================================== */

    useEffect(() => {

        const intervalo =
            setInterval(() => {


                /* =============================================
                   DADOS MAIS RECENTES
                ============================================= */

                const dadosMaisRecentes =
                    dadosRef.current;


                if (
                    !dadosMaisRecentes
                ) {

                    return;

                }


                const arquivos =
                    separarArquivosApresentacao(
                        dadosMaisRecentes
                            ?.apresentacao
                            ?.arquivos
                    );


                /* =============================================
                   SEM IMAGEM
                ============================================= */

                if (
                    arquivos.length === 0
                ) {

                    imagemAtualRef.current =
                        "";


                    setImagemAtual(
                        ""
                    );


                    return;

                }


                /* =============================================
                   UMA IMAGEM
                ============================================= */

                if (
                    arquivos.length === 1
                ) {

                    if (
                        imagemAtualRef.current !==
                        arquivos[0]
                    ) {

                        imagemAtualRef.current =
                            arquivos[0];


                        setImagemAtual(
                            arquivos[0]
                        );

                    }


                    return;

                }


                /* =============================================
                   DESCOBRIR POSIÇÃO DA IMAGEM ATUAL

                   Isso é importante caso o servidor tenha
                   alterado a lista de imagens.
                ============================================= */

                const indiceAtual =
                    arquivos.indexOf(
                        imagemAtualRef.current
                    );


                if (
                    indiceAtual >= 0
                ) {

                    indiceImagemRef.current =
                        indiceAtual;

                } else {

                    indiceImagemRef.current =
                        -1;

                }


                /* =============================================
                   PRÓXIMA IMAGEM
                ============================================= */

                indiceImagemRef.current =
                    (
                        indiceImagemRef.current +
                        1
                    ) %
                    arquivos.length;


                const proximaImagem =
                    arquivos[
                    indiceImagemRef.current
                    ];


                /* =============================================
                   INICIAR TRANSIÇÃO
                ============================================= */

                setAnimandoImagem(
                    true
                );


                /* =============================================
                   CANCELAR TIMEOUT ANTIGO
                ============================================= */

                if (
                    timeoutImagemRef.current
                ) {

                    clearTimeout(
                        timeoutImagemRef.current
                    );

                }


                /* =============================================
                   TROCAR
                ============================================= */

                timeoutImagemRef.current =
                    setTimeout(() => {


                        /* =====================================
                           VERIFICAR SE A APRESENTAÇÃO
                           AINDA EXISTE
                        ===================================== */

                        if (
                            !dadosRef.current
                        ) {

                            return;

                        }


                        imagemAtualRef.current =
                            proximaImagem;


                        setImagemAtual(
                            proximaImagem
                        );


                        requestAnimationFrame(
                            () => {

                                setAnimandoImagem(
                                    false
                                );

                            }
                        );


                        timeoutImagemRef.current =
                            null;


                    }, TEMPO_TRANSICAO_IMAGEM);


            }, TEMPO_IMAGEM);


        return () => {

            clearInterval(
                intervalo
            );


            if (
                timeoutImagemRef.current
            ) {

                clearTimeout(
                    timeoutImagemRef.current
                );

            }

        };


    }, []);


    /* =====================================================
       MENSAGENS

       15 SEGUNDOS
    ===================================================== */

    useEffect(() => {

        const intervalo =
            setInterval(() => {


                /* =============================================
                   DADOS MAIS RECENTES
                ============================================= */

                const dadosMaisRecentes =
                    dadosRef.current;


                if (
                    !dadosMaisRecentes
                ) {

                    return;

                }


                const mensagens =
                    separarMensagensApresentacao(
                        dadosMaisRecentes
                            ?.apresentacao
                    );


                /* =============================================
                   SEM MENSAGENS
                ============================================= */

                if (
                    mensagens.length === 0
                ) {

                    mensagemAtualRef.current =
                        "";


                    setMensagemAtual(
                        ""
                    );


                    return;

                }


                /* =============================================
                   UMA MENSAGEM
                ============================================= */

                if (
                    mensagens.length === 1
                ) {

                    if (
                        mensagemAtualRef.current !==
                        mensagens[0]
                    ) {

                        mensagemAtualRef.current =
                            mensagens[0];


                        setMensagemAtual(
                            mensagens[0]
                        );

                    }


                    return;

                }


                /* =============================================
                   EVITAR REPETIR
                ============================================= */

                const disponiveis =
                    mensagens.filter(
                        mensagem =>
                            mensagem !==
                            mensagemAtualRef.current
                    );


                if (
                    disponiveis.length === 0
                ) {

                    return;

                }


                /* =============================================
                   ESCOLHER ALEATORIAMENTE
                ============================================= */

                const proximaMensagem =
                    disponiveis[
                    Math.floor(
                        Math.random() *
                        disponiveis.length
                    )
                    ];


                /* =============================================
                   INICIAR TRANSIÇÃO
                ============================================= */

                setAnimandoMensagem(
                    true
                );


                /* =============================================
                   CANCELAR TIMEOUT ANTERIOR
                ============================================= */

                if (
                    timeoutMensagemRef.current
                ) {

                    clearTimeout(
                        timeoutMensagemRef.current
                    );

                }


                /* =============================================
                   TROCAR
                ============================================= */

                timeoutMensagemRef.current =
                    setTimeout(() => {


                        if (
                            !dadosRef.current
                        ) {

                            return;

                        }


                        mensagemAtualRef.current =
                            proximaMensagem;


                        setMensagemAtual(
                            proximaMensagem
                        );


                        requestAnimationFrame(
                            () => {

                                setAnimandoMensagem(
                                    false
                                );

                            }
                        );


                        timeoutMensagemRef.current =
                            null;


                    }, TEMPO_TRANSICAO_MENSAGEM);


            }, TEMPO_MENSAGEM);


        return () => {

            clearInterval(
                intervalo
            );


            if (
                timeoutMensagemRef.current
            ) {

                clearTimeout(
                    timeoutMensagemRef.current
                );

            }

        };


    }, []);


    /* =====================================================
       SEM APRESENTAÇÃO

       Pode significar:

       1. Não havia cache e estamos aguardando o backend.
       2. O backend confirmou que não existe registro para
          este domínio.

       Nos dois casos não renderizamos nada.
    ===================================================== */

    if (
        !dados
    ) {

        return null;

    }


    /* =====================================================
       MODELO
    ===================================================== */

    const modelo =
        dados?.modelo ||
        "classico";


    const estilo =
        modelosApresentacao[
        modelo
        ] ||
        modelosApresentacao.classico;


    /* =====================================================
       SEM CONTEÚDO

       Mesmo que exista registro, se ele não possuir imagem
       nem mensagem não criamos um banner vazio.
    ===================================================== */

    if (
        !imagemAtual &&
        !mensagemAtual
    ) {

        return null;

    }


    /* =====================================================
       RENDER
    ===================================================== */

    return (
        <>

            <style>
                {estilo}
            </style>


            <section
                className="ironstore-apresentacao-classico"
            >


                {/* =========================================
                    IMAGEM
                ========================================= */}

                {imagemAtual && (

                    <div
                        className="ironstore-apresentacao-classico-imagem-area"
                    >

                        <img
                            className={
                                `
                                ironstore-apresentacao-classico-imagem
                                ${animandoImagem
                                    ? "ironstore-apresentacao-imagem-saindo"
                                    : ""
                                }
                                `
                            }
                            src={
                                imagemAtual
                            }
                            alt="Apresentação"
                        />

                    </div>

                )}


                {/* =========================================
                    SOBREPOSIÇÃO
                ========================================= */}

                <div
                    className="ironstore-apresentacao-classico-overlay"
                />


                {/* =========================================
                    MENSAGEM
                ========================================= */}

                {mensagemAtual && (

                    <div
                        className="ironstore-apresentacao-classico-texto-area"
                    >

                        <div
                            className={
                                `
                                ironstore-apresentacao-classico-texto
                                ${animandoMensagem
                                    ? "ironstore-apresentacao-mensagem-saindo"
                                    : ""
                                }
                                `
                            }
                        >




                            <h1>
                                {mensagemAtual}
                            </h1>

                        </div>

                    </div>

                )}

            </section>

        </>
    );

}