const snakeHeadImg = new Image();
snakeHeadImg.src = "./assets/snake-head.png";
snakeHeadImg.classList.add("head");
const snakeTailImg = new Image();
snakeTailImg.src = "./assets/snake-tail.png";
snakeTailImg.classList.add("tail");

export class View {
  constructor() {
    this.startButton = document.querySelector(".start-button");
  }

  renderSnake(coordsArr, direction) {
    for (let i = 0; i < coordsArr.length; i++) {
      const gridDiv = document.querySelector(`[data-coords="${coordsArr[i]}"]`);
      if (i === 0) {
        const newHead = snakeHeadImg.cloneNode(true);
        newHead.classList.add(direction);
        gridDiv.append(newHead);
      }
      else if(i=== coordsArr.length-1){
        const newTail = snakeTailImg.cloneNode(true);
        // add direction!!!

      }
    }
  }

  clearSnake(coordsArr) {
    for (let i = 0; i < coordsArr.length; i++) {
      const gridDiv = document.querySelector(`[data-coords="${coordsArr[i]}"]`);
      if (gridDiv) {
        gridDiv.removeChild(gridDiv.firstChild);
      }
    }
  }
}
