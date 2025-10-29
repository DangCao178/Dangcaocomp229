const express = require('express')
const router = express.Router()
const user = require('../controllers/userController')

router.get('/', user.getAll)
router.get('/:id', user.getById)
router.post('/', user.create)
router.put('/:id', user.update)
router.delete('/:id', user.deleteOne)
router.delete('/', user.deleteAll)

module.exports = router
