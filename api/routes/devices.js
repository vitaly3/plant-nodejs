const express = require('express');
const router = express.Router();
const moment = require('moment');

router.get('/', (req, res, next) => {
  let queryWhere = [];
  let queryLimit = '';
  let queryOffset = '';
  for (let value in req.query) {
    if (value === 'LIMIT') {
      queryLimit = `LIMIT ${req.query[value]}`;
    } else if (value === 'OFFSET') {
      queryOffset = `OFFSET ${req.query[value]}`;
    } else {
      queryWhere.push(`${value} = '${req.query[value]}'`);
    }
  }
  let allQuery = 'SELECT * From `tc-db-main`.devices';
  let q = '';
  if (!!queryWhere.length) {
    q = queryWhere.join(' AND ');
    allQuery = `${allQuery} WHERE ${q} ${queryLimit} ${queryOffset}`;
  }
  let sql = connectToMySQL();
  sql.query(allQuery, (error, response) => {
    if (error) {
      res.status(400).json({message: error});
      sql.end();
    } else {
      res.status(200).json(response);
      sql.end();
    }
  });
})

router.get('/log', (req, res, next) => {
  let queryAll = queryWhere = queryId = '';
  let logStart = req.query.START || false;
  let logEnd = req.query.END || false;
  let queryOffset = '';
  let queryLimit = '';

  for (let value in req.query) {
    if (value === 'LIMIT') {
      queryLimit = `LIMIT ${req.query[value]}`;
    } else if (value === 'OFFSET') {
      queryOffset = `OFFSET ${req.query[value]}`;
    } else if (value === 'ID') {
      queryId = req.query[value];
    }
  }
    if (logStart) {
      logStart = moment(+logStart).format('YYYY-MM-DD HH:mm:ss');
      queryAll = ` AND log.LOGTIME > '${logStart}'`;
    }
    if (logEnd) {
      //.format('YYYY-MM-DD HH:mm:ss')
      logEnd = moment(+logEnd).format('YYYY-MM-DD HH:mm:ss')
      queryAll += ` AND log.LOGTIME < '${logEnd}'`;
    }
    if (queryId) {
      queryAll += ` AND person.ID = ${queryId}`
    }
    queryAll += ` ORDER BY log.LOGTIME DESC ${queryLimit} ${queryOffset}`
   let query = 'SELECT log.ID, log.LOGTIME as time, log.DEVHINT, log.EMPHINT, ord(substr(log.logdata,5,1)) as dir, ' +
   'IF (ord(substr(log.logdata,5,1)) = 1, "ВЫХОД", IF (ord(substr(log.logdata,5,1)) = 2, "ВХОД", "НЕОПРЕДЕЛЕНО")) as action,' +
   'log.logdata, person.ID, person.name As name, person.pos As pos, device.id as devID, device.name As devdesc '+
   'FROM `tc-db-Log`.logs As log INNER JOIN `tc-db-main`.personal As person On log.EMPHINT = person.ID '+
   'INNER JOIN `tc-db-main`.devices As device On log.devHINT = device.ID '+
   'WHERE substr(log.logdata,1,2)=0xFE06' + queryAll;

   console.log(query);
   sql = connectToMySQL();
    sql.query(query, (error, response) => {
      if (error) {
        res.status(400).json({message: error});
        sql.end();
      } else {
        res.status(200).json(response);
        sql.end();
      }
    });
})

function connectToMySQL() {
  let mysql = require('mysql');
  let sql = mysql.createConnection({
      host     : process.env.SKUD_HOST,
      port     : process.env.SKUD_PORT,
      user     : process.env.SKUD_USER,
      password : process.env.SKUD_PASSWORD
  });
  if (sql.state === "disconnected") {
    sql.connect((err) => { } );
  }
  return sql;
}
module.exports = router;