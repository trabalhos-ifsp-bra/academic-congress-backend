const User = require('../models/User.model');

module.exports.getUserById = async userId => {
  try {
    return await User.findById({ _id: userId }, '-password');
  } catch (error) {
    throw error;
  }
};

module.exports.getAll = async () => {
  try {
    return await User.find({});
  } catch (error) {
    throw error;
  }
};

module.exports.getUserByEmail = async email => {
  try {
    return await User.findOne({ email }, '-password');
  } catch (error) {
    throw error;
  }
};

module.exports.createUser = async user => {
  try {
    const {
      username,
      email,
      password,
      permission,
    } = user;

    return await User.create({
      username,
      email,
      password,
      permission,
    });
  } catch (error) {
    throw error;
  }
};

module.exports.updateUser = async (id, user) => {
  try {
    const {
      username,
      password,
      email,
      permission,
    } = user;

    return await User.findByIdAndUpdate(id, {
      username,
      password,
      email,
      permission,
    },
    {
      select: '-password',
      omitUndefined: true,
    });
  } catch (error) {
    throw error;
  }
};

module.exports.removeUser = async userId => {
  try {
    return await User.deleteOne({ _id: userId });
  } catch (error) {
    throw error;
  }
};

module.exports.login = async (email, password) => {
  // validate both
  try {
    const message = 'Email ou senha inválidos.';
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error(message);
    }

    const isCorrect = await user.comparePassword(password);

    if (!isCorrect) {
      throw new Error(message);
    }

    return user;
  } catch (error) {
    throw error;
  }
};
