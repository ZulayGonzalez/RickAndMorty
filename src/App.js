import Router from "./Router";
import{Link} from "react-router-dom";
import Inicio from "./Pages/Inicio";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DetallePersonajes from "./Pages/DetallePersonajes";

export default function App() {
    return (
      <Inicio/>
  
  /* <Routes>
   <Route exact path="/"component={<Inicio/>}/>
   <Route exact path="/detalle"component={<DetallePersonajes/>}/>      
 </Routes> */
  );
  }