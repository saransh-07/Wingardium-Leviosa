 var bullet,thickness,wall;
 var speed,weight;
 
function setup() {
  createCanvas(1600,400);
 bullet=createSprite(50, 200, 75, 20);
 wall=createSprite(1200,200,thickness,height/2);
 wall.debug=true;
 bullet.debug=true;
 speed=random(223,321);
 weight=random(30,52);
 thickness = random (22,83);
}


function draw() {
  background(80,80,80); 
  bullet.velocityX=speed;
  
  if(wall.x - bullet.x < bullet.width/2 + wall.width/2)
  {
    
    bullet.velocityX=0;
    var damage=Math.pow(speed,2)*weight*0.5/Math.pow(thickness,3); 
    
if(damage < 10){
  
  bullet.shapeColor = "green";

}
 
  if(damage > 10){
       bullet.shapeColor = "red";
        }
  }
 
  drawSprites();
  if(keyWentDown("space")){
    bullet.x=50;
    speed=random(30,52);
    weight=random(223,321);
    thickness=random(22,83);
    bullet.velocityX=speed;
    wall.width=thickness; 
    bullet.shapeColor="gray";
  }
}