const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/api/shoes', data.getShoeData);
app.get('/api/socks', data.getSockdata);

app.listen(3023, function () {
    console.log('listening on 3023');
})
