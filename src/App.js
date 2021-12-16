import React, { useState, useEffect } from "react";
import './App.css';
import Axios from "axios";
function App() {


  
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
      <div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<div className="jumbotron">
						<h2>
							Hello, world!
						</h2>
						<p>
							nsaviuavbkaj
						</p>
						<p>
							<a className="btn btn-primary btn-large" href="#">Learn more</a>
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
				<a className="btn" href="#">Ver detalles »</a>
			</p>
		</div>
  ))}
    </div>
    </div>
    
    

    );
  }
  




export default App;
