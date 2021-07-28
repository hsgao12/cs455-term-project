const mongoose = require('mongoose');

const Shoes = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    brand: String,
    name: String,
    img: String,
    price: Number,
    numberOfSale: Number,
    description: String,
    priceHistory: Object,
},
    {
        collection: 'sneakers'

}
);

module.exports = mongoose.model('Shoes', Shoes);