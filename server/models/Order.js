let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);

// Schema defines how the user data will be stored in MongoDB
var OrderSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  products: [{
      amount: Number,
      product: { type: Schema.Types.ObjectId, ref: 'Product' }
  }],
  postAddress: String,
  processed: Boolean 
});

OrderSchema.plugin(deepPopulate);


// Export the model
module.exports = mongoose.model('Order', OrderSchema);