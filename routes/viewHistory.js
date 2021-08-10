const express = require('express');
const router = express.Router();
const shoesViewed = require("../models/ShoeView");
const Shoes = require('../models/shoe');
const mongoose = require('mongoose');
const nextViewed = require("../models/nextViewed")
/* GET users listing. */

router.post("/:shoeID/:userID", async (req, res, next) => {
    try {


        const {items, lastViewed} = await shoesViewed.findOneAndUpdate(
            {id: req.params.userID},
            {
                $push: {items: {$each: [req.params.shoeID], $slice: -50}},
                $set: {id: req.params.userID, lastViewed: new Date()}
            },
            {upsert: true, new: true, setDefaultsOnInsert: true, useFindAndModify: false}).lean();
        if (items.length > 1) {
            const alreadySeenThings = new Set();
            for (let i = 0; i < Math.min(items.length - 1, 5); ++i) {
                const itemID = items[items.length - i - 2];
                if (itemID !== req.params.shoeID && !alreadySeenThings.has(itemID)) {
                    const {next} = await nextViewed.findOne({id: itemID},"next").lean() ?? {next:{}};
                    next[req.params.shoeID] = (next[req.params.shoeID] ?? 0) + (1 / (i + 1));
                    alreadySeenThings.add(itemID);
                    const next2 = (await nextViewed.findOneAndUpdate(
                        {id: itemID},
                        {$set: {id: itemID, next}},
                        {upsert: true, new: true, setDefaultsOnInsert: true, useFindAndModify: false}
                    ))["next"];

                }
            }
        }

        res.json([]);
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
            {
                _id:
                    {$in: ids.map((a) => mongoose.Types.ObjectId(a))}
            }
        );

        const shoeOrder = {};
        ids.forEach((id, idx) => shoeOrder[id] = idx);

        shoesBought.sort((a, b) => shoeOrder[b._id] - shoeOrder[a._id]);
        res.json(shoesBought);
    } catch (e) {
        console.log(`view history get ${req.url}`);
        console.log(e);
        res.json([]);
    }
});

module.exports = router;
