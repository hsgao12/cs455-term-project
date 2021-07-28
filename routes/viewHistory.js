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
                {$push: {items: {$each:[req.params.shoeID],$slice:50}}, $set: {id: req.params.userID}},
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
        const ids = (await shoesViewed.findOne({id})).items ?? [];
        res.json(await Shoes.find(
            {_id:
                    {$in: ids.map((a) => mongoose.Types.ObjectId(a))}
            }));
    } catch (e) {
        console.log(`view history get ${req.url}`);
        console.log(e);
        res.json([]);
    }
});

module.exports = router;
