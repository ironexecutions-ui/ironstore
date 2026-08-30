import React from "react";
import Body from "../componentes/home/body/body";
import Footer from "../componentes/home/footer/footer";
import Header from "../componentes/home/header/header";

export default function Home() {
    return (
        <>
            <div className="homeheader">
                <Header />
            </div>
            <div className="homebody">
                <Body />
            </div>
            <div className="homefooter">
                <Footer />
            </div>
        </>

    )
}