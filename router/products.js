// IMPORT PACKAGES & MODELS
const express = require("express");
const router = express.Router();

const details = require("../models/productModel");

// Import Multer
const multer = require("multer");


// MULTER CONFIGURATION
// const file = multer({dest:"uploads/"})

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }

});

const file = multer({ storage });


// SAMPLE DATA

// const data = [
//     {name : "jithu",age : 22},
//     // {name : "nandhu",age : 22},
//     // {name : "prabin",age : 22},
// ];

// HOME PAGE
router.get("/", (req, res) => {
    res.render("home");
});


// ADD PRODUCT PAGE
router.get("/add", (req, res) => {
    res.render("add_product");
});


// DISPLAY ALL PRODUCTS
router.get("/productDetails", async (req, res) => {
    const data = await details.find();
    res.render("displayProduct", {
        productData: data
    });
});


// ADD PRODUCT
router.post("/product_add", file.single("image"), async (req, res) => {

    // let productName = req.body.productName;
    // let price = req.body.price;
    // console.log(productName , price);
    // res.send("Product added");

    const { productName, price, stock } = req.body;
    const image = `/uploads/${req.file.filename}`;
    const data = await details.create({
        productName: productName,
        productPrice: price,
        productStock: stock,
        productImage: image
    });


    // let data = [
    //     {productName, price, stock, quantity, totalPrice : price*quantity}
    // ]

    res.render("details", { data });

});

//DELETE PRODUCT
    router.post("/delete/:id", async (req, res) => {
        try {
            await details.findByIdAndDelete(req.params.id);
            res.redirect("/products/");
        } catch (error) {
            console.log(error);
            res.redirect("/products/");
        }
    });

// VIEW SINGLE PRODUCT
router.get("/single_product/:id", async (req, res) => {
    const data = await details.findById(req.params.id);
    res.render("single_product", {data: data});
});


// EXPORT ROUTER
module.exports = router;
