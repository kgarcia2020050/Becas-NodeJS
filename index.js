const mongoose = require("mongoose");
const app = require("./app");

const Admin = require("./src/controllers/inicio.controller");

const api = require("express")();
const http = require("http").Server(api);
const io = require("socket.io")(http);

const mensajes = [];

io.on("connection", function (socket) {
  socket.on("enviar", function (dato) {
    mensajes.push(dato);
    socket.emit("enviar-mensaje", mensajes);
    socket.broadcast.emit("enviar-mensaje", mensajes);
  });
});

http.listen(3030, () => {
  console.log("chat");
});

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/Becas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Se encuentra conectado a la base de datos.");

    app.listen(3000, function () {
      console.log("Hola IN6BM, esta corriendo en el puerto 3000");
    });
  })
  .catch((error) => console.log(error));

Admin.crearAdmin();
