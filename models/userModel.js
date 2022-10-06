const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userModel = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Renseignez le mail svp!"],
    unique: [true, "Ce mail existe déjà"],
  },

  password: {
    type: String,
    required: [true, "Renseignez le mot de passe svp!"],
    unique: false,
  },
});

userModel.plugin(uniqueValidator);

module.exports = mongoose.model("User", userModel);
