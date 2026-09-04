import React, {
    useEffect,
    useMemo,
    useState
} from "react";

import Frete from "./frete";
import classicoCompras
    from "../../modelos/classico/compras/classico_compras";
import {
    useNavigate
} from "react-router-dom";
import {
    carregarProdutosCache,
    sincronizarProdutosCache,
    limparDesmarcadosAntigos,
    desmarcarProdutoCache,
    marcarProdutoCache
} from "./cache";

import {
    buscarCarrinhoCompra,
    prepararCompra,
    criarPagamentoPix,
    criarPagamentoCartao,
    atualizarQuantidadeProduto,
    consultarStatusPagamento
} from "./api";
/* =========================================================
   MODELOS
========================================================= */

const modelosCompras = {

    classico:
        classicoCompras,

};

/* =========================================================
   DOMÍNIO ATUAL
========================================================= */

/* =========================================================
   PREÇO
========================================================= */

function numeroPreco(valor) {

    const numero =
        Number(
            String(
                valor ?? ""
            )
                .replace(",", ".")
        );

    if (
        !Number.isFinite(numero)
    ) {
        return 0;
    }

    return numero;
}


function obterPrecoProduto(
    produto
) {

    /* =====================================================
       PREÇO CALCULADO PELO BACKEND

       IMPORTANTE:
       preco_atual pode ser 0.

       Isso acontece, por exemplo, quando a compra está
       sendo realizada através de acesso administrativo.

       Por isso NÃO usamos:
           if (produto.preco_atual)

       porque 0 seria interpretado como false.
    ===================================================== */

    if (
        produto?.preco_atual !== undefined &&
        produto?.preco_atual !== null
    ) {

        return numeroPreco(
            produto.preco_atual
        );

    }


    /* =====================================================
       FALLBACK

       Usado somente se o backend antigo não enviar
       preco_atual.
    ===================================================== */

    const promocao =
        numeroPreco(
            produto?.preco_promocao
        );

    if (
        promocao > 0
    ) {

        return promocao;

    }


    const ironstore =
        numeroPreco(
            produto?.preco_ironstore
        );

    if (
        ironstore > 0
    ) {

        return ironstore;

    }


    return numeroPreco(
        produto?.preco
    );
}

function formatarPreco(
    valor
) {

    return Number(
        valor || 0
    ).toLocaleString(
        "pt-BR",
        {
            style:
                "currency",

            currency:
                "BRL"
        }
    );
}


/* =========================================================
   IMAGEM

   imagem_url:
   link1|link2|link3|
========================================================= */

function obterPrimeiraImagem(
    imagemUrl
) {

    if (!imagemUrl) {
        return "";
    }


    if (
        Array.isArray(
            imagemUrl
        )
    ) {

        return (
            imagemUrl.find(
                imagem =>
                    String(
                        imagem || ""
                    ).trim()
            ) || ""
        );
    }


    const imagens =
        String(
            imagemUrl
        )
            .split("|")
            .map(
                imagem =>
                    imagem.trim()
            )
            .filter(Boolean);


    return imagens[0] || "";
}


/* =========================================================
   COMPONENTE
========================================================= */

