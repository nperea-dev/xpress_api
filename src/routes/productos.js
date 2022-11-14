const express = require('express');
const productosSchema = require('../models/productosSchema');

const router = express.Router();

//Obtener las productos
router.get('/productos/select',(req,res)=> {
    productosSchema.find().then((data) => {
        res.json(data)
     }).catch((error) => {
        res.json(error)
     })
})




//Crear producto
router.post('/productos/create',(req,res) => {
    const nuevoProducto = req.body;
    const productoDB = productosSchema(nuevoProducto);
    productoDB.save().then((data) => {
        res.json(data)
    }).catch((error) => {
        console.log("Error guardando productos" + error);
        res.json(error);
    })
})

//Obtener las productos
router.get('/producto/selectbyid/:id',(req,res)=> {
    let { id } = req.params;
    productosSchema.findById(id).then((data) => {
       res.json(data)
    }).catch((error) => {
       res.json(error)
    })
})

//Actualizar productos
router.put('/productos/update/:id',(req,res) => {
    let { id } = req.params;
    const { description, item, name, price, stock  } = req.body;

    productosSchema.updateOne({_id : id}, { $set:{  description, item, name, price, stock } }).then((data) => {
        res.json(data);
    }).catch((error) => {
        res.json(error);
    })
})

//Eliminar empresa
router.delete('/producto/delete/:id',(req,res)=> {
    let { id } = req.params;
    console.log(id);
    productosSchema.remove({_id : id}).then((data) => {
        res.json(data);
    }).catch((error) => {
        res.json(error);
    })
})



module.exports = router;