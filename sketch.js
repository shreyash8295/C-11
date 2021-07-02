var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

  btn_GREEN = createButton("RED");
  btn_GREEN.position(100,50);
  btn_GREEN.mousePressed(red_bg);

  btn_RED = createButton("GREEN");
  btn_RED.Position(250,50);
  btn_RED.mousePressed(green_bg);
}

function draw() {
  background(r,g,b);
  function red_bg()
  {
    r = 255;
    g = 0;
    b = 0;
  }
  

}