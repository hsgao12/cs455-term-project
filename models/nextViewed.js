const mongoose = require('mongoose');

const NextViewed = new mongoose.Schema({
        id: String,
        next: Object
    }
);

module.exports = mongoose.model('NextViewed', NextViewed);


