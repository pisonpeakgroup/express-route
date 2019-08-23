const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    hashedPassword: {
        type: String
    }
}, {
    timestamp: true
});

userSchema.virtual('password').get(function () {
    return this.hashedPassword;
});

userSchema.virtual('password').set(function (plainText) {
    const salt = bcrypt.genSaltSync(10);
    this.hashedPassword = bcrypt.hashSync(plainText, salt);
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
