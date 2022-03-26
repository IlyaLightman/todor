const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

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
