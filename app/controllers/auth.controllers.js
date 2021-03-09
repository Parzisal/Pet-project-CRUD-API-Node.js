const jwt = require('jsonwebtoken');
const User = require('../models/user');
const tokenConfig = require('../config/jsonwebtoken');
const errorHandler = require('../utils/errorHandler');

module.exports.login = async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne(({ email }))

  if (user) {
    if (user.password === password) {
      const token = jwt.sign({
        userId: user._id,
        email: user.email,
      }, tokenConfig.secretKey, { expiresIn: tokenConfig.expiresTime });

      res.status(200).json({
        token: `Bearer ${token}`,
      })
    } else {
      errorHandler(res, 'Invalid password. Please try again', 401);
    }
  } else {
    errorHandler(res, 'User is not found', 404);
  }
}

module.exports.register = async function (req, res) {
  const email = req.body.email;
  const user = await User.findOne({ email });

  if (user) {
    errorHandler(res, 'Such mail is already registered', 409);
  } else {
    const user = new User({
      email: req.body.email,
      password: req.body.password,
    });

    try {
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      errorHandler(res, error, 401);
    }
  }
}
