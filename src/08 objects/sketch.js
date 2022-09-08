import Point from "./Point.js";

const width = 500
const height = 500

let arrayOfPoints = []

window.setup = function() {
  createCanvas(width, height);
  for(let i=0;i<10;i++){
    let x = random(width)
    let y = random(height)
    const point = new Point("Punto 1",x,y,5,5)

    arrayOfPoints.push(point)
  }
}

window.draw = function() {
  background(204);

  arrayOfPoints.forEach((point)=>{
    point.move()
    point.display()
  })
}