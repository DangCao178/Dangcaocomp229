const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.register = async (req, res) => {
  const { name, email, password } = req.body
  const hashed = await bcrypt.hash(password, 10)
  const user = await User.create({ name, email, password: hashed })
  res.json(user)
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ message: 'User not found' })
  const match = await bcrypt.compare(password, user.password)
  if (!match) return res.status(400).json({ message: 'Wrong password' })
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
  res.json({ token })
}

exports.protected = (req, res) => {
  res.json({ message: 'Protected route access granted' })
}
