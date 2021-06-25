var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId; 
const uri = 'mongodb+srv://GKtest:GKtest@cluster0.cxexy.mongodb.net/SneakerTradingDB?retryWrites=true&w=majority'; 

const clientun = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//Post request to add a sneaker for sale
router.post('/addNewSneaker',async (req,res) => {
  const client = await clientun.connect();
  const collection = client.db("SneakerTradingAppDatabase").collection("SneakerForSale");
  collection.insertOne(req.body)
  .then(result => {
    console.log(result)
    res.status(200).send(result.insertedId)
  })
  .catch(error => 
    {
      res.status(400).send(error)
    })
})
//Get request to get list of sneaker for sale
router.get('/sneakerListingForSale',async (req,res) => {
  const client = await clientun.connect();
  const collection = client.db("SneakerTradingAppDatabase").collection("SneakerForSale");
  collection.find({}).toArray()
  .then(result => {
    console.log(result);
    res.status(200).send(result);
  })
  .catch(error => 
    {
      res.status(400).send(error)
    })
})
// Get Sneaker against given sneaker id
router.get('/sneaker/:id',async (req,res) => {
  const client = await clientun.connect();
  const collection = client.db("SneakerTradingAppDatabase").collection("SneakerForSale");
  collection.findOne({_id: ObjectId(req.params.id)})
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
