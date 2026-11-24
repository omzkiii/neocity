import "./card.js";
import "./subcard.js";
import "./nav.js";
import { COLORS } from "../_constants/colors.js";
import { builder } from "./builder.js";
import { updateNowPlaying } from "../_scripts/musicPlayer.js";

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
      font-family: "Courier Prime", sans-serif;
      color: ${COLORS.primary_text};
    }
    #main-card {
      padding: 5rem;
      padding-top: 1rem;
    }
    #nav {
      padding: 1rem;
    }

    #status {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      text-align: end;
      margin-top: 7rem;
      gap: 3rem;
    }
    #now-playing {
      width: auto;
      padding: 0.3rem;
      font-style: italic;
      background-color: ${COLORS.yellow_highlight};
    }
    #now-reading {
      width: auto;
      padding: 0.3rem;
      font-weight: bold;
      background-color: ${COLORS.blue_highlight};
    }
  </style>
  <slot class="content">
    <c-card>
      <div id="main-card">
        <div id="header">
          <p>geo's</p>
          <p>area*</p>
        </div>
        <div id="body">

          <div style="
              display: grid;
              grid-template-columns: 4fr 3fr;
            ">
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
            <div>
              <c-subcard>
                <div id="nav">
                  <c-nav></c-nav>
                </div>
              </c-subcard>
            </div>
          </div>


          <div id="status">
            <div>
              it’s currently <span id="phTime"></span><br>
              from where im from
            </div>
            <div>
              vibing at <span id="now-playing"></span>
            </div>
            <div>
              reading <span id="now-reading">the republic - plato</span>
            </div>
          </div>
        </div>
      </div>
    </c-card>
  </slot>
`;

builder("c-home", html, async (root) => {
  await updateNowPlaying(root.querySelector("#now-playing"));
  getPHTime(root.querySelector("#phTime"));

  setInterval(async () => {
    await updateNowPlaying(root.querySelector("#now-playing"));
    getPHTime(root.querySelector("#phTime"));
  }, 30000); // Poll every 30s
});

function getPHTime(el) {
  const now = new Date();
  const formatted = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Manila",
  }).format(now);
  el.textContent = formatted;
}
