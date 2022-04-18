function preload(){

}

function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video, 170, 140, 320, 240);
    fill(0,128,0)
    stroke(0,128,0)
    rect(35,10,30,430)
    rect(550,10,30,430)
    rect(90,10,450,30)
    rect(80,420,450,30)
    fill(255,0,0)
    stroke(255,0,0)    
    circle(50,435,80)
    circle(568,435,80)
    circle(60,35,80) 
    circle(558,35,80)
       
}

function take_snapshot(){
    save("student_Name.png");
}