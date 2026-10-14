import React, {
    useEffect,
    useState
} from "react";
console.error(
    "🔥🔥🔥 FRETE.JS NOVO CARREGADO 🔥🔥🔥",
    new Date().toISOString()
);

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
    onValorFrete,
    onFreteSelecionado
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

    const [carregandoEndereco, setCarregandoEndereco] = useState(true);
    const [
        opcaoSelecionada,
        setOpcaoSelecionada
    ] = useState(null);
    const [enderecoDestino, setEnderecoDestino] = useState(null);
    const [erroEnderecoDestino, setErroEnderecoDestino] = useState("");

    useEffect(() => {
        let ativo = true;

        async function carregarEnderecoDestino() {
            setCarregandoEndereco(true);

            const token = localStorage.getItem(
                "ironstore_cliente_token"
            );

            if (!token) {
                if (ativo) {
                    setEnderecoDestino(null);
                    setCarregandoEndereco(false);
                }
                return;
            }

            try {
                // Mantenha aqui o seu fetch atual e o restante
                // do código que processa os dados do endereço.
                const resposta = await fetch(
                    `${API_URL}/ironstore/me/dados`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "X-IronStore-Key":
                                import.meta.env.VITE_IRONSTORE_APP_KEY_GERAL
                        }
                    }
                );

                if (!resposta.ok) {
                    throw new Error(
                        "Não foi possível confirmar o endereço."
                    );
                }

                const resultado = await resposta.json();
                const dados = resultado?.dados;

                if (!ativo) return;

                if (!dados) {
                    setEnderecoDestino(null);
                    return;
                }

                setEnderecoDestino({
                    rua_avenida: dados.rua_avenida || "",
                    numero: dados.numero || "",
                    bairro: dados.bairro || "",
                    cidade: dados.cidade || "",
                    cep: String(dados.cep || "").replace(/\D/g, "")
                });

                setErroEnderecoDestino("");
            } catch (erro) {
                if (!ativo) return;

                console.error(
                    "[IRONSTORE FRETE ENDEREÇO]",
                    erro
                );

                setErroEnderecoDestino(
                    "Não foi possível confirmar o endereço cadastrado."
                );
            } finally {
                if (ativo) {
                    setCarregandoEndereco(false);
                }
            }
        }

        carregarEnderecoDestino();

        return () => {
            ativo = false;
        };
    }, []);
    /* =====================================================
       ZERAR FRETE
    ===================================================== */

    function zerarFrete() {
        console.group("🚚 [FRETE] ZERANDO FRETE");

        console.log("Motivo: estado do frete será limpo");

        console.log("Estado antes de limpar:", {
            opcoes,
            opcaoSelecionada
        });

        console.groupEnd();
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
        if (
            typeof onFreteSelecionado ===
            "function"
        ) {

            onFreteSelecionado(null);
        }
    }


    /* =====================================================
       CALCULAR FRETE
    ===================================================== */

    useEffect(() => {

        let ativo = true;

        async function calcular() {
            if (carregandoEndereco) {
                return;
            }

            console.log("[FRETE DEBUG INICIO]", {
                temProdutos,
                produtos,
                quantidadeProdutos: Array.isArray(produtos)
                    ? produtos.length
                    : "NÃO É ARRAY",
                cepOrigem,
                cepDestino
            });
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
            const origem = String(cepOrigem || "").replace(/\D/g, "");

            const destino = String(
                cepDestino || enderecoDestino?.cep || ""
            ).replace(/\D/g, "");

            console.log("[FRETE] CEPs para cálculo:", {
                origem,
                destino
            });

            if (origem.length !== 8 || destino.length !== 8) {
                if (ativo) {
                    zerarFrete();
                    setErro(
                        "Informe um endereço válido no seu perfil para calcular o frete."
                    );
                    setCarregando(false);
                }
                return;
            }

            setCarregando(true);
            setErro("");






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
            console.group("📦 [FRETE] PRODUTOS PREPARADOS");

            console.log(
                "Produtos originais:",
                produtos
            );

            console.log(
                "Produtos enviados para cálculo:",
                produtosFrete
            );

            console.table(
                produtosFrete.map(
                    produto => ({
                        id: produto.id,
                        largura: produto.largura,
                        altura: produto.altura,
                        comprimento: produto.comprimento,
                        peso_kg: produto.peso,
                        valor: produto.valor,
                        quantidade: produto.quantidade
                    })
                )
            );

            console.groupEnd();

            /* =============================================
               CARREGANDO
            ============================================= */




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
                if (
                    typeof onFreteSelecionado ===
                    "function"
                ) {

                    onFreteSelecionado({

                        servico_id:
                            String(
                                maisBarato.id
                            ),

                        transportadora:
                            String(
                                maisBarato.empresa ||
                                ""
                            ),

                        servico:
                            String(
                                maisBarato.nome ||
                                ""
                            ),

                        valor_frete:
                            Number(
                                maisBarato.preco ||
                                0
                            ),

                        prazo_dias:
                            maisBarato.prazo != null
                                ? Number(
                                    maisBarato.prazo
                                )
                                : null,

                        cep_origem:
                            String(
                                cepOrigem ||
                                ""
                            ).replace(/\D/g, ""),

                        cep_destino:
                            String(
                                cepDestino ||
                                ""
                            ).replace(/\D/g, "")

                    });
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


                if (
                    typeof onFreteSelecionado ===
                    "function"
                ) {

                    onFreteSelecionado(null);
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
        cepDestino,
        carregandoEndereco
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


        if (
            typeof onFreteSelecionado ===
            "function"
        ) {

            onFreteSelecionado({

                servico_id:
                    String(
                        opcao?.id ||
                        ""
                    ),

                transportadora:
                    String(
                        opcao?.empresa ||
                        ""
                    ),

                servico:
                    String(
                        opcao?.nome ||
                        ""
                    ),

                valor_frete:
                    Number(
                        opcao?.preco ||
                        0
                    ),

                prazo_dias:
                    opcao?.prazo != null
                        ? Number(
                            opcao.prazo
                        )
                        : null,

                cep_origem:
                    String(
                        cepOrigem ||
                        ""
                    ).replace(
                        /\D/g,
                        ""
                    ),

                cep_destino:
                    String(
                        cepDestino ||
                        ""
                    ).replace(
                        /\D/g,
                        ""
                    )

            });
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
    if (carregandoEndereco) {
        return (
            <div className="ironstore-compras-frete">
                <div className="ironstore-frete-carregando">
                    <span className="ironstore-frete-spinner" />
                    <span>
                        Confirmando endereço de entrega...
                    </span>
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

            <div className="ironstore-frete-endereco">
                <div className="ironstore-frete-endereco-cabecalho">
                    <strong>Endereço de entrega</strong>
                    <span>Confira o destino do frete</span>
                </div>

                {enderecoDestino ? (
                    <>
                        <div className="ironstore-frete-endereco-dados">
                            <strong>
                                {enderecoDestino.rua_avenida || "Rua não informada"}
                                {enderecoDestino.numero
                                    ? `, ${enderecoDestino.numero}`
                                    : ""}
                            </strong>

                            <span>
                                {[
                                    enderecoDestino.bairro,
                                    enderecoDestino.cidade
                                ]
                                    .filter(Boolean)
                                    .join(" • ")}
                            </span>

                            <span>
                                CEP:{" "}
                                {enderecoDestino.cep.replace(
                                    /^(\d{5})(\d{3})$/,
                                    "$1-$2"
                                )}
                            </span>
                        </div>

                        {enderecoDestino.cep.length === 8 &&
                            String(cepDestino || "").replace(/\D/g, "").length === 8 &&
                            enderecoDestino.cep !==
                            String(cepDestino || "").replace(/\D/g, "") && (
                                <div className="ironstore-frete-endereco-alerta">
                                    Atenção: o CEP do endereço cadastrado é diferente
                                    do CEP utilizado no cálculo do frete.
                                </div>
                            )}
                    </>
                ) : (
                    <p className="ironstore-frete-endereco-aviso">
                        {erroEnderecoDestino ||
                            "Não foi possível confirmar o endereço de entrega."}
                    </p>
                )}
            </div>
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