function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(0);
  ellipse(200,200,100,100);
  fill(255,180,0);
  ellipse(100,100,50,50);
  fill(255,250,0);
  ellipse(300,300,50,50);
  fill(120,180,0);
  ellipse(300,100,50,50);
  fill(255,180,180);
  ellipse(100,300,50,50);

  fill(255,0,0);
  arc(200,200,90,60,0,PI);

  strokeWeight(8);
  stroke(255);
  fill(0,0,255);
  triangle(200,100,150,150,250,150);
  noStroke();
}
