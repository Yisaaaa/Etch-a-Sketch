const grids = document.querySelector(".grids");
let color = "#000";
let mouseDown = false;

document.body.onmousedown = (e) => {
    mouseDown = true;
};
document.body.onmouseup = (e) => {
    mouseDown = false;
};

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

generateGrids(16);
