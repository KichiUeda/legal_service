require('dotenv').config();
const pg = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
  }
});

module.exports = pg;