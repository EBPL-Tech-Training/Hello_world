var x=250;
var y=250;
var canvas;
var h1;
var circolor;
var button;
let img;



function setup() {
	canvas = createCanvas(400, 400);
	background(100);
	h1 = createElement("h1","i am h1");
	canvas.position(280,300);
	circolor = color(225,0,0);
	bgcolor = color(225,0,0);
	button = createButton("Press here");
	button.mousePressed(changeColor);
	button.position(350,250);
	img = loadImage("kitten-1285341_640.png"); // Load the image
}
function changeColor(){
	bgcolor = color(random(0,225),random(0,20),250);
}

// function mousePressed(){
// createP("My fav color");
// 	bgcolor = color(random(0,225),random(0,20),250);
// 	circolor = color(random(0,225),20,2500);
// }
function draw() {
	
	background(bgcolor);
	//fill(circolor);
	image(img, 0, 0);
	img.resize(200, 200);
	ellipse(x, y, 20, 20);
	h1.position(x,y);
	x = x+random(-10,10);
	y = y+ random(-10,10);
}