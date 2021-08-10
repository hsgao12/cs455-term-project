var express = require('express');
const { Mongoose, Types } = require('mongoose');
var router = express.Router();
const Shoes = require('../models/shoe');
const SellerItem = require('../models/SellerItem');
const UserBilling = require('../models/UserBilling');
const PopularSneakers = require('../models/popularSneakers');
const shoesViewed = require('../models/ShoeView');

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

//update shoes stock
router.patch('/updateShoesStockAdd', async (req, res) => {
  const shoes = req.body;
  //update stock
  Shoes.updateOne(
    { _id: shoes.sneakerId, 'stock.size': shoes.size },
    { $inc: { 'stock.$.quantity': 1 } }
  )
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update stock with id=${shoes.id}. Something Wrong!`,
        });
      } else res.send({ message: 'Stock Item was updated successfully.' });
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Stock with id=' + shoes.id,
      });
    });
});

//update shoes stock
router.patch('/updateShoesStockDec', async (req, res) => {
  const shoes = req.body;
  let flag = false;

  Shoes.findOne({ _id: shoes.sneakerId })
    .then((result) => {
      result.stock.forEach((item) => {
        if ((item.size = shoes.size && item.quantity == 0)) flag = true;
      });
    })
    .catch((error) => {
      res.status(400).send(error);
    });
  if (flag) {
    console.log('stock is already 0');
    return;
  }

  //update stock
  Shoes.updateOne(
    { _id: shoes.sneakerId, 'stock.size': shoes.size },
    { $inc: { 'stock.$.quantity': -1 } }
  )
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update stock with id=${shoes.id}. Something Wrong!`,
        });
      } else res.send({ message: 'Stock Item was updated successfully.' });
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Stock with id=' + shoes.id,
      });
    });
});

