var astronaut_bathing, astronaut_gymming, astronaut_eating, astronaut_moving, astronaut_sleeping, astronaut_drinking;
var background;
var astronaut;


function preload(){
  astronaut_bathing = loadAnimation("bath1.png", "bath2.png");
  astronaut_eating = loadAnimation("eat2.png", "eat1.png");
  astronaut_drinking = loadAnimation("drink2.png", "drink1.png");
  astronaut_gymming = loadAnimation("gym2.png","gym1.png","gym11.png","gym12.png");
  astronaut_moving = loadAnimation("move1.png","move.png")
  background = loadImage("iss.png");
  astronaut_sleeping = loadImage("sleep.png");
  
}


function setup() {
  createCanvas(400, 400);
  astronaut = createSprite(200,280,20,25);
  astronaut.addAnimation("sleeping",astronaut_sleeping);
  astronaut.scale = 0.1;
}

function draw() {
  background(background);

  if(keyDown(upArrow)){
    astronaut.changeAnimation(astronaut_bathing);
  }

  if(keyDown(downArrow)){
    astronaut.changeAnimation(astronaut_eating);
  }

  if(keyDown(rightArrow)){
    astronaut.changeAnimation(astronaut_drinking);
  }

  if(keyDown(leftArrow)){
    astronaut.changeAnimation(astronaut_moving);
  }

  if(keyDown(m_key)){
    astronaut.changeAnimation(astronaut_gymming);
  }

createEdgeSprites();
astronaut.bounceOff(edges);
}