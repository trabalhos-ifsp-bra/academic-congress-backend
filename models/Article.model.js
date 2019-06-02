const mongoose = require('mongoose');
const ArticleStatuses = require('../constants/ArticleStatuses.constants');

const { ObjectId } = mongoose.Schema.Types;

const ArticleSchema = mongoose.Schema({
  authors: [{
    fullname: {
      type: String,
      required: true,
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
    ref: 'users',
  },
  keywords: {
    type: [String],
    required: true,
  },
  status: {
    type: String,
    enum: Object.values(ArticleStatuses),
    default: ArticleStatuses.pending,
  },
  evaluators: [{
    evaluator: {
      type: ObjectId,
      ref: 'users',
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
}, {
  autoCreate: true,
});

ArticleSchema.path('keywords').validate(keylist => keylist.length >= 5,
  'A list of 5 or more keyword are required.');

const Article = mongoose.model('articles', ArticleSchema);

module.exports = Article;
