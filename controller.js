export class Controller {
  view;
  model;
  musicPlaying;
  startButton;

  constructor(model, view) {
    this.view = view;
    this.model = model;
    this.musicPlaying = false;
    this.gameStarted = false;

    this.startButton = document.querySelector(".start-button");
    this.musicPlayer = document.querySelector("#musicplayer");
    this.directionQueue = null;

    this.startButton.addEventListener("click", () => {
      this.handleStartClick();
    });

    document.addEventListener("keydown", (e) => {
      this.directionQueue = e.key;
      // this.handleDirectionClick(e.key);
    });

    // for grow test:
    this.model.gameBoard.insertAtCoords(5, 0, "apple");
  }

  handleStartClick() {
    if (!this.musicPlaying) {
      this.musicPlayer.play().catch((error) => {
        console.error("Music playback failed", error);
      });
      this.musicPlaying = true;
    }

    this.gameStarted = true;
    this.startButton.classList.remove("visible");
    this.startButton.classList.add("clicked");

    setTimeout(() => {
      this.startButton.disabled = true;
    }, 1000);
    // initial render:
    this.view.renderSnake(
      this.model.getSnakeCoords(),
      this.model.currDirection
    );
    // movementLoop:
    this.moveLoop();
  }

  moveLoop() {
    setInterval(() => {
      if (this.directionQueue !== null) {
        this.handleDirectionClick(this.directionQueue);
        this.directionQueue = null;
      }
      let oldSnakeCoords = this.model.getSnakeCoords();
      this.view.clearSnake(oldSnakeCoords);
      let nextCoords = this.determineNextCoords(
        this.model.currDirection,
        this.model.head.position
      );
      this.validateCoords(nextCoords);
      if (
        this.model.gameBoard.getCoords(nextCoords[0], nextCoords[1])[2] ===
        "apple"
      ) {
        console.log("found");
        this.model.growSnake(nextCoords[0], nextCoords[1]);
      } else {
        this.model.moveSnake(nextCoords[0], nextCoords[1]);
      }

      this.view.renderSnake(
        this.model.getSnakeCoords(),
        this.model.currDirection
      );
    }, 100);
  }

  determineNextCoords(direction, coords) {
    switch (direction) {
      case "right":
        return [+coords[0] + 1, +coords[1]];
      case "left":
        return [+coords[0] - 1, +coords[1]];
      // y is inverted, hence y coords are inverted:
      case "up":
        return [+coords[0], +coords[1] - 1];
      case "down":
        return [+coords[0], +coords[1] + 1];
      default:
        throw new Error("Invalid direction" + direction);
    }
  }

  validateCoords(coords) {
    if (coords[0] > 24) {
      coords[0] = 0;
    } else if (coords[0] < 0) {
      coords[0] = 24;
    }
    if (coords[1] > 24) {
      coords[1] = 0;
    } else if (coords[1] < 0) {
      coords[1] = 24;
    }
  }

  handleDirectionClick(key) {
    if (key === "ArrowUp") {
      this.model.currDirection = "up";
    } else if (key === "ArrowDown") {
      this.model.currDirection = "down";
    } else if (key === "ArrowRight") {
      this.model.currDirection = "right";
    } else if (key === "ArrowLeft") {
      this.model.currDirection = "left";
    }
  }
}
