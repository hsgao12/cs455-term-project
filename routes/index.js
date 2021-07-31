var express = require('express');
const { Mongoose } = require('mongoose');
var router = express.Router();
const Shoes = require('../models/shoe');
const SellerItem = require('../models/SellerItem');
const UserBilling = require('../models/UserBilling');

//Post request to add a sneaker for sale
router.post('/addNewSneaker', async (req, res) => {
  const shoe = new Shoes(req.body);
  shoe
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: 'Shoe successfully added to database',
        addedShoe: result,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    });
});

//Post request to add a UserBilling
router.post('/addUserBilling', async (req, res) => {
  console.log("called with")
  console.log(req.body)

  const userBilling = new UserBilling(req.body);
  userBilling
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: 'User billing successfully added to database',
        billing: result,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    });
});

//Post request to add a SellerItem
router.post('/addNewSellerItem', async (req, res) => {
  const sellerItem = new SellerItem(req.body);
  sellerItem
    .save()
    .then((result) => {
      let id = result._id;
      console.log(id);
      res.status(200).send(
        id);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    });
});
//Query SellerItem to get list of sneaker price and size from SneakerId 
router.get('/getSizeAndPrice/:id', async (req, res) => {
  SellerItem.find({sneakerId: req.params.id }, { price: 1, size: 1, _id:0 })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

//update sellerItem collection with buyer id and sold flag
router.put('/updateSellerItem/:id/:size/:price', async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  const size = req.params.size;
  const price = req.params.price;
  console.log(size)
  SellerItem.findOneAndUpdate({"sneakerId": id,"price": price, "size": size},
     req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update SelerItem with id=${id}. Maybe SellerItem was not found!`
        });
      } else res.send(data._id);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Selleritem with id=" + id
      });
    });
});
//delete Sneakers
router.delete('/deleteSneaker/:id', async (req, res) => {
  Shoes.deleteOne({ _id: req.params.id })
    .then((result) => {
      console.log(result);
      res.status(200).send({
        message: 'Shoe with id = ' + req.params.id + ' deleted',
      });
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

//Get request to get list of sneaker for sale
router.get('/getShoes', async (req, res) => {
  Shoes.find()
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

//Get request to get popular list of sneaker
router.get('/getPopularShoes', async (req, res) => {
  Shoes.find({ numberOfSale: { $gt: 2000 } })
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

//Get request to get specific brand of shoes
router.get('/getShoes/:brand', async (req, res) => {
  Shoes.find({ brand: req.params.brand })
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

//Get request to get shoes by query
router.get('/searchShoes/:query', async (req, res) => {
    Shoes.find({ $or: [{ brand: req.params.query }, {name: {$regex : req.params.query}}]} )
        .exec()
        .then((docs) => {
            res.status(200).json(docs);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        });
});

// Get Sneaker against given sneaker id
router.get('/sneaker/:id', async (req, res) => {
  Shoes.findOne({ _id: req.params.id })
    .then((result) => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

module.exports = router;
