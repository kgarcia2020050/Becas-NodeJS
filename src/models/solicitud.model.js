const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Solicitudes = Schema({
  idUsuario: { type: Schema.Types.ObjectId, ref: "Usuarios" },
  idBeca: { type: Schema.Types.ObjectId, ref: "Becas" },
  idCreadorBeca: { type: Schema.Types.ObjectId, ref: "Usuarios" },
  aprobado: Boolean,
});

module.exports = mongoose.model("Solicitudes", Solicitudes);
