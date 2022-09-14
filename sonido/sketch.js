let mySoundA;
let mySoundB;
let mySoundC;

let playingA = false;
let playingB = false;
let playingC = false;

function preload() {
  soundFormats('mp3', 'ogg', 'wav');
  mySoundA = loadSound('sounds/sonido1.wav');
  mySoundB = loadSound('sounds/sonido2.wav');
  mySoundC = loadSound('sounds/sonido3.wav');
}

function setup() {
  let canvas = createCanvas(400, 250);
  canvas.parent('canvas-container');
}

function draw() {
  background(220);
  fill(150,10,10);
  textSize(30);
  text("Los 14 cañonazos", 50, 50);
  fill(255);
  noStroke();

  textSize(18);

  fill(255);
  rect(50, 60, 300, 30);  
  fill(0);
  text("Sonido A", 60, 80);
  if(!playingA){
    triangle(320, 60+15-7, 320, 60+15+7, 330, 60+15);
  }else{
    fill(255,0,0);
    rectMode(CENTER);
    rect(325, 60+15, 15, 15);
    rectMode(CORNER);
  }

  fill(255);
  rect(50, 100, 300, 30);
  fill(0);
  text("Sonido B", 60, 120);
  if(!playingB){
  triangle(320, 100+15-7, 320, 100+15+7, 330, 100+15);
  }else{
    fill(255,0,0);
    rectMode(CENTER);
    rect(325, 100+15, 15, 15);
    rectMode(CORNER);
  }

  fill(255);
  rect(50, 140, 300, 30);
  fill(0);
  text("Sonido C", 60, 160);
  if(!playingC){
    triangle(320, 140+15-7, 320, 140+15+7, 330, 140+15);
  }else{
    fill(255,0,0);
    rectMode(CENTER);
    rect(325, 140+15, 15, 15);
    rectMode(CORNER);
  }

  playingA = mySoundA.isPlaying();
  playingB = mySoundB.isPlaying();
  playingC = mySoundC.isPlaying();
}

function mousePressed(){
  console.log(mouseX, mouseY);
  if(mouseX > 50 && mouseX < 350
    && mouseY > 60 && mouseY < 90){
      mySoundA.play();
      console.log("A");
      //playingA = true;
  }

  if(mouseX > 50 && mouseX < 350
    && mouseY > 100 && mouseY < 130){
      mySoundB.play();
      console.log("B");
      //playingB = true;
  }

  if(mouseX > 50 && mouseX < 350
    && mouseY > 140 && mouseY < 170){
      mySoundC.play();
      console.log("C");
      //playingC = true;
  }

}



