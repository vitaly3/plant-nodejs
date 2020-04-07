'user strict';
import { sqlConfig, sqlInit, sql } from '@frangiskos/mssql';
//var mssql = require('@frangiskos/mssql');


const sqlConfig = {
    host     : '192.168.7.97',
    port     : '1433',
    user     : 'asu_su',
    password : 'asu_su1',
    database : 'CNCMachine'
};

try {
    sqlInit(sqlConfig);
}
catch (error) {
    console.error(error);
}


module.exports = sql;