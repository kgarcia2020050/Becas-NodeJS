const Usuarios = require("../models/usuario.model");
const encriptar = require("bcrypt-nodejs");

function nuevaEmpresa(req, res) {
  var datos = req.body;

  encriptar.hash(datos.password, null, null, (error, claveEncriptada) => {
    Usuarios.create(
      {
        nombre: datos.nombre,
        email: datos.email,
        password: claveEncriptada,
        telefono: datos.telefono,
        rol: "EMPRESA",
      },
      (error, nuevaEmpresa) => {
        if (error)
          return res
            .status(500)
            .send({ Error: "Error al crear a la empresa." });
        return res.status(200).send({ Nueva_empresa: nuevaEmpresa });
      }
    );
  });
}

function usuarioId(req, res) {
  Usuarios.findById({ _id: req.params.ID }, (error, usuarioEncontrado) => {
    if (error)
      return res.status(500).send({ Error: "Error al procesar la peticion." });
    return res.status(200).send({ Usuario_encontrado: usuarioEncontrado });
  });
}

function editarPerfil(req, res) {
  var datos = req.body;
  Usuarios.findByIdAndUpdate(
    { _id: req.params.ID },
    datos,
    { new: true },
    (error, usuarioEditado) => {
      if (error)
        return res
          .status(500)
          .send({ Error: "Error al procesar la peticion." });
      return res.status(200).send({ Perfil_editado: usuarioEditado });
    }
  );
}

function borrarPerfil(req, res) {
  Usuarios.findByIdAndDelete(
    { _id: req.params.ID },
    (error, usuarioBorrado) => {
      if (error)
        return res
          .status(500)
          .send({ Error: "Error al procesar la peticion." });
      return res.status(200).send({ Usuario_borrado: usuarioBorrado });
    }
  );
}

function usuariosRegistrado(req, res) {
  Usuarios.find({ rol: "USUARIO" }, (error, usuariosRegistrados) => {
    if (error)
      return res.status(500).send({ Error: "Error al procesar la peticion." });
    return res.status(200).send({ Usuarios_registrados: usuariosRegistrados });
  });
}

function empresasRegistradas(req, res) {
  Usuarios.find({ rol: "EMPRESA" }, (error, empresasRegistradas) => {
    if (error)
      return res.status(500).send({ Error: "Error al procesar la peticion." });
    return res.status(200).send({ Empresas_registradas: empresasRegistradas });
  });
}

module.exports = {
  nuevaEmpresa,
  usuarioId,
  editarPerfil,
  borrarPerfil,
  usuariosRegistrado,
  empresasRegistradas,
};
