function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  //canvas.parent('sketch-holder');
}

function draw() {
  // put drawing code here
  background(0, 0, 255);
  fill(255, 0, 0);
  //ellipse(50, 50, 80, 80);
  if(mouseIsPressed){
    ellipse(mouseX, mouseY, 50, 50);
  }
}
