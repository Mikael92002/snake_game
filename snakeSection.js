// acts as a node of a linked list

export class SnakeSection {
  position;
  nextSection;
  prevSection;
  direction;

  constructor(position, direction) {
    // position is coords in x,y:
    this.position = position;
    this.orientation = direction;
    this.nextSection = null;
    this.prevSection = null;
  }

  getPosition() {
    return this.position;
  }
}
