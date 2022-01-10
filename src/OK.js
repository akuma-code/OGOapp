class OK {
    constructor(okId) {
        this._name = okId;
        this.price
    }
    get _name() {
        return this.name
    }
    get price() {
        return OK.pricelist[this.name]
    }
    set _name(IdValue) {
        const id = IdValue.toString()
        // console.log('id :>> ', id.length);
        if (id.length !== 1) {
            return this.name = "OK" + id;
        } else return this.name = "OK0" + id
    }
    static pricelist = {
        OK01: 3700,
        OK02: 3300,
        OK03: 5900,
        OK04: 6800,
        OK05: 7400,
        OK06: 16800,
        OK07: 11600,
        OK08: 6800,
        OK09: 10600,
        OK10: 4200,
        OK11: 11600,
    }
}

class OKbox extends OK {
    constructor(okId = Number, numb = 1) {
        super(okId)
        this.amount = numb
    }

    get fullprice() {
        return this.price * this.amount
    }
}






class OGODB {
    constructor() {
        this.db = new Map()
        this.OKNA = []
        this.setup()
    }
    setup() {
        if (this.OKNA.length !== 0) return
        for (let i = 1; i <= 11; i++) {
            const ok = new OKbox(i, 5);
            this.db.set(`Okno${i}`, ok);
            // console.log(ok);
            this.OKNA.push(ok)
        }
        return this
    }
}
module.exports = {
    OKbox,
    OGODB
}