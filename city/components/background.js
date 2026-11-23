import { COLORS } from "../constants/colors.js";
import { BACKGROUND_PHRASE } from "../constants/texts.js";
class Background extends HTMLElement {
  constructor() {
    super();
    // Attach a Shadow DOM to encapsulate styles and markup
    this.attachShadow({ mode: "open" });
    // Define the component's HTML and scoped CSS
    this.shadowRoot.innerHTML = `
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
        <slot class="content" name="content"></slot>
      </div>
    `;
    const p = this.shadowRoot.querySelector(".text");
    p.textContent = fillViewport(p);
  }
}
function fillViewport(container) {
  const phrase = BACKGROUND_PHRASE;
  let text = phrase;
  while (container.scrollHeight <= window.innerHeight * 1.15) {
    text += phrase;
    container.textContent = text;
  }
  return text;
}

// Register the new element with the browser
customElements.define("c-background", Background);
