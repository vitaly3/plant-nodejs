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
