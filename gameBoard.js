export class gameBoard {
  grid;
  gridContainer;

  constructor() {
    this.gridContainer = document.querySelector("#grid");
    this.grid = [];
    for (let i = 0; i < 25; i++) {
      const gridDivContainer = document.createElement("div");
      gridDivContainer.classList.add("grid-div-container");
      for (let j = 0; j < 25; j++) {
        this.grid.push([j, i, false]); // put an object (apple, bomb) instead of false?

        const gridDiv = document.createElement("div");
        gridDiv.setAttribute("data-coords", [j,i]);
        gridDiv.classList.add("grid-div");
        gridDivContainer.append(gridDiv);
      }
      this.gridContainer.append(gridDivContainer);
    }
  }

  getCoords(x, y) {
    if ((x >= 0 || x <= 24) && (y >= 0 || y <= 24))
      return this.grid[x * 25 + y];
  }
}