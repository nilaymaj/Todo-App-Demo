const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();

app.use(cookieParser());
app.use(bodyParser());

app.use('/users', require('./routes/users.js'));
app.use('/notes', require('./routes/notes.js'));

const DB_URL = 'mongodb://localhost:27017/todo-app';
const PORT = 8000;

mongoose
  .connect(DB_URL, {useNewUrlParser: true, useCreateIndex: true})
  .then(() => console.log('Connected to DB'))
  .catch(() => {
    console.log('DB connection FAILED');
    process.exit(1);
})

app.listen(PORT, () => console.log(`Live at port ${PORT}`));
