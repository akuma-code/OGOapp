const fs = require('fs/promises');
const path = require('path');

const ROOT_PATH = path.join(__dirname);
const SKLAD_PATH = path.join(ROOT_PATH, "sklad");


async function readFileOnDisk(fileName, fileExt = "json") {
    const fname = `${SKLAD_PATH}/${fileName}.${fileExt}`;
    let fileHandler = null;
    try {
        fileHandler = await fs.open(fname);
        const fileContent = await fileHandler.readFile('utf-8');
        return fileExt === 'json' ? JSON.parse(fileContent) : fileContent
    } catch (err) {
        throw err
    } finally {
        fileHandler.close()
    }
}
readFileOnDisk("skladDB").then(content => console.log({
    content
}));







module.exports = {
    ROOT_PATH
}