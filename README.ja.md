# LRC

LRCは、音楽の歌詞を記述するフォーマットをパース／文字列化するライブラリです。

## 使い方

```js
import { LRC } from "https://code4fukui.github.io/LRC/LRC.js";

const lrc = `
[ti: title by name]

[00:00.00] a
[00:01.00] b
[01:01.00] c
`;
console.log(LRC.parse(lrc));

const data = {
  title: "title by name",
  lyrics: [
    { t:     0, lyrics: "a" },
    { t:  1000, lyrics: "b" },
    { t: 61000, lyrics: "c" },
  ],
};
console.log(LRC.stringify(data));
```

## 参考

- [LRC (ファイルフォーマット)](https://en.wikipedia.org/wiki/LRC_(file_format))

## ライセンス

MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
