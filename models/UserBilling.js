const mongoose = require('mongoose');

const UserBilling = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    userId: String,
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
      firstName: String,
      lastName: String,
    },
  },
  {
    collection: 'userBilling',
  }
);

module.exports = mongoose.model('UserBilling', UserBilling);
