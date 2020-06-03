var navegarModule = require("../module/navegar");
var minecraftModule = require("../module/minecraft");
var lolModule = require("../module/lol");
var ayudaModule = require("../module/ayuda");

exports.modules = (cmd, argumentos, bot) => {
    console.log("------- Seleccionando modulo -------")  //Traza de la clase modulo
    console.log("Modulo Recibido. -> " + cmd);  //traza de comando recibido


    let existModule = false;     //variable que almacena si existe o no el modulo
    let selectedModule = "";    //variable que almacena el modulo seleccionado
    modulos.forEach(modul => {

        if (modul.prefijo == cmd) {
            console.log("Nombre encontrado -> " + modul.nombre); //traza del nombre del modulo que encontro por el comando
            selectedModule = modul.nombre; //almacenando el modulo en la variable
            let comando; //variable que almacenara el comando
            let subArguments;
            comando = argumentos.split(" ")[0]; //determinando que el comando es la primera palabra antes del primer espacio
            subArguments = argumentos.split(" ").splice(1).join(" "); //determinando que los argumentos son lo que sigue despues del primer espacio
            console.log(argumentos);
            modul.funcion(comando,subArguments, bot); // invocando la funcion del modulo seleccionado
            existModule = true; //determinando que el modulo si existe
        }
    });

    if (!existModule) {     //en caso de que el modulo no exista
        console.log("el modulo no existe!")     //traza de mensaje que indica que el modulo no existe
    }
}

const modulos = [
    {
        "nombre": "Ayuda v1.0",
        "prefijo": "ayuda",
        "funcion": ayudaModule.modulo.select
    },
    {
        "nombre": "minecraft",
        "prefijo": "m",
        "funcion": minecraftModule.modulo.select
    },
    {
        "nombre": "lol",
        "prefijo": "lol",
        "funcion": lolModule.modulo.select
    }

,
    {
        "nombre": "navegar",
        "prefijo": "nav",
        "funcion": navegarModule.modulo.select
    }
];