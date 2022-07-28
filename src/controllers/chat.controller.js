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
