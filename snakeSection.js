// acts as a node of a linked list

export class SnakeSection {
  position;
  nextSection;
  prevSection;

  constructor(position) {
    // position is coords in x,y:
    this.position = position;
    this.nextSection = null;
    this.prevSection = null;
  }

  getPosition() {
    return this.position;
  }
}
