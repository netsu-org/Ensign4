const discord = require('discord.js')
const sys = new(require('../index.js'))

class dbot extends discord.Client{
    constructor(bot){
        super(bot)
        this.config = sys.locate('./system/config/bot.json') ? require('./system/config/bot.json') : null
        this.sysMain = {
            loadPrograms: () =>{

            },
            loadModule: () =>{

            }
        }
    }
    async initialize(){

    }
}



const app = new dbot()