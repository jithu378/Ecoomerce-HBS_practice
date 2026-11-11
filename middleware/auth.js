const auth = (req,res,next) => {
    if(req.session.userid){
        return next()
    } else {
        return res.redirect("/user/login")
    }
}

module.exports = auth;