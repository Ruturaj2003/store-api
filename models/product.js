const moment = require("moment-timezone");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product Name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "Product Price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,

    default: Date.now(),
    // For IST
    // default: () => {
    //   return moment().tz("Asia/Kolkata").format("DD/MM/YY");
    // },
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "macros"],
      message: "{VALUE} is not supported",
    },
    // enum: ["ikea", "liddy", "caressa", "macros"],
  },
});

module.exports = mongoose.model("Product", productSchema);
