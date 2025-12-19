export class ObjectSpawn {
  position;
  objectType;
  set;

  constructor(set) {
    this.set = set;
    this.objectType = null;
    this.position = null;
  }

  spawnObject(){
    let randomObj = Math.random();
    this.objectType = randomObj > 0.1 ? "apple" : "bomb";
    let randomIndex = this.getRandomInt(set.size);
    const width = 25;
    const x = randomIndex % width;
    const y = Math.floor(randomIndex / width);
    this.position = [x, y];
  }

  clearObject() {
    this.position = null;
    this.objectType = null;
  }

  getPosition() {
    return this.position;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  includesCoords(snakeCoordsArr, givenCoords) {
    for (coords of snakeCoordsArr) {
      if (coords[0] === givenCoords[0] && coords[1] === givenCoords[1]) {
        return true;
      }
    }
    return false;
  }
}
