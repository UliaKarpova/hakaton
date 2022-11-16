const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // импорт CORS
const routes = require('./routes/getGeoData')

const { PORT = 3500 } = process.env;
mongoose.connect('mongodb://localhost:27017/atlasdb');

const server = express();
// включаю корс
server.use(cors());
// подключаю парсеры
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(routes);

server.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
