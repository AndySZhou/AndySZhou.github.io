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
    pic = loadImage('images/img1.JPG');
}

function mousePressed() {
    if (click = true) {
        pic = loadImage('/images/img1.JPG');
        click = false;
        redraw();
    }
    else if (click = false) {
        pic = loadImage('/images/img2.JPG');
        click = true;
        redraw();
    }
}

function draw() {
    image(pic, 0, 0, 240, 320);
}
