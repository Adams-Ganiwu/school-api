const jwt = require('jsonwebtoken')
const User = require('../models/usersschema')




// is admin middleware

exports.sdmin = async function (req, res, next) {
    if (require.User && require.User.isAdmin) {
        res.status(401).json({
            message:"you are not an authorized admin"
        })
    }
}