const citiesJSON = require('../seeds/cities.json');

exports.seed = (knex, Promise) => {
  return knex('cities').del()
    .then(() => {
      return knex('cities').insert(citiesJSON);
    });
};