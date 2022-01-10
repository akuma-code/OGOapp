const {
    OKbox,
    OGODB
} = require('../src/OK.js')


function addlist() {
    const sklad = new OGODB();
    sklad.setup()
    const $out = document.querySelector('#out');
    const items = sklad.db.entries()
    console.log('items :>> ', items);
    $out.insertAdjacentHTML('afterbegin', items)
}

addlist()