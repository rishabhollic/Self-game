var doc,doc1,maskp,virus1,virus2,virus3, fod, doctor;
var o1,o2,o3,o4,o5,o6,o7,o8,o9,o10,o11,o12,o13,o14,o15,o16,o17,o18,o19,o20,o21,o22,o23,o24,o25,o26,o27,o28;
var objectsGroup, foodGroup;
var Score;
function preload()
{
  doc = loadImage("doctor.png");
  doc1 = loadImage("doctor1.png");
  maskp = loadImage("mask.png");
  virus1 = loadImage("v1.png");
  virus2 = loadImage("v2.png");
  virus3 = loadImage("v3.png");
  fod = loadImage("fodder.png");
}
function setup()
{
  createCanvas(800,400);
  doctor = createSprite(750, 350, 10, 10);
  doctor.addImage(doc);
  doctor.scale=0.1;
}

function draw() {
  background("black");  
  //boundaries
  o1 = createSprite(400, 0, 800, 25);
  o2 = createSprite(400, 395, 800, 25);
  o3 = createSprite(0, 200, 25, 400);
  o4 = createSprite(795, 200, 25, 400);
  //virus containment zones
  o5 = createSprite(750, 315, 75, 10);
  o6 = createSprite(720, 380, 10, 50);
  o7 = createSprite(160, 178, 250, 10);
  o8 = createSprite(650, 275, 200, 10);
  o9 = createSprite(250, 225, 100, 10);
  o10 = createSprite(640, 175, 300, 10);
  o11 = createSprite(285, 125, 150, 10);
  o12 = createSprite(450, 310, 150, 10);
  o13 = createSprite(100, 350, 150, 10);
  o14 = createSprite(640, 50, 200, 10);
  o15 = createSprite(400, 250, 100, 10);
  o16 = createSprite(370, 175, 35, 10);
  o17 = createSprite(430, 175, 35, 10);
  o18 = createSprite(350, 213, 10, 85);
  o19 = createSprite(450, 213, 10, 85);
  o20 = createSprite(200, 300, 200, 10);
  o21 = createSprite(570, 100, 300, 10);
  o22 = createSprite(450, 340, 250, 10);
  o23 = createSprite(450, 213, 10, 85);
  o24 = createSprite(450, 213, 10, 85);
  o25 = createSprite(450, 213, 10, 85);
  o26 = createSprite(450, 213, 10, 85);
  o27 = createSprite(450, 213, 10, 85);
  o28 = createSprite(450, 213, 10, 85);
  //adding the objects to a group
  /*objectsGroup.add(o1);
  objectsGroup.add(o2);
  objectsGroup.add(o3);
  objectsGroup.add(o4);
  objectsGroup.add(o5);
  objectsGroup.add(o6);
  objectsGroup.add(o7);
  objectsGroup.add(o8);
  objectsGroup.add(o9);
  objectsGroup.add(o10);
  objectsGroup.add(o11);
  objectsGroup.add(o12);
  objectsGroup.add(o13);
  objectsGroup.add(o14);
  objectsGroup.add(o15);
  objectsGroup.add(o16);
  objectsGroup.add(o17);
  objectsGroup.add(o18);
  objectsGroup.add(o19);
  objectsGroup.add(o20);
  objectsGroup.add(o21);
  objectsGroup.add(o22);
  objectsGroup.add(o23);
  objectsGroup.add(o24);
  objectsGroup.add(o25);
  objectsGroup.add(o26);
  objectsGroup.add(o27);
  objectsGroup.add(o28);*/
  // making the doctor bounce off the blocks
  doctor.bounceOff(o1);
  doctor.bounceOff(o2);
  doctor.bounceOff(o3);
  doctor.bounceOff(o4);
  doctor.bounceOff(o5);
  doctor.bounceOff(o6);
  doctor.bounceOff(o7);
  doctor.bounceOff(o8);
  doctor.bounceOff(o9);
  doctor.bounceOff(o10);
  doctor.bounceOff(o11);
  doctor.bounceOff(o12);
  doctor.bounceOff(o13);
  doctor.bounceOff(o13);
  doctor.bounceOff(o14);
  doctor.bounceOff(o15);
  doctor.bounceOff(o16);
  doctor.bounceOff(o17);
  doctor.bounceOff(o18);
  doctor.bounceOff(o19);
  doctor.bounceOff(o20);
  doctor.bounceOff(o21);
  doctor.bounceOff(o22);
  doctor.bounceOff(o23);
  doctor.bounceOff(o24);
  doctor.bounceOff(o25);
  doctor.bounceOff(o26);
  doctor.bounceOff(o27);
  doctor.bounceOff(o28);


  //healthy food
  for (var i = 40; i < 750; i=i+15) 
  {
      var food = createSprite(i, 25 , 7.5, 7.5);
      food.addImage(fod);
      food.scale=0.05;
      if (doctor.isTouching(food))
      {
        food.destroy();
        Score=+1
      }
  }
  for (var i = 25; i < 530; i=i+15) 
  {
      var food = createSprite(i, 60 , 7.5, 7.5);
      food.addImage(fod);
      food.scale=0.05;
      if (doctor.isTouching(food))
      {
        food.destroy();
        Score=+1
      }
  }
  for (var i = 25; i < 400; i=i+15) 
  {
      var food = createSprite(i, 100 , 7.5, 7.5);
      food.addImage(fod);
      food.scale=0.05;
      if (doctor.isTouching(food))
      {
        food.destroy();
        Score=+1
      }
  }
  for (var i = 400; i < 770; i=i+15) 
  {
      var food = createSprite(i, 120 , 7.5, 7.5);
      food.addImage(fod);
      food.scale=0.05;
      if (doctor.isTouching(food))
      {
        food.destroy();
        Score=+1
      }
  }
  for (var i = 25; i < 325; i=i+15) 
  {
      var food = createSprite(i, 200 , 7.5, 7.5);
      food.addImage(fod);
      food.scale=0.05;
      if (doctor.isTouching(food))
      {
        food.destroy();
        Score=+1
      }
  }
  for (var i = 480; i < 770; i=i+15) 
  {
      var food = createSprite(i, 215 , 7.5, 7.5);
      food.addImage(fod);
      food.scale=0.05;
      if (doctor.isTouching(food))
      {
        food.destroy();
        Score=+1
      }
  }
  for (var i = 25; i < 330; i=i+15) 
  {
      var food = createSprite(i, 250 , 7.5, 7.5);
      food.addImage(fod);
      food.scale=0.05;
      if (doctor.isTouching(food))
      {
        food.destroy();
        Score=+1
      }
  }
  for (var i = 280; i < 550; i=i+15) 
  {
      var food = createSprite(i, 275 , 7.5, 7.5);
      food.addImage(fod);
      food.scale=0.05;
      if (doctor.isTouching(food))
      {
        food.destroy();
        Score=+1
      }
  }
  for (var i = 25; i < 350; i=i+15) 
  {
      var food = createSprite(i, 320 , 7.5, 7.5);
      food.addImage(fod);
      food.scale=0.05;
      if (doctor.isTouching(food))
      {
        food.destroy();
        Score=+1
      }
  }
  for (var i = 480; i < 770; i=i+15) 
  {
      var food = createSprite(i, 215 , 7.5, 7.5);
      food.addImage(fod);
      food.scale=0.05;
      if (doctor.isTouching(food))
      {
        food.destroy();
        Score=+1
      }
  }
  text(Score, 780, 50);
  if (keyDown("UP_ARROW"))
  {
    doctor.velocityY=-10;
    doctor.velocityX=0;
  }
  if (keyDown("DOWN_ARROW"))
  {
    doctor.velocityY=10;
    doctor.velocityX=0;
  }
  if (keyDown("RIGHT_ARROW"))
  {
    doctor.velocityX=10;
    doctor.velocityY=0;
  }
  if (keyDown("LEFT_ARROW"))
  {
    doctor.velocityX=-10;
    doctor.velocityY=0;
  }
  power();
  villain();
  drawSprites();

  console.log(mouseX, mouseY);
}
function power()
{
  mask1 = createSprite(760, 290, 10, 10);
  mask2 = createSprite(750, 80, 10, 10);
  mask3 = createSprite(50, 280, 10, 10);
  mask4 = createSprite(50, 75, 10, 10);
  mask5 = createSprite(320, 170, 10, 10);
  mask1.addImage(maskp);
  mask2.addImage(maskp);
  mask3.addImage(maskp);
  mask4.addImage(maskp);
  mask5.addImage(maskp);
  mask1.scale=0.1;
  mask2.scale=0.1;
  mask3.scale=0.1;
  mask4.scale=0.1;
  mask5.scale=0.1;

  if (doctor.isTouching(mask1)||doctor.isTouching(mask2)||doctor.isTouching(mask3)||doctor.isTouching(mask4)||doctor.isTouching(mask5))
  {
    doctor.addImage(doc1);
    if (doctor.image===doc1)
    {
    if(doctor.isTouching(enemy1))
    {
      enemy1.destroy();
      doctor.addImage(doc);
    }
    if(doctor.isTouching(enemy2))
    {
      enemy2.destroy();
      doctor.addImage(doc);
    }
    if(doctor.isTouching(enemy3))
    {
      enemy3.destroy();
      doctor.addImage(doc);
    }
  }
  }
}
function villain()
{
    background("black");
    var enemy1 = createSprite(400,215,10,10);
    enemy1.velocityY = -10;
    enemy1.addImage(virus1);
    enemy1.scale=0.1;
    var enemy2 = createSprite(400,215,10,10);
    enemy2.velocityY = -1;
    enemy2.addImage(virus2);
    enemy2.scale=0.1;
    var enemy3 = createSprite(400,215,10,10);
    enemy3.velocityY = -1;
    enemy3.addImage(virus3);
    enemy3.scale=0.1;

    enemy1.bounceOff(o1);
    enemy1.bounceOff(o2);
    enemy1.bounceOff(o3);
    enemy1.bounceOff(o4);
    enemy1.bounceOff(o5);
    enemy1.bounceOff(o6);
    enemy1.bounceOff(o7);
    enemy1.bounceOff(o8);
    enemy1.bounceOff(o9);
    enemy1.bounceOff(o10);
    enemy1.bounceOff(o11);
    enemy1.bounceOff(o12);
    enemy1.bounceOff(o13);
    enemy1.bounceOff(o13);
    enemy1.bounceOff(o14);
    enemy1.bounceOff(o15);
    enemy1.bounceOff(o16);
    enemy1.bounceOff(o17);
    enemy1.bounceOff(o18);
    enemy1.bounceOff(o19);
    enemy1.bounceOff(o20);
    enemy1.bounceOff(o21);
    enemy1.bounceOff(o22);
    enemy1.bounceOff(o23);
    enemy1.bounceOff(o24);
    enemy1.bounceOff(o25);
    enemy1.bounceOff(o26);
    enemy1.bounceOff(o27);
    enemy1.bounceOff(o28);
    
   enemy2.bounceOff(o1);
   enemy2.bounceOff(o2);
   enemy2.bounceOff(o3);
   enemy2.bounceOff(o4);
   enemy2.bounceOff(o5);
   enemy2.bounceOff(o6);
   enemy2.bounceOff(o7);
   enemy2.bounceOff(o8);
   enemy2.bounceOff(o9);
   enemy2.bounceOff(o10);
   enemy2.bounceOff(o11);
   enemy2.bounceOff(o12);
   enemy2.bounceOff(o13);
   enemy2.bounceOff(o13);
   enemy2.bounceOff(o14);
   enemy2.bounceOff(o15);
   enemy2.bounceOff(o16);
   enemy2.bounceOff(o17);
   enemy2.bounceOff(o18);
   enemy2.bounceOff(o19);
   enemy2.bounceOff(o20);
   enemy2.bounceOff(o21);
   enemy2.bounceOff(o22);
   enemy2.bounceOff(o23);
   enemy2.bounceOff(o24);
   enemy2.bounceOff(o25);
   enemy2.bounceOff(o26);
   enemy2.bounceOff(o27);
   enemy2.bounceOff(o28);

  enemy3.bounceOff(o1);
  enemy3.bounceOff(o2);
  enemy3.bounceOff(o3);
  enemy3.bounceOff(o4);
  enemy3.bounceOff(o5);
  enemy3.bounceOff(o6);
  enemy3.bounceOff(o7);
  enemy3.bounceOff(o8);
  enemy3.bounceOff(o9);
  enemy3.bounceOff(o10);
  enemy3.bounceOff(o11);
  enemy3.bounceOff(o12);
  enemy3.bounceOff(o13);
  enemy3.bounceOff(o13);
  enemy3.bounceOff(o14);
  enemy3.bounceOff(o15);
  enemy3.bounceOff(o16);
  enemy3.bounceOff(o17);
  enemy3.bounceOff(o18);
  enemy3.bounceOff(o19);
  enemy3.bounceOff(o20);
  enemy3.bounceOff(o21);
  enemy3.bounceOff(o22);
  enemy3.bounceOff(o23);
  enemy3.bounceOff(o24);
  enemy3.bounceOff(o25);
  enemy3.bounceOff(o26);
  enemy3.bounceOff(o27);
  enemy3.bounceOff(o28);
   

  if(doctor.isTouching(enemy1)||doctor.isTouching(enemy2)||doctor.isTouching(enemy3))
  {
    createSprite(400,200,800,400);
    fill("black");
    text("Game Over. Your Score is"+ Score, 400,200);
  }
 
}