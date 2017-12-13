let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);

// Schema defines how the user data will be stored in MongoDB
var CartSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  products: [{
      amount: Number,
      product: { type: Schema.Types.ObjectId, ref: 'Product' }
  }]
});

CartSchema.plugin(deepPopulate);


// Export the model
module.exports = mongoose.model('Cart', CartSchema);