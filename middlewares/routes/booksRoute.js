const { Router } = require('express')
const { getBooks } = require('../controlers/booksbookscontrollers')
const auth = require('../middlewares/books.auth')
const router = Router()

Router.route('/book').get(getBooks)

module.exports = router
