require("../utils/tracer");
console.log("------navegar MODULE------");
exports.modulo = {

    select: (comando, subArguments, bot) => {
        moduleTrace(comando, subArguments)

        funciones.forEach(cmd => {
            if (cmd.comando == comando) {
                cmd.funcion(subArguments, bot)
            }
        })
    }
}

var funciones = [
    {
        nombre: "Hola mundo",
        descripcion: "tu descripcion aqui",
        comando: "hola",
        funcion: (argumentos, bot) => {
            bot.message.channel.send("HOLA MUNDO")
        }
    }
];
