module.exports = knex => {
  return data => {
    return knex('store_locations')
      .where('storename', data)
      .del()
  }
};