const mongoose = require('mongoose');

const User = new mongoose.Schema({
  email: String,
  id: String,
  firstName: String,
  lastName: String,
  address: String,
  city: String,
  country: String,
});

module.exports = mongoose.model('Users', User);
