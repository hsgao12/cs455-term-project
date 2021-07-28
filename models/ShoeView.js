const mongoose = require('mongoose');

const ShoeView = new mongoose.Schema({
        id: String,
        items:[String]
    }
);

module.exports = mongoose.model('ShoeView', ShoeView);


