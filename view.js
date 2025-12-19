const snakeHeadImg = new Image();
snakeHeadImg.src = "./assets/snake-head.png";
snakeHeadImg.classList.add("head");
const snakeTailImg = new Image();
snakeTailImg.src = "./assets/snake-tail.png";
snakeTailImg.classList.add("tail");
const snakeBody = new Image();
snakeBody.src = "./assets/snake-body.png";
snakeBody.classList.add("body");
const snakeTurn = new Image();
snakeTurn.src = "./assets/snake-turn.png";
snakeTurn.classList.add("turn");

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
      } else if (i === coordsArr.length - 1) {
        const newTail = snakeTailImg.cloneNode(true);
        // add direction!!!
        const direction = this.determineTailDirection(
          coordsArr[i],
          coordsArr[i - 1]
        );
        newTail.classList.add(direction);
        gridDiv.append(newTail);
      } else {
        let bodySection;
        const direction = this.determineBodyDirection(
          coordsArr[i - 1],
          coordsArr[i],
          coordsArr[i + 1]
        );
        if (direction === "horizontal" || direction === "vertical") {
          bodySection = snakeBody.cloneNode(true);
          bodySection.classList.add(direction);
        } else {
          bodySection = snakeTurn.cloneNode(true);
          bodySection.classList.add(direction);
        }
        gridDiv.append(bodySection);
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

  renderObject(objectCoords) {
    if(objectCoords !== null){
      
    }
  }

  clearObject(objectCoords) {
    if (objectCoords !== null) {
      const gridDiv = document.querySelector(`[data-coords="${objectCoords}"]`);
      if (gridDiv) {
        gridDiv.removeChild(gridDiv.firstChild);
      }
    }
  }

  determineTailDirection(tailCoords, coordsBeforeTail) {
    if (tailCoords[0] - coordsBeforeTail[0] < 0) {
      return "right";
    } else if (tailCoords[0] - coordsBeforeTail[0] > 0) {
      return "left";
    } else if (tailCoords[1] - coordsBeforeTail[1] > 0) {
      return "up";
    } else if (tailCoords[1] - coordsBeforeTail[1] < 0) {
      return "down";
    }
  }

  determineBodyDirection(prevCoords, currCoords, nextCoords) {
    const dxPrev = prevCoords[0] - currCoords[0];
    const dyPrev = prevCoords[1] - currCoords[1];
    const dxNext = nextCoords[0] - currCoords[0];
    const dyNext = nextCoords[1] - currCoords[1];

    if (dyPrev === 0 && dyNext === 0) return "horizontal";
    if (dxPrev === 0 && dxNext === 0) return "vertical";

    const isUp = dyPrev === -1 || dyNext === -1;
    const isDown = dyPrev === 1 || dyNext === 1;
    const isLeft = dxPrev === -1 || dxNext === -1;
    const isRight = dxPrev === 1 || dxNext === 1;

    if (isUp && isRight) return "turn-tr"; // Top-Right (┌)
    if (isRight && isDown) return "turn-br"; // Bottom-Right (┐)
    if (isDown && isLeft) return "turn-bl"; // Bottom-Left (┘)
    if (isLeft && isUp) return "turn-tl"; // Top-Left (└)

    return "horizontal";
  }
}
