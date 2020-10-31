// Importar los modulos requeridos para el funcionamiento del servidor
const express = require("express");
require("./config/db");
const exphbs = require("express-handlebars");
const router = require("./routes/index");

// Habilitar el archivo de variables de entorno
require("dotenv").config({ path: ".env" });

// Crear un servidor express
const app = express();

// Indicar a express utilizar handlebars como template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");

// Habilitar body parse para leer los datos del cuerpo de peticiones POST
//app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
    res.render("home");
  });

// Implementar nuestero router
app.use("/",router());

// Inicializar el servidor en un puerto en específico
app.listen(process.env.PORT);

//
