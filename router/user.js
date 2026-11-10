const express = require("express");
const router = express.Router();
const user = require("../models/userModel");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");

// LOGIN PAGE
router.get("/login", (req, res) => {
    res.render("user_login");
});

router.post("/loginData", async (req, res) => {
    const {email, password} = req.body;
    const userData = await user.findOne({email : email})
    if(!userData){
        res.redirect("/user/login");
    }
    const match = await bcrypt.compare(password, userData.password);
    if(!match){
        res.redirect("/user/login");
    }
    req.session.userid = userData._id;
    req.session.email = userData.email;
    res.redirect("/products/productDetails");
})

// REGISTER PAGE
router.get("/register", (req, res) => {
    res.render("user_register");
});

router.post("/registerData", async (req,res) => {
    const {username, email, mobile, password} = req.body
    const passwordHash = await bcrypt.hash(password, 10)
    const data = await user.create({
        username : username,
        email : email,
        mobile : mobile,
        password : passwordHash
    })
    res.render("user_login")
})

router.get("/logout", (req,res) => {
    req.session.destroy((err)= {
        if(err){
            res.end("something went wrong")
            return;
        }
    })
    return res.redirect("/user/login")
})

module.exports = router;