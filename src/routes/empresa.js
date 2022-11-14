const express = require('express');
const empresaSchema = require('../models/empresaschema');
const productosSchema = require('../models/productosSchema');



const router = express.Router();

//Obtener las empresas
router.get('/empresas/select',(req,res)=> {
    empresaSchema.find().then((data) => {
       res.json(data)
    }).catch((error) => {
       res.json(error)
    })
})


//Crear una empresa
router.post('/empresa/create',(req,res) => {
    const nuevaEmpresa = req.body;
    const empresaDB = empresaSchema(nuevaEmpresa);
    empresaDB.save().then((data) => {
        res.json(data)
    }).catch((error) => {
        console.log("Error guardando la empresa" + error);
        res.json(error);
    })
})


//Obtener las empresas
router.get('/empresas/selectbyid/:id',(req,res)=> {
    let { id } = req.params;
    empresaSchema.findById(id).then((data) => {
       res.json(data)
    }).catch((error) => {
       res.json(error)
    })
})

//Actualizar los datos de una empresa
router.put('/empresas/update/:id',(req,res) => {
    let { id } = req.params;
    const { nombre, codigo, correo, direccion  } = req.body;

    empresaSchema.updateOne({_id : id}, { $set:{  nombre, codigo, correo, direccion } }).then((data) => {
        res.json(data);
    }).catch((error) => {
        res.json(error);
    })
})

//Eliminar empresa
router.delete('/empresas/delete/:id',(req,res)=> {
    let { id } = req.params;
    console.log(id);
    empresaSchema.remove({_id : id}).then((data) => {
        res.json(data);
    }).catch((error) => {
        res.json(error);
    })
})








module.exports = router;