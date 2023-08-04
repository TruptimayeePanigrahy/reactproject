const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, require: true},
    email: { type: String, unique: true },
    password: {type:String,require:true},
    role: { type: String, enum: ["user", "admin"], default: "user" }
});

const userModel = mongoose.model("user", userSchema);
module.exports = { userModel };
