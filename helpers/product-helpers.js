var db = require('../config/connection')
var { PRODUCT_COLLECTION } = require('../config/collections')

module.exports = {
    addProduct: (product, cb) => {
        db.get().collection(PRODUCT_COLLECTION).insertOne(product).then((data) => {
            var _id = (data.insertedId).toString()
            cb(_id)
        })
    },
    getAllProducts: () => {
        return new Promise(async (resolove, reject) => {
            let products = await db.get().collection(PRODUCT_COLLECTION).find().toArray()
            resolove(products)
        })
    }
}