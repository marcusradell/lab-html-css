const main = () => {
  setInterval(() => {
    const { hash } = window.location;
    const content = document.getElementById("content");

    if (hash === "#drawings") {
      content.innerHTML = `
      <h1>Drawings</h1>
      <img class="drawing" src="drawing1.png">
      `;
    } else if (hash === "#wishlist") {
      content.innerHTML = `
      <h1>Wishlist</h1>
      <ul>
        <li>Armbandsur</li>
        <li>Ballerinaskor eller tofflor</li>
        <li>Sommarskor</li>
        <li>Sandaler</li>
      </ul>
      `;
    } else {
      content.innerHTML = "";
    }
  }, 50);
};

main();
