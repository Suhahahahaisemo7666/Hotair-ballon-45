var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
bg = createSprite(165,485)
bg.addImage(bgImg)
bg.scale=1.3

balloon= createSprite(200,200)
balloon.addAnimation("ballon",balloonImg)
balloon.scale = 0.2


}

function draw() {
  
 drawSprites()
        
}