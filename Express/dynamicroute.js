const express = require('express');
var app = express();

app.get('/:id([0-9]{5})',function(req, res){
    res.send('id: ' + req.params.id)
});


/*app.get('/:id',function(req, res){
    res.send('Your id is: ' + req.params.id);
});*/

app.get('/:name/:id',function(req, res){
    res.send('id: ' + req.params.id +' and name: ' + req.params.name)
});

app.get('*',function(req, res){
    res.send('404');
});

app.listen(8080);



