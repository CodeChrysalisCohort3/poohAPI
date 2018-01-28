const Knex = require('knex');
const config = require('./knexfile');

const knex = Knex({
  client: config.client,
  port: config.port,
  connection: {
    host: config.connection.host,
    database: config.connection.database
  }
});

module.exports = {
  create: require('./cafesearch/create.js')(knex),
  list: require('./cafesearch/list.js')(knex),
  remove: require('./cafesearch/remove.js')(knex),
  update: require('./cafesearch/update.js')(knex)
};