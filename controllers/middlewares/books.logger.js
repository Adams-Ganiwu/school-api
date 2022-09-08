function logger(req, res, next){
    console.log(`${req.method} ${req.originalurl} ${req.statusCode}`);

    next();
}
module.exports=logger