var express = require('express');
var router = express.Router();
var movies = [
   {id: 101, name: "Fight Club", year: 1999, rating: 8.1},
   {id: 102, name: "Inception", year: 2010, rating: 8.7},
   {id: 103, name: "The Dark Knight", year: 2008, rating: 9},
   {id: 104, name: "12 Angry Men", year: 1957, rating: 8.9}
];

//Routes will go here
router.get('/', function(req, res) {
    res.json(movies);
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
    var movie = movies.filter(function(movie) {
        return movie.id == id;
    });
    res.json(movie);
});

router.post('/', function(req, res) {
    movies.push(req.body);
    res.json(req.body);
    console.log(req.body);
});

router.put('/:id', function(req, res) {
    var id = req.params.id;

    // Find the index of the movie with the given ID
    var index = movies.findIndex(function(movie) {
        return movie.id == id;
    });

    if (index === -1) {
        // Movie with the given ID does not exist
        return res.status(404).json({ error: 'Movie not found' });
    }

    // Update the movie at the found index with the new data
    movies[index] = { ...movies[index], ...req.body };
    
    res.json(movies[index]);
});

router.delete('/:id', function(req, res) {
    var id = req.params.id;
    // Find the index of the movie with the given ID
    var index = movies.findIndex(function(movie) {
        return movie.id == id;
    }); 

    if (index === -1) {
        // Movie with the given ID does not exist
        return res.status(404).json({ error: 'Movie not found' });
    }
    
    movies.splice(index, 1);
    res.json(movies);
    console.log(movies);
});



module.exports = router;




