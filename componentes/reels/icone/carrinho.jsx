import React from "react";

import "./carrinho.css";


export default function IconeCarrinho() {

    return (

        <span
            className="ironstore-carrinho-premium-estrutura"
            aria-hidden="true"
        >

            <span className="ironstore-carrinho-premium-luz" />

            <svg
                className="ironstore-carrinho-premium-svg"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >

                <defs>

                    <linearGradient
                        id="ironstore-carrinho-fundo"
                        x1="8"
                        y1="9"
                        x2="31"
                        y2="29"
                        gradientUnits="userSpaceOnUse"
                    >

                        <stop
                            offset="0"
                            stopColor="white"
                            stopOpacity=".36"
                        />

                        <stop
                            offset=".55"
                            stopColor="white"
                            stopOpacity=".14"
                        />

                        <stop
                            offset="1"
                            stopColor="white"
                            stopOpacity=".04"
                        />

                    </linearGradient>


                    <linearGradient
                        id="ironstore-carrinho-borda"
                        x1="7"
                        y1="8"
                        x2="33"
                        y2="31"
                        gradientUnits="userSpaceOnUse"
                    >

                        <stop
                            offset="0"
                            stopColor="white"
                        />

                        <stop
                            offset="1"
                            stopColor="white"
                            stopOpacity=".66"
                        />

                    </linearGradient>

                </defs>


                {/* SOMBRA */}

                <path
                    className="ironstore-carrinho-premium-sombra"
                    d="
                        M7 9.5
                        H10
                        L13.4 26.4
                        H30.3
                    "
                />


                {/* ALÇA DO CARRINHO */}

                <path
                    className="ironstore-carrinho-premium-alca"
                    d="
                        M5.8 7.8
                        H9.5
                        C10.2 7.8
                        10.8 8.3
                        10.9 9
                        L14.1 25.2
                        C14.3 26.2
                        15.1 26.8
                        16.1 26.8
                        H30.4
                    "
                />


                {/* CESTO */}

                <path
                    className="ironstore-carrinho-premium-cesto"
                    d="
                        M12.2 12
                        H32.8
                        L30.4 22.2
                        C30.2 23.2
                        29.3 23.9
                        28.2 23.9
                        H14.6
                        L12.2 12
                        Z
                    "
                />


                {/* DIVISÕES DO CESTO */}

                <path
                    className="ironstore-carrinho-premium-divisao"
                    d="M18.3 14.8V21.1"
                />

                <path
                    className="ironstore-carrinho-premium-divisao"
                    d="M24.4 14.8V21.1"
                />


                {/* BRILHO */}

                <path
                    className="ironstore-carrinho-premium-reflexo"
                    d="
                        M14.8 14.2
                        H27.1
                    "
                />


                {/* RODAS */}

                <circle
                    className="ironstore-carrinho-premium-roda"
                    cx="17"
                    cy="31.1"
                    r="2.4"
                />

                <circle
                    className="ironstore-carrinho-premium-roda"
                    cx="28.1"
                    cy="31.1"
                    r="2.4"
                />


                {/* CENTRO DAS RODAS */}

                <circle
                    className="ironstore-carrinho-premium-roda-centro"
                    cx="17"
                    cy="31.1"
                    r=".8"
                />

                <circle
                    className="ironstore-carrinho-premium-roda-centro"
                    cx="28.1"
                    cy="31.1"
                    r=".8"
                />

            </svg>


            <span className="ironstore-carrinho-premium-indicador">
                <span />
            </span>

        </span>

    );

}