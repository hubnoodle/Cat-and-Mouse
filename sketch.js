  var back;
  var tom, jerry;
  var tom1,tomWalk,tom4;
  var jerry1, jerryTeasing, jerry4;

  function preload() {

      back = loadImage("images/garden.png");

      tom1 = loadImage("images/tomOne.png");

      tomWalk =loadAnimation("images/tomTwo.png","images/tomThree.png");

      tom4 = loadImage("images/tomFour.png");

      jerry1 = loadImage("images/jerryOne.png");

      jerryTease = loadAnimation("images/jerryTwo.png","images/jerryThree.png");

      jerry4 =  loadImage("images/jerryFour.png");   

  }

  function setup(){

      createCanvas(1000,800);

      tom = createSprite(850,600);
      tom.addImage("tomSleeping",tom1);
      tom.addAnimation("tomWalking",tomWalk);
      tom.addAnimation("tomStopped",tom4);

      tom.scale = 0.2;

      jerry = createSprite(200,600);
      jerry.addImage("jerryStanding",jerry1);
      jerry.addAnimation("jerryTeasing",jerryTease);
      jerry.addAnimation("jerryCaught",jerry4);

      jerry.scale = 0.2;

  }

  function draw() {

      background(back);

      //Write condition here to evalute if tom and jerry collide

      if(tom.x - jerry.x < tom.width/2 - jerry.width/2){

         tom.velocityX = 0;

         tom.x = 300;

         tom.changeAnimation("tomStopped",tom4);
         jerry.changeAnimation("jerryCaught",jerry4);

      }

      drawSprites();
  }

  function keyPressed(){

    //For moving and changing animation write code here

    if(keyCode === LEFT_ARROW){

      tom.velocityX = -3;

      tom.changeAnimation("tomWalking",tomWalk);

      jerry.changeAnimation("jerryTeasing",jerryTease);

    }

  }