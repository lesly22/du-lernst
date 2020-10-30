// Importar los modulos requeridos
const mongoose = require("mongoose");

// Definicion del shema
const usuarioSchema = new mongoose.Schema({
    categoriaDescripcion: {
        type : String,
        unique: true,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model("Categoria", usuarioSchema);