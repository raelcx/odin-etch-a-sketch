function generateGrid() {
    const container = document.querySelector("#container");
    

    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("tile");
        div.setAttribute("draggable", "false");
        container.appendChild(div);
    }
}

function mouseHover() {

}

const mouseHoverOverTile = document.querySelector("#container");
mouseHoverOverTile.addEventListener("mouseover", (e) => {
    e.target.style["background-color"] = "black"
})

generateGrid()