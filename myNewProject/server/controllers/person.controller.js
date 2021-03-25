const Person = require('../models/person.model');    
module.exports.index = (request, response) => {
    console.log("index person.controller")
    response.json({
        message: "Hello World"
    });
}
          /* The method below is new */
module.exports.createPerson = (request, response) => {
    const { firstName, lastName} = request.body;
    Person.create({
        firstName,
        lastName,
        
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports.deletePerson = (request, response) => {
    Person.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}