//load required packages
var mongoose = require('mongoose');

//Define our beer schema
var BeerSchema = new mongoose.Schema({
	name: String,
	type: String,
	quantity: Number,
	port: Number,
	userId: String
});

module.exports = mongoose.model('Beer', BeerSchema);