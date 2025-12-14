import { View } from "./view.js";
import { Snake } from "./snake.js";
import { Controller } from "./controller.js";
import { gameBoard } from "./gameBoard.js";

const app = new Controller(new Snake(), new View());