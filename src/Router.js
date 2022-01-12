import React, { useContext, useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DetallePersonajes, Inicio, NoFound, PaginaInicial } from "./Pages"
import Episodios from './Pages/Episodios';
import UseContext from './Pages/UseContext';


const Router = () => {

  const [persona, setPersona] = useState([])
  // const comunicacion = (personaje) => {
  //  setPersona(personaje)
  return (
    <UseContext.Provider value={{ persona, setPersona }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PaginaInicial />} />
          <Route exact path="/detallePersonaje" element={<DetallePersonajes />} />
         // <Route exact path="/Incio" element={<Inicio />} />
          { <Route exact path="/episodios" element={<Episodios />} /> }


          <Route path="*" element={<NoFound />} />
        </Routes>
      </BrowserRouter>
    </UseContext.Provider>
  )
}
export default Router
