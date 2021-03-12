const express = require ("express");

var faker = require('faker');

var randomName = faker.name.findName(); // Rowan 
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties



const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get("/api", (request, response) =>{
    console.log("in the get for /")
    console.log(request.url)
    console.log(request.body);
});
   

    app.post("/api", (request, response) => { 
        console.log("in the get for /")
        console.log(request.url)
        console.log(request.body);
    
    });   



app.listen(8000,() =>{
console.log("You have successfully connected to port 8000");
});