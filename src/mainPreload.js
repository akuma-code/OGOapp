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
    btn1.onclick = () => showStore(maindb.storage);
    btn2.onclick = () => {
        maindb.setdb()
    }

    btn3.onclick = () => {
        maindb.storage[0].amount -= 1;
        showStore(maindb.storage)
    }
})