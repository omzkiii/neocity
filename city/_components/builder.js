import { COLORS } from "../_constants/colors.js";

const BASE_STYLES = `
  ::slotted(*) {
    position: relative;
    z-index: auto;
  }

  p {
    padding: 0px;
    margin: 0px;
  }

  a {
    font-family: "Courier Prime", sans-serif;
    text-decoration: none;
    color: ${COLORS.primary_text}
  }
`;

export function builder(name, html, onConnect) {
  class Component extends HTMLElement {
    constructor() {
      super();
      // Attach a Shadow DOM to encapsulate styles and markup
      this.attachShadow({ mode: "open" });
      // this.shadowRoot.append(html)
      this.shadowRoot.innerHTML = `<style>${BASE_STYLES}</style>\n${html.innerHTML}`;
    }
    connectedCallback() {
      onConnect?.(this.shadowRoot);
    }
  }

  // Register the new element with the browser
  customElements.define(name, Component);
}
