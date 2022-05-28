const res = require("express/lib/response");

exports.proyectosHome = (request, response) => { 
    response.render('index', {
        nombrePagina : 'Proyectos'
    });
}

exports.formularioProyecto = (request, response) => { 
    response.render('nuevoProyecto', {
        nombrePagina : 'Nuevo Proyecto'
    });
}

exports.nuevoProyecto = (request, response) => { 
    // Enviar a la consola lo que el usuario escriba
    //console.log(request.body);

    // validar que tengamos algo en el input
    const { nombre } = req.body;

    let errores = [];

    if(!nombre) {
        errores.push({'texto': 'Agrega un Nombre al Proyecto'});
    }

    // si hay errores 
    if(errores.length > 0){ 
        response.render('nuevoProyecto', {
            nombrePagina : 'Nuevo Proyecto', 
            errores
        })
    }else{
        // Insertar en la BD
    }
}