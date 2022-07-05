let randomLoc = Math.floor(Math.random() * 5); //randomowa liczba od 0 do 4 mathfloor do zaokraglenia w dol

let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;


let guess;
let hits = 0;
let guesses = 0;  //proby
let isSunk = false;

while (isSunk == false) {
  guess = prompt('Gotów, cel, pal! (podaj liczbę z zakresu od 0-6):');
  if (guess < 0 || guess > 6) {
    alert('Proszę podać prawidłowy numer komórki!');
  } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      alert('TRAFIONY!');
      hits = hits + 1;

      if (hits == 3) {
        isSunk = true;
        alert('Zatopiłeś mój okręt!');
      }
    } else {
      alert('PUDŁO!');
    }
  }
}

let stats = 'Porzebowałeś ' + guesses + ' prób, by zatopić okręt, ' + ' czyli Twoja efektywność wynosi: ' + (3/guesses) + '.';
alert(stats);


