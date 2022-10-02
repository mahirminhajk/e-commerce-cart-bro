var express = require('express')
var productHelpers = require('../helpers/product-helpers')
var router = express.Router()

router.get('/', (req, res) => {
  productHelpers.getAllProducts().then((products) => {
    res.render('user/view-products', { products: products, admin: false })
  })

})

module.exports = router;
