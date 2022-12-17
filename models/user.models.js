const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { tyep: String },
  password: { type: String },
});

const userModel = new mongoose.model("user", userSchema);
module.exports = userModel;
