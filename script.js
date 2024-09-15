const container = document.querySelector(".container");
const gridSizeSlider = document.querySelector("#gridSize");
const gridSizeValue = document.querySelector("#gridSizeValue");
const resetAllBtn = document.querySelector("#resetAll");
const eraserToggleBtn = document.querySelector("#eraser");
const gridToggleBtn = document.querySelector("#showGrid");
const rainbowToggleBtn = document.querySelector("#rainbowMode");
const shadingToggleBtn = document.querySelector("#shadeMode");

let eraserIsOn = false;
let gridIsOn = true;
let mousePressed = false;
let rainbowIsOn = false;

container.addEventListener("mousedown", (e) => {
    mousePressed = true;
    e.preventDefault();
});
container.addEventListener("mouseup", () => {
    mousePressed = false;
});

// Initialize a grid of 16x16 squares
createGrid(parseInt(16));

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(n) {
    container.innerHTML = "";
    for (let i = 0; i < n*n; i++) {
        const grid = document.createElement("div")
        let basis = 75/n;
        grid.className = "grid-item";
        grid.style.flex = `0 0 ${basis}vh`;
        container.append(grid);

        grid.addEventListener('mouseenter', () => {
            if (mousePressed && eraserIsOn) {
                grid.style.backgroundColor = "white";
            }
            else if (mousePressed && !eraserIsOn) {
                if (rainbowIsOn) {
                    grid.style.backgroundColor = getRandomRGB();
                }
                else {
                    grid.style.backgroundColor = "black";
                }
            }
        });
        eraserIsOn = false;
        eraserToggleBtn.textContent = eraserIsOn ? 'Eraser: ON' : 'Eraser: OFF';
        eraserToggleBtn.style.color = eraserIsOn ? 'rgb(184, 0, 31)' : 'rgb(1, 1, 1)';
        grid.style.border = gridIsOn ? "1px solid rgb(211, 211, 211)" : "0px";
    }
}

rainbowToggleBtn.addEventListener('click', () => {
    rainbowIsOn = !rainbowIsOn;
    rainbowToggleBtn.textContent = rainbowIsOn ? 'Rainbow: ON' : 'Rainbow: OFF';
    rainbowToggleBtn.style.color = rainbowIsOn ? 'rgb(184, 0, 31)' : 'rgb(1,1,1)';
});

gridSizeSlider.addEventListener('input', (e) => {
    const newSize = e.target.value; // Get the new value of the slider
    createGrid(parseInt(newSize));
    gridSizeValue.textContent = `${newSize} x ${newSize}`;
});

gridToggleBtn.addEventListener('click', () => {
    const allGridItems = document.querySelectorAll(".grid-item");
    allGridItems.forEach(grid => {
        grid.style.border = gridIsOn ? "0px" : "1px solid rgb(211, 211, 211)";
    });
    gridIsOn = !gridIsOn;
    gridToggleBtn.textContent = gridIsOn ? 'Grid: ON' : 'Grid: OFF';
    gridToggleBtn.style.color = gridIsOn ? 'rgb(184, 0, 31)' : 'rgb(1, 1, 1)';
});

eraserToggleBtn.addEventListener('click', () => {
    eraserIsOn = !eraserIsOn;
    eraserToggleBtn.textContent = eraserIsOn ? 'Eraser: ON' : 'Eraser: OFF';
    eraserToggleBtn.style.color = eraserIsOn ? 'rgb(184, 0, 31)' : 'rgb(1, 1, 1)';
});

resetAllBtn.addEventListener("click", () => {
    const allGridItems = document.querySelectorAll(".grid-item");
    allGridItems.forEach(grid => {
        grid.style.backgroundColor = "white";
    });
    eraserIsOn = false;
    eraserToggleBtn.textContent = eraserIsOn ? 'Eraser: ON' : 'Eraser: OFF';
    eraserToggleBtn.style.color = eraserIsOn ? 'rgb(184, 0, 31)' : 'rgb(1, 1, 1)';
    rainbowIsOn = false;
    rainbowToggleBtn.textContent = rainbowIsOn ? 'Rainbow: ON' : 'Rainbow: OFF';
    rainbowToggleBtn.style.color = rainbowIsOn ? 'rgb(184, 0, 31)' : 'rgb(1, 1, 1)';
});





