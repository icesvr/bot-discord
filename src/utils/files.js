const fs = require('fs');

exports.addModule = (nombre,prefijo)=>{

    let modulRquire;
    let modulModel;

    modulRquire = `var ${nombre}Module = require("../module/${nombre}");`;
    modulModel = `,
    {
        "nombre": "${nombre}",
        "prefijo": "${prefijo}",
        "funcion": ${nombre}Module.modulo.select
    }`


    let moduleContent = fs.readFileSync("./handler/modules.js",'utf-8');

    console.log(moduleContent);


    let modulos = "";
    let modulosNuevo = "";
    let variable = "const modulos = ";
    modulos = moduleContent.substring(moduleContent.indexOf(variable)+variable.length,moduleContent.lastIndexOf(";"));
//modulos = JSON.parse(modulos);
    console.log(modulos);
    modulosNuevo = modulos.substring(0,modulos.indexOf("]"));
    modulosNuevo += modulModel;
    modulosNuevo += "\n]";

    modulosNuevo = modulRquire + "\n"+moduleContent.substring(0,moduleContent.indexOf(variable)) +variable+ modulosNuevo+';';
    //console.log(modulosNuevo);
    fs.writeFile("./handler/modules.js",modulosNuevo,(err)=>{});


};/*
let nombre = "andres"
let prefijo = "ad"
*/
