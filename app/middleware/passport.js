const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const mongoose = require('mongoose');
const User = mongoose.model('users');
const tokenConfig = require('../config/jsonwebtoken');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: tokenConfig.secretKey
}

module.exports = passport => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      try {
        const user = await User.findById(payload.userId).select('email id');

        if (user) {
          done(null, user);
        } else {
          done(null, false)
        }
      } catch(error) {
        console.error(error)
      }
    })
  );
}
