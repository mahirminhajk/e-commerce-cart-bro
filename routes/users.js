var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
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
    res.render('index', { products: products, admin: false })
})

module.exports = router;