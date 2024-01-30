const mongoose =  require('mongoose')

const userSchema = new mongoose.Schema({
    Username:{
        type: String,
        required: true,
        trim: true
    },
    Password:{
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true,
    versionKey: false
});

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;