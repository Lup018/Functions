let greenSquare = document.querySelector("#greenSquare");
greenSquare.style.backgroundColor = "green";
let yellowSquare = document.querySelector("#yellowSquare");
yellowSquare.style.backgroundColor = "yellow";
let redSquare = document.querySelector("#redSquare");
redSquare.style.backgroundColor = "red";
let orangeSquare = document.querySelector("#orangeSquare");
orangeSquare.style.backgroundColor = "orange";

let changeColor = "";

document.addEventListener("keydown", function(event) {
    if (event.key === "a") {
        changeColor = "black";
    } else if (event.key === "s") {
        changeColor = "grey";
    } else if (event.key === "d") {
        changeColor = "blue";
    }

    changeClick(greenSquare, changeColor);
    changeClick(yellowSquare, changeColor);
    changeClick(redSquare, changeColor);
    changeClick(orangeSquare, changeColor);
});

let changeClick = (element, color) => {
    element.addEventListener("click", (e) => {
        element.style.backgroundColor = color;
    });
};
