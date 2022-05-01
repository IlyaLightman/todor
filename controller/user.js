const userService = require('../service/user')

class UserController {
    async createUser(req, res) {
        try {
            const id = await userService.createUser(req.body)
            res.status(201).json(id)
        } catch (e) {
            console.error(e)
            res.status(500).json({ error: e })
        }
    }
}

module.exports = new UserController()
