const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bi,b2,b3,b4,b5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1 = new Paper(200,450,70,70);
	b2 = new Paper(300,450,70,70);
	b3 = new Paper(400,450,70,70);
	b4 = new Paper(500,450,70,70);
	b5 = new Paper(600,450,70,70);
	g1 = new Ground(400,200,400,20);
	r1 = new Chain(b1.body,g1.body,-b1.Diameter*2,0);
    r2 = new Chain(b2.body,g1.body,-b2.Diameter*2,0);
    r3 = new Chain(b3.body,g1.body,-b3.Diameter*2,0);
    r4 = new Chain(b4.body,g1.body,-b4.Diameter*2,0);
    r5 = new Chain(b5.body,g1.body,-b5.Diameter*2,0);
	              
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

    b1.display();
    b2.display();
    b3.display();
	b4.display();
	b5.display();
	g1.display();
	r1.display();
	r2.display();
	r3.display();
	r4.display();
	r5.display();

  drawSprites();
 
}