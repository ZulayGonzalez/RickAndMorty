import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DetallePersonajes, Inicio,  NoFound, Detalle } from "./Pages"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/detallePersonajes" element={<DetallePersonajes />} />
        <Route path="/Detalle" element={<Detalle />} />


        <Route path="*" element={<NoFound />} />
      </Routes>
    </BrowserRouter>
  )
}
