const tagmap = {
  ti: "title",
  al: "album",
  au: "author",
  lr: "lyricist",
  by: "author",
  re: "tool",
  ve: "version",
};

const parseTag = (s) => {
  const tagval = s.match(/\[(.+)\:\s*(.+)\]/);
  if (!tagval) return null;
  const tag0 = tagval[1];
  const tag = tagmap[tag0] ? tagmap[tag0] : tag0;
  const res = {};
  res[tag] = tagval[2];
  return res;
};

const parseLyrics = (s) => {
  const n = s.match(/\[(\d\d)\:(\d\d)\.(\d\d)\]\s*(.*)/);
  if (!n) return null;
  const msec = (parseInt(n[1]) * 60 + parseInt(n[2])) * 1000 + parseInt(n[3]) * 10;
  return { t: msec, lyrics: n[4] };
};

export const formatTime = (t) => {
  const fix2 = n => n < 10 ? "0" + n : n;
  const m = Math.floor(t / (60 * 1000));
  const s = Math.floor((t / 1000) % 60);
  const msec = t / 10 % 100;
  return fix2(m) + ":" + fix2(s) + "." + fix2(msec);
};

export class LRC {
  static parse(lrctxt) {
    const ss = lrctxt.split("\n");
    const lyrics = [];
    const res = {};
    for (const s of ss) {
      if (s.length == 0) continue;
      if (s[0] == "#") continue; // comment
      if (s[0] != "[") continue;
      const l = parseLyrics(s);
      if (l) {
        lyrics.push(l);
      } else {
        const tagval = parseTag(s);
        if (tagval) {
          Object.assign(res, tagval);
        }
      }
    }
    res.lyrics = lyrics;
    return res;
  }
  static stringify(lrc) {
    const ss = [];
    for (const name in lrc) {
      if (name == "lyrics") continue;
      let tag = name;
      for (const n in tagmap) {
        if (tagmap[n] == name) {
          tag = n;
          break;
        }
      }
      const val = lrc[name];
      ss.push(`[${tag}: ${val}]`);
    }
    ss.push("");
    const lyrics = lrc.lyrics;
    for (const lyric of lyrics) {
      ss.push(`[${formatTime(lyric.t)}] ${lyric.lyrics}`);
    }
    return ss.join("\n") + "\n";
  }
}
