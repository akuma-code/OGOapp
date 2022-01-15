const {
    OKdb,
    OkHTML,
    OKbox,
    OK
} = require('../src/OK.js')

const {
    getDbObj
} = require("./dbobj")
const {
    ROOT_PATH
} = require('../func_utils');

const {
    getdb
} = require("./disk_handlers")

function renderHTML(selector, element) {
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
                renderHTML('#out', OKtopage.div)
                // debugger
            })
        })
    // console.log('tmp :>> ', tmp);

}

document.addEventListener('DOMContentLoaded', () => {
    btn1.onclick = () => addlist();
    btn2.onclick = () => out.innerHTML = "";
    btn3.onclick = () => getDbObj()
})