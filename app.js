const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 60;
canvas.height = 400;

let context = canvas.getContext('2d');
context.fillStyle = "white";
context.fillRect(0,0, canvas.width, canvas.height);

let drawColor = 'black';
let drawWidth = '2';
let isDrawing = false;

function changeColor(element){
    drawColor = element.style.backgroundColor;
}

canvas.addEventListener("touchstart", start, false)
canvas.addEventListener("touchmove", draw, false)
canvas.addEventListener("mousedown", start, false)
canvas.addEventListener("mousemove", draw, false)

canvas.addEventListener("touchend", stop, false)
canvas.addEventListener("mouseup", stop, false)
canvas.addEventListener("mouseout", stop, false)

function start(event){
    isDrawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    event.preventDefault();
}

function draw(event){
    if(isDrawing == true){
        context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop)
        context.strokeStyle = drawColor;
        context.lineWidth = drawWidth;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke()
    }
}

function stop(event){
    if(isDrawing){
        context.stroke();
        context.closePath();
        isDrawing = false;
    }
    event.preventDefault();
}

function clearCanvas(){
    
}