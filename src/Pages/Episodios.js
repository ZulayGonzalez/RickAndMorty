import React, { useContext, useState } from 'react'
import UseContext from './UseContext'
import Axios from "axios";
import { Link } from "react-router-dom";

const GetNumber = ({ text }) => {
    const [dato, setDato] = useState(null);

    const handleEpisodio = (url) => {
        Axios({
            url: url
        })
            .then((response) => {
                // setLista(response.data.results);
                console.log(response.data);
                setDato(response.data);
            }
            ).catch((error) => {
                console.log(error);
            });
    }
    return <>
        <p>Episodio {text[text.length - 1]} </p>

        <button type="button" class="btn btn-link"
            onClick={() => handleEpisodio(text)}>
            Ver
            <p>{dato?.name}</p>
        </button>
    </>
}



const Episodios = () => {
    const { persona } = useContext(UseContext);
    if (persona.length !== undefined) return <p>no hay dato</p>
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2">

                    <button type="button" class="btn btn-success">
                        Atras
                    </button>

                </div>
                <div class="col-md-8">
                    <h3>
                        {persona.name}

                    </h3>
                    <blockquote class="blockquote">
                        <p class="mb-0">
                            Aqui puedes encontrar los capitulos de {persona.name}
                        </p>
                        <img alt="Vista previa de la imagen de Bootstrap" src={persona.image} />
                    </blockquote>
                </div>
                <div class="col-md-2">

                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    {persona.episode.length > 0 && persona.episode.map((epis) =>
                        <GetNumber text={epis} />
                    )}
                </div>
                <div class="col-md-6">
                </div>
            </div>
        </div>
    )
}

export default Episodios
