const axios = require('axios');
var shell = require('shelljs');


exports.modulo = {


    select: (comando, subArguments, bot) => {

        console.log("------MINECRAFT MODULE------");
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

var funciones = [
    {
        nombre: "esta funcion dice el status del server",
        comando: "status",
        funcion: (argumentos, bot) => {
            let res = "";
            axios.get('http://3.17.39.131:25565')
                .then(function (response) {
                    // handle success
                    //console.log(response);
                    res = response;
                })
                .catch(function (error) {
                    // handle error
                    //console.log(error);
                    res = error;

                })
                .finally(function () {
                    console.log("RESPUESTA")
                    console.log(res.code)
                    res = res.code;
                    bot.bot.sendMessage({
                        to: bot.channelID,
                        message: res == "ECONNREFUSED" ? "DOWN" : "UP"
                    });
                });
        }
    },

    {
        nombre: "esta funcion sube el server",
        comando: "subir",
        funcion: (argumentos, bot) => {
            shell.exec("nohup /root/jdk1.8.0_231/bin/java -jar -Xmx1024M -Xms1024M  server.jar nogui &", function (code, stdout, stderr) {
                console.log('Exit code:', code);
                console.log('Program output:', stdout);
                console.log('Program stderr:', stderr);

                bot.bot.sendMessage({
                    to: bot.channelID,
                    message: code == 1 ? stderr : stdout
                });

            });
        }
    },

    {
        nombre: "esta funcion baja el server",
        comando: "bajar",
        funcion: (argumentos, bot) => {
            shell.exec("pkill java", function (code, stdout, stderr) {
                console.log('Exit code:', code);
                console.log('Program output:', stdout);
                console.log('Program stderr:', stderr);

                bot.bot.sendMessage({
                    to: bot.channelID,
                    message: code == 1 ? stderr : stdout
                });

            });

        }
    },


]
