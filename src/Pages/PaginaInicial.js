import React, { useEffect, useContext, useState } from "react";
import Axios from "axios";
import DetallePersonajes from "./DetallePersonajes";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import UseContext from "./UseContext";

const PaginaInicial = () => {

    const usesContext = useContext(UseContext)
    const { setPersona } = usesContext


    const handlePersona = (persona) => {
        setPersona(persona)

    }

    const [lista, setLista] = useState({});

    useEffect(() => {
        Axios({
            url: "https://rickandmortyapi.com/api/character",
        })
            .then((response) => {
                setLista(response.data.results);
                console.log(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Route exact path="/detalle" component={<DetallePersonajes />} />,
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron">
                        <h2>
                            Rick and Morthy
                        </h2>
                        <p>
                            Estas consumiendo la api de Rick and Morthy
                        </p>

                    </div>
                </div>
            </div>

            <div className="row">
                {lista.length > 0 && lista.map((item) => (
                    <div key={item.id} className="col-sd-3 card" >
                        <h3>
                            {item.name}
                        </h3>
                        <img
                            src={item.image}
                            height={150} width={150}
                        />

                        <p>

                            <Link to="/detallePersonaje" onClick={() => handlePersona(item)}>
                                Detalle
                            </Link>

                        </p>
                    </div>
                ))}
            </div>

        </div>


    );

}

export default PaginaInicial
