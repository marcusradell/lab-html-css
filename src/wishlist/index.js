import { wishes } from "./wishes.js";

const wishlistItem = ({ title, image, description, kid }) => `
  <li class="wishlist-item">
    <img class="wishlist-item-image" src="src/wishlist/${image}" alt="${title}">
    <div class="wishlist-item-body">
      <h2 class="wishlist-item-title">${title}</h2>  
      <p class="wishlist-item-description">${description}</p>
    </div>
    <img class="wishlist-item-image" src="src/wishlist/${kid.toLowerCase()}.png" alt="Wishlist icon">
</li>`;

export const wishListPage = () => `
  ${window.pageTitle("Wishlist")}
    <ul class="wishlist">
    ${wishes.map((wish) => wishlistItem(wish)).join("")}
    </ul>`;
