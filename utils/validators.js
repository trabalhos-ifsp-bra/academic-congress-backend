module.exports.isValidPassword = password => {
  if (!password) {
    return false;
  }

  if (password.length < 8) {
    return false;
  }

  if (password.length > 32) {
    return false;
  }

  return true;
};

module.exports.isValidEmail = email => /^[a-z][a-z_0-9]*@([a-z]+.?)+[a-z]+$/.test(email);
