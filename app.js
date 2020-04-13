const express = require('express');
const app = express();

require('dotenv').config();

const users = require('./api/routes/users');
const cnc = require('./api/routes/cnc');
const devices = require('./api/routes/devices');
const gscor = require('./api/routes/gscor');

app.use(require('cors')())
app.use(express.static(__dirname + '/public'));
app.use(require('morgan')('dev'));
app.use('/users', users);
app.use('/cnc', cnc);
app.use('/devices', devices);
app.use('', gscor);

module.exports = app;