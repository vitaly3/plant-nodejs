'user strict';

// var mysql = require('mysql');

// //local mysql db connection
// var connection = mysql.createConnection({
//     host     : process.env.SKUD_HOST,
//     port     : process.env.SKUD_PORT,
//     user     : process.env.SKUD_USER,
//     password : process.env.SKUD_PASSWORD
// });

// if (connection.state === "disconnected") {
//     connection.connect(function(err) {
//         if (err) throw err;
//     });
// }

//module.exports = connection;


let mysql = require('mysql');
//local mysql db connection
var sql = mysql.createConnection({
    host     : process.env.SKUD_HOST,
    port     : process.env.SKUD_PORT,
    user     : process.env.SKUD_USER,
    password : process.env.SKUD_PASSWORD
});

if (sql.state === "disconnected") {
  sql.connect(function(err) {
      //if (err) throw err;
  });
}

sql.reconect = function() {
    mysql.createConnection({
        host     : process.env.SKUD_HOST,
        port     : process.env.SKUD_PORT,
        user     : process.env.SKUD_USER,
        password : process.env.SKUD_PASSWORD
    });
    if (sql.state === "disconnected") {
        sql.connect(function(err) {
            //if (err) throw err;
        });
      }
}

module.exports = sql;