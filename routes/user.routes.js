const { Router } = require('express')
const userController = require('../controller/user')

const router = Router()
router.post('/create', userController.createUser)

module.exports = router
