import React, {
    useEffect,
    useState
} from "react";

import { API_URL } from "../../../config";

import classicoFooter
    from "../../../modelos/classico/footer/classico_footer";

import facebookLogo from "./logos/facebook.png";
import instagramLogo from "./logos/instagram.jpeg";
import tiktokLogo from "./logos/tiktok.jpeg";
import xLogo from "./logos/x.avif";
import youtubeLogo from "./logos/youtube.avif";
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

    /* =====================================================
     REDES SOCIAIS
  
     Somente redes existentes serão renderizadas.
  ===================================================== */

    /* =====================================================
     REDES SOCIAIS
  
     Somente redes cadastradas serão renderizadas.
  ===================================================== */

    const redesSociais = [

        footer.instagram && {
            nome: "Instagram",
            tipo: "instagram",
            valor: footer.instagram,
            logo: instagramLogo,
        },

        footer.tiktok && {
            nome: "TikTok",
            tipo: "tiktok",
            valor: footer.tiktok,
            logo: tiktokLogo,
        },

        footer.youtube && {
            nome: "YouTube",
            tipo: "youtube",
            valor: footer.youtube,
            logo: youtubeLogo,
        },

        footer.x && {
            nome: "X",
            tipo: "x",
            valor: footer.x,
            logo: xLogo,
        },

        footer.facebook && {
            nome: "Facebook",
            tipo: "facebook",
            valor: footer.facebook,
            logo: facebookLogo,
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
                CONTEÚDO PRINCIPAL
            ========================================= */}

                <div
                    className="ironstore-footer-classico-conteudo"
                >

                    {/* =====================================
                    IDENTIDADE DA LOJA
                ===================================== */}

                    <section
                        className="ironstore-footer-classico-identidade"
                    >

                        {comercio.imagem && (

                            <div
                                className="ironstore-footer-classico-logo-container"
                            >
                                <img
                                    className="ironstore-footer-classico-logo"
                                    src={comercio.imagem}
                                    alt={
                                        comercio.loja ||
                                        "Loja"
                                    }
                                />
                            </div>

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
                                className="ironstore-footer-classico-bloco ironstore-footer-classico-atendimento"
                            >

                                <h3>
                                    Atendimento
                                </h3>


                                <div
                                    className="ironstore-footer-classico-lista"
                                >

                                    {comercio.email && (

                                        <a
                                            href={`mailto:${comercio.email}`}
                                            className="ironstore-footer-classico-link"
                                        >
                                            {comercio.email}
                                        </a>

                                    )}


                                    {comercio.celular && (

                                        <a
                                            href={`tel:${String(
                                                comercio.celular
                                            ).replace(/\D/g, "")}`}
                                            className="ironstore-footer-classico-link"
                                        >
                                            {comercio.celular}
                                        </a>

                                    )}


                                    {whatsappLink && (

                                        <a
                                            href={whatsappLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ironstore-footer-classico-link ironstore-footer-classico-whatsapp"
                                        >
                                            WhatsApp
                                        </a>

                                    )}

                                </div>

                            </section>

                        )}


                    {/* =====================================
                    ENDEREÇO
                ===================================== */}

                    {endereco && (

                        <section
                            className="ironstore-footer-classico-bloco ironstore-footer-classico-endereco"
                        >

                            <h3>
                                Onde estamos
                            </h3>

                            <div
                                className="ironstore-footer-classico-lista"
                            >

                                <p>
                                    {endereco}
                                </p>


                                {comercio.cep && (

                                    <p
                                        className="ironstore-footer-classico-cep"
                                    >
                                        CEP {comercio.cep}
                                    </p>

                                )}

                            </div>

                        </section>

                    )}


                    {/* =====================================
                    REDES SOCIAIS
                ===================================== */}

                    {redesSociais.length > 0 && (

                        <section
                            className="ironstore-footer-classico-bloco ironstore-footer-classico-bloco-redes"
                        >

                            <h3>
                                Siga-nos
                            </h3>


                            <div
                                className="ironstore-footer-classico-redes"
                            >

                                {redesSociais.map(
                                    (rede) => (

                                        <a
                                            key={rede.tipo}
                                            href={rede.valor}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={
                                                `ironstore-footer-classico-rede-link ironstore-footer-classico-rede-${rede.tipo}`
                                            }
                                            aria-label={rede.nome}
                                            title={rede.nome}
                                        >

                                            <span
                                                className="ironstore-footer-classico-rede-icone"
                                            >

                                                <img
                                                    src={rede.logo}
                                                    alt={rede.nome}
                                                    className="ironstore-footer-classico-rede-imagem"
                                                />

                                            </span>

                                        </a>

                                    )
                                )}

                            </div>

                        </section>

                    )}

                </div>


                {/* =========================================
                RODAPÉ INFERIOR
            ========================================= */}

                <div
                    className="ironstore-footer-classico-inferior"
                >

                    <div
                        className="ironstore-footer-classico-inferior-loja"
                    >

                        <span
                            className="ironstore-footer-classico-copyright"
                        >
                            © {new Date().getFullYear()}

                            {comercio.loja
                                ? ` ${comercio.loja}`
                                : ""
                            }
                        </span>


                        {comercio.cnpj && (

                            <span
                                className="ironstore-footer-classico-cnpj"
                            >
                                CNPJ {comercio.cnpj}
                            </span>

                        )}

                    </div>


                    <div
                        className="ironstore-footer-classico-desenvolvimento"
                    >

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