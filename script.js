const grids = document.querySelector(".grids");
const sliderElement = document.querySelector(".slider");
const sliderValElement = document.querySelector(".slider-value");

let color = "#000";
let mouseDown = false;

document.body.onmousedown = (e) => {
    mouseDown = true;
};
document.body.onmouseup = (e) => {
    mouseDown = false;
};

sliderElement.addEventListener("input", () => {
    displaySliderValue();
    numberOfGrid = sliderElement.value;
    grids.innerHTML = "";
    generateGrids(numberOfGrid);
});

// Generates NxN grid
function generateGrids(N) {
    const totalN = N * N;

    grids.style.cssText = `grid-template-columns: repeat(${N}, 1fr); grid-template-rows: repeat(${N}, 1fr)`;

    for (let i = 0; i < totalN; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");

        grid.addEventListener("mouseover", (e) => {
            if (mouseDown) {
                e.target.style.backgroundColor = color;
            }
        });
        grids.append(grid);
    }
}

function displaySliderValue() {
    sliderValElement.textContent = `${sliderElement.value}`;
}

displaySliderValue();
generateGrids(sliderElement.value);
