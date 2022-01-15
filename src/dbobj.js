const {
    readFile,
    writeFile
} = require('../func_utils.js')

function getDbObj() {
    const dbOBJ = readFile("sklad/storeOKobj").then(
        result => console.log("RF:", result)
    );
    const fetchedOBJ = fetch("../sklad/storeOKobj.json").then(
        res => res.json()
    )
    fetchedOBJ.then(result => console.log("fetch:", result));
    console.log('fresult :>> ', fetchedOBJ.result);
    return {
        dbOBJ,
        fetchedOBJ
    }
}

module.exports = {
    getDbObj
}