require('dotenv').config();
const express = require('express');
const expressFileupload = require('express-fileupload');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./router');
const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(expressFileupload({}));
app.use(cookieParser());
var whitelist = [
  undefined,
  'http://localhost:3000',
  'http://localhost:3100',
  'http://localhost:3200',
  'http://localhost:3300',
  'http://localhost:8080',
];
app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      console.log(origin);
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(
      process.env.DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Serve port ${PORT}`));
      }
    );
  } catch (e) {
    console.log(e);
  }
};

start();
