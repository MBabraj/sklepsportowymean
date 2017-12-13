var config = require('config.json');
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Order = require('../models/Order');
var User = require('../models/User');

// routes

router.get('/', getAll);
router.post('/process/:orderId', process);

module.exports = router;

function getAll(req, res) {
    if (req.user._doc.admin) {
        Order.find({}).deepPopulate('products.product').exec(function(err, orders) {
            return res.json(orders);
        });
    } else {
        User.findOne({username: req.user._doc.username}, function(err, user) {
            Order.find({user: user._id}).deepPopulate('products.product').exec(function(err, orders) {
                return res.json(orders);
            });
        });
    }
}

function process(req, res) {
    if (!req.user._doc.admin) {
        return res.json({success: false});
    } else {
        Order.findOne({_id: req.params.orderId}, function(err, order) {
            order.processed = req.body.processed;
            order.save(function(err, newOrder) {
                if (err) {
                    return res.json({success: false});
                } 
                return res.json(newOrder);
            })
        });
    }
}