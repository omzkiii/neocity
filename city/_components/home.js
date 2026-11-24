import "./card.js";
import "./subcard.js";
import "./nav.js";
import { COLORS } from "../_constants/colors.js";
import { builder } from "./builder.js";

const html = document.createElement("div");
html.innerHTML = `
  <style>
    #header {
      font-size: 6rem;
      font-family: "Special Gothic Expanded One";
      text-align: right;
        margin-bottom: 2rem;
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
  <slot class="content">
    <c-card>
      <div>
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
                share :)
              </span>
            </p>
          </div>
          <c-subcard>
            <c-nav></c-nav>
          </c-subcard>
        </div>
      </div>
    </c-card>
  </slot>
`;

builder("c-home", html);
