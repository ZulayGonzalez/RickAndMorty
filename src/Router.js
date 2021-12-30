import React, { useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DetallePersonajes, Inicio, Detalle, NoFound } from "./Pages"


export default function Router() {

  const [persona, setPersona] = useState(null)



  const comunicacion = (personaje) => {


    setPersona(personaje)
    // console.log("desde el padre", personaje)
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio handle={comunicacion} />} />
        <Route exact path="/detallePersonaje" element={<DetallePersonajes persona={persona} />} />
        {/* <Route path="/detallePersonaje/:Id" element={<Detalle />} /> */}


        <Route path="*" element={<NoFound />} />
      </Routes>
    </BrowserRouter>
  )
}
