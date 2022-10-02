const mongoClient = require('mongodb').MongoClient
const state = { db: null }

module.exports.connect = async function () {
    const url = 'mongodb://localhost:27017/'
    const dbname = 'shopping'
    try {
        const client = new mongoClient(url)
        state.db = client.db(dbname)
        console.log("_DB on port:27017")
    } catch (err) {
        console.log("DB:Connection Error" + err)
    }
}

module.exports.get = () => {
    return state.db
}
