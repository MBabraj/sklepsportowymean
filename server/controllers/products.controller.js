var config = require('config.json');
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Product = require('../models/Product');

// routes

router.get('/', getAll);
router.get('/:productId', getOne);

module.exports = router;

function getAll(req, res) {
    Product.find(function(err, docs) {
		return res.json(docs);
	});	
}

function getOne(req, res) {
	Product.findOne({_id: req.params.productId}, function(err, product) {
		return res.json(docs);
	});	

}
