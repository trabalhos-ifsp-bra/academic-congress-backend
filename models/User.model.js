const bcrypt = require('bcrypt');
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  permission: {
    type: String,
  },
});


/**
* Password hash middleware.
*/
// eslint-disable-next-line consistent-return, func-names
UserSchema.pre('save', function (callback) {
  if (!this.isModified('password')) {
    return callback();
  }

  // eslint-disable-next-line consistent-return
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return callback(err);
    }

    // eslint-disable-next-line consistent-return
    bcrypt.hash(this.password, salt, (error, hash) => {
      if (error) {
        return callback(error);
      }

      this.password = hash;
      callback();
    });
  });
});

/**
* Helper method for validating user's password.
*/
// eslint-disable-next-line func-names
UserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('users', UserSchema);

module.exports = User;
