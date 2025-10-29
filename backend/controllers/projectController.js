const Project = require('../models/projectModel')

exports.getAll = async (req, res) => {
  const projects = await Project.find()
  res.json(projects)
}

exports.getById = async (req, res) => {
  const project = await Project.findById(req.params.id)
  res.json(project)
}

exports.create = async (req, res) => {
  const project = await Project.create(req.body)
  res.json(project)
}

exports.update = async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.json(project)
}

exports.deleteOne = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id)
  res.json({ message: 'Deleted' })
}

exports.deleteAll = async (req, res) => {
  await Project.deleteMany()
  res.json({ message: 'All deleted' })
}
