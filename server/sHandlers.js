const {
    readFile,
    ROOT_PATH
} = require("../func_utils")

class okServer {
    constructor() {
        this.store = {};
        this.loadDB("serverDB")
    }
    loadDB(filename) {
        const file_db = `${ROOT_PATH}/src/db/${filename}.json`;
        readFile(`${filename}`)

        return
    }

}

module.exports = {
    okServer
}