var coisa;

function setup() {
  createCanvas(400,400);

  coisa = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
    coisa.x += 5;
  }

  if (keyIsDown(LEFT_ARROW)) {
    coisa.x -= 5;
  }



  drawSprites();
}




