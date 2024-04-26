import { wishes } from "./wishes.js";
import { pageTitle } from "../headings/index.js";

const wishlistItem = ({ title, image, description, kid }) => `
  <li class="wishlist-item">
    <img class="wishlist-item-image" src="src/wishlist/images/${image}" alt="${title}">
    <div class="wishlist-item-body">
      <h2 class="wishlist-item-title">${title}</h2>  
      <p class="wishlist-item-description">${description}</p>
    </div>
    <img class="wishlist-item-image" src="src/wishlist/images/${kid.toLowerCase()}.png" alt="Wishlist icon">
</li>`;

export const wishListPage = () => `
  ${pageTitle("Wishlist")}
    <ul class="wishlist">
    ${wishes.map((wish) => wishlistItem(wish)).join("")}
    </ul>`;
