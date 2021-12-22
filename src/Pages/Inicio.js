
import React, { useState, useEffect } from "react";
import Axios from "axios";
import DetallePersonajes from "./DetallePersonajes";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Inicio() {

    const [list, setList] = useState({});
    
      useEffect(() => {
      Axios({
        url: "https://rickandmortyapi.com/api/character",
      })
        .then((response) => {
          setList(response.data.results);
          console.log(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    return (
		 <Route exact path="/detalle"component={<DetallePersonajes/>}/>,
        <div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<div className="jumbotron">
						<h2>
							Hello, Zulay!
						</h2>
						<p>
							Estas consumiendo la api de Rick and Morthy
						</p>
						
					</div>
				</div>
			</div>
  
	<div className="row">
 		 {list.length > 0 &&list.map((item) => (
			<div key={item.id} className="col-sd-3 card" >
			<h3>
      			{item.name}
			</h3>
			<img 
			src={item.image}
			 height={150} width={150}
			/>
			
		<p>

			<Link to="/detalle">
				Detalle
			</Link>

			</p>
			</div>
 		 ))}
    </div>
    </div>
    
    

    );
    
}
