const welcomePage = () => `
    <h1 class="page-title">Home</h1>
    <p>Welcome to my page!</p>`;

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

const wishListPage = (wishes) => `
    <h1 class="page-title">Wishlist</h1>
    <ul class="wishlist">
    ${wishes
      .map((wish) => wishlistItem(wish.title, wish.image, wish.description))
      .join("")}
    </ul>`;

const drawings = [{ src: "drawing1.png" }];

const drawingsPage = () => `
    <h1 class="page-title">Drawings</h1>
    ${drawings
      .map(
        (drawing) => `<img class="drawing" src="${drawing.src}" alt="Drawing">`
      )
      .join("")}`;

const NotFoundPage = () => `<h1 class="page-title">404 - Page Not Found</h1>`;

const route = () => {
  const { hash } = window.location;
  const content = document.getElementById("content");

  content.innerHTML = getRoute(hash);
};

const getRoute = (hash) => {
  switch (hash) {
    case "":
    case "#":
      return welcomePage();
    case "#wishlist":
      return wishListPage(wishes);
    case "#drawings":
      return drawingsPage();
    default:
      return NotFoundPage();
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
