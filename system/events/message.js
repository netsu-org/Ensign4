module.exports = class {
    constructor(bot){
        this.bot = bot
    }
    async run(message){
        console.log('h')
        if(!message.content.startsWith(this.bot.config.bot.prefix)) return
        const args = message.content.substring(this.bot.config.bot.prefix).split(/ +/g)
        console.log(args)
    }
}