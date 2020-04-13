module.exports = {
  msSQLConfig: {
    server   : process.env.PLANT_SERVER,
    port     : +process.env.PLANT_PORT,
    user     : process.env.PLANT_USER,
    password : process.env.PLANT_PASSWORD,
    database : process.env.PLANT_DATABASE
  },
  mySQLConfig: {
    host     : process.env.SKUD_HOST,
    port     : process.env.SKUD_PORT,
    user     : process.env.SKUD_USER,
    password : process.env.SKUD_PASSWORD
  }
}