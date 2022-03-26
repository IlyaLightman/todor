/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    const createQuery = `CREATE TABLE users(
        userid SERIAL PRIMARY KEY NOT NULL,
        username VARCHAR(255) UNIQUE,
        email VARCHAR(255),
        token VARCHAR(255),
        password_digest TEXT,
        date_created DATE)`

    return knex.raw(createQuery)
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    const dropQuery = `DROP TABLE users`

    return knex.raw(dropQuery)
}
