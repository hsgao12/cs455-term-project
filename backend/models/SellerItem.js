const mongoose = require('mongoose');

const SellerItem = new mongoose.Schema({
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
        collection: 'sellerItem'

}
);

module.exports = mongoose.model('SellerItem', SellerItem);