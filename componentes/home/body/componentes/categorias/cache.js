/* =========================================================
   CACHE DE CATEGORIAS / PRODUTOS IRONSTORE
========================================================= */


/* =========================================================
   DOMÍNIO
========================================================= */

export function pegarDominioAtualCategorias() {

    return window.location.origin
        .trim()
        .replace(/\/+$/, "")
        .toLowerCase();

}


/* =========================================================
   CHAVE DO CACHE
========================================================= */

export function gerarChaveCacheCategorias() {

    const dominio =
        pegarDominioAtualCategorias();

    return `ironstore_categorias_${dominio}`;

}


/* =========================================================
   NORMALIZAR PRODUTO
========================================================= */

function normalizarProduto(
    produto
) {

    /* =====================================================
       NORMALIZAR VARIEDADES
    ===================================================== */

    const variedades =
        Array.isArray(
            produto?.variedades
        )
            ? produto.variedades.map(
                variedade => ({

                    id:
                        variedade?.id ?? null,

                    nome:
                        variedade?.nome || "",

                    principal:
                        Boolean(
                            variedade?.principal
                        ),

                    produto_variedade_id:
                        Number(
                            variedade?.produto_variedade_id ?? 0
                        ),

                    preco:
                        variedade?.preco ?? null,

                    preco_promocao:
                        variedade?.preco_promocao ?? "",

                    codigo_barras:
                        variedade?.codigo_barras || "",

                    imagem_url:
                        variedade?.imagem_url || "",

                    disponivel:
                        Number(
                            variedade?.disponivel ?? 0
                        ),

                })
            )
            : [];


    /* =====================================================
       PRODUTO
    ===================================================== */

    return {

        id:
            produto?.id ?? null,

        nome:
            produto?.nome || "",

        nome_original:
            produto?.nome_original || "",

        unidade:
            produto?.unidade || "",

        peso:
            produto?.peso || "",

        codigo_barras:
            produto?.codigo_barras || "",

        qrcode:
            produto?.qrcode || "",

        preco:
            produto?.preco ?? null,

        preco_recebido:
            produto?.preco_recebido ?? null,

        categoria:
            produto?.categoria || "",

        variedade:
            produto?.variedade || "",

        imagem_url:
            produto?.imagem_url || "",

        disponivel:
            Number(
                produto?.disponivel ?? 0
            ),

        comercio_id:
            produto?.comercio_id ?? null,

        tempo_servico:
            produto?.tempo_servico || "",

        produto_id:
            produto?.produto_id ?? null,

        unidades:
            produto?.unidades ?? null,

        data_vencimento:
            produto?.data_vencimento || null,

        descricao:
            produto?.descricao || "",

        descricao_curta:
            produto?.descricao_curta || "",

        preco_promocao:
            produto?.preco_promocao || "",

        destaque:
            produto?.destaque || "",

        peso_g:
            produto?.peso_g || "",

        altura_cm:
            produto?.altura_cm || "",

        cumprimento_cm:
            produto?.cumprimento_cm || "",

        largura_cm:
            produto?.largura_cm || "",

        variedad_primaria:
            produto?.variedad_primaria || "",

        qual_variedad:
            produto?.qual_variedad || "",

        produto_variedade_id:
            Number(
                produto?.produto_variedade_id ?? 0
            ),


        /* =================================================
           VARIEDADES
        ================================================= */

        variedades:
            variedades,

        possui_variedades:
            Boolean(
                produto?.possui_variedades ||
                variedades.length > 0
            ),

        quantidade_variedades:
            variedades.length,

    };

}

/* =========================================================
   NORMALIZAR RESPOSTA
========================================================= */

export function normalizarDadosCategorias(
    dados
) {

    const comercio =
        dados?.comercio || {};


    const produtos =
        Array.isArray(
            dados?.produtos
        )
            ? dados.produtos
            : [];


    return {

        comercio: {

            id:
                comercio.id ?? null,

            loja:
                comercio.loja || "",

            imagem:
                comercio.imagem || "",

        },


        produtos:
            produtos.map(
                normalizarProduto
            ),


        modelo:
            dados?.modelo || "classico",

    };

}


/* =========================================================
   LER CACHE
========================================================= */

export function lerCacheCategorias() {

    const chave =
        gerarChaveCacheCategorias();


    try {

        const salvo =
            localStorage.getItem(
                chave
            );


        if (!salvo) {

            return null;

        }


        return normalizarDadosCategorias(
            JSON.parse(
                salvo
            )
        );


    } catch (erro) {

        console.warn(
            "[CATEGORIAS] Cache inválido:",
            erro
        );


        localStorage.removeItem(
            chave
        );


        return null;

    }

}


