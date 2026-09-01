import {
    API_URL
} from "../../config";


/* =========================================================
   CHAVE GERAL IRONSTORE
========================================================= */

const IRONSTORE_APP_KEY_GERAL =
    import.meta.env.VITE_IRONSTORE_APP_KEY_GERAL;


/* =========================================================
   DOMÍNIO ATUAL
========================================================= */

function pegarDominioAtual() {

    if (
        typeof window === "undefined"
    ) {
        return "";
    }


    return (
        `${window.location.protocol}//${window.location.host}`
            .trim()
            .toLowerCase()
            .replace(/\/+$/, "")
    );
}


/* =========================================================
   TOKEN DO CLIENTE
========================================================= */

function pegarTokenCliente() {

    if (
        typeof window === "undefined"
    ) {
        return null;
    }


    return localStorage.getItem(
        "ironstore_cliente_token"
    );
}


/* =========================================================
   HEADERS PRIVADOS

   TODAS AS APIs DE COMPRAS USAM:

   X-IronStore-Key
   X-IronStore-Domain
   Authorization
========================================================= */

function criarHeadersPrivados(
    comJson = false
) {

    const token =
        pegarTokenCliente();


    if (!token) {

        throw new Error(
            "CLIENTE_NAO_AUTENTICADO"
        );
    }


    const dominio =
        pegarDominioAtual();


    if (!dominio) {

        throw new Error(
            "DOMINIO_NAO_IDENTIFICADO"
        );
    }


    if (!IRONSTORE_APP_KEY_GERAL) {

        throw new Error(
            "CHAVE_IRONSTORE_NAO_CONFIGURADA"
        );
    }


    const headers = {

        "X-IronStore-Key":
            IRONSTORE_APP_KEY_GERAL,

        "X-IronStore-Domain":
            dominio,

        "Authorization":
            `Bearer ${token}`
    };


    if (comJson) {

        headers[
            "Content-Type"
        ] = "application/json";
    }


    return headers;
}


/* =========================================================
   TRATAR RESPOSTA
========================================================= */

async function tratarResposta(
    resposta
) {

    let resultado =
        null;


    try {

        resultado =
            await resposta.json();

    } catch {

        resultado =
            null;
    }


    /* =====================================================
       TOKEN INVÁLIDO / EXPIRADO
    ===================================================== */

    if (
        resposta.status === 401
    ) {

        throw new Error(
            "CLIENTE_NAO_AUTENTICADO"
        );
    }


    /* =====================================================
       DOMÍNIO / CLIENTE / LOJA INVÁLIDOS
    ===================================================== */

    if (
        resposta.status === 403
    ) {

        throw new Error(
            resultado?.detail ||
            "Acesso não autorizado para esta loja."
        );
    }


    /* =====================================================
       OUTROS ERROS
    ===================================================== */

    if (!resposta.ok) {

        throw new Error(
            resultado?.detail ||
            "Não foi possível concluir a requisição."
        );
    }


    return resultado;
}


/* =========================================================
   GET
   PRODUTOS DO CARRINHO PRONTOS PARA COMPRA
========================================================= */

export async function buscarCarrinhoCompra() {

    const resposta =
        await fetch(
            `${API_URL}/ironstore/compras/carrinho`,
            {
                method:
                    "GET",

                headers:
                    criarHeadersPrivados()
            }
        );


    return await tratarResposta(
        resposta
    );
}


/* =========================================================
   POST
   PREPARAR COMPRA

   MANDA SOMENTE OS seguimento_id SELECIONADOS.

   BACKEND DESCOBRE:
   - cliente
   - domínio
   - comércio
   - produto
   - quantidade
   - preço
   - frete
   - total
========================================================= */

export async function prepararCompra(
    seguimentosIds,
    frete
) {

    if (
        !Array.isArray(
            seguimentosIds
        ) ||
        seguimentosIds.length === 0
    ) {

        throw new Error(
            "Nenhum produto selecionado."
        );
    }


    if (
        !frete ||
        !frete.servico_id
    ) {

        throw new Error(
            "Selecione uma opção de frete."
        );
    }


    const ids =
        seguimentosIds
            .map(
                id =>
                    Number(id)
            )
            .filter(
                id =>
                    Number.isInteger(id) &&
                    id > 0
            );


    if (
        ids.length === 0
    ) {

        throw new Error(
            "Nenhum produto válido selecionado."
        );
    }


    const resposta =
        await fetch(
            `${API_URL}/ironstore/compras/preparar`,
            {
                method:
                    "POST",

                headers:
                    criarHeadersPrivados(
                        true
                    ),

                body:
                    JSON.stringify({

                        seguimentos_ids:
                            ids,

                        frete:
                            frete

                    })
            }
        );


    return await tratarResposta(
        resposta
    );
}

