
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObj1;
var bobObj2;
var bobObj3;
var bobObj4;
var bobObj5;
var roofObj;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 bobObj1.display();
 bobObj2.display();
 bobObj3.display();
 bobObj4.display();
 bobObj5.display();
 roofObj.display();

  
  
  drawSprites();
 
}



