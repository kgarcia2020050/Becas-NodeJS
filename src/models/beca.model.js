const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Becas = Schema({
  nombre: String,
  descripcion: String,
  requisitos: String, 
  idCreador: { type: Schema.Types.ObjectId, ref: "Usuarios" },
});

module.exports = mongoose.model("Becas", Becas);
