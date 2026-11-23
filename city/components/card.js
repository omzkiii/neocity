import { COLORS } from "../constants/colors.js";
class Card extends HTMLElement {
  constructor() {
    super();
    // Attach a Shadow DOM to encapsulate styles and markup
    this.attachShadow({ mode: "open" });
    // Define the component's HTML and scoped CSS
    this.shadowRoot.innerHTML = `
      <style>
        .card {
          background: ${COLORS.component_background};
          border: 1px solid #e1e4e8;
          border-radius: 0px;
          padding: 5rem;
          padding-top: 1rem;
          font-family: sans-serif;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          width: 65vw;
        }
      </style>
      <div class="card">
        <slot name="content"></slot>
      </div>
    `;
  }
}

// Register the new element with the browser
customElements.define("c-card", Card);
