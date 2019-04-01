let pic;
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
    pic = loadImage('images/img3.jpg');



}

function draw() {
    image(pic, 0, 0, 240, 320);
}

//function mousePressed() {
//    if (click = true) {
//        image = loadImage('/images/img1.jpg');
//        click = false;
//    }
//    else if (click = false) {
//        image = loadImage('/images/img2.jpg');
//        click = true;
//    }
//}
