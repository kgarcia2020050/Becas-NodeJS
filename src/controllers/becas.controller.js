const Becas = require("../models/beca.model");

function nuevaBeca(req, res) {
  var datos = req.body;
  Becas.create(
    {
      nombre: datos.nombre,
      descripcion: datos.descripcion,
      requisitos: datos.requisitos,
      vacantes: datos.vacantes,
      idCreador: req.params.ID,
    },
    (error, becaCreada) => {
      if (error)
        return res.status(500).send({ Error: "Error al crear la beca." });
      return res.status(200).send({ Beca_creada: becaCreada });
    }
  );
}

function becaId(req, res) {
  Becas.findById({ _id: req.params.ID }, (error, becaEncontrada) => {
    if (error)
      return res.status(500).send({ Error: "Error al procesar la peticion." });
    return res.status(200).send({ Beca_encontrada: becaEncontrada });
  });
}

function editarBeca(req, res) {
  var datos = req.body;
  Becas.findByIdAndUpdate(
    { _id: req.params.ID },
    datos,
    { new: true },
    (error, becaEditada) => {
      if (error)
        return res
          .status(500)
          .send({ Error: "Error al procesar la peticion." });
      return res.status(200).send({ Beca_editada: becaEditada });
    }
  );
}

function borrarBeca(req, res) {
  Becas.findByIdAndRemove({ _id: req.params.ID }, (error, becaBorrada) => {
    if (error)
      return res.status(500).send({ Error: "Error al procesar la peticion." });
    return res.status(200).send({ Beca_borrada: becaBorrada });
  });
}

function verBecas(req, res) {
  Becas.find((error, becas) => {
    if (error)
      return res.status(500).send({ Error: "Error al procesar la peticion." });
    return res.status(200).send({ Becas: becas });
  });
}

function becasEmpresa(req, res) {
  Becas.find({ idCreador: req.params.ID }, (error, becasEncontradas) => {
    if (error)
      return res.status(500).send({ Error: "Error al procesar la peticion." });
    return res.status(200).send({ BecasEncontradas: becasEncontradas });
  });
}

module.exports = {
  nuevaBeca,
  becaId,
  editarBeca,
  borrarBeca,
  verBecas,
  becasEmpresa,
};
