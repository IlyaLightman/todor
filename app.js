const express = require('express')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`App has been started on port ${PORT}`)
        })
    } catch (err) {
        console.log('Server error', err.message)
        process.exit(1)
    }
}

start()
