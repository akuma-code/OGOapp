const {
    okServer
} = require("./server/sHandlers");

const okS = new okServer()
okS.loadDB("serverDB");
console.log('okS :>> ', okS);