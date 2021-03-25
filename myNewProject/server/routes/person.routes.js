const PersonController = require('../controllers/person.controller');

module.exports =(app) =>{
    app.get('/api/person/',PersonController.getAll)
    app.post('/api/person/new', PersonController.create);
    app.get('/api/person/:id', PersonController.getOne);
    app.put('/api/person/:id', PersonController.update);
    app.delete('/api/person/:id', PersonController.delete);
}