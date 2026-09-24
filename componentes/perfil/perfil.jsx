import React, {
    useEffect
} from "react";

import {
    useLocation,
    useNavigate
} from "react-router-dom";

import Header from "../home/header/header";
import Footer from "../home/footer/footer";

import Dados from "./componentes/dados/dados";
import Carrinho from "./componentes/carrinho/carrinho";
import Compras from "./componentes/compras/compras";
import MaisVistos from "./componentes/maisvistos/maisvistos";


export default function Perfillog() {

    const navigate =
        useNavigate();

    const location =
        useLocation();


    /* =========================================================
       VERIFICAR LOGIN
    ========================================================= */

    useEffect(() => {

        const token =
            localStorage.getItem(
                "ironstore_cliente_token"
            );

        if (!token) {

            navigate(
                "/entrar",
                {
                    replace: true
                }
            );

        }

    }, [navigate]);


    /* =========================================================
       SCROLL PARA ÁREA
    ========================================================= */

    useEffect(() => {

        if (!location.hash) {
            return;
        }

        const id =
            location.hash.replace(
                "#",
                ""
            );

        const timer =
            setTimeout(() => {

                document
                    .getElementById(id)
                    ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

            }, 100);

        return () => {
            clearTimeout(timer);
        };

    }, [location.hash]);


    /* =========================================================
       TOKEN
    ========================================================= */

    const token =
        localStorage.getItem(
            "ironstore_cliente_token"
        );

    if (!token) {
        return null;
    }


    /* =========================================================
       ESTILO DO LAYOUT
    ========================================================= */

    const estiloLayout = {

        pagina: {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "auto",
            minHeight: "0",
            overflow: "visible"
        },

        secao: {
            position: "relative",
            display: "block",
            width: "100%",
            height: "auto",
            minHeight: "0",
            flex: "0 0 auto",
            overflow: "visible",
            scrollMarginTop: "100px"
        },

        compras: {
            position: "relative",
            display: "flow-root",
            width: "100%",
            height: "auto",
            minHeight: "0",
            flex: "0 0 auto",
            overflow: "visible",
            scrollMarginTop: "100px"
        },

        maisVistos: {
            position: "relative",
            display: "block",
            width: "100%",
            height: "auto",
            minHeight: "0",
            flex: "0 0 auto",
            overflow: "visible",
            clear: "both",
            scrollMarginTop: "100px"
        }

    };


    /* =========================================================
       PÁGINA
    ========================================================= */

    return (
        <>
            <Header />

            <main
                className="ironstore-perfillog-conteudo"
                style={estiloLayout.pagina}
            >

                {/* =================================================
                    DADOS
                ================================================= */}

                <section
                    id="dados"
                    style={estiloLayout.secao}
                >
                    <Dados />
                </section>


                {/* =================================================
                    CARRINHO
                ================================================= */}

                <section
                    id="carrinho"
                    style={estiloLayout.secao}
                >
                    <Carrinho />
                </section>


                {/* =================================================
                    COMPRAS
                ================================================= */}

                <section
                    id="compras"
                    style={estiloLayout.compras}
                >
                    <Compras />
                </section>


                {/* =================================================
                    MAIS VISTOS
                ================================================= */}

                <section
                    id="mais-vistos"
                    style={estiloLayout.maisVistos}
                >
                    <MaisVistos />
                </section>

            </main>

            <Footer />
        </>
    );

}