const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Solicitudes = Schema({
  idUsuario: { type: Schema.Types.ObjectId, ref: "Usuarios" },
  nombreUsuario: String,
  apellidoUsuario: String,
  emailUsuario: String,
  infoMama: String,
  infoPapa: String,
  infoColegio: String,
  diplomas: String,
  calificaciones: String,
  fotografia: String,
  idBeca: { type: Schema.Types.ObjectId, ref: "Becas" },
  nombreBeca: String,
  idCreadorBeca: { type: Schema.Types.ObjectId, ref: "Usuarios" },
  aprobado: Boolean,
  estado: String,
});

module.exports = mongoose.model("Solicitudes", Solicitudes);
