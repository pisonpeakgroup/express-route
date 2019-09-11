const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    clinicalNote: {
        type: String
    },
    procedure: {
        type: String
    },
    labTest: {
        type: String
    },
    diagnosis: {
        type: String,
        unique: true,
        required: true
    },
    medication: {
        type: String
    }
}, {
    timestamp: true
});


const HappModel = mongoose.model('User', userSchema);

module.exports = HappModel;
