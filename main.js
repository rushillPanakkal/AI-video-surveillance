
status = "";
function preLoad(){
    video = createVideo(VIDEO);
    video.hide();
}

function setup(){
    canvas= createCanvas(480,380);
    canvas.center();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Object";
}
function modelLoaded(){
    console.log("model loaded");
    status = true; 
}