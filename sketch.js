var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

var boy2
var boy3
var boy2Img
var boy3Img

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  boy2Img = loadAnimation("Runner-1.png","Runner-2.png");
  boy2Img = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);

boy2 = createSprite(100,100,30,30);
boy2.scale=0.08;
boy2.addAnimation("JakeRunning",boyImg);

boy3= createSprite(300,300,30,30);
boy3.scale=0.08;
boy3.addAnimation("JakeRunning",boyImg);
  


leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/


  if (keyDown("space")) {
    boy.velocityY = -10;
    }

    if (boy.y>=100||boy.y>=300){
   boy.velocityY +=-4
    }else{
boy.veloctyY = -10

    }

boy.velocityY = boy.velocityY + 3.8


  
  drawSprites();
}
