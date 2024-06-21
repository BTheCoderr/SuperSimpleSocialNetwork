const { createUser, getUserByUsername } = require('../models/userModel');
const bcrypt = require('bcryptjs');

const signup = async (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  await createUser(username, hashedPassword, email);
  res.status(201).json({ message: 'User created!' });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await getUserByUsername(username);
  if (!user) {
    return res.status(401).json({ message: 'User not found!' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Incorrect password!' });
  }

  // Set session data
  req.session.userId = user.id;

  res.status(200).json({ message: 'Login successful' });
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to logout' });
    }
    res.status(200).json({ message: 'Logout successful' });
  });
};

module.exports = { signup, login, logout };
