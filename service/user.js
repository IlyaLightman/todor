const userDAO = require('../dao/user')

class UserService {
    createUser(userDto) {
        const { username, email } = userDto

        return userDAO.createUser(username, email)
    }
}

module.exports = new UserService()
