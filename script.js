function generateGrid() {
    const container = document.querySelector("#container");
    
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("tile");
        div.setAttribute("draggable", "false");
        container.appendChild(div);
    }
}

/* For now, the black color will only be set when hovering over the tile. 
In the future, I'm going to create a function that allows you to click and drag 
through the canvas to draw. */

const mouseHoverOverTile = document.querySelector("#container");
mouseHoverOverTile.addEventListener("mouseover", (e) => {
    e.target.style["background-color"] = "black"
})

generateGrid()