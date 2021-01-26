var car, wall;
var speed, weight;


function setup() {
  createCanvas(800,400);
  car = createSprite(20, 200, 50, 50);
  car.velocityX= random(4, 10);


  weight= random(400, 1500);

  wall= createSprite(700, 200, 20, 110);

}

function draw() {
  background("Black");
  
  if(wall.x -car.x< (car.width+ wall.width)/2){
    car.velocityX= 0;
     var deformation= 0.5*weight*car.velocityX* car.velocityX/ 22509;
    if(deformation> 180) {
      car.shapeColor= "red";
      
    }
    if(deformation<180 && deformation> 100){
      
      car.shapeColor= "yellow"
      
    }
    if(deformation< 100){
      
    car.shapeColor= "green"
    
   }
  }
  drawSprites();
}