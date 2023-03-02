
//TODO Se tiene que intalar la dependencia de "sequelize" y posterior destructurar el objeto "DataTypes" que contiene tipos de dato de SQL (INTEGER, FLOAT, STRING, etc)

const {DataTypes} = require('sequelize')

const db = require('../utils/database')

// Primer atributo es nombre de tabla y segundo un objeto que contiene los tipos de datos del modelo

//*ESTRUCTURA DE MODELO PARA TABLAS Y RESTRICCIONES:

const Posts = db.define('posts', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
        
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
        

    },
    isPublished: {
        type: DataTypes.BOOLEAN,
        defaultValue: true

    }

})




module.exports = Posts