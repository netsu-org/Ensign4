const fs = require('fs')
class load {
    constructor(file){
        this.tempFile = {}
        this.config = require('./system/config/system.json')
    }
    async load(dir){
        new(require(dir))(this)
    }
    async initialize(){
        const dir = fs.readdirSync("./service")
        for(const h of dir){
            try{
                await this.load(`./service/${h}`)
            }
            catch(err){
                console.log(err)
                console.log(`Failed to load ${h} (${err})`)
            }
        }
    }
    async backup(file){

    }
    locate(dir){
        return fs.readFileSync(dir) ? true : null
    }
}

new load().initialize()

module.exports = load