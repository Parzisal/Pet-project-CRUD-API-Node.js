const Book = require('../models/book');

module.exports.getAll = async function(req, res) {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch {

  }
}

module.exports.create = async function(req, res) {
  const book = new Book({
    name: req.body.name,
    description: req.body.description,
    cost: req.body.cost,
  });

  try {
    await book.save();
    res.status(201).json(book);
  } catch(error) {
    res.status(401).json({
      message: 'Error adding'
    })
  }
}

module.exports.updateById = async function(req, res) {
  const updated = {
    name: req.body.name,
    description: req.body.description,
    cost: req.body.cost
  };

  try {
    const book = await Book.findOneAndUpdate(
      { _id: req.params.id },
      { $set: updated },
      { new: true }
    )
    res.status(200).json(book)
  } catch {

  }
}

module.exports.removeById = async function(req, res) {
  try {
    await Book.remove({ _id: req.params.id })
    res.status(200).json({
      message: 'The entry has been deleted'
    });
  } catch {

  }
}

module.exports.getById = async function(req, res) {
  try {
    const book = await Book.findById(req.params.id);
    console.log(book)
    res.status(200).json(book);
  } catch {
    res.status(401).json({
      
    })
  }
}
