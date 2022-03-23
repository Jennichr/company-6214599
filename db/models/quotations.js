//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var QuotationSchema = new Schema({
  product: String,
  price: Number,
  quantity: Number
});

//Export function to create "QuotationSchema" model class
module.exports = mongoose.model('Quotation', QuotationSchema );

//J