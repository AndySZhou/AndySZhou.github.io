function setup() {
  // put setup code here
  createCanvas(240, 320);
  let click = true;
  //canvas.parent('sketch-holder');
  //fuck
}

function draw() {
  if(click = true){
    if(mouseIsPressed){
      loadImage('images/img1.jpg', img => {
        image(img, 0, 0);
        });
      click = false;
    }
  }
  else if(click = false){
    if(mouseIsPressed){
      loadImage('images/img2.jpg', img => {
        image(img, 0, 0);
        });
      click = true;
    }
  }
}
