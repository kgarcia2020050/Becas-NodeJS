const express = require("express");
const cors = require("cors");
var app = express();

const rutasInicio = require("./src/routes/inicio.routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use("/api", rutasInicio);

module.exports = app;
