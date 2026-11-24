import "./card.js";
import "./subcard.js";
import "./nav.js";
import { builder } from "./builder.js";

const html = document.createElement("div");
html.innerHTML = `
  <style>
  </style>
  <slot class="content">
    <c-card>
      <div>
      BLOGS
        </div>
    </c-card>
  </slot>
`;

builder("c-blogs", html);
