const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express')
const app = express()
const handlebars = require('express-handlebars');


// Importar rutas

//------------handlebars o EJS  
app.engine(
    "hbs", 
    handlebars({
        extname: ".hbs",
        defaultLayout: 'index.hbs',
    })
);

app.set("view engine", "hbs");
app.set("views", "./views");

//------- Middlewares

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());



const PORT = 8080

app.listen(PORT, () => {
    console.log(`Server is Listening on ${PORT}`)
})