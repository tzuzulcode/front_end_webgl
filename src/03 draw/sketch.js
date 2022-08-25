const width = 400
const height = 400

const size = 200

const negroBtn = document.getElementById("negro")
const amarilloBtn = document.getElementById("amarillo")
const rosaBtn = document.getElementById("rosa")
const salmonBtn = document.getElementById("salmon")
const verdeBtn = document.getElementById("verde")
const eraseBtn = document.getElementById("erase")
const cleanBtn = document.getElementById("clean")

let color = "#000000"
let clean = false
let erasing = false

negroBtn.onclick = ()=>{
  color = "#000000"
  erasing = false
}
amarilloBtn.onclick = ()=>{
  color = "#f5e960"
  erasing = false
}
rosaBtn.onclick = ()=>{
  color = "#dfb2f4"
  erasing = false
}
salmonBtn.onclick = ()=>{
  color = "#f49097"
  erasing = false
}
verdeBtn.onclick = ()=>{
  color = "#8de7c0"
  erasing = false
}
eraseBtn.onclick = ()=>{
  erasing = true
}
cleanBtn.onclick = ()=>{
  clean = true
}

const transparency = (value)=>value*(255/100)

function setup() {
  createCanvas(width, height);
  background("#f2f5ff")
}

function draw() {
  // ellipse(mouseX,mouseY,10)
  if(clean){
    background("#f2f5ff")
    clean = false
  }
  if(mouseIsPressed && !erasing){
    strokeWeight(3)
    stroke(color)
    line(mouseX,mouseY,pmouseX,pmouseY)
  }
  if(mouseIsPressed && erasing){
    strokeWeight(5)
    stroke("#f2f5ff")
    line(mouseX,mouseY,pmouseX,pmouseY)
  }

  if(mouseIsPressed && mouseButton===LEFT){
    strokeWeight(3)
    stroke(color)
    line(mouseX,mouseY,pmouseX,pmouseY)
  }

  // console.log(pmouseX,pmouseY)

  // if(keyIsPressed){
  //   background(0)
  //   fill(255)
  //   textSize(64)
  //   text(key,50,50)
  // }else{
  //   background("#f2f5ff")
  // }

}
