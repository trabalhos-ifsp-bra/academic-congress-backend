const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const CongressSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    theme: {
        type: String,
        required: true
    }
});


const Congress = mongoose.model('Congress', TalkSchema);

module.exports = Congress;
