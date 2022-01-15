const {
    readFile,
    SKLAD_PATH
} = require("../func_utils.js");

const path = require('path')

function getdb() {

    const dbContent = readFile("sklad/skladDB");
    // console.log('dbContent :>> ', dbContent);
    return dbContent
}

module.exports = {
    getdb
}