const mongoose = require('mongoose');


const dangerOrAnotherSchema = new mongoose.Schema({
	"Округ": String,
  "Кадастровый номер": String,
  "Самовольные постройки": String,
  "Несоответствие ВРИ": String,
  "Аварийные постройки": String
}, { versionKey: false });

module.exports = mongoose.model('dangerOrAnother', dangerOrAnotherSchema);