const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false,
    default: ''
  },
  cost: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('books', bookSchema);