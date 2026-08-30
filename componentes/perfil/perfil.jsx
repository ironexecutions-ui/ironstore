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
       PÁGINA
    ========================================================= */

    return (
        <>

            <Header />


            <main className="ironstore-perfillog-conteudo">


                <div
                    id="dados"
                    style={{
                        scrollMarginTop: "100px"
                    }}
                >
                    <Dados />
                </div>


                <div
                    id="carrinho"
                    style={{
                        scrollMarginTop: "100px"
                    }}
                >
                    <Carrinho />
                </div>


                <div
                    id="compras"
                    style={{
                        scrollMarginTop: "100px"
                    }}
                >
                    <Compras />
                </div>


                <div
                    id="mais-vistos"
                    style={{
                        scrollMarginTop: "100px"
                    }}
                >
                    <MaisVistos />
                </div>


            </main>


            <Footer />

        </>
    );
}