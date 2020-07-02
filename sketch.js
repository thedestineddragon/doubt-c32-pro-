const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    stable1 = new Ground(600,200,250,20);
    stable2 = new Ground(1000,150,250,20);
    ground1 = new Ground(0,0,1200,20);
    box1 = new Box(590,175,15,30);
    box2 = new Box(575,175,15,30);
    box3 = new Box(560,175,15,30);
    box4 = new Box(545,175,15,30);
    box5 = new Box(530,175,15,30);
    box6 = new Box(515,175,15,30);
    box7 = new Box(500,175,15,30);
    box8 = new Box(485,175,15,30);
    box9 = new Box(605,175,15,30);
    box10 = new Box(620,175,15,30);
    box11 = new Box(635,175,15,30);
    box12 = new Box(650,175,15,30);
    box13 = new Box(665,175,15,30);
    box14 = new Box(680,175,15,30);
    box15 = new Box(695,175,15,30);
    box16 = new Box(710,175,15,30);
    box17 = new Box(885,125,15,30);
    box18 = new Box(900,125,15,30);
    box19 = new Box(915,125,15,30);
    box20 = new Box(930,125,15,30);
    box21 = new Box(945,125,15,30);
    box22 = new Box(960,125,15,30);
    box23 = new Box(975,125,15,30);
    box24 = new Box(990,125,15,30);
    box25 = new Box(1005,125,15,30);
    box26 = new Box(1020,125,15,30);
    box27 = new Box(1035,125,15,30);
    box28 = new Box(1050,125,15,30);
    box29 = new Box(1065,125,15,30);
    box30 = new Box(1080,125,15,30);
    box31 = new Box(1095,125,15,30);
    box32 = new Box(1110,125,15,30);
    box33 = new Box(500,145,15,30);
    box34 = new Box(695,145,15,30);
    box35 = new Box(590,145,15,30);
    box36 = new Box(605,145,15,30);
    ball = new Ball(100,150,50);
    rope  = new Rope(ball.body,ball.body.position);
    stable1.display();
    stable2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    ball.display();
    rope.display();
}
function mouseDragged (){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased (){
  rope.fly();
}
async function backgroundphoto(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responsejson = await response.json();
  var date = responsejson.datetime
  var hour = date.slice(11,13)
  if(hour<18 && hour>6){
     backgroundImg = loadImage("bg.png");
  
  }
  else{
      backgroundImg = loadImage("bg2.jpg");
  }
  }