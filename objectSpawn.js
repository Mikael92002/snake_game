export class ObjectSpawn {
  position;
  objectType;
  snakeCoords;

  constructor(snakeCoords) {
    let randomObj = Math.random();
    this.objectType = randomObj > 0.1 ? "apple" : "bomb";
    let positionCoords = [];
    while(true){
        let randomX = this.getRandomInt(25);
        let randomY = this.getRandomInt(25);
        if(!this.includesCoords(this.snakeCoords, [randomX, randomY])){
            this.position = [randomX, randomY];
            break;
        }
    }
  }

  clearPosition() {
    this.position = null;
  }

  getPosition() {
    return this.position;
  }

  getRandomInt(max){
    return Math.floor(Math.random() * max);
  }

  includesCoords(snakeCoordsArr, givenCoords){
    for(coords of snakeCoordsArr){
        if(coords[0] === givenCoords[0] && coords[1] === givenCoords[1]){
            return true;
        }
    }
    return false;
  }
}
