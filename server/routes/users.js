const router = require('express').Router();
const User = require('../models/User');

router.post('/signup', async (req, res) => {
  let user = new User({username: req.body.username, password: req.body.password});
  try {
    await user.save();
  } catch(err){
    return res.status(400).send('UserID already taken');
  }
  const token = user.generateToken();
  res.cookie('x-auth-token', token);
  res.send('User created successfully!');
})

router.post('/signin', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.findOne({username: username});
  if (!user) return res.status(400).send('User not found!');
  else {
    if (password !== user.password) return res.status(401).send('Wrong password');
    const token = user.generateToken();
    res.cookie('x-auth-token', token);
    res.send('Signed in successfully!');
  }
})

module.exports = router;
