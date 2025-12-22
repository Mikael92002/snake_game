export class gameBoard {
  grid;
  gridContainer;

  constructor() {
    this.gridContainer = document.querySelector("#grid");
    this.grid = [];
    for (let i = 0; i < 18; i++) {
      const gridDivContainer = document.createElement("div");
      gridDivContainer.classList.add("grid-div-container");
      for (let j = 0; j < 18; j++) {
        this.grid.push([j, i, null]); // put an object (apple, bomb) instead of false?

        const gridDiv = document.createElement("div");
        gridDiv.setAttribute("data-coords", [j, i]);
        gridDiv.classList.add("grid-div");
        gridDivContainer.append(gridDiv);
      }
      this.gridContainer.append(gridDivContainer);
    }
  }

  getCoords(x, y) {
    if ((x >= 0 || x <= 17) && (y >= 0 || y <= 17))
      return this.grid[x * 18 + y];
  }

  insertAtCoords(x, y, item) {
    if ((x >= 0 || x <= 17) && (y >= 0 || y <= 17))
      this.grid[x * 18 + y][2] = item;
  }

  deleteAtCoords(x, y) {
    if ((x >= 0 || x <= 17) && (y >= 0 || y <= 17))
      this.grid[x * 18 + y][2] = null;
  }
}
