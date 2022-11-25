img = "";
Status = "";
object = [];

function preload(){
img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(700,500);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}
function draw(){
    image(img,0,0,700,500);
    if(Status != ""){
        r = random(255);
        g = random(255);
        b = random(255);


for(i = 0;i< object.length;i++){
document.getElementById("status").innerHTML = "OBJECT DETECTED";
fill(r,g,b);
console.log(object[i].label);
console.log(object[i].x);
percent = floor(object[i].confidence *100);
text(object[i].label + " " + percent + "%", object[i].x + 15,object[i].y + 15);
noFill();
stroke(r,g,b);
rect(object[i].x - 25,object[i].y - 10,object[i].width,object[i].height);
        }
    }
}
function modelLoaded(){
    console.log("model loaded");
    Status = true;
    objectDetector.detect(img , gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object = results;

}


