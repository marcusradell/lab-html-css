const drawings = [{ src: "drawing1.png" }];

window.drawingsPage = () => `
    <h1 class="page-title">Drawings</h1>
    ${drawings
      .map(
        (drawing) => `<img class="drawing" src="${drawing.src}" alt="Drawing">`
      )
      .join("")}`;
