const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')
const mssql = require("mssql");

module.exports.getAll = async function(req, res) {
  try {
    const connect = await mssql.connect(keys.msSQLConfig)
    const cnc = await connect.query(`select * from cnc`)
    res.status(200).json(cnc.recordsets[0]);
    mssql.close();
  } catch (e) {
    errorHandler(res, e)
    mssql.close();
  }
}

module.exports.getCncByDepartmentId = function(req, res) {
  new mssql.ConnectionPool(keys.msSQLConfig).connect().then(
    pool => {
      return pool.request().query(`select * from cnc where department_id = ${req.params.id}`)
    })
    .then(result => {
      let cnc = result.recordsets[0]
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.status(200).json(cnc);
      mssql.close();
    })
    .catch(err => {
      errorHandler(res, err)
      mssql.close();
    });
}

module.exports.getDepartmentAll = function(req, res) {
  new mssql.ConnectionPool(keys.msSQLConfig).connect().then(
    pool => {
      return pool.request().query(`SELECT DISTINCT department_name, department_id FROM cnc order by department_name`)
    })
    .then(result => {
      console.log(result);
      let cnc = result.recordsets[0]
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.status(200).json(cnc);
      mssql.close();
    })
    .catch(err => {
      errorHandler(res, err)
      mssql.close();
    });
}