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
import Path from "../areas/path";


/* =========================================================
   COMPONENTES GLOBAIS
========================================================= */

import VerReels from "./verreels";


/* =========================================================
   API
========================================================= */

import {
  API_URL
} from "../config";


/* =========================================================
   CHAVES DA SESSÃO
========================================================= */

const TOKEN_KEY =
  "ironstore_cliente_token";

const CLIENTE_KEY =
  "ironstore_cliente";


/* =========================================================
   DECODIFICAR PAYLOAD DO JWT
========================================================= */

function decodificarJwt(token) {

  try {

    if (!token) {
      return null;
    }


    const partes =
      token.split(".");


    if (partes.length !== 3) {
      return null;
    }


    let payloadBase64 =
      partes[1]
        .replace(/-/g, "+")
        .replace(/_/g, "/");


    while (
      payloadBase64.length % 4
    ) {

      payloadBase64 += "=";

    }


    const jsonPayload =
      decodeURIComponent(

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

  const payload =
    decodificarJwt(
      token
    );


  if (!payload) {
    return false;
  }


  if (!payload.exp) {
    return false;
  }


  const agora =
    Math.floor(
      Date.now() / 1000
    );


  return (
    payload.exp > agora
  );

}


/* =========================================================
   PEGAR TOKEN DO CLIENTE
========================================================= */

function pegarTokenCliente() {

  return (
    localStorage.getItem(
      TOKEN_KEY
    ) ||
    sessionStorage.getItem(
      TOKEN_KEY
    ) ||
    null
  );

}


/* =========================================================
   PEGAR DOMÍNIO ATUAL

   IMPORTANTE:

   window.location.host
   mantém a porta.

   Exemplos:

   localhost:5173
   missionetwork.com
   dassmakeup.com.br
========================================================= */

function pegarDominioAtual() {

  return (
    window.location.host ||
    ""
  )
    .trim()
    .toLowerCase()
    .replace(/^www\./, "");

}


/* =========================================================
   ENVIAR RASTREIO
========================================================= */

async function enviarRastreio(
  caminho
) {

  try {

    /* =====================================================
       TOKEN
    ===================================================== */

    const token =
      pegarTokenCliente();


    /* =====================================================
       DOMÍNIO
    ===================================================== */

    const dominio =
      pegarDominioAtual();


    /* =====================================================
       LOG
    ===================================================== */

    console.log(
      "Enviando rastreio:",
      {
        dominio,
        caminho,
        possuiToken: Boolean(
          token
        )
      }
    );


    /* =====================================================
       REQUISIÇÃO
    ===================================================== */

    const resposta =
      await fetch(
        `${API_URL}/ironstore/rastreio`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            dominio,
            caminho,
            token
          })
        }
      );


    /* =====================================================
       ERRO HTTP
    ===================================================== */

    if (!resposta.ok) {

      console.warn(
        "Erro ao registrar rastreio:",
        resposta.status
      );

      return;

    }


    /* =====================================================
       RESPOSTA
    ===================================================== */

    const dados =
      await resposta.json();


    console.log(
      "Rastreio registrado:",
      dados
    );


  } catch (erro) {

    console.warn(
      "Falha ao registrar rastreio:",
      erro
    );

  }

}


/* =========================================================
   APP
========================================================= */

export default function App() {

  const location =
    useLocation();


  const navigate =
    useNavigate();


  /* =======================================================
     LOGOUT
  ======================================================= */

  function fazerLogout() {

    /* =====================================================
       LOCAL STORAGE
    ===================================================== */

    localStorage.removeItem(
      TOKEN_KEY
    );

    localStorage.removeItem(
      CLIENTE_KEY
    );


    /* =====================================================
       SESSION STORAGE
    ===================================================== */

    sessionStorage.removeItem(
      TOKEN_KEY
    );

    sessionStorage.removeItem(
      CLIENTE_KEY
    );


    /* =====================================================
       AVISAR COMPONENTES
    ===================================================== */

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
        pegarTokenCliente();


      /* ===================================================
         VISITANTE

         Sem token pode navegar normalmente.
      =================================================== */

      if (!token) {
        return;
      }


      /* ===================================================
         TOKEN INVÁLIDO OU EXPIRADO
      =================================================== */

      if (
        !tokenEstaValido(
          token
        )
      ) {

        console.warn(
          "Sessão IronStore expirada."
        );


        fazerLogout();


        /* ===============================================
           PERFIL EXIGE LOGIN
        =============================================== */

        if (
          location.pathname ===
          "/perfil"
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


    /* =====================================================
       VERIFICAR IMEDIATAMENTE
    ===================================================== */

    verificarToken();


    /* =====================================================
       VERIFICAR PERIODICAMENTE
    ===================================================== */

    const intervalo =
      setInterval(
        verificarToken,
        1000
      );


    /* =====================================================
       LIMPEZA
    ===================================================== */

    return () => {

      clearInterval(
        intervalo
      );

    };


  }, [
    location.pathname,
    navigate
  ]);


  /* =======================================================
     RASTREAR NAVEGAÇÃO

     Toda mudança de rota registra:

     usuario
     dominio
     caminho

     O backend decide:

     logado     = nome + sobrenome
     não logado = IP
  ======================================================= */

  useEffect(() => {

    /* =====================================================
       CAMINHO COMPLETO
    ===================================================== */

    const caminhoCompleto =
      `${location.pathname}${location.search}`;


    /* =====================================================
       REGISTRAR
    ===================================================== */

    enviarRastreio(
      caminhoCompleto
    );


  }, [
    location.pathname,
    location.search
  ]);


  /* =======================================================
     INTERFACE
  ======================================================= */

  return (

    <>

      {/* =============================================
          IDENTIDADE DA ABA
      ============================================= */}

      <Aba />


      {/* =============================================
          ROTAS
      ============================================= */}

      <main
        className="app-pagina-principal-iron"
      >

        <Routes>

          {/* =========================================
              PATH
          ========================================= */}

          <Route
            path="/path"
            element={
              <Path />
            }
          />


          {/* =========================================
              HOME
          ========================================= */}

          <Route
            path="/"
            element={
              <Home />
            }
          />


          {/* =========================================
              COMPRAS
          ========================================= */}

          <Route
            path="/compras"
            element={
              <Compras />
            }
          />


          {/* =========================================
              ENTRAR
          ========================================= */}

          <Route
            path="/entrar"
            element={
              <Entrar />
            }
          />


          {/* =========================================
              PERFIL
          ========================================= */}

          <Route
            path="/perfil"
            element={
              <Perfil />
            }
          />


          {/* =========================================
              PRODUTO
          ========================================= */}

          <Route
            path="/produtos/:produtoId"
            element={
              <Produtos />
            }
          />


          {/* =========================================
              REELS
          ========================================= */}

          <Route
            path="/reels/:produtoid"
            element={
              <Reels />
            }
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