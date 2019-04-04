let pic;
let loc1 = "Scofieldtown Road, the location of the second UConn Stamford Campus.";
let loc2 = "The current building where UConn Stamford is located.";
let loc3 = "Stamford High School, where UConn Stamford was first based.";
function preload() {
  pic = loadImage('images/StamMap.JPG');
}

function setup() {
  var cnv = createCanvas(1209, 719);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(255, 0, 200);
}
function draw() {
    image(pic, 0, 0, 1297, 719);
    //ellipse(638, 55, 20, 20);
    //ellipse(740, 655, 20, 20);
    //ellipse(793, 650, 20, 20);
    if(mouseX > 628 && mouseX < 648) {
      if(mouseY > 45 && mouseY <65) {
        rect(645, 61, 150, 50);
        text(loc1, 648, 65, 150, 150);
      }
    }
    if(mouseX > 730 && mouseX < 750) {
      if(mouseY > 645 && mouseY <665) {
        rect(577, 621, 150, 30);
        text(loc2, 580, 625, 160, 50);
      }
    }
    if(mouseX > 783 && mouseX < 803) {
      if(mouseY > 640 && mouseY <660) {
        rect(800, 585, 130, 50);
        text(loc3, 803, 590, 150, 50);
      }
    }
}
