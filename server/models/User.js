let mongoose = require('mongoose');
let bcrypt = require('bcrypt');
let Schema = mongoose.Schema;
let productSchema = require('./Product');

// Schema defines how the user data will be stored in MongoDB
var UserSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  admin: Boolean
});

// Hash the user's password before inserting a new user
UserSchema.pre('save', function(next) {
  var user = this;
  console.log(user);
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

// Compare password input to password saved in database
UserSchema.methods.comparePassword = function(pw, cb) {
  bcrypt.compare(pw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

// Export the model
module.exports = mongoose.model('User', UserSchema);