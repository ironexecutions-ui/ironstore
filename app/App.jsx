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


import Produtos from "../areas/produtos";

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

          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />


          <Route
            path="/compras"
            element={<Compras />}
          />

          {/* ENTRAR */}

          <Route
            path="/entrar"
            element={<Entrar />}
          />
          {/* Perfil */}

          <Route
            path="/perfil"
            element={<Perfil />}
          />
          <Route
            path="/produtos/:produtoId"
            element={<Produtos />}
          />
        </Routes>

      </main>
    </>
  );
}