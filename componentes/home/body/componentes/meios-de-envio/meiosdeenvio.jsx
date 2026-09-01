import React from "react";

import classicoMeiosEnvio
    from "../../../../../modelos/classico/meiosenvio/classico_meiosenvio";


/* =========================================================
   MODELOS
========================================================= */

const modelosMeiosEnvio = {

    classico:
        classicoMeiosEnvio,

};


/* =========================================================
   COMPONENTE
========================================================= */

export default function MeiosDeEnvio({
    modelo = "classico"
}) {

    /* =====================================================
       NORMALIZAR MODELO
    ===================================================== */

    const modeloNormalizado =
        String(
            modelo || "classico"
        )
            .trim()
            .toLowerCase();


    /* =====================================================
       CSS DO MODELO
    ===================================================== */

    const estilo =
        modelosMeiosEnvio[
        modeloNormalizado
        ]
        ||
        modelosMeiosEnvio.classico;


    /* =====================================================
       RETURN
    ===================================================== */

    return (
        <>

            <style>
                {estilo}
            </style>

            <section
                className="ironstore-meios-envio"
                id="meios-de-envio"
            >

                <div className="ironstore-meios-envio-conteudo">


                    {/* =========================================
                    CABEÇALHO
                ========================================= */}

                    <header className="ironstore-meios-envio-cabecalho">

                        <div className="ironstore-meios-envio-eyebrow">

                            <span className="ironstore-meios-envio-eyebrow-linha" />

                            <span>
                                ENVIO E ENTREGA
                            </span>

                        </div>

                        <h2>
                            Da nossa loja
                            <span>
                                {" "}até você.
                            </span>
                        </h2>

                        <p>
                            Seu pedido passa por um processo
                            organizado desde a escolha do frete
                            até a entrega. Antes de pagar, você
                            consulta as opções disponíveis para
                            o seu endereço, compara valores e
                            prazos e escolhe como deseja receber.
                        </p>

                    </header>


                    {/* =========================================
                    PAINEL PRINCIPAL
                ========================================= */}

                    <div className="ironstore-meios-envio-painel">

                        <div className="ironstore-meios-envio-painel-conteudo">

                            <div className="ironstore-meios-envio-painel-icone">

                                <svg
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M4 8.5h15v14H4v-14Z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                    />

                                    <path
                                        d="M19 13h4.5L28 18v4.5h-9V13Z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinejoin="round"
                                    />

                                    <path
                                        d="M4 18h15"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                    />

                                    <circle
                                        cx="9"
                                        cy="24"
                                        r="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                    />

                                    <circle
                                        cx="24"
                                        cy="24"
                                        r="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                    />

                                </svg>

                            </div>


                            <div className="ironstore-meios-envio-painel-texto">

                                <span className="ironstore-meios-envio-painel-label">
                                    COTAÇÃO DE FRETE
                                </span>

                                <h3>
                                    Você escolhe como
                                    seu pedido será enviado
                                </h3>

                                <p>
                                    No momento da compra,
                                    verificamos as modalidades
                                    disponíveis para o seu CEP.
                                    Você poderá comparar o valor
                                    do frete, a transportadora,
                                    o serviço e o prazo estimado
                                    antes de confirmar o pedido.
                                </p>

                            </div>

                        </div>


                        {/* =====================================
                        RESUMO VISUAL
                    ===================================== */}

                        <div className="ironstore-meios-envio-painel-resumo">

                            <div className="ironstore-meios-envio-resumo-item">

                                <span>
                                    01
                                </span>

                                <div>
                                    <small>
                                        CONSULTA
                                    </small>

                                    <strong>
                                        Pelo seu CEP
                                    </strong>
                                </div>

                            </div>


                            <div className="ironstore-meios-envio-resumo-divisor" />


                            <div className="ironstore-meios-envio-resumo-item">

                                <span>
                                    02
                                </span>

                                <div>
                                    <small>
                                        COMPARAÇÃO
                                    </small>

                                    <strong>
                                        Valor e prazo
                                    </strong>
                                </div>

                            </div>


                            <div className="ironstore-meios-envio-resumo-divisor" />


                            <div className="ironstore-meios-envio-resumo-item">

                                <span>
                                    03
                                </span>

                                <div>
                                    <small>
                                        ESCOLHA
                                    </small>

                                    <strong>
                                        Feita por você
                                    </strong>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =========================================
                    TÍTULO DO PROCESSO
                ========================================= */}

                    <div className="ironstore-meios-envio-processo-cabecalho">

                        <div>

                            <span>
                                COMO FUNCIONA
                            </span>

                            <h3>
                                O caminho do seu pedido
                            </h3>

                        </div>

                        <p>
                            Um processo simples e transparente,
                            da finalização da compra até o envio.
                        </p>

                    </div>


                    {/* =========================================
                    ETAPAS
                ========================================= */}

                    <div className="ironstore-meios-envio-etapas">


                        {/* 01 */}

                        <article className="ironstore-meios-envio-etapa">

                            <div className="ironstore-meios-envio-etapa-topo">

                                <span className="ironstore-meios-envio-etapa-numero">
                                    01
                                </span>

                                <div className="ironstore-meios-envio-etapa-icone">

                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                        />

                                        <circle
                                            cx="12"
                                            cy="9"
                                            r="2.3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                        />

                                    </svg>

                                </div>

                            </div>

                            <div className="ironstore-meios-envio-etapa-texto">

                                <h4>
                                    Identificamos seu destino
                                </h4>

                                <p>
                                    O CEP informado no seu
                                    endereço é utilizado para
                                    verificar quais serviços de
                                    entrega atendem sua região.
                                </p>

                            </div>

                        </article>


                        {/* 02 */}

                        <article className="ironstore-meios-envio-etapa">

                            <div className="ironstore-meios-envio-etapa-topo">

                                <span className="ironstore-meios-envio-etapa-numero">
                                    02
                                </span>

                                <div className="ironstore-meios-envio-etapa-icone">

                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M4 7h16M7 12h10M9 17h6"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                            strokeLinecap="round"
                                        />

                                    </svg>

                                </div>

                            </div>

                            <div className="ironstore-meios-envio-etapa-texto">

                                <h4>
                                    Consultamos as opções
                                </h4>

                                <p>
                                    O sistema consulta os serviços
                                    disponíveis considerando o
                                    destino e as características
                                    dos produtos do seu pedido.
                                </p>

                            </div>

                        </article>


                        {/* 03 */}

                        <article className="ironstore-meios-envio-etapa">

                            <div className="ironstore-meios-envio-etapa-topo">

                                <span className="ironstore-meios-envio-etapa-numero">
                                    03
                                </span>

                                <div className="ironstore-meios-envio-etapa-icone">

                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="m5 12 4 4L19 6"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />

                                    </svg>

                                </div>

                            </div>

                            <div className="ironstore-meios-envio-etapa-texto">

                                <h4>
                                    Você escolhe o frete
                                </h4>

                                <p>
                                    Compare transportadora,
                                    modalidade, preço e prazo
                                    estimado. A decisão sobre
                                    qual opção utilizar é sua.
                                </p>

                            </div>

                        </article>


                        {/* 04 */}

                        <article className="ironstore-meios-envio-etapa">

                            <div className="ironstore-meios-envio-etapa-topo">

                                <span className="ironstore-meios-envio-etapa-numero">
                                    04
                                </span>

                                <div className="ironstore-meios-envio-etapa-icone">

                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <rect
                                            x="4"
                                            y="5"
                                            width="16"
                                            height="14"
                                            rx="2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                        />

                                        <path
                                            d="M8 10h8M8 14h5"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                        />

                                    </svg>

                                </div>

                            </div>

                            <div className="ironstore-meios-envio-etapa-texto">

                                <h4>
                                    O frete entra no pedido
                                </h4>

                                <p>
                                    O valor da opção selecionada
                                    é incluído no total antes do
                                    pagamento, para que você saiba
                                    exatamente o valor da compra.
                                </p>

                            </div>

                        </article>


                        {/* 05 */}

                        <article className="ironstore-meios-envio-etapa">

                            <div className="ironstore-meios-envio-etapa-topo">

                                <span className="ironstore-meios-envio-etapa-numero">
                                    05
                                </span>

                                <div className="ironstore-meios-envio-etapa-icone">

                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M4 8 12 4l8 4-8 4-8-4Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinejoin="round"
                                        />

                                        <path
                                            d="M4 8v8l8 4 8-4V8M12 12v8"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinejoin="round"
                                        />

                                    </svg>

                                </div>

                            </div>

                            <div className="ironstore-meios-envio-etapa-texto">

                                <h4>
                                    Preparamos sua compra
                                </h4>

                                <p>
                                    Após a confirmação do
                                    pagamento, o pedido entra
                                    na etapa de preparação para
                                    posteriormente ser despachado.
                                </p>

                            </div>

                        </article>


                        {/* 06 */}

                        <article className="ironstore-meios-envio-etapa">

                            <div className="ironstore-meios-envio-etapa-topo">

                                <span className="ironstore-meios-envio-etapa-numero">
                                    06
                                </span>

                                <div className="ironstore-meios-envio-etapa-icone">

                                    <svg
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M3 7h11v10H3V7Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                        />

                                        <path
                                            d="M14 10h3l4 4v3h-7v-7Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinejoin="round"
                                        />

                                        <circle
                                            cx="7"
                                            cy="18"
                                            r="2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                        />

                                        <circle
                                            cx="18"
                                            cy="18"
                                            r="2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                        />

                                    </svg>

                                </div>

                            </div>

                            <div className="ironstore-meios-envio-etapa-texto">

                                <h4>
                                    Seu pedido segue viagem
                                </h4>

                                <p>
                                    Depois do despacho, a entrega
                                    segue pela transportadora e
                                    pelo serviço selecionados
                                    durante a sua compra.
                                </p>

                            </div>

                        </article>

                    </div>


                    {/* =========================================
                    TRANSPARÊNCIA
                ========================================= */}

                    <div className="ironstore-meios-envio-transparencia">

                        <div className="ironstore-meios-envio-transparencia-icone">

                            <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinejoin="round"
                                />

                                <path
                                    d="m9 12 2 2 4-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                            </svg>

                        </div>


                        <div className="ironstore-meios-envio-transparencia-texto">

                            <span>
                                TRANSPARÊNCIA NA ENTREGA
                            </span>

                            <h3>
                                Você conhece o frete
                                antes de pagar
                            </h3>

                            <p>
                                Nenhuma opção é escolhida
                                automaticamente por você.
                                Quando houver alternativas
                                disponíveis para o seu endereço,
                                você poderá comparar as condições
                                apresentadas e selecionar aquela
                                que preferir.
                            </p>

                        </div>


                        <div className="ironstore-meios-envio-transparencia-selos">

                            <span>
                                Valor informado
                            </span>

                            <span>
                                Prazo estimado
                            </span>

                            <span>
                                Escolha do cliente
                            </span>

                        </div>

                    </div>


                    {/* =========================================
                    AVISO FINAL
                ========================================= */}

                    <div className="ironstore-meios-envio-aviso">

                        <div className="ironstore-meios-envio-aviso-icone">
                            i
                        </div>

                        <p>
                            <strong>
                                Sobre a disponibilidade:
                            </strong>

                            {" "}

                            transportadoras, modalidades,
                            valores e prazos podem variar
                            conforme o CEP de destino,
                            as dimensões e o peso dos produtos
                            e a disponibilidade de atendimento
                            para cada região.
                        </p>

                    </div>

                </div>

            </section>

        </>
    );
}