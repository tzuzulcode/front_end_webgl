const start = 0
const width = 500
const height = 500
const middleWidth = width/2
const middleHeight = height/2


// let randomX1 //variable sin inicializar
// let randomY1
// let trianglePoints

let valueX = middleWidth
let valueY = middleHeight
let pacmanSize = 100
let circleSize = 50

let circles = []

function setup() { // Configuracion del canvas y solo se ejecuta
  createCanvas(width, height);
  // randomX1 = random(width) // Aleatorio entre 0 y 500
  // randomY1 = random(height)
  // trianglePoints = [random(height),random(height),random(height),random(height),random(height),random(height)]
  for(let i=0;i<10;i++){
    circles.push({
      x:random(width),
      y:random(height),
    })
  }
}

function draw() {
  background(24, 48, 89)
  
  line(mouseX,start,mouseX,height)
  line(start,mouseY,width,mouseY)


  // noFill()
  fill(255)
  // rect(randomX1,randomY1,50,50)
  // triangle(...trianglePoints)
  // x,y,h,w,start,end
  // arc(50,50,50,50,0,2*PI)
  
  if(mouseIsPressed){
    fill(240, 58, 71)
  }else{
    fill(255)
  }
  
  circles.forEach(circle=>{
    ellipse(circle.x,circle.y,circleSize) //Circulo o elipse
  })

  // const randomX1 = random(500)
  // const randomY1 = random(500)

  // fill(245, 224, 91)
  // strokeWeight(7)
  // stroke(0)
  // arc(width / 2, height / 2, 100, 100, PI / 4, (7 * PI) / 4, PIE)

  if(keyIsPressed){
    if(keyCode === LEFT_ARROW){
      valueX=valueX-2
    }else if(keyCode === RIGHT_ARROW){
      valueX=valueX+2
    }else if(keyCode === UP_ARROW){
      valueY-=2
    }else if(keyCode === DOWN_ARROW){
      valueY+=2
    }
  }

  verifyIfPacmanIsTouchingCircles()



  fill(255, 255, 0)
  arc(valueX,valueY,pacmanSize,pacmanSize,radians(30),radians(330), PIE)
  
  fill(0,0,0)
  ellipse(valueX+10,valueY-30,15,15)

  // console.log("Draw")
}

// function keyPressed(){
//   if(keyCode === LEFT_ARROW){
//     valueX=valueX-1
//   }
// }


function verifyIfPacmanIsTouchingCircles(){
  const newCircles = circles.filter(circle=>{
    let distance = Math.sqrt(Math.pow(valueX-circle.x,2)+Math.pow(valueY-circle.y,2))
    if(distance>(pacmanSize/2 + circleSize/2)){
      return circle
    }
  })

  circles = newCircles
}