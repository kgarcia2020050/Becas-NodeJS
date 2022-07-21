const express = require("express");
const controller = require("../controllers/usuario.controller");
var api = express.Router();
const autenticacion = require("../middleware/autenticacion");

api.get("/usuarioId/:ID", autenticacion.Auth, controller.usuarioId);
api.post("/nuevaEmpresa", autenticacion.Auth, controller.nuevaEmpresa);
api.put("/editarPerfil/:ID", autenticacion.Auth, controller.editarPerfil);
api.delete("/borrarPerfil/:ID", autenticacion.Auth, controller.borrarPerfil);
api.get(
  "/usuariosRegistrados",
  autenticacion.Auth,
  controller.usuariosRegistrado
);
api.get(
  "/empresasRegistradas",
  autenticacion.Auth,
  controller.empresasRegistradas
);

module.exports = api;
