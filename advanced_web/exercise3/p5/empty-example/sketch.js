var img;
var pic = true;

function preload() {
    if (pic == true) {
    img = loadImage('img1.jpg');
    }
else {
img = loadImage('img2.jpg');
 }
}
function setup() {
    var canvas = createCanvas(240, 320);
    canvas.parent('sketch-holder');
    background(255, 0, 200);
}
function draw() {
    image(img, 0, 0, width, height);
}
function mousePressed() {
    if (pic == true) {
        img = loadImage('img1.jpg');
        pic = false;
    }
    else {
        img = loadImage('img2.jpg');
        pic = true;
    }
}
