const User = require('../models/User');
const ResponeHandler = require('../utils/ResponeHandler');
const jwt = require('jsonwebtoken');

class UserServices {
  async login(username, password) {
    try {
      const findUser = await User.findOne({
        where: { username: username, password: password },
        attributes: { exclude: ['password'] },
      });
      if (!findUser) return new ResponeHandler(null, 'Wrong Credentials', 401);

      const result = jwt.sign(
        { userId: findUser.id },
        process.env.PRIVATE_KEY_JWT,
        { expiresIn: '7h' }
      );

      return new ResponeHandler({ user: findUser, token: result }, null, 200);
    } catch (err) {
      return new ResponeHandler(null, err.message, 500);
    }
  }
}

module.exports = UserServices;
