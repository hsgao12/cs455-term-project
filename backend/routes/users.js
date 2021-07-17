const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/addUser', async (req, res) => {
  const { email, id, firstName, lastName } = req.body;
  const user = new User({
    email: email,
    id: id,
    firstName: firstName,
    lastName: lastName,
  });

  try {
    await user.save();
    res.send({ message: 'user added!' });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
});

router.get('/getUser/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ id: id });
    console.log(user);
    res.status(200).send({ user: user});
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
});

router.put('/setUserAddress/:id', async (req, res) => {
  const id = req.params.id; 
  const {address, city, country} = req.body; 
  try  {
    await User.updateOne({id: id}, {address: address, city: city, country: country}); 
    const user = await User.findOne({id: id});
    res.status(200).json({user: user});
  } catch (err) {
    res.status(404).json({error: err.message});
  }
})
module.exports = router;
