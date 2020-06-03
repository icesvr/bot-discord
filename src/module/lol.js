const axios = require('axios');
const lolController = require('../controllers/lolControllers');




exports.modulo = {


    select: (comando, subArguments, bot) => {

        console.log("------lola MODULE------");
        console.log("Comando recibido-> " + argumentos);
        console.log("Comando-> " + comando);
        console.log("Argumentos-> " + subArguments == "" ? "Sin Argumentos." : subArguments);


        funciones.forEach(cmd => {
            if (cmd.comando == comando) {
                cmd.funcion(subArguments, bot)
            }
        })
    }
}

var funciones = [{
    nombre: "esta funcion dice el resumen de un jugador lol",
    comando: "resumen",
    funcion: async(name, bot) => {
        await lolController.getRank(name, bot);
    }
}]