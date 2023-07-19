const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  password: String,
  isAdmin: Boolean,
  isTrainer: Boolean,
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };

//Early model without required, unique/validation.
