require('dotenv').config()

const { DB_USER, DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT } = process.env

module.exports = {
    development: {
        client: 'pg',
        connection: {
            user: DB_USER,
            host: DB_HOST,
            database: DB_DATABASE,
            password: DB_PASSWORD,
            port: DB_PORT
        },
        migrations: {
            directory: './db/migrations'
        },
        seeds: {
            directory: './db/seeds/dev'
        },
        useNullAsDefault: true
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: './db/migrations'
        },
        seeds: {
            directory: './db/seeds/production'
        },
        useNullAsDefault: true
    }
}
