var sea; 
var seaImag;
var ship,shipImg1;

function preload(){
seaImag = loadImage ("sea.png");
shipImg1 = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");
  sea = createSprite (400,200);
  sea.addImage ("sea",seaImag);
  sea.velocityX = -5;
  sea.scale = 0.3;

  ship = createSprite (200,250,10,10);
  ship.addAnimation ("ship",shipImg1);
  ship.scale = 0.3;
}

function draw() {
  if (sea.x <0){
    sea.x=sea.width/2;
}
drawSprites ();
 }

