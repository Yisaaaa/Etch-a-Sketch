const grids = document.querySelector(".grids");
const sliderElement = document.querySelector(".slider");
const sliderValElement = document.querySelector(".slider-value");
const colorPickerElement = document.querySelector(".color-picker");
const clearBtnElement = document.querySelector(".btn--clear");
const randomBtnelement = document.querySelector(".btn--random");

let color = "#000";
let mouseDown = false;
let btnSelected = "";

document.body.onmousedown = (e) => {
    mouseDown = true;
};
document.body.onmouseup = (e) => {
    mouseDown = false;
};

sliderElement.addEventListener("input", () => {
    displaySliderValue();
    clearGrid();
    generateGrids(sliderElement.value);
});

colorPickerElement.addEventListener("input", (e) => {
    color = e.target.value;
});

clearBtnElement.addEventListener("click", () => {
    clearGrid();
    generateGrids(sliderElement.value);
});

randomBtnelement.addEventListener("click", () => {
    updateBtnSelected(randomBtnelement);
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
                fillGrid(e);
            }
        });
        grids.append(grid);
    }
}

function fillGrid(e) {
    if (btnSelected === randomBtnelement) {
        const rgb = generateRandomColor();
        e.target.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        return;
    }
    e.target.style.backgroundColor = color;
}

function displaySliderValue() {
    sliderValElement.textContent = `${sliderElement.value}`;
}

function clearGrid() {
    grids.innerHTML = "";
    console.log("cleared");
}

function generateRandomColor() {
    const min = 0;
    const max = 256;
    let r = Math.floor(Math.random() * (max - min) + min);
    let g = Math.floor(Math.random() * (max - min) + min);
    let b = Math.floor(Math.random() * (max - min) + min);

    return [r, g, b];
}

function updateBtnSelected(btn) {
    if (btnSelected) {
        btnSelected.classList.remove("selected");
        if (btnSelected === btn) {
            btnSelected = "";
            return;
        }
    }
    btnSelected = randomBtnelement;
    btnSelected.classList.add("selected");
}

displaySliderValue();
generateGrids(sliderElement.value);
