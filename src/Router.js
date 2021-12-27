import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DetallePersonajes, Inicio, Detalle, NoFound } from "./Pages"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/detallePersonaje" element={<DetallePersonajes />} />
        <Route path="/detallePersonaje/:Id" element={<Detalle />} />


        <Route path="*" element={<NoFound />} />
      </Routes>
    </BrowserRouter>
  )
}
