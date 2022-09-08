const width = window.innerWidth
const height = 400

function setup() {
  createCanvas(width, height);

}

function draw() {
  background(204)
  for(let i=0;i<10;i++){
    let scalar = 1
    createOwl(i*100+50,150,scalar)
  }
}

function createOwl(x,y,s){
  // center: 0,0
  push() //Almacenaria la configuración de estilo: center(0.0)
  translate(x,y)
  if(dist(mouseX,mouseY,x,y)<Math.sqrt((50*50 + 35*35))){
    s = 1.5
  }
  scale(s)
  stroke(0)
  strokeWeight(70)
  line(0,-35,0,-65)
  fill(255)
  noStroke()
  ellipse(17.5,-65,35,35)
  ellipse(-17.5,-65,35,35)
  arc(0,-65,70,70,0,PI)
  fill(0)
  ellipse(17.5,-65,10,10)
  ellipse(-17.5,-65,10,10)
  quad(0,-60,5,-55,0,-50,-5,-55)
  pop() // Retira la última configuración de estilos: Restablece center(0,0)
}
