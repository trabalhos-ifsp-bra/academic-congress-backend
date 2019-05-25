const router = require('express').Router();
const Article = require('../controllers/articles.controller');
const ArticleStatuses = require('../constants/ArticleStatuses.constants');

// Create an article entry
router.post('/', async (req, res) => {
  try {
    const { article } = req.body;
    const newArticle = await Article.create(article);

    return res.status(201).json(newArticle);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.get(id);

    return res.status(200).json(article);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.get('/all', async (req, res) => {
  try {
    const allArticles = await Article.getAll();

    return res.status(200).json(allArticles);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.get('/all/accepted', async (_, res) => {
  try {
    const accepteds = await Article.getAllByStatus(ArticleStatuses.accepted);

    return res.status(200).json(accepteds);
  } catch (error) {
    throw error;
  }
});

router.get('/all/refused', async (_, res) => {
  try {
    const refuseds = await Article.getAllByStatus(ArticleStatuses.refused);

    return res.status(200).json(refuseds);
  } catch (error) {
    throw error;
  }
});

router.get('/all/pending', async (_, res) => {
  try {
    const pending = await Article.getAllByStatus(ArticleStatuses.pending);

    return res.status(200).json(pending);
  } catch (error) {
    throw error;
  }
});

router.get('/all/anal', async (_, res) => {
  try {
    const anals = await Article.getAllByStatus(ArticleStatuses.anal);

    return res.status(200).json(anals);
  } catch (error) {
    throw error;
  }
});

// FIXME: verificar melhor verbo
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Article.remove(id);

    return res.status(200).json(deleted);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = app => app.use('/articles', router);
