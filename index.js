const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
const empresaRoutes = require('./src/routes/empresa');
const produtosRoutes = require('./src/routes/productos')

require('dotenv').config();


const app = express();
// nos permite volarnos la politica de seguridad cors
app.use(cors())

//Express configurado para json
app.use(express.json());
//Definimos las rutas de empresa
app.use(empresaRoutes);
app.use(produtosRoutes)
//Root por default responde a localhost:port
app.get("/",(req,res) => {
    res.send("Servidor Node js inicializado V2.0.")
});


mongoose.connect(process.env.mongoDbConection)
.then(()=> {
    console.log("Conectado a mongoDB")
}).catch((error) => {
    console.log("Error conectado e mongo DB" + error);
})

app.listen(process.env.PORT || 4000,() => { console.log("Server is listening")})
