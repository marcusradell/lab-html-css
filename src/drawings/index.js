const drawings = [{ src: "drawing1.png" }];

window.drawingsPage = () => `
  ${window.pageTitle("Drawings")}
    ${drawings
      .map(
        (drawing) =>
          `<img class="drawing" src="src/drawings/${drawing.src}" alt="Drawing">`
      )
      .join("")}`;
