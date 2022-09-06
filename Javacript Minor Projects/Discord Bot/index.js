const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const bad = ["mq","amq","orospu çocuğu","siktir","hass","göt","başlarım ha","sik"]

const fix = ["Şiiit Kardeeeş Sakiiin oool!", 
"Bro küfür etmesen aile var burda", 
"Aslanım azına sahip çık",
"Bizim mıcır olmuş size gıcır. Hadi ordan lan",
"Kabul edilemez davranış tespit edildi imha ediliyor"]

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
})
client.on("messageCreate", (message) => {
  if (message.author.bot) return false; 
  
  console.log(`Message from ${message.author.username}: ${message.content}`);
});

function getQuote(){
    return fetch("https://zenquotes.io/api/random")
    .then(res => {
        return res.json()
    })
    .then(data => {
        return data[0]["q"] + " - " + data[0]["a"]
    })
};

client.on("messageCreate", (message) =>{
    if(message.author.bot) return ;

    if (message.content === "İLHAAM"){
        getQuote().then(quote => message.channel.send(quote))
    }
    if(bad.some(word => message.content.includes(word))){
        const fixIt = fix[Math.floor(Math.random()*fix.length)]
        message.reply(fixIt)
    }
})



client.login("OTExNjcwNjk0ODk3Njc2Mjk4.YZkxfw.cP41qTSupPmdNpXxQmjycPhhc_8")