export default function Compraslog() {

    const navigate =
        useNavigate();


    const [
        produtos,
        setProdutos
    ] = useState([]);


    const [
        selecionados,
        setSelecionados
    ] = useState(
        new Set()
    );


    const [
        carregando,
        setCarregando
    ] = useState(true);


    const [
        erro,
        setErro
    ] = useState("");

    const [
        frete,
        setFrete
    ] = useState(0);
    const [
        freteSelecionado,
        setFreteSelecionado
    ] = useState(null);
    const [
        cepOrigem,
        setCepOrigem
    ] = useState("");


    const [
        cepDestino,
        setCepDestino
    ] = useState("");

    const [
        checkout,
        setCheckout
    ] = useState(null);

    const [
        pagamentoAberto,
        setPagamentoAberto
    ] = useState(false);

    const [
        processandoPagamento,
        setProcessandoPagamento
    ] = useState(false);

    const [
        pix,
        setPix
    ] = useState(null);

    const [
        pagamentoConcluido,
        setPagamentoConcluido
    ] = useState(false);
    const [
        cartaoAberto,
        setCartaoAberto
    ] = useState(false);


    const [
        cartaoDados,
        setCartaoDados
    ] = useState({
        numero: "",
        nome: "",
        validade: "",
        cvv: "",
        cpf: "",
        email: "",
        parcelas: 1
    });


    const [
        resultadoCartao,
        setResultadoCartao
    ] = useState(null);
    const [
        modelo,
        setModelo
    ] = useState("");
    /* =====================================================
       CARREGAR PRODUTOS PRONTOS PARA COMPRA
    ===================================================== */

    useEffect(() => {

        let ativo = true;


        /* =====================================================
           APLICAR PRODUTOS NA TELA
    
           Essa função serve tanto para CACHE
           quanto para SERVIDOR.
        ===================================================== */

        function aplicarProdutos(
            lista
        ) {

            if (!ativo) {

                return;

            }

            const produtosLista =
                Array.isArray(
                    lista
                )
                    ? lista
                    : [];


            /* =========================================
               PRODUTOS
            ========================================= */

            setProdutos(
                produtosLista
            );


            /* =========================================
               RECUPERAR CHECKBOXES DESMARCADOS
            ========================================= */

            const desmarcados =
                new Set(
                    limparDesmarcadosAntigos(
                        produtosLista
                    )
                );


            /* =========================================
               TODOS MARCADOS
    
               EXCETO OS DESMARCADOS PELO CLIENTE
            ========================================= */

            const idsSelecionados =
                produtosLista
                    .map(
                        produto =>
                            String(
                                produto.seguimento_id
                            )
                    )
                    .filter(
                        id =>
                            !desmarcados.has(
                                id
                            )
                    );


            setSelecionados(
                new Set(
                    idsSelecionados
                )
            );

        }


        async function carregar() {

            const token =
                localStorage.getItem(
                    "ironstore_cliente_token"
                );


            /* =========================================
               NÃO LOGADO
            ========================================= */

            if (!token) {

                navigate(
                    "/entrar",
                    {
                        replace:
                            true
                    }
                );

                return;

            }


            /* =========================================
               1. PRIMEIRO CARREGA O CACHE
    
               NÃO ESPERA O SERVIDOR
            ========================================= */

            const produtosCache =
                carregarProdutosCache();


            if (
                produtosCache.length >
                0
            ) {

                console.log(
                    "[COMPRAS] Carregando produtos do cache."
                );


                aplicarProdutos(
                    produtosCache
                );


                /*
                 * Já temos dados para mostrar.
                 * Portanto tira o loading.
                 */

                setCarregando(
                    false
                );

            } else {

                /*
                 * Primeira vez.
                 * Não existe cache.
                 */

                setCarregando(
                    true
                );

            }


            setErro("");


            /* =========================================
               2. CONSULTAR SERVIDOR
            ========================================= */

            try {

                const resultado =
                    await buscarCarrinhoCompra();

                console.log(
                    "🔥 RESPOSTA COMPLETA DO CARRINHO:",
                    resultado
                );

                console.log(
                    "🔥 CEP ORIGEM RECEBIDO:",
                    resultado?.cep_origem
                );

                console.log(
                    "🔥 CEP DESTINO RECEBIDO:",
                    resultado?.cep_destino
                );




                if (!ativo) {

                    return;

                }

                /* =====================================
                   CEP ORIGEM
                ===================================== */

                setCepOrigem(
                    String(
                        resultado?.cep_origem ||
                        ""
                    )
                );


                /* =====================================
                   CEP DESTINO
                ===================================== */

                setCepDestino(
                    String(
                        resultado?.cep_destino ||
                        ""
                    )
                );
                /* =====================================
                   MODELO
                ===================================== */

                setModelo(
                    String(
                        resultado?.modelo ||
                        "classico"
                    )
                        .trim()
                        .toLowerCase()
                );


                /* =====================================
                   PRODUTOS DO SERVIDOR
                ===================================== */

                const produtosServidor =
                    Array.isArray(
                        resultado?.produtos
                    )
                        ? resultado.produtos
                        : [];


                /* =====================================
                   3. COMPARAR SERVIDOR COM CACHE
                ===================================== */

                const sincronizacao =
                    sincronizarProdutosCache(
                        produtosServidor
                    );


                /* =====================================
                   4. SE O SERVIDOR MUDOU
    
                   CACHE FOI ATUALIZADO.
    
                   AGORA ATUALIZA A TELA.
                ===================================== */

                if (
                    sincronizacao.atualizado
                ) {

                    console.log(
                        "[COMPRAS] Servidor mudou. Atualizando tela."
                    );


                    aplicarProdutos(
                        sincronizacao.produtos
                    );

                } else {

                    console.log(
                        "[COMPRAS] Servidor igual ao cache. Nada alterado."
                    );

                }


                /* =====================================
                   PRIMEIRA EXECUÇÃO SEM CACHE
    
                   Mesmo se por algum motivo a
                   comparação disser igual, garante
                   que a tela recebe os produtos.
                ===================================== */

                if (
                    produtosCache.length ===
                    0
                ) {

                    aplicarProdutos(
                        sincronizacao.produtos
                    );

                }


            } catch (
            erroCarregar
            ) {

                if (!ativo) {

                    return;

                }


                /* =====================================
                   TOKEN INVÁLIDO
                ===================================== */

                if (
                    erroCarregar?.message ===
                    "CLIENTE_NAO_AUTENTICADO"
                ) {

                    localStorage.removeItem(
                        "ironstore_cliente_token"
                    );

                    localStorage.removeItem(
                        "ironstore_cliente"
                    );

                    navigate(
                        "/entrar",
                        {
                            replace:
                                true
                        }
                    );

                    return;

                }


                /* =====================================
                   SE EXISTE CACHE
    
                   NÃO DERRUBA A TELA.
    
                   Continua usando o cache.
                ===================================== */

                if (
                    produtosCache.length >
                    0
                ) {

                    console.error(
                        "[COMPRAS] Servidor indisponível. Mantendo cache.",
                        erroCarregar
                    );

                    return;

                }


                /* =====================================
                   SEM CACHE + SERVIDOR COM ERRO
                ===================================== */

                setErro(
                    erroCarregar?.message ||
                    "Não foi possível carregar os produtos."
                );


            } finally {

                if (
                    ativo
                ) {

                    setCarregando(
                        false
                    );

                }

            }

        }


        carregar();


        return () => {

            ativo =
                false;

        };

    }, [navigate]);

    useEffect(() => {

        if (
            !pix?.venda_id
        ) {
            return;
        }


        if (
            pix?.status ===
            "approved"
        ) {
            return;
        }


        let ativo = true;

        let intervalo = null;


        async function verificar() {

            try {

                const resultado =
                    await consultarStatusPagamento(
                        pix.venda_id
                    );


                console.log(
                    "[IRONSTORE PAGAMENTO]",
                    resultado
                );


                if (!ativo) {
                    return;
                }


                /* =============================================
                   PAGAMENTO APROVADO
                ============================================= */

                if (
                    resultado?.status ===
                    "approved"
                ) {

                    ativo = false;


                    if (intervalo) {

                        clearInterval(
                            intervalo
                        );

                    }


                    setPix(
                        anterior => ({
                            ...anterior,
                            status:
                                "approved"
                        })
                    );


                    setPagamentoConcluido(
                        true
                    );


                    setErro("");


                    return;
                }


                /* =============================================
                   PAGAMENTO RECUSADO / CANCELADO
                ============================================= */

                if (
                    [
                        "rejected",
                        "cancelled",
                        "refunded",
                        "charged_back"
                    ].includes(
                        resultado?.status
                    )
                ) {

                    ativo = false;


                    if (intervalo) {

                        clearInterval(
                            intervalo
                        );

                    }


                    setErro(
                        "O pagamento não foi aprovado."
                    );

                }


            } catch (
            erroStatus
            ) {

                console.error(
                    "[IRONSTORE STATUS PAGAMENTO]",
                    erroStatus
                );

            }

        }


        verificar();


        intervalo =
            setInterval(
                verificar,
                3000
            );


        return () => {

            ativo = false;


            if (intervalo) {

                clearInterval(
                    intervalo
                );

            }

        };

    }, [
        pix?.venda_id,
        pix?.status
    ]);



    async function alterarQuantidade(
        produto,
        novaQuantidade
    ) {

        const quantidade =
            Math.max(
                1,
                Math.floor(
                    Number(
                        novaQuantidade
                    ) || 1
                )
            );


        const produtoId =
            Number(
                produto.id
            );


        if (!produtoId) {
            return;
        }


        const quantidadeAnterior =
            Math.max(
                1,
                Number(
                    produto.quantidade ||
                    1
                )
            );


        /* =================================================
           ATUALIZA TELA IMEDIATAMENTE
        ================================================= */

        setProdutos(
            anteriores =>
                anteriores.map(
                    item =>
                        String(
                            item.seguimento_id
                        ) ===
                            String(
                                produto.seguimento_id
                            )
                            ? {
                                ...item,
                                quantidade
                            }
                            : item
                )
        );


        try {

            setErro("");


            await atualizarQuantidadeProduto(
                produtoId,
                quantidade
            );


        } catch (
        erroQuantidade
        ) {

            /* =============================================
               SE BACKEND FALHAR, VOLTA A QUANTIDADE
            ============================================= */

            setProdutos(
                anteriores =>
                    anteriores.map(
                        item =>
                            String(
                                item.seguimento_id
                            ) ===
                                String(
                                    produto.seguimento_id
                                )
                                ? {
                                    ...item,
                                    quantidade:
                                        quantidadeAnterior
                                }
                                : item
                    )
            );


            if (
                erroQuantidade?.message ===
                "CLIENTE_NAO_AUTENTICADO"
            ) {

                localStorage.removeItem(
                    "ironstore_cliente_token"
                );

                localStorage.removeItem(
                    "ironstore_cliente"
                );

                navigate(
                    "/entrar",
                    {
                        replace: true
                    }
                );

                return;
            }


            setErro(
                erroQuantidade?.message ||
                "Não foi possível alterar a quantidade."
            );
        }
    }
    /* =====================================================
       MARCAR / DESMARCAR
    ===================================================== */

    /* =====================================================
      MARCAR / DESMARCAR
   ===================================================== */

    function alterarSelecionado(
        seguimentoId
    ) {

        const id =
            String(
                seguimentoId
            );

        setSelecionados(
            anteriores => {

                const novos =
                    new Set(
                        anteriores
                    );

                /* =========================================
                   ESTÁ MARCADO
    
                   DESMARCA NA TELA
                   +
                   SALVA NO CACHE
                ========================================= */

                if (
                    novos.has(
                        id
                    )
                ) {

                    novos.delete(
                        id
                    );

                    desmarcarProdutoCache(
                        id
                    );

                }

                /* =========================================
                   ESTÁ DESMARCADO
    
                   MARCA NA TELA
                   +
                   REMOVE DO CACHE
                ========================================= */

                else {

                    novos.add(
                        id
                    );

                    marcarProdutoCache(
                        id
                    );

                }

                return novos;

            }
        );

    }


    /* =====================================================
       PRODUTOS SELECIONADOS
    ===================================================== */

    const produtosSelecionados =
        useMemo(
            () => {

                return produtos.filter(
                    produto =>
                        selecionados.has(
                            String(
                                produto.seguimento_id
                            )
                        )
                );

            },
            [
                produtos,
                selecionados
            ]
        );


    /* =====================================================
       SUBTOTAL

       IMPORTANTE:
       este cálculo é apenas visual.

       O backend vai recalcular tudo antes do pagamento.
    ===================================================== */

    const subtotal =
        useMemo(
            () => {

                return produtosSelecionados.reduce(
                    (
                        total,
                        produto
                    ) => {

                        const preco =
                            obterPrecoProduto(
                                produto
                            );


                        const quantidade =
                            Math.max(
                                1,
                                Number(
                                    produto?.quantidade ||
                                    1
                                )
                            );


                        return (
                            total +
                            (
                                preco *
                                quantidade
                            )
                        );

                    },
                    0
                );

            },
            [
                produtosSelecionados
            ]
        );


    /* =====================================================
       FRETE

       NO PRÓXIMO ARQUIVO:

       <Frete />

       Por enquanto deixamos 4 para a estrutura já funcionar.
    ===================================================== */



    /* =====================================================
       TOTAL
    ===================================================== */

    const total =
        subtotal +
        frete;


    /* =====================================================
       COMPRAR

       Na próxima etapa vamos abrir:
       PIX
       CARTÃO
    ===================================================== */

    async function comprar() {

        if (
            produtosSelecionados.length === 0
        ) {
            setErro("Selecione pelo menos um produto.");
            return;
        }

        try {
            setProcessandoPagamento(true);
            setErro("");

            const seguimentosIds =
                produtosSelecionados.map(
                    produto => Number(produto.seguimento_id)
                );

            if (!freteSelecionado) {
                throw new Error(
                    "Selecione uma opção de frete."
                );
            }

            const resultado =
                await prepararCompra(
                    seguimentosIds,
                    freteSelecionado
                );

            setCheckout({
                ...resultado,
                seguimentos_ids: seguimentosIds
            });

            setPix(null);

            setPagamentoConcluido(
                false
            );

            setCartaoAberto(
                false
            );

            setPagamentoAberto(
                true
            );

        } catch (erroCompra) {

            if (
                erroCompra?.message ===
                "CLIENTE_NAO_AUTENTICADO"
            ) {
                localStorage.removeItem("ironstore_cliente_token");
                localStorage.removeItem("ironstore_cliente");
                navigate("/entrar");
                return;
            }

            setErro(
                erroCompra?.message ||
                "Não foi possível preparar a compra."
            );

        } finally {
            setProcessandoPagamento(false);
        }
    }

    async function pagarComPix() {

        if (!checkout?.seguimentos_ids?.length) {
            return;
        }

        try {
            setProcessandoPagamento(true);
            setErro("");

            const resultado =
                await criarPagamentoPix(
                    checkout.seguimentos_ids,
                    freteSelecionado
                );

            setPix(resultado);

        } catch (erroPix) {

            if (
                erroPix?.message ===
                "CLIENTE_NAO_AUTENTICADO"
            ) {
                localStorage.removeItem("ironstore_cliente_token");
                localStorage.removeItem("ironstore_cliente");
                navigate("/entrar");
                return;
            }

            setErro(
                erroPix?.message ||
                "Não foi possível gerar o Pix."
            );

        } finally {
            setProcessandoPagamento(false);
        }
    }
    /* =========================================================
       CARREGAR SDK MERCADO PAGO
    ========================================================= */

    async function carregarMercadoPago() {

        if (
            window.MercadoPago
        ) {

            return window.MercadoPago;

        }


        await new Promise(
            (
                resolve,
                reject
            ) => {

                const existente =
                    document.querySelector(
                        'script[src="https://sdk.mercadopago.com/js/v2"]'
                    );


                if (
                    existente
                ) {

                    existente.addEventListener(
                        "load",
                        resolve,
                        {
                            once: true
                        }
                    );

                    existente.addEventListener(
                        "error",
                        reject,
                        {
                            once: true
                        }
                    );

                    return;

                }


                const script =
                    document.createElement(
                        "script"
                    );


                script.src =
                    "https://sdk.mercadopago.com/js/v2";


                script.async =
                    true;


                script.onload =
                    resolve;


                script.onerror =
                    () => {

                        reject(
                            new Error(
                                "Não foi possível carregar o Mercado Pago."
                            )
                        );

                    };


                document.head.appendChild(
                    script
                );

            }
        );


        if (
            !window.MercadoPago
        ) {

            throw new Error(
                "SDK do Mercado Pago não foi carregado."
            );

        }


        return window.MercadoPago;

    }


    /* =========================================================
       SOMENTE NÚMEROS
    ========================================================= */

    function somenteNumeros(
        valor
    ) {

        return String(
            valor || ""
        ).replace(
            /\D/g,
            ""
        );

    }


    /* =========================================================
       ALTERAR CAMPO CARTÃO
    ========================================================= */

    function alterarCampoCartao(
        campo,
        valor
    ) {

        setCartaoDados(
            anterior => ({
                ...anterior,

                [campo]:
                    valor
            })
        );

    }


    /* =========================================================
       PAGAR COM CARTÃO
    ========================================================= */

    async function pagarComCartao() {

        if (
            !checkout?.seguimentos_ids?.length
        ) {

            setErro(
                "Compra não preparada."
            );

            return;

        }


        const publicKey =
            import.meta.env
                .VITE_MERCADO_PAGO_PUBLIC_KEY;


        if (
            !publicKey
        ) {

            setErro(
                "Public Key do Mercado Pago não configurada."
            );

            return;

        }


        const numero =
            somenteNumeros(
                cartaoDados.numero
            );


        const validade =
            somenteNumeros(
                cartaoDados.validade
            );


        const cvv =
            somenteNumeros(
                cartaoDados.cvv
            );


        const cpf =
            somenteNumeros(
                cartaoDados.cpf
            );


        const email =
            String(
                cartaoDados.email ||
                ""
            ).trim();


        const nome =
            String(
                cartaoDados.nome ||
                ""
            ).trim();


        if (
            numero.length < 13
        ) {

            setErro(
                "Número do cartão inválido."
            );

            return;

        }


        if (
            validade.length !== 4
        ) {

            setErro(
                "Informe a validade no formato MM/AA."
            );

            return;

        }


        if (
            cvv.length < 3
        ) {

            setErro(
                "CVV inválido."
            );

            return;

        }


        if (
            cpf.length !== 11
        ) {

            setErro(
                "CPF inválido."
            );

            return;

        }


        if (
            !nome
        ) {

            setErro(
                "Informe o nome do titular."
            );

            return;

        }


        if (
            !email ||
            !email.includes("@")
        ) {

            setErro(
                "Informe um e-mail válido."
            );

            return;

        }


        try {

            setProcessandoPagamento(
                true
            );

            setErro("");

            setResultadoCartao(
                null
            );


            /* =================================================
               MERCADO PAGO
            ================================================= */

            const MercadoPago =
                await carregarMercadoPago();


            const mp =
                new MercadoPago(
                    publicKey
                );


            /* =================================================
               IDENTIFICAR BANDEIRA / PAYMENT METHOD
            ================================================= */

            const bin =
                numero.substring(
                    0,
                    6
                );


            const paymentMethods =
                await mp.getPaymentMethods({
                    bin
                });


            const paymentMethodId =
                paymentMethods
                    ?.results
                    ?.[0]
                    ?.id;


            if (
                !paymentMethodId
            ) {

                throw new Error(
                    "Não foi possível identificar a bandeira do cartão."
                );

            }


            /* =================================================
               VALIDADE
            ================================================= */

            const expirationMonth =
                validade.substring(
                    0,
                    2
                );


            const expirationYear =
                `20${validade.substring(
                    2,
                    4
                )}`;


            /* =================================================
               TOKENIZAR CARTÃO
    
               O NÚMERO E CVV VÃO PARA O MERCADO PAGO.
               NÃO VÃO PARA NOSSO FASTAPI.
            ================================================= */

            const tokenResultado =
                await mp.createCardToken({
                    cardNumber:
                        numero,

                    cardholderName:
                        nome,

                    cardExpirationMonth:
                        expirationMonth,

                    cardExpirationYear:
                        expirationYear,

                    securityCode:
                        cvv,

                    identificationType:
                        "CPF",

                    identificationNumber:
                        cpf
                });


            const tokenCartao =
                tokenResultado?.id;


            if (
                !tokenCartao
            ) {

                throw new Error(
                    "Mercado Pago não gerou o token do cartão."
                );

            }


            /* =================================================
               AGORA SIM:
               NOSSA API
            ================================================= */

            const resultado =
                await criarPagamentoCartao({

                    seguimentosIds:
                        checkout
                            .seguimentos_ids,

                    tokenCartao,

                    parcelas:
                        cartaoDados
                            .parcelas,

                    paymentMethodId,

                    email,

                    frete:
                        freteSelecionado

                });

            setResultadoCartao(
                resultado
            );

            if (
                resultado?.status ===
                "approved"
            ) {

                setPagamentoConcluido(
                    true
                );

            }
        } catch (
        erroCartao
        ) {

            console.error(
                "[IRONSTORE CARTÃO]",
                erroCartao
            );


            if (
                erroCartao?.message ===
                "CLIENTE_NAO_AUTENTICADO"
            ) {

                localStorage.removeItem(
                    "ironstore_cliente_token"
                );

                localStorage.removeItem(
                    "ironstore_cliente"
                );

                navigate(
                    "/entrar"
                );

                return;

            }


            setErro(
                erroCartao?.message ||
                "Não foi possível processar o cartão."
            );


        } finally {

            setProcessandoPagamento(
                false
            );

        }

    }

    /* =========================================================
   ESTILO DO MODELO
========================================================= */

    const estilo =
        modelosCompras[
        modelo || "classico"
        ] ||
        modelosCompras.classico;
    /* =====================================================
       LOADING
    ===================================================== */

    if (
        carregando
    ) {

        return (

            <section className="ironstore-compras">

                <div className="ironstore-compras-loading">

                    Carregando sua compra...

                </div>

            </section>

        );

    }


    /* =====================================================
       ERRO SEM PRODUTOS
    ===================================================== */

    if (
        erro &&
        produtos.length === 0
    ) {

        return (

            <section className="ironstore-compras">

                <div className="ironstore-compras-erro">

                    {erro}

                </div>

            </section>

        );

    }


    /* =====================================================
       CARRINHO VAZIO
    ===================================================== */

    if (
        produtos.length === 0
    ) {

        return (
            <>
                <style>
                    {estilo}
                </style>

                <section className="ironstore-compras">

                    <div className="ironstore-compras-vazio">

                        {/* ÍCONE */}
                        <div
                            className="ironstore-compras-vazio-icone"
                            aria-hidden="true"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.5 4.5H5.3C5.72 4.5 6.08 4.79 6.17 5.2L6.55 7M6.55 7L7.65 12.1C7.82 12.88 8.51 13.44 9.31 13.44H17.2C17.98 13.44 18.66 12.91 18.85 12.15L20.05 7.35C20.1 7.17 19.96 7 19.77 7H6.55Z"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                <path
                                    d="M9.2 17.2H17.5"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                />

                                <circle
                                    cx="9.2"
                                    cy="19.2"
                                    r="1.1"
                                    fill="currentColor"
                                />

                                <circle
                                    cx="17.5"
                                    cy="19.2"
                                    r="1.1"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>


                        {/* CONTEÚDO */}
                        <div className="ironstore-compras-vazio-conteudo">

                            <span className="ironstore-compras-vazio-etiqueta">
                                Seu carrinho
                            </span>

                            <h2 className="ironstore-compras-vazio-titulo">
                                Seu carrinho está vazio
                            </h2>

                            <p className="ironstore-compras-vazio-descricao">
                                Explore nossos produtos e encontre algo
                                especial para você.
                            </p>

                        </div>


                        {/* AÇÃO */}
                        <button
                            className="ironstore-compras-vazio-botao"
                            type="button"
                            onClick={
                                () =>
                                    navigate("/")
                            }
                        >
                            <span>
                                Continuar comprando
                            </span>

                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M5 12H19M19 12L13.5 6.5M19 12L13.5 17.5"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>


                        {/* SEGURANÇA / INFORMAÇÃO */}
                        <div className="ironstore-compras-vazio-rodape">

                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M12 3L19 6V11C19 15.4 16.1 19.2 12 21C7.9 19.2 5 15.4 5 11V6L12 3Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinejoin="round"
                                />

                                <path
                                    d="M9 12L11 14L15.5 9.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            <span>
                                Compra segura e protegida
                            </span>

                        </div>

                    </div>

                </section>
            </>
        );

    }

    /* =========================================================
       ESTILO DO MODELO
    ========================================================= */


    /* =====================================================
       RENDER
    ===================================================== */

    return (
        <>

            <style>
                {estilo}
            </style>
            <section className="ironstore-compras">

                {/* =============================================
                CABEÇALHO
            ============================================== */}

                <header className="ironstore-compras-cabecalho">

                    <div>

                        <h1>
                            Finalizar compra
                        </h1>

                        <p>
                            Escolha os produtos que deseja comprar.
                        </p>

                    </div>

                </header>


                {/* =============================================
                ERRO
            ============================================== */}

                {
                    erro && (

                        <div className="ironstore-compras-erro">

                            {erro}

                        </div>

                    )
                }


                {/* =============================================
                CONTEÚDO
            ============================================== */}

                <div className="ironstore-compras-conteudo">


                    {/* =========================================
                    LISTA
                ========================================== */}

                    <div className="ironstore-compras-lista">

                        {
                            produtos.map(
                                produto => {

                                    const seguimentoId =
                                        String(
                                            produto.seguimento_id
                                        );


                                    const marcado =
                                        selecionados.has(
                                            seguimentoId
                                        );


                                    const imagem =
                                        obterPrimeiraImagem(
                                            produto.imagem_url
                                        );


                                    const preco =
                                        obterPrecoProduto(
                                            produto
                                        );


                                    const quantidade =
                                        Math.max(
                                            1,
                                            Number(
                                                produto.quantidade ||
                                                1
                                            )
                                        );


                                    const subtotalProduto =
                                        preco *
                                        quantidade;


                                    return (

                                        <article
                                            key={
                                                seguimentoId
                                            }
                                            className={
                                                [
                                                    "ironstore-compras-produto",

                                                    marcado
                                                        ? "selecionado"
                                                        : "desmarcado"

                                                ]
                                                    .filter(Boolean)
                                                    .join(" ")
                                            }
                                        >


                                            {/* CHECKBOX */}

                                            <label className="ironstore-compras-produto-check">

                                                <input
                                                    type="checkbox"
                                                    checked={
                                                        marcado
                                                    }
                                                    onChange={
                                                        () =>
                                                            alterarSelecionado(
                                                                seguimentoId
                                                            )
                                                    }
                                                />

                                                <span />

                                            </label>


                                            {/* IMAGEM */}

                                            <div className="ironstore-compras-produto-imagem">

                                                {
                                                    imagem ? (

                                                        <img
                                                            src={
                                                                imagem
                                                            }
                                                            alt={
                                                                produto.nome ||
                                                                "Produto"
                                                            }
                                                        />

                                                    ) : (

                                                        <div className="ironstore-compras-produto-sem-imagem">

                                                            Sem imagem

                                                        </div>

                                                    )
                                                }

                                            </div>


                                            {/* INFORMAÇÕES */}

                                            <div className="ironstore-compras-produto-info">

                                                <h2>

                                                    {
                                                        produto.nome
                                                    }

                                                </h2>


                                                {
                                                    produto.unidade && (

                                                        <span className="ironstore-compras-produto-unidade">

                                                            {
                                                                produto.unidade
                                                            }

                                                        </span>

                                                    )
                                                }


                                                {
                                                    produto.descricao_curta && (

                                                        <p>

                                                            {
                                                                produto.descricao_curta
                                                            }

                                                        </p>

                                                    )
                                                }


                                                <div className="ironstore-compras-produto-quantidade">

                                                    <span>
                                                        Quantidade:
                                                    </span>

                                                    <div className="ironstore-compras-quantidade-controle">

                                                        <button
                                                            type="button"
                                                            disabled={
                                                                quantidade <= 1
                                                            }
                                                            onClick={
                                                                () =>
                                                                    alterarQuantidade(
                                                                        produto,
                                                                        quantidade - 1
                                                                    )
                                                            }
                                                        >
                                                            −
                                                        </button>


                                                        <input
                                                            type="number"
                                                            min="1"
                                                            step="1"
                                                            value={
                                                                quantidade
                                                            }
                                                            onChange={
                                                                evento => {

                                                                    const valor =
                                                                        evento.target.value;


                                                                    if (
                                                                        valor === ""
                                                                    ) {

                                                                        return;
                                                                    }


                                                                    alterarQuantidade(
                                                                        produto,
                                                                        valor
                                                                    );
                                                                }
                                                            }
                                                        />


                                                        <button
                                                            type="button"
                                                            onClick={
                                                                () =>
                                                                    alterarQuantidade(
                                                                        produto,
                                                                        quantidade + 1
                                                                    )
                                                            }
                                                        >
                                                            +
                                                        </button>

                                                    </div>

                                                </div>

                                            </div>


                                            {/* PREÇO */}

                                            <div className="ironstore-compras-produto-preco">

                                                {
                                                    quantidade > 1 && (

                                                        <small>

                                                            {
                                                                quantidade
                                                            } ×{" "}

                                                            {
                                                                formatarPreco(
                                                                    preco
                                                                )
                                                            }

                                                        </small>

                                                    )
                                                }


                                                <strong>

                                                    {
                                                        formatarPreco(
                                                            subtotalProduto
                                                        )
                                                    }

                                                </strong>

                                            </div>

                                        </article>

                                    );

                                }
                            )
                        }

                    </div>


                    {/* =========================================
                    RESUMO
                ========================================== */}

                    <aside className="ironstore-compras-resumo">

                        <h2>
                            Resumo
                        </h2>


                        <div className="ironstore-compras-resumo-linha">

                            <span>
                                Produtos
                            </span>

                            <strong>

                                {
                                    formatarPreco(
                                        subtotal
                                    )
                                }

                            </strong>

                        </div>


                        {/* =====================================
                        DEPOIS SERÁ <Frete />
                    ====================================== */}

                        <Frete
                            temProdutos={
                                produtosSelecionados.length > 0
                            }

                            produtos={
                                produtosSelecionados
                            }

                            cepOrigem={
                                cepOrigem
                            }

                            cepDestino={
                                cepDestino
                            }

                            onValorFrete={
                                setFrete
                            }

                            onFreteSelecionado={
                                setFreteSelecionado
                            }
                        />


                        <div className="ironstore-compras-resumo-total">

                            <span>
                                Total
                            </span>

                            <strong>

                                {
                                    formatarPreco(
                                        total
                                    )
                                }

                            </strong>

                        </div>


                        <button
                            type="button"
                            className="ironstore-compras-botao-comprar"
                            disabled={
                                produtosSelecionados.length === 0 ||
                                processandoPagamento
                            }
                            onClick={
                                comprar
                            }
                        >
                            {
                                processandoPagamento
                                    ? "Carregando..."
                                    : "Comprar"
                            }
                        </button>


                        <small className="ironstore-compras-selecionados">

                            {
                                produtosSelecionados.length
                            }{" "}

                            {
                                produtosSelecionados.length === 1
                                    ? "produto selecionado"
                                    : "produtos selecionados"
                            }

                        </small>

                    </aside>
                    {
                        pagamentoAberto &&
                        checkout && (

                            <div className="ironstore-pagamento-overlay">

                                <div className="ironstore-pagamento-modal">

                                    {
                                        pagamentoConcluido ? (

                                            /* =========================================
                                               SE PAGOU: MOSTRA ISSO
                                            ========================================= */

                                            <div className="ironstore-pagamento-sucesso">

                                                <div className="ironstore-pagamento-sucesso-icone">
                                                    ✓
                                                </div>

                                                <h2>
                                                    Pagamento aprovado
                                                </h2>

                                                <p>
                                                    Sua compra foi realizada com sucesso.
                                                </p>

                                                <button
                                                    type="button"
                                                    className="ironstore-pagamento-sucesso-botao"
                                                    onClick={async () => {

                                                        try {

                                                            setErro("");

                                                            /*
                                                             * Fecha e limpa o pagamento.
                                                             */

                                                            setPagamentoAberto(
                                                                false
                                                            );

                                                            setPagamentoConcluido(
                                                                false
                                                            );

                                                            setPix(
                                                                null
                                                            );

                                                            setCheckout(
                                                                null
                                                            );

                                                            setCartaoAberto(
                                                                false
                                                            );

                                                            setResultadoCartao(
                                                                null
                                                            );


                                                            /*
                                                             * Busca o carrinho REAL
                                                             * depois do pagamento.
                                                             */

                                                            const resultado =
                                                                await buscarCarrinhoCompra();


                                                            const novosProdutos =
                                                                Array.isArray(
                                                                    resultado?.produtos
                                                                )
                                                                    ? resultado.produtos
                                                                    : [];


                                                            /*
                                                             * IMPORTANTE:
                                                             *
                                                             * Sincroniza o servidor com o cache.
                                                             *
                                                             * Produtos que já foram pagos e
                                                             * desapareceram do servidor também
                                                             * precisam desaparecer do cache.
                                                             */

                                                            const sincronizacao =
                                                                sincronizarProdutosCache(
                                                                    novosProdutos
                                                                );


                                                            const produtosAtualizados =
                                                                Array.isArray(
                                                                    sincronizacao?.produtos
                                                                )
                                                                    ? sincronizacao.produtos
                                                                    : novosProdutos;


                                                            /*
                                                             * Atualiza a tela.
                                                             */

                                                            setProdutos(
                                                                produtosAtualizados
                                                            );


                                                            /*
                                                             * Seleciona somente produtos
                                                             * que realmente continuam
                                                             * no carrinho.
                                                             */

                                                            setSelecionados(
                                                                new Set(
                                                                    produtosAtualizados.map(
                                                                        produto =>
                                                                            String(
                                                                                produto.seguimento_id
                                                                            )
                                                                    )
                                                                )
                                                            );


                                                            /*
                                                             * Atualiza modelo se vier
                                                             * novamente da API.
                                                             */

                                                            if (
                                                                resultado?.modelo
                                                            ) {

                                                                setModelo(
                                                                    String(
                                                                        resultado.modelo
                                                                    )
                                                                        .trim()
                                                                        .toLowerCase()
                                                                );

                                                            }

                                                        } catch (
                                                        erroAtualizar
                                                        ) {

                                                            console.error(
                                                                "[IRONSTORE PÓS-PAGAMENTO]",
                                                                erroAtualizar
                                                            );


                                                            setErro(
                                                                erroAtualizar?.message ||
                                                                "Pagamento aprovado, mas não foi possível atualizar o carrinho."
                                                            );

                                                        }

                                                    }}
                                                >
                                                    Concluir
                                                </button>

                                            </div>

                                        ) : (

                                            /* =========================================
                                               SE AINDA NÃO PAGOU:
                                               FICA TODO SEU MODAL NORMAL AQUI
                                            ========================================= */

                                            <>

                                                <button
                                                    type="button"
                                                    className="ironstore-pagamento-fechar"
                                                    onClick={() => {
                                                        setPagamentoAberto(false);
                                                        setPix(null);
                                                    }}
                                                >
                                                    ×
                                                </button>

                                                <h2>
                                                    Pagamento
                                                </h2>

                                                {/* RESUMO */}
                                                <div className="ironstore-pagamento-resumo">

                                                    <div>
                                                        <span>Produtos</span>

                                                        <strong>
                                                            {formatarPreco(
                                                                checkout?.subtotal
                                                            )}
                                                        </strong>
                                                    </div>

                                                    {checkout?.preco_admin && (
                                                        <div>
                                                            <span>
                                                                Desconto administrativo
                                                            </span>

                                                            <strong>
                                                                - {formatarPreco(
                                                                    checkout?.desconto
                                                                )}
                                                            </strong>
                                                        </div>
                                                    )}

                                                    <div>
                                                        <span>Frete</span>

                                                        <strong>
                                                            {formatarPreco(
                                                                checkout?.frete
                                                            )}
                                                        </strong>
                                                    </div>

                                                    <div className="ironstore-pagamento-total">

                                                        <span>
                                                            Total a pagar
                                                        </span>

                                                        <strong>
                                                            {formatarPreco(
                                                                checkout?.total
                                                            )}
                                                        </strong>

                                                    </div>

                                                </div>


                                                {/* ESCOLHER PIX OU CARTÃO */}
                                                {
                                                    !pix &&
                                                    !cartaoAberto && (

                                                        <div className="ironstore-pagamento-metodos">

                                                            <button
                                                                type="button"
                                                                disabled={processandoPagamento}
                                                                onClick={pagarComPix}
                                                            >
                                                                Pagar com Pix
                                                            </button>

                                                            <button
                                                                type="button"
                                                                disabled={processandoPagamento}
                                                                onClick={() => {
                                                                    setErro("");
                                                                    setPix(null);
                                                                    setCartaoAberto(true);
                                                                }}
                                                            >
                                                                Pagar com cartão
                                                            </button>

                                                        </div>

                                                    )
                                                }


                                                {/* PIX */}
                                                {
                                                    pix && (

                                                        <div className="ironstore-pagamento-pix">

                                                            <h3>
                                                                Pague com Pix
                                                            </h3>

                                                            {
                                                                pix.qr_code_base64 && (

                                                                    <img
                                                                        src={`data:image/png;base64,${pix.qr_code_base64}`}
                                                                        alt="QR Code Pix"
                                                                    />

                                                                )
                                                            }

                                                            {
                                                                pix.qr_code && (

                                                                    <>

                                                                        <p>
                                                                            Ou copie o código Pix:
                                                                        </p>

                                                                        <textarea
                                                                            readOnly
                                                                            value={pix.qr_code}
                                                                        />

                                                                        <button
                                                                            type="button"
                                                                            onClick={async () => {
                                                                                await navigator.clipboard.writeText(
                                                                                    pix.qr_code
                                                                                );
                                                                            }}
                                                                        >
                                                                            Copiar código Pix
                                                                        </button>

                                                                    </>

                                                                )
                                                            }

                                                            <div className="ironstore-pagamento-pix-status">

                                                                Status:{" "}

                                                                <strong>
                                                                    {
                                                                        pix.status === "approved"
                                                                            ? "Pago"
                                                                            : "Aguardando pagamento"
                                                                    }
                                                                </strong>

                                                            </div>

                                                        </div>

                                                    )
                                                }


                                                {/* AQUI ENTRA SEU FORMULÁRIO DE CARTÃO */}
                                                {
                                                    cartaoAberto && (

                                                        <div className="ironstore-pagamento-cartao">

                                                            <div className="ironstore-pagamento-cartao-topo">

                                                                <button
                                                                    type="button"
                                                                    className="ironstore-pagamento-cartao-voltar"
                                                                    disabled={processandoPagamento}
                                                                    onClick={() => {

                                                                        setCartaoAberto(false);

                                                                        setResultadoCartao(null);

                                                                        setErro("");

                                                                    }}
                                                                >
                                                                    ← Voltar
                                                                </button>

                                                                <h3>
                                                                    Pagamento com cartão
                                                                </h3>

                                                            </div>


                                                            {/* =========================================
                NÚMERO DO CARTÃO
            ========================================= */}

                                                            <label className="ironstore-pagamento-cartao-campo">

                                                                <span>
                                                                    Número do cartão
                                                                </span>

                                                                <input
                                                                    type="text"
                                                                    inputMode="numeric"
                                                                    autoComplete="cc-number"
                                                                    placeholder="0000 0000 0000 0000"
                                                                    maxLength={19}
                                                                    value={cartaoDados.numero}
                                                                    disabled={processandoPagamento}
                                                                    onChange={evento => {

                                                                        const numeros =
                                                                            somenteNumeros(
                                                                                evento.target.value
                                                                            ).slice(
                                                                                0,
                                                                                16
                                                                            );

                                                                        const formatado =
                                                                            numeros.replace(
                                                                                /(\d{4})(?=\d)/g,
                                                                                "$1 "
                                                                            );

                                                                        alterarCampoCartao(
                                                                            "numero",
                                                                            formatado
                                                                        );

                                                                    }}
                                                                />

                                                            </label>


                                                            {/* =========================================
                NOME
            ========================================= */}

                                                            <label className="ironstore-pagamento-cartao-campo">

                                                                <span>
                                                                    Nome do titular
                                                                </span>

                                                                <input
                                                                    type="text"
                                                                    autoComplete="cc-name"
                                                                    placeholder="Como está no cartão"
                                                                    value={cartaoDados.nome}
                                                                    disabled={processandoPagamento}
                                                                    onChange={evento => {

                                                                        alterarCampoCartao(
                                                                            "nome",
                                                                            evento.target.value
                                                                                .toUpperCase()
                                                                        );

                                                                    }}
                                                                />

                                                            </label>


                                                            <div className="ironstore-pagamento-cartao-linha">

                                                                {/* =====================================
                    VALIDADE
                ===================================== */}

                                                                <label className="ironstore-pagamento-cartao-campo">

                                                                    <span>
                                                                        Validade
                                                                    </span>

                                                                    <input
                                                                        type="text"
                                                                        inputMode="numeric"
                                                                        autoComplete="cc-exp"
                                                                        placeholder="MM/AA"
                                                                        maxLength={5}
                                                                        value={cartaoDados.validade}
                                                                        disabled={processandoPagamento}
                                                                        onChange={evento => {

                                                                            const numeros =
                                                                                somenteNumeros(
                                                                                    evento.target.value
                                                                                ).slice(
                                                                                    0,
                                                                                    4
                                                                                );

                                                                            let formatado =
                                                                                numeros;

                                                                            if (
                                                                                numeros.length > 2
                                                                            ) {

                                                                                formatado =
                                                                                    `${numeros.slice(
                                                                                        0,
                                                                                        2
                                                                                    )}/${numeros.slice(
                                                                                        2
                                                                                    )}`;

                                                                            }

                                                                            alterarCampoCartao(
                                                                                "validade",
                                                                                formatado
                                                                            );

                                                                        }}
                                                                    />

                                                                </label>


                                                                {/* =====================================
                    CVV
                ===================================== */}

                                                                <label className="ironstore-pagamento-cartao-campo">

                                                                    <span>
                                                                        CVV
                                                                    </span>

                                                                    <input
                                                                        type="password"
                                                                        inputMode="numeric"
                                                                        autoComplete="cc-csc"
                                                                        placeholder="123"
                                                                        maxLength={4}
                                                                        value={cartaoDados.cvv}
                                                                        disabled={processandoPagamento}
                                                                        onChange={evento => {

                                                                            alterarCampoCartao(
                                                                                "cvv",
                                                                                somenteNumeros(
                                                                                    evento.target.value
                                                                                ).slice(
                                                                                    0,
                                                                                    4
                                                                                )
                                                                            );

                                                                        }}
                                                                    />

                                                                </label>

                                                            </div>


                                                            {/* =========================================
                CPF
            ========================================= */}

                                                            <label className="ironstore-pagamento-cartao-campo">

                                                                <span>
                                                                    CPF do titular
                                                                </span>

                                                                <input
                                                                    type="text"
                                                                    inputMode="numeric"
                                                                    placeholder="000.000.000-00"
                                                                    maxLength={14}
                                                                    value={cartaoDados.cpf}
                                                                    disabled={processandoPagamento}
                                                                    onChange={evento => {

                                                                        const numeros =
                                                                            somenteNumeros(
                                                                                evento.target.value
                                                                            ).slice(
                                                                                0,
                                                                                11
                                                                            );

                                                                        let formatado =
                                                                            numeros;

                                                                        if (
                                                                            numeros.length > 9
                                                                        ) {

                                                                            formatado =
                                                                                numeros.replace(
                                                                                    /(\d{3})(\d{3})(\d{3})(\d{1,2})/,
                                                                                    "$1.$2.$3-$4"
                                                                                );

                                                                        } else if (
                                                                            numeros.length > 6
                                                                        ) {

                                                                            formatado =
                                                                                numeros.replace(
                                                                                    /(\d{3})(\d{3})(\d+)/,
                                                                                    "$1.$2.$3"
                                                                                );

                                                                        } else if (
                                                                            numeros.length > 3
                                                                        ) {

                                                                            formatado =
                                                                                numeros.replace(
                                                                                    /(\d{3})(\d+)/,
                                                                                    "$1.$2"
                                                                                );

                                                                        }

                                                                        alterarCampoCartao(
                                                                            "cpf",
                                                                            formatado
                                                                        );

                                                                    }}
                                                                />

                                                            </label>


                                                            {/* =========================================
                EMAIL
            ========================================= */}

                                                            <label className="ironstore-pagamento-cartao-campo">

                                                                <span>
                                                                    E-mail
                                                                </span>

                                                                <input
                                                                    type="email"
                                                                    autoComplete="email"
                                                                    placeholder="email@exemplo.com"
                                                                    value={cartaoDados.email}
                                                                    disabled={processandoPagamento}
                                                                    onChange={evento => {

                                                                        alterarCampoCartao(
                                                                            "email",
                                                                            evento.target.value
                                                                        );

                                                                    }}
                                                                />

                                                            </label>


                                                            {/* =========================================
                PARCELAS
            ========================================= */}

                                                            <label className="ironstore-pagamento-cartao-campo">

                                                                <span>
                                                                    Parcelas
                                                                </span>

                                                                <select
                                                                    value={cartaoDados.parcelas}
                                                                    disabled={processandoPagamento}
                                                                    onChange={evento => {

                                                                        alterarCampoCartao(
                                                                            "parcelas",
                                                                            Number(
                                                                                evento.target.value
                                                                            )
                                                                        );

                                                                    }}
                                                                >

                                                                    <option value={1}>
                                                                        1x de {formatarPreco(checkout.total)}
                                                                    </option>

                                                                    <option value={2}>
                                                                        2x de {formatarPreco(checkout.total / 2)}
                                                                    </option>

                                                                    <option value={3}>
                                                                        3x de {formatarPreco(checkout.total / 3)}
                                                                    </option>

                                                                    <option value={4}>
                                                                        4x de {formatarPreco(checkout.total / 4)}
                                                                    </option>

                                                                    <option value={5}>
                                                                        5x de {formatarPreco(checkout.total / 5)}
                                                                    </option>

                                                                    <option value={6}>
                                                                        6x de {formatarPreco(checkout.total / 6)}
                                                                    </option>

                                                                </select>

                                                            </label>


                                                            {/* =========================================
                RESULTADO
            ========================================= */}

                                                            {
                                                                resultadoCartao && (

                                                                    <div className="ironstore-pagamento-cartao-resultado">

                                                                        <strong>
                                                                            Status:{" "}
                                                                            {
                                                                                resultadoCartao.status === "approved"
                                                                                    ? "Pagamento aprovado"
                                                                                    : resultadoCartao.status === "pending"
                                                                                        ? "Pagamento pendente"
                                                                                        : resultadoCartao.status === "in_process"
                                                                                            ? "Pagamento em processamento"
                                                                                            : resultadoCartao.status === "rejected"
                                                                                                ? "Pagamento recusado"
                                                                                                : resultadoCartao.status
                                                                            }
                                                                        </strong>

                                                                    </div>

                                                                )
                                                            }


                                                            {/* =========================================
                PAGAR
            ========================================= */}

                                                            <button
                                                                type="button"
                                                                className="ironstore-pagamento-cartao-pagar"
                                                                disabled={processandoPagamento}
                                                                onClick={pagarComCartao}
                                                            >

                                                                {
                                                                    processandoPagamento
                                                                        ? "Processando..."
                                                                        : `Pagar ${formatarPreco(
                                                                            checkout.total
                                                                        )}`
                                                                }

                                                            </button>

                                                        </div>

                                                    )
                                                }

                                            </>

                                        )
                                    }

                                </div>

                            </div>

                        )
                    }
                </div>

            </section>
        </>
    );

}