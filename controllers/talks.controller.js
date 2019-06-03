const Talk = require('../models/Talk.model');

module.exports.create = async talk => {
  try {
    if (!talk) {
      throw { message: 'A Talk must be passed.' };
    }
    return await Talk.create(talk);
  } catch (error) {
    throw error;
  }
};

module.exports.get = async id => {
  try {
    return await Talk.findById(id);
  } catch (error) {
    throw error;
  }
};

module.exports.getAll = async () => {
  try {
    return await Talk.find({});
  } catch (error) {
    throw error;
  }
};

module.exports.getByDate = async date => {
  try {
    if (!date) {
      throw { message: 'A date must be passed.' };
    }

    return await Talk.find({ date: { $eq: date } });
  } catch (error) {
    throw error;
  }
};
