import React from 'react'


export default function DetallePersonajes() {
   

    const data = {
        "id":38,
        "name":"Beth Smith",
        "status":"Alive",
        "species":"Human",
        "type":"",
        "gender":"Female",
        "origin":{"name":"Earth (C-137)",
        "url":"https://rickandmortyapi.com/api/location/1"},
        "location":{"name":"Earth (C-137)",
        "url":"https://rickandmortyapi.com/api/location/1"},
        "image":"https://rickandmortyapi.com/api/character/avatar/38.jpeg",
        "episode":["https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/51"],
        "url":"https://rickandmortyapi.com/api/character/38",
        "created":"2017-11-05T09:48:44.230Z"
    }





    return (
<div class="container-fluid">
	<div class="row">
            <div class="col-md-12">
                    <div class="row">
                                <div class="col-md-2">
                                </div>
                                    <div class="col-md-8" style={{ border: "1px solid #d0d0d0", marginTop:"100px"}}>
                                                <div class="row">
                                                                <div class="col-md-12">

                                                                    
                                                                <div class="row">
                                                                    <div class="col-md-6" style={{ border: "1px solid #d0d0d0"}}>
                                                                    <h3>
                                                                        {data.name}
                                                                    </h3><img alt="Vista previa de la imagen del personaje" src={data.image} />
                                                                    </div>
                                                                    <div class="col-md-6" style={{ border: "1px solid #d0d0d0"}}>
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
