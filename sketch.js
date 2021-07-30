const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  towerImage = loadImage("./assets/tower.png");
  backgroundImg = loadImage("./assets/background.gif");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(300, 580, 160, 310);
  cannon=new Cannon(200,100,30,80);
  

}

function draw() {
  background(189);

image(backgroundImg,0,0,width,height);

  Engine.update(engine);

  ground.display();
  
  tower.display();

  cannon.display();
 
}
