const Sequelize = require('sequelize') 

module.exports = new Sequelize("mason_meals2021", "TeamEndGame1", "IT390Fall2021", {
    host: "mason-meals-backend.ctmcbx2luzlu.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
  
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  });