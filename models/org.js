const mongoose = require('mongoose');

const orgSchema = new mongoose.Schema({
	geometry: {
		type: {
			type: String,
			enum: ['Point'] // 'geometry.type' must be 'Point'
		},
		coordinates: {
			type: [Number], // Array of arrays of arrays of numbers
			required: true
		}
	}
}, { versionKey: false });

module.exports = mongoose.model('org', orgSchema);