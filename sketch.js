const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground    = new Ground(600,height,1200,20);
    platform  = new Ground(610,360,80,10)
    ball      = new Bird(100,300);
    slingshot = new SlingShot(ball.body,{x:400, y:10});
    box1      = new Pig(610,300)
    box2      = new Pig(610,300)
    box3      = new Pig(610,300)
    box4      = new Pig(610,300)
    box5      = new Pig(610,300)
    box6      = new Pig(610,300)
    box11      = new Pig(500,320)
    box22      = new Pig(500,320)
    box33      = new Pig(500,320)
    box44      = new Pig(500,320)
    box55      = new Pig(500,320)
    box66      = new Pig(500,320)
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    ball.display();
    slingshot.display();  
    platform.display();
    box1.display();  
    box2.display();  
    box3.display();  
    box4.display();  
    box5.display();  
    box6.display();  
    box11.display();  
    box22.display();  
    box33.display();  
    box44.display();  
    box55.display();  
    box66.display();  


}

function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
