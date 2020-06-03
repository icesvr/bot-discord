const Discord = require('discord.js');
const auth = require('../configuration/token');


exports.bot = ()=>{
    let bot = new Discord.Client()
    console.log("pulona");
    bot.login(auth.token);
    
    return bot;
}
