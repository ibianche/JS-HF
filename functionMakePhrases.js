function makePhrases() {

  let words1 = ['nieprzerwane', 'wielowarstwowe', 'tysiącmetrowe', 'biznesowe', 'niepowstrzymane'];
  let words2 = ['wspomagane', 'wartościowe', 'zorientowane', 'skoncentrowane', 'wyrównane'];
  let words3 = ['procesy', 'rozwiązania', 'punkty', 'strategie', 'wizje'];

  let rand1 = Math.floor(Math.random() * words1.length); //wybierzemy randomowy element z tablicy
  console.log(rand1);
  let rand2 = Math.floor(Math.random() * words1.length);
  let rand3 = Math.floor(Math.random() * words1.length);

  let phrases = words1[rand1] + ' ' + words2[rand2] + ' ' + words3[rand3];
  alert(phrases);
  console.log(phrases);

}
makePhrases();

