const {
    createFile,
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

    DB_PATH = "file:///C:/Users/User/Desktop/VS%20Code%20UserFiles/JS%20Projects/aDataBase";

    get db() {
        const filePath = `${this.DB_PATH}/dbOKNA.json`;
        const getdata = fetch(filePath).then(result => {
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
        return getdata
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

    setdb(storage = this.storage) {

        createFile(storage, `src/db/newdb`, "json")
        console.log('saved store :>> ', storage);
        return
    }

}

// const testdb = new dbService();
// new dbService()

module.exports = {
    dbService,
    // testdb

}