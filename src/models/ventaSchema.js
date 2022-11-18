const mongoose = require('mongoose');

const ventaSchema = mongoose.Schema({

    producto:{
        type: String,
        required : true
    },
    cantidad:{
        type: Number,
        required: true
    },
    valor: {
        type: Number,
        required:true
    }, 

});

module.exports = mongoose.model("Venta",ventaSchema)