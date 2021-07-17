const mongoose = require("mongoose");

const SellerItem = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    sneakerId: String,
    sellerId: String,
    size: Number,
    price: Number,
    buyerId: String, 
    sold: Boolean
  },
  {
    collection: "sellerItem",
  }
);

module.exports = mongoose.model("SellerItem", SellerItem);
