function preload(){

}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(300,200);
    video= createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function take_snapshot(){
    save('selfie.png');
}
function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
    fill(230,0,0);
    stroke(0,128,0);
    circle(40,40,70);
    circle(600,40,70);
    circle(600,450,70);
    circle(40,450,70);
    fill(0,230,0);
    rect(30, 20, 30, 450);
    rect(600, 20, 30, 450);
    rect(600, 450, 30, 450);

}
