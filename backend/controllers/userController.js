const User = require('../models/userModel')

exports.getAll = async (req, res) => {
  const users = await User.find()
  res.json(users)
}

exports.getById = async (req, res) => {
  const user = await User.findById(req.params.id)
  res.json(user)
}

exports.create = async (req, res) => {
  const user = await User.create(req.body)
  res.json(user)
}

exports.update = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(user)
}

exports.deleteOne = async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.json({ message: 'Deleted' })
}

exports.deleteAll = async (req, res) => {
  await User.deleteMany()
  res.json({ message: 'All deleted' })
}
