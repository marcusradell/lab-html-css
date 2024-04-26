import { wishListPage } from "./wishlist/index.js";
import { drawingsPage } from "./drawings/index.js";
import { welcomePage } from "./welcome/index.js";
import { notFoundPage } from "./not-found/index.js";
import { topNav } from "./top-nav/index.js";

const route = () => {
  const { hash } = window.location;

  const routerElement = document.getElementById("top-nav");
  routerElement.innerHTML = topNav(hash);

  const content = document.getElementById("content");
  content.innerHTML = getRoute(hash);
};

const getRoute = (hash) => {
  switch (hash) {
    case "":
    case "#":
      return welcomePage();
    case "#wishlist":
      return wishListPage();
    case "#drawings":
      return drawingsPage();
    default:
      return notFoundPage();
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
