const mongoose = require('mongoose');
const ArticleStatuses = require('../constants/ArticleStatuses.constants');

const { ObjectId } = mongoose.Schema;

const ArticleSchema = mongoose.Schema({
  authors: [{
    fullname: {
      type: String,
      requred: true,
    },
    institution: {
      type: String,
      required: true,
    },
  }],
  title: {
    type: String,
    required: true,
  },
  abstract: {
    type: String,
    required: true,
  },
  submeter: {
    type: ObjectId,
    ref: 'User',
  },
  keywords: [{
    type: String,
    required: () => this.keywords.length < 5,
  }],
  status: {
    type: String,
    enum: Object.values(ArticleStatuses),
    default: ArticleStatuses.pending,
  },
  evaluators: [{
    evaluator: {
      type: ObjectId,
      ref: 'User',
    },
    accepted: {
      type: Boolean,
      required: true,
    },
  }],
  paper: {
    type: Buffer,
    required: true,
  },
});

ArticleSchema.pre('save', next => {
  if (this.evaluators.length !== 2) {
    return next();
  }

  const isAccepted = this.evaluators.every(evaluator => evaluator.accepted);
  if (isAccepted) {
    this.status = ArticleStatuses.accepted;
  }

  return next();
});

ArticleSchema.pre('save', next => {
  if (this.evaluators.length !== 2) {
    return next();
  }
  const isRefused = this.evaluators.every(evaluator => evaluator.refused);
  if (isRefused) {
    this.status = ArticleStatuses.refused;
  }
  return next();
});

const Article = mongoose.model('articles', ArticleSchema);

module.exports = Article;
