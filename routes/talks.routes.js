const router = require('express').Router();
const Talks = require('../controllers/talks.controller');

router.post('/', async (req, res) => {
  try {
    const { talk } = req.body;
    const newTalk = await Talks.create(talk);

    return res.status(201).json(newTalk);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.get('/talk/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const talk = await Talks.get(id);

    return res.status(200).json(talk);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.get('/all', async (req, res) => {
  try {
    const talks = await Talks.getAll();

    return res.status(200).json(talks);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.get('/all/:date', async (req, res) => {
  try {
    const { date } = req.params;
    const talks = await Talks.getByDate(date);

    return res.status(200).json(talks);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = app => app.use('/talks', router);
