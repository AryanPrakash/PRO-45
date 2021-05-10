
var block1,block2,block3,block4,block5,block6,block7,block8;
var playerbar,ball,ground;
var edges;
var blocklayer2;

function setup() {
  createCanvas(800,600);
  //create blocks
  //block layer 1

  //for( var i = (starting position of x);i = (the extend in x);i = i + (gap/distance between 2 objects))
  //blocklayer1 = createSprite(i,30,50,50)
  //if you want it to be a loop in horizontal line otherwise i in place of y position shold be done.

  for(var i=30;i<=750;i = i+60)
  {
    blocklayer1 = createSprite(i,30,50,50);
    blocklayer1.shapeColor = "pink"
  }
  //block layer 2
  for(var i=30;i<=750;i = i+60)
  {
    blocklayer2 = createSprite(i,90,50,50);
    blocklayer2.shapeColor = "red"
  }
  //block layer 3
  for(var i=30;i<=750;i = i+60)
  {
    blocklayer3 = createSprite(i,150,50,50);
    blocklayer3.shapeColor = "blue"
  }
  //block layer 4
  for(var i=30;i<=750;i = i+60)
  {
    blocklayer4 = createSprite(i,210,50,50);
    blocklayer4.shapeColor = "green"
  }
  //create a ball
  ball = createSprite(30,300,30,30);
  ball.shapeColor = "blue";
  ball.velocityX = 4;
  ball.velocityY = -5;
  //create a player bar
  playerbar = createSprite(300,500,200,20);
  playerbar.shapeColor = "purple"
  //create a ground/base
  ground = createSprite(200,200,20,20);
  ground.shapeColor = "red";

}

function draw() {
  background("Yellow");
  textSize(20);
  text(mouseX + "," + mouseY, 400,50)

  //playerbar moment
  //(1) playerbar.x=world.mouseX
  playerbar.x=mouseX

  //bounce
  edges = createEdgeSprites();
  ball.bounceOff(playerbar);
  ball.bounceOff(edges);
  //ball.bounceOff(blocklayer1);

  //callling the functions
  //serve();
  //reset();
  drawSprites();
}
function serve() {
  ball.velocityX = 3;
  ball.velocityY = 4;
}

function reset() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}