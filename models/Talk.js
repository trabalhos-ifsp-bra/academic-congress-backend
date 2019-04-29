const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const TalkSchema = new mongoose.Schema({
    dateTime: {type: Date, required: true},
    ordem: {type: Number},
    sala: {type: String},
    article: {type: ObjectId, ref: 'Article'}
})


const Talk = mongoose.model('Talk', TalkSchema);

module.exports = Talk;
