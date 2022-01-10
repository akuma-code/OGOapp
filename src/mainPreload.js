const {

    OGODB
} = require('../src/OK.js')


const sklad = new OGODB();

function addlist() {

    const $out = document.querySelector('#out');
    const items = sklad.OKNA || []
    console.log('sklad.db :>>', Object.fromEntries(sklad.db));

    let toHTML = `<ul>`;
    items.reduce((prev, ok) => {
        toHTML += `<li>${ok.name}, осталось: ${ok.amount}</li>`
    }, '')

    toHTML += "</ul>"
    $out.insertAdjacentHTML("beforeend", toHTML)
}

document.addEventListener('DOMContentLoaded', addlist)