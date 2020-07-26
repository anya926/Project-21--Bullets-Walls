var wall, thickness;
var bullet, speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,45,10);
  bullet.shapeColor=color(255,255,255);
  thickness=random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  speed = random(22,202);
  weight = random(30,52);
  bullet.velocityX=speed;
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
}

function draw() {
  background(0,0,0);
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
  }
  drawSprites();
}