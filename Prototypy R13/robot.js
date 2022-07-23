

function Robot(name, year, owner) {
  this.name = name;
  this.year = year;
  this.owner = owner;
}

Robot.prototype.maker = 'Ob.Fa.Ro';
Robot.prototype.speak = function () {
  alert('Hello world!');
};
Robot.prototype.makeCoffee = function () {
  alert('Go to Starbucks');
};
Robot.prototype.blinkLights = function () {
  alert('Shine');
};


let robby = new Robot('Robik', 1956, 'Dr.Morbius');
let rosie = new Robot('Robusia', 1962, 'G.Jetson');

robby.onOffSwitch = true;
robby.makeCoffee = function(){
  alert('Coffee?');
};

rosie.cleanHouse = function(){
  alert('Clean?');
};


console.log('Robot ' + robby.name + ' został wyprodukowany przez ' +
  robby.maker + ' w roku ' + robby.year + ' a teraz jego właścicielem jest ' + robby.owner);
robby.makeCoffee();
robby.blinkLights();



console.log('Robot ' + rosie.name + ' został wyprodukowany przez ' +
  rosie.maker + ' w roku ' + rosie.year + ' a teraz jego właścicielem jest ' + rosie.owner);
rosie.cleanHouse;
