const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/json', function (req, res) {
    res.json({ status: 'success', data: { message: 'Hello World' } })
})

app.listen(80)