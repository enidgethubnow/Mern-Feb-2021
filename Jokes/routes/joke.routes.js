const JokeController = require('../controller/joke.controller');
 
module.exports = app => {
    app.get('/api/Jokes', JokeController.findAllJokes);
    app.get('/api/Jokes/:id', JokeController.findOneSingleJoke);
    app.put('/api/Jokes/:id', JokeController.updateExistingJoke);
    app.post('/api/Jokes', JokeController.createNewJoke);
    app.delete('/api/Jokes/:id', JokeController.deleteAnExistingJoke);
};