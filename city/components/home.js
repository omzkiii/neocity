import "./card.js";
import "./subcard.js";
import { COLORS } from "../constants/colors.js";
class Home extends HTMLElement {
  constructor() {
    super();
    // Attach a Shadow DOM to encapsulate styles and markup
    this.attachShadow({ mode: "open" });
    // Define the component's HTML and scoped CSS
    this.shadowRoot.innerHTML = `
      <style>
        #header {
          font-size: 6rem;
          font-family: "Special Gothic Expanded One";
          text-align: right;
          color: ${COLORS.primary_text};
        }
        #header>p {
          margin: 0px;
          padding: 0px;
        }
        #body {
          font-size: 1.2rem;
          display: grid;
          grid-template-columns: 4fr 3fr;
          font-family: "Courier Prime", sans-serif;
          color: ${COLORS.primary_text};
        }
      </style>
      <slot name="content">
        <c-card>
          <div slot="content">
            <div id="header">
              <p>geo's</p>
              <p>area*</p>
            </div>
            <div id="body">
              <div>
                <p style="padding-bottom: 5rem">
                  <span>
                    hello my name is
                  </span>
                  <span style="text-decoration: underline; color: ${COLORS.text_red};">
                    geo<br>
                  </span>
                  <span>
                    and i’m a definitely a real<br>
                  </span>
                  <span style="font-style: italic;">
                    person
                  </span>
                </p>
                <p>
                  <span>
                    *place where I put things that I <br>
                    find interesting that I want to <br>
                    share to people :)
                  </span>
                </p>
              </div>
              <c-subcard>
                <div slot="content">
                </div>
              </c-subcard>
            </div>
          </div>
        </c-card>
      </slot>
    `;
  }
}

// Register the new element with the browser
customElements.define("c-home", Home);
