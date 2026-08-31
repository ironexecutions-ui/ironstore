import React from "react";

import {
  Routes,
  Route
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


export default function App() {

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

                O PRÓPRIO COMPONENTE DECIDE
                QUANDO DEVE APARECER.
            ============================================= */}

      <VerReels />

    </>

  );

}