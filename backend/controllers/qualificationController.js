const Qualification = require('../models/qualificationModel')

exports.getAll = async (req, res) => {
  const qualifications = await Qualification.find()
  res.json(qualifications)
}

exports.getById = async (req, res) => {
  const qualification = await Qualification.findById(req.params.id)
  res.json(qualification)
}

exports.create = async (req, res) => {
  const qualification = await Qualification.create(req.body)
  res.json(qualification)
}

exports.update = async (req, res) => {
  const qualification = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(qualification)
}

exports.deleteOne = async (req, res) => {
  await Qualification.findByIdAndDelete(req.params.id)
  res.json({ message: 'Deleted' })
}

exports.deleteAll = async (req, res) => {
  await Qualification.deleteMany()
  res.json({ message: 'All deleted' })
}
