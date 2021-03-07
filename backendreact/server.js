const express = require ("express");
const mongoose = require("mongoose");

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

const dbName = "pets";

mongoose
.connect("mongodb://localhost/" + dbName,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then (() => console.log("Successful connected to db: " + dbName))
.catch((err) => console.log("Something is wrong when trying to connect with db: " + dbName));

const DogSchema = new mongoose.Schema(
    {
        name:String,
        age: Number,
        isFriendly: Boolean,
        smoke: Boolean,
    },
    {
        timestamps: true,
    }
)

const modelName = "Dog";
const Dog = mongoose.model(modelName, DogSchema);


app.get("/", (request, response) =>{
    return response.send("Hello");
});

app.get("/api/dogs", (req,res) =>{
    Dog.find()
    .then((allDogs) => res.json(allDogs))
    .catch((err) => res.json(err));
});

app.post("/api/dogs", (req,res) =>{
    Dog.create(req.body)
    .then((newDog) => {
        console.log((newDog));
        res.json(newDog);
    })
    .catch((err) => res.json(err));
})





app.listen(8000,() =>
console.log("You have successfully connected to port 8000")
);