const main = () => {
  setInterval(() => {
    const { hash } = window.location;
    const content = document.getElementById("content");

    if (hash === "#drawings") {
      content.innerHTML = `<h1>Drawings</h1> <img class="drawing" src="drawing1.png">`;
    } else {
      content.innerHTML = "";
    }
  }, 50);
};

main();