/* =========================================================
   POST
   CRIAR PAGAMENTO PIX
========================================================= */
export async function criarPagamentoPix(
    seguimentosIds,
    frete
) {

    if (
        !Array.isArray(
            seguimentosIds
        ) ||
        seguimentosIds.length === 0
    ) {

        throw new Error(
            "Nenhum produto selecionado."
        );
    }


    if (
        !frete ||
        !frete.servico_id
    ) {

        throw new Error(
            "Frete não selecionado."
        );
    }


    const ids =
        seguimentosIds
            .map(
                id =>
                    Number(id)
            )
            .filter(
                id =>
                    Number.isInteger(id) &&
                    id > 0
            );


    if (
        ids.length === 0
    ) {

        throw new Error(
            "Nenhum produto válido selecionado."
        );
    }


    const resposta =
        await fetch(
            `${API_URL}/ironstore/compras/pix`,
            {
                method:
                    "POST",

                headers:
                    criarHeadersPrivados(
                        true
                    ),

                body:
                    JSON.stringify({

                        seguimentos_ids:
                            ids,

                        frete:
                            frete

                    })
            }
        );


    return await tratarResposta(
        resposta
    );
}



export async function criarPagamentoCartao({
    seguimentosIds,
    frete,
    tokenCartao,
    parcelas = 1,
    paymentMethodId,
    email
}) {

    if (
        !Array.isArray(
            seguimentosIds
        ) ||
        seguimentosIds.length === 0
    ) {

        throw new Error(
            "Nenhum produto selecionado."
        );
    }


    const ids =
        seguimentosIds
            .map(
                id =>
                    Number(id)
            )
            .filter(
                id =>
                    Number.isInteger(id) &&
                    id > 0
            );


    if (
        ids.length === 0
    ) {

        throw new Error(
            "Nenhum produto válido selecionado."
        );
    }


    if (
        !tokenCartao
    ) {

        throw new Error(
            "Token do cartão não informado."
        );
    }


    if (
        !paymentMethodId
    ) {

        throw new Error(
            "Método de pagamento não informado."
        );
    }


    if (
        !email
    ) {

        throw new Error(
            "E-mail do pagador não informado."
        );
    }


    const quantidadeParcelas =
        Math.max(
            1,
            Math.floor(
                Number(
                    parcelas
                ) || 1
            )
        );

    if (
        !frete ||
        !frete.servico_id
    ) {

        throw new Error(
            "Frete não selecionado."
        );
    }
    const resposta =
        await fetch(
            `${API_URL}/ironstore/compras/cartao`,
            {
                method:
                    "POST",

                headers:
                    criarHeadersPrivados(
                        true
                    ),

                body:
                    JSON.stringify({

                        seguimentos_ids:
                            ids,

                        frete:
                            frete,

                        token:
                            tokenCartao,

                        parcelas:
                            quantidadeParcelas,

                        payment_method_id:
                            paymentMethodId,

                        email:
                            email
                    })
            }
        );


    return await tratarResposta(
        resposta
    );
}


/* =========================================================
   EXPORTAR DADOS AUXILIARES

   NÃO SÃO USADOS COMO SEGURANÇA.

   Servem apenas caso algum componente precise saber
   domínio/token localmente.
========================================================= */

export function obterDominioCompras() {

    return pegarDominioAtual();
}


export function temClienteLogadoCompras() {

    return Boolean(
        pegarTokenCliente()
    );
}

/* =========================================================
   PUT
   ATUALIZAR QUANTIDADE DO PRODUTO
========================================================= */

export async function atualizarQuantidadeProduto(
    produtoId,
    quantidade
) {

    const quantidadeNova =
        Math.max(
            1,
            Math.floor(
                Number(quantidade) || 1
            )
        );


    const resposta =
        await fetch(
            `${API_URL}/ironstore/produto/${produtoId}/quantidade`,
            {
                method:
                    "PUT",

                headers:
                    criarHeadersPrivados(
                        true
                    ),

                body:
                    JSON.stringify({
                        quantidade:
                            quantidadeNova
                    })
            }
        );


    return await tratarResposta(
        resposta
    );
}




export async function consultarStatusPagamento(
    vendaId
) {

    const id =
        Number(
            vendaId
        );


    if (
        !Number.isInteger(id) ||
        id <= 0
    ) {

        throw new Error(
            "Venda inválida."
        );
    }


    const resposta =
        await fetch(
            `${API_URL}/ironstore/compras/pagamento/${id}/status`,
            {
                method:
                    "GET",

                headers:
                    criarHeadersPrivados()
            }
        );


    return await tratarResposta(
        resposta
    );
}