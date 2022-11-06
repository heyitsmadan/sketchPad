const container = document.querySelector(".container");
container.style.width=`${Math.floor(screen.width*30/100)}px`;
container.style.height=`${Math.floor(screen.width*30/100)}px`;
drawGrid(16);
paintGrid();

let mouseDown = false;
let useEraser = false;

document.body.onmousedown = () => mouseDown=true;
document.body.onmouseup = () => mouseDown=false;

function drawGrid(n){
    while(container.hasChildNodes()){
        let square = document.querySelector(".square");
        container.removeChild(square);
    }
    squareWidth = Math.floor(Math.floor(screen.width*30/100)/n);
    for(i=1;i<=n*n;i++){
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width=`${squareWidth}px`;
    square.style.height=`${squareWidth}px`;
    square.style.userSelect="none";
    container.appendChild(square);
    }
}

function paintGrid(){
    const squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.addEventListener("mouseenter", () => {
            if(mouseDown && !useEraser)
            square.style.backgroundColor = "black";
            else if(mouseDown && useEraser)
            square.style.backgroundColor = "white";
        })
        square.addEventListener("mousedown", () => {
            if(!useEraser)
            square.style.backgroundColor = "black";
            else if(useEraser)
            square.style.backgroundColor = "white"; 
        })
    })
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    do{
    n = prompt("What should the grid size be? (Enter a number less than 100 to not crash the browser)");
    }while(n>100);
    drawGrid(n);
    paintGrid();    
})

const clear = document.querySelector(".clear")
clear.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    })
})


const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', () => {
    useEraser = !useEraser;
    if(useEraser)
    eraser.textContent = "Eraser ON";
    else
    eraser.textContent = "Eraser OFF";
})
