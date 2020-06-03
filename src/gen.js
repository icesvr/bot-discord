const fs = require('fs');
const files = require("./utils/files");
var nombre = process.argv[2] || "sin comando";
var prefijo = process.argv[3] || "sin comando";
/*let nombre = prompt("Ingrese nombre del modulo");
let prefijo = prompt("Ingrese nombre del prefijo");*/
var content =
    `require("../utils/tracer");
console.log("------${nombre} MODULE------");
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
`;




fs.writeFile('./module/'+nombre+'.js', content, (err) => {
    if (err) throw err;
    files.addModule(nombre,prefijo);

    console.log('Generated '+'./module/'+nombre+'.js');
});

