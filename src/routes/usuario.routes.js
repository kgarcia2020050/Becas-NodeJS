const express = require("express");
const controller = require("../controllers/usuario.controller");
var api = express.Router();
const autenticacion = require("../middleware/autenticacion");

api.get("/usuarioId/:ID", autenticacion.Auth, controller.usuarioId);
api.get("/nuevaEmpresa", autenticacion.Auth, controller.nuevaEmpresa);
api.put("/editarPerfil/:ID", autenticacion.Auth, controller.editarPerfil);
api.delete("/borrarPerfil/:ID", autenticacion.Auth, controller.borrarPerfil);

module.exports = api;
