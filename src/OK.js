class OK {
    constructor(okId) {
        this.name = "OK" + okId;
        this.price = OK.pricelist[this.name]
    }

    static pricelist = {
        OK1: 3700,
        OK2: 3300,
        OK3: 5900,
        OK4: 6800,
        OK5: 7400,
        OK6: 16800,
        OK7: 11600,
        OK8: 6800,
        OK9: 10600,
        OK10: 4200,
        OK11: 11600,
    }
}

class OKbox extends OK {
    constructor(okId = Number, numb = 1) {
        super(okId)
        this.amount = numb
    }
}






class OGODB {
    constructor() {
        this.db = new Map()
        this.sdb = new Set()
        this.OKNA = []
        this.setup()
    }
    setup() {
        for (let i = 1; i <= 11; i++) {
            const ok = new OKbox(i, 5);
            this.db.set(`OK${i}`, ok);
            // console.log(ok);
            this.sdb.add(ok)
            this.OKNA.push(ok)
        }
        return this
    }
}
module.exports = {
    OKbox,
    OGODB
}