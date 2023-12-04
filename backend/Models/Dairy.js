const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DairyProduct = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  rating: {
    type: Number,
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("Dairy Product", DairyProduct);
