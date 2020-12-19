const discord = require("discord.js");
const config = require("./config.json");

const client = new discord.Client();

const prefix = "!";

client.on("message" , function( message ) {
	if ( message.author.bot ) return;

	if ( !message.content.startsWith( prefix ) ) return;

	const commandBody = message.content.slice( prefix.length );
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();

	if ( command == "ping" ) {
		const timeTaken = Date.now() - message.createdTimestamp;
		message.reply(`Ping : ${timeTaken}ms`);
	}
});

client.login(config.BOT_TOKEN);