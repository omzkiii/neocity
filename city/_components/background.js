import { COLORS } from "../_constants/colors.js";
import { BACKGROUND_PHRASE } from "../_constants/texts.js";
import { builder } from "./builder.js";

const html = document.createElement("div");
html.innerHTML = `
      <style>
        .card {
          font-family: sans-serif;
          width: 100vw;
          height: 100vh;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
          display: flex;
          padding-top: 7rem;
          justify-content: center;
          background: ${COLORS.background};
          color: ${COLORS.background_text};
        }
        .text {
          width: 109vw;
          font-family: "Courier Prime", sans-serif;
          padding: 0px;
          margin: 0px;
          font-size: 13px;
          line-height: 2.1;
          letter-spacing: 0.04em;
          word-spacing: 0.2em;
          user-select: none;
          overflow: hidden;
          position: absolute;
          z-index: 0;
          inset: 0;
        }
      </style>
      <div class="card">
        <div class="text"></div>
        <slot class="content"></slot>
      </div>
`;


function fillViewport(container) {
  const phrase = BACKGROUND_PHRASE;
  let text = phrase;
  while (container.scrollHeight <= window.innerHeight * 1.15) {
    text += phrase;
    container.textContent = text;
  }
  return text;
}

function callback(root) {
  const p = root.querySelector(".text");
  p = fillViewport(p);
}

builder("c-background", html, callback);
