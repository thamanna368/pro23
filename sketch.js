const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas; 

 function preload(){
   

   computerBaseImage = loadImage("assets/base2.png");
   playerBaseImage=loadImage("assets/base1.png");
   playerImage=loadImage("assets/player.png");



 }


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   
   computerBase = new ComputerBase(400,random(500,height-400),200,200);
   playerBase = new PlayerBase(300,random(450,height-300),180,150);
   player= new Player (285,playerBase.body.position.y-153,50,180);
   computerplayer= new Computerplayer (285,computerBase.body.position.y-153,50,180);


 
}
function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerBase.display();
   playerBase.display();


   //display Player and computerplayer
   player.display();
   computerplayer.display();


}

