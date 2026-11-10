const auth = (req,res,next) => {
    if(req.session.userid){
        next()
    } else {
        return res.redirect("/user/login")
    }
}