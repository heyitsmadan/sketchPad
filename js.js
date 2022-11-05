n=16;
squareWidth = 640/n;
const container = document.querySelector(".container");
for(i=1;i<=n*n;i++){
    let div = document.createElement("div");
    div.style.width=`${squareWidth}px`;
    div.style.height=`${squareWidth}px`;
    container.appendChild(div);
}