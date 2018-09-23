const mongoose = require('mongoose');
var Schema = mongoose.Schema;

let issueSchema = new Schema({
	title: {
		type: String
	},
	responsible: {
		type: String
	},
	description: {
		type: String
	},
	severity: {
		type: String
	},
	status: {
		type: String,
		default: 'Open'
	}
});


module.exports = mongoose.model('Issue', issueSchema);