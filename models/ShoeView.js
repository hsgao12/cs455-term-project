const mongoose = require('mongoose');

const ShoeView = new mongoose.Schema({
        id: String,
        items: [String],
        lastViewed: {type: Date, default: Date.now}
    }
);

module.exports = mongoose.model('ShoeView', ShoeView);


