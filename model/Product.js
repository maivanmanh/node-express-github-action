const mongoose = require("mongoose");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please provide the product name"],
      minlength: [3, "Product name must have at least 3 characters"],
      maxlength: 100,
    },
    price: {
      type: Number,
      min: 10,
      max: 1000000,
      required: true,
    },
    color: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          const colors = ["white", "black", "green", "yellow"];
          return colors.includes(v.toLowerCase());
        },
        message: (props) => `color must in the predefined list`,
      },
    },
  })
);

module.exports = Product;
