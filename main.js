function preload(){
    
}
function setup(){
video = createCapture(VIDEO);
video.size(550, 500);
video.position(250, 150);

canvas = createCanvas(550, 500);
canvas.position(1000, 150);

classify = ml5.poseNet(video, modelLoaded);
classify.on("pose", gotResults);
}
function gotResults(results){
if(results.length > 0){
    console.log(results);
}
}
function modelLoaded(){
    console.log("Model Loaded");
}
function draw(){
background("#DA70D6");
}
