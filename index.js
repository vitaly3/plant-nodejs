const http = require('http');
const app = require('./app');
require('dotenv').config();
const port = process.env.PORT || 5000;
const server = http.createServer(app);

console.log(process.env)
server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
