

let taxi = {
  make: 'SieMoCorp',
  model: 'Taxi',
  year: 1955,
  color: 'żółty',
  passengers: 4,
  convertible: false,
  mileage: 281341
};

function prequal(car) {
  if(car.mileage > 10000){
    return false;
  } else if(car.year > 1960){
    return false
  }
  return true;
}

let worthALook = prequal(taxi);

if(worthALook){
  console.log('Powinineś zainteresować się tym ' + taxi.make + ' ' + taxi.model);
} else {
  console.log('Ten ' + taxi.make + ' ' + taxi.model + ' możesz sobie podarować');
}
