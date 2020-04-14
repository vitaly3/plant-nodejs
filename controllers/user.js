const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')
const mysql = require('mysql');
const moment = require('moment');

module.exports.getAll = async function(req, res) {
  try {
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
    const sql = await mysql.createConnection(keys.mySQLConfig);
    sql.query(allQuery, (error, response) => {
      if (error) {
        res.status(400).json({message: error});
      } else {
        res.status(200).json(response);
      }
      sql.end();
    });
  } catch (e) {
    errorHandler(res, e)
    sql.end();
  }
}

module.exports.getLogByTabId = async function(req, res) {
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
  try {
    const sql = await mysql.createConnection(keys.mySQLConfig);
    sql.query(query, (error, response) => {
      if (error) {
        res.status(400).json({message: error});
        sql.end();
      } else {
        res.status(200).json(response);
        sql.end();
      }
    });
  } catch (e) {
    errorHandler(res, e)
    sql.end();
  }
}

module.exports.getLogByUserId = async function(req, res) {
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
  
  try {
    const sql = await mysql.createConnection(keys.mySQLConfig);
    sql.query(query, (error, response) => {
      if (error) {
        res.status(400).json({message: error});
        sql.end();
      } else {
        res.status(200).json(response);
        sql.end();
      }
    });
  } catch (e) {
    errorHandler(res, e)
    sql.end();
  }
}

module.exports.getLog = async function(req, res) {
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
  try {
    const sql = await mysql.createConnection(keys.mySQLConfig);
    sql.query(query, (error, response) => {
      if (error) {
        res.status(400).json({message: error});
        sql.end();
      } else {
        res.status(200).json(response);
        sql.end();
      }
    });
  } catch (e) {
    errorHandler(res, e)
    sql.end();
  }
}
