var canvas;
var music;
var b1;
var b2;
var b3;
var b4;
var a;
var b;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
canvas = createCanvas(800,600);

//create 4 different surfaces
b1=createSprite(75,550,135,25);
b2=createSprite(250,550,135,25);
b3=createSprite(425,550,135,25);
b4=createSprite(600,550,135,25);
b1.shapeColor="red";
b2.shapeColor="blue";
b3.shapeColor="yellow";
b4.shapeColor="white";

//create box sprite and give velocity
a=createSprite(random(20,750),100,30,30);
a.velocityY=4;
a.velocityX=2;
}

function draw() {

background(rgb(169,169,169));
//create edgeSprite
b= createEdgeSprites();


//add condition to check if box touching surface and make it 
a.bounceOff(b);
if(a.isTouching(b1)){
    a.shapeColor="red";
    a.bounceOff(b1);

}
if(a.isTouching(b2)){
    a.shapeColor="blue";
    a.bounceOff(b2);
}
if(a.isTouching(b3)){
    a.shapeColor="yellow";
    a.velocityY=0;
    a.velocityX=0;
}
if(a.isTouching(b4)){
    a.shapeColor="white"
    a.bounceOff(b4);
}

drawSprites();
}
