const wishes = [
  {
    title: "Wristwatch",
    image: "wristwatch.jpg",
    description: "The wristwatch she got from before doesn't work anymore.",
    kid: "Sol",
  },
  {
    title: "Ballerina shoes",
    image: "ballerina-shoes.jpg",
    description: "Either ballerina shoes, or slippers.",
    kid: "Sol",
  },
  {
    title: "Summer shoes",
    image: "summer-shoes.jpg",
    description:
      "Maybe dad or mom will buy her these anyhow, so she might not need to wish for them.",
    kid: "Sol",
  },
  {
    title: "Sandals",
    image: "sandals.webp",
    description: "This is a nice-to-have.",
    kid: "Sol",
  },
  {
    title: "Dinosaur",
    image: "dinosaur.jpg",
    description: "Dan wants it.",
    kid: "Dan",
  },
  {
    title: "Supervillain action figure",
    image: "supervillain.jpg",
    description: "Dan wants one of them.",
    kid: "Dan",
  },
  {
    title: "Spider-man series action figure",
    image: "spider-man-series-hero.jpg",
    description: "Dan wants a hero to fight the villain.",
    kid: "Dan",
  },
];

const wishlistItem = (title, image, description) => `
  <li class="wishlist-item">
    <h2 class="wishlist-item-title">${title}</h2>
    <div class="wishlist-item-body">
      <img class="wishlist-item-image" src="src/wishlist/${image}" alt="${title}">
      <p class="wishlist-item-description">${description}</p>
    </div>
</li>`;

window.wishListPage = () => `
  ${window.pageTitle("Wishlist")}
    <ul class="wishlist">
    ${wishes
      .map((wish) => wishlistItem(wish.title, wish.image, wish.description))
      .join("")}
    </ul>`;
