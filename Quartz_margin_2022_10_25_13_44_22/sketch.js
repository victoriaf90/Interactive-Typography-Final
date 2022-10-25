var slider1;
var angle_rotate = 0;
var rotation_speed = 1;
var colorPicker;
var colorPicker2;
//var inp;
//let txt;

var textin = "Hello";

function setup(){
  // ...creating the canvas
  createCanvas(windowWidth, windowHeight);
    
  // ...creating the interactions
  slider1 = createSlider(0, 100, 1, 0.01);
  slider1.position(10, 10);
  slider1.style('width', '100px');

  colorPicker = createColorPicker("#FFFF");
  colorPicker.position(10, 40);
  colorPicker.style("width", "100px");

  colorPicker2 = createColorPicker("#0000");
  colorPicker2.position(10, 80);
  colorPicker2.style("width", "100px");

  //inp = createInput(textin);
  //inp.position(10, 120);
  //inp.size(93);
  //inp.input(myInputEvent);

}

// ...making them work 
function draw(){
  clear();
  background(colorPicker.color());
  
  translate(windowWidth / 2, windowHeight / 2);
  rotate(radians(angle_rotate * slider1.value()));
  textFont('Avenir');
  textStyle(BOLD);
  textSize(200);
  textAlign(CENTER, CENTER);
  text('Hello', 0, 0);
  fill(colorPicker2.color());

  angle_rotate += 0.25;




//function myInputEvent() {
  //txt.clear();
  //textin = this.value();
}

function windowResized() {
  clear();
  resizeCanvas(windowWidth, windowHeight);
  
}
