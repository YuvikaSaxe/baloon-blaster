var ground
var bg1, balloon1, balloon2, balloon3, balloon4, balloon5, balloons,balloonGroup, rBalloon,
gBalloon, bBalloon,oBalloon, yBalloon;

var PLAY= 1;
var END= 0;
var gameState= PLAY;

function preload(){
    bg1= loadImage("bg1.gif");
    balloon1=loadImage("blue.png")
    balloon2=loadImage("orange.png")
    balloon3=loadImage("red.png")
    balloon4=loadImage("green.png")
    balloon5=loadImage("yellow.png") 
} 
function setup(){
    createCanvas(850,500)
score=0
ground=createSprite(0,490,1850,20)
ground.shapeColor="blue"

}

function draw(){
    background(bg1);
    textSize(25);
    fill("blue");
    text("Score: "+ score, 700, 50);
if(gameState===PLAY)
{
    var rand = Math.round(random(1,5));
    
    if(rand===1){
         redBalloons()
        }
    else if(rand===2){
        greenBalloons()

        }
    else if(rand===3){
        blueBalloons()
  
        }
    else if(rand===4){
        orangeBalloons()
  
        }
      else if(rand===5){
        yellowBalloons()
      }
}
  //write other else if 

if(mousePressedOver(rBalloon)){
  rBalloon.visible=false     
    score=score+1
 }
if(mousePressedOver(bBalloon)){
    bBalloon.visible=false
    score=score+1
    }
if(mousePressedOver(gBalloon)){
    gBalloon.visible=false
    score=score+1
    }
if(mousePressedOver(oBalloon)){
    oBalloon.visible=false
 score=score+1
    }
 if(mousePressedOver(yBalloon)){
    yBalloon.visible=false
    score=score+1
    }
    if(balloons.isTouching(ground)){
        score= score-1
    }
    if(score===0){
    textSize(25)
    fill("green")
    text(GAME OVER!,400,100);
    }
    
    if(score===50){
    textSize(25)
    fill("yellow")
    text(YOU WON!,400,100)
         textSize(25)
    fill("yellow")
    text(Press space to get another chance to play,400,200)
    }
/*
    if(rBalloon.isTouching(ground))
    {
        score=score-1
    }
   
    if(bBalloon.isTouching(ground))
    {
        score=score-1
    }
   
    if(gBalloon.isTouching(ground))
    {
        score=score-1
    }
   
    if(oBalloon.isTouching(ground))
    {
        score=score-1
    }
   
    if(yBalloon.isTouching(ground))
    {
        score=score-1
    }*/
drawSprites()
} 


function redBalloons()
{
    if(frameCount%60 === 0) {
        rBalloon = createSprite(random(100,700),-20 );
        rBalloon.velocityY=6;
        rBalloon.scale=0.2
        rBalloon.addImage(balloon3);
        rBalloon.lifetime=300
       }
}
function greenBalloons()
{
    if(frameCount%60 === 0) {
        gBalloon = createSprite(random(100,700),-20 );
        gBalloon.velocityY=6;
        gBalloon.scale=0.2
        gBalloon.addImage(balloon4);
        gBalloon.lifetime=300
       }
}
function blueBalloons()
{
    if(frameCount%60 === 0) {
        bBalloon = createSprite(random(100,700),-20 );
        bBalloon.velocityY=6;
        bBalloon.scale=0.1
        bBalloon.addImage(balloon1);
        bBalloon.lifetime=300
       }
}
function orangeBalloons()
{
    if(frameCount%60 === 0) {
        oBalloon = createSprite(random(100,700),-20 );
        oBalloon.velocityY=6;
        oBalloon.scale=0.2, 
        oBalloon.addImage(balloon2);
        oBalloon.lifetime=300
    
       }
}
function yellowBalloons()
{
    if(frameCount%60 === 0) {
        yBalloon = createSprite(random(100,700),-20 );
        yBalloon.velocityY=6;
        yBalloon.scale=0.2, 
        yBalloon.addImage(balloon5);
        yBalloon.lifetime=300
    
       }
}
//create other functions here

//function reset(){
  //  if(keyPressed===SPACE){
    //    score= 0;
      //  gameState=== PLAY;
    //}
//}

