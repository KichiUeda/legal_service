const pg = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'micko',
    password : 'test',
    database : 'legal'
  }
});

module.exports = pg;