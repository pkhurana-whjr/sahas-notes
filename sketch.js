//namespacing - short names 
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

//global variables -declared outside the functions (public)
let engine;
let world;
var ground;
function setup() 
{
  createCanvas(500,500);
  //step 1: create the engine  (Space)
  engine = Engine.create();
  //step 2: create the world (different Planets)
  world = engine.world;
 
  //step 3: create the object (eg create object using matter.js)
  //the object is not seen. It is created in computer memory
  ground = Bodies.rectangle(250, 250, 500, 5);
  //step 4: adding the object to the world 
  World.add(world, ground);
  console.log(ground.position);
 
  

   rectMode(CENTER);
  // ellipseMode(RADIUS);
 

  textSize(50)
}

function draw() 
{
  background(51);
  // image(towerImage, 0, 0, 160, 310);
  //step 5: give the shape to the object created using matter.
  rect(ground.position.x, ground.position.y, 500, 5);
  Engine.update(engine);
   
}




