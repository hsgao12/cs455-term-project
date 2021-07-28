const express = require('express');
const router = express.Router();
const shoe = require("../models/shoe");
/* GET users listing. */

router.get("/:query",async (req,res,next)=>{
    const query = req.params.query;
    //const filters = JSON.parse(req.params.filters);
    try{
        res.json(await shoe.find({name:{$regex:`${query}`,$options:"i"}}).limit(20));
    }catch (e){
        res.json([]);
    }


});

router.get("/",async (req,res,next)=>{
    //const filters = JSON.parse(req.params.filters);

    try{
        res.json(await shoe.find({}).limit(20));
    }catch (e){

    }


});



module.exports = router;
