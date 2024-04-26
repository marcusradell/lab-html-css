import { pageTitle } from "../headings/index.js";

const drawings = [{ src: "drawing1.png" }];

export const drawingsPage = () => `
  ${pageTitle("Drawings")}
    ${drawings
      .map(
        (drawing) =>
          `<img class="drawing" src="src/drawings/${drawing.src}" alt="Drawing">`
      )
      .join("")}`;
