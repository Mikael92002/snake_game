export class gameBoard {
  grid;
  bodyElement;

  constructor() {
    this.bodyElement = document.querySelector("body");
    this.grid = [];
    for (let i = 0; i < 100; i++) {
      const gridDivContainer = document.createElement("div");
      gridDivContainer.style.display = "flex";
      gridDivContainer.style.border = "1px solid black"
      for (let y = 0; y < 100; y++) {
        this.grid.push([i, y, false]);
        const gridDiv = document.createElement("div");
        gridDiv.setAttribute("data-coords", [i,y]);
        gridDiv.style.border = "1px solid red"
        gridDiv.style.padding = "2px";
        gridDivContainer.append(gridDiv);
      }
      this.bodyElement.append(gridDivContainer);
    }
  }

  getCoords(x, y) {
    if ((x >= 0 || x <= 99) && (y >= 0 || y <= 99))
      return this.grid[x * 100 + y];
  }
}
