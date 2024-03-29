const mongoose = require("mongoose");
const app = require("./app");

const Admin = require("./src/controllers/inicio.controller");



mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb+srv://takeru:12345@cluster0.ppw9e.mongodb.net/Becas?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    const port = process.env.PORT;

    app.listen(port || 3030, function () {
      return console.log("Corriendo en el puerto " + port);
    });
  })
  .catch((error) => console.log(error));

app.get("/", function (req, res) {
  return res.status(200).send("Aplicacion corriendo.");
});

Admin.crearAdmin();
