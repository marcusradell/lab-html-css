const drawings = [{ src: "drawing1.png" }];

window.drawingsPage = () => `
    <h1 class="page-title">Drawings</h1>
    ${drawings
      .map(
        (drawing) =>
          `<img class="drawing" src="src/drawings/${drawing.src}" alt="Drawing">`
      )
      .join("")}`;
