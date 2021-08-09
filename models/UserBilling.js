const mongoose = require("mongoose");

const UserBilling = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    sellerItemId: String,
    userId: String,
    userType: String,
    billing: {
      address: String,
      province: String,
      country: String,
      postalCode: String,
    },
    payment: {
      cardNumber: String,
      expDate: String,
      cvv: Number,
    },
  },
  {
    collection: "userBilling",
  }
);

module.exports = mongoose.model("UserBilling", UserBilling);
