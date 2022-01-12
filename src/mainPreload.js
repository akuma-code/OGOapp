const {
    OKdb,
    OkHTML,
    OKbox,
    OK
} = require('../src/OK.js')


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
        }, reject => {
            throw new Error(reject)
        })
    // console.log('tmp :>> ', tmp);




    const divok = new OkHTML(8, 4)
    $out.insertAdjacentElement("beforeend", divok.div)
    let toHTML = `<ul>`;
    // items.reduce((prev, ok) => {
    //     toHTML += `<li>${ok.name}, осталось: ${ok.amount}</li>`
    // }, '')
    toHTML += "</ul>"
    // $out.insertAdjacentHTML("beforeend", toHTML);
}

document.addEventListener('DOMContentLoaded', addlist)