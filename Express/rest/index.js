var express = require('express');


var app = express();

//Require the Router we defined in movies.js
var movies = require('./movies.js');

app.use(express.json());
//Use the Router on the sub route /movies
app.use('/movies', movies);

app.listen(3000);