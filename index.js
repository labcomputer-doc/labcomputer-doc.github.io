var express = require('express');
var app = express();
// var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

const port = 4000;

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
