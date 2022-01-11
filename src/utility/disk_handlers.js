const fs = require('fs');
const path = require('path');

const PATH_DB = path.join(__dirname, "sklad");

function readFileOnDisk(filename) {
    const read = fs.readFile;
    const currPath = path.join(PATH_DB, filename);
    const data = read(currPath, (err, data) => {
        if (err) throw new Error(err);
        return JSON.parse(data)
    })

    console.log(data);
}

module.exports = {
    readFileOnDisk
}