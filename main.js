const Discord = require('discord.js');

let client = new Discord.Client();

let prefix = '/'

client.once('ready', () =>{
    console.log("Color Bot is online");
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)return;

    let args = message.content.slice(prefix.length).split(" ");
    let command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    }
});

client.login('NzQzMjcxNTAyMTg2ODA3Mjk4.XzSPhw.NULECqvAd6EqlfziFUJnwg_uXUQ');