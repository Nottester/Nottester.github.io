var canvas = document.getElementById("canvas");

if (canvas) {
  var ctx = canvas.getContext("2d");
  var isDrawing = false;

  canvas.addEventListener("mousedown", function(event) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(event.clientX, event.clientY);
  });

  canvas.addEventListener("mouseup", function() {
    isDrawing = false;
  });

  canvas.addEventListener("mousemove", function(event) {
    if (isDrawing) {
      ctx.lineTo(event.clientX, event.clientY);
      ctx.stroke();
    }
  });
}
