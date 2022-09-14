let posX = 20;
let tam = 20;
let creciendo = true;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(0);

  fill(0,10);
  rect(0,0,400,400);

  if(posX > 0 && posX < 133){
    fill(255,255,0);
  } else if(posX >= 133 && posX < 266){
    fill(150,150,255);
  } else {
    fill(255,0,0);
  }

  if(posX>=200){
    creciendo = false;
  }

  noStroke();
  //fill(random(255),random(255),random(255));
  //stroke(255);
  //strokeWeight(8);
  ellipse(posX,200,tam,tam);
  posX = posX + 10;
  if(creciendo === true){
    tam *= 1.1;
  }else{
    tam *= 0.9;
  }

  if(posX>415){
    posX = -15;
    tam = 20;
    creciendo = true;
  }

}
