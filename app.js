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
app.use('/api/users', users);
app.use('/api/cnc', cnc);
app.use('/api/devices', devices);
app.use('', gscor);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  })
}

module.exports = app;