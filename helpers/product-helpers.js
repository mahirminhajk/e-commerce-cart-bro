var db = require('../config/connection')

module.exports = {
    addProduct: (product, cb) => {
        db.get().collection('products').insertOne(product).then((data) => {
            var _id = (data.insertedId).toString()
            cb(_id)
        })
    }
}