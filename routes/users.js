var express = require('express')
var productHelpers = require('../helpers/product-helpers')
var userHelpers = require('../helpers/user-helpers')
var router = express.Router()

const verifyLogin = (req, res, next) => {//middlewire
  if (req.session.loggedIn) {
    next()
  } else {
    res.redirect('/login')
  }
}
let user;

router.get('/', (req, res) => {
  user = req.session.user
  productHelpers.getAllProducts().then((products) => {
    res.render('user/view-products', { products: products, admin: false, user: user })
  })

})

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/')
  } else {
    res.render('user/login', { admin: false, user: user, loginFail: req.session.loginFail })
    req.session.loginFail = false
  }
})

router.get('/signup', (req, res) => {
  res.render('user/signup', { admin: false, user: user })
})

router.post('/signup', (req, res) => {
  userHelpers.doSignup(req.body).then((response) => {
    res.redirect('/')
  })
})

router.post('/login', (req, res) => {
  userHelpers.doLogin(req.body).then((response) => {
    if (response.status) {
      req.session.loggedIn = true
      req.session.user = response.user
      res.redirect('/')
    } else {
      req.session.loginFail = true
      res.redirect('/login')
    }
  })
})

router.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/')
})

router.get('/cart', verifyLogin, (req, res) => {
  res.render('user/cart', { admin: false, user: user })
})


module.exports = router;
