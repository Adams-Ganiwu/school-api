function auth(req, res, next) {
    let isVerified = true;
    if (isVerified) {
        console.log("added successfully")

        next()
    } else {
        console.log("not authorised")
        throw error;
    }
}

module.exports=auth