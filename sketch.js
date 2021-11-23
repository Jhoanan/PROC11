var sea; 
var seaImag;
var shipImg1;

function preload(){
seaImag = loadImage ("sea.png");
shipImg1 = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");
}

function draw() {
 spriteName.addImage (seaImag);
}
 if (sea.x <0){
     sea.x=sea.width/2;
 }
 drawSprites ();
