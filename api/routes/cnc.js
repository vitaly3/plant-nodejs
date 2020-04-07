const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    var mssql = require("mssql");
    // config for your database
    var config = {
        server   : process.env.PLANT_SERVER,
        port     : +process.env.PLANT_PORT,
        user     : process.env.PLANT_USER,
        password : process.env.PLANT_PASSWORD,
        database : process.env.PLANT_DATABASE
    };

    // connect to your database
    mssql.connect(config, (err) => {
        if (err) console.log(err);
        // create Request object
        var request = new mssql.Request();
        // query to the database and get the records
        request.query('select * from cnc', (err, recordsets) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(recordsets.recordsets[0]);
            }
            mssql.close();
            // send records as a response
        });
    });
})

module.exports = router;