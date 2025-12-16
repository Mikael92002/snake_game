export class gameBoard {
  grid;
  gridContainer;

  constructor() {
    this.gridContainer = document.querySelector("#grid");
    this.grid = [];
    for (let i = 0; i < 100; i++) {
      const gridDivContainer = document.createElement("div");
      gridDivContainer.style.display = "flex";
      for (let y = 0; y < 100; y++) {
        this.grid.push([i, y, false]);
        const gridDiv = document.createElement("div");
        gridDiv.setAttribute("data-coords", [i,y]);
        gridDiv.style.padding = "3px";
        gridDiv.style.border = "0.5px solid black";
        gridDivContainer.append(gridDiv);
      }
      this.gridContainer.append(gridDivContainer);
    }
  }

  getCoords(x, y) {
    if ((x >= 0 || x <= 99) && (y >= 0 || y <= 99))
      return this.grid[x * 100 + y];
  }
}
