const { response } = require('express')
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

router.get('/delete-product/:id', (req, res) => {
  productHelpers.deleteProduct(req.params.id).then((response) => {
    if (response) res.redirect('/admin')
    else console.log("can not delete")
  })
})

router.get('/edit-product/:id', async (req, res) => {
  let product = await productHelpers.getProductDetailes(req.params.id)
  res.render('admin/edit-product', { admin: true, product: product })
})

router.post('/edit-product/:id', fileUpload(), (req, res) => {
  let id = req.params.id
  productHelpers.updateProduct(id, req.body).then(() => {
    res.redirect('/admin')
    if (req.files.photo) {
      let image = req.files.photo
      image.mv('./public/product-images/' + id + '.jpg')
    }
  })
})


module.exports = router
