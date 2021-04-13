var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("/star.png");
	fairyImg = loadAnimation("/fairyImage1.png","/fairyImage2.png");
	bgImg = loadImage("/starNight.png");
	fairyVoice = loadSound("/soundJoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 ,30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  if(keyDown(LEFT_ARROW)){
	fairy.x -= 5;
}  if(keyDown(RIGHT_ARROW)){
	fairy.x += 5;

	if(keyDown(UP_ARROW)){
		fairy.y -= 5;
	}  

	star.collide(fairy);
	


}  if(keyDown(DOWN_ARROW)){
	star.velocityY = 15;
}

if(star.position.y > 470){
	star.y = 470;
	fairy.y = 500;
	fairy.x = star.x - 140;
  }


  drawSprites();

}




