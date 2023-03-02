//? DEFINIR TODAS LAS CONFIGURACIONES Y VARIBALES DE ENTORNO

require('dotenv').config() //--> acceder a variables de entorno

const configs = {
    api: {

        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT, 
        host: process.env.HOST

    },

    db: {
        development: {
            dialect: 'postgres',
            host: 'localhost',
            username: 'postgres',
            password: 'root',
            database: 'post-db',
            define: {
                timestamps: true,  //---> Va a utilizar por defecto el created_at y update_at(moficaciones en fechas, tiempos, ejm: chat de mensajes)
                underscored: true,  //---> Va a modificar de calmeCase (js) a snake_case (db)
                underscoredAll: true
            }
        },

        test: {

        },
        production: {

        }

    }

}

module.exports = configs