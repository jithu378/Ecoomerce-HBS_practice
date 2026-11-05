const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
    {
        productName : String,
        productPrice : Number,
        productStock : Number,
        productImage : String
    }
)
module.exports=mongoose.model("Product", productSchema);
