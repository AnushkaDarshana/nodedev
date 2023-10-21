const express = require('express');

var app = express();

app.use('/pages',function(req, res, next) {
    console.log("request recieved at"+Date.now());
    next();
});

app.get('/pages', function(req, res){
        res.send('Pages');
    
});

app.listen(8080);



