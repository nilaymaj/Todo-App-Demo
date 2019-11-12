const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    minlength: 1
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 256
  }}
)

const KEY = process.env.JWT_KEY || '38hf98hf29fh29fh2fh2f';

userSchema.methods.generateToken = function() {
  const token = jwt.sign({username: this.username}, KEY);
  return token;
}

const User = mongoose.model('User', userSchema);
module.exports = User;

