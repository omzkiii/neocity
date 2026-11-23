// const BASE_STYLES = `
//   ::slotted(*) {
//     position: relative;
//     z-index: auto;
//   }
// `;

export function builder(name, html, onConnect) {
  class Component extends HTMLElement {
    constructor() {
      super();
      // Attach a Shadow DOM to encapsulate styles and markup
      this.attachShadow({ mode: "open" });
      this.shadowRoot.append(html)
      // this.shadowRoot.innerHTML = `<style>${BASE_STYLES}</style>\n${html.innerHTML}`;
    }
    connectedCallback() {
      onConnect?.(this.shadowRoot);
    }
  }

  // Register the new element with the browser
  customElements.define(name, Component);
}
