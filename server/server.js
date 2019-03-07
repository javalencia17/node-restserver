require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

//Habilitar la carpeta public
console.log('public: ', path.resolve( __dirname, '../public'));

//app.use(express.static(path.resolve( __dirname, '../public')));

app.use(express.static(path.resolve(__dirname, './public')));


//Configuracion global de rutas
app.use(require('./routes/index'));




mongoose.connect('mongodb://localhost:27017/cafe',(err,resp) => {

    if(err) throw err;
    console.log("Base de datos online");

});


app.listen(process.env.PORT,() => {
    console.log('Escuchando el puerto ',process.env.PORT);
});

