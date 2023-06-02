const express = require('express');
const server = express()

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());

const cors = require('cors');
server.use(cors());

require('custom-env').env(process.env.NODE_ENV, "./config");


const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
server.use(express.static('public'));

server.listen(process.env.PORT);

