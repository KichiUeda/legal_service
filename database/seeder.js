const faker = require('faker')
const pg = require('./model.js');

// console.log(`© 2020 ${faker.company.companyName()}. Published and distributed by ${faker.company.companyName()} ${faker.company.companySuffix()} ${faker.lorem.sentences()} ${faker.company.companyName()} ${faker.company.companySuffix()} All rights reserved.`);

const AMOUNT = 100;

pg.schema.dropTableIfExists('statements')
.then(() => {
  pg.schema.createTable('statements', (table) => {
    table.increments('product_id');
    table.string('statement', 1000);
  })
  .then(() => {
    console.log('created table!');

    //loop to start inserting statements in database
    for (let i = 0; i < AMOUNT; i++) {
      let statement = `© 2020 ${faker.company.companyName()}. Published and distributed by ${faker.company.companyName()} ${faker.company.companySuffix()} ${faker.lorem.sentences()} ${faker.company.companyName()} ${faker.company.companySuffix()} All rights reserved.`

      pg('statements').insert({statement})
      .then((row) => {
        console.log(`${JSON.stringify(row)} **HAS BEEN INSERTED**`);
      })
      .catch((err) => {
        console.log('Something wrong with inserting rows!');
        console.log(err);
      })
    };
    console.log('Finished Seeding!')
    return;
  })
})