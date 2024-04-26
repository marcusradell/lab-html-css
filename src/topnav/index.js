const links = [
  { name: "Home", href: "#" },
  { name: "Wishlist", href: "#wishlist" },
  { name: "Drawings", href: "#drawings" },
  {
    name: "Source Code",
    href: "https://github.com/marcusradell/lab-html-css",
    alignRight: true,
  },
];

const listItem = (name, href, alignRight, hash) => `
<li class="${alignRight ? "topnav-right-link-item" : "topnav-link-item"}">
  <a class="topnav-link ${
    href === hash || (href === "#" && hash === "") ? "topnav-link-active" : ""
  }" href="${href}">${name}</a></li>`;

window.router = (hash) => `
    <ul class="topnav-links">
      ${links
        .map((link) => listItem(link.name, link.href, link.alignRight, hash))
        .join("")}
    </ul>`;
