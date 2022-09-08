class Point{
    constructor(name, x , y, diameter, speed){
        this.name = name
        this.x = x
        this.y = y
        this.speed = speed
        this.diameter = diameter
    }

    move(){
      this.x += random(-this.speed,this.speed)
      this.y += random(-this.speed,this.speed)
    }

    display(){
        fill(0)
      ellipse(this.x,this.y,this.diameter,this.diameter)
    }
}

// Funciones de alto orden: High order functions
// Agregar propiedades al objeto
// function Point(name, x , y, diameter, speed){
//   this.name = name
//   this.x = x
//   this.y = y
//   this.speed = speed
//   this.diameter = diameter

//   this.move = function(){
//     this.x += random(-this.speed,this.speed)
//     this.y += random(-this.speed,this.speed)
//   }

//   this.display = function(){
//     ellipse(this.x,this.y,this.diameter,this.diameter)
//   }
// }

export default Point