
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cities', (t) => {
    t.increments()
      .index();
    t.string('cityname', 255)
      .unique()
      .notNullable()
      .index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cities');
};
