const express = require("express");
const router = express.Router();
const user = require("../models/userModel");
const bcrypt = require("bcrypt");

// REGISTER PAGE
router.get("/register", (req, res) => {
    res.render("user_register");
});

// LOGIN PAGE
router.get("/login", (req, res) => {
    res.render("user_login");
});

module.exports = router;