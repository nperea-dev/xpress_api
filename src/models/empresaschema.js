
const mongoose = require('mongoose');

const empresaSchema = mongoose.Schema({

    nombre:{
        type: String,
        required : true
    },
    codigo:{
        type: Number,
        required: true
    },
    correo : {
        type: String,
        required:true
    }, 
    direccion:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model("Empresa",empresaSchema);