const {
    OKdb,
    OkHTML
} = require('../src/OK.js')

const {
    readFileOnDisk
} = require("../src/utility/disk_handlers")



function addlist() {
    const divok = new OkHTML(8, 4)
    const $out = document.querySelector('#out');
    const items = OKdb.OKNA || [];
    readFileOnDisk("skladDB.json")
    console.log('sklad.db :>>', Object.fromEntries(OKdb.db));

    let toHTML = `<ul>`;
    items.reduce((prev, ok) => {
        toHTML += `<li>${ok.name}, осталось: ${ok.amount}</li>`
    }, '')

    toHTML += "</ul>"
    $out.insertAdjacentHTML("beforeend", toHTML);
    $out.insertAdjacentElement("afterend", divok.div);
}

document.addEventListener('DOMContentLoaded', addlist)