const express = require('express'); 
const router = express.Router();
const SellerItem = require('../models/SellerItem'); 

router.delete('/deleteListing/:id', async (req, res) => {
    try {
        const result = await SellerItem.deleteOne({_id: req.params.id});
        console.log(result);
        res.status(200).json({message: "Deleted item"}); 
    } catch (err) {
        req.status(400).json({message: err.message});
    }

}); 

router.put('/editListing/:id', async (req, res) => {
    try {
        const result = await SellerItem.updateOne({_id: req.params.id}, {price: req.body.price, size: req.body.size});
        console.log(result);
        res.status(200).json({message: `Item ${req.params.id} has been updated`}); 
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

module.exports = router;