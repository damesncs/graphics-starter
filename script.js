let canvas;
let ctx;

window.onload = draw;

function draw() {
    canvas = document.getElementById("canvas");
    canvas.width = 500;
    canvas.height = 500;
    ctx = canvas.getContext("2d");
    
    drawCanvasBorder();
    
    drawRect(10, 10, 50, 50, "green");
    drawCircle(60, 60, 20, "red");
}

function drawRect(x, y, width, height, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawCircle(x, y, radius, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}

function drawCanvasBorder(){
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}
