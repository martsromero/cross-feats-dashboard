var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// See http://mongoosejs.com/docs/schematypes.html

var prSchema = new Schema({
	lift: String,
	record: Number,
	notes: [String],
	imageUrl: String,
	dateAdded : { type: Date, default: Date.now }
})

// export 'Person' model so we can interact with it in other files
module.exports = mongoose.model('Pr',prSchema);