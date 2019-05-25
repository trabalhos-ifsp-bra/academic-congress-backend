const mongoose = require('mongoose');
const router = require('express').Router();

router.post('/', async (req, res) => {
  try {
    // TODO: create one
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // TODO: get one
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.get('/all', async (req, res) => {
  try {
    // TODO: get all
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post('/:id', async (req, res) => {
  try {
    // TODO: update one
  } catch (error) {
    return res.status(400).json(error);
  }
});

// FIXME: verificar melhor verbo
router.get('/:id', async (req, res) => {
  try {
    // TODO: remove one
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = app => app.use('/talks', router);
