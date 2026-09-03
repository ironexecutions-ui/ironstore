import React, {
    useEffect,
    useMemo,
    useState
} from "react";

import classicoPath from "../../modelos/classico/path/classico_path";

import {
    API_URL
} from "../../config";


/* =========================================================
   LOGOS DAS REDES SOCIAIS
========================================================= */

import facebookLogo from "./logos/facebook.png";
import instagramLogo from "./logos/instagram.png";
import tiktokLogo from "./logos/tiktok.png";
import whatsappLogo from "./logos/whatsapp.png";
import xLogo from "./logos/x.png";
import youtubeLogo from "./logos/youtube.png";


/* =========================================================
   CHAVES
========================================================= */

const CHAVE_ABA =
    import.meta.env.VITE_IRONSTORE_APP_KEY_ABA;


const CHAVE_FOOTER =
    import.meta.env.VITE_IRONSTORE_APP_KEY_FOOTER;


/* =========================================================
   NORMALIZAR LINK
========================================================= */

function normalizarLink(url) {

    if (!url) {
        return null;
    }

    const valor =
        String(url).trim();

    if (!valor) {
        return null;
    }

    if (
        valor.startsWith("http://") ||
        valor.startsWith("https://")
    ) {
        return valor;
    }

    return `https://${valor}`;
}


/* =========================================================
   GERAR LINK WHATSAPP
========================================================= */

function gerarLinkWhatsapp(valor) {

    if (!valor) {
        return null;
    }

    const numero =
        String(valor)
            .replace(/\D/g, "");

    if (!numero) {
        return null;
    }

    const numeroFinal =
        numero.startsWith("55")
            ? numero
            : `55${numero}`;

    return `https://wa.me/${numeroFinal}`;
}


/* =========================================================
   COMPONENTE
========================================================= */

