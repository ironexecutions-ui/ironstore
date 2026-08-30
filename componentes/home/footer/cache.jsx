/* =========================================================
   CACHE DO FOOTER IRONSTORE

   Este cache contém atualmente:

   comercio:
   - id
   - loja
   - imagem
   - cnpj
   - cep
   - rua
   - bairro
   - numero
   - cidade
   - estado
   - email
   - celular

   footer:
   - instagram
   - tiktok
   - youtube
   - x
   - facebook
   - whatsapp
   - mensagem

   modelo

   Ao adicionar novos dados ao Footer que venham do backend,
   verificar se também devem ser adicionados ao cache.
========================================================= */


/* =========================================================
   DOMÍNIO ATUAL
========================================================= */

export function pegarDominioAtualFooter() {

    return window.location.origin
        .trim()
        .replace(/\/+$/, "")
        .toLowerCase();

}


/* =========================================================
   CHAVE DO CACHE

   Cada domínio possui seu próprio Footer.
========================================================= */

export function gerarChaveCacheFooter() {

    const dominio =
        pegarDominioAtualFooter();

    return `ironstore_footer_${dominio}`;

}


/* =========================================================
   NORMALIZAR DADOS
========================================================= */

export function normalizarDadosFooter(dados) {

    const comercio =
        dados?.comercio || {};

    const footer =
        dados?.footer || {};


    return {

        comercio: {

            id:
                comercio.id ?? null,

            loja:
                comercio.loja || "",

            imagem:
                comercio.imagem || "",

            cnpj:
                comercio.cnpj || "",

            cep:
                comercio.cep || "",

            rua:
                comercio.rua || "",

            bairro:
                comercio.bairro || "",

            numero:
                comercio.numero || "",

            cidade:
                comercio.cidade || "",

            estado:
                comercio.estado || "",

            email:
                comercio.email || "",

            celular:
                comercio.celular || "",

        },


        footer: {

            instagram:
                footer.instagram || "",

            tiktok:
                footer.tiktok || "",

            youtube:
                footer.youtube || "",

            x:
                footer.x || "",

            facebook:
                footer.facebook || "",

            whatsapp:
                footer.whatsapp || "",

            mensagem:
                footer.mensagem || "",

        },


        modelo:
            dados?.modelo || "classico",

    };

}


/* =========================================================
   LER CACHE
========================================================= */

export function lerCacheFooter() {

    const chave =
        gerarChaveCacheFooter();


    try {

        const cacheSalvo =
            localStorage.getItem(
                chave
            );


        if (!cacheSalvo) {

            return null;

        }


        const dados =
            JSON.parse(
                cacheSalvo
            );


        return normalizarDadosFooter(
            dados
        );


    } catch (erro) {

        console.warn(
            "[FOOTER] Cache inválido:",
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

export function salvarCacheFooter(dados) {

    const chave =
        gerarChaveCacheFooter();


    try {

        const dadosNormalizados =
            normalizarDadosFooter(
                dados
            );


        localStorage.setItem(
            chave,
            JSON.stringify(
                dadosNormalizados
            )
        );


        return dadosNormalizados;


    } catch (erro) {

        console.warn(
            "[FOOTER] Não foi possível salvar cache:",
            erro
        );


        return null;

    }

}


/* =========================================================
   COMPARAR CACHE COM BACKEND
========================================================= */

export function dadosFooterSaoIguais(
    cache,
    servidor
) {

    if (!cache) {

        return false;

    }


    const cacheNormalizado =
        normalizarDadosFooter(
            cache
        );


    const servidorNormalizado =
        normalizarDadosFooter(
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