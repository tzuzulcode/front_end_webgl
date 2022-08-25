const width = 400
const height = 400

const size = 200

const transparency = (value)=>value*(255/100)

function setup() {
  createCanvas(width, height);
}

function draw() {
  // if(!mouseIsPressed){
  //   background("#f2f5ff")
  // }

  stroke("black")
  fill(245, 233, 96, transparency(50))
  ellipse(100,50,size,size)

  fill(223, 178, 244, transparency(50))
  ellipse(200,50,size,size)

  fill(244, 144, 151, transparency(50))
  ellipse(300,50,size,size)

  noFill()
  stroke("#F49097")
  ellipse(300,150,size,size)

  fill(141, 231, 192)
  noStroke()
  beginShape()
  vertex(50,350)
  vertex(100,350)
  vertex(100,300)
  vertex(150,300)
  vertex(100,250)
  vertex(150,250)
  vertex(75,175)
  vertex(0,250)
  vertex(50,250)
  vertex(0,300)
  vertex(50,300)
  endShape(CLOSE)

}
