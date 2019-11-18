const Discord = require('discord.js');
const client = new Discord.Client();
const randomPuppy = require('random-puppy');

var count = 0;

client.on('message', (msg) => {
if(msg.content === '!meme'){
    msg.channel.send(`${msg.author} is a memer`); 

   if(count%2 === 0){
    randomPuppy(subreddit = "dankmemes", cb = "any")
    .then(url => {
        msg.channel.send(`${url}`);
    })
    count ++;
   }else {
    randomPuppy(subreddit = "195", cb = "any")
    .then(url => {
        msg.channel.send(`${url}`);
    })
    count ++;
}
}
});

client.on('ready', () => { //set general channel to memes channel instead
    client.channels.find(x => x.name === 'memes').send('Ready to meme');
});

client.login(process.env.BOT_TOKEN);