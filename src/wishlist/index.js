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
      <img class="wishlist-item-image" src="src/wishlist/${image}" alt="${title}">
      <p class="wishlist-item-description">${description}</p>
    </div>
</li>`;

window.wishListPage = () => `
    <h1 class="page-title">Wishlist</h1>
    <ul class="wishlist">
    ${wishes
      .map((wish) => wishlistItem(wish.title, wish.image, wish.description))
      .join("")}
    </ul>`;
