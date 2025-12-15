export class gameBoard {
  grid;

  constructor() {
    this.grid = [];
    for (let i = 0; i < 100; i++) {
      for (let y = 0; y < 100; y++) {
        this.grid.push([i, y, false]);
      }
    }
  }

  getCoords(x, y) {
    return this.grid[x * 100 + y];
  }
}
