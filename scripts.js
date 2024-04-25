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
      <ul class="wishlist">
        <li class="wishlist-item">
            <h2 class="wishlist-item-title">Wristwatch</h2>
            <div class="wishlist-item-body">
                <img class="wishlist-item-image" src="wristwatch.jpg" alt="Wristwatch">
                <p class="wishlist-item-description">The wristwatch she got from before doesn't work anymore.</p>
            </div>
        </li>
        <li class="wishlist-item">
            <h2 class="wishlist-item-title">Ballerina shoes</h2>
            <div class="wishlist-item-body">
                <img class="wishlist-item-image" src="ballerina-shoes.jpg" alt="Ballerina shoes">
                <p class="wishlist-item-description">Either ballerina shoes, or slippers.</p>
            </div>
        </li>
        <li class="wishlist-item">
            <h2 class="wishlist-item-title">Summer shoes</h2>
            <div class="wishlist-item-body">
                <img class="wishlist-item-image" src="summer-shoes.jpg" alt="Summer shoes">
                <p>Maybe dad or mom will buy her these anyhow, so she might not need to wish for them.</p>
            </div>
        </li>
        <li class="wishlist-item">
            <h2  class="wishlist-item-title">Sandals</h2>
            <div class="wishlist-item-body">
                <img class="wishlist-item-image" src="sandals.webp" alt="Sandals">
                <p>This is a nice-to-have.</p>
            </div>
        </li>
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
