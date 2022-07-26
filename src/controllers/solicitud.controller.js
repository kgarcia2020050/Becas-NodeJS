const Solicitudes = require("../models/solicitud.model");
const Usuarios = require("../models/usuario.model");

const Becas = require("../models/beca.model");

function enviarSolicitud(req, res) {
  const datos = req.body;
  Usuarios.findById({ _id: req.params.ID }, (error, usuarioEncontrado) => {
    if (error)
      return res.status(500).send({ Error: "No se enconro al usuario." });
    Becas.findById({ _id: req.params.Beca }, (error, becaEncontrada) => {
      if (error)
        return res.status(500).send({ Error: "No se encontro la beca." });
      Solicitudes.create(
        {
          idUsuario: usuarioEncontrado._id,
          nombreUsuario: usuarioEncontrado.nombre,
          apellidoUsuario: usuarioEncontrado.apellido,
          emailUsuario: usuarioEncontrado.email,
          edadUsuario: datos.edad,
          infoMama: datos.infoMama,
          infoPapa: datos.infoPapa,
          infoColegio: datos.infoColegio,
          cartaRecomendacion: datos.cartaRecomendacion,
          diplomas: datos.diplomas,
          calificaciones: datos.calificaciones,
          nombreBeca: becaEncontrada.nombre,
          fotografia: datos.fotografia,
          idBeca: becaEncontrada._id,
          idCreadorBeca: becaEncontrada.idCreador,
          aprobado: null,
          estado: "Pendiente",
        },
        (error, solicitudEnviada) => {
          if (error)
            return res
              .status(500)
              .send({ Error: "No se pudo enviar la solicitud." });
          return res.status(200).send({ SolicitudEnviada: solicitudEnviada });
        }
      );
    });
  });
}

function aprobarSolicitud(req, res) {+
  
  Solicitudes.findById({ _id: req.params.ID }, (error, solicitudEncontrada) => {
    if (error)
      return res.status(500).send({ Error: "No se encontro la solicitud." });
    solicitudEncontrada.aprobado = true;
    solicitudEncontrada.estado = "Aprobada";
    solicitudEncontrada.save((error, solicitudAprobada) => {
      if (error)
        return res
          .status(500)
          .send({ Error: "No se pudo aprobar la solicitud." });
      Becas.findByIdAndUpdate(
        { _id: req.params.Beca },
        { $inc: { vacantes: 1 * -1 } },
        { new: true },
        (error, becaEditada) => {
          if (error)
            return res
              .status(500)
              .send({ Error: "No se pudo editar la beca." });
          return res.status(200).send({ SolicitudAprobada: solicitudAprobada });
        }
      );
    });
  });
}

function denegarSolicitud(req, res) {
  Solicitudes.findById({ _id: req.params.ID }, (error, solicitudEncontrada) => {
    if (error)
      return res.status(500).send({ Error: "No se encontro la solicitud." });
    solicitudEncontrada.aprobado = false;
    solicitudEncontrada.estado = "Denegada";
    solicitudEncontrada.save((error, solicitudDenegada) => {
      if (error)
        return res
          .status(500)
          .send({ Error: "No se pudo denegar la solicitud." });
      return res.status(200).send({ SolicitudDenegada: solicitudDenegada });
    });
  });
}

function solicitantes(req, res) {
  Solicitudes.find(
    { idCreadorBeca: req.params.ID },
    (error, solicitudesEncontradas) => {
      if (error)
        return res.status(500).send({ Error: "No se encontro la solicitud." });
      return res.status(200).send({ Solicitudes: solicitudesEncontradas });
    }
  );
}

function verSolicitud(req, res) {
  Solicitudes.findById({ _id: req.params.ID }, (error, solicitudEncontrada) => {
    if (error)
      return res.status(500).send({ Error: "No se encontro la solicitud." });
    return res.status(200).send({ Solicitud: solicitudEncontrada });
  });
}

module.exports = {
  enviarSolicitud,
  aprobarSolicitud,
  denegarSolicitud,
  solicitantes,
  verSolicitud,
};
