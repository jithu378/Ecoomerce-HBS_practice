const express = require ("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/E-commerce")
.then(() => {
    console.log("Connected")
}).catch(() => {
    console.log("Connection failed");
});

const productRouter = require("./router/products")
app.set("view engine","hbs")

app.use("/uploads", express.static("uploads"))
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))

app.use("/products", productRouter)

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/products/");
});