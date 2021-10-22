const discord = require('discord.js')
const fs = require('fs')
class dbot extends discord.Client{
   constructor(options){
        super(options)
        this.config = require('../system/config/bot.json')
        this.sysMain = {
            loadPrograms: () =>{

            },
            loadModules: () =>{

            }
        }
    }
    async initialize(){
        if(!this.config) throw new Error("No config file found")
        try{
            this.login(this.config.bot.token)
        }
        catch(err){
            console.log("Invalid token")
            process.exit()
        }
        const events = fs.readdirSync(this.config.bot.eventsLocation)
        for(const event of events){
            const name = event.split(".")[0]
            const evt = new(require(`../system/events/${name}`))(this)

            this.on(name,(...args) => evt.run(...args))
            delete require.cache[require.resolve(`../system/events/${name}`)]
        }
    }
}



const app = new dbot()


app.initialize()