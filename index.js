const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

// Crear una app de express
const app = express();

// Donde cargar lar archivos estaticos
app.use(express.static('public'));

// Habilitar Pug
app.set('view engine', 'pug');

// Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

//Habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({extend: true}));

app.use('/', routes());

app.listen(3000);