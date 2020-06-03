const discord = require('../discord/discord');
const auth = require('../configuration/token');
const modules = require('./modules');
const bot = discord.bot();


exports.start = () =>{
    console.log("Started!");
    console.log("\n");

    bot.on('ready', (evt)=>{

    });

    bot.on('message', (message) => {
        //console.log("Mensaje Recibido ->"+message);
        
        let botObject = {message,bot}; //objeto bot para su uso en modulos
        let comando; //variable que contendra el comando
        let argumentos; //variable que contendra los argumentos
        let auxMsg; //variable utilizada para realizar la separacion del mensaje completo (auxiliar)
        if (message.content.substring(0, 1) == '!') { //determinando si el mensaje enviado tiene presente un "!" al inicio
            auxMsg = message.content.split(" ");  //al ser asi separar todo el mensaje por espacios
            comando = auxMsg[0].substring(1,auxMsg[0].length); //el comando es igual a la palabra despues "!" y antes del primer espacio
            argumentos = auxMsg.splice(1).join(" ");// argumentos son lo que sigue despues del primer espacio
            console.log("Comando Recibido. ->"+comando); //imprimiendo el comando
            console.log("Argumentos Recibidos. ->"+argumentos); //imprimiendo los argumentos
            
            modules.modules(comando,argumentos,botObject); //enviar los argumentos el comando y el bot hacia los modulos par realizar la accion solicitada
        }
        
    });

    

}
