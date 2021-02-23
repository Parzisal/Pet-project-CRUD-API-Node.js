const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const authRoutes = require('./routes/auth.routes')
const bookRoutes = require('./routes/books.routes')

app.use(morgan('dev'));
app.use(cors());

// to decode req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/book', bookRoutes);

module.exports = app;
