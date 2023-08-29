narizX = 0;
narizY = 0;
function preload(){
lentes = loadImage('https://i.postimg.cc/qMQNfKKf/download-3-removebg-preview.png')
}
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(lentes,narizX,narizY,30,30);
   //fill('#FFF59D');
   //stroke('#DCE775');
   //circle(narizX,narizY,20);
 
}
function tomarfoto(){
    save("foto con filtro.png");
}
function modelLoaded(){
    console.log("modelo cargado");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    narizX = results[0].pose.nose.x;
    narizY = results[0].pose.nose.y;
    console.log("nariz x ="+results[0].pose.nose.x);
    console.log("nariz y ="+results[0].pose.nose.y);
}
}