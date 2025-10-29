const express = require('express')
const router = express.Router()
const qualification = require('../controllers/qualificationController')

router.get('/', qualification.getAll)
router.get('/:id', qualification.getById)
router.post('/', qualification.create)
router.put('/:id', qualification.update)
router.delete('/:id', qualification.deleteOne)
router.delete('/', qualification.deleteAll)

module.exports = router