/* =========================================================
   SALVAR CACHE
========================================================= */

export function salvarCacheCategorias(
    dados
) {

    const chave =
        gerarChaveCacheCategorias();


    try {

        const normalizado =
            normalizarDadosCategorias(
                dados
            );


        localStorage.setItem(
            chave,
            JSON.stringify(
                normalizado
            )
        );


        return normalizado;


    } catch (erro) {

        console.warn(
            "[CATEGORIAS] Erro ao salvar cache:",
            erro
        );


        return null;

    }

}


/* =========================================================
   COMPARAR
========================================================= */

export function dadosCategoriasSaoIguais(
    cache,
    servidor
) {

    if (!cache) {

        return false;

    }


    const cacheNormalizado =
        normalizarDadosCategorias(
            cache
        );


    const servidorNormalizado =
        normalizarDadosCategorias(
            servidor
        );


    return (
        JSON.stringify(
            cacheNormalizado
        )
        ===
        JSON.stringify(
            servidorNormalizado
        )
    );

}


/* =========================================================
   SEPARAR IMAGENS

   BANCO:

   imagem1|imagem2|imagem3|

   RESULTADO:

   [
       "imagem1",
       "imagem2",
       "imagem3"
   ]

   O último vazio é ignorado.
========================================================= */

export function separarImagensProduto(
    imagemUrl
) {

    if (!imagemUrl) {

        return [];

    }


    return String(
        imagemUrl
    )
        .split("|")
        .map(
            imagem =>
                imagem.trim()
        )
        .filter(Boolean);

}


/* =========================================================
   GERAR CATEGORIAS

   Somente produtos disponíveis presentes no cache entram
   na geração.

   "Todas" sempre aparece primeiro.
========================================================= */

export function gerarCategoriasProdutos(
    produtos
) {

    if (
        !Array.isArray(produtos)
    ) {

        return [
            "Todas"
        ];

    }


    const categorias =
        produtos
            .filter(
                produto =>
                    Number(
                        produto.disponivel
                    ) === 1
            )
            .map(
                produto =>
                    String(
                        produto.categoria || ""
                    ).trim()
            )
            .filter(Boolean);


    const categoriasUnicas =
        [
            ...new Set(
                categorias
            )
        ];


    categoriasUnicas.sort(
        (a, b) =>
            a.localeCompare(
                b,
                "pt-BR"
            )
    );


    return [
        "Todas",
        ...categoriasUnicas
    ];

}

/* =========================================================
   ORDENAR PRODUTOS POR DESTAQUE

   ORDEM ABSOLUTA:

   1. diamante
   2. ouro
   3. ferro
   4. sem destaque

   Dentro de cada grupo:
   aleatório
========================================================= */

export function ordenarProdutosPorDestaque(
    produtos
) {

    const lista =
        Array.isArray(
            produtos
        )
            ? [...produtos]
            : [];


    /* =====================================================
       PRIORIDADE
    ===================================================== */

    function pegarPrioridade(
        produto
    ) {

        const destaque =
            String(
                produto?.destaque ||
                ""
            )
                .trim()
                .toLowerCase();


        if (
            destaque ===
            "diamante"
        ) {

            return 1;

        }


        if (
            destaque ===
            "ouro"
        ) {

            return 2;

        }


        if (
            destaque ===
            "ferro"
        ) {

            return 3;

        }


        return 4;

    }


    /* =====================================================
       SEPARAR POR GRUPOS
    ===================================================== */

    const grupos = {

        1: [],
        2: [],
        3: [],
        4: []

    };


    lista.forEach(
        produto => {

            const prioridade =
                pegarPrioridade(
                    produto
                );


            grupos[
                prioridade
            ].push(
                produto
            );

        }
    );


    /* =====================================================
       EMBARALHAR APENAS DENTRO DO GRUPO
    ===================================================== */

    function embaralharGrupo(
        grupo
    ) {

        const resultado =
            [...grupo];


        for (
            let i =
                resultado.length - 1;

            i > 0;

            i--
        ) {

            const j =
                Math.floor(
                    Math.random() *
                    (
                        i + 1
                    )
                );


            [
                resultado[i],
                resultado[j]
            ] = [
                    resultado[j],
                    resultado[i]
                ];

        }


        return resultado;

    }


    /* =====================================================
       JUNTAR NA ORDEM CORRETA
    ===================================================== */

    return [

        ...embaralharGrupo(
            grupos[1]
        ),

        ...embaralharGrupo(
            grupos[2]
        ),

        ...embaralharGrupo(
            grupos[3]
        ),

        ...embaralharGrupo(
            grupos[4]
        )

    ];

}