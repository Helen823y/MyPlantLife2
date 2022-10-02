var canvas, backgroundImage;
var pot, potImage
var sun, sunImage
var sky, skyImage
var sprinkler, sprinklerImage
var plant, plantImage
var droplet1, droplet2, droplet3, dropletImage
var RottedPlant, CloudySun
var RottedPlantImage, CloudySunImage
var question
var alive, SunIntensity, WaterIntensity

function preload(){
  potImage= loadImage("js/png/pot.png")
  sunImage= loadImage("js/png/sun.png")
  plantImage= loadImage("js/png/plant.png")
  skyImage= loadImage("js/png/sky.jpeg")
  sprinklerImage= loadImage("js/png/sprinkler.png")
  dropletImage= loadImage("js/png/droplet.png")
  RottedPlantImage = loadImage("js/png/Rotted Plant.png")
  CloudySunImage = loadImage("js/png/Cloudy Sun.png")
}



function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();

  //createCanvas()

  pot=createSprite(1200,550,10,10)
  pot.addImage(potImage)
  pot.scale=0.4


  plant=createSprite(1190,500,10,10)
  plant.addImage(plantImage)
  plant.scale=1

  


  sprinkler=createSprite(1000,420,10,10)
  sprinkler.addImage(sprinklerImage)
  sprinkler.scale=0.5

  //sky=createSprite(width,height)

  sun=createSprite(1200,100,10,10)
  sun.addImage(sunImage)
  sun.scale=0.7

  droplet1=createSprite(1135,400,10,10)
  droplet1.addImage(dropletImage)
  droplet1.scale=0.1

  droplet2=createSprite(1145,448,10,10)
  droplet2.addImage(dropletImage)
  droplet2.scale=0.1

  droplet3=createSprite(1155,480,10,10)
  droplet3.addImage(dropletImage)
  droplet3.scale=0.1
}


function draw(){
  background(skyImage);

  //if (SunIntensity>=80 || SunIntensity<=60){
  //  image(RottedPlantImage,1190,500,10,10)
  //}
  //if (WaterIntensity<=4 || WaterIntesity>=6){
  //  image(RottedPlantImage,1190, 500, 10, 10)
  //}
 
  drawSprites();

}
