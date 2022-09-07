const { Router } = ("express")
const { addUser } = require("../controllers/userControllers")
const router =Router()


router.route("/regiter") .post(addUser)

module.exports =router