const storesJSON = require('../seeds/stores.json');

exports.seed = (knex, Promise) => {
  return knex('store_locations').del()
    .then(() => {
      return knex('store_locations').insert(storesJSON);
    });
};