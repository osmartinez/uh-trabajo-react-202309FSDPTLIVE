const express = require("express")
const mongoose = require("mongoose")


const app = express()

mongoose.connect("mongodb+srv://itsosmartinez:Bl3IzDUd3qMAmj67@cluster0.fabyljk.mongodb.net/peliculas")
.then(()=>{
    console.log(`Conexion con base de datos exitosa`)
})
.catch((err)=>{
    console.log(`Error al conectar con la base de datos: ${err}`)
})

app.listen(3000, ()=>{
    console.log(`API funcionado... en puerto 3000`)
})