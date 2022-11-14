
const mongoose = require('mongoose');

const productosSchema = mongoose.Schema({

    description:{
        type: String,
        required : true
    },
    item:{
        type: Number,
        required: true
    },
    name : {
        type: String,
        required:true
    }, 
    price:{
        type: Number,
        required:true
    },
    stock:{
        type: Number,
        required:true
    }
});

module.exports = mongoose.model("productos",productosSchema);