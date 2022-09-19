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


// json token middleware

exports.protect = async function (req, res, next) {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id)
            next();
        } catch (err) {
            resstatus(400).json({
                message: "invalid token"
            })
        }
    }
    if (!token) {
        res.status(400).json({
            message: "you are not authoriszed"
        })
    }
};
