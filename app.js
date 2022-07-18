const express = require("express");
const cors = require("cors");
var app = express();

const rutasInicio = require("./src/routes/inicio.routes");
const rutasUsuario = require("./src/routes/usuario.routes");
const rutasBecas = require("./src/routes/beca.routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use("/api", rutasInicio, rutasUsuario, rutasBecas);

module.exports = app;
