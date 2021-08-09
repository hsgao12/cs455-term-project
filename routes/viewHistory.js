const express = require('express');
const router = express.Router();
const shoesViewed = require("../models/ShoeView");
const Shoes = require('../models/shoe');
const mongoose = require('mongoose');
/* GET users listing. */

router.post("/:shoeID/:userID", async (req, res, next) => {
    try {
        res.json(
            await shoesViewed.findOneAndUpdate(
                {id: req.params.userID},
                {$push: {items: {$each:[req.params.shoeID],$slice:-50}}, $set: {id: req.params.userID,lastViewed:new Date()}},
                {upsert: true, new: true, setDefaultsOnInsert: true,useFindAndModify:false})
        );
    } catch (e) {
        console.log(`view history post ${req.url}`);
        console.log(e);
        res.json([]);
    }
});

router.get("/:userID", async (req, res, next) => {
    const id = req.params.userID;
    try {
        const ids = ((await shoesViewed.findOne({id})).items ?? []);
        const shoesBought = await Shoes.find(
            {_id:
                    {$in: ids.map((a) => mongoose.Types.ObjectId(a))}
            });

        const shoeOrder = {};
        shoesBought.forEach((shoe,idx)=>shoeOrder[shoe._id] = ids.indexOf(shoe._id));

        shoesBought.sort((a,b)=>shoeOrder[b._id] - shoeOrder[a._id]);
        res.json(shoesBought);
    } catch (e) {
        console.log(`view history get ${req.url}`);
        console.log(e);
        res.json([]);
    }
});

module.exports = router;
