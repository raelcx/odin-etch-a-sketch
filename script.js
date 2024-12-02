function getNumberToGenerateGrid() {
    let number = prompt("Type a number from 1 to 100 to generate the grid.");
    if (number < 1 || number > 100) {
        alert("Choose only between 1 and 100!");
        return;
    }
    return generateGrid(number);
}

function regenerateGrid() {
    const masterContainer = document.querySelector("#master-container");
    let container = document.querySelector("#container");
    container.remove();
    container = document.createElement("div");
    container.setAttribute("id", "container");
    masterContainer.appendChild(container);

    return getNumberToGenerateGrid();
}

function generateGrid(number) {
    let gridSize = Number(number * number);
    const container = document.querySelector("#container");
    let tileSize = 720 / number;
    console.log(tileSize);

    
    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("tile");
        div.style["height"] = `${tileSize}px`
        div.style["width"] = `${tileSize}px`
        div.setAttribute("draggable", "false");
        container.appendChild(div);
    }

    const mouseHoverOverTile = document.querySelector("#container");
    mouseHoverOverTile.addEventListener("mouseover", (e) => {
    e.target.style["background-color"] = "black"
})
}

/* For now, the black color will only be set when hovering over the tile. 
In the future, I'm going to create a function that allows you to click and drag 
through the canvas to draw. */

const btnClick = document.querySelector('#btn');
btnClick.addEventListener("click", (e) => regenerateGrid())

getNumberToGenerateGrid()