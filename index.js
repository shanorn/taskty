const express = require('express');

// Crear una app de express
const app = express();

// Ruta para el home
app.use('/', (request, response) => {
    response.send("Hola Mundo");
});


app.listen(3000);