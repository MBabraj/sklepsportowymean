var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var ProductSchema = new Schema({
	imagePath: {type: String, required:true},
	title: {type: String, required:true},
	description: {type: String, required:true},
	price: {type: Number, required:true},
	//category: {type: String, required:true}
});

ProductSchema.plugin(deepPopulate);

module.exports = mongoose.model('Product', ProductSchema);
