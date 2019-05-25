const Article = require('../models/Article.model');

module.exports.create = async article => {
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

module.exports.updateOne = async id => {
  const f = id;
  return f;
};


module.exports.addEvaluator = async (id, evaluator, accepted) => {
  try {
    return await Article.findByIdAndUpdate(id, {
      $push: {
        evaluators: {
          evaluator,
          accepted,
        },
      },
    },
    {
      new: true,
    });
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

module.exports.remove = async id => {
  try {
    return await Article.findByIdAndRemove(id);
  } catch (error) {
    throw error;
  }
};
