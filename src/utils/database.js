
const {Sequelize} = require('sequelize')

const config = require('../../config')

const db = new Sequelize(config.db.development)



//? conexion con base de datos

module.exports = db