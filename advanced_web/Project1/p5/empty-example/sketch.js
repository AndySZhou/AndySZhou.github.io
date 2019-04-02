let pic;
let loc1 = "Scofieldtown Road, the location of the second UConn Stamford Campus.";
let loc2 = "The current building where UConn Stamford is located.";
let loc3 = "Stamford High School, where UConn Stamford was first based.";
//function preload() {
//      image = loadImage('images/img1.JPG');
//      image = loadImage('/images/img2.jpg');
//}

function setup() {
  var cnv = createCanvas(1209, 719);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(255, 0, 200);
  pic = loadImage('images/StamMap.jpg');
}
function draw() {
    image(pic, 0, 0, 1297, 719);
    //ellipse(638, 55, 20, 20);
    //ellipse(740, 655, 20, 20);
    //ellipse(793, 650, 20, 20);
    if(mouseX > 628 && mouseX < 648) {
      if(mouseY > 45 && mouseY <65) {
        text(loc1, 648, 65, 668, 85);
      }
    }
    if(mouseX > 730 && mouseX < 750) {
      if(mouseY > 645 && mouseY <665) {
        text(loc2, 730, 665, 780, 655);
      }
    }
    if(mouseX > 783 && mouseX < 803) {
      if(mouseY > 640 && mouseY <660) {
        text(loc3, 783, 660, 803, 680);
      }
    }
}
