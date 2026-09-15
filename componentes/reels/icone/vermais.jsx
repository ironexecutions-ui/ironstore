import React from "react";

import "./vermais.css";


export default function IconeVerMais() {

    return (

        <span
            className="ironstore-ver-mais-premium-estrutura"
            aria-hidden="true"
        >

            <span className="ironstore-ver-mais-premium-luz" />

            <svg
                className="ironstore-ver-mais-premium-svg"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >

                <defs>

                    <linearGradient
                        id="ironstore-ver-mais-gradiente-olho"
                        x1="5"
                        y1="11"
                        x2="35"
                        y2="29"
                        gradientUnits="userSpaceOnUse"
                    >

                        <stop
                            offset="0"
                            stopColor="white"
                            stopOpacity=".32"
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


                    <radialGradient
                        id="ironstore-ver-mais-gradiente-iris"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="translate(18 17) rotate(45) scale(10)"
                        gradientUnits="userSpaceOnUse"
                    >

                        <stop
                            offset="0"
                            stopColor="white"
                        />

                        <stop
                            offset=".45"
                            stopColor="white"
                            stopOpacity=".58"
                        />

                        <stop
                            offset="1"
                            stopColor="white"
                            stopOpacity=".14"
                        />

                    </radialGradient>

                </defs>


                <path
                    className="ironstore-ver-mais-premium-sombra"
                    d="
                        M4.5 21.3
                        C7.8 14.8
                        13.1 11.2
                        20 11.2
                        C26.9 11.2
                        32.2 14.8
                        35.5 21.3
                        C32.2 27.8
                        26.9 31.4
                        20 31.4
                        C13.1 31.4
                        7.8 27.8
                        4.5 21.3
                        Z
                    "
                />


                <path
                    className="ironstore-ver-mais-premium-olho"
                    d="
                        M4.5 19.8
                        C7.8 13.3
                        13.1 9.7
                        20 9.7
                        C26.9 9.7
                        32.2 13.3
                        35.5 19.8
                        C32.2 26.3
                        26.9 29.9
                        20 29.9
                        C13.1 29.9
                        7.8 26.3
                        4.5 19.8
                        Z
                    "
                />


                <circle
                    className="ironstore-ver-mais-premium-iris"
                    cx="20"
                    cy="19.8"
                    r="7.2"
                />


                <circle
                    className="ironstore-ver-mais-premium-pupila"
                    cx="20"
                    cy="19.8"
                    r="3.7"
                />


                <circle
                    className="ironstore-ver-mais-premium-reflexo"
                    cx="18.4"
                    cy="18.1"
                    r="1.35"
                />


                <path
                    className="ironstore-ver-mais-premium-brilho-superior"
                    d="
                        M9.2 17.2
                        C12.1 13.6
                        15.6 12
                        20 12
                    "
                />

            </svg>


            <span className="ironstore-ver-mais-premium-indicador">
                <span />
            </span>

        </span>

    );

}