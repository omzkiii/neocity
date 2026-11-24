import "../_components/home.js";
import "../_components/blogs.js";
import "../_components/card.js";
const main = document.querySelector("#main");

const routes = {
  "/": () => `<c-home></c-home>`,
  "/blogs": () => `<c-blogs></c-blogs>`
};

function getRoute() {
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw) return "/";
  return raw.startsWith("/") ? raw : `/${raw}`;
}

function render() {
  const path = getRoute();
  router(routes[path]);
}
function router(route) {
  const path = getRoute();
  if (route) {
    main.innerHTML = route(path);
  } else {
    main.innerHTML = `<c-card style="color: #000000;"><h1>404</h1><p>${path} not available</p><a href="#/">Go Home</a></c-card>`;
  }
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
