
import React, { useState, useEffect } from "react";
import Axios from "axios";
import DetallePersonajes from "./DetallePersonajes";
import  Detalle from "./Detalle";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Inicio() {

	const [list, setList] = useState({})
//	localStorage.setItem({item}, id)
//	const navigate= useNavigate();


	// const handlePush = props => {

	
//	navigate.push('/detalle')
	// }


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
		<Route  path="/detallePersonajes" component={<DetallePersonajes />} />,
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
				{list.length > 0 && list.map((item) => (
					<div key={item.id} className="col-md-2 card" >
						<h3>
							{item.name}
						</h3>
						<img
							src={item.image}
							height={150} width={150}
						/>

						<p>

						<a href="/DetallePersonajes" value={item.id} class="btn btn-secondary" type="button">Detalle</a>

						</p>
					</div>
				))}
			</div>

		</div>


	);

}
