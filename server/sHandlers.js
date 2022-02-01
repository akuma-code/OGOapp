const {
    readFile,
    ROOT_PATH
} = require("../func_utils")

class okServer {
    constructor() {
        this.store = {};
        this.loadDB("serverDB").bind(this)
    }
    loadDB(filename) {


        return
    }

}

module.exports = {
    okServer
}