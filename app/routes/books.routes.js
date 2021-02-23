const express = require('express');
const router = express.Router();

const controller = require('./../controllers/books.controllers')

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.post('/:id', controller.updateById);
router.delete('/:id', controller.removeById);

module.exports = router;
