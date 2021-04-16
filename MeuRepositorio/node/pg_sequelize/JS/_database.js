const pg = require('pg')

const client = new pg.Client({
  user: 'leandro',
  host: 'localhost',
  database: 'postgres',
  password: 'cliente',
  port: 5432,
})

module.exports = client