const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("663782747126366248")
setInterval(function() {
channel.send(` 𝑰𝒇 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒑𝒓𝒐𝒃𝒍𝒆𝒎𝒔, 𝒄𝒐𝒏𝒕𝒂𝒄𝒕 𝒕𝒉𝒆 𝒂𝒅𝒎𝒊𝒏𝒔 𝒂𝒏𝒅 𝒕𝒉𝒂𝒏𝒌 𝒚𝒐𝒖 .`);
}, 30)
})

client.login(process.env.BOT_TOKEN);