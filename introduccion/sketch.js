const start = 0
const width = 500
const height = 500
const middleWidth = width/2
const middleHeight = height/2


let randomX1 //variable sin inicializar
let randomY1
let trianglePoints

function setup() { // Configuracion del canvas y solo se ejecuta
  createCanvas(width, height);
  randomX1 = random(width) // Aleatorio entre 0 y 500
  randomY1 = random(height)
  trianglePoints = [random(height),random(height),random(height),random(height),random(height),random(height)]
}

function draw() {
  background(24, 48, 89)
  
  line(mouseX,start,mouseX,height)
  line(start,mouseY,width,mouseY)


  // noFill()
  fill(255)
  rect(randomX1,randomY1,50,50)
  triangle(...trianglePoints)
  // x,y,h,w,start,end
  arc(50,50,50,50,0,2*PI)
  
  if(mouseIsPressed){
    fill(240, 58, 71)
  }else{
    fill(255)
  }
  
  ellipse(mouseX,mouseY,50) //Circulo o elipse

  // const randomX1 = random(500)
  // const randomY1 = random(500)


  console.log("Draw")
}
