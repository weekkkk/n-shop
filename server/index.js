require('dotenv').config();
const express = require('express');
const expressWs = require('express-ws');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const authRouter = require('./router/auth-router');
const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 5000;

const app = express();
const wsInstance = expressWs(app);

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use('/authorization', authRouter);
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
