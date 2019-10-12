const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loginRouter = require('express').Router();
const User = require('../models/User');

loginRouter.post('/', async (req, res) => {
  const body = req.body;

  // check if user exists, return 401 if not
  const user = await User.findOne({ where: { username: body.username } });
  if (!user) {
    return res.status(401).json({
      error: 'user not found!'
    });
  }

  // check if password is correct, return 401 if not
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(body.password, user.password);
  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: 'Invalid username or password'
    });
  }

  // create user object for token
  const userForToken = {
    username: user.username,
    id: user.id
  };
  const token = jwt.sign(userForToken, process.env.SECRET);

  // response ok with token and username
  res.status(200).send({ token, username: user.username });
});

module.exports = loginRouter;