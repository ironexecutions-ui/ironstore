import React, {
    useEffect,
    useState
} from "react";

import {
    API_URL
} from "../../../../config";

import classicoDados from "../../../../modelos/classico/dados/classico_dados";

import {
    pegarDominioAtual,
    pegarCache,
    salvarCache,
    cacheDiferente,
    apagarCache
} from "./cache";


/* =========================================================
   MODELOS
========================================================= */

const modelosDados = {
    classico: classicoDados
};


/* =========================================================
   CHAVE GERAL
========================================================= */

const IRONSTORE_APP_KEY_GERAL =
    import.meta.env
        .VITE_IRONSTORE_APP_KEY_GERAL;


/* =========================================================
   NORMALIZAR DADOS
========================================================= */

const normalizarDados = (dados) => {
    if (!dados) {
        return null;
    }

    return {
        id:
            dados.id ?? null,

        nome:
            dados.nome || "",

        sobrenome:
            dados.sobrenome || "",

        email:
            dados.email || "",

        foto:
            dados.foto || "",

        whatsapp:
            dados.whatsapp || "",

        cpf_cnpj:
            dados.cpf_cnpj || "",

        data_nascimento:
            dados.data_nascimento || "",

        rua_avenida:
            dados.rua_avenida || "",

        numero:
            dados.numero || "",

        bairro:
            dados.bairro || "",

        cidade:
            dados.cidade || "",

        cep:
            dados.cep || ""
    };
};

/* =========================================================
   SOMENTE NÚMEROS
========================================================= */

const somenteNumeros = (valor) => {
    return String(valor || "")
        .replace(/\D/g, "");
};


/* =========================================================
   MÁSCARA WHATSAPP
========================================================= */

const formatarWhatsapp = (valor) => {

    let numeros =
        somenteNumeros(valor)
            .slice(0, 11);


    if (numeros.length <= 2) {
        return numeros;
    }


    if (numeros.length <= 6) {

        return numeros.replace(
            /^(\d{2})(\d+)/,
            "($1) $2"
        );
    }


    /*
        Telefone com 10 dígitos
        (11) 1234-5678
    */

    if (numeros.length <= 10) {

        return numeros.replace(
            /^(\d{2})(\d{4})(\d+)/,
            "($1) $2-$3"
        );
    }


    /*
        Celular com 11 dígitos
        (11) 91234-5678
    */

    return numeros.replace(
        /^(\d{2})(\d{5})(\d{4})$/,
        "($1) $2-$3"
    );
};


/* =========================================================
   MÁSCARA CPF / CNPJ
========================================================= */

const formatarCpfCnpj = (valor) => {

    const numeros =
        somenteNumeros(valor)
            .slice(0, 14);

    // CPF
    if (numeros.length <= 11) {

        return numeros
            .replace(
                /^(\d{3})(\d)/,
                "$1.$2"
            )
            .replace(
                /^(\d{3})\.(\d{3})(\d)/,
                "$1.$2.$3"
            )
            .replace(
                /\.(\d{3})(\d)/,
                ".$1-$2"
            );
    }

    // CNPJ
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
};

const formatarDataNascimento = (valor) => {

    if (!valor) {
        return "";
    }

    const partes =
        String(valor)
            .split("-");

    if (partes.length !== 3) {
        return valor;
    }

    const [
        ano,
        mes,
        dia
    ] = partes;

    const meses = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
    ];

    const indiceMes =
        Number(mes) - 1;

    if (
        indiceMes < 0 ||
        indiceMes > 11
    ) {
        return valor;
    }

    return `${Number(dia)} de ${meses[indiceMes]} de ${ano}`;
};
/* =========================================================
   MÁSCARA CEP
========================================================= */

const formatarCep = (valor) => {

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
};
/* =========================================================
   COMPONENTE
========================================================= */

