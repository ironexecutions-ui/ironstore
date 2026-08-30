import React, {
    useEffect
} from "react";

import {
    useLocation
} from "react-router-dom";

import ProdutoAtual
    from "./componentes/produtoatual/produtoatual";

import Sugestoes
    from "./componentes/sugestoes/sugestoes";

import Header
    from "../home/header/header";

import Footer
    from "../home/footer/footer";


export default function Produtoslog() {

    const location =
        useLocation();


    /* =========================================================
       SEMPRE SUBIR AO TOPO AO ENTRAR / TROCAR PRODUTO
    ========================================================= */

    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });

    }, [
        location.pathname
    ]);


    return (

        <>

            <Header />


            <main
                className="ironstore-produtos-pagina"
            >

                {/* =============================================
                    PRODUTO ATUAL
                ============================================= */}

                <ProdutoAtual />


                {/* =============================================
                    SUGESTÕES
                ============================================= */}

                <Sugestoes />

            </main>


            <Footer />

        </>

    );

}