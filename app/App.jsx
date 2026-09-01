import React, {
  useEffect
} from "react";

import {
  Routes,
  Route,
  useLocation,
  useNavigate
} from "react-router-dom";

import Aba from "./aba";


/* =========================================================
   ÁREAS
========================================================= */

import Home from "../areas/home";
import Entrar from "../areas/entrar";
import Compras from "../areas/compras";
import Perfil from "../areas/perfil";
import Reels from "../areas/reels";
import Produtos from "../areas/produtos";


/* =========================================================
   COMPONENTES GLOBAIS
========================================================= */

import VerReels from "./verreels";


/* =========================================================
   CHAVES DA SESSÃO
========================================================= */

const TOKEN_KEY = "ironstore_cliente_token";
const CLIENTE_KEY = "ironstore_cliente";


/* =========================================================
   DECODIFICAR PAYLOAD DO JWT
========================================================= */

function decodificarJwt(token) {

  try {

    if (!token) {
      return null;
    }

    const partes = token.split(".");

    if (partes.length !== 3) {
      return null;
    }

    let payloadBase64 = partes[1]
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    while (
      payloadBase64.length % 4
    ) {
      payloadBase64 += "=";
    }

    const jsonPayload = decodeURIComponent(
      atob(payloadBase64)
        .split("")
        .map((caractere) => {

          return (
            "%" +
            (
              "00" +
              caractere
                .charCodeAt(0)
                .toString(16)
            ).slice(-2)
          );

        })
        .join("")
    );

    return JSON.parse(
      jsonPayload
    );

  } catch (erro) {

    console.error(
      "Erro ao decodificar token:",
      erro
    );

    return null;
  }
}


/* =========================================================
   VERIFICAR SE TOKEN ESTÁ VÁLIDO
========================================================= */

function tokenEstaValido(token) {

  const payload = decodificarJwt(
    token
  );

  if (!payload) {
    return false;
  }

  if (!payload.exp) {
    return false;
  }

  const agora = Math.floor(
    Date.now() / 1000
  );

  return payload.exp > agora;
}


/* =========================================================
   APP
========================================================= */

export default function App() {

  const location = useLocation();
  const navigate = useNavigate();


  /* =======================================================
     LOGOUT
  ======================================================= */

  function fazerLogout() {

    localStorage.removeItem(
      TOKEN_KEY
    );

    localStorage.removeItem(
      CLIENTE_KEY
    );

    sessionStorage.removeItem(
      TOKEN_KEY
    );

    sessionStorage.removeItem(
      CLIENTE_KEY
    );

    window.dispatchEvent(
      new Event(
        "ironstore-cliente-logout"
      )
    );
  }


  /* =======================================================
     VERIFICAR TOKEN
  ======================================================= */

  useEffect(() => {

    const verificarToken = () => {

      const token =
        localStorage.getItem(
          TOKEN_KEY
        ) ||
        sessionStorage.getItem(
          TOKEN_KEY
        );

      /*
       * Se não existe token, não precisa fazer nada.
       *
       * Isso permite visitantes normalmente no site.
       */

      if (!token) {
        return;
      }

      /*
       * Se existe token mas ele está inválido
       * ou expirado, encerra a sessão.
       */

      if (
        !tokenEstaValido(token)
      ) {

        console.warn(
          "Sessão IronStore expirada."
        );

        fazerLogout();

        /*
         * Se estiver em uma área que depende
         * da autenticação, manda para entrar.
         */

        if (
          location.pathname === "/perfil"
        ) {

          navigate(
            "/entrar",
            {
              replace: true
            }
          );

        }

      }

    };


    verificarToken();


    /*
     * Continua verificando enquanto o site
     * estiver aberto.
     *
     * Assim, se o token expirar com o cliente
     * dentro do site, o logout acontece sem
     * precisar atualizar a página.
     */

    const intervalo = setInterval(
      verificarToken,
      1000
    );


    return () => {

      clearInterval(
        intervalo
      );

    };

  }, [
    location.pathname,
    navigate
  ]);


  return (

    <>

      {/* =============================================
          IDENTIDADE DA ABA
      ============================================= */}

      <Aba />


      {/* =============================================
          ROTAS
      ============================================= */}

      <main className="app-pagina-principal-iron">

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/compras"
            element={<Compras />}
          />

          <Route
            path="/entrar"
            element={<Entrar />}
          />

          <Route
            path="/perfil"
            element={<Perfil />}
          />

          <Route
            path="/produtos/:produtoId"
            element={<Produtos />}
          />

          <Route
            path="/reels/:produtoid"
            element={<Reels />}
          />

        </Routes>

      </main>


      {/* =============================================
          ACESSO FLUTUANTE AOS REELS
      ============================================= */}

      <VerReels />

    </>

  );

}