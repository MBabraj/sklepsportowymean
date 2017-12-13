var config = require('config.json');
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Cart = require('../models/Cart');
var User = require('../models/User');
var Order = require('../models/Order');

// routes

router.get('/', getCart);
router.put('/product/:productId', addToCart);
router.delete('/product/:productId', removeFromCart);
router.post('/confirm', confirm);

module.exports = router;

function myCart(req, res, callback) {
    User.findOne({username: req.user._doc.username}, function(err, user) {
        // console.log('user', user);
        Cart.findOne({user: user._id})
            .deepPopulate('products.product')
            .exec(function(err, cart) {
                if (cart) {
                    // console.log('cart', cart);
                    callback(cart);
                } else {
                    Cart.create({user: user._id, products: []}, function(err, cart){
                        callback(cart);
                    });
                }
            });
    });
}

function getCart(req, res) {
    myCart(req, res, function(cart){
        return res.json(cart);
    });
}

function addToCart(req, res) {
    var productToAdd = req.params.productId;
    myCart(req, res, function(cart){
        var product = cart.products.find(function(a) {
            return a.product._id == productToAdd
        });
        if (product) {
            var pos = cart.products.indexOf(product);
            product.amount += 1;
            cart.products[pos] = product;
        } else {
            cart.products = cart.products.concat({product: productToAdd, amount: 1});
        }
        cart.save(function(err, updatedCart) {
            Cart.findOne({_id: updatedCart._id}).deepPopulate('products.product').exec(function(err, cart){
                res.json(cart);
            });
        });
    })
}

function removeFromCart(req, res) {
    var productToRemove = req.params.productId;
    myCart(req, res, function(cart){
        var product = cart.products.find(function(a) {
            return a.product._id == productToRemove
        });
        if (product) {
            var pos = cart.products.indexOf(product);
            product.amount -= 1;
            if (product.amount <= 0) {
                cart.products.splice(pos, 1);
            } else {
                cart.products[pos] = product;
            }
        }
        cart.save(function(err, updatedCart) {
            Cart.findOne({_id: updatedCart._id}).deepPopulate('products.product').exec(function(err, cart){
                res.json(cart);
            });
        });
    })
}

function confirm(req, res) {
    if (!req.body.postAddress) {
        res.json({
          success: false,
          message: 'Please provide post address.'
        });
      } else {

        User.findOne({username: req.user._doc.username}, function(err, user) {
            Cart.findOne({user: user._id})
                .exec(function(err, cart) {
                    let order = new Order({
                        user: user._id,
                        products: cart.products,
                        postAddress: req.body.postAddress,
                        processed: false
                    });

                    // Attempt to save the order
                    order.save(function(err) {
                        if (err) {
                            return res.json({
                                success: false,
                                message: 'Error confirming order'
                            });
                        }
                        Cart.remove({_id: cart._id}, function (err){
                            if (err) {
                                return res.json({
                                    success: false,
                                    message: 'Error confirming order'
                                });
                            }
                            return res.json({
                                success: true,
                                message: 'Successfully made the order.'
                            });
                        })
                    });
                });
        });
    }
}