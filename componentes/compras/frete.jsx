import React, {
    useEffect,
    useState
} from "react";


/* =========================================================
   API
========================================================= */

const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://backend.ironexecutions.com.br";


/* =========================================================
   PREÇO
========================================================= */

function numeroPreco(valor) {

    const numero =
        Number(
            String(
                valor ?? ""
            ).replace(",", ".")
        );

    return Number.isFinite(numero)
        ? numero
        : 0;
}


/* =========================================================
   FORMATAR DINHEIRO
========================================================= */

function formatarPreco(valor) {

    return Number(
        valor || 0
    ).toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );
}


/* =========================================================
   COMPONENTE
========================================================= */

export default function Frete({

    temProdutos = false,

    produtos = [],

    cepOrigem = "",

    cepDestino = "",

    onValorFrete

}) {

    /* =====================================================
       ESTADOS
    ===================================================== */

    const [
        carregando,
        setCarregando
    ] = useState(false);


    const [
        erro,
        setErro
    ] = useState("");


    const [
        opcoes,
        setOpcoes
    ] = useState([]);


    const [
        opcaoSelecionada,
        setOpcaoSelecionada
    ] = useState(null);


    /* =====================================================
       ZERAR FRETE
    ===================================================== */

    function zerarFrete() {

        setOpcoes([]);

        setOpcaoSelecionada(
            null
        );

        if (
            typeof onValorFrete ===
            "function"
        ) {

            onValorFrete(0);
        }
    }


    /* =====================================================
       CALCULAR FRETE
    ===================================================== */

    useEffect(() => {

        let ativo = true;


        async function calcular() {

            /* =============================================
               SEM PRODUTOS
            ============================================= */

            if (
                !temProdutos ||
                !Array.isArray(produtos) ||
                produtos.length === 0
            ) {

                if (ativo) {

                    zerarFrete();

                    setErro("");
                }

                return;
            }


            /* =============================================
               CEP
            ============================================= */

            const origem =
                String(
                    cepOrigem || ""
                ).replace(
                    /\D/g,
                    ""
                );


            const destino =
                String(
                    cepDestino || ""
                ).replace(
                    /\D/g,
                    ""
                );


            if (
                origem.length !== 8 ||
                destino.length !== 8
            ) {

                if (ativo) {

                    zerarFrete();

                    setErro(
                        "Informe um endereço válido para calcular o frete."
                    );
                }

                return;
            }


            /* =============================================
               PRODUTOS PARA API
            ============================================= */

            const produtosFrete =
                produtos.map(
                    produto => {

                        const pesoGramas =
                            numeroPreco(
                                produto.peso_g
                            );


                        return {

                            id:
                                String(
                                    produto.id ||
                                    produto.seguimento_id
                                ),

                            largura:
                                Math.max(
                                    1,
                                    numeroPreco(
                                        produto.largura_cm
                                    )
                                ),

                            altura:
                                Math.max(
                                    1,
                                    numeroPreco(
                                        produto.altura_cm
                                    )
                                ),

                            comprimento:
                                Math.max(
                                    1,
                                    numeroPreco(
                                        produto.cumprimento_cm
                                    )
                                ),

                            /*
                             * Seu banco trabalha com peso_g.
                             *
                             * Melhor Envio recebe peso
                             * em quilogramas.
                             */

                            peso:
                                Math.max(
                                    0.001,
                                    pesoGramas / 1000
                                ),

                            valor:
                                Math.max(
                                    0,
                                    numeroPreco(
                                        produto.preco_promocao
                                    ) ||
                                    numeroPreco(
                                        produto.preco_ironstore
                                    ) ||
                                    numeroPreco(
                                        produto.preco
                                    )
                                ),

                            quantidade:
                                Math.max(
                                    1,
                                    Number(
                                        produto.quantidade ||
                                        1
                                    )
                                )
                        };

                    }
                );


            /* =============================================
               CARREGANDO
            ============================================= */

            setCarregando(
                true
            );

            setErro("");


            try {

                /* =========================================
                   TOKEN CLIENTE
                ========================================= */

                const token =
                    localStorage.getItem(
                        "ironstore_cliente_token"
                    );


                /* =========================================
                   REQUEST
                ========================================= */

                const resposta =
                    await fetch(
                        `${API_URL}/ironstore/frete/calcular`,
                        {
                            method:
                                "POST",

                            headers: {
                                "Content-Type":
                                    "application/json",

                                ...(token
                                    ? {
                                        Authorization:
                                            `Bearer ${token}`
                                    }
                                    : {})
                            },

                            body:
                                JSON.stringify({
                                    cep_origem:
                                        origem,

                                    cep_destino:
                                        destino,

                                    produtos:
                                        produtosFrete
                                })
                        }
                    );


                const resultado =
                    await resposta.json();


                if (
                    !resposta.ok
                ) {

                    throw new Error(
                        typeof resultado?.detail ===
                            "string"
                            ? resultado.detail
                            : "Não foi possível calcular o frete."
                    );
                }


                if (!ativo) {
                    return;
                }


                /* =========================================
                   OPÇÕES
                ========================================= */

                const novasOpcoes =
                    Array.isArray(
                        resultado?.opcoes
                    )
                        ? resultado.opcoes
                        : [];


                setOpcoes(
                    novasOpcoes
                );


                /* =========================================
                   NENHUMA OPÇÃO
                ========================================= */

                if (
                    novasOpcoes.length ===
                    0
                ) {

                    setOpcaoSelecionada(
                        null
                    );

                    if (
                        typeof onValorFrete ===
                        "function"
                    ) {

                        onValorFrete(0);
                    }

                    setErro(
                        resultado?.mensagem ||
                        "Nenhuma opção de entrega disponível."
                    );

                    return;
                }


                /* =========================================
                   SELECIONAR MAIS BARATO AUTOMATICAMENTE
                ========================================= */

                const maisBarato =
                    novasOpcoes[0];


                setOpcaoSelecionada(
                    maisBarato
                );


                if (
                    typeof onValorFrete ===
                    "function"
                ) {

                    onValorFrete(
                        Number(
                            maisBarato.preco ||
                            0
                        )
                    );
                }


            } catch (
            erroCalculo
            ) {

                if (!ativo) {
                    return;
                }


                console.error(
                    "[IRONSTORE FRETE]",
                    erroCalculo
                );


                setOpcoes([]);

                setOpcaoSelecionada(
                    null
                );


                if (
                    typeof onValorFrete ===
                    "function"
                ) {

                    onValorFrete(0);
                }


                setErro(
                    erroCalculo?.message ||
                    "Não foi possível calcular o frete."
                );


            } finally {

                if (ativo) {

                    setCarregando(
                        false
                    );
                }
            }
        }


        calcular();


        return () => {

            ativo = false;
        };

    }, [
        temProdutos,
        produtos,
        cepOrigem,
        cepDestino
    ]);


    /* =====================================================
       SELECIONAR OPÇÃO
    ===================================================== */

    function selecionarOpcao(
        opcao
    ) {

        setOpcaoSelecionada(
            opcao
        );


        if (
            typeof onValorFrete ===
            "function"
        ) {

            onValorFrete(
                Number(
                    opcao?.preco ||
                    0
                )
            );
        }
    }


    /* =====================================================
       SEM PRODUTOS
    ===================================================== */

    if (!temProdutos) {

        return (

            <div className="ironstore-compras-frete">

                <div className="ironstore-compras-resumo-linha">

                    <span>
                        Frete
                    </span>

                    <strong>
                        {formatarPreco(0)}
                    </strong>

                </div>

            </div>
        );
    }


    /* =====================================================
       RENDER
    ===================================================== */

    return (

        <div className="ironstore-compras-frete">


            {/* =============================================
                TÍTULO
            ============================================== */}

            <div className="ironstore-compras-resumo-linha">

                <span>
                    Frete
                </span>

                <strong>

                    {
                        carregando
                            ? "Calculando..."
                            : formatarPreco(
                                opcaoSelecionada?.preco ||
                                0
                            )
                    }

                </strong>

            </div>


            {/* =============================================
                ERRO
            ============================================== */}

            {
                erro && (

                    <div className="ironstore-frete-erro">

                        {erro}

                    </div>

                )
            }


            {/* =============================================
                OPÇÕES
            ============================================== */}

            {
                !carregando &&
                opcoes.length > 0 && (

                    <div className="ironstore-frete-opcoes">

                        {
                            opcoes.map(
                                opcao => {

                                    const selecionada =
                                        String(
                                            opcaoSelecionada?.id
                                        ) ===
                                        String(
                                            opcao.id
                                        );


                                    return (

                                        <button
                                            key={
                                                opcao.id
                                            }
                                            type="button"
                                            className={
                                                [
                                                    "ironstore-frete-opcao",

                                                    selecionada
                                                        ? "selecionada"
                                                        : ""

                                                ]
                                                    .filter(
                                                        Boolean
                                                    )
                                                    .join(
                                                        " "
                                                    )
                                            }
                                            onClick={
                                                () =>
                                                    selecionarOpcao(
                                                        opcao
                                                    )
                                            }
                                        >

                                            <div className="ironstore-frete-opcao-info">

                                                <strong>

                                                    {
                                                        opcao.nome ||
                                                        "Entrega"
                                                    }

                                                </strong>

                                                {
                                                    opcao.empresa && (

                                                        <small>

                                                            {
                                                                opcao.empresa
                                                            }

                                                        </small>

                                                    )
                                                }

                                                {
                                                    opcao.prazo && (

                                                        <span>

                                                            Entrega em{" "}

                                                            {
                                                                opcao.prazo
                                                            }{" "}

                                                            {
                                                                Number(
                                                                    opcao.prazo
                                                                ) === 1
                                                                    ? "dia útil"
                                                                    : "dias úteis"
                                                            }

                                                        </span>

                                                    )
                                                }

                                            </div>


                                            <strong className="ironstore-frete-opcao-preco">

                                                {
                                                    formatarPreco(
                                                        opcao.preco
                                                    )
                                                }

                                            </strong>

                                        </button>

                                    );
                                }
                            )
                        }

                    </div>

                )
            }

        </div>
    );
}