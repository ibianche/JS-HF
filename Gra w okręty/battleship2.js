
const model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipSunk: 0,
  ships: [
    { locations: [0, 0, 0], hits: ["", "", ""] },
    { locations: [0, 0, 0], hits: ["", "", ""] },
    { locations: [0, 0, 0], hits: ["", "", ""] }
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
  },
  generateShipLocations: function () {
    let locations;
    for(let i = 0; i < this.numShips; i++){
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
  },
  generateShip: function () {
    let direction = Math.floor(Math.random() * 2);
    let row, col;
    if(direction === 1){
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * this.boardSize - this.shipLength);
    } else {
      row = Math.floor(Math.random() * this.boardSize - this.shipLength);
      col = Math.floor(Math.random() * this.boardSize);
    }

    let newShipLocations = [];
    let locations;
    for(let i = 0; i < this.numShips; i++){
      if(direction === 1){
        newShipLocations.push(row + '' + (col + i));
      } else {
        newShipLocations.push((row + i) + '' + col);
      }
    }
    return newShipLocations;
  },
  collision: function (locations) {
    for(let i = 0; i < this.numShips; i++){
      let ship = model.ships[i];
      for(let j = 0; j < locations.length; j++){
        if (ship.locations.indexOf(locations[j]) >= 0){
          return true;
        }
      }
    }
    return false;
  }

};
// model.fire('00');
//
// model.fire('06');
// model.fire('16');
// model.fire('26');
//
// model.fire('34');
// model.fire('24');
// model.fire('44');
//
// model.fire('12');
// model.fire('11');
// model.fire('10');


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

const controller = {
  guesses: 0,
  processGuess: function (guess) {
    let location = parseGuess(guess);
    if(location){
      this.guesses++;
      let hit = model.fire(location);
      if(hit && model.shipSunk === model.numShips){
        view.displayMessage('Zatopiłeś wszystkie moje okręty, w' + this.guesses + ' próbach');
      }
    }

  }

};


//
// view.displayMiss('00');
// view.displayHit('34');
// view.displayMiss('55');
// view.displayHit('12');
// view.displayMiss('25');
// view.displayHit('26');

// view.displayMessage('Halo czy cos dziala');


function parseGuess (guess) {
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  if(guess === null || guess.length !== 2){
    alert('Ups, proszę wpisać literę i cyfrę');
  } else {
    let firstChar = guess.charAt(0);
    let row = alphabet.indexOf(firstChar);
    let column = guess.charAt(1);

    if(isNaN(row) || isNaN(column)){
      alert('Ups, to nie są współrzędne!');
    } else if(row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize){
      alert('Pole poza planszą!');
    } else {
      return row + column;
    }
  }
  return null;
}


// console.log(parseGuess('A0'));
// console.log(parseGuess('B6'));
// console.log(parseGuess('G3'));
// console.log(parseGuess('H0'));
// console.log(parseGuess('A7'));



// controller.processGuess('A0');
//
// controller.processGuess('A6');
// controller.processGuess('B6');
// controller.processGuess('C6');
//
// controller.processGuess('C4');
// controller.processGuess('D4');
// controller.processGuess('E4');
//
// controller.processGuess('B0');
// controller.processGuess('B1');
// controller.processGuess('B2');



function handleFireButton() {
  let guessInput = document.getElementById('guessInput');
  let guess = guessInput.value;
  controller.processGuess(guess);

  guessInput.value = '';
}

function handleKeyPress(e) {
  let fireButton = document.getElementById('fireButton');
  e = e || window.event;

  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }

}


window.onload = init;


function init() {
  let fireButton = document.getElementById('fireButton');
  fireButton.onclick = handleFireButton;
  let guessInput = document.getElementById('guessInput');
  guessInput.onkeypress = handleKeyPress;

  model.generateShipLocations();

}




