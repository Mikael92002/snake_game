import { SnakeSection } from "./snakeSection.js";
import { gameBoard } from "./gameBoard.js";

export class Snake {
  head; // head also acts as prevCoords to determine next coords
  tail;
  length;
  currDirection;
  gameBoard;

  constructor(gameBoard) {
    this.gameBoard = gameBoard;
    this.head = this.tail = new SnakeSection([0, 0]);
    this.currDirection = "right";
  }

  // use either moveSnake or growSnake depending if apple is present or not:
  moveSnake(newX, newY) {
    // if getCoords(x,y)[2] !== apple, move || if(getCoords(x,y)[2] === bomb, end game
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
    // if getCoords(x,y)[2] === apple, grow
    const newSection = new SnakeSection([newX, newY]);
    newSection.nextSection = this.head;
    this.head.prevSection = newSection;
    this.head = newSection;
  }

  changeDirection(input) {
    this.currDirection = input;
  }

  // used with view to render snake/ clear snake:
  getSnakeCoords() {
    let headCopy = this.head;
    let arr = [];

    while (headCopy !== null) {
      arr.push(headCopy.position);
      headCopy = headCopy.nextSection;
    }
    return arr;
  }
}
