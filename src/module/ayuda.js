require("../utils/tracer");
console.log("------ayuda MODULE------"); //Traza del modulo

exports.modulo = { //variable que hace referencia a todo el modulo para ser importado

    select: (comando,subArguments, bot) => {

        moduleTrace(comando,subArguments)

        // ESTE MODULO NO POSEE SUB FUNCIONES, AL SER UN MODULO DE UNA FUNCION ACA ESTA SU FUNCIONALIDAD

        bot.message.channel.send("Ayudaaa");


    }
}





