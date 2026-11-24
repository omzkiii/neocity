import { builder } from "./builder.js";
import { COLORS } from "../_constants/colors.js";

const navItems = [
  { title: "blogs", path: "/blogs" },
  { title: "photo album", path: "/photos" },
  { title: "musics that i like", path: "/musics" },
  { title: "films that i like", path: "/films" },
];

const html = document.createElement("div");
html.innerHTML = `
  <style>
  a {
    font-family: "Courier Prime", sans-serif;
    font-size: 1.5rem;
    text-decoration: none;
    color: ${COLORS.primary_text}
  }
  </style>

  <slot class="content">
    ${navItems.map((n) => `<p><a href="/#${n.path}"> > ${n.title}</a></p>`).join("")}
  </slot>
`;

builder("c-nav", html);
