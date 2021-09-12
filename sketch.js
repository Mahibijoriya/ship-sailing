var ship, ship_sailing
var seaImage
function preload(){
  seaImage=loadImage("sea.png")
  ship_sailing=loadAnimation("ship-2.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);

  sea=createSprite(200,200,10,10);
  sea.addImage(seaImage);
  sea.scale=0.5;
  

  ship=createSprite(200,280, 10, 10);
  ship.addAnimation("sailing", ship_sailing);
  ship.scale=0.1;

  
  
  
   
}


function draw() {
  background("blue");
  sea.velocityX=-4;
  if (sea.x<0){
    sea.x=sea.width/8;
  }

 drawSprites();

}