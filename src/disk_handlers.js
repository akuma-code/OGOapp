const {
    readFile,
    SKLAD_PATH
} = require("../func_utils.js");

const path = require('path')
async function getdb() {

    const dbContent = await readFile("sklad/skladDB");
    // console.log('dbContent :>> ', dbContent);
    return dbContent
}

module.exports = {
    getdb
}