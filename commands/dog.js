const { MessageEmbed } = require("discord.js")
const fetch = require('node-fetch')

module.exports = {
    name: "dog",
    description: "Image random de chien",
    async execute(message,args) {
        const dog = await fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(json => json.message)

        const embed = new MessageEmbed()
            .setImage(dog)
            .setFooter("Propulsé par dog.ceo")

        message.channel.send(embed)
    }
}