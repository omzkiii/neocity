export async function listBlogs(folderUrl = new URL("./_blogs/", location.href)) {
  const base = new URL(folderUrl, location.href);
  const res = await fetch(folderUrl);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const html = await res.text();
  const doc = new DOMParser().parseFromString(html, "text/html");

  const names = Array.from(doc.querySelectorAll("a"))
    .map((a) => a.getAttribute("href") || "")
    .map((href) => href.split("?")[0].split("#")[0])
    .filter((name) => /\.html?$/i.test(name) && !name.endsWith("/"))
    .map((name) => decodeURIComponent(name.split("/").pop()));

  return Promise.all(
    names.map(async (name) => {
      const r = await fetch(new URL(name, base));
      if (!r.ok) throw new Error(`HTTP ${r.status} for ${name}`);
      const blog = new DOMParser().parseFromString(await r.text(), "text/html");
      return { name, body: blog.body.innerHTML };
    }),
  );
}
