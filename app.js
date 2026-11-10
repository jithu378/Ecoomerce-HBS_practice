const express = require ("express");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();

mongoose.connect("mongodb://localhost:27017/E-commerce")
.then(() => {
    console.log("Connected")
}).catch(() => {
    console.log("Connection failed");
});

const productRouter = require("./router/products")
const userRouter = require("./router/user")
app.set("view engine","hbs")

app.use(session({
    secret: "shopease_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true
    }
}));

app.use("/uploads", express.static("uploads"))
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))

app.use("/products", productRouter)
app.use("/user", userRouter)

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/products/");
});