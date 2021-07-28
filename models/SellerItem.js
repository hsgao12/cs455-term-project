const mongoose = require("mongoose");

const SellerItem = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    sneakerId: String,
    userId: String,
    size: Number,
    price: Number,
  },
  {
    collection: "sellerItem",
  }
);

module.exports = mongoose.model("SellerItem", SellerItem);
