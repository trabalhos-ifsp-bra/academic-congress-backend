const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const TalkSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  ordem: {
    type: Number,
  },
  sala: {
    type: String,
  },
  article: {
    type: ObjectId,
    ref: 'Article',
  },
}, {
  autoCreate: true,
});


const Talk = mongoose.model('talks', TalkSchema);

module.exports = Talk;