export default function Dados() {
    const [
        modalEndereco,
        setModalEndereco
    ] = useState(false);


    const [
        enderecoEdicao,
        setEnderecoEdicao
    ] = useState({
        cep: "",
        rua_avenida: "",
        numero: "",
        bairro: "",
        cidade: ""
    });


    const [
        salvandoEndereco,
        setSalvandoEndereco
    ] = useState(false);


    const [
        erroEndereco,
        setErroEndereco
    ] = useState("");
    const [
        modelo,
        setModelo
    ] = useState("classico");


    const estiloModelo =
        modelosDados[modelo] ||
        modelosDados.classico;


    /* =====================================================
       CACHE INICIAL
    ===================================================== */

    const [
        dados,
        setDados
    ] = useState(() => {

        const cache =
            pegarCache(
                "perfil_dados",
                true
            );

        return normalizarDados(
            cache
        );
    });


    const [
        carregando,
        setCarregando
    ] = useState(() => {

        return !pegarCache(
            "perfil_dados",
            true
        );
    });


    const [
        erro,
        setErro
    ] = useState("");

    const [
        editando,
        setEditando
    ] = useState(null);


    const [
        valorEdicao,
        setValorEdicao
    ] = useState("");


    const [
        valorEdicaoSecundario,
        setValorEdicaoSecundario
    ] = useState("");


    const [
        salvando,
        setSalvando
    ] = useState(false);


    const [
        erroEdicao,
        setErroEdicao
    ] = useState("");
    /* =====================================================
       MODELO VISUAL
    ===================================================== */
    const [
        buscandoCep,
        setBuscandoCep
    ] = useState(false);

    async function buscarEnderecoPorCep(
        valorCep
    ) {

        const cep =
            somenteNumeros(
                valorCep
            );


        /* =====================================================
           SÓ BUSCA COM 8 NÚMEROS
        ===================================================== */

        if (cep.length !== 8) {
            return;
        }


        try {

            setBuscandoCep(true);
            setErroEndereco("");


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


            /* =================================================
               CEP NÃO ENCONTRADO
            ================================================= */

            if (resultado?.erro) {

                setErroEndereco(
                    "CEP não encontrado."
                );

                return;
            }


            /* =================================================
               PREENCHER ENDEREÇO
            ================================================= */

            setEnderecoEdicao(
                anterior => ({
                    ...anterior,

                    cep:
                        formatarCep(cep),

                    rua_avenida:
                        resultado.logradouro ||
                        anterior.rua_avenida,

                    bairro:
                        resultado.bairro ||
                        anterior.bairro,

                    cidade:
                        resultado.localidade ||
                        anterior.cidade
                })
            );


        } catch (erroCep) {

            console.error(
                "[IRONSTORE CONSULTAR CEP]",
                erroCep
            );

            setErroEndereco(
                erroCep?.message ||
                "Não foi possível consultar o CEP."
            );


        } finally {

            setBuscandoCep(false);
        }
    }

    useEffect(() => {

        let ativo = true;


        async function buscarModelo() {

            try {

                const dominio =
                    pegarDominioAtual();


                const resposta =
                    await fetch(
                        `${API_URL}/ironstore/clientes/modelo?dominio=${encodeURIComponent(
                            dominio
                        )}`,
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


                const modeloRecebido =
                    String(
                        resultado?.modelo ||
                        "classico"
                    )
                        .trim()
                        .toLowerCase();


                setModelo(
                    modelosDados[
                        modeloRecebido
                    ]
                        ? modeloRecebido
                        : "classico"
                );

            } catch (erroModelo) {

                console.error(
                    "[IRONSTORE PERFIL MODELO]",
                    erroModelo
                );


                if (ativo) {
                    setModelo(
                        "classico"
                    );
                }
            }
        }


        buscarModelo();


        return () => {
            ativo = false;
        };

    }, []);


    /* =====================================================
       DADOS DO CLIENTE
    ===================================================== */

    useEffect(() => {

        let ativo = true;


        async function carregarDados() {

            const token =
                localStorage.getItem(
                    "ironstore_cliente_token"
                );


            /* =================================================
               SEM LOGIN
            ================================================= */

            if (!token) {

                window.location.replace(
                    "/entrar"
                );

                return;
            }


            /* =================================================
               CACHE
            ================================================= */

            const dadosCache =
                normalizarDados(
                    pegarCache(
                        "perfil_dados",
                        true
                    )
                );


            if (dadosCache) {

                setDados(
                    dadosCache
                );

                setCarregando(
                    false
                );
            }


            /* =================================================
               BACKEND
            ================================================= */

            try {

                setErro("");


                const resposta =
                    await fetch(
                        `${API_URL}/ironstore/me/dados`,
                        {
                            method: "GET",

                            headers: {
                                "Authorization":
                                    `Bearer ${token}`,

                                "X-IronStore-Key":
                                    IRONSTORE_APP_KEY_GERAL
                            }
                        }
                    );


                /* =================================================
                   LOGIN INVÁLIDO
                ================================================= */

                if (
                    resposta.status === 401 ||
                    resposta.status === 403
                ) {

                    apagarCache(
                        "perfil_dados",
                        true
                    );


                    localStorage.removeItem(
                        "ironstore_cliente_token"
                    );

                    localStorage.removeItem(
                        "ironstore_cliente"
                    );


                    window.dispatchEvent(
                        new Event(
                            "ironstore-cliente-atualizado"
                        )
                    );


                    window.location.replace(
                        "/entrar"
                    );

                    return;
                }


                /* =================================================
                   OUTRO ERRO
                ================================================= */

                if (!resposta.ok) {

                    const resultadoErro =
                        await resposta
                            .json()
                            .catch(
                                () => null
                            );


                    throw new Error(
                        resultadoErro?.detail ||
                        "Não foi possível carregar seus dados."
                    );
                }


                /* =================================================
                   RESPOSTA
                ================================================= */

                const resultado =
                    await resposta.json();


                const dadosBanco =
                    normalizarDados(
                        resultado?.dados
                    );


                if (
                    !ativo ||
                    !dadosBanco
                ) {
                    return;
                }


                /* =================================================
                   ATUALIZAR CACHE SOMENTE SE MUDOU
                ================================================= */

                if (
                    cacheDiferente(
                        dadosCache,
                        dadosBanco
                    )
                ) {

                    salvarCache(
                        "perfil_dados",
                        dadosBanco,
                        true
                    );
                }


                /* =================================================
                   ATUALIZAR TELA
                ================================================= */

                setDados(
                    dadosBanco
                );


            } catch (erroCarregar) {

                if (!ativo) {
                    return;
                }


                console.error(
                    "[IRONSTORE PERFIL DADOS]",
                    erroCarregar
                );


                /*
                    Se já temos cache, mantemos os dados
                    visíveis mesmo se a API falhar.
                */

                if (!dadosCache) {

                    setErro(
                        erroCarregar?.message ||
                        "Erro ao carregar dados."
                    );
                }

            } finally {

                if (ativo) {

                    setCarregando(
                        false
                    );
                }
            }
        }


        carregarDados();


        return () => {
            ativo = false;
        };

    }, []);

    /* =========================================================
       INICIAR EDIÇÃO
    ========================================================= */

    function iniciarEdicao(
        campo,
        valor = "",
        valorSecundario = ""
    ) {

        if (salvando) {
            return;
        }

        setEditando(campo);

        setValorEdicao(
            valor || ""
        );

        setValorEdicaoSecundario(
            valorSecundario || ""
        );

        setErroEdicao("");
    }


    /* =========================================================
       CANCELAR EDIÇÃO
    ========================================================= */

    function cancelarEdicao() {

        if (salvando) {
            return;
        }

        setEditando(null);
        setValorEdicao("");
        setValorEdicaoSecundario("");
        setErroEdicao("");
    }


    /* =========================================================
       ENVIAR ALTERAÇÃO
    ========================================================= */

    async function enviarAlteracao(
        campo,
        valor
    ) {

        const token =
            localStorage.getItem(
                "ironstore_cliente_token"
            );


        if (!token) {

            window.location.replace(
                "/entrar"
            );

            return null;
        }


        const resposta =
            await fetch(
                `${API_URL}/ironstore/me/dados`,
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

                    body: JSON.stringify({
                        campo,
                        valor
                    })
                }
            );


        if (
            resposta.status === 401 ||
            resposta.status === 403
        ) {

            apagarCache(
                "perfil_dados",
                true
            );


            localStorage.removeItem(
                "ironstore_cliente_token"
            );

            localStorage.removeItem(
                "ironstore_cliente"
            );


            window.dispatchEvent(
                new Event(
                    "ironstore-cliente-atualizado"
                )
            );


            window.location.replace(
                "/entrar"
            );

            return null;
        }


        const resultado =
            await resposta
                .json()
                .catch(() => null);


        if (!resposta.ok) {

            throw new Error(
                resultado?.detail ||
                "Não foi possível alterar o dado."
            );
        }


        return resultado;
    }
    const validarCPF = (valor) => {

        const cpf =
            somenteNumeros(valor);

        if (cpf.length !== 11) {
            return false;
        }

        if (
            cpf ===
            cpf[0].repeat(11)
        ) {
            return false;
        }


        let soma = 0;

        for (
            let i = 0;
            i < 9;
            i++
        ) {

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

        for (
            let i = 0;
            i < 10;
            i++
        ) {

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
    };


    const validarCNPJ = (valor) => {

        const cnpj =
            somenteNumeros(valor);

        if (cnpj.length !== 14) {
            return false;
        }

        if (
            cnpj ===
            cnpj[0].repeat(14)
        ) {
            return false;
        }


        const calcular = (
            base,
            pesos
        ) => {

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
        };


        const primeiro =
            calcular(
                cnpj,
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
            calcular(
                cnpj,
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
    };


    const validarCpfCnpj = (valor) => {

        const numeros =
            somenteNumeros(valor);

        return (
            numeros.length === 11 ||
            numeros.length === 14
        );
    };


    const validarWhatsapp = (valor) => {

        const numeros =
            somenteNumeros(valor);

        // Telefone brasileiro:
        // 10 dígitos = (11) 1234-5678
        // 11 dígitos = (11) 91234-5678

        if (
            numeros.length !== 10 &&
            numeros.length !== 11
        ) {
            return false;
        }

        return true;
    };

    const validarCep = (valor) => {

        const numeros =
            somenteNumeros(valor);


        return (
            numeros.length === 8 &&
            numeros !== "00000000"
        );
    };

    /* =========================================================
       SALVAR EDIÇÃO
    ========================================================= */

    async function salvarEdicao() {

        if (
            !editando ||
            salvando
        ) {
            return;
        }


        /* =====================================================
           VALIDAR WHATSAPP
        ===================================================== */

        if (
            editando === "whatsapp" &&
            !validarWhatsapp(valorEdicao)
        ) {

            setErroEdicao(
                "Informe um WhatsApp válido."
            );

            return;
        }


        /* =====================================================
           VALIDAR CPF / CNPJ
        ===================================================== */

        if (
            editando === "cpf_cnpj" &&
            !validarCpfCnpj(valorEdicao)
        ) {

            setErroEdicao(
                "Informe um CPF ou CNPJ válido."
            );

            return;
        }


        /* =====================================================
           VALIDAR CEP
        ===================================================== */

        if (
            editando === "cep" &&
            !validarCep(valorEdicao)
        ) {

            setErroEdicao(
                "Informe um CEP válido."
            );

            return;
        }


        try {

            setSalvando(true);
            setErroEdicao("");

            /*
                NOME + SOBRENOME
            */

            if (editando === "nome") {

                await enviarAlteracao(
                    "nome",
                    valorEdicao
                );

                await enviarAlteracao(
                    "sobrenome",
                    valorEdicaoSecundario
                );


                const novosDados = {
                    ...dados,

                    nome:
                        valorEdicao.trim(),

                    sobrenome:
                        valorEdicaoSecundario.trim()
                };


                setDados(
                    novosDados
                );


                salvarCache(
                    "perfil_dados",
                    novosDados,
                    true
                );


                setEditando(null);
                setValorEdicao("");
                setValorEdicaoSecundario("");

                return;
            }
            /*
                ENDEREÇO POSSUI DOIS CAMPOS
            */

            if (editando === "endereco") {

                await enviarAlteracao(
                    "rua_avenida",
                    valorEdicao
                );


                await enviarAlteracao(
                    "numero",
                    valorEdicaoSecundario
                );


                const novosDados = {
                    ...dados,

                    rua_avenida:
                        valorEdicao.trim(),

                    numero:
                        valorEdicaoSecundario.trim()
                };


                setDados(
                    novosDados
                );


                salvarCache(
                    "perfil_dados",
                    novosDados,
                    true
                );


                cancelarEdicao();

                return;
            }


            /*
                CAMPOS NORMAIS
            */

            const resultado =
                await enviarAlteracao(
                    editando,
                    valorEdicao
                );


            if (!resultado) {
                return;
            }


            const novosDados = {
                ...dados,

                [editando]:
                    resultado.valor ?? ""
            };


            setDados(
                novosDados
            );


            salvarCache(
                "perfil_dados",
                novosDados,
                true
            );


            setEditando(null);
            setValorEdicao("");
            setValorEdicaoSecundario("");


        } catch (erroSalvar) {

            console.error(
                "[IRONSTORE ALTERAR DADOS]",
                erroSalvar
            );


            setErroEdicao(
                erroSalvar?.message ||
                "Não foi possível salvar."
            );


        } finally {

            setSalvando(false);
        }
    }


    /* =========================================================
       ENTER / ESC
    ========================================================= */

    function tecladoEdicao(evento) {

        if (evento.key === "Enter") {

            evento.preventDefault();

            salvarEdicao();

            return;
        }


        if (evento.key === "Escape") {

            evento.preventDefault();

            cancelarEdicao();
        }
    }
    /* =====================================================
       CARREGANDO
    ===================================================== */

    if (carregando) {

        return (
            <section className="ironstore-perfil-dados-area">

                <style>
                    {estiloModelo}
                </style>

                <p>
                    Carregando seus dados...
                </p>

            </section>
        );
    }


    /* =====================================================
       ERRO
    ===================================================== */

    if (erro) {

        return (
            <section className="ironstore-perfil-dados-area">

                <style>
                    {estiloModelo}
                </style>

                <p>
                    {erro}
                </p>

            </section>
        );
    }


    if (!dados) {
        return null;
    }


    /* =====================================================
       CONTEÚDO
    ===================================================== */
    function abrirModalEndereco() {

        setEnderecoEdicao({
            cep:
                formatarCep(
                    dados.cep || ""
                ),

            rua_avenida:
                dados.rua_avenida || "",

            numero:
                dados.numero || "",

            bairro:
                dados.bairro || "",

            cidade:
                dados.cidade || ""
        });

        setErroEndereco("");

        setModalEndereco(true);
    }


    function fecharModalEndereco() {

        if (salvandoEndereco) {
            return;
        }

        setModalEndereco(false);

        setErroEndereco("");
    }
    async function salvarEndereco() {

        if (salvandoEndereco) {
            return;
        }


        /* =====================================================
           VALIDAR CEP
        ===================================================== */

        if (
            !validarCep(
                enderecoEdicao.cep
            )
        ) {

            setErroEndereco(
                "Informe um CEP válido."
            );

            return;
        }


        /* =====================================================
           CAMPOS OBRIGATÓRIOS
        ===================================================== */

        if (
            !enderecoEdicao.rua_avenida.trim()
        ) {

            setErroEndereco(
                "Informe a rua ou avenida."
            );

            return;
        }


        if (
            !enderecoEdicao.bairro.trim()
        ) {

            setErroEndereco(
                "Informe o bairro."
            );

            return;
        }


        if (
            !enderecoEdicao.cidade.trim()
        ) {

            setErroEndereco(
                "Informe a cidade."
            );

            return;
        }


        try {

            setSalvandoEndereco(true);

            setErroEndereco("");


            const token =
                localStorage.getItem(
                    "ironstore_cliente_token"
                );


            if (!token) {

                window.location.replace(
                    "/entrar"
                );

                return;
            }


            const resposta =
                await fetch(
                    `${API_URL}/ironstore/me/endereco`,
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

                        body: JSON.stringify({
                            cep:
                                enderecoEdicao.cep,

                            rua_avenida:
                                enderecoEdicao
                                    .rua_avenida
                                    .trim(),

                            numero:
                                enderecoEdicao
                                    .numero
                                    .trim(),

                            bairro:
                                enderecoEdicao
                                    .bairro
                                    .trim(),

                            cidade:
                                enderecoEdicao
                                    .cidade
                                    .trim()
                        })
                    }
                );


            if (
                resposta.status === 401 ||
                resposta.status === 403
            ) {

                apagarCache(
                    "perfil_dados",
                    true
                );

                localStorage.removeItem(
                    "ironstore_cliente_token"
                );

                localStorage.removeItem(
                    "ironstore_cliente"
                );

                window.dispatchEvent(
                    new Event(
                        "ironstore-cliente-atualizado"
                    )
                );

                window.location.replace(
                    "/entrar"
                );

                return;
            }


            const resultado =
                await resposta
                    .json()
                    .catch(() => null);


            if (!resposta.ok) {

                throw new Error(
                    resultado?.detail ||
                    "Não foi possível salvar o endereço."
                );
            }


            const novosDados = {
                ...dados,
                ...resultado.endereco
            };


            setDados(
                novosDados
            );


            salvarCache(
                "perfil_dados",
                novosDados,
                true
            );


            setModalEndereco(false);


        } catch (erroSalvar) {

            console.error(
                "[IRONSTORE ENDEREÇO]",
                erroSalvar
            );

            setErroEndereco(
                erroSalvar?.message ||
                "Não foi possível salvar o endereço."
            );


        } finally {

            setSalvandoEndereco(false);
        }
    }
    return (

        <section className="ironstore-perfil-dados-area">

            <style>
                {estiloModelo}
            </style>


            <h2>
                Meus dados
            </h2>


            {/* =================================================
            CLIENTE
        ================================================= */}

            <div className="ironstore-perfil-dados-cliente">

                {dados.foto && (

                    <img
                        src={dados.foto}
                        alt={
                            dados.nome ||
                            "Cliente"
                        }
                    />

                )}


                <div className="ironstore-perfil-dados-identidade">

                    {editando === "nome" ? (

                        <div className="ironstore-perfil-dados-edicao">

                            <input
                                type="text"
                                value={valorEdicao}
                                autoFocus
                                placeholder="Nome"
                                onChange={(e) =>
                                    setValorEdicao(
                                        e.target.value
                                    )
                                }
                                onKeyDown={
                                    tecladoEdicao
                                }
                            />


                            <input
                                type="text"
                                value={valorEdicaoSecundario}
                                placeholder="Sobrenome"
                                onChange={(e) =>
                                    setValorEdicaoSecundario(
                                        e.target.value
                                    )
                                }
                                onKeyDown={
                                    tecladoEdicao
                                }
                            />


                            <div className="ironstore-perfil-dados-edicao-acoes">

                                <button
                                    type="button"
                                    onClick={
                                        salvarEdicao
                                    }
                                    disabled={salvando}
                                >
                                    {salvando
                                        ? "Salvando..."
                                        : "Salvar"
                                    }
                                </button>


                                <button
                                    type="button"
                                    onClick={
                                        cancelarEdicao
                                    }
                                    disabled={salvando}
                                >
                                    Cancelar
                                </button>

                            </div>

                        </div>

                    ) : (

                        <h3
                            className="ironstore-perfil-dado-editavel"

                            onClick={() =>
                                iniciarEdicao(
                                    "nome",
                                    dados.nome,
                                    dados.sobrenome
                                )
                            }

                            title="Clique para editar nome e sobrenome"
                        >

                            {dados.nome ||
                                "Adicionar nome"}

                            {" "}

                            {dados.sobrenome || ""}

                        </h3>

                    )}


                    {/* EMAIL NÃO EDITÁVEL */}

                    <p className="ironstore-perfil-dado-email">
                        {dados.email || ""}
                    </p>

                </div>

            </div>


            {/* =================================================
            ERRO DE EDIÇÃO
        ================================================= */}

            {erroEdicao && (

                <div className="ironstore-perfil-dados-erro-edicao">
                    {erroEdicao}
                </div>

            )}


            {/* =================================================
            INFORMAÇÕES
        ================================================= */}

            <div className="ironstore-perfil-dados-informacoes">


                {/* WHATSAPP */}

                <div
                    className={`ironstore-perfil-dado-card ${editando === "whatsapp"
                        ? "editando"
                        : ""
                        }`}
                    onClick={() => {

                        if (
                            editando !==
                            "whatsapp"
                        ) {

                            iniciarEdicao(
                                "whatsapp",
                                dados.whatsapp
                            );
                        }
                    }}
                >

                    <strong>
                        WhatsApp
                    </strong>


                    {editando === "whatsapp" ? (

                        <div className="ironstore-perfil-dados-edicao">

                            <input
                                type="tel"
                                inputMode="numeric"
                                value={valorEdicao}
                                autoFocus
                                maxLength={15}
                                placeholder="(11) 99999-9999"

                                onChange={(e) =>
                                    setValorEdicao(
                                        formatarWhatsapp(
                                            e.target.value
                                        )
                                    )
                                }

                                onKeyDown={
                                    tecladoEdicao
                                }

                                onClick={(e) =>
                                    e.stopPropagation()
                                }
                            />

                            <div
                                className="ironstore-perfil-dados-edicao-acoes"
                                onClick={(e) =>
                                    e.stopPropagation()
                                }
                            >

                                <button
                                    type="button"
                                    onClick={
                                        salvarEdicao
                                    }
                                    disabled={salvando}
                                >
                                    {salvando
                                        ? "Salvando..."
                                        : "Salvar"
                                    }
                                </button>

                                <button
                                    type="button"
                                    onClick={
                                        cancelarEdicao
                                    }
                                    disabled={salvando}
                                >
                                    Cancelar
                                </button>

                            </div>

                        </div>

                    ) : (

                        <span>
                            {dados.whatsapp ||
                                "Não informado"}
                        </span>

                    )}

                </div>


                {/* CPF / CNPJ */}

                <div
                    className={`ironstore-perfil-dado-card ${editando === "cpf_cnpj"
                        ? "editando"
                        : ""
                        }`}
                    onClick={() => {

                        if (
                            editando !==
                            "cpf_cnpj"
                        ) {

                            iniciarEdicao(
                                "cpf_cnpj",
                                dados.cpf_cnpj
                            );
                        }
                    }}
                >

                    <strong>
                        CPF/CNPJ
                    </strong>


                    {editando === "cpf_cnpj" ? (

                        <div className="ironstore-perfil-dados-edicao">

                            <input
                                type="text"
                                inputMode="numeric"
                                value={valorEdicao}
                                autoFocus
                                maxLength={18}
                                placeholder="CPF ou CNPJ"

                                onChange={(e) =>
                                    setValorEdicao(
                                        formatarCpfCnpj(
                                            e.target.value
                                        )
                                    )
                                }

                                onKeyDown={
                                    tecladoEdicao
                                }

                                onClick={(e) =>
                                    e.stopPropagation()
                                }
                            />

                            <div
                                className="ironstore-perfil-dados-edicao-acoes"
                                onClick={(e) =>
                                    e.stopPropagation()
                                }
                            >

                                <button
                                    type="button"
                                    onClick={
                                        salvarEdicao
                                    }
                                    disabled={salvando}
                                >
                                    Salvar
                                </button>

                                <button
                                    type="button"
                                    onClick={
                                        cancelarEdicao
                                    }
                                    disabled={salvando}
                                >
                                    Cancelar
                                </button>

                            </div>

                        </div>

                    ) : (

                        <span>
                            {dados.cpf_cnpj ||
                                "Não informado"}
                        </span>

                    )}

                </div>


                {/* NASCIMENTO */}

                <div
                    className={`ironstore-perfil-dado-card ${editando === "data_nascimento"
                        ? "editando"
                        : ""
                        }`}
                    onClick={() => {

                        if (
                            editando !==
                            "data_nascimento"
                        ) {

                            iniciarEdicao(
                                "data_nascimento",
                                dados.data_nascimento
                            );
                        }
                    }}
                >

                    <strong>
                        Data de nascimento
                    </strong>


                    {editando === "data_nascimento" ? (

                        <div className="ironstore-perfil-dados-edicao">

                            <input
                                type="date"
                                value={valorEdicao}
                                autoFocus
                                onChange={(e) =>
                                    setValorEdicao(
                                        e.target.value
                                    )
                                }
                                onKeyDown={
                                    tecladoEdicao
                                }
                                onClick={(e) =>
                                    e.stopPropagation()
                                }
                            />

                            <div
                                className="ironstore-perfil-dados-edicao-acoes"
                                onClick={(e) =>
                                    e.stopPropagation()
                                }
                            >

                                <button
                                    type="button"
                                    onClick={
                                        salvarEdicao
                                    }
                                    disabled={salvando}
                                >
                                    Salvar
                                </button>

                                <button
                                    type="button"
                                    onClick={
                                        cancelarEdicao
                                    }
                                    disabled={salvando}
                                >
                                    Cancelar
                                </button>

                            </div>

                        </div>

                    ) : (

                        <span>
                            {dados.data_nascimento
                                ? formatarDataNascimento(
                                    dados.data_nascimento
                                )
                                : "Não informada"
                            }
                        </span>

                    )}

                </div>


                {/* ENDEREÇO COMPLETO */}

                <div
                    className="ironstore-perfil-dado-card"
                    onClick={
                        abrirModalEndereco
                    }
                >

                    <strong>
                        Endereço
                    </strong>

                    <span>

                        {dados.rua_avenida
                            ? (
                                <>
                                    {dados.rua_avenida}

                                    {dados.numero
                                        ? `, ${dados.numero}`
                                        : ""
                                    }

                                    {dados.bairro && (
                                        <>
                                            <br />
                                            {dados.bairro}
                                        </>
                                    )}

                                    {dados.cidade && (
                                        <>
                                            <br />
                                            {dados.cidade}
                                        </>
                                    )}

                                    {dados.cep && (
                                        <>
                                            <br />
                                            {formatarCep(
                                                dados.cep
                                            )}
                                        </>
                                    )}
                                </>
                            )
                            : "Não informado"
                        }

                    </span>

                </div>

                {modalEndereco && (

                    <div
                        className="ironstore-endereco-modal-fundo"
                        onMouseDown={
                            fecharModalEndereco
                        }
                    >

                        <div
                            className="ironstore-endereco-modal"
                            onMouseDown={(e) =>
                                e.stopPropagation()
                            }
                        >

                            <h3>
                                Editar endereço
                            </h3>


                            {erroEndereco && (

                                <div className="ironstore-perfil-dados-erro-edicao">
                                    {erroEndereco}
                                </div>

                            )}


                            {/* CEP PRIMEIRO */}

                            <label>
                                CEP

                                <input
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={9}
                                    placeholder="00000-000"
                                    value={
                                        enderecoEdicao.cep
                                    }
                                    onChange={(e) => {

                                        const cepFormatado =
                                            formatarCep(
                                                e.target.value
                                            );


                                        setEnderecoEdicao(
                                            anterior => ({
                                                ...anterior,

                                                cep:
                                                    cepFormatado
                                            })
                                        );


                                        const numeros =
                                            somenteNumeros(
                                                cepFormatado
                                            );


                                        if (numeros.length === 8) {

                                            buscarEnderecoPorCep(
                                                cepFormatado
                                            );
                                        }
                                    }}
                                    autoFocus
                                />
                                {buscandoCep && (

                                    <span className="ironstore-endereco-buscando-cep">
                                        Buscando endereço...
                                    </span>

                                )}
                            </label>


                            <label>
                                Rua / Avenida

                                <input
                                    type="text"
                                    value={
                                        enderecoEdicao.rua_avenida
                                    }
                                    onChange={(e) =>
                                        setEnderecoEdicao(
                                            anterior => ({
                                                ...anterior,

                                                rua_avenida:
                                                    e.target.value
                                            })
                                        )
                                    }
                                />

                            </label>


                            <label>
                                Número

                                <input
                                    type="text"
                                    value={
                                        enderecoEdicao.numero
                                    }
                                    onChange={(e) =>
                                        setEnderecoEdicao(
                                            anterior => ({
                                                ...anterior,

                                                numero:
                                                    e.target.value
                                            })
                                        )
                                    }
                                />

                            </label>


                            <label>
                                Bairro

                                <input
                                    type="text"
                                    value={
                                        enderecoEdicao.bairro
                                    }
                                    onChange={(e) =>
                                        setEnderecoEdicao(
                                            anterior => ({
                                                ...anterior,

                                                bairro:
                                                    e.target.value
                                            })
                                        )
                                    }
                                />

                            </label>


                            <label>
                                Cidade

                                <input
                                    type="text"
                                    value={
                                        enderecoEdicao.cidade
                                    }
                                    onChange={(e) =>
                                        setEnderecoEdicao(
                                            anterior => ({
                                                ...anterior,

                                                cidade:
                                                    e.target.value
                                            })
                                        )
                                    }
                                />

                            </label>


                            <div className="ironstore-endereco-modal-acoes">

                                <button
                                    type="button"
                                    onClick={
                                        fecharModalEndereco
                                    }
                                    disabled={
                                        salvandoEndereco
                                    }
                                >
                                    Cancelar
                                </button>


                                <button
                                    type="button"
                                    onClick={
                                        salvarEndereco
                                    }
                                    disabled={
                                        salvandoEndereco
                                    }
                                >

                                    {salvandoEndereco
                                        ? "Salvando..."
                                        : "Salvar endereço"
                                    }

                                </button>

                            </div>

                        </div>

                    </div>

                )}
            </div>

        </section>
    );
}