var express = require('express');
const { Mongoose } = require('mongoose');
var router = express.Router();
const Shoes = require('../models/shoe');

//Post request to add a sneaker for sale
router.post('/addNewSneaker',async (req,res) => {
  const shoe = new Shoes(req.body);
  shoe.save()
  .then(result => {
    console.log(result)
    res.status(200).json(
      {
        message: "Shoe successfully added to database",
        addedShoe: result
      }
    );
  })
  .catch(err => {
    console.error(err)
    res.status(500).json({
      error: err
    });
  })
});

 //delete Sneakers
router.delete('/deleteSneaker/:id', async (req,res) => {
 Shoes.deleteOne({_id: req.params.id}).then(result => {
  console.log(result);
  res.status(200).send({
  message: "Shoe with id = " + req.params.id + " deleted"});
})
.catch(error => 
  {
    res.status(400).send(error)
  })
});


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
