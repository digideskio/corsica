// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
// Acess levels:
// student : can add/remove themselves from a waitlist
// advisor : can modify students on the list
// scheduler : can hide/unhide waitlist
// admin
var userSchema = mongoose.Schema({

    local            : {
        email           : String,
        password        : String,
        firstName       : String,
        lastName        : String,
        phoneNumber     : String,
        subscribed      : {type: Array, default: Array},
        textPreference  : {type: Boolean, default: false},
        access          : {type: String, default: "student"}
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
