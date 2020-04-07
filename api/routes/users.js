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
  let allQuery = 'SELECT * From `tc-db-main`.personal';
  let strQuery = '';
  if (!!queryWhere.length) {
     strQuery = queryWhere.join(' AND ');
     allQuery = `${allQuery} WHERE ${strQuery}`;
  }
  if (queryLimit) {
    allQuery += ` ${queryLimit} ${queryOffset}`;
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
});
router.get('/TABID/:TABID/log', (req, res, next) => {
  const userId = req.params.TABID || '';
  const queryLogStart = req.query.START || '';
  const queryLogEnd = req.query.END || '';
  const queryLimit = req.query.LIMIT || '';
  const queryOffset = req.query.OFFSET || '';

  let query = 'SELECT log.ID, log.LOGTIME as TIME, log.DEVHINT, log.EMPHINT, '+
      'ord(substr(log.logdata,5,1)) as USERACTION, '+
      'IF (ord(substr(log.logdata,5,1)) = 1, "ВЫХОД", IF (ord(substr(log.logdata,5,1)) = 2, "ВХОД", "НЕОПРЕДЕЛЕНО")) as ACTION,'+
      'person.ID, person.TABID, person.name As NAME, person.pos As POSITION, device.id as DEVICEID, device.name As DEVICENAME '+
      'FROM `tc-db-Log`.logs As Log inner Join `tc-db-main`.personal As person On Log.EMPHINT = person.ID '+
      'inner Join `tc-db-main`.devices As DEVICE On Log.devHINT = device.ID '+
      'WHERE substr(logdata,1,2)=0xFE06 AND person.TABID = ' + userId;
  let startLog = "";
  if (queryLogStart) {
    startLog = " AND Log.LOGTIME >= '"+moment.unix(+queryLogStart).format('YYYY-MM-DD HH:mm:ss')+"'";
  }
  let endLog = "";
  if (queryLogEnd) {
    endLog = " AND Log.LOGTIME <= '"+moment.unix(+queryLogEnd).format('YYYY-MM-DD HH:mm:ss')+"'";
  }
  query += `${startLog} ${endLog} ORDER BY Log.LOGTIME ASC`;

  if (queryLimit) {
    query += ` LIMIT ${queryLimit}`;
    if (queryOffset) {
      query += ` OFFSET ${queryOffset}`;
    }
  }
  let sql = connectToMySQL();
  sql.query(query, (error, response) => {
    if (error) {
      res.status(400).json({message: error});
      sql.end();
    } else {
      res.status(200).json(response);
      sql.end();
    }
  });
});
router.get('/:USERID/log', (req, res, next) => {
  const userId = req.params.USERID || '';
  const queryLogStart = req.query.START || '';
  const queryLogEnd = req.query.END || '';
  const queryLimit = req.query.LIMIT || '';
  const queryOffset = req.query.OFFSET || '';

  let query = 'SELECT log.ID, log.LOGTIME as TIME, log.DEVHINT, log.EMPHINT, '+
      'ord(substr(log.logdata,5,1)) as USERACTION, '+
      'IF (ord(substr(log.logdata,5,1)) = 1, "ВЫХОД", IF (ord(substr(log.logdata,5,1)) = 2, "ВХОД", "НЕОПРЕДЕЛЕНО")) as ACTION,'+
      'person.ID, person.TABID, person.name As NAME, person.pos As POSITION, device.id as DEVICEID, device.name As DEVICENAME '+
      'FROM `tc-db-Log`.logs As Log inner Join `tc-db-main`.personal As person On Log.EMPHINT = person.ID '+
      'inner Join `tc-db-main`.devices As device On Log.devHINT = device.ID '+
      'WHERE substr(logdata,1,2)=0xFE06 AND person.ID = ' + userId;
  let startLog = "";
  if (queryLogStart) {
    startLog = " AND Log.LOGTIME >= '"+moment.unix(+queryLogStart).format('YYYY-MM-DD HH:mm:ss')+"'";
  }
  let endLog = "";
  if (queryLogEnd) {
    endLog = " AND Log.LOGTIME <= '"+moment.unix(+queryLogEnd).format('YYYY-MM-DD HH:mm:ss')+"'";
  }
  query += `${startLog} ${endLog} ORDER BY Log.LOGTIME ASC`;

  if (queryLimit) {
    query += ` LIMIT ${queryLimit}`;
    if (queryOffset) {
      query += ` OFFSET ${queryOffset}`;
    }
  }
  let sql = connectToMySQL();
  sql.query(query, (error, response) => {
    if (error) {
      res.status(400).json({message: error});
      sql.end();
    } else {
      res.status(200).json(response);
      sql.end();
    }
  });
});
router.get('/log', (req, res, next) => {
  const queryLogStart = req.query.START || '';
  const queryLogEnd = req.query.END || '';
  const queryLimit = req.query.LIMIT || '';
  const queryOffset = req.query.OFFSET || '';

  let query = 'SELECT log.ID, log.LOGTIME as TIME, log.DEVHINT, log.EMPHINT, '+
      'ord(substr(log.logdata,5,1)) as USERACTION, '+
      'IF (ord(substr(log.logdata,5,1)) = 1, "ВЫХОД", IF (ord(substr(log.logdata,5,1)) = 2, "ВХОД", "НЕОПРЕДЕЛЕНО")) as ACTION,'+
      'person.ID, person.TABID, person.name As NAME, person.pos As POSITION, device.id as DEVICEID, device.name As DEVICENAME '+
      'FROM `tc-db-Log`.logs As Log inner Join `tc-db-main`.personal As person On Log.EMPHINT = person.ID '+
      'inner Join `tc-db-main`.devices As device On Log.devHINT = device.ID '+
      'WHERE substr(logdata,1,2)=0xFE06';
  let startLog = "";
  if (queryLogStart) {
    startLog = " AND Log.LOGTIME >= '"+moment.unix(+queryLogStart).format('YYYY-MM-DD HH:mm:ss')+"'";
  }
  let endLog = "";
  if (queryLogEnd) {
    endLog = " AND Log.LOGTIME <= '"+moment.unix(+queryLogEnd).format('YYYY-MM-DD HH:mm:ss')+"'";
  }
  query += `${startLog} ${endLog} ORDER BY Log.LOGTIME ASC`;

  if (queryLimit) {
    query += ` LIMIT ${queryLimit}`;
    if (queryOffset) {
      query += ` OFFSET ${queryOffset}`;
    }
  }
  let sql = connectToMySQL();
  sql.query(query, (error, response) => {
    if (error) {
      res.status(400).json({message: error});
      sql.end();
    } else {
      res.status(200).json(response);
      sql.end();
    }
  });
});

