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

    this.startButton.addEventListener("click", () => {
      this.handleStartClick();
    });
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
    this.startButton.classList.add("invisible");

    setTimeout(() => {
      this.startButton.disabled = true;
    }, 1000);

    setInterval(() => {
      console.log("hi");
    }, 2500);
  }
}
