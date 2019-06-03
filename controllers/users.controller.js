const bcrypt = require('bcrypt');
const User = require('../models/User.model');
const { isValidEmail, isValidPassword } = require('../utils/validators');

const encryptPassword = async password => {
  bcrypt.genSalt(666, function (err, salt) {
    bcrypt.hash(password, salt, function (error, hash) {
      return hash;
    });
  });
}

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

    console.log('---------');
    const foo = await encryptPassword('teste123');
    const bar = await encryptPassword('teste123');
    console.log('foo');
    console.log(foo);
    console.log('bar');
    console.log(bar);

    if (!updatedUser) {
      throw { message: 'User not found.' };
    }

    if (password) {
      if (!isValidPassword(password)) {
        throw { message: 'Invalid password.' };
      }

      password = await encryptPassword(password);
    }

    if (email) {
      if (!isValidEmail(email)) {
          throw { message: 'Invalid email.' };
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
    const user = await User.findOne({ email });

    if (!user) {
      console.log('111');
      throw { message: 'Email ou senha inválidos.' };
    }

    const isCorrect = bcrypt.compare(password, user.password, (err, res) => res);

    if (!isCorrect) {
      console.log('118');
      console.log(encryptedPassword);
      console.log(user.password);
      throw { message: 'Email ou senha inválidos.' };
    }

    return user;
  } catch (error) {
    throw error;
  }
};
