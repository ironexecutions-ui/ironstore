import React from "react";

import {
  createRoot
} from "react-dom/client";

import {
  BrowserRouter
} from "react-router-dom";

import App from "./app/App";


/* =========================================================
   GOOGLE IDENTITY SERVICES
========================================================= */

const GOOGLE_SCRIPT_ID =
  "google-identity-services";


/* =========================================================
   CARREGAR GOOGLE
========================================================= */

function carregarGoogleIdentity() {

  return new Promise(
    (
      resolve,
      reject
    ) => {

      /* =============================================
         JÁ CARREGADO
      ============================================= */

      if (
        window.google
          ?.accounts
          ?.id
      ) {

        resolve(
          window.google
        );

        return;
      }


      /* =============================================
         SCRIPT JÁ EXISTE
      ============================================= */

      const existente =
        document.getElementById(
          GOOGLE_SCRIPT_ID
        );

      if (existente) {

        existente.addEventListener(
          "load",
          () =>
            resolve(
              window.google
            ),
          {
            once: true
          }
        );

        existente.addEventListener(
          "error",
          () =>
            reject(
              new Error(
                "Não foi possível carregar o Google Identity Services."
              )
            ),
          {
            once: true
          }
        );

        return;
      }


      /* =============================================
         CRIAR SCRIPT
      ============================================= */

      const script =
        document.createElement(
          "script"
        );

      script.id =
        GOOGLE_SCRIPT_ID;

      script.src =
        "https://accounts.google.com/gsi/client";

      script.async = true;

      script.defer = true;


      /* =============================================
         CARREGADO
      ============================================= */

      script.onload = () => {

        resolve(
          window.google
        );
      };


      /* =============================================
         ERRO
      ============================================= */

      script.onerror = () => {

        reject(
          new Error(
            "Não foi possível carregar o Google Identity Services."
          )
        );
      };


      /* =============================================
         ADICIONAR
      ============================================= */

      document.head.appendChild(
        script
      );
    }
  );
}


/* =========================================================
   DISPONIBILIZAR PROMISE GLOBALMENTE

   Entrar.jsx também pode consultar window.google.
========================================================= */

window.ironstoreGoogleReady =
  carregarGoogleIdentity();


/* =========================================================
   RENDERIZAR REACT
========================================================= */

createRoot(
  document.getElementById(
    "root"
  )
).render(

  <React.StrictMode>

    <BrowserRouter>

      <App />

    </BrowserRouter>

  </React.StrictMode>
);