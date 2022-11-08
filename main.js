var leftHandX=0;
var leftHandY=0;
var rightHandX=0;
var rightHandY=0;
var difference=0;
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
leftHandX= results[0].pose.leftHand.x;
leftHandY= results[0].pose.leftHand.y;
rightHandX= results[0].pose.rightHand.x;
rightHandY= results[0].pose.rightHand.y;
difference= rightHandX-leftHandY;
console.log(difference);
}
}
function modelLoaded(){
    console.log("Model Loaded");
}
function draw(){
background("#DA70D6");
}
