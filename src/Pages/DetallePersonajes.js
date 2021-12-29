import React from 'react'
import Axios from "axios";
import  { useState, useEffect } from "react";
export default function DetallePersonajes() {
    const [list, setList] = useState({})
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
 /*
    const data = {
        "id": 38,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Female",
        "image": "https://rickandmortyapi.com/api/character/avatar/38.jpeg"
    }*/

    return (
        <div class="container-fluid">
        {list.length > 0 && list.map((data) => (
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-8" style={{ border: "1px solid #d0d0d0", marginTop: "100px" }}>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-6" style={{ border: "1px solid #d0d0d0" }}>
                                            <h3>
                                                {data.name}
                                            </h3><img alt="Vista previa de la imagen del personaje" src={data.image} />
                                        </div>
                                        <div class="col-md-6" style={{ border: "1px solid #d0d0d0" }}>
                                            <dl>
                                                <dt>

                                                    Especie:

                                                </dt>
                                                <dd>
                                                    {data.species}
                                                </dd>
                                                <dt>
                                                    Estado:
                                                </dt>
                                                <dd>
                                                    {data.status}
                                                </dd>

                                                <dt>
                                                    Genero:
                                                </dt>
                                                <dd>
                                                    {data.gender}
                                                </dd>

                                            </dl>
                                            <a href="/" class="btn btn-secondary"  type="button">Atrás</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}
