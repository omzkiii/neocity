class MyCard extends HTMLElement {
  constructor() {
    super();
    // Attach a Shadow DOM to encapsulate styles and markup
    this.attachShadow({ mode: "open" });
    // Define the component's HTML and scoped CSS
    this.shadowRoot.innerHTML = `
      <style>
        .card {
          background: #ffffff;
          border: 1px solid #e1e4e8;
          border-radius: 0px;
          padding: 16px;
          font-family: sans-serif;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        p { color: #2b2a2d; font-size: 14px; }
      </style>
      <div class="card">
        <p><slot name="content"></slot></p>
      </div>
    `;
  }
}

// Register the new element with the browser
customElements.define("my-card", MyCard);
