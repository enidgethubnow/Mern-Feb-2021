

fetch('https://pokeapi.co/api/v2/pokemon/1')

.then ((response) =>  response.json())
.then((jsonResponse) => console.log(jsonResponse))
.catch ((err) =>{
    console.log("oops! your poke made an error");
    console.log(err);
});

console.log("Poke Poke Pokemon")