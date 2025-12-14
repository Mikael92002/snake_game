import { SnakeSection } from "./snakeSection.js";

export class Snake {
  head;
  tail;
  length;
  currDirection;

  constructor() {
    this.head = this.tail = new SnakeSection([0, 0]);
    this.currDirection = "right";
  }

  moveSnake(newX, newY) {
    const newSection = new SnakeSection([newX, newY]);
    if (this.head === this.tail) {
      this.head = this.tail = newSection;
      return;
    }
    newSection.nextSection = this.head;
    this.head.prevSection = newSection;
    this.head = newSection;
    this.tail = this.tail.prevSection;
    this.tail.nextSection = null;
  }

  validateCoords(coords) {
    if(coords[0] > 99){
      coords[0] = 0;
    }
    if(coords[0] < 0){
      coords[0] = 99;
    }
  }
}
