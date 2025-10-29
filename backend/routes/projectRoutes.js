const express = require('express')
const router = express.Router()
const project = require('../controllers/projectController')

router.get('/', project.getAll)
router.get('/:id', project.getById)
router.post('/', project.create)
router.put('/:id', project.update)
router.delete('/:id', project.deleteOne)
router.delete('/', project.deleteAll)

module.exports = router
