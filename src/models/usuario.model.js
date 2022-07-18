const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Usuarios = Schema({
  nombre: String,
  apellido: String,
  genero: String,
  email: String,
  telefono:String,
  password: String,
  rol: String,
});

module.exports = mongoose.model("Usuarios", Usuarios);
