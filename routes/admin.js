var express = require('express')
const fileUpload = require('express-fileupload')
var productHelpers = require('../helpers/product-helpers')
var router = express.Router()


router.get('/', (req, res, next) => {
  productHelpers.getAllProducts().then((products) => {
    res.render('admin/view-poducts', { products: products, admin: true })
  })

})

router.get('/add-product', (req, res) => {
  res.render('admin/add-product', { admin: true })
})
router.post('/add-product', fileUpload(), (req, res) => {
  console.log(req.files.photo);
  productHelpers.addProduct(req.body, (id) => {//id==_id of inset item
    let image = req.files.photo
    image.mv('./public/product-images/' + id + '.jpg', (err) => {
      if (!err) {
        res.render('admin/add-product', { admin: true })
      } else {
        console.log(err)
      }
    })

  })

})


module.exports = router;
