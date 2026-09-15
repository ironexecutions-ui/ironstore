import React from "react";

import "./compras.css";


export default function IconeCompras() {

    return (

        <span
            className="ironstore-compras-premium-estrutura"
            aria-hidden="true"
        >

            <span className="ironstore-compras-premium-luz" />

            <svg
                className="ironstore-compras-premium-svg"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >

                <defs>

                    <linearGradient
                        id="ironstore-compras-gradiente-sacola"
                        x1="9"
                        y1="9"
                        x2="31"
                        y2="34"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop
                            offset="0"
                            stopColor="white"
                            stopOpacity=".32"
                        />

                        <stop
                            offset=".52"
                            stopColor="white"
                            stopOpacity=".13"
                        />

                        <stop
                            offset="1"
                            stopColor="white"
                            stopOpacity=".04"
                        />

                    </linearGradient>


                    <linearGradient
                        id="ironstore-compras-gradiente-borda"
                        x1="11"
                        y1="7"
                        x2="30"
                        y2="33"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop
                            offset="0"
                            stopColor="white"
                        />

                        <stop
                            offset="1"
                            stopColor="white"
                            stopOpacity=".68"
                        />

                    </linearGradient>

                </defs>


                <path
                    className="ironstore-compras-premium-sombra"
                    d="
                        M9.1 15.2
                        H30.9
                        L32.5 33.2
                        C32.6 34.3
                        31.7 35.2
                        30.6 35.2
                        H9.4
                        C8.3 35.2
                        7.4 34.3
                        7.5 33.2
                        L9.1 15.2
                        Z
                    "
                />


                <path
                    className="ironstore-compras-premium-sacola"
                    d="
                        M9.1 13.7
                        H30.9
                        L32.5 31.7
                        C32.6 32.8
                        31.7 33.7
                        30.6 33.7
                        H9.4
                        C8.3 33.7
                        7.4 32.8
                        7.5 31.7
                        L9.1 13.7
                        Z
                    "
                />


                <path
                    className="ironstore-compras-premium-alca"
                    d="
                        M14.2 15
                        V10.9
                        C14.2 7.7
                        16.7 5.2
                        20 5.2
                        C23.3 5.2
                        25.8 7.7
                        25.8 10.9
                        V15
                    "
                />


                <path
                    className="ironstore-compras-premium-alca-brilho"
                    d="
                        M15.9 10.8
                        C15.9 8.5
                        17.7 6.8
                        20 6.8
                    "
                />


                <circle
                    className="ironstore-compras-premium-fixador"
                    cx="14.2"
                    cy="15.1"
                    r="1.35"
                />

                <circle
                    className="ironstore-compras-premium-fixador"
                    cx="25.8"
                    cy="15.1"
                    r="1.35"
                />


                <path
                    className="ironstore-compras-premium-sorriso"
                    d="
                        M14.8 21.2
                        C15.9 23.8
                        17.6 25
                        20 25
                        C22.4 25
                        24.1 23.8
                        25.2 21.2
                    "
                />


                <path
                    className="ironstore-compras-premium-reflexo"
                    d="
                        M11.6 17.2
                        L10.8 28.2
                    "
                />

            </svg>


            <span className="ironstore-compras-premium-ponto">
                <span />
            </span>

        </span>

    );

}