export default function Pathlog() {

    /* =====================================================
       ESTADOS
    ===================================================== */

    const [
        carregando,
        setCarregando
    ] = useState(true);


    const [
        erro,
        setErro
    ] = useState("");


    const [
        comercio,
        setComercio
    ] = useState(null);


    const [
        footer,
        setFooter
    ] = useState({});


    const [
        modelo,
        setModelo
    ] = useState("classico");


    /* =====================================================
       DOMÍNIO ATUAL
    ===================================================== */

    const dominio =
        useMemo(
            () => window.location.origin,
            []
        );


    /* =====================================================
       CARREGAR DADOS
    ===================================================== */

    useEffect(() => {

        let ativo = true;


        async function carregar() {

            try {

                setCarregando(true);
                setErro("");


                /* =========================================
                   IDENTIDADE
                ========================================= */

                const urlDominio =
                    `${API_URL}/ironstore/dominio?dominio=${encodeURIComponent(
                        dominio
                    )}`;


                const respostaDominio =
                    await fetch(
                        urlDominio,
                        {
                            method: "GET",

                            headers: {

                                Accept:
                                    "application/json",

                                "X-IronStore-Key":
                                    CHAVE_ABA
                            }
                        }
                    );


                if (!respostaDominio.ok) {

                    const textoErro =
                        await respostaDominio.text();


                    console.error(
                        "PATHLOG ERRO DOMINIO:",
                        respostaDominio.status,
                        textoErro
                    );


                    throw new Error(
                        `Não foi possível carregar a loja (${respostaDominio.status}).`
                    );
                }


                const contentTypeDominio =
                    respostaDominio.headers.get(
                        "content-type"
                    ) || "";


                if (
                    !contentTypeDominio.includes(
                        "application/json"
                    )
                ) {

                    throw new Error(
                        "A API da loja não retornou JSON."
                    );
                }


                const dadosDominio =
                    await respostaDominio.json();


                /* =========================================
                   FOOTER / REDES / MODELO
                ========================================= */

                const urlFooter =
                    `${API_URL}/ironstore/footer?dominio=${encodeURIComponent(
                        dominio
                    )}`;


                const respostaFooter =
                    await fetch(
                        urlFooter,
                        {
                            method: "GET",

                            headers: {

                                Accept:
                                    "application/json",

                                "X-IronStore-Key":
                                    CHAVE_FOOTER
                            }
                        }
                    );


                if (!respostaFooter.ok) {

                    const textoErro =
                        await respostaFooter.text();


                    console.error(
                        "PATHLOG ERRO FOOTER:",
                        respostaFooter.status,
                        textoErro
                    );


                    throw new Error(
                        `Não foi possível carregar os dados da loja (${respostaFooter.status}).`
                    );
                }


                const contentTypeFooter =
                    respostaFooter.headers.get(
                        "content-type"
                    ) || "";


                if (
                    !contentTypeFooter.includes(
                        "application/json"
                    )
                ) {

                    throw new Error(
                        "A API das redes sociais não retornou JSON."
                    );
                }


                const dadosFooter =
                    await respostaFooter.json();


                if (!ativo) {
                    return;
                }


                /* =========================================
                   COMÉRCIO
                ========================================= */

                const comercioFinal = {

                    ...(
                        dadosDominio?.comercio ||
                        {}
                    ),

                    ...(
                        dadosFooter?.comercio ||
                        {}
                    )

                };


                setComercio(
                    comercioFinal
                );


                /* =========================================
                   FOOTER
                ========================================= */

                setFooter(
                    dadosFooter?.footer ||
                    {}
                );


                /* =========================================
                   MODELO
                ========================================= */

                setModelo(
                    String(
                        dadosFooter?.modelo ||
                        "classico"
                    )
                        .trim()
                        .toLowerCase()
                );


            } catch (erroCarregamento) {

                console.error(
                    "Erro Pathlog:",
                    erroCarregamento
                );


                if (ativo) {

                    setErro(
                        erroCarregamento?.message ||
                        "Não foi possível carregar esta página."
                    );
                }


            } finally {

                if (ativo) {

                    setCarregando(
                        false
                    );
                }
            }
        }


        carregar();


        return () => {

            ativo = false;
        };


    }, [
        dominio
    ]);


    /* =====================================================
       CSS DO MODELO
    ===================================================== */

    useEffect(() => {

        const id =
            "ironstore-path-modelo-css";


        let style =
            document.getElementById(
                id
            );


        if (!style) {

            style =
                document.createElement(
                    "style"
                );


            style.id =
                id;


            document.head.appendChild(
                style
            );
        }


        switch (
        String(modelo)
            .trim()
            .toLowerCase()
        ) {

            case "classico":
            default:

                style.textContent =
                    classicoPath;

                break;
        }


        return () => {

            const atual =
                document.getElementById(
                    id
                );


            if (atual) {
                atual.remove();
            }
        };


    }, [
        modelo
    ]);


    /* =====================================================
       WHATSAPP
    ===================================================== */

    const whatsapp =
        gerarLinkWhatsapp(
            footer?.whatsapp
        );


    /* =====================================================
       REDES SOCIAIS

       Cada rede recebe seu PNG real.
    ===================================================== */

    const redes = [

        {
            nome:
                "Instagram",

            descricao:
                "Acompanhe nosso Instagram",

            logo:
                instagramLogo,

            url:
                normalizarLink(
                    footer?.instagram
                ),

            classe:
                "instagram"
        },

        {
            nome:
                "TikTok",

            descricao:
                "Confira nossos vídeos",

            logo:
                tiktokLogo,

            url:
                normalizarLink(
                    footer?.tiktok
                ),

            classe:
                "tiktok"
        },

        {
            nome:
                "YouTube",

            descricao:
                "Assista ao nosso conteúdo",

            logo:
                youtubeLogo,

            url:
                normalizarLink(
                    footer?.youtube
                ),

            classe:
                "youtube"
        },

        {
            nome:
                "Facebook",

            descricao:
                "Visite nossa página",

            logo:
                facebookLogo,

            url:
                normalizarLink(
                    footer?.facebook
                ),

            classe:
                "facebook"
        },

        {
            nome:
                "X",

            descricao:
                "Acompanhe nossas novidades",

            logo:
                xLogo,

            url:
                normalizarLink(
                    footer?.x
                ),

            classe:
                "x"
        }

    ].filter(
        (rede) =>
            Boolean(
                rede.url
            )
    );


    /* =====================================================
       LOCALIZAÇÃO
    ===================================================== */

    const cidadeEstado =
        [
            comercio?.cidade,
            comercio?.estado
        ]
            .filter(Boolean)
            .join(" - ");


    /* =====================================================
       ENDEREÇO COMPLETO
    ===================================================== */

    const endereco =
        [
            comercio?.rua,

            comercio?.numero
                ? `nº ${comercio.numero}`
                : null,

            comercio?.bairro
        ]
            .filter(Boolean)
            .join(", ");


    /* =====================================================
       INICIAL
    ===================================================== */

    const inicial =
        String(
            comercio?.loja ||
            "I"
        )
            .trim()
            .charAt(0)
            .toUpperCase();


    /* =====================================================
       CARREGANDO
    ===================================================== */

    if (carregando) {

        return (

            <main
                className="
                    ironstore-path-classico
                    ironstore-path-classico-estado
                "
            >

                <div
                    className="
                        ironstore-path-classico-carregando
                    "
                >

                    <div
                        className="
                            ironstore-path-classico-loader
                        "
                    />

                    <strong>
                        Carregando
                    </strong>

                    <span>
                        Preparando a página da loja...
                    </span>

                </div>

            </main>
        );
    }


    /* =====================================================
       ERRO
    ===================================================== */

    if (
        erro ||
        !comercio
    ) {

        return (

            <main
                className="
                    ironstore-path-classico
                    ironstore-path-classico-estado
                "
            >

                <div
                    className="
                        ironstore-path-classico-carregando
                    "
                >

                    <strong>
                        Não foi possível abrir esta página
                    </strong>

                    <span>
                        {
                            erro ||
                            "Loja não encontrada."
                        }
                    </span>

                </div>

            </main>
        );
    }


    /* =====================================================
       RENDER
    ===================================================== */

    return (

        <main
            className="
                ironstore-path-classico
            "
        >

            {/* =============================================
                ELEMENTOS DECORATIVOS
            ============================================= */}

            <div
                className="
                    ironstore-path-classico-decoracao
                    ironstore-path-classico-decoracao-um
                "
            />

            <div
                className="
                    ironstore-path-classico-decoracao
                    ironstore-path-classico-decoracao-dois
                "
            />


            <div
                className="
                    ironstore-path-classico-conteudo
                "
            >


                {/* =========================================
                    PERFIL DA EMPRESA
                ========================================= */}

                <section
                    className="
                        ironstore-path-classico-apresentacao
                    "
                >

                    <div
                        className="
                            ironstore-path-classico-logo-container
                        "
                    >

                        <div
                            className="
                                ironstore-path-classico-logo-area
                            "
                        >

                            {
                                comercio?.imagem
                                    ? (

                                        <img
                                            className="
                                                ironstore-path-classico-logo
                                            "
                                            src={
                                                comercio.imagem
                                            }
                                            alt={
                                                comercio?.loja ||
                                                "Loja"
                                            }
                                        />

                                    )
                                    : (

                                        <div
                                            className="
                                                ironstore-path-classico-logo-fallback
                                            "
                                        >

                                            {
                                                inicial
                                            }

                                        </div>
                                    )
                            }

                        </div>


                        <span
                            className="
                                ironstore-path-classico-verificado
                            "
                            title="Página oficial"
                        >
                            ✓
                        </span>

                    </div>


                    <span
                        className="
                            ironstore-path-classico-oficial
                        "
                    >
                        Página oficial
                    </span>


                    <h1
                        className="
                            ironstore-path-classico-nome
                        "
                    >

                        {
                            comercio?.loja
                        }

                    </h1>


                    {
                        footer?.mensagem && (

                            <p
                                className="
                                    ironstore-path-classico-mensagem
                                "
                            >

                                {
                                    footer.mensagem
                                }

                            </p>
                        )
                    }

                </section>


                {/* =========================================
                    SITE PRINCIPAL
                ========================================= */}

                <section
                    className="
                        ironstore-path-classico-destaque
                    "
                >

                    <a
                        className="
                            ironstore-path-classico-site
                        "
                        href="/"
                    >

                        <span
                            className="
                                ironstore-path-classico-site-icone
                            "
                        >
                            ↗
                        </span>


                        <span
                            className="
                                ironstore-path-classico-site-textos
                            "
                        >

                            <strong>
                                Nosso site oficial
                            </strong>

                            <small>
                                Conheça nossos produtos e serviços
                            </small>

                        </span>


                        <span
                            className="
                                ironstore-path-classico-site-seta
                            "
                        >
                            →
                        </span>

                    </a>

                </section>


                {/* =========================================
                    WHATSAPP
                ========================================= */}

                {
                    whatsapp && (

                        <section
                            className="
                                ironstore-path-classico-whatsapp-area
                            "
                        >

                            <a
                                className="
                                    ironstore-path-classico-whatsapp
                                "
                                href={
                                    whatsapp
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <span
                                    className="
                                        ironstore-path-classico-whatsapp-logo-area
                                    "
                                >

                                    <img
                                        className="
                                            ironstore-path-classico-whatsapp-logo
                                        "
                                        src={
                                            whatsappLogo
                                        }
                                        alt="WhatsApp"
                                    />

                                </span>


                                <span
                                    className="
                                        ironstore-path-classico-whatsapp-textos
                                    "
                                >

                                    <strong>
                                        Fale conosco
                                    </strong>

                                    <small>
                                        Atendimento pelo WhatsApp
                                    </small>

                                </span>


                                <span
                                    className="
                                        ironstore-path-classico-whatsapp-seta
                                    "
                                >
                                    →
                                </span>

                            </a>

                        </section>
                    )
                }


                {/* =========================================
                    REDES SOCIAIS
                ========================================= */}

                {
                    redes.length > 0 && (

                        <section
                            className="
                                ironstore-path-classico-secao
                            "
                        >

                            <div
                                className="
                                    ironstore-path-classico-secao-cabecalho
                                "
                            >

                                <div>

                                    <span
                                        className="
                                            ironstore-path-classico-secao-subtitulo
                                        "
                                    >
                                        CONECTE-SE
                                    </span>


                                    <h2
                                        className="
                                            ironstore-path-classico-secao-titulo
                                        "
                                    >
                                        Nossas redes sociais
                                    </h2>

                                </div>

                            </div>


                            <div
                                className="
                                    ironstore-path-classico-redes
                                "
                            >

                                {
                                    redes.map(
                                        (
                                            rede
                                        ) => (

                                            <a
                                                key={
                                                    rede.nome
                                                }
                                                className={`
                                                    ironstore-path-classico-rede
                                                    ironstore-path-classico-rede-${rede.classe}
                                                `}
                                                href={
                                                    rede.url
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >

                                                <span
                                                    className="
                                                        ironstore-path-classico-rede-logo-area
                                                    "
                                                >

                                                    <img
                                                        className="
                                                            ironstore-path-classico-rede-logo
                                                        "
                                                        src={
                                                            rede.logo
                                                        }
                                                        alt={
                                                            rede.nome
                                                        }
                                                    />

                                                </span>


                                                <span
                                                    className="
                                                        ironstore-path-classico-rede-textos
                                                    "
                                                >

                                                    <strong>
                                                        {
                                                            rede.nome
                                                        }
                                                    </strong>

                                                    <small>
                                                        {
                                                            rede.descricao
                                                        }
                                                    </small>

                                                </span>


                                                <span
                                                    className="
                                                        ironstore-path-classico-rede-seta
                                                    "
                                                >
                                                    →
                                                </span>

                                            </a>
                                        )
                                    )
                                }

                            </div>

                        </section>
                    )
                }


                {/* =========================================
                    SOBRE A EMPRESA
                ========================================= */}

                {
                    (
                        endereco ||
                        cidadeEstado ||
                        comercio?.email ||
                        comercio?.celular
                    ) && (

                        <section
                            className="
                                ironstore-path-classico-secao
                                ironstore-path-classico-sobre
                            "
                        >

                            <div
                                className="
                                    ironstore-path-classico-secao-cabecalho
                                "
                            >

                                <div>

                                    <span
                                        className="
                                            ironstore-path-classico-secao-subtitulo
                                        "
                                    >
                                        INFORMAÇÕES
                                    </span>


                                    <h2
                                        className="
                                            ironstore-path-classico-secao-titulo
                                        "
                                    >
                                        Sobre a empresa
                                    </h2>

                                </div>

                            </div>


                            <div
                                className="
                                    ironstore-path-classico-informacoes
                                "
                            >


                                {/* =========================
                                    ENDEREÇO
                                ========================= */}

                                {
                                    endereco && (

                                        <div
                                            className="
                                                ironstore-path-classico-informacoes-linha
                                            "
                                        >

                                            <span
                                                className="
                                                    ironstore-path-classico-info-icone
                                                "
                                            >
                                                ⌖
                                            </span>


                                            <div
                                                className="
                                                    ironstore-path-classico-info-textos
                                                "
                                            >

                                                <span>
                                                    Endereço
                                                </span>

                                                <strong>
                                                    {
                                                        endereco
                                                    }
                                                </strong>

                                            </div>

                                        </div>
                                    )
                                }


                                {/* =========================
                                    CIDADE
                                ========================= */}

                                {
                                    cidadeEstado && (

                                        <div
                                            className="
                                                ironstore-path-classico-informacoes-linha
                                            "
                                        >

                                            <span
                                                className="
                                                    ironstore-path-classico-info-icone
                                                "
                                            >
                                                ◉
                                            </span>


                                            <div
                                                className="
                                                    ironstore-path-classico-info-textos
                                                "
                                            >

                                                <span>
                                                    Localização
                                                </span>

                                                <strong>
                                                    {
                                                        cidadeEstado
                                                    }
                                                </strong>

                                            </div>

                                        </div>
                                    )
                                }


                                {/* =========================
                                    EMAIL
                                ========================= */}

                                {
                                    comercio?.email && (

                                        <a
                                            className="
                                                ironstore-path-classico-informacoes-linha
                                                ironstore-path-classico-informacoes-link
                                            "
                                            href={
                                                `mailto:${comercio.email}`
                                            }
                                        >

                                            <span
                                                className="
                                                    ironstore-path-classico-info-icone
                                                "
                                            >
                                                @
                                            </span>


                                            <div
                                                className="
                                                    ironstore-path-classico-info-textos
                                                "
                                            >

                                                <span>
                                                    E-mail
                                                </span>

                                                <strong>
                                                    {
                                                        comercio.email
                                                    }
                                                </strong>

                                            </div>

                                        </a>
                                    )
                                }


                                {/* =========================
                                    TELEFONE
                                ========================= */}

                                {
                                    comercio?.celular && (

                                        <div
                                            className="
                                                ironstore-path-classico-informacoes-linha
                                            "
                                        >

                                            <span
                                                className="
                                                    ironstore-path-classico-info-icone
                                                "
                                            >
                                                ☎
                                            </span>


                                            <div
                                                className="
                                                    ironstore-path-classico-info-textos
                                                "
                                            >

                                                <span>
                                                    Contato
                                                </span>

                                                <strong>
                                                    {
                                                        comercio.celular
                                                    }
                                                </strong>

                                            </div>

                                        </div>
                                    )
                                }

                            </div>

                        </section>
                    )
                }


                {/* =========================================
                    RODAPÉ
                ========================================= */}

                <footer
                    className="
                        ironstore-path-classico-rodape
                    "
                >

                    <div
                        className="
                            ironstore-path-classico-rodape-logo
                        "
                    >

                        {
                            comercio?.imagem
                                ? (

                                    <img
                                        src={
                                            comercio.imagem
                                        }
                                        alt=""
                                    />

                                )
                                : (

                                    <span>
                                        {
                                            inicial
                                        }
                                    </span>
                                )
                        }

                    </div>


                    <div
                        className="
                            ironstore-path-classico-rodape-textos
                        "
                    >

                        <strong>
                            {
                                comercio?.loja
                            }
                        </strong>

                        <span>
                            Página oficial da loja
                        </span>

                    </div>

                </footer>

            </div>

        </main>
    );
}