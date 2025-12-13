import { SnakeSection } from "./snakeSection.js";

export class Snake {
  head;
  tail;
  length;

  constructor() {
    this.head = this.tail = new SnakeSection([0, 0], "right");
  }

  addSection() {
    const newSection = new SnakeSection([
      this.tail.position[0],
      this.tail.position[1],
    ]);
  }

  determineNextSection() {
    if (this.head === this.tail) {
      if (this.head.direction === "right") {
        const newCoords = [this.head.position[0] - 1, this.head.position[1]];
        // note newCoords needs to be an array:
        const newSection = new SnakeSection(newCoords, "right");
      }
      else if(this.head.direction === "left"){
        const newCoords = [this.head.position[0]+1, this.head.position[1]];
        const newSection = new SnakeSection(this.validateCoords(newCoords), "left");
      }
    }
  }

  validateCoords(coords) {

  }
}
