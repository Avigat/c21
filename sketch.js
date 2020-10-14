var fixedRect, movingRect;
var obj1,obj2,obj3,obj4;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  movingRect=createSprite(400, 400,80,30);

  obj1=createSprite(100,100,30,80);
  obj2=createSprite(100,200,30,80);
  obj3=createSprite(100,300,30,80);
  obj4=createSprite(100,400,30,80);

  fixedRect.shapeColor="yellow";
  movingRect.shapeColor="yellow";

  obj1.shapeColor="yellow";
  obj2.shapeColor="yellow";
  obj3.shapeColor="yellow";
  obj4.shapeColor="yellow";

  fixedRect.debug=true;
  movingRect.debug=true;

  obj1.debug=true;
  obj2.debug=true;
  obj3.debug=true;
  obj4.debug=true;

}

function draw() {
  background(0,0,0);
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,obj4)){
    movingRect.shapeColor="red";
    obj4.shapeColor="red";
  }
  else{
    movingRect.shapeColor="yellow";
    obj4.shapeColor="yellow";
  }

  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x < object2.width/2 + object1.width/2
    && object2.x-object1.x < object2.width/2 + object1.width/2
    && object1.y-object2.y < object2.height/2 + object1.height/2
    && object2.y-object1.y < object2.height/2 + object1.height/2){
      
    return true;
  }
  else{
    return false;
  }
}