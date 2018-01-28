module.exports = knex => {
  return () => {
    return knex('store_locations')
      .innerJoin('cities', 'store_locations.city_id', 'cities.id')
      .select(
        'store_locations.id as id',
        'cities.cityname as cityname',
        'store_locations.storename as storename',
        'store_locations.telephone as telephone',
        'store_locations.wifi as wifi',
        'store_locations.url as url'
      )
      .then(list => {
        return list.sort((a, b) => {
          if (a.id > b.id) {
            return 1;
          } else if (a.id < b.id) {
            return -1;
          } else {
            return 0;
          }
        });
      })
      .catch(err => console.log(err));
  }
};