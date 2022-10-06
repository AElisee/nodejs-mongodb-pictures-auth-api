const mongoose = require("mongoose");

const picturesModel = mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: String, required: true },
  photo: { type: String, required: true },
  userId: { type: String, required: true },
});

module.exports = mongoose.model("Picture", picturesModel);
