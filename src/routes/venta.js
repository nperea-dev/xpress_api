const express = require('express');
const ventaSchema = require('../models/ventaSchema');

const router = express.Router();

//Obtener las ventas
router.get('/venta/select',(req,res)=> {
    ventaSchema.find().then((data) => {
       res.json(data)
    }).catch((error) => {
       res.json(error)
    })
})


//Crear una venta
router.post('/venta/create',(req,res) => {
    const nuevaVenta = req.body;
    const ventaDB = ventaSchema(nuevaVenta);
    ventaDB.save().then((data) => {
        res.json(data)
    }).catch((error) => {
        console.log("Error guardando la venta" + error);
        res.json(error);
    })
})


//Obtener las ventas por ID
router.get('/venta/selectbyid/:id',(req,res)=> {
    let { id } = req.params;
    ventaSchema.findById(id).then((data) => {
       res.json(data)
    }).catch((error) => {
       res.json(error)
    })
})

//Actualizar los datos de una venta
router.put('/venta/update/:id',(req,res) => {
    let { id } = req.params;
    const { producto, cantidad, valor  } = req.body;

    ventaSchema.updateOne({id : id}, { $set:{  producto, cantidad, valor } }).then((data) => {
        res.json(data);
    }).catch((error) => {
        res.json(error);
    })
})

//Eliminar venta
router.delete('/venta/delete/:id',(req,res)=> {
    let { id } = req.params;
    console.log(id);
    ventaSchema.remove({_id : id}).then((data) => {
        res.json(data);
    }).catch((error) => {
        res.json(error);
    })
})








module.exports = router;