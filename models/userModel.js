const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
    {
        username: String,
        email: String,
        mobile: Number,
        password: String
    }
)
module.exports=mongoose.model("Users", userSchema);