router.get('/:USERID/log', (req, res, next) => {
  const userId = req.params.USERID || '';
  const queryLogStart = req.query.START || '';
  const queryLogEnd = req.query.END || '';
  const queryLimit = req.query.LIMIT || '';
  const queryOffset = req.query.OFFSET || '';

  let query = 'SELECT log.ID, log.LOGTIME as TIME, log.DEVHINT, log.EMPHINT, '+
      'ord(substr(log.logdata,5,1)) as USERACTION, '+
      'IF (ord(substr(log.logdata,5,1)) = 1, "ВЫХОД", IF (ord(substr(log.logdata,5,1)) = 2, "ВХОД", "НЕОПРЕДЕЛЕНО")) as ACTION,'+
      'person.ID, person.TABID, person.name As NAME, person.pos As pos, device.id as DEVICEID, device.name As DEVICENAME '+
      'FROM `tc-db-Log`.logs As Log inner Join `tc-db-main`.personal As person On Log.EMPHINT = person.ID '+
      'inner Join `tc-db-main`.devices As device On Log.devHINT = device.ID '+
      'WHERE substr(logdata,1,2)=0xFE06';
  let startLog = "";
  if (queryLogStart) {
    startLog = " AND Log.LOGTIME >= '"+moment.unix(+queryLogStart).format('YYYY-MM-DD HH:mm:ss')+"'";
  }
  let endLog = "";
  if (queryLogEnd) {
    endLog = " AND Log.LOGTIME <= '"+moment.unix(+queryLogEnd).format('YYYY-MM-DD HH:mm:ss')+"'";
  }
  query += `${startLog} ${endLog} ORDER BY Log.LOGTIME ASC`;

  if (queryLimit) {
    query += ` LIMIT ${queryLimit}`;
    if (queryOffset) {
      query += ` OFFSET ${queryOffset}`;
    }
  }
  let sql = connectToMySQL();
  sql.query(query, (error, response) => {
    if (error) {
      res.status(400).json({message: error});
      sql.end();
    } else {
      res.status(200).json(response);
      sql.end();
    }
  });
});

function connectToMySQL() {
  let mysql = require('mysql');
  var sql = mysql.createConnection({
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