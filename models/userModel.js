const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
    {
        fullName: String,
        email: String,
        mobile: Number,
        password: String
    }
)
module.exports=mongoose.model("Users", productSchema);
