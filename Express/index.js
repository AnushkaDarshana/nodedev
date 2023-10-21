const express = require('express');

var app = express();
var rout = require('./routes.js')

app.use('/routes',rout);

app.listen(8080);


/*app.get('/hello', function(req, res){
    res.send('Hello World!');
});

app.post('/hello', function(req, res){
    res.send("Pose method called");
});

app.all('/all', function(req, res){
    res.send("All method called");
});*/

