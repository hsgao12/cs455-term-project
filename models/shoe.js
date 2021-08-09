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
        stock: [
            {size: {type: String, default: "1"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"1.5"}, quantity:  {type: Number, default: 0}},
            {size:{type: String, default:"2"}, quantity:  {type: Number, default: 0}},
            {size:{type: String, default:"2.5"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"3"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"3.5"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"4"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"4.5"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"5"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"5.5"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"6"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"6.5"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"7"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"7.5"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"8"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"8.5"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"9"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"9.5"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"10"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"10.5"}, quantity:  {type: Number, default: 0}},
            {size:{type: String, default:"11"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"11.5"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"12"}, quantity:  {type: Number, default: 0}},
            {size:{type: String, default:"12.5"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"13"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"13.5"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"14"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"14.5"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"15"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"16"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"17"}, quantity: {type: Number, default: 0}},
            {size:{type: String, default:"18"}, quantity: {type: Number, default: 0}},
        ]
},
    {
        collection: 'sneakers'

}
);

module.exports = mongoose.model('Shoes', Shoes);