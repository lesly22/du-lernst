// Modulos requeridos
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

// Configuracion a mongoose
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Iniciar la conexion al servidor cloud mongo
mongoose.connection,on("error", error => {
    console.log(error);
});