var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fairyA,fairyV;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
    fairyA=loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
    fairyV=loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

    engine = Engine.create();
	world = engine.world;

	//write code to play fairyVoice sound
    fairyV.play();
	//create fairy sprite and add animation for fairy
    
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    fairy= createSprite(200,400,0,0);
	fairy.addAnimation("nottooth",fairyA);
	fairy.scale=0.3;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
  Engine.update(engine);

  //write code to stop star in the hand of fairy
  if(star.y > 330 && starBody.position.y > 330){
     Matter.Body.setStatic(starBody,true);
      
  }
  

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
	 if(keyCode === LEFT_ARROW){
       
	 	fairy.x = fairy.x-10;      

	 }

	 if(keyCode === RIGHT_ARROW){
       
	 	fairy.x = fairy.x+10;      

	 }


}
