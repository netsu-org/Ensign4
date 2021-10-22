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
            bot.login(this.config.bot.token)
        }
        catch(err){
            console.log("Invalid token")
            process.exit()
        }
        const events = fs.readdirSync(this.config.bot.eventsLocation)
        for(const event of events){
            console.log(event)
        }
    }
}



const app = new dbot()


app.initialize()