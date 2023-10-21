const express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('Get route');
});

router.post('/', function(req, res){
    res.send('Post route');
});

module.exports = router;