//Post request to add a UserBilling
router.post('/addUserBilling', async (req, res) => {
  console.log('called with');
  console.log(req.body);

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

router.get('/getUserBilling/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const billing = await UserBilling.findOne({ userId: id });
    res.status(200).json({ billing: billing });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

//Post request to add a SellerItem
router.post('/addNewSellerItem', async (req, res) => {
  const sellerItem = new SellerItem(req.body);
  sellerItem
    .save()
    .then((result) => {
      let id = result._id;
      console.log(id);
      res.status(200).send(id);
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
  SellerItem.find(
    { sneakerId: req.params.id, sold: false },
    { price: 1, size: 1, _id: 0 }
  )
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
      message: 'Data to update can not be empty!',
    });
  }
  const id = req.params.id;
  const size = req.params.size;
  const price = req.params.price;
  console.log(size);
  SellerItem.findOneAndUpdate(
    { sneakerId: id, price: price, size: size },
    req.body,
    { useFindAndModify: false }
  )
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update SelerItem with id=${id}. Maybe SellerItem was not found!`,
        });
      } else res.send(data._id);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Selleritem with id=' + id,
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
  Shoes.find({
    $or: [{ brand: req.params.query }, { name: { $regex: req.params.query } }],
  })
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

router.get('/searchShoes/', async (req, res) => {
  Shoes.find()
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

router.get('/buyHistory/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const items = await SellerItem.find({ sold: true, buyerId: id });
    if (items.length === 0) {
      res.json([]);
    } else {
      const item_ids = items.map((a) => Types.ObjectId(a.sneakerId));
      let shoesBought = {};
      const shoesBoughtList = await Shoes.find({
        _id: { $in: item_ids },
      }).lean();
      for (const shoeBought of shoesBoughtList) {
        shoesBought[shoeBought._id.toString()] = shoeBought;
      }

      const returnVal = items.map((a) => ({
        ...shoesBought[a.sneakerId],
        price: a.price,
      }));
      res.json(returnVal);
    }
  } catch (e) {}
});

router.get('/sellHistory/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const items = await SellerItem.find({ sold: true, sellerId: id });
    if (items.length === 0) {
      res.json([]);
    } else {
      const item_ids = items.map((a) => Types.ObjectId(a.sneakerId));
      let shoesBought = {};
      const shoesBoughtList = await Shoes.find({
        _id: { $in: item_ids },
      }).lean();
      for (const shoeBought of shoesBoughtList) {
        shoesBought[shoeBought._id.toString()] = shoeBought;
      }

      const returnVal = items.map((a) => ({
        ...shoesBought[a.sneakerId],
        price: a.price,
      }));
      res.json(returnVal);
    }
  } catch (e) {}
});

router.get('/popularListings', async (req, res, next) => {
  try {
    const items = await PopularSneakers.find({});
    res.json(
      await Shoes.find({
        _id: { $in: items.map((a) => Types.ObjectId(a.sneakerId)) },
      })
    );
  } catch (e) {}
});

function partition(array, lower, upper, pred) {
  let partitionPoint = lower;
  for (let i = lower; i < upper; ++i) {
    if (pred(array[i])) {
      const temp = array[partitionPoint];
      array[partitionPoint] = array[i];
      array[i] = temp;
      ++partitionPoint;
      //[array[partitionPoint],array[i]] = [array[i],array[partitionPoint]];
    }
  }
  return partitionPoint;
}

function fakeSort(array, idx, fn) {
  //console.log("a");
  if (idx >= array.length) {
    return array.sort(fn);
  }
  let lower = 0;
  let upper = array.length;
  //console.log("b");

  const nextItemToCheck = () => {
    if (upper - lower > 1) {
      const middleItem = array[(lower + upper) / 2];
      const firstItem = array[lower];
      const lastItem = array[upper - 1];
      return [firstItem, middleItem, lastItem].sort(fn)[1];
    } else {
      return array[upper - 1];
    }
  };

  //for loop to make sure the loop doesn't run forever
  for (let i = 0; i < array.length; ++i) {
    //console.log(`${lower} ${upper}`);
    //const middle = (lower + upper) / 2;
    const itemInCurrentIter = nextItemToCheck();
    const partitionPoint = partition(
      array,
      lower,
      upper,
      (a) => fn(a, itemInCurrentIter) < 0
    );
    const partitionPoint2 = partition(
      array,
      partitionPoint,
      upper,
      (a) => fn(a, itemInCurrentIter) === 0
    );
    if (partitionPoint <= idx && partitionPoint2 > idx) {
      return array;
    }

    if (partitionPoint > idx) {
      upper = partitionPoint;
    }
    if (partitionPoint < idx) {
      lower = partitionPoint2;
    }
  }
  //sort only part of the array
  let subArray = array.slice(lower, upper);
  subArray.sort(fn);
  for (let i = 0; i < subArray.length; ++i) {
    array[i + lower] = subArray[i];
  }

  return array;
}

router.post('/recalculatePopularListings', async (req, res, next) => {
  try {
    const shoeStuff = {};
    const currentDate = new Date();
    const allShoesViewed = await shoesViewed.find({
      lastViewed: { $gt: new Date(currentDate.getTime() - 86400000 * 7) }, //1 week before today
    });
    for (const shoesViewed of allShoesViewed) {
      const shoesViewedByPerson = {};
      //shoeStuff[shoeId] = (shoeStuff[shoeId] ?? 0) + 1;
      for (const shoeId of shoesViewed.items) {
        shoesViewedByPerson[shoeId] = (shoesViewedByPerson[shoeId] ?? 0) + 1;
      }
      for (const [shoeId, amountOfViews] of Object.entries(
        shoesViewedByPerson
      )) {
        shoeStuff[shoeId] = (shoeStuff[shoeId] ?? 0) + Math.sqrt(amountOfViews);
      }
    }
    let allShoes = Object.keys(shoeStuff);
    //const sortedShoes = allShoes.sort((a, b) => shoeStuff[b] - shoeStuff[a]);
    const sortedShoes = fakeSort(
      allShoes,
      30,
      (a, b) => shoeStuff[b] - shoeStuff[a]
    ).slice(0, 30);
    await PopularSneakers.deleteMany({});
    await PopularSneakers.insertMany(
      sortedShoes.map((sneakerId) => ({ sneakerId }))
    );
    //console.log(shoeStuff);
    //console.log(sortedShoes.map((a)=>({a,b:shoeStuff[a]})));
    res.json({});
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
