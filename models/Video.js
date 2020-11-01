// Importar los modulos requeridos
const mongoose = require("mongoose");

// Definicion del shema
const videoSchema = new mongoose.Schema({
    url: {
        type : String,
        unique: true,
        trim: true,
        required: true
    },
    nombreVideo: {
        type: String,
        required: true,
        trim: false
    },
    descripcion: {
        type: String,
        require: true
    }      
});

module.exports = mongoose.model("Videos", videoSchema);