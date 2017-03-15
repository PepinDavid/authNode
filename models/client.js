var mongoose = require('mongoose');

var ClientSchema = new mongoose.Schema({
	name: {type: String, unique: true, required: true}, //name App client
	id: {type: String, required: true}, //used by oAuth2
	secret: {type: String, required: true}, //used by oAuth2
	userId: {type: String, required: true},
});

module.exports = mongoose.model('Client', ClientSchema);