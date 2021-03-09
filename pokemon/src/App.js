
import React, {useState} from 'react';
import './App.css';

function App() {
  
  const [pokemon, setPokemon] = useState ([]);
  const getPoke =() => {
    

    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1200')

    .then ((response) =>  response.json())

    .then((jsonResponse) => {
      console.log(jsonResponse);
      setPokemon(jsonResponse.results);
    })
    .catch((error) => {
        console.log("oops! your poke made an error");
        console.log(error);
    });
    
    console.log("Poke Poke Pokemon");

  }

  return (
    <div className="App">
     <h2>Fetch Pokemon API</h2> 
     <button onClick ={ getPoke }>Fetch Pokemon</button>
     {/*  */}
    {
      pokemon.length > 0 ?
        pokemon.map((poke, index) => (
          <p key={index}>{poke.name}</p>
        ))
      
      : <p>waiting for pokemon</p>
    } 
     
    </div>
  );

}
export default App;
