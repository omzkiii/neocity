import "./card.js";
import "./subcard.js";
import "./nav.js";
import { builder } from "./builder.js";
import { COLORS } from "../_constants/colors.js";
import { listBlogs } from "../_scripts/loadHtmlFiles.js";

const html = document.createElement("div");

html.innerHTML = `
  <style>
    #file-list {
      padding: 1rem;
      color: ${COLORS.primary_text};
    }
    #panel{
      position: absolute;
      left: -5vw;
      top: 10vh;
      min-width: 20vw;
      z-index: 2;
    }
    #header {
      font-size: 3rem;
      font-family: "Special Gothic Expanded One", sans-serif;
      text-align: right;
      padding: 1rem;
      color: ${COLORS.primary_text};
    }
    #blog-body img{
      display:block;
      width:100%;
      object-fit: cover;
    }

    #blog-body h1{
      font-family: "Special Gothic", sans-serif;
      color: ${COLORS.primary_text};
    }
    #blog-body {
      max-height: 80vh;
      overflow-y: auto;
      scrollbar-width: none;
      width: 70%;
      box-sizing: border-box;
      min-height: 0;
      overflow: scroll;
      font-family: "Courier Prime", sans-serif;
      color: ${COLORS.primary_text};
    }

    #blog-container {
      display: flex;
      justify-content: flex-end;
      min-height: 80vh;
      color: ${COLORS.primary_text};
    }

    a {
      font-family: "Courier Prime", sans-serif;
      text-decoration: none;
      color: ${COLORS.primary_text}
    }
  </style>
  <slot class="content">
    <div id="panel">
      <c-subcard>
        <div id="header">
          blogs
        </div>
        <div id="file-list"></div>
      </c-subcard>
    </div>
    <c-card>
      <div id="blog-container">
        <div id="blog-body"></div>
      <div>
    </c-card>
  </slot>
`;

builder("c-blogs", html, async (root) => {
  const blogs = await listBlogs().catch((err) => {
    console.error(err);
    return [];
  });
  const list = root.querySelector("#file-list");
  const blogBody = root.querySelector("#blog-body");
  const selectedPath = window.location.hash.split("/").at(-1);
  let selected = blogs[0];
  if (selectedPath !== "blogs") {
    selected = blogs.find((b) => b.name === selectedPath);
  }

  if (!selected) {
    list.innerHTML = "<p>no blogs available</p>";
    blogBody.innerHTML = "<p>blog not found</p>";
    return;
  }

  const stripExtension = (name) => {
    return name.replace(/\.html?$/i, "").replace(/_/g, " ");
  };

  list.innerHTML = blogs
    .map(
      (b) =>
        `<p data-name="${b.name}"
            style="font-weight:
              ${selected.name === b.name ? "bold" : "normal"};">
            <a href="#/blogs/${b.name}">> ${stripExtension(b.name)}</a>
        </p>`,
    )
    .join("");

  blogBody.innerHTML = selected.body;
});
