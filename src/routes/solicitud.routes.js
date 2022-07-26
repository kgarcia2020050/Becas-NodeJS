const express = require("express");
const controller = require("../controllers/solicitud.controller");
var api = express.Router();
const autenticacion = require("../middleware/autenticacion");

api.get("/verSolicitud/:ID", autenticacion, controller.verSolicitud);
api.get("/solicitantes/:ID", autenticacion.Auth, controller.solicitantes);
api.post("/enviar/:ID/:Beca", autenticacion.Auth, controller.enviarSolicitud);
api.put("/aprobar/:ID/:Beca", autenticacion.Auth, controller.aprobarSolicitud);
api.put("/denegar/:ID", autenticacion.Auth, controller.denegarSolicitud);

module.exports = api;
