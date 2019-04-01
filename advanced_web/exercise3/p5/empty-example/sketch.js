/* let pic;
let click = true;

//function preload() {
//      image = loadImage('images/img1.JPG');
//      image = loadImage('/images/img2.jpg');
//}

function setup() {
    //var canvas = createCanvas(240, 320);
    //canvas.parent('pictures');
    createCanvas(240, 320);
    background(125);
    pic = loadImage('images/img1.JPG');
}

function mousePressed() {
    if (click = true) {
        pic = loadImage('/images/img1.JPG');
        click = false;
    }
    else if (click = false) {
        pic = loadImage('/images/img2.JPG');
        click = true;
    }
}

function draw() {
    image(pic, 0, 0, 240, 320);
}
*/
let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
