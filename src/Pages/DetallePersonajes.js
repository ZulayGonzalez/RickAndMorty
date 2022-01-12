import React from 'react'
import { useContext } from 'react/cjs/react.development'
import UseContext from './UseContext'
import { Link } from "react-router-dom";

const DetallePersonajes = () => {

    const { persona } = useContext(UseContext);

    if (persona.length !== undefined) return <p>no hay dato</p>

    return (
        <div class="container-fluid">
            {<div class="row">
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
                                                {persona.name}
                                            </h3><img alt="Vista previa de la imagen del personaje" src={persona.image} />
                                        </div>
                                        <div class="col-md-6" style={{ border: "1px solid #d0d0d0" }}>
                                            <dl>
                                                <dt>

                                                    Especie:

                                                </dt>
                                                <dd>
                                                    {persona.species}
                                                </dd>
                                                <dt>
                                                    Estado:
                                                </dt>
                                                <dd>
                                                    {persona.status}
                                                </dd>

                                                <dt>
                                                    Genero:
                                                </dt>
                                                <dd>
                                                    {persona.gender}
                                                </dd>

                                            </dl>
                                            <Link to="/episodios" >
                                                Ver episodios
                                            </Link>


                                            {/* <pre>
                                                {JSON.stringify(null, null, 3)}
                                            </pre> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">

                        </div>
                    </div>
                </div>
            </div>}
        </div>





    )
}

export default DetallePersonajes
