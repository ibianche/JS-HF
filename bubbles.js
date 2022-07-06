
let scores = [51, 22, 73, 64, 65, 46, 37, 28, 19, 10, 11, 25, 63, 84, 95];



function printAndGetHighScore(scores) {
  let highScore = 0;
// let output = 0;

  for (let i = 0; i < scores.length; i++) {
    let output = 'Płyn do baniek nr ' + i + ' wynik: ' + scores[i]; // kazdy wynik
    console.log(output);

    if (scores[i] > highScore) {  //najwiekszy wynik w tablicy
      highScore = scores[i];
    }
  }
  return highScore;
}
let highScore = printAndGetHighScore(scores);
console.log('Liczba testów ' + scores.length);
console.log('Największa liczba wytworzonych baniek ' + highScore);




function getBestResult(scores, highScore) {


  let bestSolutions = [];
  for (let i = 0; i < scores.length; i++) {     //odszukanie  najlepszego  wyniku
    if (scores[i] == highScore) {
      bestSolutions.push(i);
    }
  }
  return bestSolutions
}

let bestSolutions = getBestResult(scores,highScore);
console.log('Płyny z najlepszym wynikiem ' + bestSolutions);
