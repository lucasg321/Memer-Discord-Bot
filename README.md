# Memer-Discord-Bot
Discord bot made in Javascript/Node.js and hosted on Heroku

The memer discord bot is mode in node.js by interacting with the Discord API and random-puppy API. After establishing a connection with the Discord client in the the meme text server channel, it begins listening for the "!meme" command. When the command is sent by a user the bot will reply with the following sentence "[username] is a memer", as well as send a meme. The meme is a random meme from the r/dankmemes and r/195 subreddits, which it alternates between. The random-puppy API was used to retreive a random meme from either of the subreddits. Finally, the application was uploaded to Heroku for hosting. 

Setup: The files in this repository are already setup for hosting with Heroku. Simply fork them into a repo and upload to Heroku. You will, however, need to create a Discord bot on your own Discord account and use your Discord bot's token for the BOT_TOKEN environement variable on Heroku. Also, don't forget to add the bot to your server.
