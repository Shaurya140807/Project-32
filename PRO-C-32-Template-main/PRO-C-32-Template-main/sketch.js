const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg()
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg)
background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here
    fill ("black")
    textSize (30) 
    if(hour>=12 ){
        text("time: "+hour%12+"pm",50,100)
    }
    else if(hour===0){
        text("time: 12AM",100,100)
    }
    else{
        text("time: "+hour%12+"am",50,100)
    }


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
var responseJson = await response.json()
    // write code slice the datetime
var dt = responseJson.datetime
console.log(dt)
hour = dt.slice(11,13)

if(hour>=4 && hour<=6){
    bg = "sunrise1.png"
}
else if(hour>=6 && hour<=8){
    bg = "sunrise2.png"
}
else if(hour>=8 && hour<=10){
    bg = "sunrise3.png"

}

else if(hour>=10 && hour<=12){
    bg = "sunrise4.png"
}
else if(hour>=12&& hour<=14){
    bg = "sunrise5.png"
}

else if(hour>=14 && hour<=16){
    bg = "sunrise6.png"
}
else if(hour>=17 && hour<=19){
    bg = "sunset7.png"
}

else if(hour>=19 && hour<=21){
    bg = "sunset8.png"
}
else if(hour>=21 && hour<=23){
    bg = "sunset9.png"
}

else if(hour>=23 && hour<=0){
    bg = "sunset10.png"
}

else if(hour>=0 && hour<=3){
    bg = "sunset11.png"
}

else{
    bg = "sunset12.png"
}
backgroundImg = loadImage(bg)
    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
