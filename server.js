const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // импорт CORS

const { PORT = 3500 } = process.env;
mongoose.connect('mongodb://localhost:27017/atlasdb');

const app = express();
// включаю корс
app.use(cors());
// подключаю парсеры
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
