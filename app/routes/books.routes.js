const express = require('express');
const passport = require('passport');
const router = express.Router();

const controller = require('./../controllers/books.controllers')

router.get('/', passport.authenticate('jwt', { session: false }) ,controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.patch('/:id', controller.updateById);
router.delete('/:id', controller.removeById);

module.exports = router;
