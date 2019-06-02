const Article = require('../models/Article.model');
const ArticleStatuses = require('../constants/ArticleStatuses.constants');

const verifyStatus = article => {
  const isAccepted = article.evaluators.every(evaluator => evaluator.accepted);
  if (isAccepted) {
    return ArticleStatuses.accepted;
  }

  const isRefused = article.evaluators.every(evaluator => !evaluator.accepted);
  if (isRefused) {
    return ArticleStatuses.refused;
  }

  const someRefused = article.evaluators.some(evaluator => !evaluator.accepted);
  const someAccepted = article.evaluators.some(evaluator => evaluator.accepted);
  if (someAccepted && someRefused) {
    return ArticleStatuses.anal;
  }

  return ArticleStatuses.pending;
};

module.exports.createArticle = async article => {
  try {
    return await Article.create(article);
  } catch (error) {
    throw error;
  }
};

module.exports.get = async id => {
  try {
    return await Article.findById(id);
  } catch (error) {
    throw error;
  }
};

module.exports.getAll = async () => {
  try {
    return await Article.find({});
  } catch (error) {
    throw error;
  }
};

module.exports.updateOne = async (id, article) => {
  try {
    return await Article.findByIdAndUpdate(id, article);
  } catch (error) {
    throw error;
  }
};

module.exports.addEvaluation = async (id, evaluation) => {
  try {
    const article = await Article.findById(id);

    if (!article) {
      throw new Error({ message: 'Article not found.' });
    }

    if (article.evaluators) {
      article.evaluators.push(evaluation);
    } else {
      article.evaluators = [evaluation];
    }

    article.status = verifyStatus(article);

    article.save();
    return article;
  } catch (error) {
    throw error;
  }
};

module.exports.getAllByStatus = async status => {
  try {
    return await Article.find({ status });
  } catch (error) {
    throw error;
  }
};
