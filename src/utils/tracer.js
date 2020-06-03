global.moduleTrace = (comando,subArguments)=>{
    console.log(comando != '' ? "Comando-> " + comando : ''); //traza del comando
    console.log(comando != '' ? "Argumentos-> " + (subArguments === "" ? "Sin Argumentos." : subArguments):''); //traza de los argumentos en caso de que haya
};
