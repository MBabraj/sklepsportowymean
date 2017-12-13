var config = require('config.json');
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User = require('../models/User');

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);

module.exports = router;

function authenticate(req, res) {
    User.findOne({
        username: req.body.username
      }, function(err, user) {
        if (err) throw err;
    
        if (!user) {
          res.send({
            success: false,
            message: 'Authentication failed. User not found.'
          });
        } else {
          // Check if password matches
          user.comparePassword(req.body.password, function(err, isMatch) {
            if (isMatch && !err) {
              // Create token if the password matched and no error was thrown
              var token = jwt.sign(user, config.secret, {
                expiresIn: "2 days"
              });
              res.json({
                success: true,
                message: 'Authentication successfull',
                token
              });
            } else {
              res.send({
                success: false,
                message: 'Authentication failed. Passwords did not match.'
              });
            }
          });
        }
      });
}

function register(req, res) {
    if (!req.body.username || !req.body.password) {
        res.json({
          success: false,
          message: 'Please enter name, username and password.'
        });
      } else {
        let newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          firstName: req.body.firstName,
          lastName: req.body.lastName
        });
    
        // Attempt to save the user
        newUser.save(function(err) {
          if (err) {
            console.log(err);
            return res.json({
              success: false,
              message: 'That username address already exists.'
            });
          }
          res.json({
            success: true,
            message: 'Successfully created new user.'
          });
        });
    }
}

function getAll(req, res) {
    User.find({}, function(err, users) {
        res.json(users);
    });
}
