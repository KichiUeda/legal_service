const pg = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'micko',
    password : 'test',
    database : 'legal'
  }
});

pg.schema.createTable('statements', (table) => {
  table.increments('product_id');
  table.string('statement');
})
.then(() => {
  console.log('created table!');
  return;
})

module.exports = pg;