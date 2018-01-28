
exports.up = function(knex, Promise) {
  return knex.schema.createTable('store_locations', (t) => {
    t.increments()
      .index();
    t.integer('city_id')
      .unsigned()
      .notNullable()
      .index();
    t.foreign('city_id')
      .references('id')
      .inTable('cities');
    t.string('storename', 255)
      .unique()
      .notNullable()
      .index();
    t.string('address', 255)
      .unique()
      .notNullable()
      .index();
    t.string('telephone', 255)
      .unique()
      .notNullable()
      .index();
    t.boolean('wifi')
      .index();
    t.string('url', 255)
      .unique()
      .notNullable()
      .index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('store_locations');
};
