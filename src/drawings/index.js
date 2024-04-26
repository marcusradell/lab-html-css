import { pageTitle } from "../headings/index.js";

const drawings = [{ src: "drawing1.png", kid: "Sol" }];

export const drawingsPage = () => `
  ${pageTitle("Drawings")}
    ${drawings
      .map(
        (drawing) =>
          `<img class="drawing" src="src/drawings/images/${drawing.src}" alt="Drawing">`
      )
      .join("")}`;
