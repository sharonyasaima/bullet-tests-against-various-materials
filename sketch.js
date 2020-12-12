var bullet ,wall;
var weight,speed,thickness;
var bulletImage;

function preload(){

bulletImage=loadImage("bullet1.jpg")

}


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(100, 200, 75, 150);
  bullet.addImage(bulletImage);
  bullet.scale=0.5
  weight=random(30,52);
  speed=random(223,321);
  thickness=random(23,83);
  //car.debug=true;

  bullet.velocityX=speed;
  wall=createSprite(1100,200,thickness,200);
  wall.shapeColor="black";

}

function draw() {
  background(255,255,255); 
  
collide(wall,bullet);
  
  drawSprites();


}
  


