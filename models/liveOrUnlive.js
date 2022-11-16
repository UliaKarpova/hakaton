const mongoose = require('mongoose');


const liveOrUnliveSchema = new mongoose.Schema({
	"Кадастровый номер": String,
	"Адрес": String,
	"Площадь кв.м": Number,
	"Жилое/нежилое": String,
	"Год постройки": Number,
	"Материал стен": String,
	"Аварийность": String,
	"Типовой проект": String
}, { versionKey: false });

module.exports = mongoose.model('liveOrUnlive', liveOrUnliveSchema);