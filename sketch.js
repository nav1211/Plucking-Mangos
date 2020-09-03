
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,ground,stone,boyImage, mango1, mango2, mango3, mango4, mango5, slingshot;

function preload()
{
	boyImage = loadImage("boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(600,380,400,600);
	ground = new Ground(400,680,800,40);
	stone = new Stone(300,250,100);
	mango1 = new Mango(300,100);
	mango2 = new Mango(230,170);
	mango3 = new Mango(350,130);
	mango4 = new Mango(260,140);
	mango5 = new Mango(300,160);
	slingshot = new Slingshot(stone.body, {x: 140, y: 565});

	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(255);
  

  image(boyImage,100,510,200,200);

  
  tree.display();
  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  slingshot.display();

  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);
  detectollision(stone, mango4);
  detectollision(stone, mango5);

  drawSprites();
 
}

function mouseDragged(){

	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){

	slingshot.fly();

}

function keyPressed(){

	if(keyCode === 32){

		Matter.Body.setPosition(stone.body, {x: 300, y: 250});
		slingshot.attach(stone.body);

	}

}

function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}

}