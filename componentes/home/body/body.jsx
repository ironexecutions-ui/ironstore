import React, {
    useEffect
} from "react";

import {
    useLocation
} from "react-router-dom";
/* =========================================================
   COMPONENTES
========================================================= */

import Apresentacao from "./componentes/apresentacao/apresentacao";
import MaisComprados from "./componentes/mais-comprados/maiscomprados";
import Categorias from "./componentes/categorias/categorias";
import Promocoes from "./componentes/promocoes/promocoes";
import MeiosDeEnvio from "./componentes/meios-de-envio/meiosdeenvio";
import RedesSociais from "./componentes/redes-sociais/redessociais";
import Depoimentos from "./componentes/depoimentos/depoimentos";


export default function Body() {
    const location =
        useLocation();


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
    const estiloArea = {
        margin: "10px 0",
        scrollMarginTop: "100px"
    };


    return (
        <>

            <div
                id="apresentacao"
                style={estiloArea}
            >
                <Apresentacao />
            </div>


            <div
                id="mais-comprados"
                style={estiloArea}
            >
                <MaisComprados />
            </div>


            <div
                id="categorias"
                style={estiloArea}
            >
                <Categorias />
            </div>


            <div
                id="promocoes"
                style={estiloArea}
            >
                <Promocoes />
            </div>


            <div
                id="meios-de-envio"
                style={estiloArea}
            >
                <MeiosDeEnvio />
            </div>





            <div
                id="depoimentos"
                style={estiloArea}
            >
                <Depoimentos />
            </div>

        </>
    );
}