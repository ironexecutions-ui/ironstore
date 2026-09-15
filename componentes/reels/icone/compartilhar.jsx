import React from "react";

import "./compartilhar.css";


export default function IconeCompartilhar() {

    return (

        <span
            className="ironstore-compartilhar-premium-estrutura"
            aria-hidden="true"
        >

            <span className="ironstore-compartilhar-premium-luz" />

            <svg
                className="ironstore-compartilhar-premium-svg"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >

                <defs>

                    <linearGradient
                        id="ironstore-compartilhar-celular-fundo"
                        x1="10"
                        y1="5"
                        x2="30"
                        y2="35"
                        gradientUnits="userSpaceOnUse"
                    >

                        <stop
                            offset="0"
                            stopColor="white"
                            stopOpacity=".34"
                        />

                        <stop
                            offset=".55"
                            stopColor="white"
                            stopOpacity=".12"
                        />

                        <stop
                            offset="1"
                            stopColor="white"
                            stopOpacity=".04"
                        />

                    </linearGradient>


                    <linearGradient
                        id="ironstore-compartilhar-seta-gradiente"
                        x1="18"
                        y1="22"
                        x2="34"
                        y2="9"
                        gradientUnits="userSpaceOnUse"
                    >

                        <stop
                            offset="0"
                            stopColor="white"
                            stopOpacity=".65"
                        />

                        <stop
                            offset="1"
                            stopColor="white"
                        />

                    </linearGradient>

                </defs>


                {/* SOMBRA DO CELULAR */}

                <rect
                    className="ironstore-compartilhar-celular-sombra"
                    x="7.8"
                    y="5.7"
                    width="21"
                    height="31"
                    rx="5"
                />


                {/* CORPO DO CELULAR */}

                <rect
                    className="ironstore-compartilhar-celular-corpo"
                    x="7.8"
                    y="4.2"
                    width="21"
                    height="31"
                    rx="5"
                />


                {/* TELA */}

                <rect
                    className="ironstore-compartilhar-celular-tela"
                    x="10.4"
                    y="8.4"
                    width="15.8"
                    height="21.3"
                    rx="2.3"
                />


                {/* ALTO-FALANTE */}

                <path
                    className="ironstore-compartilhar-celular-alto-falante"
                    d="M15.2 6.6H21.4"
                />


                {/* BOTÃO INFERIOR */}

                <circle
                    className="ironstore-compartilhar-celular-botao"
                    cx="18.3"
                    cy="32.3"
                    r="1.15"
                />


                {/* LINHA DE COMPARTILHAMENTO */}

                <path
                    className="ironstore-compartilhar-celular-seta"
                    d="
                        M16.3 24.5
                        V20.8
                        C16.3 17.8
                        18.1 16.1
                        21.2 16.1
                        H31.7
                    "
                />


                {/* PONTA DA SETA */}

                <path
                    className="ironstore-compartilhar-celular-seta-ponta"
                    d="
                        M27.3 11.8
                        L31.8 16.1
                        L27.3 20.4
                    "
                />


                {/* BRILHO DA TELA */}

                <path
                    className="ironstore-compartilhar-celular-reflexo"
                    d="
                        M12.3 10.8
                        V19.3
                    "
                />

            </svg>


            <span className="ironstore-compartilhar-premium-indicador">
                <span />
            </span>

        </span>

    );

}