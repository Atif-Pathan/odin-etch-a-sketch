
const container = document.querySelector(".container");
const gridToggle = document.querySelector("#showGrid");

function createGrid(n) {
    for (let i = 0; i < n*n; i++) {
        const grid = document.createElement("div")
        let basis = 70/n;
        grid.className = "grid-item";
        grid.style.flex = `0 0 ${basis}vh`;
        container.append(grid);
    }
}

// userInput = prompt("How many squares per side do you want? (max = 100)")
document.addEventListener('DOMContentLoaded', createGrid(parseInt(5)));
gridToggle.addEventListener('click', () => {
    container.style.border = "0px transparent white";
})