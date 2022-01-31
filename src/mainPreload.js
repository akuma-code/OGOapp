const {
    OKdb,
    OkHTML,
    OKbox,
    OK
} = require('../src/OK.js')
const {
    getDbObj,
    fetchGlobal
} = require("./dbobj")
const {
    ROOT_PATH
} = require('../func_utils');

const {
    getdb
} = require("./disk_handlers");
const {
    dbService,
    testdb
} = require('./dbService.js');

const express = require('express');
const appServer = express();
const port = 3000;
const logger = function (req, res, next) {
    console.log(res)
    next()
}

appServer.use(logger)
appServer.get('/', (req, res) => {
    res.send('Server running!')
})

appServer.listen(port, () => {
    console.log(`listen port 3000 at localhost`)
})

function renderElement(selector, element) {
    const $out = document.querySelector(selector);
    $out.insertAdjacentElement("beforeend", element)
}
async function addlist() {
    const $out = document.querySelector('#out');
    $out.innerHTML = ""
    let tmp = [];
    getdb().then(
        result => {
            result.map(dbItem => {
                const OKtopage = new OkHTML(dbItem.id, dbItem.amount);
                tmp.push(new OkHTML(dbItem.id, dbItem.amount))
                // console.log('dbitem :>> ', dbItem)
                renderElement('#out', OKtopage.div)
                // debugger
            })
        })
    // console.log('tmp :>> ', tmp);

}

function showStore(elems = []) {
    const text = ({
        name,
        amount
    }) => `${name}, rest:${amount}`;
    const div = document.createElement('div');
    div.classList.add('db_item');
    elems.forEach(elem => div.innerHTML += text(elem) + '<br>');
    out.innerHTML = '';
    return renderElement('#out', div)


}
const maindb = new dbService()

document.addEventListener('DOMContentLoaded', () => {

    showStore(maindb.storage)
    btn1.onclick = () => {
        maindb.storage[0].amount += 1
        showStore(maindb.storage)
    };
    btn2.onclick = () => {
        maindb.savedb()
    }

    btn3.onclick = () => {
        maindb.storage[0].amount -= 1;
        showStore(maindb.storage)
    }

    btn4.onclick = () => {
        maindb.getdb("newdb").then(
            () => {
                showStore(maindb.storage);
                console.table(maindb.storage);
            })
        // console.log('maindb :>> ', maindb);

    }
})