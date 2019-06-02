const bcrypt = require('bcrypt');
const User = require('../models/User.model');
const { isValidEmail, isValidPassword } = require('../utils/validators');

const encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

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
    let { password } = user;
    const {
      username,
      email,
      permission,
    } = user;
    const updatedUser = await User.findById(id);

    if (!updatedUser) {
      throw new Error({ message: `User ${id} not found.` });
    }

    if (password) {
      if (!isValidPassword(password)) {
        throw new Error({ message: 'Invalid email.' });
      }

      password = await encryptPassword(password);
    }

    if (email) {
      if (!isValidEmail(email)) {
        throw new Error({ message: 'Invalid email.' });
      }
    }

    updatedUser.username = username || updatedUser.username;
    updatedUser.email = email || updatedUser.email;
    updatedUser.password = password || updatedUser.password;
    updatedUser.permission = permission || updatedUser.permission;

    await updatedUser.save();
    delete updatedUser.password;
    return updatedUser;
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
