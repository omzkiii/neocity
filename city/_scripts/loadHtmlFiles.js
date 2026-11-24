export async function listBlogs(folderUrl = new URL("/_blogs/", location.href)) {
  const base = new URL(folderUrl, location.href);
  if (!base.pathname.endsWith("/")) base.pathname += "/";

  const manifestUrl = new URL("index.json", base);
  const res = await fetch(manifestUrl);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${manifestUrl}`);

  const names = await res.json();
  if (!Array.isArray(names)) throw new Error(`Invalid manifest: ${manifestUrl}`);

  return Promise.all(
    names.map(async (name) => {
      const r = await fetch(new URL(name, base));
      if (!r.ok) throw new Error(`HTTP ${r.status} for ${name}`);
      const blog = new DOMParser().parseFromString(await r.text(), "text/html");
      return { name, body: blog.body.innerHTML };
    }),
  );
}
