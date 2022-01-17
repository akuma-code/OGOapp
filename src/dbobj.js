const {
    readFile,
    writeFile,
    ROOT_PATH
} = require('../func_utils.js');



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



function fetchGlobal() {
    const pathToFile = "file://192.168.0.75/Work/foto/Фото%20объектов/APP/db/okdb.json";

    const data = fetch(pathToFile).then(
        result => {
            const content = result.json();
            console.log({
                content
            });
            // console.log('content :>> ', content);
            return content

        },
        err => console.log(err.message)
    );
    console.log('data :>> ', data);

}
module.exports = {
    getDbObj,
    fetchGlobal
}