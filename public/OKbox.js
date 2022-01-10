const {

    OGODB
} = require('../src/OK.js')


function addlist() {
    const sklad = new OGODB();

    const $out = document.querySelector('#out');
    const items = sklad.OKNA
    console.log('items :>> ', items);
    items.forEach(item => $out.insertAdjacentHTML('beforeend', `${item.name}, rest: ${item.amount}<br>`))
}

addlist()