const express = require("express");
const app = express();
const db = require("./utils/database");

const postRouter = require("./posts/posts.router");

app.use(express.json());

require("dotenv").config();

//? --> Mostrar en consola de manera informativa si la conexion es exitosa con las tablas

db.authenticate()
    .then(() => {
        console.log("La base de datos se actualizo en tablas");
    })
    .catch((err) => {
        console.log(err); //-> Error en autenticacion(contraseñas, usuarios u hosts)
    });

//? --> Sincroniza la base de datos con los modelos que tenemos definidos(tablas en dbdiagram)

db.sync()
    .then(() => {
        console.log("La base de datos se sincronizo en tablas correctamente");
    })
    .catch((err) => {
        console.log(err); //-> Error en tablas, propiedades, etc
    });

//? Ruta raiz desde app.get

app.get("/", (req, res) => {
    res.json({
        message: "Server ok :D!",
        password: process.env.MY_PASSWORD,
    });
});

//? Rutas de posts

app.use("/api/v1", postRouter);

app.listen(8000, () => {
    console.log("Server started at port 8000");
});

module.exports = app;
