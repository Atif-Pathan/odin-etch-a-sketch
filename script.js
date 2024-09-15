const container = document.querySelector(".container");
const gridSizeSlider = document.querySelector("#gridSize");
const gridSizeValue = document.querySelector("#gridSizeValue");
const resetAllBtn = document.querySelector("#resetAll");
const eraserToggleBtn = document.querySelector("#eraser");
const gridToggleBtn = document.querySelector("#showGrid");
const rainbowToggleBtn = document.querySelector("#rainbowMode");
// const shadingToggleBtn = document.querySelector("#shadeMode");
const colorPicked = document.querySelector("#colorPicker");

let eraserIsOn = false;
let gridIsOn = true;
gridToggleBtn.style.color = gridIsOn ? 'rgb(184, 0, 31)' : 'rgb(1, 1, 1)';
let mousePressed = false;
let rainbowIsOn = false;
let currentColor = "rgba(1, 1, 1, 0.99)";
// let shadeIsOn = false;

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

// function rgbToRgbA(rgb, a) {
//     const rgbValues = rgb.match(/\d+/g);
//     a = Math.max(0, Math.min(1, a)); // Clamp alpha value between 0 and 1
//     const rgba = `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, ${a})`;
//     return rgba;
// }

// function extractRgbAndAlpha(rgba) {
//     const rgbaValues = rgba.match(/\d+(\.\d+)?/g);

//     // If the rgbaValues array is not of length 4, it's not a valid rgba input
//     if (!rgbaValues || rgbaValues.length !== 4) {
//         console.error('Invalid RGBA input');
//         return null;
//     }

//     const rgb = `rgb(${rgbaValues[0]}, ${rgbaValues[1]}, ${rgbaValues[2]})`;
//     const alpha = parseFloat(rgbaValues[3]);

//     return {rgb, alpha};
// }

// function incrementOpacity(currentOpacity) {
//     if (currentOpacity < 1) {
//         currentOpacity += 0.1;
//     }
//     return currentOpacity;
// }

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
                    grid.style.backgroundColor = currentColor;
                }
            }
        });
        eraserIsOn = false;
        eraserToggleBtn.textContent = eraserIsOn ? 'Eraser: ON' : 'Eraser: OFF';
        eraserToggleBtn.style.color = eraserIsOn ? 'rgb(184, 0, 31)' : 'rgb(1, 1, 1)';
        grid.style.border = gridIsOn ? "1px solid rgb(211, 211, 211)" : "0px";
    }
}

// shadingToggleBtn.addEventListener('click', () => {
//     shadeIsOn = !shadeIsOn;
//     shadingToggleBtn.textContent = shadeIsOn ? 'Shading: ON' : 'Shading: OFF';
//     shadingToggleBtn.style.color = shadeIsOn ? 'rgb(184, 0, 31)' : 'rgb(1,1,1)';
// })

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

colorPicked.addEventListener('input', (e) => {
    currentColor = e.target.value;
})

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





