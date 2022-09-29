var express = require('express')
var adminRouter = require('./routes/admin')
var userRouter = require('./routes/users')


var app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use('/', userRouter)
app.use('/admin', adminRouter)

const port = 3000





app.listen(port, () => console.log(`Example app listening on port ${port}!`))