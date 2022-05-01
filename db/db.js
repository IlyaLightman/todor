const knex = require('knex')
const knexfile = require('../knexfile')

// Development mode
const db = knex(knexfile.development)
module.exports = db
