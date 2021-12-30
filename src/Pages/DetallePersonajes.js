import React from 'react'


export default function DetallePersonajes({ persona }) {



    const { id, image } = persona

    console.log("desde el detalle", image)



    return (
        <div class="container-fluid">
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

                                            <a href="#" class="btn btn-secondary" type="button">Botón</a>
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
        </div>





    )
}
