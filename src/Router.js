import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DetallePersonajes from "./Pages/DetallePersonajes"
import Inicio from "./Pages/Inicio"
import { render } from 'react-dom';

export default function Router() {
    return (
    
        <Routes>
        <Route exact path="/"component={<Inicio/>}/>
        <Route exact path="/detalle"component={<DetallePersonajes/>}/>

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        
        
      </Routes>

    )
}
