const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,790,width,20);
	paper = new Paper(100,100);
	dustbin1 = new Dustbin1(1000,680);
	dustbin2 = new Dustbin2(910,680);
	dustbin3 = new Dustbin2(1090,680);
	launcher = new Launcher(paper.body,{x:100, y:100});

	Engine.run(engine);
}


function draw() {
  background("white");

  launcher.display();
  ground.display();
  paper.display();
  dustbin1.display();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-80});
  }
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    launcher.fly();
}