const { Router } = require("express")
const { getBooks, deleteBook } = require("../controllers/booksControllers")

const router = Router()
 
router.route("/books").get(getBooks);
router.delete("/books/:title", deleteBook)

module.exports=router