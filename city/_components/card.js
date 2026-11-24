import { COLORS } from "../_constants/colors.js";
import { builder } from "./builder.js";

const html = document.createElement("div");
html.innerHTML = `
      <style>
        .card {
          background: ${COLORS.component_background};
          border: 1px solid #e1e4e8;
          border-radius: 0px;
          font-family: sans-serif;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          width: 65vw;
        }
      </style>
      <div class="card">
        <slot class="content"></slot>
      </div>
    `;

builder("c-card", html);
