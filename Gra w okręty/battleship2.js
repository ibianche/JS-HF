const view = {
  displayMessage: function (msg) {
    let messageArea = document.getElementById('messageArea');
    messageArea.innerHTML = msg;
  },
  displayHit: function (location) {
    let cell = document.getElementById(location);
    cell.setAttribute('class', 'hit');
  },
  displayMiss: function (location) {
    let cell = document.getElementById(location);
    cell.setAttribute('class', 'miss');
  }
};



const model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipSunk: 0,
  ships: [
    { locations: ['06', '16', '26'], hits: ["", "", ""] },
    { locations: ['24', '34', '44'], hits: ["", "", ""] },
    { locations: ['10', '11', '12'], hits: ["", "", ""] }
  ],
  fire: function (guess) {
    for(let i = 0; i < this.numShips; i++){
      let ship = this.ships[i];
      let index = ship.locations.indexOf(guess);
      if( index >= 0){
        ship.hits[index] = 'hit';
        view.displayHit(guess);
        view.displayMessage('TRAFIONY!');
        if(this.isSunk(ship)){
          view.displayMessage('Zatopiłeś mój okręt!');
          this.shipSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage('Spudłowałeś');
    return false;
  },
  isSunk: function (ship) {
    for(let i = 0; i < this.numShips; i++){
      if(ship.hits[i] !== 'hit'){
        return  false;
      }
      return true;
    }
  }

};

model.fire('00');

model.fire('06');
model.fire('16');
model.fire('26');

model.fire('34');
model.fire('24');
model.fire('44');

model.fire('12');
model.fire('11');
model.fire('10');






// view.displayMiss('00');
// view.displayHit('34');
// view.displayMiss('55');
// view.displayHit('12');
// view.displayMiss('25');
// view.displayHit('26');

// view.displayMessage('Halo czy cos dziala');
