var express = require('express')
const fileUpload = require('express-fileupload')
var router = express.Router()



router.get('/', (req, res, next) => {
  let products = [
    {
      name: "IPHONE 11",
      category: "Mobile",
      description: "one of best iphone selling phone in 2019",
      imageLink: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1660754254594"
    },
    {
      name: "IPHONE 12",
      category: "Mobile",
      description: "one of best iphone selling phone in 2020",
      imageLink: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1660754254594"
    },
    {
      name: "IPHONE 13",
      category: "Mobile",
      description: "one of best iphone selling phone in 2021",
      imageLink: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1660754254594"
    },
    {
      name: "IPHONE 14",
      category: "Mobile",
      description: "latest iphone with new features, released in 2022",
      imageLink: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1660754254594"
    }

  ]
  res.render('admin/view-poducts', { products: products, admin: true })
  req.files
})

router.get('/add-product', (req, res) => {
  res.render('admin/add-product', { admin: true })
})
router.post('/add-product', fileUpload(), (req, res) => {
  console.log(req.body);
  console.log(req.files.photo);
})

module.exports = router;
