import React, {
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";
import Header from "../home/header/header";
import Footer from "../home/footer/footer";
import {
    API_URL
} from "../../config";

import classicoEntrar
    from "../../modelos/classico/entrar/classico_entrar";
/* =========================================================
   CONFIGURAÇÕES
========================================================= */
/* =========================================================
   MODELOS
========================================================= */

const modelosEntrar = {
    classico: classicoEntrar
};
const GOOGLE_CLIENT_ID =
    import.meta.env
        .VITE_GOOGLE_CLIENT_ID;

console.log(
    "GOOGLE CLIENT ID:",
    GOOGLE_CLIENT_ID
);

console.log(
    "ORIGIN ATUAL:",
    window.location.origin
);

const IRONSTORE_APP_KEY_GERAL =
    import.meta.env
        .VITE_IRONSTORE_APP_KEY_GERAL;


/* =========================================================
   CHAVES LOCAIS
========================================================= */

const TOKEN_KEY =
    "ironstore_cliente_token";

const CLIENTE_KEY =
    "ironstore_cliente";


/* =========================================================
   DOMÍNIO
========================================================= */

function pegarDominioAtual() {

    return window.location.origin
        .trim()
        .replace(/\/+$/, "")
        .toLowerCase();
}


/* =========================================================
   CLIENTE VAZIO
========================================================= */

function clienteVazio() {

    return {
        id: null,
        google_id: "",
        dominio: "",

        nome: "",
        sobrenome: "",
        data_nascimento: "",
        email: "",

        cep: "",
        rua_avenida: "",
        numero: "",
        bairro: "",
        cidade: "",

        foto: "",
        whatsapp: "",
        cpf_cnpj: "",
        mensagem: ""
    };
}

/* =========================================================
   COMPONENTE
========================================================= */

export default function Entrar() {
    const [
        nomeLoja,
        setNomeLoja
    ] = useState("");
    const [
        modelo,
        setModelo
    ] = useState("classico");

    const estiloModelo =
        modelosEntrar[modelo] ||
        modelosEntrar.classico;
    /* =========================================================
       BUSCAR MODELO DA LOJA
    ========================================================= */
    const [
        entrandoGoogle,
        setEntrandoGoogle
    ] = useState(false);


    /* =====================================================
   CONSULTA DE CEP
===================================================== */

    const [
        buscandoCep,
        setBuscandoCep
    ] = useState(false);

    const [
        erroCep,
        setErroCep
    ] = useState("");

    useEffect(
        () => {

            let ativo = true;

            async function buscarModelo() {

                try {

                    const dominio =
                        pegarDominioAtual();

                    const resposta =
                        await fetch(
                            `${API_URL}/ironstore/clientes/modelo?dominio=${encodeURIComponent(dominio)}`,
                            {
                                method: "GET",

                                headers: {
                                    "X-IronStore-Key":
                                        IRONSTORE_APP_KEY_GERAL
                                }
                            }
                        );

                    if (!resposta.ok) {
                        return;
                    }

                    const resultado =
                        await resposta.json();

                    if (!ativo) {
                        return;
                    }

                    setModelo(
                        resultado?.modelo ||
                        "classico"
                    );

                } catch (erroModelo) {

                    console.error(
                        "[IRONSTORE MODELO ENTRAR]",
                        erroModelo
                    );
                }
            }

            buscarModelo();

            return () => {
                ativo = false;
            };

        },
        []
    );
    /* =========================================================
       MODELOS
    ========================================================= */

    /* =========================================================
       NOME DA LOJA
       USA O MESMO CACHE DO COMPONENTE ABA
    ========================================================= */

    useEffect(() => {

        function carregarNomeLoja() {

            const dominio =
                pegarDominioAtual();

            const chave =
                `ironstore_identidade_aba_${dominio}`;

            try {

                const salvo =
                    localStorage.getItem(
                        chave
                    );

                if (!salvo) {
                    return;
                }

                const dados =
                    JSON.parse(salvo);

                setNomeLoja(
                    dados?.loja || ""
                );

            } catch (erro) {

                console.warn(
                    "[ENTRAR] Não foi possível ler o nome da loja:",
                    erro
                );
            }
        }

        carregarNomeLoja();

        /*
            O Aba consulta o servidor de forma
            assíncrona. Então verificamos novamente
            caso o cache ainda não existisse.
        */

        const intervalo =
            window.setInterval(
                carregarNomeLoja,
                500
            );

        const timeout =
            window.setTimeout(
                () => {
                    window.clearInterval(
                        intervalo
                    );
                },
                5000
            );

        return () => {

            window.clearInterval(
                intervalo
            );

            window.clearTimeout(
                timeout
            );
        };

    }, []);
    const googleButtonRef =
        useRef(null);

    const googleInicializadoRef =
        useRef(false);


    /* =====================================================
       ESTADOS
    ===================================================== */

    const [
        cliente,
        setCliente
    ] = useState(
        clienteVazio
    );

    const [
        logado,
        setLogado
    ] = useState(false);

    const [
        carregando,
        setCarregando
    ] = useState(true);

    const [
        salvando,
        setSalvando
    ] = useState(false);

    const [
        erro,
        setErro
    ] = useState("");

    const [
        sucesso,
        setSucesso
    ] = useState("");


    /* =====================================================
       SALVAR LOGIN LOCALMENTE
    ===================================================== */

    const salvarSessao = useCallback(
        (
            token,
            dadosCliente
        ) => {

            localStorage.setItem(
                TOKEN_KEY,
                token
            );

            localStorage.setItem(
                CLIENTE_KEY,
                JSON.stringify(
                    dadosCliente
                )
            );

            setCliente(
                {
                    ...clienteVazio(),
                    ...dadosCliente
                }
            );

            setLogado(true);
        },
        []
    );


    /* =====================================================
       LOGIN GOOGLE CONCLUÍDO
    ===================================================== */

    /* =====================================================
       LOGIN GOOGLE CONCLUÍDO
    ===================================================== */

    const receberGoogle =
        useCallback(
            async (
                respostaGoogle
            ) => {

                console.log(
                    "[GOOGLE 1] CALLBACK RECEBIDO",
                    respostaGoogle
                );

                try {

                    setErro("");
                    setSucesso("");
                    setEntrandoGoogle(true);

                    const credential =
                        respostaGoogle
                            ?.credential;

                    console.log(
                        "[GOOGLE 2] CREDENTIAL:",
                        credential
                            ? "RECEBIDA"
                            : "NÃO RECEBIDA"
                    );

                    if (!credential) {

                        throw new Error(
                            "O Google não retornou uma credencial."
                        );
                    }

                    const dominio =
                        pegarDominioAtual();

                    const url =
                        `${API_URL}/ironstore/clientes/google`;

                    console.log(
                        "[GOOGLE 3] API_URL:",
                        API_URL
                    );

                    console.log(
                        "[GOOGLE 4] URL POST:",
                        url
                    );

                    console.log(
                        "[GOOGLE 5] DOMINIO:",
                        dominio
                    );

                    console.log(
                        "[GOOGLE 6] APP KEY:",
                        IRONSTORE_APP_KEY_GERAL
                            ? "CONFIGURADA"
                            : "NÃO CONFIGURADA"
                    );

                    console.log(
                        "[GOOGLE 7] INICIANDO FETCH"
                    );

                    const resposta =
                        await fetch(
                            url,
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/json",

                                    "X-IronStore-Key":
                                        IRONSTORE_APP_KEY_GERAL
                                },

                                body:
                                    JSON.stringify({
                                        credential:
                                            credential,

                                        dominio:
                                            dominio
                                    })
                            }
                        );

                    console.log(
                        "[GOOGLE 8] FETCH RESPONDEU:",
                        resposta.status,
                        resposta.statusText
                    );

                    const texto =
                        await resposta.text();

                    console.log(
                        "[GOOGLE 9] RESPOSTA BRUTA:",
                        texto
                    );

                    let resultado = {};

                    if (texto) {

                        try {

                            resultado =
                                JSON.parse(
                                    texto
                                );

                        } catch {

                            throw new Error(
                                `Backend retornou resposta inválida: ${texto}`
                            );
                        }
                    }

                    if (!resposta.ok) {

                        throw new Error(
                            resultado?.detail ||
                            `Erro HTTP ${resposta.status}`
                        );
                    }

                    console.log(
                        "[GOOGLE 10] LOGIN ACEITO:",
                        resultado
                    );

                    if (
                        !resultado?.token
                    ) {

                        throw new Error(
                            "Backend não retornou o token do cliente."
                        );
                    }

                    salvarSessao(
                        resultado.token,
                        resultado.cliente
                    );

                    if (resultado.novo_cliente === false) {
                        window.location.replace("/perfil");
                        return;
                    }

                } catch (erroLogin) {

                    console.error(
                        "[GOOGLE ERRO]",
                        erroLogin
                    );

                    setErro(
                        erroLogin?.message ||
                        "Erro ao entrar."
                    );

                } finally {

                    console.log(
                        "[GOOGLE 11] FINALIZADO"
                    );

                    setEntrandoGoogle(false);
                    setCarregando(false);
                }
            },
            [
                salvarSessao
            ]
        );

    /* =====================================================
       INICIALIZAR BOTÃO GOOGLE
    ===================================================== */

    const inicializarGoogle =
        useCallback(
            () => {

                if (
                    googleInicializadoRef.current
                ) {
                    return;
                }

                if (
                    !window.google
                        ?.accounts
                        ?.id
                ) {
                    return;
                }

                if (
                    !GOOGLE_CLIENT_ID
                ) {

                    setErro(
                        "VITE_GOOGLE_CLIENT_ID não configurado."
                    );

                    return;
                }

                if (
                    !googleButtonRef.current
                ) {
                    return;
                }

                window.google
                    .accounts
                    .id
                    .initialize({
                        client_id:
                            GOOGLE_CLIENT_ID,

                        callback:
                            receberGoogle,

                        use_fedcm_for_prompt:
                            true,

                        cancel_on_tap_outside:
                            false
                    });

                googleButtonRef.current
                    .innerHTML = "";

                window.google
                    .accounts
                    .id
                    .renderButton(
                        googleButtonRef.current,
                        {
                            type: "standard",
                            theme: "outline",
                            size: "large",
                            text: "continue_with",
                            shape: "rectangular",
                            logo_alignment: "left",
                            width: 320
                        }
                    );

                googleInicializadoRef.current =
                    true;
            },
            [
                receberGoogle
            ]
        );


    /* =====================================================
       VERIFICAR SESSÃO EXISTENTE
    ===================================================== */

    useEffect(
        () => {

            async function verificar() {

                const token =
                    localStorage.getItem(
                        TOKEN_KEY
                    );

                if (!token) {

                    setCarregando(false);

                    return;
                }

                try {

                    const resposta =
                        await fetch(
                            `${API_URL}/ironstore/clientes/me`,
                            {
                                headers: {
                                    "Authorization":
                                        `Bearer ${token}`,

                                    "X-IronStore-Key":
                                        IRONSTORE_APP_KEY_GERAL
                                }
                            }
                        );

                    if (!resposta.ok) {

                        localStorage.removeItem(
                            TOKEN_KEY
                        );

                        localStorage.removeItem(
                            CLIENTE_KEY
                        );

                        setLogado(false);

                        return;
                    }

                    const resultado =
                        await resposta.json();

                    setCliente({
                        ...clienteVazio(),
                        ...resultado.cliente
                    });

                    localStorage.setItem(
                        CLIENTE_KEY,
                        JSON.stringify(
                            resultado.cliente
                        )
                    );

                    window.location.replace("/");
                    return;

                } catch (erroSessao) {

                    console.error(
                        "[IRONSTORE SESSÃO]",
                        erroSessao
                    );

                } finally {

                    setCarregando(false);
                }
            }

            verificar();

        },
        []
    );


    /* =====================================================
       CARREGAR GOOGLE
    ===================================================== */

    useEffect(
        () => {

            if (logado) {
                return;
            }

            inicializarGoogle();

            const intervalo =
                window.setInterval(
                    () => {

                        if (
                            window.google
                                ?.accounts
                                ?.id
                        ) {

                            inicializarGoogle();

                            window.clearInterval(
                                intervalo
                            );
                        }

                    },
                    150
                );

            return () => {

                window.clearInterval(
                    intervalo
                );
            };

        },
        [
            logado,
            inicializarGoogle
        ]
    );


    /* =====================================================
       ALTERAR CAMPO
    ===================================================== */

    function alterarCampo(
        campo,
        valor
    ) {

        setCliente(
            anterior => ({
                ...anterior,
                [campo]: valor
            })
        );

        setSucesso("");
    }

    /* =====================================================
       SOMENTE NÚMEROS
    ===================================================== */

    function somenteNumeros(valor) {
        return String(valor || "")
            .replace(/\D/g, "");
    }
    /* =====================================================
       FORMATAR CEP
    ===================================================== */

    function formatarCep(valor) {

        const numeros =
            somenteNumeros(valor)
                .slice(0, 8);

        if (numeros.length <= 5) {
            return numeros;
        }

        return numeros.replace(
            /^(\d{5})(\d+)/,
            "$1-$2"
        );
    }

    /* =====================================================
       FORMATAR CPF / CNPJ
    ===================================================== */

    function formatarCpfCnpj(valor) {

        const numeros =
            somenteNumeros(valor)
                .slice(0, 14);

        if (numeros.length <= 11) {

            return numeros
                .replace(
                    /(\d{3})(\d)/,
                    "$1.$2"
                )
                .replace(
                    /(\d{3})(\d)/,
                    "$1.$2"
                )
                .replace(
                    /(\d{3})(\d{1,2})$/,
                    "$1-$2"
                );
        }

        return numeros
            .replace(
                /^(\d{2})(\d)/,
                "$1.$2"
            )
            .replace(
                /^(\d{2})\.(\d{3})(\d)/,
                "$1.$2.$3"
            )
            .replace(
                /\.(\d{3})(\d)/,
                ".$1/$2"
            )
            .replace(
                /(\d{4})(\d)/,
                "$1-$2"
            );
    }


    /* =====================================================
       VALIDAR CPF
    ===================================================== */

    function cpfValido(valor) {

        const cpf =
            somenteNumeros(valor);

        if (cpf.length !== 11) {
            return false;
        }

        if (/^(\d)\1{10}$/.test(cpf)) {
            return false;
        }

        let soma = 0;

        for (let i = 0; i < 9; i++) {
            soma +=
                Number(cpf[i]) *
                (10 - i);
        }

        let digito =
            (soma * 10) % 11;

        if (digito === 10) {
            digito = 0;
        }

        if (
            digito !==
            Number(cpf[9])
        ) {
            return false;
        }

        soma = 0;

        for (let i = 0; i < 10; i++) {
            soma +=
                Number(cpf[i]) *
                (11 - i);
        }

        digito =
            (soma * 10) % 11;

        if (digito === 10) {
            digito = 0;
        }

        return (
            digito ===
            Number(cpf[10])
        );
    }


    /* =====================================================
       VALIDAR CNPJ
    ===================================================== */

    function cnpjValido(valor) {

        const cnpj =
            somenteNumeros(valor);

        if (cnpj.length !== 14) {
            return false;
        }

        if (/^(\d)\1{13}$/.test(cnpj)) {
            return false;
        }

        function calcularDigito(
            base,
            pesos
        ) {

            let soma = 0;

            for (
                let i = 0;
                i < pesos.length;
                i++
            ) {

                soma +=
                    Number(base[i]) *
                    pesos[i];
            }

            const resto =
                soma % 11;

            return resto < 2
                ? 0
                : 11 - resto;
        }

        const primeiro =
            calcularDigito(
                cnpj.slice(0, 12),
                [
                    5, 4, 3, 2,
                    9, 8, 7, 6,
                    5, 4, 3, 2
                ]
            );

        if (
            primeiro !==
            Number(cnpj[12])
        ) {
            return false;
        }

        const segundo =
            calcularDigito(
                cnpj.slice(0, 13),
                [
                    6, 5, 4, 3, 2,
                    9, 8, 7, 6,
                    5, 4, 3, 2
                ]
            );

        return (
            segundo ===
            Number(cnpj[13])
        );
    }


    /* =====================================================
       VALIDAR CPF OU CNPJ
    ===================================================== */

    function cpfCnpjValido(valor) {

        const numeros =
            somenteNumeros(valor);

        if (!numeros) {
            return true;
        }

        if (numeros.length === 11) {
            return cpfValido(numeros);
        }

        if (numeros.length === 14) {
            return cnpjValido(numeros);
        }

        return false;
    }


    /* =====================================================
       FORMATAR WHATSAPP
       PADRÃO BRASIL: (11) 99999-9999
    ===================================================== */

    function formatarWhatsapp(valor) {

        const numeros =
            somenteNumeros(valor)
                .slice(0, 11);

        if (numeros.length <= 2) {
            return numeros;
        }

        if (numeros.length <= 7) {

            return numeros.replace(
                /^(\d{2})(\d+)/,
                "($1) $2"
            );
        }

        return numeros.replace(
            /^(\d{2})(\d{5})(\d{0,4})/,
            "($1) $2-$3"
        );
    }


    /* =====================================================
       VALIDAR WHATSAPP
    ===================================================== */

    function whatsappValido(valor) {

        const numeros =
            somenteNumeros(valor);

        if (!numeros) {
            return true;
        }

        return /^[1-9]{2}9\d{8}$/.test(
            numeros
        );
    }

    /* =====================================================
   VALIDAÇÃO DO CADASTRO
===================================================== */

    const cpfCnpjEstaValido =
        cpfCnpjValido(
            cliente.cpf_cnpj
        );

    const whatsappEstaValido =
        whatsappValido(
            cliente.whatsapp
        );

    const cadastroValido =
        cpfCnpjEstaValido &&
        whatsappEstaValido;

    const motivoCadastroInvalido =
        !cpfCnpjEstaValido
            ? "Informe um CPF ou CNPJ válido."
            : !whatsappEstaValido
                ? "Informe um WhatsApp válido no padrão (11) 99999-9999."
                : "";
    /* =====================================================
       SALVAR PERFIL
    ===================================================== */

    async function salvarPerfil() {

        const token =
            localStorage.getItem(
                TOKEN_KEY
            );

        if (!token) {

            setErro(
                "Sua sessão expirou."
            );

            setLogado(false);

            return;
        }

        try {

            setErro("");
            setSucesso("");
            setSalvando(true);

            const resposta =
                await fetch(
                    `${API_URL}/ironstore/clientes/me`,
                    {
                        method: "PUT",

                        headers: {
                            "Content-Type":
                                "application/json",

                            "Authorization":
                                `Bearer ${token}`,

                            "X-IronStore-Key":
                                IRONSTORE_APP_KEY_GERAL
                        },

                        body:
                            JSON.stringify({
                                nome:
                                    cliente.nome,

                                sobrenome:
                                    cliente.sobrenome,

                                data_nascimento:
                                    cliente.data_nascimento,

                                cep:
                                    cliente.cep,

                                rua_avenida:
                                    cliente.rua_avenida,

                                numero:
                                    cliente.numero,

                                bairro:
                                    cliente.bairro,

                                cidade:
                                    cliente.cidade,

                                foto:
                                    cliente.foto,

                                whatsapp:
                                    cliente.whatsapp,

                                cpf_cnpj:
                                    cliente.cpf_cnpj,

                                mensagem:
                                    cliente.mensagem
                            })
                    }
                );

            const resultado =
                await resposta.json();

            if (!resposta.ok) {

                throw new Error(
                    resultado?.detail ||
                    "Não foi possível salvar."
                );
            }

            setCliente({
                ...clienteVazio(),
                ...resultado.cliente
            });

            localStorage.setItem(
                CLIENTE_KEY,
                JSON.stringify(
                    resultado.cliente
                )
            );

            window.location.href = "/";

        } catch (erroSalvar) {

            setErro(
                erroSalvar.message ||
                "Erro ao salvar."
            );

        } finally {

            setSalvando(false);
        }
    }


    /* =====================================================
       SAIR
    ===================================================== */

    function sair() {

        localStorage.removeItem(
            TOKEN_KEY
        );

        localStorage.removeItem(
            CLIENTE_KEY
        );

        setCliente(
            clienteVazio()
        );

        setLogado(false);
        setErro("");
        setSucesso("");

        googleInicializadoRef.current =
            false;
    }


    /* =====================================================
       CARREGANDO
    ===================================================== */

    if (carregando) {

        return (
            <>
                <style>
                    {estiloModelo}
                </style>

                <section
                    className="ironstore-entrar"
                >
                    ...
                </section>
            </>
        );
    }
    /* =====================================================
       BUSCAR ENDEREÇO PELO CEP
    ===================================================== */

    async function buscarEnderecoPorCep(valorCep) {

        const cep =
            somenteNumeros(valorCep);

        if (cep.length !== 8) {
            return;
        }

        try {

            setBuscandoCep(true);
            setErroCep("");

            const resposta =
                await fetch(
                    `https://viacep.com.br/ws/${cep}/json/`
                );

            if (!resposta.ok) {

                throw new Error(
                    "Não foi possível consultar o CEP."
                );
            }

            const resultado =
                await resposta.json();

            if (resultado?.erro) {

                setErroCep(
                    "CEP não encontrado."
                );

                return;
            }

            setCliente(
                anterior => ({
                    ...anterior,

                    cep:
                        formatarCep(cep),

                    rua_avenida:
                        resultado.logradouro ||
                        "",

                    bairro:
                        resultado.bairro ||
                        "",

                    cidade:
                        resultado.localidade ||
                        ""
                })
            );

        } catch (erroConsultaCep) {

            console.error(
                "[IRONSTORE CADASTRO CEP]",
                erroConsultaCep
            );

            setErroCep(
                erroConsultaCep?.message ||
                "Não foi possível consultar o CEP."
            );

        } finally {

            setBuscandoCep(false);
        }
    }

    /* =====================================================
       NÃO LOGADO
    ===================================================== */
    /* =====================================================
       AUTENTICANDO COM GOOGLE
    ===================================================== */

    if (entrandoGoogle) {

        return (
            <>
                <Header />

                <style>
                    {estiloModelo}
                </style>

                <section className="ironstore-entrar">

                    <div className="ironstore-login-processando">

                        <div className="ironstore-login-processando-icone">

                            <div className="ironstore-login-spinner" />

                        </div>

                        <div className="ironstore-login-processando-texto">

                            <span>
                                ACESSO SEGURO
                            </span>

                            <h1>
                                Entrando na sua conta
                            </h1>

                            <p>
                                Estamos verificando sua conta Google
                                e preparando seus dados.
                            </p>

                        </div>

                        <div className="ironstore-login-processando-status">

                            <span />

                            Autenticando com Google

                        </div>

                    </div>

                </section>

                <Footer />
            </>
        );
    }
    if (!logado) {

        return (
            <>
                <Header />

                <style>
                    {estiloModelo}
                </style>

                <section className="ironstore-entrar">

                    <div className="ironstore-entrar-login">

                        <div className="ironstore-login-topo">
                            <h1>
                                Acesse sua conta
                            </h1>

                            <p>
                                Entre com sua conta Google para
                                continuar suas compras.
                            </p>
                        </div>

                        <div className="ironstore-login-google-area">

                            <div
                                ref={googleButtonRef}
                                className="ironstore-google-botao"
                            />

                        </div>

                        <div className="ironstore-login-seguranca">
                            Seus dados são utilizados apenas
                            para identificar sua conta e
                            facilitar suas compras.
                        </div>

                        {erro && (
                            <div className="ironstore-entrar-erro">
                                {erro}
                            </div>
                        )}

                    </div>

                </section>

                <Footer />
            </>
        );
    }

    /* =====================================================
       PERFIL
    ===================================================== */

    return (
        <>
            <Header />

            <style>
                {estiloModelo}
            </style>
            <section
                className="ironstore-entrar"
            >
                <div className="ironstore-cadastro-introducao">

                    <span className="ironstore-cadastro-etapa">
                        ÚLTIMA ETAPA
                    </span>

                    <h1>
                        Complete seu cadastro
                        {nomeLoja
                            ? ` na ${nomeLoja}`
                            : ""
                        }
                    </h1>

                    <p>
                        Confira seus dados e, se desejar,
                        adicione suas informações de contato
                        e entrega.
                    </p>

                </div>
                <div
                    className="ironstore-perfil"
                >

                    {/* =========================================
                    CABEÇALHO
                ========================================= */}

                    <div
                        className="ironstore-perfil-cabecalho"
                    >

                        {cliente.foto && (
                            <img
                                src={cliente.foto}
                                alt={cliente.nome || "Perfil"}
                            />
                        )}

                        <div>

                            <h1>
                                {cliente.nome || "Minha conta"}
                                {" "}
                                {cliente.sobrenome || ""}
                            </h1>

                            <span>
                                {cliente.email}
                            </span>

                        </div>

                        <button
                            type="button"
                            onClick={sair}
                        >
                            Sair
                        </button>

                    </div>


                    {/* =========================================
                    DADOS PESSOAIS
                ========================================= */}

                    <div
                        className="ironstore-perfil-area"
                    >

                        <h2>
                            Informações pessoais
                        </h2>


                        <label>
                            Nome

                            <input
                                type="text"
                                value={cliente.nome || ""}
                                onChange={
                                    e =>
                                        alterarCampo(
                                            "nome",
                                            e.target.value
                                        )
                                }
                            />
                        </label>


                        <label>
                            Sobrenome

                            <input
                                type="text"
                                value={
                                    cliente.sobrenome ||
                                    ""
                                }
                                onChange={
                                    e =>
                                        alterarCampo(
                                            "sobrenome",
                                            e.target.value
                                        )
                                }
                            />
                        </label>


                        <label>
                            E-mail

                            <input
                                type="email"
                                value={cliente.email || ""}
                                readOnly
                                disabled
                            />
                        </label>


                        <label>
                            Data de nascimento

                            <input
                                type="date"
                                value={
                                    cliente.data_nascimento ||
                                    ""
                                }
                                onChange={
                                    e =>
                                        alterarCampo(
                                            "data_nascimento",
                                            e.target.value
                                        )
                                }
                            />
                        </label>


                        <label>
                            WhatsApp

                            <input
                                type="tel"
                                inputMode="numeric"
                                placeholder="(11) 99999-9999"
                                value={
                                    cliente.whatsapp ||
                                    ""
                                }
                                onChange={
                                    e =>
                                        alterarCampo(
                                            "whatsapp",
                                            formatarWhatsapp(
                                                e.target.value
                                            )
                                        )
                                }
                            />

                            {!whatsappEstaValido && (
                                <small
                                    className="ironstore-campo-invalido"
                                >
                                    Informe um WhatsApp válido.
                                </small>
                            )}
                        </label>

                        <label>
                            CPF ou CNPJ

                            <input
                                type="text"
                                inputMode="numeric"
                                placeholder="000.000.000-00 ou 00.000.000/0000-00"
                                value={
                                    cliente.cpf_cnpj ||
                                    ""
                                }
                                onChange={
                                    e =>
                                        alterarCampo(
                                            "cpf_cnpj",
                                            formatarCpfCnpj(
                                                e.target.value
                                            )
                                        )
                                }
                            />

                            {!cpfCnpjEstaValido ? (
                                <small
                                    className="ironstore-campo-invalido"
                                >
                                    CPF ou CNPJ inválido.
                                </small>
                            ) : (
                                <small>
                                    Opcional. Utilizado para
                                    emissão de Notas fiscais das compras.
                                </small>
                            )}
                        </label>

                    </div>


                    {/* =========================================
                    ENDEREÇO
                ========================================= */}

                    {/* =========================================
    ENDEREÇO
========================================= */}

                    <div
                        className="ironstore-perfil-area"
                    >

                        <h2>
                            Endereço
                        </h2>


                        {/* =====================================
        CEP
    ===================================== */}

                        <label>
                            CEP

                            <input
                                type="text"
                                inputMode="numeric"
                                autoComplete="postal-code"
                                maxLength={9}
                                placeholder="00000-000"
                                value={
                                    cliente.cep || ""
                                }
                                onChange={
                                    e => {

                                        const valor =
                                            formatarCep(
                                                e.target.value
                                            );

                                        alterarCampo(
                                            "cep",
                                            valor
                                        );

                                        setErroCep("");

                                        if (
                                            somenteNumeros(valor)
                                                .length === 8
                                        ) {

                                            buscarEnderecoPorCep(
                                                valor
                                            );
                                        }
                                    }
                                }
                            />

                            {buscandoCep && (
                                <small>
                                    Buscando endereço...
                                </small>
                            )}

                            {!buscandoCep && erroCep && (
                                <small
                                    className="ironstore-campo-invalido"
                                >
                                    {erroCep}
                                </small>
                            )}

                            {!buscandoCep && !erroCep && (
                                <small>
                                    Digite o CEP para preencher
                                    o endereço automaticamente.
                                </small>
                            )}

                        </label>


                        {/* =====================================
        RUA / AVENIDA
    ===================================== */}

                        <label>
                            Rua / Avenida

                            <input
                                type="text"
                                autoComplete="street-address"
                                placeholder="Rua ou avenida"
                                value={
                                    cliente.rua_avenida ||
                                    ""
                                }
                                onChange={
                                    e =>
                                        alterarCampo(
                                            "rua_avenida",
                                            e.target.value
                                        )
                                }
                            />

                        </label>


                        {/* =====================================
        NÚMERO
    ===================================== */}

                        <label>
                            Número

                            <input
                                type="text"
                                inputMode="numeric"
                                autoComplete="address-line2"
                                placeholder="Número"
                                value={
                                    cliente.numero ||
                                    ""
                                }
                                onChange={
                                    e =>
                                        alterarCampo(
                                            "numero",
                                            e.target.value
                                        )
                                }
                            />

                        </label>


                        {/* =====================================
        BAIRRO
    ===================================== */}

                        <label>
                            Bairro

                            <input
                                type="text"
                                placeholder="Bairro"
                                value={
                                    cliente.bairro ||
                                    ""
                                }
                                onChange={
                                    e =>
                                        alterarCampo(
                                            "bairro",
                                            e.target.value
                                        )
                                }
                            />

                        </label>


                        {/* =====================================
        CIDADE
    ===================================== */}

                        <label>
                            Cidade

                            <input
                                type="text"
                                autoComplete="address-level2"
                                placeholder="Cidade"
                                value={
                                    cliente.cidade ||
                                    ""
                                }
                                onChange={
                                    e =>
                                        alterarCampo(
                                            "cidade",
                                            e.target.value
                                        )
                                }
                            />

                        </label>

                    </div>

                    {/* =========================================
                    MENSAGEM
                ========================================= */}

                    <div
                        className="ironstore-perfil-area"
                    >

                        <h2>
                            Mensagem
                        </h2>

                        <textarea
                            value={
                                cliente.mensagem ||
                                ""
                            }
                            onChange={
                                e =>
                                    alterarCampo(
                                        "mensagem",
                                        e.target.value
                                    )
                            }
                            placeholder="Mensagem opcional"
                        />

                    </div>


                    {/* =========================================
                    RETORNOS
                ========================================= */}

                    {erro && (
                        <div
                            className="ironstore-entrar-erro"
                        >
                            {erro}
                        </div>
                    )}

                    {sucesso && (
                        <div
                            className="ironstore-entrar-sucesso"
                        >
                            {sucesso}
                        </div>
                    )}


                    {/* =========================================
                    SALVAR
                ========================================= */}

                    <button
                        type="button"
                        onClick={salvarPerfil}
                        disabled={
                            salvando ||
                            !cadastroValido
                        }
                        title={
                            !cadastroValido
                                ? motivoCadastroInvalido
                                : "Iniciar cadastro"
                        }
                    >
                        {salvando
                            ? "Iniciando..."
                            : "Iniciar cadastro"
                        }
                    </button>

                </div>

            </section>
            <Footer />
        </>

    );
}