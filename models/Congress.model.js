const mongoose = require('mongoose');

const CongressSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
});


const Congress = mongoose.model('congresses', CongressSchema);

module.exports = Congress;
