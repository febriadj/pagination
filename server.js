'use strict'

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 8000;

require('./libs/mongo-connect')();

app.use(require('cors')());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use('/api', require('./routes/index'));

server.listen(port);
console.log('[%i] server listening...', port);