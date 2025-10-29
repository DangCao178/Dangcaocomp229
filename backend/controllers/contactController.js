const Contact = require('../models/contactModel')

exports.getAll = async (req, res) => {
  const contacts = await Contact.find()
  res.json(contacts)
}

exports.getById = async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  res.json(contact)
}

exports.create = async (req, res) => {
  const contact = await Contact.create(req.body)
  res.json(contact)
}

exports.update = async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(contact)
}

exports.deleteOne = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id)
  res.json({ message: 'Deleted' })
}

exports.deleteAll = async (req, res) => {
  await Contact.deleteMany()
  res.json({ message: 'All deleted' })
}
