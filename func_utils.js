const fs = require('fs/promises');
const path = require('path');
const fileURLToPAth = require('url')
const ROOT_PATH = path.join(__dirname);
const SKLAD_PATH = path.join(ROOT_PATH, "sklad");

const notExist = (e) => e.code === 'ENOENT'
const truncPath = (p) => p.split('/').slice(0, -1).join('/')

async function readFile(filePath, fileExt = "json") {
    const filename = `${ROOT_PATH}/${filePath}.${fileExt}`;
    let fileHandler = null;
    try {
        fileHandler = await fs.open(filename);
        const fileContent = await fileHandler.readFile('utf-8');
        return fileExt === 'json' ? JSON.parse(fileContent) : fileContent
    } catch (err) {
        throw err
    } finally {
        fileHandler.close()
    }
}

async function createFile(fileData, filePath, fileExt = 'json') {
    const fileName = `${ROOT_PATH}/${filePath}.${fileExt}`

    try {
        if (fileExt === 'json') {
            await fs.writeFile(fileName, JSON.stringify(fileData, null, 2))
        } else {
            await fs.writeFile(fileName, fileData)
        }
    } catch (err) {
        if (notExist(err)) {
            await fs.mkdir(truncPath(`${ROOT_PATH}/${filePath}`), {
                recursive: true
            })
            return createFile(fileData, filePath, fileExt)
        }
        throw err
    }
}
async function removeFile(filePath, fileExt = 'json') {
    const fileName = `${ROOT_PATH}/${filePath}.${fileExt}`

    try {
        await fs.unlink(fileName)

        await removeDir(truncPath(`${ROOT_PATH}/${filePath}`))
    } catch (err) {
        if (notExist(err)) {
            throw {
                status: 404,
                message: 'Not found'
            }
        }
        throw err
    }
}

async function removeDir(dirPath, rootPath = ROOT_PATH) {
    if (dirPath === rootPath) return

    const isEmpty = (await fs.readdir(dirPath)).length < 1

    if (isEmpty) {
        await fs.rmdir(dirPath)

        removeDir(truncPath(dirPath))
    }
}

async function getFileNames(path = ROOT_PATH) {
    let fileNames = []

    try {
        const files = await fs.readdir(path)

        if (files.length < 1) return fileNames

        for (let file of files) {
            file = `${path}/${file}`

            const isDir = (await fs.stat(file)).isDirectory()

            if (isDir) {
                fileNames = fileNames.concat(await getFileNames(file))
            } else {
                fileNames.push(file)
            }
        }

        return fileNames
    } catch (err) {
        if (notExist(err)) {
            throw {
                status: 404,
                message: 'Not found'
            }
        }
        throw err
    }
}

module.id = "nodeFunc"
module.exports = {
    ROOT_PATH,
    SKLAD_PATH,
    readFile,
    createFile,
    getFileNames,
    removeDir,
    removeFile
}