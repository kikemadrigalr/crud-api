//requerir modulos
const morgan = require('morgan');
const bodyParser = require('body-parser');

//configuracion de servidor con express
const express = require('express');
const app = express();

const productsRoutes = require('./routes/products');

//settings
app.set('json spaces', 4); //formatear json

//midleware
app.use(morgan('dev')); //entorno desarrollo
app.use(bodyParser.json()); //recibir informacion que se envia en formato json
app.use(bodyParser.urlencoded({extended: false})); //recibir informacion de que se envia en formularios

//rutas
app.use('/products', productsRoutes);

//static files

//star server

app.listen(3000, () => {
    console.log('server on port 3000');
});