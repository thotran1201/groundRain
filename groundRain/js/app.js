let circleY = Math.floor(Math.random() * 700 + 1);
let velocityX = Math.floor(Math.random() * 700 + 1);

class RainDrops {
  constructor(color, diameter) {
    (this.color = color), (this.diameter = diameter);
  }
  createCircle = function (posX, posY, diameter) {
    circle(posX, posY, diameter);
  };
}

class ground {
  constructor(r, g, b) {
    (this.r = r), (this.g = g), (this.b = b);
  }
}

function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(0, 100, 100);
  let circleX = Math.floor(Math.random() * 700 + 1);
  let circleY = Math.floor(Math.random() * 700 + 1);
  let velocityX = Math.floor(Math.random() * 700 + 1);
  let velocityY = Math.floor(Math.random() * 700 + 1);

  var i;
  let rain = new RainDrops("#800080", 100);
  for (i = 0; i < 100; i++) {
    rain.createCircle(circleX, 67, 12),
      rain.createCircle(circleY, 67, 12),
      rain.createCircle(velocityX, 67, 12),
      rain.createCircle(velocityY, 67, 12);
  }

  function moveLeft() {}

  //create raindrops that will make the motion realistic

  rain.createCircle(30, 50, 10);
  rect(0, 400, 700, 500);
  fill(0, 100, 0);
}
