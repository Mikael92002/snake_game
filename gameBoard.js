export class gameBoard {
  grid;

  constructor() {
    this.grid = [];
    for (let i = 0; i < 99; i++) {
      for (let y = 0; y < 99; y++) {
        this.grid.push([i, y], null);
      }
    }
  }
}
