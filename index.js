const fs = require('fs')
class load {
    constructor(file){
        this.tempFile = {}
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
                console.log(`Failed to load ${h} (${err})`)
            }
        }
    }
}

new load().initialize()

module.exports = load