const Discord = require("discord.js"),
    client = new Discord.Client(),
    config = require("./config.json")
    prefix = require(config.prefix)

client.login(config.token)