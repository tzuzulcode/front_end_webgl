let angle = 0
let scaleSize = 1

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(0)
  // translate(mouseX,mouseY)
  line(width/2,0,width/2,height)
  line(0,height/2,width,height/2)
  
  translate(width/2,height/2);
  rotate(angle);
  translate(50,50)
  scale(scaleSize)
  stroke("white");
  // rotate(mouseX/100)
  rect(-10,-20,20,40)
  angle +=0.1
  scaleSize +=0.01
  // rect(50,50,20,40)
}
