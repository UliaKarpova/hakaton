const mongoose = require('mongoose');

const sZoneSchema = new mongoose.Schema({
	geometry: {
		type: {
			type: String,
			enum: ['Polygon', 'MultiPolygon'] // 'geometry.type' must be 'Polygon' or 'MultiPolygon'
		},
		coordinates: {
			type: [[[Number]]], // Array of arrays of arrays of numbers
			required: true
		}
	}
}, { versionKey: false });

module.exports = mongoose.model('szone', sZoneSchema);