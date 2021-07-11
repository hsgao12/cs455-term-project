const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/addUser', async (req, res) => {
  const { email, id, createdAt } = req.body;
  const user = new User({
    email: email,
    id: id,
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
    res.status(200).send({ user: { email: user.email, id: user.id } });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
});
module.exports = router;
