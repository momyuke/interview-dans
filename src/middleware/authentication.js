const jwt = require('jsonwebtoken');
const ResponseHandler = require('../utils/ResponeHandler');
const User = require('../models/User');

module.exports = authentication = async (req, res, next) => {
  const error = new ResponseHandler(
    null,
    'You are not allowed to access the content',
    403
  );

  const {authorization} = req.headers;
  if(!authorization){
    res.status(403).send({message: 'Authorization must not be null'});
    return
  }

  const token = authorization.slice(7);

  try{
    const isCorrect = jwt.verify(token, process.env.PRIVATE_KEY_JWT);
    const findUser = await User.findOne({
      where: { id: isCorrect.userId },
    });

    if (!findUser) {
      res.status(error.statusCode).send(error);
      return;
    }

    next();
  }catch(err){
    const resultError = new ResponseHandler(null, err.message, 400);
    res.status(resultError.status).send(resultError);
    return;
  }
};

module.exports = authentication;