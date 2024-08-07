var db = require('../config/connection')
var { PRODUCT_COLLECTION } = require('../config/collections')
const { ObjectId } = require('mongodb')

module.exports = {
    addProduct: (product, cb) => {
        db.get().collection(PRODUCT_COLLECTION).insertOne(product).then((data) => {
            var _id = (data.insertedId).toString()
            cb(_id)
        })
    },
    getAllProducts: () => {
        return new Promise(async (resolve, reject) => {
            let products = await db.get().collection(PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    },
    deleteProduct: (id) => {
        return new Promise((resolve, reject) => {
            db.get().collection(PRODUCT_COLLECTION).deleteOne({ "_id": ObjectId(id) }).then((response) => {
                resolve(response.acknowledged)
            })
        })
    },
    getProductDetailes: (id) => {
        return new Promise((resolve, reject) => {
            db.get().collection(PRODUCT_COLLECTION).findOne({ _id: ObjectId(id) }).then((product) => {
                resolve(product)
            })
        })
    },
    updateProduct: (id, product) => {
        return new Promise((resolve, reject) => {
            db.get().collection(PRODUCT_COLLECTION)
                .updateOne({ _id: ObjectId(id) }, {
                    $set: {
                        name: product.name,
                        category: product.category,
                        price: product.price,
                        description: product.description
                    }
                }).then((response) => {
                    resolve()
                })
        })
    }
}