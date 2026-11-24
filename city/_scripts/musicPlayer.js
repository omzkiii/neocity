const LB_USERNAME = "omzki";

export async function updateNowPlaying(el) {
  try {
    let res = await fetch(
      `https://api.listenbrainz.org/1/user/${LB_USERNAME}/playing-now`,
    );
    let data = await res.json();
    let listens = data?.payload?.listens || [];
    let isLive = true;

    if (listens.length === 0) {
      res = await fetch(
        `https://api.listenbrainz.org/1/user/${LB_USERNAME}/listens?count=1`,
      );
      data = await res.json();
      listens = data?.payload?.listens || [];
      isLive = false;
    }

    if (listens.length > 0) {
      const meta = listens[0].track_metadata;
      // const status = isLive ? "vibing:" : "Last Played:";
      el.textContent = `${meta.track_name} — ${meta.artist_name}`;
    } else {
      el.textContent = "nothing at the moment";
    }
  } catch (err) {
    el.textContent = "nothing at the moment";
  }
}

