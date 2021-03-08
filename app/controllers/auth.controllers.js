const User = require('../models/user');
const jwt = require('jsonwebtoken');
const tokenConfig = require('../config/jsonwebtoken');

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
      res.status(401).json({
        message: 'Invalid password. Please try again',
      })
    }
  } else {
    res.status(404).json({
      message: 'User is not found',
    });
  }
}

module.exports.register = async function(req, res) {
  const email = req.body.email;
  const user = await User.findOne({ email });

  if (user) {
    res.status(409).json({
      message: 'Such mail is already registered',
    });
  } else {
    const user = new User({
      email: req.body.email,
      password: req.body.password,
    });
  
    try {
      await user.save();
      res.status(201).json(user);
    } catch(error) {
      res.status(401).json({
        message: 'Registration error'
      })
    }
  }
}
