const axios = require('axios');
const auth = require('../configuration/token');

let getRank = async(name, bot) => {
    let options = {
        headers: {
            "X-Riot-Token": auth.token_lol
        }
    }
    let id = await getSummonerId(name);
    axios.get(`https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}`, options).then(result => {

        let message = ` ${result.data[0].tier} ${result.data[0].rank}`;
        bot.message.channel.sendMessage(message);

    }).catch(err => {
        console.log("Error");
    })


}

let getSummonerId = (name, bot) => {
        let options = {
            headers: {
                "X-Riot-Token": auth.token_lol
            }
        }
        return axios.get(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`, options).then(result => {

            return result.data.id;
        }).catch(err => {
            return "Error al encontrar los datos";
        });

    } <<
    <<
    << < HEAD
} ===
===
=

module.exports = { getRank, getSummonerId } >>>
    >>>
    > 26028 b12772f533f837ae8fc10282fa635b4c9ce