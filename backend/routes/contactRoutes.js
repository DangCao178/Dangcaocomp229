const express = require('express')
const router = express.Router()
const contact = require('../controllers/contactController')

router.get('/', contact.getAll)
router.get('/:id', contact.getById)
router.post('/', contact.create)
router.put('/:id', contact.update)
router.delete('/:id', contact.deleteOne)
router.delete('/', contact.deleteAll)

module.exports = router
