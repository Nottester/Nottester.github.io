var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var painting = false;
var x = 0;
var y = 0;
var color = "black";
var brushSize = 5;

// Set up the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Start drawing when the mouse is down
canvas.addEventListener("mousedown", function(event) {
  painting = true;
  x = event.clientX;
  y = event.clientY;
});

// Stop drawing when the mouse is up
canvas.addEventListener("mouseup", function() {
  painting = false;
});

// Draw a line as the mouse moves
canvas.addEventListener("mousemove", function(event) {
  if (painting) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(event.clientX, event.clientY);
    context.strokeStyle = color;
    context.lineWidth = brushSize;
    context.stroke();
    x = event.clientX;
    y = event.clientY;
  }
});

// Add a color picker
var colorPicker = document.createElement("input");
colorPicker.type = "color";
colorPicker.value = "black";
colorPicker.addEventListener("input", function(event) {
  color = event.target.value;
});
document.body.appendChild(colorPicker);

// Add a brush size picker
var brushSizePicker = document.createElement("input");
brushSizePicker.type = "range";
brushSizePicker.min = 1;
brushSizePicker.max = 50;
brushSizePicker.value = 5;
brushSizePicker.addEventListener("input", function(event) {
  brushSize = event.target.value;
});
document.body.appendChild(brushSizePicker);

// Add a clear button
var clearButton = document.createElement("button");
clearButton.innerHTML = "Clear";
clearButton.addEventListener("click", function() {
  context.clearRect(0, 0, canvas.width, canvas.height);
});
document.body.appendChild(clearButton);

