var db = require('../config/connection')
var { USER_COLLECTION } = require('../config/collections')
const bcrypt = require('bcrypt')

const saltRounds = 10;

module.exports = {
    doSignup: (userData) => {
        return new Promise(async (resolve, reject) => {
            userData.password = await bcrypt.hash(userData.password, saltRounds)
            db.get().collection(USER_COLLECTION).insertOne(userData).then((data) => {
                resolve((data.insertedId).toString())
            })
        })

    },
    doLogin: (userData) => {
        return new Promise(async (resolve, reject) => {
            let loginStatus = false
            let response = {}
            let user = await db.get().collection(USER_COLLECTION).findOne({ email: userData.email })
            if (user) {
                bcrypt.compare(userData.password, user.password).then((status) => {
                    if (status) {
                        response.user = user
                        response.status = true
                        resolve(response)
                    } else {
                        resolve({ status: false })
                    }
                })
            } else {
                resolve({ status: false })

            }
        })
    }
}