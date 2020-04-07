const express = require('express');
const app = express();
const morgan = require('morgan');
var cors = require('cors')

require('dotenv').config();

const users = require('./api/routes/users');
const cnc = require('./api/routes/cnc');
const devices = require('./api/routes/devices');
const gscor = require('./api/routes/gscor');

app.use(cors())
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use('/users', users);
app.use('/cnc', cnc);
app.use('/devices', devices);
app.use('', gscor);

module.exports = app;