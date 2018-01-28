module.exports = knex => {
  return data => {
    return knex('store_locations')
      .insert({
        city_id: data.id,
        storename: data.storename,
        address: data.address,
        telephone: data.telephone,
        wifi: data.wifi,
        url: data.url
      })
  }
};