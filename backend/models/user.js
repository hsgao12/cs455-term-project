const mongoose = require('mongoose');

const User = new mongoose.Schema({
  email: String,
  id: String,
  firstName: String,
  lastName: String,
});

module.exports = mongoose.model('Users', User);
