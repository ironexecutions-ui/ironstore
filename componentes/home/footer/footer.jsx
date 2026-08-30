import React, {
    useEffect,
    useState
} from "react";

import { API_URL } from "../../../config";

import classicoFooter
    from "../../../modelos/classico/footer/classico_footer";


/* =========================================================
   CACHE
========================================================= */

import {
    pegarDominioAtualFooter,
    lerCacheFooter,
    salvarCacheFooter,
    normalizarDadosFooter,
    dadosFooterSaoIguais
} from "./cache";


/* =========================================================
   CHAVE
========================================================= */

const IRONSTORE_APP_KEY_FOOTER =
    import.meta.env.VITE_IRONSTORE_APP_KEY_FOOTER;


/* =========================================================
   MODELOS
========================================================= */

const modelosFooter = {
    classico: classicoFooter,
};


/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {


    /* =====================================================
       ESTADO

       A primeira tentativa sempre será o cache.
    ===================================================== */

    const [dados, setDados] =
        useState(() => {

            return lerCacheFooter();

        });


    /* =====================================================
       CARREGAR FOOTER
    ===================================================== */

    useEffect(() => {

        let componenteAtivo =
            true;


        async function carregarFooter() {


            /* =================================================
               1. CACHE PRIMEIRO
            ================================================= */

            const cache =
                lerCacheFooter();


            if (
                cache &&
                componenteAtivo
            ) {

                setDados(
                    cache
                );

            }


            /* =================================================
               2. VERIFICAR CHAVE
            ================================================= */

            if (
                !IRONSTORE_APP_KEY_FOOTER
            ) {

                console.error(
                    "[FOOTER] VITE_IRONSTORE_APP_KEY_FOOTER não configurada."
                );

                return;

            }


            /* =================================================
               3. CONSULTAR BACKEND

               Mesmo existindo cache, consulta o servidor
               para verificar se algo mudou.
            ================================================= */

            try {

                const dominio =
                    pegarDominioAtualFooter();


                const resposta =
                    await fetch(

                        `${API_URL}/ironstore/footer?dominio=${encodeURIComponent(
                            dominio
                        )}`,

                        {

                            method:
                                "GET",

                            headers: {

                                "X-IronStore-Key":
                                    IRONSTORE_APP_KEY_FOOTER,

                            },

                        }

                    );


                /* =================================================
                   4. LER RESPOSTA
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


                /* =================================================
                   5. ERRO DO BACKEND

                   Não removemos o cache.
                ================================================= */

                if (
                    !resposta.ok
                ) {

                    console.error(
                        "[FOOTER] Erro:",
                        resultado?.detail ||
                        `Erro HTTP ${resposta.status}`
                    );

                    return;

                }


                if (
                    !componenteAtivo
                ) {

                    return;

                }


                /* =================================================
                   6. NORMALIZAR DADOS DO SERVIDOR
                ================================================= */

                const dadosServidor =
                    normalizarDadosFooter(
                        resultado
                    );


                /* =================================================
                   7. PEGAR CACHE MAIS RECENTE
                ================================================= */

                const cacheAtual =
                    lerCacheFooter();


                /* =================================================
                   8. COMPARAR CACHE COM SERVIDOR
                ================================================= */

                const cacheIgual =
                    dadosFooterSaoIguais(
                        cacheAtual,
                        dadosServidor
                    );


                /* =================================================
                   9. NADA MUDOU

                   Não reescrevemos o localStorage.
                ================================================= */

                if (
                    cacheIgual
                ) {

                    return;

                }


                /* =================================================
                   10. DADOS MUDARAM

                   Atualiza interface e cache.
                ================================================= */

                setDados(
                    dadosServidor
                );


                salvarCacheFooter(
                    dadosServidor
                );


            } catch (erro) {


                /* =================================================
                   11. BACKEND INDISPONÍVEL

                   Não fazemos nada.

                   Como o estado iniciou pelo cache, o Footer
                   continua funcionando normalmente.
                ================================================= */

                console.warn(
                    "[FOOTER] Backend indisponível. Mantendo cache.",
                    erro
                );

            }

        }


        carregarFooter();


        return () => {

            componenteAtivo =
                false;

        };


    }, []);


    /* =====================================================
       SEM CACHE E AINDA SEM BACKEND
    ===================================================== */

    if (!dados) {

        return null;

    }


    /* =====================================================
       DADOS
    ===================================================== */

    const comercio =
        dados?.comercio || {};


    const footer =
        dados?.footer || {};


    const modelo =
        dados?.modelo || "classico";


    /* =====================================================
       MODELO VISUAL
    ===================================================== */

    const estiloFooter =
        modelosFooter[modelo] ||
        modelosFooter.classico;


    /* =====================================================
       ENDEREÇO

       Campos vazios são automaticamente ignorados.
    ===================================================== */

    const endereco = [

        comercio.rua,

        comercio.numero,

        comercio.bairro,

        comercio.cidade,

        comercio.estado

    ]
        .filter(Boolean)
        .join(", ");


    /* =====================================================
       REDES SOCIAIS

       Somente redes existentes serão renderizadas.
    ===================================================== */

    const redesSociais = [

        footer.instagram && {
            nome: "Instagram",
            valor: footer.instagram
        },


        footer.tiktok && {
            nome: "TikTok",
            valor: footer.tiktok
        },


        footer.youtube && {
            nome: "YouTube",
            valor: footer.youtube
        },


        footer.x && {
            nome: "X",
            valor: footer.x
        },


        footer.facebook && {
            nome: "Facebook",
            valor: footer.facebook
        },

    ].filter(Boolean);


    /* =====================================================
       WHATSAPP
    ===================================================== */

    const whatsappNumero =
        footer.whatsapp
            ? String(
                footer.whatsapp
            ).replace(
                /\D/g,
                ""
            )
            : "";


    const whatsappLink =
        whatsappNumero
            ? `https://wa.me/${whatsappNumero}`
            : null;


    /* =====================================================
       RENDER
    ===================================================== */

    return (
        <>

            <style>
                {estiloFooter}
            </style>


            <footer
                className="ironstore-footer-classico-principal"
            >


                {/* =========================================
                    CONTEÚDO
                ========================================= */}

                <div
                    className="ironstore-footer-classico-conteudo"
                >


                    {/* =====================================
                        IDENTIDADE
                    ===================================== */}

                    <section
                        className="ironstore-footer-classico-identidade"
                    >

                        {comercio.imagem && (

                            <img
                                className="ironstore-footer-classico-logo"
                                src={comercio.imagem}
                                alt={
                                    comercio.loja ||
                                    "Loja"
                                }
                            />

                        )}


                        {comercio.loja && (

                            <h2
                                className="ironstore-footer-classico-nome"
                            >
                                {comercio.loja}
                            </h2>

                        )}


                        {footer.mensagem && (

                            <p
                                className="ironstore-footer-classico-mensagem"
                            >
                                {footer.mensagem}
                            </p>

                        )}

                    </section>


                    {/* =====================================
                        ATENDIMENTO
                    ===================================== */}

                    {(
                        comercio.email ||
                        comercio.celular ||
                        whatsappLink
                    ) && (

                            <section
                                className="ironstore-footer-classico-bloco"
                            >

                                <h3>
                                    Atendimento
                                </h3>


                                {comercio.email && (

                                    <a
                                        href={
                                            `mailto:${comercio.email}`
                                        }
                                    >
                                        {comercio.email}
                                    </a>

                                )}





                                {whatsappLink && (

                                    <a
                                        href={
                                            whatsappLink
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        WhatsApp
                                    </a>

                                )}

                            </section>

                        )}


                    {/* =====================================
                        ENDEREÇO
                    ===================================== */}

                    {endereco && (

                        <section
                            className="ironstore-footer-classico-bloco"
                        >

                            <h3>
                                Onde estamos
                            </h3>


                            <p>
                                {endereco}
                            </p>


                            {comercio.cep && (

                                <p>
                                    CEP {comercio.cep}
                                </p>

                            )}

                        </section>

                    )}


                    {/* =====================================
                        REDES SOCIAIS
                    ===================================== */}

                    {redesSociais.length > 0 && (

                        <section
                            className="ironstore-footer-classico-bloco"
                        >

                            <h3>
                                Redes sociais
                            </h3>


                            <div
                                className="ironstore-footer-classico-redes"
                            >

                                {redesSociais.map(
                                    (rede) => (

                                        <a
                                            key={
                                                rede.nome
                                            }
                                            href={
                                                rede.valor
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {rede.nome}
                                        </a>

                                    )
                                )}

                            </div>

                        </section>

                    )}

                </div>


                {/* =========================================
                    PARTE INFERIOR
                ========================================= */}

                <div
                    className="ironstore-footer-classico-inferior"
                >

                    {/* =====================================
        LOJA
    ===================================== */}

                    <div className="ironstore-footer-classico-inferior-loja">

                        <span>

                            © {new Date().getFullYear()}

                            {comercio.loja
                                ? ` ${comercio.loja}`
                                : ""
                            }

                        </span>


                        {comercio.cnpj && (

                            <span className="ironstore-footer-classico-cnpj">
                                CNPJ {comercio.cnpj}
                            </span>

                        )}

                    </div>


                    {/* =====================================
        IRON EXECUTIONS
    ===================================== */}

                    <div className="ironstore-footer-classico-desenvolvimento">

                        <span>
                            Desenvolvido e em constante evolução por
                        </span>

                        <a
                            href="https://ironexecutions.com.br"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Iron Executions
                        </a>

                    </div>

                </div>

            </footer>

        </>
    );

}