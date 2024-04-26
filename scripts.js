const route = () => {
  const { hash } = window.location;

  const routerElement = document.getElementById("router");
  routerElement.innerHTML = window.router(hash);

  const content = document.getElementById("content");
  content.innerHTML = getRoute(hash);
};

const getRoute = (hash) => {
  switch (hash) {
    case "":
    case "#":
      return window.welcomePage();
    case "#wishlist":
      return window.wishListPage();
    case "#drawings":
      return window.drawingsPage();
    default:
      return window.notFoundPage();
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
