const express = require('express')
const userRouter = require('./routes/user.routes')
require('dotenv').config()

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/user', userRouter)

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
