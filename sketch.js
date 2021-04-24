const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    Rubber1 = new Rubber(600,200,10);
    Rubber2 = new Rubber(601,250,10);
    Rubber3 = new Rubber(602,250,10);
    Rubber4 = new Rubber(603,250,10);
    Rubber5 = new Rubber(604,250,10);
    Rubber6 = new Rubber(601,251,10);
    Rubber7 = new Rubber(602,251,10);
    Rubber8 = new Rubber(603,251,10);
    Rubber9 = new Rubber(604,251,10);
    Rubber10 = new Rubber(605,251,10);
    stone = new Stone(550,551,70,30);
    iron = new Iron(900, 560,80,80);
}

function draw(){
    background("lightBlue");
    text(mouseX+ ',' +mouseY,mouseX,mouseY);
    Engine.update(engine);
    console.log()
    console.log()
    console.log()
    plane.display();
    hammer.display();
    Rubber1.display();
    Rubber2.display();
    Rubber3.display();
    Rubber4.display();
    Rubber5.display();
    Rubber6.display();
    Rubber7.display();
    Rubber8.display();
    Rubber9.display();
    Rubber10.display();
    stone.display();
    iron.display();
 
}