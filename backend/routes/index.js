var express = require('express');
var router = express.Router();
const Shoes = require('../models/shoe');

//Post request to add a sneaker for sale
router.post('/addNewSneaker',async (req,res) => {

})

/* need to implement delete Sneakers
router.delete('/deleteSneaker', async (req,res) => {
  const deletedShoes = req.body;

})*/

//Get request to get list of sneaker for sale
router.get('/getShoes',async (req,res) => {
  Shoes.find()
      .exec()
      .then(docs => {
        res.status(200).json(docs);
      })
      .catch(err=>{
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
})

//Get request to get popular list of sneaker
router.get('/getPopularShoes',async (req,res) => {
    Shoes.find({ numberOfSale: { $gt: 2000 } })
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
})

//Get request to get specific brand of shoes
router.get('/getShoes/:brand',async (req,res) => {
  Shoes.find({brand: req.params.brand})
      .exec()
      .then(docs => {
        res.status(200).json(docs);
      })
      .catch(err=>{
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
})

// Get Sneaker against given sneaker id
router.get('/sneaker/:id',async (req,res) => {
  Shoes.findOne({_id: req.params.id})
  .then(result => {
    console.log(result);
    res.status(200).send(result);
  })
  .catch(error => 
    {
      res.status(400).send(error)
    })
  })

module.exports = router;
