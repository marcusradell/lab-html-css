const main = () => {
  setInterval(() => {
    const { hash } = window.location;
    const content = document.getElementById("content");

    if (hash === "#drawings") {
      content.innerHTML = `
      <h1 class="page-title">Drawings</h1>
      <img class="drawing" src="drawing1.png">
      `;
    } else if (hash === "#wishlist") {
      content.innerHTML = `
      <h1 class="page-title">Wishlist</h1>
      <ul>
        <li>Armbandsur</li>
        <li>Ballerinaskor eller tofflor</li>
        <li>Sommarskor</li>
        <li>Sandaler</li>
      </ul>
      `;
    } else if (hash === "#" || !hash) {
      content.innerHTML = `
        <h1 class="page-title">Home</h1>
        <p>Welcome to my page!</p>
        `;
    } else {
      content.innerHTML = `<h1 class="page-title">404 - Page Not Found</h1>`;
    }
  }, 50);
};

main();
