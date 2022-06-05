function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function gotPoses(results){
    console.log(results);
}
function draw(){
    image(video,0,0,300,300);
}
function take_snapshot(){
    save('myfilterimg.png');
}