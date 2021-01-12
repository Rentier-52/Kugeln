let x, y, vx, vy, r;

function setup() {
  createCanvas(900, 600);
  x = 250;
  y = 200;
  vx = 2;
  vy = 2;
  r = 10;
}
function draw() {
  background(150);
  fill(0, 150, 50);
  rect(150, 100, 600, 400);
  fill(255, 0, 0);
  ellipse(x, y, 2 * r, 2 * r);
  update();
  bande();

}

function update() {
  x += vx;
  y += vy;
}

function bande() {
  if (x < 150 + r) {
    x = 150 + r;
    vx = -vx;
  }
  if (x > 750 - r) {
    x = 750 - r;
    vx = -vx;
    }
  if (y < 100 + r) {
    y = 100 + r;
    vy = -vy;
  }
  if (y > 500 - r) {
    y = 500 - r;
    vy = -vy;
    }
}
