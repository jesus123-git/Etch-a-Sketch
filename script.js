const div = document.querySelector(".box-container");
const Selectsize = document.getElementById("size-select");
const square = document.querySelector(".square");
const resetButton = document.getElementById("reset");

function creategrid(size) {
    div.innerHTML = "";

    const squareSize = 20; 
    div.style.width = `${size * squareSize}px`;
    div.style.height = `${size * squareSize}px`;

    for (let index = 0; index < size * size; index++) {
        const box = document.createElement("div");
        box.classList.add("square");
        div.appendChild(box);
    }
}

creategrid(Selectsize.value);


Selectsize.addEventListener("change", () => {
    creategrid(Selectsize.value);
});

div.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("square")) {
        event.target.style.backgroundColor = "black";
    }
});


resetButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
});