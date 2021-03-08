const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const authRoutes = require('./routes/auth.routes')
const bookRoutes = require('./routes/books.routes')
const configDB = require('./config/db');

mongoose.connect(configDB.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('db connection is success')
  })
  .catch(err => console.log(err));

app.use(morgan('dev'));
app.use(cors());

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/book', bookRoutes);

module.exports = app;
