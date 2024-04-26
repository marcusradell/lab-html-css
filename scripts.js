const wishes = [
  {
    title: "Wristwatch",
    image: "wristwatch.jpg",
    description: "The wristwatch she got from before doesn't work anymore.",
  },
  {
    title: "Ballerina shoes",
    image: "ballerina-shoes.jpg",
    description: "Either ballerina shoes, or slippers.",
  },
  {
    title: "Summer shoes",
    image: "summer-shoes.jpg",
    description:
      "Maybe dad or mom will buy her these anyhow, so she might not need to wish for them.",
  },
  {
    title: "Sandals",
    image: "sandals.webp",
    description: "This is a nice-to-have.",
  },
];

const wishlistItem = (title, image, description) => `
  <li class="wishlist-item">
    <h2 class="wishlist-item-title">${title}</h2>
    <div class="wishlist-item-body">
      <img class="wishlist-item-image" src="${image}" alt="${title}">
      <p class="wishlist-item-description">${description}</p>
    </div>
</li>`;

const wishList = (wishes) => `
    <h1 class="page-title">Wishlist</h1>
    <ul class="wishlist">
    ${wishes
      .map((wish) => wishlistItem(wish.title, wish.image, wish.description))
      .join("")}
    </ul>`;

const welcome = () => `
    <h1 class="page-title">Home</h1>
    <p>Welcome to my page!</p>`;

const pageNotFound = () => `<h1 class="page-title">404 - Page Not Found</h1>`;

const drawings = () => `
    <h1 class="page-title">Drawings</h1>
    <img class="drawing" src="drawing1.png">`;

const route = () => {
  const { hash } = window.location;
  const content = document.getElementById("content");

  if (hash === "#" || !hash) {
    content.innerHTML = welcome();
  } else if (hash === "#wishlist") {
    content.innerHTML = wishList(wishes);
  } else if (hash === "#drawings") {
    content.innerHTML = drawings();
  } else {
    content.innerHTML = pageNotFound();
  }
};

const main = () => {
  (() => {
    let oldPushState = history.pushState;
    history.pushState = function pushState() {
      let ret = oldPushState.apply(this, arguments);
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    };

    let oldReplaceState = history.replaceState;
    history.replaceState = function replaceState() {
      let ret = oldReplaceState.apply(this, arguments);
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    };

    window.addEventListener("popstate", () => {
      window.dispatchEvent(new Event("locationchange"));
    });
  })();

  route();

  window.addEventListener("locationchange", route);
};

main();
