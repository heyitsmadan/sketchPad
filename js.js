n=16;
squareWidth = 640/n;
const container = document.querySelector(".container");

for(i=1;i<=n*n;i++){
    let div = document.createElement("div");
    div.classList.add("square");
    div.style.width=`${squareWidth}px`;
    div.style.height=`${squareWidth}px`;
    container.appendChild(div);
}

const squares = document.querySelectorAll(".square")
squares.forEach(square => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
    });
})

