import { COLORS } from "../constants/colors.js";
class SubCard extends HTMLElement {
  constructor() {
    super();
    // Attach a Shadow DOM to encapsulate styles and markup
    this.attachShadow({ mode: "open" });
    // Define the component's HTML and scoped CSS
    this.shadowRoot.innerHTML = `
      <style>
        .card {
          background: ${COLORS.component_background};
          border: 2px solid ${COLORS.primary_text};
          border-radius: 0px;
          padding: 5rem;
          padding-top: 1rem;
          font-family: "Courier Prime", sans-serif;
        }
      </style>
      <div class="card">
        <slot name="content"></slot>
      </div>
    `;
  }
}

// Register the new element with the browser
customElements.define("c-subcard", SubCard);
