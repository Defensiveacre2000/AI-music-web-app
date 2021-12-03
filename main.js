song = "";
song_2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY =0;

function preload(){
    song = loadSound("Tera Naam.mp3");
    song_2 = loadSound("Param Sundari.mp3")
}

//creating canvas 
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
 //initializing  poseNet model
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}



function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        
        scoreLW = results[0].pose.keypoints[9].score;
        console.log("scoreLW = " + scoreLW );

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log(" leftWristX = "+leftWristX +  " leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log(" rightWristX = "+rightWristX +  " rightWristY = " + rightWristY);

        

    } 
}

function modelLoaded() {
    console.log("Pose Net Is initialized")
}

function draw(){
    image (video,0,0,600,500);
}


