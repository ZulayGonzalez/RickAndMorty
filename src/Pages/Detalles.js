
import React, { useState, useEffect } from "react";
import Axios from "axios";



export  default const Detalles = (datap) => {
   // const [list, setList] = useState({});
    const data = {"id":38,
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
    "created":"2017-11-05T09:48:44.230Z"}
        return (
        <div class="container-fluid">

                      <div className="row">
                             <div className="row">
                                {data.length > 0 &&data.map((data) => (
                                    <div key={data.id} className="col-sd-3 card" >
                                    <h3>
                                        {data.name}
                                    </h3>
                                    <h3>
                                        {data.status}
                                    </h3>
                                    <h3>
                                        {data.species}
                                    </h3>
                                    <h3>
                                        {data.gender}
                                    </h3>

                                    <img 
                                    src={data.image}
                                    height={150} width={150}
                                    />
                                    
                                    </div>
                                ))}
                            </div>
                               
                      </div>
        </div>


    )
}


//<div class="row">
/*<div class="col-md-12">
    <div class="card">
        <h5 class="card-header">
            Cìclope Morthy	
        </h5>
        <div class="card-body">
      <img 
      src= "https://pocketmortys.net/images/assets/MortyCyclopsFront.png"
          />  
        </div>
        <div class="card-footer">
            </div>
                
            </div>
        </div>
    </div>*/