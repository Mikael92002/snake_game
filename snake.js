import { SnakeSection } from "./snakeSection.js";
import { gameBoard } from "./gameBoard.js";

export class Snake {
  head;
  tail;
  length;
  currDirection;
  gameBoard;

  constructor(gameBoard) {
    this.gameBoard = gameBoard;
    this.head = this.tail = new SnakeSection([0, 0]);
    this.currDirection = "right";
    console.log(this.gameBoard.getCoords(10, 0));
  }

  // use either moveSnake or growSnake depending if apple is present or not:
  moveSnake(newX, newY) {
    // if getCoords(x,y)[2] === false, move
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

  growSnake(newX, newY) {
    // if getCoords(x,y)[2] === true, grow
    const newSection = new SnakeSection([newX, newY]);
    newSection.nextSection = this.head;
    this.head.prevSection = newSection;
    this.head = newSection;
  }

  changeDirection(input){
    this.currDirection = input;
  }

  // wrap around coords:
  validateCoords(coords) {
    if (coords[0] > 99) {
      coords[0] = 0;
    } else if (coords[0] < 0) {
      coords[0] = 99;
    }
    if (coords[1] > 99) {
      coords[1] = 0;
    } else if (coords[0] < 0) {
      coords[0] = 99;
    }
  }
}
