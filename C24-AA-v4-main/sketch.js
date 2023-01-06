
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;
var angle=60;
var ven1,ven2,ven3,ven4




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  btn3 = createImg('Left.png');
  btn3.position(90,30);
  btn3.size(50,50);
  btn3.mouseClicked(rForce);


  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(200,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball2);
 
 ven1=new Cuchillas (50,370,50,20)
 ven2=new Cuchillas (110,370,50,20)
 ven3=new Cuchillas (200,370,50,20)
 ven4=new Cuchillas (240,370,50,20)
 
con=Matter.Constraint.create({
pointA:{x:200,y:20},
//bodyA
bodyB:ball2,
pointB:{x:0,y:0},
length:100,
stiffness:0.1
})
World.add(world,con);

  /* 
  ground1=Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,ground1);
  
  ground2=Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,ground2);

  ground3=Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,ground3);
  */

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
ven1.show();
ven2.show();
ven3.show();
ven4.show();

  /*
  Matter.Body.rotate(ground1,angle);
  push ();
  translate (ground1.position.x,ground1.position.y);
  rotate (angle);
  rect(0,0,100,20)
  pop ();
 
  
  Matter.Body.rotate(ground2,angle);
  push ();
  translate (ground2.position.x,ground2.position.y);
  rotate (angle);
  rect(100,0,100,20)
  pop ();

  
  Matter.Body.rotate(ground3,angle);
  push ();
  translate (ground3.position.x,ground3.position.y);
  rotate (angle);
  rect(100,0,100,20)
  pop ();
*/

line(con.pointA.x,con.pointA.y,ball2.position.x,ball2.position.y);
strokeWeight(2);
stroke(225);

  angle+=0.1

  ellipse(ball2.position.x,ball2.position.y,30);

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
 
console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  

function rForce()
{
  Matter.Body.applyForce(ball2,{x:0,y:0},{x:0.05,y:-0});
}