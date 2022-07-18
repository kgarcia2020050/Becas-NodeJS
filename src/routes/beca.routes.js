const express = require("express");
const controller = require("../controllers/becas.controller");
var api = express.Router();
const autenticacion=require("../middleware/autenticacion")

api.post("/nuevaBeca/:ID",autenticacion.Auth,controller.nuevaBeca)
api.get("/becaId/:ID",autenticacion.Auth,controller.becaId)
api.put("/editarBeca/:ID",autenticacion.Auth,controller.editarBeca)
api.delete("/borrarBeca/:ID",autenticacion.Auth,controller.borrarBeca)

module.exports=api