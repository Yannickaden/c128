song1="";
song2="";
lwx=0;
lwy=0;
rwx=0;
rwy=0;

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
    video=createCapture(VIDEO);
video.hide();
}
function draw(){
    image(video,0,0,600,500);
    }

    function play(){
        song1.play();
        song1.setVolume(1);
        song1.rate(1);
        song2.play();
        song2.setVolume(1);
        song2.rate(1);
    }

function modelLoaded(){
    console.log("model is loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        lwx=results[0].pose.leftWrist.x;
        lwy=results[0].pose.leftWrist.y;
        console.log("left wrist x="+lwx+"left wrist y="+lwy);
        rwx=results[0].pose.rightWrist.x;
        rwy=results[0].pose.rightWrist.y;
        console.log("right wrist x="+rwx+"right wrist y="+rwy);
    }
}























