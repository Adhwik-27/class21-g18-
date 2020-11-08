var fixedRect, movingRect;

var box1, box2;

function setup() {
  createCanvas(800,800);
  // fixedRect= createSprite(100, 200, 50, 50);
  // movingRect= createSprite(100,100,50,50);
  // fixedRect.shapeColor= "green";
  // movingRect.shapeColor= "green";

box1 = createSprite(100,100,50,50);
box1.velocityY = 5;
box1.shapeColor= "green";
box2= createSprite(100,600,50,50);
box2.shapeColor= "blue";
box2.velocityY = -5;
}

function draw() {
  background(0);
  
  // movingRect.y= mouseY;
  // movingRect.x= mouseX;

bounceOff(box1,box2);
  

  // if(isTouching(movingRect,box1)){
  //   movingRect.shapeColor= "blue";
  //   box1.x= 600;
  // }

  // else{
  //   movingRect.shapeColor= "green";
  //   box1.x= 300;
  // }
  
 
  drawSprites();
}
