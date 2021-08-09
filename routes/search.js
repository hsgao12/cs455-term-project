const express = require('express');
const router = express.Router();
const shoe = require('../models/shoe');
/* GET users listing. */

router.get('/autocomplete', async (req, res) => {
  try {
    let result = await shoe.aggregate([
      {
        $search: {
          index: 'default',
          autocomplete: { path: 'name', query: req.query.term, fuzzy: {maxEdits: 1}},
        },
      },
      {
        $project: { _id: 1, name: 1 },
      },
      {
        $limit: 10,
      },
    ]);
    console.log(result);
    res.status(200).json({ result: result });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
});

router.get('/:query', async (req, res, next) => {
  const query = req.params.query;
  //const filters = JSON.parse(req.params.filters);
  try {
    res.json(
      await shoe.find({ name: { $regex: `${query}`, $options: 'i' } }).limit(20)
    );
  } catch (e) {
    res.json([]);
  }
});

router.get('/', async (req, res, next) => {
  try {
    res.json(await shoe.find({}).limit(20));
  } catch (e) {}
});

module.exports = router;
