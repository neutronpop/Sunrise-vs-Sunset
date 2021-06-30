const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;
var hour;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add

    if(backgroundImg){

     background(backgroundImg)

    }
    if(hour>12){

    text("time:"+hour%12+"pm",500,500);

    }
    else{

    text("time:"+hour%12+"am",500,500);

    }
    Engine.update(engine)
    // write code to display time in correct format here


}



    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

    async function getBackgroundImg(){

        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
        
        var responseJson = await response.json();
        console.log(responseJson);
        var dateTime = responseJson.datetime;
        
        hour = dateTime.slice(11,13);
        
        if(hour >= 6 && hour < 7){
        
            bg = "sunrise1.png";
        
        }
        if(hour >= 7 && hour < 8){
        
            bg = "sunrise2.png"
        
        }
        if(hour >= 8 && hour < 9){
        
            bg = "sunrise3.png"
        
        }
        if(hour >= 10 && hour < 11){
        
            bg = "sunrise4.png"
        
        }
        if(hour >= 12 && hour < 13){
        
            bg = "sunrise5.png"
        
        }
        if(hour >= 14 && hour < 15){
        
            bg = "sunrise6.png"
        
        }
        if(hour >= 16 && hour < 17){
        
            bg = "sunset7.png"
        
        }
        if(hour >= 18 && hour < 19){
        
            bg = "sunset8.png"
        
        }
        if(hour >= 20 && hour < 21){
        
            bg = "sunset9.png"
        
        }
        if(hour >= 22 && hour < 23){
        
            bg = "sunset10.png"
        
        }
        if(hour >= 23 && hour < 24){
        
            bg = "sunset11.png"
        
        }
        if(hour >= 1 && hour < 6){
        
            bg = "sunset12.png"
        
        }
        
        
        console.log(bg)
        backgroundImg = loadImage(bg)
        }



