const db = require('../db/db')

class UserDAO {
    async createUser(username, email) {
        const data = await db('user').raw()

        return 0
    }
}

module.exports = new UserDAO()
