let width= window.innerWidth
let height = window.innerHeight
let img
let backgroundImage
let font
let fontSize = 28

let scaleSize = 1
let positionX = width/2
let positionY = height/2

function preload(){
  img = loadImage("./assets/02.png")
  backgroundImage = loadImage("./assets/background.jpeg")
  // font = loadFont("./assets/Aboreto-Regular.ttf")
}

function setup() {
  createCanvas(width, height);
  textAlign("center")
  textFont('Aboreto')
  fill("#B8F2E6")
  stroke("white");
  // frameRate(30)
}

function draw() {
  imageMode(CORNER)
  background(backgroundImage)
  translate(positionX,positionY)
  imageMode(CENTER)
  scale(scaleSize)
  image(img,0,0,100,100)

  textSize(fontSize)
  text("Visualización",0,-50)
  // console.log(touches)

  print(frameRate())
}

function mouseWheel(event){
  scaleSize += (event.delta/100)
  if(scaleSize<0.1){
    scaleSize = 0.1
  }
}

function touchMoved(event){
  positionX += event.movementX
  positionY += event.movementY
}
