const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')


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
  } catch (e) {
    errorHandler(res, e)
   
  }
}



