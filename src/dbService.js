const {
    createFile,
    createDBFile,
    ROOT_PATH
} = require("../func_utils")

class dbObject {
    constructor(name, amount) {
        this.name = name
        this.amount = amount
        // console.log('dbo created:>> ', this);
    }
}

class dbService {
    constructor() {
        this.storage = []
        this.db
    }

    DB_PATH = "file://192.168.0.75/Work/foto/Фото%20объектов/APP/db/";
    DB_ROOT_PATH = `${ROOT_PATH}/src/db`;

    get db() {
        const filePath = `${this.DB_ROOT_PATH}/okdb.json`;

        fetch(filePath).then(result => {
            const data = result.json();
            data.then(db => db.forEach(dbo => {
                const {
                    name,
                    amount
                } = dbo
                this.storage.push(new dbObject(name, amount))
            }));
            return data
        });
        return this.storage
    }


    getdb(filename) {
        const filePath = `${ROOT_PATH}/src/db/${filename}.json`;

        const getdata = fetch(filePath).then(result => {
            const data = result.json();
            data.then(
                db => {
                    this.storage = []
                    db.forEach(dbo => {
                        const {
                            name,
                            amount
                        } = dbo
                        this.storage.push(new dbObject(name, amount))
                    })
                });
            console.log('storage :>> ', this.storage);
            return data
        });
        return getdata
    }

    savedb(storage = this.storage) {

<<<<<<< HEAD
        createFile(storage, `src/db/newdb`, "json")
        console.log('saved store :>> ', storage);
=======
        createFile(storage, `src/db/okdb`, "json")
        console.log('saved :>> ', storage);
>>>>>>> 29ee3fd4bd8a05944bbd8d02262b7a09eef5606c
        return
    }

}

// const testdb = new dbService();
// new dbService()

module.exports = {
    dbService,
    // testdb

}