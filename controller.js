export class Controller {
  view;
  model;

  constructor(model, view) {
    this.view = view;
    this.model = model;

    this.startButton = document.querySelector(".start-button");
    this.musicPlayer = document.querySelector("#musicplayer");

    this.startButton.addEventListener("click", () => {
      this.musicPlayer.play().catch((error) => {
        console.error("Music playback failed", error);
      });
    });
  }

  handleStartClick() {}
}
