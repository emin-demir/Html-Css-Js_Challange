const canvas = document.getElementById("canvas");
const incrase = document.getElementById("incrase");
const decrase = document.getElementById("decrase");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let size = 10;
let x = 50;
let y = 50;
let isPressed = false;
let color = "black";

clearEl.addEventListener("click", () => {
  ctx.clearRect(0, 0,canvas.width, canvas.height);
});

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

incrase.addEventListener("click", () => {
  if (size < 50) {
    size += 5;
    sizeEl.innerText = size;
  }
});

decrase.addEventListener("click", () => {
  if (size > 10) {
    size -= 5;
    sizeEl.innerText = size;
  }
});

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x, y)
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = color;
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
