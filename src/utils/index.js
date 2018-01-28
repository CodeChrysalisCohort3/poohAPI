export const geocode = place => {
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${place}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      const result = data.results[0];
      const status = data.status;

      if (typeof result === 'undefined'){
        return { status }
      }
      const address = result.formatted_address;
      const location = result.geometry.location;
      return {
        status,
        address,
        location
      }
    })
}

export const getCafeInfo = (place) => {
  return fetch(`${process.env.BASE_URL}/api`)
    .then(res => {
      return res.json();
    })
    .then(result => {
      return result.filter(cafe => {
        if (cafe.wifi){
          cafe.wifi = 'Available';
        }
        return cafe.cityname === place;
      })
    })
}