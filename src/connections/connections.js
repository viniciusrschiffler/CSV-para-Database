const pg = require('pg')

const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'TopsSpotify',
    password: '1234',
    port: '5432',
})

module.exports = client