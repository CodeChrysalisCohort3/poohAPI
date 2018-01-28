module.exports = knex => {
  return data => {
    return knex('store_locations')
      .where('storename', data.storename)
      .update({
        storename: data.storename,
        address: data.address,
        telephone: data.telephone,
        wifi: data.wifi,
        url: data.url
      })
  }
};